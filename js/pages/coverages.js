import COVERAGES from '../data/coverages.js';
import DEFENSIVE_PLAYS from '../data/defensive-plays.js';
import { DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PlayArtRenderer } from '../components/playArt.js';

// Build lookup: coverageName -> Set of defensive playbook names containing it
function buildDefPlaybookLookup() {
  const byName = {};
  const byFull = {};
  for (const book of DEFENSIVE_PLAYBOOKS) {
    for (const [formation, subs] of Object.entries(book.formations || {})) {
      for (const [subFormation, plays] of Object.entries(subs)) {
        for (const play of plays) {
          const key = play.toLowerCase();
          if (!byName[key]) byName[key] = new Set();
          byName[key].add(book.name);
          const fullKey = `${formation}|${subFormation}|${play}`.toLowerCase();
          if (!byFull[fullKey]) byFull[fullKey] = new Set();
          byFull[fullKey].add(book.name);
        }
      }
    }
  }
  return { byName, byFull };
}
const DEF_PLAYBOOK_LOOKUP = buildDefPlaybookLookup();

function getDefPlaybooks(covName, formation, subFormation) {
  // Full identity match if context provided
  if (formation && subFormation) {
    const fullKey = `${formation}|${subFormation}|${covName}`.toLowerCase();
    const fullMatch = DEF_PLAYBOOK_LOOKUP.byFull[fullKey];
    if (fullMatch && fullMatch.size > 0) return [...fullMatch].sort();
  }
  const key = covName.toLowerCase().replace(/\s*\([^)]*\)/, '').trim();
  const exact = DEF_PLAYBOOK_LOOKUP.byName[key];
  if (exact) return [...exact].sort();
  const sigWords = key.replace(/^cover\s+/, '').split(/\s+/).filter(w => w.length > 0);
  const matches = new Set();
  for (const [k, books] of Object.entries(DEF_PLAYBOOK_LOOKUP.byName)) {
    if (k.includes(key) || key.includes(k)) {
      for (const b of books) matches.add(b);
      continue;
    }
    if (sigWords.length > 0 && sigWords.every(w => k.includes(w))) {
      for (const b of books) matches.add(b);
    }
  }
  return [...matches].sort();
}

// Build aggregated formation tree from all defensive playbooks
function buildFormationData() {
  const tree = {};
  for (const pb of DEFENSIVE_PLAYBOOKS) {
    for (const [fm, subs] of Object.entries(pb.formations || {})) {
      if (!tree[fm]) tree[fm] = {};
      for (const [sf, plays] of Object.entries(subs)) {
        if (!tree[fm][sf]) tree[fm][sf] = new Set();
        for (const p of plays) tree[fm][sf].add(p);
      }
    }
  }
  for (const fm of Object.keys(tree)) {
    for (const sf of Object.keys(tree[fm])) {
      tree[fm][sf] = [...tree[fm][sf]].sort();
    }
  }
  return tree;
}

