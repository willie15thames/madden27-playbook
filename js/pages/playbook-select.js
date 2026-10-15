import COVERAGES from '../data/coverages.js';
import PLAY_TYPES from '../data/plays.js';
import { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PlayArtRenderer } from '../components/playArt.js';
import { analyzePlaybookTendencies } from '../data/analytics.js';

// Mobile menu
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

const offenseTabBtn = document.getElementById('offenseTabBtn');
const defenseTabBtn = document.getElementById('defenseTabBtn');
const playbookSelector = document.getElementById('playbookSelector');
const playbookInfo = document.getElementById('playbookInfo');
const formationTree = document.getElementById('formationTree');
const modal = document.getElementById('playDetailModal');
const modalContent = document.getElementById('playDetailContent');
const searchInput = document.getElementById('playbookSearch');

let currentSide = 'offense';
let currentPlaybooks = OFFENSIVE_PLAYBOOKS;
let currentPb = null;
let renderers = [];
function cleanupRenderers() { renderers.forEach(r => r.destroy()); renderers = []; }

// Build playbook lookup for "found in X playbooks"
function buildLookup(books) {
  const lookup = {};
  for (const book of books) {
    for (const [fm, subs] of Object.entries(book.formations || {})) {
      for (const [sf, plays] of Object.entries(subs)) {
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
let offLookup = buildLookup(OFFENSIVE_PLAYBOOKS);
let defLookup = buildLookup(DEFENSIVE_PLAYBOOKS);

function getPlaybookCount(playName) {
  const key = playName.toLowerCase();
  const lookup = currentSide === 'offense' ? offLookup : defLookup;
  const exact = lookup[key];
  if (exact) return exact.size;
  for (const [k, books] of Object.entries(lookup)) {
    if (k.includes(key) || key.includes(k)) return books.size;
  }
  return 0;
}

function populatePlaybookSelector() {
  playbookSelector.innerHTML = '<option value="">Choose a playbook...</option>';
  [...currentPlaybooks].sort((a, b) => a.name.localeCompare(b.name)).forEach(pb => {
    const opt = document.createElement('option');
    opt.value = pb.id;
    opt.textContent = pb.name;
    playbookSelector.appendChild(opt);
  });
  playbookInfo.classList.add('hidden');
  formationTree.innerHTML = '';
  currentPb = null;
  if (searchInput) searchInput.value = '';
}

// Tab switching
offenseTabBtn.addEventListener('click', () => {
  currentSide = 'offense';
  currentPlaybooks = OFFENSIVE_PLAYBOOKS;
  offenseTabBtn.classList.add('active');
  defenseTabBtn.classList.remove('active');
  populatePlaybookSelector();
});

defenseTabBtn.addEventListener('click', () => {
  currentSide = 'defense';
  currentPlaybooks = DEFENSIVE_PLAYBOOKS;
  defenseTabBtn.classList.add('active');
  offenseTabBtn.classList.remove('active');
  populatePlaybookSelector();
});

// Search within playbook
if (searchInput) {
  searchInput.addEventListener('input', () => {
    if (currentPb) buildFormationTree(currentPb, searchInput.value.trim());
  });
}

// Playbook selection
playbookSelector.addEventListener('change', () => {
  const pb = currentPlaybooks.find(p => p.id === playbookSelector.value);
  if (!pb) {
    playbookInfo.classList.add('hidden');
    formationTree.innerHTML = '';
    currentPb = null;
    return;
  }
  currentPb = pb;
  if (searchInput) searchInput.value = '';

  // Show info with dynamic stats
  playbookInfo.classList.remove('hidden');
  document.getElementById('playbookName').textContent = pb.name;
  document.getElementById('playbookStyle').textContent = `Style: ${pb.style}`;

  let totalSets = 0, totalPlays = 0;
  for (const [fm, subs] of Object.entries(pb.formations)) {
    for (const [sf, plays] of Object.entries(subs)) {
      totalSets++;
      totalPlays += plays.length;
    }
  }
  document.getElementById('formationCount').textContent = Object.keys(pb.formations).length;
  document.getElementById('setCount').textContent = totalSets;
  document.getElementById('playCount').textContent = totalPlays;

  // Analytics tendency analysis (offense only)
  const tendencyEl = document.getElementById('playbookTendency');
  if (tendencyEl && currentSide === 'offense') {
    const analysis = analyzePlaybookTendencies(pb);
    if (analysis) {
      const runPct = analysis.totalPlays > 0 ? (analysis.runPlays / analysis.totalPlays * 100).toFixed(0) : 0;
      const passPct = analysis.totalPlays > 0 ? (100 - runPct) : 0;
      tendencyEl.innerHTML = `
        <div class="flex items-center gap-3 mt-2">
          <div class="flex-1">
            <div class="flex justify-between text-xs mb-1">
              <span class="font-bold text-neon-cyan">Run ${runPct}%</span>
              <span class="font-bold text-neon-red">Pass ${passPct}%</span>
            </div>
            <div class="w-full bg-dark-900 rounded-full h-2 overflow-hidden flex">
              <div class="h-2 bg-[#00FFFF]" style="width:${runPct}%"></div>
              <div class="h-2 bg-[#FF1493]" style="width:${passPct}%"></div>
            </div>
          </div>
          <span class="text-xs font-bold px-2 py-1 rounded bg-dark-700 border border-dark-600">${analysis.style}</span>
        </div>
      `;
    } else {
      tendencyEl.innerHTML = '';
    }
  } else if (tendencyEl) {
    tendencyEl.innerHTML = '';
  }

  buildFormationTree(pb, '');
});

function buildFormationTree(pb, search) {
  cleanupRenderers();
  formationTree.innerHTML = '';
  const lower = search.toLowerCase();

  Object.entries(pb.formations).sort(([a], [b]) => a.localeCompare(b)).forEach(([formationName, subFormations]) => {
    // Filter plays by search
    const filteredSubs = {};
    for (const [subName, plays] of Object.entries(subFormations)) {
      const matched = lower ? plays.filter(p => p.toLowerCase().includes(lower)) : plays;
      if (matched.length > 0) filteredSubs[subName] = matched;
    }
    if (Object.keys(filteredSubs).length === 0) return;

    const totalPlays = Object.values(filteredSubs).reduce((sum, plays) => sum + plays.length, 0);

    const group = document.createElement('div');
    group.className = 'formation-group animate-fade-in';

    group.innerHTML = `
      <div class="formation-header" data-formation="${formationName}">
        <div class="flex items-center gap-3">
          <i class="bi ${currentSide === 'offense' ? 'bi-lightning-fill text-[#00FFFF]' : 'bi-shield-fill text-[#FF1493]'}"></i>
          <span class="font-bold">${formationName}</span>
          <span class="text-xs text-gray-500">${Object.keys(filteredSubs).length} sets &middot; ${totalPlays} plays</span>
        </div>
        <i class="bi bi-chevron-down chevron text-gray-500"></i>
      </div>
      <div class="formation-body">
        ${Object.entries(filteredSubs).sort(([a], [b]) => a.localeCompare(b)).map(([subName, plays]) => `
          <div class="sub-formation">
            <div class="sub-formation-name">${subName} <span class="text-gray-600 text-xs">(${plays.length})</span></div>
            <div class="flex flex-wrap gap-3">
              ${[...plays].sort((a, b) => a.localeCompare(b)).map((play, pi) => {
                const playData = currentSide === 'offense' ? PLAY_TYPES[play] : null;
                const isRun = playData && playData.type === 'Run';
                const badgeClass = !playData ? '' : isRun ? 'run' : playData.subtype === 'Screen' ? 'screen' : playData.subtype === 'RPO' ? 'rpo' : 'pass';
                return `
                <div class="play-chip-art" data-play="${play}" data-formation="${formationName}" data-subformation="${subName}">
                  <canvas id="pbArt_${formationName.replace(/[^a-zA-Z0-9]/g,'_')}_${subName.replace(/[^a-zA-Z0-9]/g,'_')}_${pi}" width="160" height="128" class="rounded" style="background:#1a472a;"></canvas>
                  <span class="play-chip-label">${play}</span>
                  ${badgeClass ? `<span class="play-chip-badge ${badgeClass}">${playData.type}</span>` : ''}
                </div>`;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    formationTree.appendChild(group);
  });

  // If searching, auto-open all formations
  if (lower) {
    formationTree.querySelectorAll('.formation-body').forEach(b => b.classList.add('open'));
    formationTree.querySelectorAll('.formation-header').forEach(h => h.classList.add('open'));
    // Render canvases immediately for search results
    formationTree.querySelectorAll('.play-chip-art canvas').forEach(canvas => {
      renderChipCanvas(canvas);
    });
  }

  // Accordion behavior
  formationTree.querySelectorAll('.formation-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      if (!lower) {
        formationTree.querySelectorAll('.formation-body').forEach(b => b.classList.remove('open'));
        formationTree.querySelectorAll('.formation-header').forEach(h => h.classList.remove('open'));
      }
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
        body.querySelectorAll('.play-chip-art canvas').forEach(canvas => renderChipCanvas(canvas));
      } else {
        body.classList.remove('open');
        header.classList.remove('open');
      }
    });
  });

  // Play chip clicks and hover
  formationTree.querySelectorAll('.play-chip-art').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      openPlayDetail(chip.dataset.play, chip.dataset.formation, chip.dataset.subformation);
    });
    // Hover animation on chip
    chip.addEventListener('mouseenter', () => {
      const canvas = chip.querySelector('canvas');
      if (!canvas || canvas._hoverAnim) return;
      const pn = chip.dataset.play;
      const fm = chip.dataset.formation;
      const sf = chip.dataset.subformation;
      const r = new PlayArtRenderer(canvas, { width: 160, height: 128 });
      if (currentSide === 'offense') {
        r.renderSinglePlayLive({ mode: 'offense', offFormation: fm, offSubFormation: sf, playFamily: pn, duration: 3000 });
      } else {
        r.renderSinglePlayLive({ mode: 'defense', defFormation: fm, defSubFormation: sf, coverageName: pn, duration: 3000 });
      }
      canvas._hoverAnim = r;
      renderers.push(r);
    });
    chip.addEventListener('mouseleave', () => {
      const canvas = chip.querySelector('canvas');
      if (canvas && canvas._hoverAnim) {
        canvas._hoverAnim.destroy();
        renderers = renderers.filter(r => r !== canvas._hoverAnim);
        canvas._hoverAnim = null;
        // Clear rendered flag so static art re-renders
        delete canvas.dataset.rendered;
        renderChipCanvas(canvas);
      }
    });
  });
}

