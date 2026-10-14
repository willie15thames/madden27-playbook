import COVERAGES from '../data/coverages.js';
import DEFENSIVE_PLAYS from '../data/defensive-plays.js';
import { DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PlayArtRenderer } from '../components/playArt.js';

// Build lookup: coverageName -> Set of defensive playbook names containing it
function buildDefPlaybookLookup() {
  const lookup = {};
  for (const book of DEFENSIVE_PLAYBOOKS) {
    for (const [formation, subs] of Object.entries(book.formations || {})) {
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
const DEF_PLAYBOOK_LOOKUP = buildDefPlaybookLookup();

function getDefPlaybooks(covName) {
  const key = covName.toLowerCase();
  const exact = DEF_PLAYBOOK_LOOKUP[key];
  if (exact) return [...exact].sort();
  const matches = new Set();
  for (const [k, books] of Object.entries(DEF_PLAYBOOK_LOOKUP)) {
    if (k.includes(key) || key.includes(k)) {
      for (const b of books) matches.add(b);
    }
  }
  return [...matches].sort();
}

// Mobile menu
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

const grid = document.getElementById('coverageGrid');
const modal = document.getElementById('coverageModal');
const modalContent = document.getElementById('coverageModalContent');
const searchInput = document.getElementById('coverageSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const shellFilter = document.getElementById('shellFilter');

let activeFilter = 'all';
let activeShell = 'all';
let renderers = [];
let visibleGroups = null;
let animSpeed = 3500;

function cleanup() {
  renderers.forEach(r => r.destroy());
  renderers = [];
}

function getTypeClass(type) {
  if (type === 'Man') return 'man';
  if (type === 'Zone') return 'zone';
  if (type === 'Zone Match') return 'zone-match';
  return 'hybrid';
}

function activateCard(card) {
  if (card._hoverActive || !card.isConnected) return;
  card._hoverActive = true;
  const canvas = card.querySelector('.play-art-canvas');
  const idx = card.dataset.covIdx;
  const cov = COVERAGES[parseInt(idx)];
  if (!canvas || !cov) return;

  const r = new PlayArtRenderer(canvas, { width: canvas.width, height: canvas.height });
  r.renderSinglePlayLive({
    mode: 'defense',
    defFormation: 'Nickel',
    coverageName: cov.name,
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
    const idx = card.dataset.covIdx;
    const cov = COVERAGES[parseInt(idx)];
    if (canvas && cov) {
      const r = new PlayArtRenderer(canvas, { width: canvas.width, height: canvas.height });
      r.renderCoverageCard('Nickel', cov.name);
      card._staticRenderer = r;
    }
  }
  card.classList.remove('live-active');
}

function bindHoverEvents(card) {
  card.addEventListener('mouseenter', () => activateCard(card));
  card.addEventListener('mouseleave', () => deactivateCard(card));
}

function renderCards(filter = 'all', search = '', shell = 'all') {
  cleanup();
  grid.innerHTML = '';
  const filtered = COVERAGES.filter(cov => {
    const matchFilter = filter === 'all' || cov.type === filter || (filter === 'Zone Match' && cov.type === 'Zone Match');
    const matchSearch = !search || cov.name.toLowerCase().includes(search.toLowerCase()) ||
      cov.description.toLowerCase().includes(search.toLowerCase());
    const matchShell = shell === 'all' || (cov.shell && cov.shell.includes(shell === 'Mixed' ? 'Mixed' : shell));
    return matchFilter && matchSearch && matchShell;
  });

  filtered.forEach((cov, i) => {
    const covIdx = COVERAGES.indexOf(cov);
    const variants = DEFENSIVE_PLAYS.filter(dp => dp.coverageFamily === cov.name.split('(')[0].trim() || dp.coverage === cov.name || dp.coverageFamily === cov.name);
    const card = document.createElement('div');
    card.className = 'coverage-card animate-fade-in';
    card.style.animationDelay = `${i * 0.05}s`;
    card.style.borderLeft = `3px solid ${cov.color}`;
    card.dataset.covIdx = covIdx;
    card.innerHTML = `
      <div class="play-art-wrapper">
        <canvas class="play-art-canvas" width="320" height="220"></canvas>
        <div class="play-art-live-badge"><i class="bi bi-broadcast"></i> LIVE</div>
      </div>
      <div class="card-info">
        <div class="flex items-center justify-between mb-1">
          <h3 class="font-bold text-lg truncate">${cov.name}</h3>
          <div class="flex items-center gap-1 flex-shrink-0 ml-2">
            <span class="text-xs px-1.5 py-0.5 rounded bg-dark-700 text-gray-400 border border-dark-600">${cov.shell}</span>
            <span class="type-badge ${getTypeClass(cov.type)}">${cov.type}</span>
          </div>
        </div>
        <p class="text-gray-400 text-xs mb-2 line-clamp-2">${cov.description}</p>
        <div class="flex gap-3 text-xs text-gray-500 mb-2">
          <span>${variants.length} variant${variants.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="mb-2">
          <span class="text-xs text-gray-500 font-semibold">STOPS:</span>
          <div class="mt-1 flex flex-wrap">${cov.stops.slice(0, 4).map(s => `<span class="tag-green">${s}</span>`).join('')}
          ${cov.stops.length > 4 ? `<span class="tag-green">+${cov.stops.length - 4}</span>` : ''}</div>
        </div>
        <div>
          <span class="text-xs text-gray-500 font-semibold">WEAK TO:</span>
          <div class="mt-1 flex flex-wrap">${cov.beatenBy.slice(0, 4).map(b => `<span class="tag-red">${b}</span>`).join('')}
          ${cov.beatenBy.length > 4 ? `<span class="tag-red">+${cov.beatenBy.length - 4}</span>` : ''}</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(cov, variants));
    bindHoverEvents(card);
    grid.appendChild(card);

    // Render static play art initially
    const canvas = card.querySelector('.play-art-canvas');
    if (canvas) {
      const r = new PlayArtRenderer(canvas, { width: 320, height: 220 });
      r.renderCoverageCard('Nickel', cov.name);
      card._staticRenderer = r;
    }
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-12">No coverages match your search.</div>';
  }

}

function openModal(cov, variants) {
  cleanup();
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
      <canvas id="modalCovArt" width="340" height="260" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
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
        <button class="speed-btn" data-speed="2000">1.5x</button>
        <button class="speed-btn active" data-speed="4000">1x</button>
        <button class="speed-btn" data-speed="6500">0.5x</button>
      </div>
    </div>

    <p class="text-gray-300 mb-4">${cov.description}</p>

    <div class="results-section mb-4">
      <h4 class="text-[#8A2BE2]"><i class="bi bi-book-fill mr-1"></i> Found in Playbooks (${getDefPlaybooks(cov.name).length})</h4>
      <div class="flex flex-wrap">${getDefPlaybooks(cov.name).map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
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
                <canvas id="varArt${vi}" width="60" height="48" class="rounded flex-shrink-0" style="background:#1a472a;"></canvas>
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
                  <canvas id="varArtBig${vi}" width="240" height="190" class="rounded-lg" style="background:#1a472a;"></canvas>
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

  // Live animated play art
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
      const r = new PlayArtRenderer(mainCanvas, { width: 340, height: 260 });
      r.renderLivePlay({
        side: covModalSide, offFormation: 'Shotgun', offSubFormation: 'Spread Y-Flex',
        playFamily: 'PA Crossers', defFormation: 'Nickel', coverageName: cov.name,
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
      const r = new PlayArtRenderer(thumbCanvas, { width: 60, height: 48 });
      r.renderCoverageCard(v.formation, v.coverage);
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
          const r = new PlayArtRenderer(bigCanvas, { width: 240, height: 190 });
          r.renderCoverageCard(v.formation, v.coverage);
          renderers.push(r);
          bigCanvas.dataset.rendered = '1';
        }
      }
    });
  });
}

function closeModal() { cleanup(); modal.classList.remove('active'); renderCards(activeFilter, searchInput.value, activeShell); }
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCards(activeFilter, searchInput.value, activeShell);
  });
});

if (shellFilter) {
  shellFilter.addEventListener('change', () => {
    activeShell = shellFilter.value;
    renderCards(activeFilter, searchInput.value, activeShell);
  });
}

searchInput.addEventListener('input', () => renderCards(activeFilter, searchInput.value, activeShell));

// Position group filter toolbar
function buildPosFilter() {
  const container = document.getElementById('posFilterContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="pos-filter-bar">
      <span class="label"><i class="bi bi-funnel-fill"></i> Show:</span>
      <button class="pos-toggle active def-group" data-group="DL">DL</button>
      <button class="pos-toggle active def-group" data-group="LB">LB</button>
      <button class="pos-toggle active def-group" data-group="DB">DB</button>
      <span class="label ml-2"><i class="bi bi-speedometer2"></i></span>
      <button class="speed-btn" data-speed="2000" title="Fast">1.5x</button>
      <button class="speed-btn active" data-speed="3500" title="Normal">1x</button>
      <button class="speed-btn" data-speed="5500" title="Slow">0.5x</button>
    </div>
  `;
  container.querySelectorAll('.pos-toggle').forEach(btn => {
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
  const activeToggles = container.querySelectorAll('.pos-toggle.active');
  const allToggles = container.querySelectorAll('.pos-toggle');
  if (activeToggles.length === allToggles.length) {
    visibleGroups = null; // All visible
  } else {
    visibleGroups = new Set();
    activeToggles.forEach(t => visibleGroups.add(t.dataset.group));
  }
}

function refreshActiveCards() {
  const cards = grid.querySelectorAll('.coverage-card.live-active');
  cards.forEach(card => {
    deactivateCard(card);
    activateCard(card);
  });
}

buildPosFilter();
renderCards();