const treeEl = document.getElementById('coverageTree');
const modal = document.getElementById('coverageModal');
const modalContent = document.getElementById('coverageModalContent');
const searchInput = document.getElementById('coverageSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const shellFilter = document.getElementById('shellFilter');

let activeFilter = 'all';
let activeShell = 'all';
let renderers = [];
let visibleGroups = null;
let animSpeed = 4000;
let liveAnimEnabled = true;
let cardObservers = [];

const isTouchDevice = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;

function cleanup() {
  renderers.forEach(r => r.destroy());
  renderers = [];
  cardObservers.forEach(obs => obs.disconnect());
  cardObservers = [];
}

function getTypeClass(type) {
  if (type === 'Man') return 'man';
  if (type === 'Zone') return 'zone';
  if (type === 'Zone Match') return 'zone-match';
  return 'hybrid';
}

function findCoverage(name) {
  if (!name) return null;
  const nl = name.toLowerCase().trim();
  // Strip formation suffix (e.g. "- Nickel 2", "- Dime", "- 4-2")
  let base = nl.replace(/\s*-\s*(nickel|dime|quarter|3-3|4-2|dollar)\s*\d*$/i, '').trim();
  // Strip presnap presentation modifiers (e.g. "Show 2" is a disguise, not the coverage)
  base = base.replace(/\s+show\s+\d+/i, '').trim();

  // 1. Exact match
  const exact = COVERAGES.find(c => c.name.toLowerCase() === base);
  if (exact) return exact;

  // 2. Match by ID
  const byId = COVERAGES.find(c => base.replace(/\s+/g, '') === c.id);
  if (byId) return byId;

  // 3. Leading number = "Cover X ..."
  const numPrefix = base.match(/^(\d)\s+(.*)/);
  if (numPrefix) {
    const coverNum = numPrefix[1];
    const remainder = numPrefix[2];
    const expanded = 'cover ' + coverNum + ' ' + remainder;
    const sorted = [...COVERAGES].sort((a, b) => {
      const al = a.name.replace(/\s*\([^)]*\)/, '').trim().length;
      const bl = b.name.replace(/\s*\([^)]*\)/, '').trim().length;
      return bl - al;
    });
    const remWords = remainder.split(/\s+/).filter(w => w.length > 1);
    let bestCov = null, bestScore = 0;
    for (const c of sorted) {
      const cn = c.name.replace(/\s*\([^)]*\)/, '').trim().toLowerCase();
      if (!cn.startsWith('cover ' + coverNum)) continue;
      if (cn === expanded || expanded.startsWith(cn + ' ')) {
        const score = 100 + cn.length;
        if (score > bestScore) { bestScore = score; bestCov = c; }
      }
      const wordScore = remWords.filter(w => cn.includes(w)).length;
      if (wordScore > 0 && wordScore > bestScore) { bestScore = wordScore; bestCov = c; }
    }
    if (bestCov) return bestCov;

    // Keyword matching for common coverage variants
    const kwMap = ['robber', 'hole', 'invert', 'man', 'press', 'palms', 'match', 'cloud', 'sky', 'buzz', 'sink', 'lurk', 'hard flat', 'drop', 'zone'];
    for (const kw of kwMap) {
      if (remainder.includes(kw)) {
        const kwMatch = COVERAGES.find(c => c.name.toLowerCase().includes('cover ' + coverNum) && c.name.toLowerCase().includes(kw));
        if (kwMatch) return kwMatch;
      }
    }

    const baseCover = COVERAGES.find(c => c.name.toLowerCase().replace(/\s*\([^)]*\)/, '').trim() === 'cover ' + coverNum);
    if (baseCover) return baseCover;
  }

  // 4. "Cover X ..." format already in name
  const coverMatch = base.match(/^cover\s+(\d)\s*(.*)/);
  if (coverMatch) {
    const coverNum = coverMatch[1];
    const remainder = coverMatch[2].trim();
    // Try exact match with "Cover X remainder"
    const exactCover = COVERAGES.find(c => c.name.toLowerCase().replace(/\s*\([^)]*\)/, '').trim() === base);
    if (exactCover) return exactCover;
    // Try keyword matching
    if (remainder) {
      const kwMatch = COVERAGES.find(c => {
        const cn = c.name.toLowerCase();
        return cn.startsWith('cover ' + coverNum) && remainder.split(/\s+/).some(w => w.length > 1 && cn.includes(w));
      });
      if (kwMatch) return kwMatch;
    }
    const baseCover = COVERAGES.find(c => c.name.toLowerCase().replace(/\s*\([^)]*\)/, '').trim() === 'cover ' + coverNum);
    if (baseCover) return baseCover;
  }

  // 5. Longest coverage name substring match
  let best = null, bestLen = 0;
  for (const c of COVERAGES) {
    const cn = c.name.split('(')[0].trim().toLowerCase();
    if (base.includes(cn) && cn.length > bestLen) { best = c; bestLen = cn.length; }
  }
  if (best) return best;

  // 6. Special defense names and keyword mapping
  const specialMap = {
    'fire zone': 'cover 2 zone', 'mid blitz': 'cover 0', 'tampa': 'tampa',
    'prevent': 'prevent', 'bracket': 'cover 2 man', 'double': 'cover 2 man',
    'blitz': 'cover 0', 'zero blitz': 'cover 0', 'edge blitz': 'cover 1',
    'pinch': 'cover 1', 'overload': 'cover 1', 'storm': 'cover 1',
    'inverted': 'cover 2 invert', 'spy': 'cover 1', 'qb spy': 'cover 1',
    'quarters': 'cover 4', 'palms': 'cover 4 palms', 'max': 'cover 0',
    'sugar': 'cover 0'
  };
  for (const [kw, target] of Object.entries(specialMap)) {
    if (base.includes(kw)) {
      const match = COVERAGES.find(c => c.name.toLowerCase().includes(target));
      if (match) return match;
    }
  }
  return COVERAGES.find(c => c.name.toLowerCase().includes(base)) || null;
}