function renderChipCanvas(canvas) {
  if (canvas.dataset.rendered) return;
  canvas.dataset.rendered = '1';
  const chipEl = canvas.closest('.play-chip-art');
  const fm = chipEl.dataset.formation;
  const sf = chipEl.dataset.subformation;
  const pn = chipEl.dataset.play;
  const r = new PlayArtRenderer(canvas, { width: 160, height: 128 });
  if (currentSide === 'offense') {
    r.renderPlayCard(fm, sf, pn);
  } else {
    r.renderCoverageCard(fm, pn, sf);
  }
  canvas.style.maxWidth = '100%';
  canvas.style.height = 'auto';
  renderers.push(r);
}

function openPlayDetail(playName, formation, subFormation) {
  cleanupRenderers();
  if (currentSide === 'offense') {
    openOffenseDetail(playName, formation, subFormation);
  } else {
    openDefenseDetail(playName, formation);
  }
}

function openOffenseDetail(playName, formation, subFormation) {
  const play = PLAY_TYPES[playName];
  const fm = formation || 'Shotgun';
  const sf = subFormation || 'Spread Y-Flex';
  const pbCount = getPlaybookCount(playName);

  const playContent = play ? `
    <div class="flex gap-2 mt-1 mb-4">
      <span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span>
      <span class="play-type-badge ${play.type === 'Run' ? 'run' : play.subtype === 'Screen' ? 'screen' : play.subtype === 'RPO' ? 'rpo' : 'pass'}">${play.subtype}</span>
    </div>
  ` : '';

  const description = play ? play.description : 'This play is available in the selected playbook.';

  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${playName}</h2>
        ${playContent}
      </div>
      <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>

    <div class="flex justify-center mb-3">
      <div class="inline-flex rounded-lg overflow-hidden border border-dark-600" id="pbSideToggle">
        <button class="side-btn active" data-side="offense"><i class="bi bi-lightning-fill mr-1"></i>Offense</button>
        <button class="side-btn" data-side="defense"><i class="bi bi-shield-fill mr-1"></i>Defense</button>
      </div>
    </div>
    <div class="flex justify-center mb-2">
      <canvas id="pbModalArt" width="560" height="440" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <div class="flex justify-center mb-4">
      <div class="pos-filter-bar" id="pbModalPosFilter">
        <span class="label"><i class="bi bi-funnel-fill"></i></span>
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
        <button class="speed-btn" data-speed="2000">1.5x</button>
        <button class="speed-btn active" data-speed="4000">1x</button>
        <button class="speed-btn" data-speed="6500">0.5x</button>
      </div>
    </div>

    <p class="text-gray-300 mb-4">${description}</p>

    <div class="results-section mb-4">
      <h4 class="text-[#8A2BE2]"><i class="bi bi-book-fill mr-1"></i> Found in ${pbCount} Playbook${pbCount !== 1 ? 's' : ''}</h4>
      <p class="text-xs text-gray-400">Formation: ${fm} / ${sf}</p>
    </div>

    ${play ? `
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
        <div class="flex flex-wrap">${(play.badVsCoverages.length > 0 ? play.badVsCoverages : ['None']).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
      </div>
    </div>
    <div class="p-4 bg-dark-700 rounded-lg border border-dark-600 mt-4">
      <h4 class="text-sm font-bold text-neon-cyan mb-2"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</h4>
      <p class="text-sm text-gray-300">${play.tips}</p>
    </div>
    ` : getSimilarPlaysHTML(playName)}
  `;

  modal.classList.add('active');
  modalContent.querySelector('#closeModal').addEventListener('click', closeModal);

  // Live animated play art with side toggle
  const pbModalCanvas = document.getElementById('pbModalArt');
  let modalSide = 'offense';
  let modalVisGroups = null;
  let modalAnimSpeed = 4000;

  const getModalVisGroups = () => {
    const filter = document.getElementById('pbModalPosFilter');
    if (!filter) return null;
    const active = filter.querySelectorAll('.pos-toggle.active');
    const all = filter.querySelectorAll('.pos-toggle');
    if (active.length === all.length) return null;
    const groups = new Set();
    active.forEach(t => groups.add(t.dataset.group));
    return groups;
  };

  const startAnim = () => {
    renderers.forEach(r => r.destroy()); renderers = [];
    modalVisGroups = getModalVisGroups();
    if (pbModalCanvas) {
      const r = new PlayArtRenderer(pbModalCanvas, { width: 560, height: 440 });
      r.renderLivePlay({
        side: modalSide, offFormation: fm, offSubFormation: sf,
        playFamily: playName, defFormation: 'Nickel', coverageName: 'Cover 3',
        duration: modalAnimSpeed, visibleGroups: modalVisGroups
      });
      renderers.push(r);
    }
  };
  startAnim();

  const sideToggle = document.getElementById('pbSideToggle');
  if (sideToggle) {
    sideToggle.querySelectorAll('.side-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalSide = btn.dataset.side;
        sideToggle.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        startAnim();
      });
    });
  }

  const modalFilter = document.getElementById('pbModalPosFilter');
  if (modalFilter) {
    modalFilter.querySelectorAll('.pos-toggle').forEach(btn => {
      btn.addEventListener('click', () => { btn.classList.toggle('active'); startAnim(); });
    });
    modalFilter.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalFilter.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        modalAnimSpeed = parseInt(btn.dataset.speed);
        startAnim();
      });
    });
  }
}

function openDefenseDetail(coverageName, formation) {
  const cov = findCoverage(coverageName);
  const fm = formation || 'Nickel';
  const pbCount = getPlaybookCount(coverageName);

  const typeContent = cov ? `
    <div class="flex items-center gap-2 mt-1 mb-4">
      <span class="type-badge ${cov.type === 'Man' ? 'man' : cov.type === 'Zone' ? 'zone' : cov.type === 'Zone Match' ? 'zone-match' : 'hybrid'}">${cov.type}</span>
      <span class="text-sm text-gray-400">${cov.shell}</span>
    </div>
  ` : '';

  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${cov ? cov.name : coverageName}</h2>
        ${typeContent}
      </div>
      <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>

    <div class="flex justify-center mb-3">
      <div class="inline-flex rounded-lg overflow-hidden border border-dark-600" id="pbSideToggle">
        <button class="side-btn" data-side="offense"><i class="bi bi-lightning-fill mr-1"></i>Offense</button>
        <button class="side-btn active" data-side="defense"><i class="bi bi-shield-fill mr-1"></i>Defense</button>
      </div>
    </div>
    <div class="flex justify-center mb-2">
      <canvas id="pbModalArt" width="560" height="440" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <div class="flex justify-center mb-4">
      <div class="pos-filter-bar" id="pbModalPosFilter">
        <span class="label"><i class="bi bi-funnel-fill"></i></span>
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
        <button class="speed-btn" data-speed="2000">1.5x</button>
        <button class="speed-btn active" data-speed="4000">1x</button>
        <button class="speed-btn" data-speed="6500">0.5x</button>
      </div>
    </div>

    <p class="text-gray-300 mb-4">${cov ? cov.description : 'This coverage is available in the selected playbook.'}</p>

    <div class="results-section mb-4">
      <h4 class="text-[#8A2BE2]"><i class="bi bi-book-fill mr-1"></i> Found in ${pbCount} Playbook${pbCount !== 1 ? 's' : ''}</h4>
      <p class="text-xs text-gray-400">Formation: ${fm}</p>
    </div>

    ${cov ? `
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-[#00FFFF]"><i class="bi bi-check-circle-fill mr-1"></i> Strengths</h4>
        <ul class="space-y-1">
          ${cov.strengths.map(s => `<li class="text-xs text-gray-300 flex items-start gap-2"><i class="bi bi-plus-circle text-[#00FFFF] mt-0.5"></i>${s}</li>`).join('')}
        </ul>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-[#FF1493]"><i class="bi bi-exclamation-circle-fill mr-1"></i> Weaknesses</h4>
        <ul class="space-y-1">
          ${cov.weaknesses.map(w => `<li class="text-xs text-gray-300 flex items-start gap-2"><i class="bi bi-dash-circle text-[#FF1493] mt-0.5"></i>${w}</li>`).join('')}
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
    <div class="p-4 bg-dark-700 rounded-lg border border-dark-600 mt-4">
      <h4 class="text-sm font-bold text-neon-cyan mb-2"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</h4>
      <p class="text-sm text-gray-300">${cov.tips}</p>
    </div>
    ` : `
    <p class="text-sm text-gray-400">Check the <a href="coverages.html" class="text-neon-cyan underline">Coverages page</a> for detailed breakdowns.</p>
    `}
  `;

  modal.classList.add('active');
  modalContent.querySelector('#closeModal').addEventListener('click', closeModal);

  // Live animated play art
  const pbModalCanvas = document.getElementById('pbModalArt');
  let modalSide = 'defense';
  let modalVisGroups = null;
  let modalAnimSpeed = 4000;

  const getModalVisGroups = () => {
    const filter = document.getElementById('pbModalPosFilter');
    if (!filter) return null;
    const active = filter.querySelectorAll('.pos-toggle.active');
    const all = filter.querySelectorAll('.pos-toggle');
    if (active.length === all.length) return null;
    const groups = new Set();
    active.forEach(t => groups.add(t.dataset.group));
    return groups;
  };

  const startAnim = () => {
    renderers.forEach(r => r.destroy()); renderers = [];
    modalVisGroups = getModalVisGroups();
    if (pbModalCanvas) {
      const r = new PlayArtRenderer(pbModalCanvas, { width: 560, height: 440 });
      r.renderLivePlay({
        side: modalSide, offFormation: 'Gun', offSubFormation: 'Spread Y-Flex',
        playFamily: 'Inside Zone', defFormation: fm, coverageName: coverageName,
        duration: modalAnimSpeed, visibleGroups: modalVisGroups
      });
      renderers.push(r);
    }
  };
  startAnim();

  const sideToggle = document.getElementById('pbSideToggle');
  if (sideToggle) {
    sideToggle.querySelectorAll('.side-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalSide = btn.dataset.side;
        sideToggle.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        startAnim();
      });
    });
  }

  const modalFilter = document.getElementById('pbModalPosFilter');
  if (modalFilter) {
    modalFilter.querySelectorAll('.pos-toggle').forEach(btn => {
      btn.addEventListener('click', () => { btn.classList.toggle('active'); startAnim(); });
    });
    modalFilter.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalFilter.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        modalAnimSpeed = parseInt(btn.dataset.speed);
        startAnim();
      });
    });
  }
}

