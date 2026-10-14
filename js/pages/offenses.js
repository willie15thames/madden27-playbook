import PLAY_TYPES from '../data/plays.js';
import OFFENSIVE_PLAYS from '../data/offensive-plays.js';
import { PlayArtRenderer } from '../components/playArt.js';

document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

const grid = document.getElementById('playsGrid');
const modal = document.getElementById('playModal');
const modalContent = document.getElementById('playModalContent');
const searchInput = document.getElementById('playSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';
let renderers = [];
let observer = null;
let activeCards = new Set();
const MAX_ACTIVE = 3;
let visibleGroups = null;
let animSpeed = 3500;

function cleanup() {
  renderers.forEach(r => r.destroy());
  renderers = [];
  activeCards.clear();
  if (observer) { observer.disconnect(); observer = null; }
}

function getSubtypeBadgeClass(subtype) {
  if (['Zone Run', 'Gap Run', 'Outside Run', 'Draw', 'Option', 'Short Yardage'].includes(subtype)) return 'run';
  if (subtype === 'Screen') return 'screen';
  if (subtype === 'RPO') return 'rpo';
  return 'pass';
}

function activateCard(card) {
  if (activeCards.has(card) || !card.isConnected) return;

  if (activeCards.size >= MAX_ACTIVE) {
    const oldest = activeCards.values().next().value;
    deactivateCard(oldest);
  }

  activeCards.add(card);
  const canvas = card.querySelector('.play-art-canvas');
  const playName = card.dataset.playName;
  if (!canvas || !playName) return;

  const r = new PlayArtRenderer(canvas, { width: canvas.width, height: canvas.height });
  r.renderSinglePlayLive({
    mode: 'offense',
    offFormation: 'Shotgun',
    offSubFormation: 'Spread Y-Flex',
    playFamily: playName,
    duration: animSpeed,
    visibleGroups
  });
  card._renderer = r;
  renderers.push(r);
  card.classList.add('live-active');
}

function deactivateCard(card) {
  if (!activeCards.has(card)) return;
  activeCards.delete(card);
  if (card._renderer) {
    card._renderer.destroy();
    renderers = renderers.filter(r => r !== card._renderer);
    card._renderer = null;
    // Redraw static
    const canvas = card.querySelector('.play-art-canvas');
    const playName = card.dataset.playName;
    if (canvas && playName) {
      const r = new PlayArtRenderer(canvas, { width: canvas.width, height: canvas.height });
      r.renderPlayCard('Shotgun', 'Spread Y-Flex', playName);
      card._staticRenderer = r;
    }
  }
  card.classList.remove('live-active');
}

function setupObserver() {
  if (observer) observer.disconnect();

  const cards = Array.from(grid.querySelectorAll('.play-card'));
  if (cards.length === 0) return;

  const visibleCards = [];

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const card = entry.target;
      if (entry.isIntersecting) {
        if (!visibleCards.includes(card)) visibleCards.push(card);
      } else {
        const idx = visibleCards.indexOf(card);
        if (idx !== -1) visibleCards.splice(idx, 1);
        deactivateCard(card);
      }
    }

    visibleCards.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      return ra.top - rb.top || ra.left - rb.left;
    });

    for (const card of activeCards) {
      if (visibleCards.indexOf(card) >= MAX_ACTIVE || !visibleCards.includes(card)) {
        deactivateCard(card);
      }
    }

    for (let i = 0; i < Math.min(MAX_ACTIVE, visibleCards.length); i++) {
      activateCard(visibleCards[i]);
    }
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
}