function renderCardCanvas(canvas) {
  if (canvas.dataset.rendered) return;
  canvas.dataset.rendered = '1';
  const cardEl = canvas.closest('.play-card');
  const fm = cardEl.dataset.formation;
  const sf = cardEl.dataset.subformation;
  const pn = cardEl.dataset.play;
  const r = new PlayArtRenderer(canvas, { width: 500, height: 350 });
  r.renderCoverageCard(fm, pn, sf || undefined);
  canvas.style.maxWidth = '100%';
  canvas.style.height = 'auto';
  renderers.push(r);
}

function activateCard(card) {
  if (!liveAnimEnabled || card._hoverActive || !card.isConnected) return;
  card._hoverActive = true;
  const canvas = card.querySelector('.play-art-canvas');
  const fm = card.dataset.formation;
  const sf = card.dataset.subformation;
  const pn = card.dataset.play;
  if (!canvas || !pn) return;

  const r = new PlayArtRenderer(canvas, { width: 500, height: 350 });
  r.renderSinglePlayLive({
    mode: 'defense',
    defFormation: fm,
    defSubFormation: sf || undefined,
    coverageName: pn,
    duration: animSpeed,
    visibleGroups
  });
  card._renderer = r;
  renderers.push(r);
  card.classList.add('live-active');
}

function deactivateCard(card) {
  if (!card._hoverActive) return;
  card._hoverActive = false;
  if (card._renderer) {
    card._renderer.destroy();
    renderers = renderers.filter(r => r !== card._renderer);
    card._renderer = null;
    const canvas = card.querySelector('.play-art-canvas');
    if (canvas) {
      delete canvas.dataset.rendered;
      renderCardCanvas(canvas);
    }
  }
  card.classList.remove('live-active');
}

