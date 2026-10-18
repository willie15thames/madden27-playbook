import PLAY_TYPES from '../data/plays.js';
import OFFENSIVE_PLAYS from '../data/offensive-plays.js';
import { OFFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PlayArtRenderer } from '../components/playArt.js';
import { calculateMatchupGrade, getConceptKey, CONCEPT_LABELS } from '../data/analytics.js';

// Build a lookup: playName -> Set of playbook names that contain it
function buildPlaybookLookup() {
  const lookup = {};
  for (const book of OFFENSIVE_PLAYBOOKS) {
    for (const [formation, subs] of Object.entries(book.formations)) {
      for (const [subFormation, plays] of Object.entries(subs)) {
        for (const play of plays) {
          const key = play.toLowerCase();
          if (!lookup[key]) lookup[key] = new Set();
          lookup[key].add(book.name);
        }
      }
    }
  }
  return lookup;
}
const PLAYBOOK_LOOKUP = buildPlaybookLookup();

function getPlaybooks(playName) {
  const key = playName.toLowerCase();
  const exact = PLAYBOOK_LOOKUP[key];
  if (exact) return [...exact].sort();
  const matches = new Set();
  for (const [k, books] of Object.entries(PLAYBOOK_LOOKUP)) {
    if (k.includes(key) || key.includes(k)) {
      for (const b of books) matches.add(b);
    }
  }
  return [...matches].sort();
}