function findCoverage(name) {
  if (!name) return null;
  return COVERAGES.find(c => {
    return c.name.toLowerCase() === name.toLowerCase() ||
      c.name.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(c.name.split('(')[0].trim().toLowerCase()) ||
      name.toLowerCase().replace(/\s+/g, '').includes(c.id);
  }) || null;
}

function getSimilarPlaysHTML(playName) {
  const lower = playName.toLowerCase();
  const similar = Object.entries(PLAY_TYPES).filter(([name]) => {
    const nameLower = name.toLowerCase();
    return lower.includes(nameLower) || nameLower.includes(lower) ||
      lower.split(' ').some(word => word.length > 2 && nameLower.includes(word));
  });

  if (similar.length === 0) return '';

  return `
    <div class="results-section mt-4">
      <h4 class="text-neon-cyan">Similar Play Types</h4>
      <div class="space-y-2">
        ${similar.map(([name, p]) => `
          <div class="p-3 bg-dark-700 rounded-lg border border-dark-600">
            <div class="font-bold text-sm mb-1">${name} <span class="play-type-badge ${p.type === 'Run' ? 'run' : 'pass'}">${p.type}</span></div>
            <div class="flex flex-wrap mt-1">
              <span class="text-xs text-gray-500 mr-2">Beats:</span>
              ${p.goodVsCoverages.slice(0, 3).map(c => `<span class="tag-green">${c}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function closeModal() { cleanupRenderers(); modal.classList.remove('active'); }
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Add swipe navigation to play modal
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  const modal = document.getElementById('playDetailModal');
  if (modal && modal.classList.contains('active')) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
});
document.addEventListener('touchend', (e) => {
  const modal = document.getElementById('playDetailModal');
  if (modal && modal.classList.contains('active') && e.changedTouches.length) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 2) {
      // Find prev/next buttons and click them
      const prevBtn = modal.querySelector('[data-nav="prev"]');
      const nextBtn = modal.querySelector('[data-nav="next"]');
      if (dx > 0 && prevBtn) prevBtn.click();
      else if (dx < 0 && nextBtn) nextBtn.click();
    }
  }
});

// Initial
populatePlaybookSelector();