function buildTree(filter, search, shell) {
  cleanup();
  treeEl.innerHTML = '';
  const data = buildFormationData();
  const lower = (search || '').toLowerCase();
  const isFiltered = lower || filter !== 'all' || shell !== 'all';

  Object.entries(data).sort(([a], [b]) => a.localeCompare(b)).forEach(([formation, subs]) => {
    const filteredSubs = {};
    for (const [subName, plays] of Object.entries(subs)) {
      const matched = plays.filter(p => {
        const cov = findCoverage(p);
        // Search matches play name, formation, subformation, or coverage description
        if (lower && !p.toLowerCase().includes(lower)
            && !formation.toLowerCase().includes(lower)
            && !subName.toLowerCase().includes(lower)) {
          if (!cov || !cov.description.toLowerCase().includes(lower)) return false;
        }
        if (filter !== 'all') {
          if (!cov || cov.type !== filter) return false;
        }
        if (shell !== 'all') {
          if (!cov || !cov.shell || !cov.shell.includes(shell === 'Mixed' ? 'Mixed' : shell)) return false;
        }
        return true;
      });
      if (matched.length) filteredSubs[subName] = matched;
    }
    if (!Object.keys(filteredSubs).length) return;

    const totalPlays = Object.values(filteredSubs).reduce((sum, plays) => sum + plays.length, 0);

    const group = document.createElement('div');
    group.className = 'formation-group animate-fade-in';

    group.innerHTML = `
      <div class="formation-header" data-formation="${formation}">
        <div class="flex items-center gap-3">
          <i class="bi bi-shield-fill text-[#FF1493]"></i>
          <span class="font-bold">${formation}</span>
          <span class="text-xs text-gray-500">${Object.keys(filteredSubs).length} sets &middot; ${totalPlays} plays</span>
        </div>
        <i class="bi bi-chevron-down chevron text-gray-500"></i>
      </div>
      <div class="formation-body">
        ${Object.entries(filteredSubs).sort(([a], [b]) => a.localeCompare(b)).map(([subName, plays]) => `
          <div class="sub-formation">
            <div class="sub-formation-header" data-sub="${subName}">
              <div class="sub-formation-name">${subName} <span class="text-gray-600 text-xs">(${plays.length})</span></div>
              <i class="bi bi-chevron-down chevron text-gray-500"></i>
            </div>
            <div class="sub-formation-body">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${plays.map(play => {
                const cov = findCoverage(play);
                return `
                <div class="play-card" data-play="${play}" data-formation="${formation}" data-subformation="${subName}">
                  <div class="play-art-wrapper">
                    <canvas class="play-art-canvas" width="500" height="350"></canvas>
                    <div class="play-art-live-badge"><i class="bi bi-broadcast"></i> LIVE</div>
                  </div>
                  <div class="card-info">
                    <div class="flex items-center justify-between mb-1">
                      <h3 class="font-bold text-lg truncate">${play}</h3>
                      <div class="flex items-center gap-1 flex-shrink-0 ml-2">
                        ${cov ? `<span class="text-xs px-1.5 py-0.5 rounded bg-dark-700 text-gray-400 border border-dark-600">${cov.shell}</span>` : ''}
                        ${cov ? `<span class="type-badge ${getTypeClass(cov.type)}">${cov.type}</span>` : ''}
                      </div>
                    </div>
                    ${cov ? `<p class="text-gray-400 text-xs mb-2 line-clamp-2">${cov.description}</p>` : ''}
                    ${cov ? `
                    <div class="mb-2">
                      <span class="text-xs text-gray-500 font-semibold">STOPS:</span>
                      <div class="mt-1 flex flex-wrap">${cov.stops.slice(0, 4).map(s => `<span class="tag-green">${s}</span>`).join('')}
                      ${cov.stops.length > 4 ? `<span class="tag-green">+${cov.stops.length - 4}</span>` : ''}</div>
                    </div>
                    <div>
                      <span class="text-xs text-gray-500 font-semibold">WEAK TO:</span>
                      <div class="mt-1 flex flex-wrap">${cov.beatenBy.slice(0, 4).map(b => `<span class="tag-red">${b}</span>`).join('')}
                      ${cov.beatenBy.length > 4 ? `<span class="tag-red">+${cov.beatenBy.length - 4}</span>` : ''}</div>
                    </div>` : ''}
                  </div>
                </div>`;
              }).join('')}
            </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    treeEl.appendChild(group);
  });

  if (treeEl.children.length === 0) {
    treeEl.innerHTML = '<div class="text-center text-gray-500 py-12">No coverages match your search.</div>';
    return;
  }

  // If searching/filtering, auto-open all formations and sub-formations
  if (isFiltered) {
    treeEl.querySelectorAll('.formation-body').forEach(b => b.classList.add('open'));
    treeEl.querySelectorAll('.formation-header').forEach(h => h.classList.add('open'));
    treeEl.querySelectorAll('.sub-formation-body').forEach(b => b.classList.add('open'));
    treeEl.querySelectorAll('.sub-formation-header').forEach(h => h.classList.add('open'));
    treeEl.querySelectorAll('.play-card .play-art-canvas').forEach(canvas => renderCardCanvas(canvas));
    reconnectCardObservers();
  }

  // Formation accordion behavior
  treeEl.querySelectorAll('.formation-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const wasOpen = body.classList.contains('open');
      if (!isFiltered) {
        treeEl.querySelectorAll('.formation-body').forEach(b => b.classList.remove('open'));
        treeEl.querySelectorAll('.formation-header').forEach(h => h.classList.remove('open'));
        // Also close all sub-formations when switching formations
        treeEl.querySelectorAll('.sub-formation-body').forEach(b => b.classList.remove('open'));
        treeEl.querySelectorAll('.sub-formation-header').forEach(h => h.classList.remove('open'));
      }
      if (!wasOpen) {
        body.classList.add('open');
        header.classList.add('open');
      } else {
        body.classList.remove('open');
        header.classList.remove('open');
      }
      reconnectCardObservers();
    });
  });

  // Sub-formation accordion behavior
  treeEl.querySelectorAll('.sub-formation-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const body = header.nextElementSibling;
      const wasOpen = body.classList.contains('open');
      if (!wasOpen) {
        body.classList.add('open');
        header.classList.add('open');
        body.querySelectorAll('.play-card .play-art-canvas').forEach(canvas => renderCardCanvas(canvas));
        reconnectCardObservers();
      } else {
        body.classList.remove('open');
        header.classList.remove('open');
        reconnectCardObservers();
      }
    });
  });

  // Card click and hover/touch
  treeEl.querySelectorAll('.play-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const pn = card.dataset.play;
      const cov = findCoverage(pn);
      const variants = cov ? DEFENSIVE_PLAYS.filter(dp => dp.coverageFamily === cov.name.split('(')[0].trim() || dp.coverage === cov.name || dp.coverageFamily === cov.name) : [];
      openModal(cov, variants, card.dataset.formation, card.dataset.subformation, pn);
    });

    if (isTouchDevice) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activateCard(card);
          else deactivateCard(card);
        });
      }, { threshold: 0.5 });
      observer.observe(card);
      cardObservers.push(observer);
    } else {
      card.addEventListener('mouseenter', () => activateCard(card));
      card.addEventListener('mouseleave', () => deactivateCard(card));
    }
  });
}