// Build aggregated formation tree from all offensive playbooks
function buildFormationData() {
  const tree = {};
  for (const pb of OFFENSIVE_PLAYBOOKS) {
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

const treeEl = document.getElementById('offenseTree');
const modal = document.getElementById('playModal');
const modalContent = document.getElementById('playModalContent');
const searchInput = document.getElementById('playSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';
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

function getSubtypeBadgeClass(subtype) {
  if (['Zone Run', 'Gap Run', 'Outside Run', 'Draw', 'Option', 'Short Yardage'].includes(subtype)) return 'run';
  if (subtype === 'Screen') return 'screen';
  if (subtype === 'RPO') return 'rpo';
  return 'pass';
}

function renderCardCanvas(canvas) {
  if (canvas.dataset.rendered) return;
  canvas.dataset.rendered = '1';
  const cardEl = canvas.closest('.play-card');
  const fm = cardEl.dataset.formation;
  const sf = cardEl.dataset.subformation;
  const pn = cardEl.dataset.play;
  const r = new PlayArtRenderer(canvas, { width: 500, height: 350 });
  r.renderPlayCard(fm, sf, pn);
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
    mode: 'offense',
    offFormation: fm,
    offSubFormation: sf,
    playFamily: pn,
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

function buildTree(filter, search) {
  cleanup();
  treeEl.innerHTML = '';
  const data = buildFormationData();
  const lower = (search || '').toLowerCase();
  const isFiltered = lower || filter !== 'all';

  Object.entries(data).sort(([a], [b]) => a.localeCompare(b)).forEach(([formation, subs]) => {
    const filteredSubs = {};
    for (const [subName, plays] of Object.entries(subs)) {
      const matched = plays.filter(p => {
        const playData = PLAY_TYPES[p];
        // Search matches play name, formation, subformation, or play type description
        if (lower && !p.toLowerCase().includes(lower)
            && !formation.toLowerCase().includes(lower)
            && !subName.toLowerCase().includes(lower)) {
          if (!playData || (!playData.description.toLowerCase().includes(lower) && !playData.subtype.toLowerCase().includes(lower))) return false;
        }
        if (filter !== 'all') {
          if (!playData || playData.type !== filter) return false;
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
          <i class="bi bi-lightning-fill text-[#00FFFF]"></i>
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
                const playData = PLAY_TYPES[play];
                const isRun = playData && playData.type === 'Run';
                const badgeClass = !playData ? '' : isRun ? 'run' : playData.subtype === 'Screen' ? 'screen' : playData.subtype === 'RPO' ? 'rpo' : 'pass';
                return `
                <div class="play-card" data-play="${play}" data-formation="${formation}" data-subformation="${subName}">
                  <div class="play-art-wrapper">
                    <canvas class="play-art-canvas" width="500" height="350"></canvas>
                    <div class="play-art-live-badge"><i class="bi bi-broadcast"></i> LIVE</div>
                  </div>
                  <div class="card-info">
                    <div class="flex items-center justify-between mb-1">
                      <h3 class="font-bold truncate">${play}</h3>
                    </div>
                    ${playData ? `
                    <div class="flex gap-1 mb-1">
                      <span class="play-type-badge ${playData.type === 'Run' ? 'run' : 'pass'}">${playData.type}</span>
                      <span class="play-type-badge ${getSubtypeBadgeClass(playData.subtype)}">${playData.subtype}</span>
                    </div>
                    <p class="text-gray-400 text-xs line-clamp-2">${playData.description}</p>
                    <div class="mb-1 mt-2">
                      <span class="text-xs text-gray-500 font-semibold">BEATS:</span>
                      <div class="mt-1 flex flex-wrap">${playData.goodVsCoverages.slice(0, 3).map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
                    </div>
                    <div>
                      <span class="text-xs text-gray-500 font-semibold">STOPPED BY:</span>
                      <div class="mt-1 flex flex-wrap">${playData.badVsCoverages.slice(0, 3).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
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
    treeEl.innerHTML = '<div class="text-center text-gray-500 py-12">No plays match your search.</div>';
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
      const playData = PLAY_TYPES[pn];
      const variants = OFFENSIVE_PLAYS.filter(op => op.family === pn || op.name === pn);
      openModal(pn, playData, variants, card.dataset.formation, card.dataset.subformation);
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

function openModal(name, play, variants, formation, subFormation) {
  cleanup();
  const fm = formation || 'Gun';
  const sf = subFormation || 'Spread Y-Flex';

  if (!play) {
    modalContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-black">${name}</h2>
        <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="flex justify-center mb-2">
        <canvas id="modalOffArt" width="560" height="440" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
      </div>
      <p class="text-gray-400">No detailed play type information available. Formation: ${fm} / ${sf}</p>
    `;
    modal.classList.add('active');
    modalContent.querySelector('#closeModal').addEventListener('click', closeModal);
    const mainCanvas = document.getElementById('modalOffArt');
    if (mainCanvas) {
      const r = new PlayArtRenderer(mainCanvas, { width: 560, height: 440 });
      r.renderLivePlay({
        side: 'offense', offFormation: fm, offSubFormation: sf,
        playFamily: name, defFormation: 'Nickel', coverageName: 'Cover 3',
        duration: 4000
      });
      renderers.push(r);
    }
    return;
  }

  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${name}</h2>
        <div class="flex gap-2 mt-1">
          <span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span>
          <span class="play-type-badge ${getSubtypeBadgeClass(play.subtype)}">${play.subtype}</span>
        </div>
      </div>
      <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>

    <div class="flex justify-center mb-3">
      <div class="inline-flex rounded-lg overflow-hidden border border-dark-600" id="offSideToggle">
        <button class="side-btn active" data-side="offense"><i class="bi bi-lightning-fill mr-1"></i>Run Offense</button>
        <button class="side-btn" data-side="defense"><i class="bi bi-shield-fill mr-1"></i>Run Defense</button>
      </div>
    </div>
    <div class="flex justify-center mb-2">
      <canvas id="modalOffArt" width="560" height="440" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
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

    <p class="text-gray-300 mb-4">${play.description}</p>
    <p class="text-xs text-gray-500 mb-4">Formation: ${fm} / ${sf}</p>

    <div class="results-section mb-4">
      <h4 class="text-[#8A2BE2]"><i class="bi bi-book-fill mr-1"></i> Found in Playbooks (${getPlaybooks(name).length})</h4>
      <div class="flex flex-wrap">${getPlaybooks(name).map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-[#00FFFF]"><i class="bi bi-lightning-fill mr-1"></i> Beats</h4>
        <div class="flex flex-wrap">${play.beats.map(b => `<span class="tag-green">${b}</span>`).join('')}</div>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-[#FF1493]"><i class="bi bi-shield-fill mr-1"></i> Stopped By</h4>
        <div class="flex flex-wrap">${play.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-[#00FFFF]">Good vs Coverages</h4>
        <div class="flex flex-wrap">${play.goodVsCoverages.map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-[#FF1493]">Bad vs Coverages</h4>
        <div class="flex flex-wrap">${(play.badVsCoverages.length ? play.badVsCoverages : ['None']).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
      </div>
    </div>

    <div class="p-3 bg-dark-700 rounded-lg border border-dark-600 mb-4">
      <p class="text-xs text-neon-cyan font-bold mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</p>
      <p class="text-xs text-gray-300">${play.tips}</p>
    </div>

    <div class="results-section mb-4">
      <h4 class="text-emerald-400"><i class="bi bi-bar-chart-fill mr-1"></i> Coverage Matchup Grades</h4>
      <div class="text-xs text-gray-500 mb-2">Concept: ${CONCEPT_LABELS[getConceptKey(name)] || 'Unknown'}</div>
      <div class="space-y-1">
        ${['Cover 0', 'Cover 1', 'Cover 2 Zone', 'Cover 2 Man', 'Cover 3', 'Cover 3 Match', 'Cover 4', 'Cover 4 Palms', 'Tampa 2', 'Cover 6', 'Prevent'].map(cov => {
          const g = calculateMatchupGrade(name, cov);
          return `<div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-28 truncate">${cov}</span>
            <div class="flex-1 bg-dark-900 rounded-full h-2 overflow-hidden">
              <div class="h-2 rounded-full" style="width:${g.grade}%;background:${g.color}"></div>
            </div>
            <span class="text-xs font-bold w-8 text-right" style="color:${g.color}">${g.grade}</span>
          </div>`;
        }).join('')}
      </div>
    </div>

    ${variants.length > 0 ? `
    <div class="border-t border-dark-600 pt-4 mt-4">
      <h3 class="text-lg font-black mb-3"><i class="bi bi-layers-fill text-neon-purple mr-2"></i>All Variants (${variants.length})</h3>
      <div class="space-y-2" id="variantsList">
        ${variants.map((v, vi) => `
          <div class="formation-group">
            <div class="formation-header variant-header" data-vi="${vi}">
              <div class="flex items-center gap-2">
                <canvas id="offVar${vi}" width="75" height="60" class="rounded flex-shrink-0" style="background:#1a472a;"></canvas>
                <div>
                  <div class="font-semibold text-sm">${v.name}</div>
                  <div class="text-xs text-gray-500">${v.formation} / ${v.subFormation} &middot; ${v.personnel}</div>
                </div>
              </div>
              <i class="bi bi-chevron-down chevron text-gray-500"></i>
            </div>
            <div class="formation-body variant-body" id="offVarBody${vi}">
              <div class="p-4">
                <div class="flex justify-center mb-3">
                  <canvas id="offVarBig${vi}" width="300" height="240" class="rounded-lg" style="background:#1a472a;"></canvas>
                </div>
                <p class="text-sm text-gray-300 mb-3">${v.description}</p>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">PLAYBOOKS:</span>
                  <div class="mt-1 flex flex-wrap">${v.playbooks.map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">BEATS:</span>
                  <div class="mt-1 flex flex-wrap">${v.beats.map(b => `<span class="tag-green">${b}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">STOPPED BY:</span>
                  <div class="mt-1 flex flex-wrap">${v.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">GOOD VS:</span>
                  <div class="mt-1 flex flex-wrap">${v.goodVsCoverages.map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
                </div>
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">BAD VS:</span>
                  <div class="mt-1 flex flex-wrap">${(v.badVsCoverages.length ? v.badVsCoverages : ['None']).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
                </div>
                ${v.hotRoutes && v.hotRoutes.length ? `
                <div class="mb-2">
                  <span class="text-xs text-gray-500 font-semibold">HOT ROUTES:</span>
                  <div class="mt-1 flex flex-wrap">${v.hotRoutes.map(h => `<span class="tag-yellow">${h}</span>`).join('')}</div>
                </div>` : ''}
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

  // Live animated play art
  const mainCanvas = document.getElementById('modalOffArt');
  let offModalSide = 'offense';
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

  const startOffAnim = () => {
    renderers.forEach(r => r.destroy()); renderers = [];
    modalVisGroups = getModalVisGroups();
    if (mainCanvas) {
      const r = new PlayArtRenderer(mainCanvas, { width: 560, height: 440 });
      r.renderLivePlay({
        side: offModalSide, offFormation: fm, offSubFormation: sf,
        playFamily: name, defFormation: 'Nickel', coverageName: 'Cover 3',
        duration: modalAnimSpeed, visibleGroups: modalVisGroups
      });
      renderers.push(r);
    }
  };
  startOffAnim();

  const offToggle = document.getElementById('offSideToggle');
  if (offToggle) {
    offToggle.querySelectorAll('.side-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        offModalSide = btn.dataset.side;
        offToggle.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        startOffAnim();
      });
    });
  }

  const modalFilter = document.getElementById('modalPosFilter');
  if (modalFilter) {
    modalFilter.querySelectorAll('.pos-toggle').forEach(btn => {
      btn.addEventListener('click', () => { btn.classList.toggle('active'); startOffAnim(); });
    });
    modalFilter.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalFilter.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        modalAnimSpeed = parseInt(btn.dataset.speed);
        startOffAnim();
      });
    });
  }

  variants.forEach((v, vi) => {
    const thumb = document.getElementById(`offVar${vi}`);
    if (thumb) {
      const r = new PlayArtRenderer(thumb, { width: 75, height: 60 });
      r.renderPlayCard(v.formation, v.subFormation, v.family || v.name);
      renderers.push(r);
    }
  });

  modalContent.querySelectorAll('.variant-header').forEach(header => {
    header.addEventListener('click', () => {
      const vi = header.dataset.vi;
      const body = document.getElementById(`offVarBody${vi}`);
      const isOpen = body.classList.contains('open');
      modalContent.querySelectorAll('.variant-body').forEach(b => b.classList.remove('open'));
      modalContent.querySelectorAll('.variant-header').forEach(h => h.classList.remove('open'));
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
        const bigCanvas = document.getElementById(`offVarBig${vi}`);
        if (bigCanvas && !bigCanvas.dataset.rendered) {
          const v = variants[vi];
          const r = new PlayArtRenderer(bigCanvas, { width: 300, height: 240 });
          r.renderPlayCard(v.formation, v.subFormation, v.family || v.name);
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
  buildTree(activeFilter, searchInput.value);
}
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    buildTree(activeFilter, searchInput.value);
  });
});

searchInput.addEventListener('input', () => buildTree(activeFilter, searchInput.value));

// Position group filter toolbar
function buildPosFilter() {
  const container = document.getElementById('posFilterContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="pos-filter-bar">
      <button class="pos-toggle active" id="liveAnimToggle" title="Toggle hover animation"><i class="bi bi-broadcast"></i> Live</button>
      <span class="label">|</span>
      <span class="label"><i class="bi bi-funnel-fill"></i> Show:</span>
      <button class="pos-toggle active off-group" data-group="OL">OL</button>
      <button class="pos-toggle active off-group" data-group="QB">QB</button>
      <button class="pos-toggle active off-group" data-group="WR">WR</button>
      <button class="pos-toggle active off-group" data-group="TE">TE</button>
      <button class="pos-toggle active off-group" data-group="RB">RB</button>
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
buildTree();