function renderCards(filter = 'all', search = '') {
  cleanup();
  grid.innerHTML = '';
  const entries = Object.entries(PLAY_TYPES);
  const filtered = entries.filter(([name, play]) => {
    const matchFilter = filter === 'all' || play.type === filter;
    const matchSearch = !search || name.toLowerCase().includes(search.toLowerCase()) ||
      play.description.toLowerCase().includes(search.toLowerCase()) ||
      play.subtype.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  filtered.forEach(([name, play], i) => {
    const variants = OFFENSIVE_PLAYS.filter(op => op.family === name || op.name === name);
    const card = document.createElement('div');
    card.className = 'play-card animate-fade-in';
    card.style.animationDelay = `${i * 0.04}s`;
    card.dataset.playName = name;
    card.innerHTML = `
      <div class="play-art-wrapper">
        <canvas class="play-art-canvas" width="320" height="220"></canvas>
        <div class="play-art-live-badge"><i class="bi bi-broadcast"></i> LIVE</div>
      </div>
      <div class="card-info">
        <div class="flex items-center justify-between mb-1">
          <h3 class="font-bold truncate">${name}</h3>
        </div>
        <div class="flex gap-1 mb-1">
          <span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span>
          <span class="play-type-badge ${getSubtypeBadgeClass(play.subtype)}">${play.subtype}</span>
        </div>
        <p class="text-gray-400 text-xs line-clamp-2">${play.description}</p>
        <div class="text-xs text-gray-500 mt-1">${variants.length} variant${variants.length !== 1 ? 's' : ''}</div>
        <div class="mb-1 mt-2">
          <span class="text-xs text-gray-500 font-semibold">BEATS:</span>
          <div class="mt-1 flex flex-wrap">${play.goodVsCoverages.slice(0, 3).map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
        </div>
        <div>
          <span class="text-xs text-gray-500 font-semibold">STOPPED BY:</span>
          <div class="mt-1 flex flex-wrap">${play.badVsCoverages.slice(0, 3).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(name, play, variants));
    grid.appendChild(card);

    // Static play art
    const canvas = card.querySelector('.play-art-canvas');
    if (canvas) {
      const r = new PlayArtRenderer(canvas, { width: 320, height: 220 });
      r.renderPlayCard('Shotgun', 'Spread Y-Flex', name);
      card._staticRenderer = r;
    }
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-12">No plays match your search.</div>';
  }

  requestAnimationFrame(() => setupObserver());
}

function openModal(name, play, variants) {
  cleanup();
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
      <canvas id="modalOffArt" width="340" height="260" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
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

    <p class="text-gray-300 mb-4">${play.description}</p>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-green-400"><i class="bi bi-lightning-fill mr-1"></i> Beats</h4>
        <div class="flex flex-wrap">${play.beats.map(b => `<span class="tag-green">${b}</span>`).join('')}</div>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-red-400"><i class="bi bi-shield-fill mr-1"></i> Stopped By</h4>
        <div class="flex flex-wrap">${play.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-green-400">Good vs Coverages</h4>
        <div class="flex flex-wrap">${play.goodVsCoverages.map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-red-400">Bad vs Coverages</h4>
        <div class="flex flex-wrap">${(play.badVsCoverages.length ? play.badVsCoverages : ['None']).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
      </div>
    </div>

    <div class="p-3 bg-dark-700 rounded-lg border border-dark-600 mb-4">
      <p class="text-xs text-neon-cyan font-bold mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</p>
      <p class="text-xs text-gray-300">${play.tips}</p>
    </div>

    ${variants.length > 0 ? `
    <div class="border-t border-dark-600 pt-4 mt-4">
      <h3 class="text-lg font-black mb-3"><i class="bi bi-layers-fill text-neon-purple mr-2"></i>All Variants (${variants.length})</h3>
      <div class="space-y-2" id="variantsList">
        ${variants.map((v, vi) => `
          <div class="formation-group">
            <div class="formation-header variant-header" data-vi="${vi}">
              <div class="flex items-center gap-2">
                <canvas id="offVar${vi}" width="60" height="48" class="rounded flex-shrink-0" style="background:#1a472a;"></canvas>
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
                  <canvas id="offVarBig${vi}" width="240" height="190" class="rounded-lg" style="background:#1a472a;"></canvas>
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
      const r = new PlayArtRenderer(mainCanvas, { width: 340, height: 260 });
      r.renderLivePlay({
        side: offModalSide, offFormation: 'Shotgun', offSubFormation: 'Spread Y-Flex',
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
      const r = new PlayArtRenderer(thumb, { width: 60, height: 48 });
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
          const r = new PlayArtRenderer(bigCanvas, { width: 240, height: 190 });
          r.renderPlayCard(v.formation, v.subFormation, v.family || v.name);
          renderers.push(r);
          bigCanvas.dataset.rendered = '1';
        }
      }
    });
  });
}

function closeModal() { cleanup(); modal.classList.remove('active'); renderCards(activeFilter, searchInput.value); }
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCards(activeFilter, searchInput.value);
  });
});

searchInput.addEventListener('input', () => renderCards(activeFilter, searchInput.value));

// Position group filter toolbar
function buildPosFilter() {
  const container = document.getElementById('posFilterContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="pos-filter-bar">
      <span class="label"><i class="bi bi-funnel-fill"></i> Show:</span>
      <button class="pos-toggle active off-group" data-group="OL">OL</button>
      <button class="pos-toggle active off-group" data-group="QB">QB</button>
      <button class="pos-toggle active off-group" data-group="WR">WR</button>
      <button class="pos-toggle active off-group" data-group="TE">TE</button>
      <button class="pos-toggle active off-group" data-group="RB">RB</button>
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
    visibleGroups = null;
  } else {
    visibleGroups = new Set();
    activeToggles.forEach(t => visibleGroups.add(t.dataset.group));
  }
}

function refreshActiveCards() {
  const cards = [...activeCards];
  cards.forEach(card => {
    deactivateCard(card);
    activateCard(card);
  });
}

buildPosFilter();
renderCards();