function reconnectCardObservers() {
  cardObservers.forEach(obs => obs.disconnect());
  cardObservers = [];
  if (!isTouchDevice) return;
  treeEl.querySelectorAll('.formation-body.open .play-card').forEach(card => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activateCard(card);
        else deactivateCard(card);
      });
    }, { threshold: 0.5 });
    observer.observe(card);
    cardObservers.push(observer);
  });
}

function openModal(cov, variants, formation, subFormation, exactPlayName) {
  cleanup();
  const covDefFormation = formation || 'Nickel';
  const covDefSubFormation = subFormation || '';

  if (!cov) {
    modalContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-black">${exactPlayName || 'Unknown Coverage'}</h2>
        <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
      </div>
      <p class="text-gray-400">No detailed coverage data available. This may be a blitz package or specialized call.</p>
    `;
    modal.classList.add('active');
    modalContent.querySelector('#closeModal').addEventListener('click', closeModal);
    return;
  }

  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${cov.name}</h2>
        <div class="flex items-center gap-2 mt-1">
          <span class="type-badge ${getTypeClass(cov.type)}">${cov.type}</span>
          <span class="text-sm text-gray-400">${cov.shell}</span>
        </div>
      </div>
      <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>

    <div class="flex justify-center mb-3">
      <div class="inline-flex rounded-lg overflow-hidden border border-dark-600" id="covSideToggle">
        <button class="side-btn" data-side="offense"><i class="bi bi-lightning-fill mr-1"></i>Run Offense</button>
        <button class="side-btn active" data-side="defense"><i class="bi bi-shield-fill mr-1"></i>Run Defense</button>
      </div>
    </div>
    <div class="flex justify-center mb-2">
      <canvas id="modalCovArt" width="560" height="440" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <div class="flex justify-center mb-4">
      <div class="pos-filter-bar" id="modalPosFilter">
        <span class="label"><i class="bi bi-funnel-fill"></i> Show:</span>
        <button class="pos-toggle active off-group" data-group="OL">OL</button>
        <button class="pos-toggle active off-group" data-group="QB">QB</button>
        <button class="pos-toggle active off-group" data-group="WR">WR</button>
        <button class="pos-toggle active off-group" data-group="TE">TE</button>
        <button class="pos-toggle active off-group" data-group="RB">RB</button>
        <span class="label">|</span>
        <button class="pos-toggle active def-group" data-group="DL">DL</button>
        <button class="pos-toggle active def-group" data-group="LB">LB</button>
        <button class="pos-toggle active def-group" data-group="DB">DB</button>
        <span class="label ml-1"><i class="bi bi-speedometer2"></i></span>
        <button class="speed-btn" data-speed="2667">1.5x</button>
        <button class="speed-btn active" data-speed="4000">1x</button>
        <button class="speed-btn" data-speed="8000">0.5x</button>
      </div>
    </div>

    <p class="text-gray-300 mb-4">${cov.description}</p>

    <div class="results-section mb-4">
      <h4 class="text-[#8A2BE2]"><i class="bi bi-book-fill mr-1"></i> Found in Playbooks (${getDefPlaybooks(exactPlayName || cov.name, covDefFormation, covDefSubFormation).length})</h4>
      <div class="flex flex-wrap">${getDefPlaybooks(exactPlayName || cov.name, covDefFormation, covDefSubFormation).map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-[#00FFFF]"><i class="bi bi-check-circle-fill mr-1"></i> Strengths</h4>
        <ul class="space-y-1">
          ${cov.strengths.map(s => `<li class="text-xs text-gray-300 flex items-start gap-1"><i class="bi bi-plus-circle text-[#00FFFF] mt-0.5 flex-shrink-0"></i>${s}</li>`).join('')}
        </ul>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-[#FF1493]"><i class="bi bi-exclamation-circle-fill mr-1"></i> Weaknesses</h4>
        <ul class="space-y-1">
          ${cov.weaknesses.map(w => `<li class="text-xs text-gray-300 flex items-start gap-1"><i class="bi bi-dash-circle text-[#FF1493] mt-0.5 flex-shrink-0"></i>${w}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="results-section">
      <h4 class="text-[#00FFFF]"><i class="bi bi-shield-fill-check mr-1"></i> What It Stops</h4>
      <div class="flex flex-wrap">${cov.stops.map(s => `<span class="tag-green">${s}</span>`).join('')}</div>
    </div>

    <div class="results-section">
      <h4 class="text-[#FF1493]"><i class="bi bi-lightning-fill mr-1"></i> What Beats It</h4>
      <div class="flex flex-wrap">${cov.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
    </div>

    <div class="results-section">
      <h4 class="text-[#00FFFF]"><i class="bi bi-bullseye mr-1"></i> Best Against</h4>
      <div class="flex flex-wrap">${cov.bestAgainst.map(b => `<span class="tag-yellow">${b}</span>`).join('')}</div>
    </div>

    <div class="mt-2 p-3 bg-dark-700 rounded-lg border border-dark-600 mb-4">
      <h4 class="text-xs font-bold text-neon-cyan mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</h4>
      <p class="text-xs text-gray-300">${cov.tips}</p>
    </div>

    ${variants.length > 0 ? `
    <div class="border-t border-dark-600 pt-4 mt-4">
      <h3 class="text-lg font-black mb-3"><i class="bi bi-layers-fill text-neon-purple mr-2"></i>All Variants (${variants.length})</h3>
      <p class="text-xs text-gray-500 mb-3">Each variant plays differently depending on formation and personnel. Click to expand.</p>
      <div class="space-y-2" id="variantsList">
        ${variants.map((v, vi) => `
          <div class="formation-group">
            <div class="formation-header variant-header" data-vi="${vi}">
              <div class="flex items-center gap-2">
                <canvas id="varArt${vi}" width="75" height="60" class="rounded flex-shrink-0" style="background:#1a472a;"></canvas>
                <div>
                  <div class="font-semibold text-sm">${v.name}</div>
                  <div class="text-xs text-gray-500">${v.formation} / ${v.subFormation} &middot; ${v.personnel}</div>
                </div>
              </div>
              <i class="bi bi-chevron-down chevron text-gray-500"></i>
            </div>
            <div class="formation-body variant-body" id="varBody${vi}">
              <div class="p-4">
                <div class="flex justify-center mb-3">
                  <canvas id="varArtBig${vi}" width="300" height="240" class="rounded-lg" style="background:#1a472a;"></canvas>
                </div>
                <p class="text-sm text-gray-300 mb-3">${v.description}</p>
                <div class="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div><span class="text-gray-500 font-semibold">Rush:</span> <span class="text-white">${v.rushCount}</span></div>
                  <div><span class="text-gray-500 font-semibold">Drop:</span> <span class="text-white">${v.dropCount}</span></div>
                  <div><span class="text-gray-500 font-semibold">Blitz:</span> <span class="text-white">${v.blitzCount}</span></div>
                  <div><span class="text-gray-500 font-semibold">Playbooks:</span> <span class="text-white">${v.playbooks.length}</span></div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">PLAYBOOKS:</span>
                  <div class="mt-1 flex flex-wrap">${v.playbooks.map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">STOPS:</span>
                  <div class="mt-1 flex flex-wrap">${v.stops.map(s => `<span class="tag-green">${s}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">BEATEN BY:</span>
                  <div class="mt-1 flex flex-wrap">${v.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">ADJUSTMENTS:</span>
                  <div class="mt-1 flex flex-wrap">${v.adjustments.map(a => `<span class="tag-blue">${a}</span>`).join('')}</div>
                </div>
                <div class="p-2 bg-dark-700 rounded border border-dark-600">
                  <p class="text-xs text-neon-cyan font-bold mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Tip</p>
                  <p class="text-xs text-gray-300">${v.tips}</p>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
  `;

  modal.classList.add('active');
  modalContent.querySelector('#closeModal').addEventListener('click', closeModal);

  // Live animated play art — use exact play name for coverage identity
  const covNameForRender = exactPlayName || cov.name;
  const mainCanvas = document.getElementById('modalCovArt');
  let covModalSide = 'defense';
  let modalVisGroups = null;
  let modalAnimSpeed = 4000;

  const getModalVisGroups = () => {
    const filter = document.getElementById('modalPosFilter');
    if (!filter) return null;
    const active = filter.querySelectorAll('.pos-toggle.active');
    const all = filter.querySelectorAll('.pos-toggle');
    if (active.length === all.length) return null;
    const groups = new Set();
    active.forEach(t => groups.add(t.dataset.group));
    return groups;
  };

  const startCovAnim = () => {
    renderers.forEach(r => r.destroy()); renderers = [];
    modalVisGroups = getModalVisGroups();
    if (mainCanvas) {
      const r = new PlayArtRenderer(mainCanvas, { width: 560, height: 440 });
      r.renderLivePlay({
        side: covModalSide, offFormation: 'Gun', offSubFormation: 'Spread Y-Flex',
        playFamily: 'PA Crossers', defFormation: covDefFormation,
        defSubFormation: covDefSubFormation || undefined,
        coverageName: covNameForRender,
        duration: modalAnimSpeed, visibleGroups: modalVisGroups
      });
      renderers.push(r);
    }
  };
  startCovAnim();

  const covToggle = document.getElementById('covSideToggle');
  if (covToggle) {
    covToggle.querySelectorAll('.side-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        covModalSide = btn.dataset.side;
        covToggle.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        startCovAnim();
      });
    });
  }

  const modalFilter = document.getElementById('modalPosFilter');
  if (modalFilter) {
    modalFilter.querySelectorAll('.pos-toggle').forEach(btn => {
      btn.addEventListener('click', () => { btn.classList.toggle('active'); startCovAnim(); });
    });
    modalFilter.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalFilter.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        modalAnimSpeed = parseInt(btn.dataset.speed);
        startCovAnim();
      });
    });
  }

  // Render variant thumbnails
  variants.forEach((v, vi) => {
    const thumbCanvas = document.getElementById(`varArt${vi}`);
    if (thumbCanvas) {
      const r = new PlayArtRenderer(thumbCanvas, { width: 75, height: 60 });
      r.renderCoverageCard(v.formation, v.coverage, v.subFormation);
      renderers.push(r);
    }
  });

  // Accordion
  modalContent.querySelectorAll('.variant-header').forEach(header => {
    header.addEventListener('click', () => {
      const vi = header.dataset.vi;
      const body = document.getElementById(`varBody${vi}`);
      const isOpen = body.classList.contains('open');
      modalContent.querySelectorAll('.variant-body').forEach(b => b.classList.remove('open'));
      modalContent.querySelectorAll('.variant-header').forEach(h => h.classList.remove('open'));
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
        const bigCanvas = document.getElementById(`varArtBig${vi}`);
        if (bigCanvas && !bigCanvas.dataset.rendered) {
          const v = variants[vi];
          const r = new PlayArtRenderer(bigCanvas, { width: 300, height: 240 });
          r.renderCoverageCard(v.formation, v.coverage, v.subFormation);
          renderers.push(r);
          bigCanvas.dataset.rendered = '1';
        }
      }
    });
  });
}

function closeModal() {
  cleanup();
  modal.classList.remove('active');
  buildTree(activeFilter, searchInput.value, activeShell);
}
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    buildTree(activeFilter, searchInput.value, activeShell);
  });
});

if (shellFilter) {
  shellFilter.addEventListener('change', () => {
    activeShell = shellFilter.value;
    buildTree(activeFilter, searchInput.value, activeShell);
  });
}

searchInput.addEventListener('input', () => buildTree(activeFilter, searchInput.value, activeShell));

// Position group filter toolbar
function buildPosFilter() {
  const container = document.getElementById('posFilterContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="pos-filter-bar">
      <button class="pos-toggle active" id="liveAnimToggle" title="Toggle hover animation"><i class="bi bi-broadcast"></i> Live</button>
      <span class="label">|</span>
      <span class="label"><i class="bi bi-funnel-fill"></i> Show:</span>
      <button class="pos-toggle active def-group" data-group="DL">DL</button>
      <button class="pos-toggle active def-group" data-group="LB">LB</button>
      <button class="pos-toggle active def-group" data-group="DB">DB</button>
      <span class="label ml-2"><i class="bi bi-speedometer2"></i></span>
      <button class="speed-btn" data-speed="2667" title="Fast">1.5x</button>
      <button class="speed-btn active" data-speed="4000" title="Normal">1x</button>
      <button class="speed-btn" data-speed="8000" title="Slow">0.5x</button>
    </div>
  `;
  const liveBtn = container.querySelector('#liveAnimToggle');
  liveBtn.addEventListener('click', () => {
    liveAnimEnabled = !liveAnimEnabled;
    liveBtn.classList.toggle('active', liveAnimEnabled);
    if (!liveAnimEnabled) {
      treeEl.querySelectorAll('.play-card.live-active').forEach(card => deactivateCard(card));
    }
  });
  container.querySelectorAll('.pos-toggle[data-group]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      updateVisibleGroups();
      refreshActiveCards();
    });
  });
  container.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      animSpeed = parseInt(btn.dataset.speed);
      refreshActiveCards();
    });
  });
}

function updateVisibleGroups() {
  const container = document.getElementById('posFilterContainer');
  if (!container) return;
  const activeToggles = container.querySelectorAll('.pos-toggle.active[data-group]');
  const allToggles = container.querySelectorAll('.pos-toggle[data-group]');
  if (activeToggles.length === allToggles.length) {
    visibleGroups = null;
  } else {
    visibleGroups = new Set();
    activeToggles.forEach(t => visibleGroups.add(t.dataset.group));
  }
}

function refreshActiveCards() {
  const cards = treeEl.querySelectorAll('.play-card.live-active');
  cards.forEach(card => {
    deactivateCard(card);
    activateCard(card);
  });
}

buildPosFilter();

// Read URL search parameter (from home quick-reference links)
const urlParams = new URLSearchParams(window.location.search);
const urlSearch = urlParams.get('search') || '';
if (urlSearch && searchInput) {
  searchInput.value = urlSearch;
}
buildTree('all', searchInput ? searchInput.value : '', 'all');
