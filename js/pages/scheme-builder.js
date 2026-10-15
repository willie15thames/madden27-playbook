// Scheme Builder - Live Animation + Floating Salesforce-Style Panel
import { HOT_ROUTES, OFFENSIVE_ADJUSTMENTS, DEFENSIVE_ADJUSTMENTS, MACROS } from '../data/adjustments.js';
import { OFFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import COVERAGES from '../data/coverages.js';
import { PlayArtRenderer } from '../components/playArt.js';
import { calculateMatchupGrade, recommendPlays, CONCEPT_LABELS } from '../data/analytics.js';

// ===== STATE =====
let activeRenderer = null;
let isFlipped = false;
let isLooping = true;
let isPlaying = true;
let currentPlay = null;
let currentCoverage = null;
let currentRoutes = { WR1: 'streak', WR2: 'curl', WR3: 'slant', TE: 'drag', RB: 'flat' };

// ===== DOM =====
const liveCanvas = document.getElementById('liveCanvas');
const pbSelect = document.getElementById('pbSelect');
const fmSelect = document.getElementById('fmSelect');
const sfSelect = document.getElementById('sfSelect');
const plSelect = document.getElementById('plSelect');
const covSelect = document.getElementById('covSelect');
const btnPlay = document.getElementById('btnPlay');
const btnReplay = document.getElementById('btnReplay');
const btnLoop = document.getElementById('btnLoop');
const floatingPanel = document.getElementById('floatingPanel');
const panelDragHandle = document.getElementById('panelDragHandle');
const panelBody = document.getElementById('panelBody');
const togglePanelBtn = document.getElementById('togglePanelBtn');
const detailModal = document.getElementById('detailModal');
const detailModalContent = document.getElementById('detailModalContent');

// ===== POPULATE SELECTS =====
function initSelects() {
  // Playbooks
  const sorted = [...OFFENSIVE_PLAYBOOKS].sort((a, b) => a.name.localeCompare(b.name));
  pbSelect.innerHTML = '<option value="">Playbook...</option>' +
    sorted.map(b => `<option value="${b.name}">${b.name}</option>`).join('');

  // Coverages
  const covSorted = [...COVERAGES].sort((a, b) => a.name.localeCompare(b.name));
  covSelect.innerHTML = '<option value="">No coverage</option>' +
    covSorted.map(c => `<option value="${c.name}">${c.name}</option>`).join('');

  // Cascading selects
  pbSelect.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === pbSelect.value);
    fmSelect.innerHTML = '<option value="">Formation...</option>';
    sfSelect.innerHTML = '<option value="">Sub-formation...</option>';
    plSelect.innerHTML = '<option value="">Play...</option>';
    fmSelect.disabled = true; sfSelect.disabled = true; plSelect.disabled = true;
    if (book && book.formations) {
      Object.keys(book.formations).sort().forEach(f => {
        fmSelect.innerHTML += `<option value="${f}">${f}</option>`;
      });
      fmSelect.disabled = false;
    }
  });

  fmSelect.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === pbSelect.value);
    sfSelect.innerHTML = '<option value="">Sub-formation...</option>';
    plSelect.innerHTML = '<option value="">Play...</option>';
    sfSelect.disabled = true; plSelect.disabled = true;
    if (book && book.formations && book.formations[fmSelect.value]) {
      Object.keys(book.formations[fmSelect.value]).sort().forEach(s => {
        sfSelect.innerHTML += `<option value="${s}">${s}</option>`;
      });
      sfSelect.disabled = false;
    }
  });

  sfSelect.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === pbSelect.value);
    plSelect.innerHTML = '<option value="">Play...</option>';
    plSelect.disabled = true;
    if (book && book.formations && book.formations[fmSelect.value]) {
      const plays = book.formations[fmSelect.value][sfSelect.value] || [];
      [...plays].sort().forEach(p => {
        plSelect.innerHTML += `<option value="${p}">${p}</option>`;
      });
      plSelect.disabled = false;
    }
  });

  plSelect.addEventListener('change', () => {
    currentPlay = plSelect.value;
    updateAnimation();
  });

  covSelect.addEventListener('change', () => {
    currentCoverage = covSelect.value || null;
    updateAnimation();
  });
}

// ===== LIVE ANIMATION =====
function updateAnimation() {
  if (activeRenderer) activeRenderer.destroy();
  if (!currentPlay && !fmSelect.value) {
    // Show empty field
    const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
    activeRenderer = renderer;
    renderer.drawField();
    updatePlayInfo(null, null);
    return;
  }

  const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
  activeRenderer = renderer;

  const formation = fmSelect.value || 'Shotgun';
  const subFormation = sfSelect.value || 'Spread Y-Flex';
  const play = currentPlay || 'Inside Zone';

  if (currentCoverage) {
    renderer.renderLivePlay({
      side: 'both',
      offFormation: formation,
      offSubFormation: subFormation,
      playFamily: play,
      defFormation: 'Nickel',
      coverageName: currentCoverage,
      duration: 3500
    });
  } else {
    renderer.renderSinglePlayLive({
      mode: 'offense',
      offFormation: formation,
      offSubFormation: subFormation,
      playFamily: play,
      duration: 3500
    });
  }

  updatePlayInfo(play, currentCoverage);
  updateAnalytics();
}

function updatePlayInfo(play, coverage) {
  const nameEl = document.getElementById('infoPlayName');
  const typeEl = document.getElementById('infoPlayType');
  const vsEl = document.getElementById('infoVsCoverage');

  if (!play) {
    nameEl.textContent = 'Select a play';
    typeEl.textContent = 'Choose a playbook, formation, and play above';
    vsEl.textContent = '';
    return;
  }

  nameEl.textContent = play;
  const formation = fmSelect.value || '';
  const sub = sfSelect.value || '';
  typeEl.textContent = [formation, sub].filter(Boolean).join(' > ');

  if (coverage) {
    const grade = calculateMatchupGrade(play, coverage);
    vsEl.innerHTML = `<span class="text-neon-red font-bold">vs ${coverage}</span> <span class="ml-2 font-black" style="color: ${grade.color}">${grade.grade} — ${grade.label}</span>`;
    vsEl.className = 'text-xs';
  } else {
    vsEl.textContent = '';
    vsEl.className = 'text-xs text-gray-500';
  }
}

// ===== PLAY CONTROLS =====
btnPlay.addEventListener('click', () => {
  isPlaying = !isPlaying;
  btnPlay.innerHTML = isPlaying ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-play-fill"></i>';
  btnPlay.classList.toggle('active', isPlaying);
  if (isPlaying) updateAnimation();
  else if (activeRenderer) activeRenderer.destroy();
});

btnReplay.addEventListener('click', updateAnimation);

btnLoop.addEventListener('click', () => {
  isLooping = !isLooping;
  btnLoop.classList.toggle('active', isLooping);
  updateAnimation();
});
btnLoop.classList.add('active');

// ===== FLOATING PANEL DRAG =====
function initDrag() {
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  panelDragHandle.addEventListener('mousedown', (e) => {
    if (e.target.closest('button')) return;
    isDragging = true;
    floatingPanel.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
    const rect = floatingPanel.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - 100, startLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - 60, startTop + dy));
    floatingPanel.style.left = newLeft + 'px';
    floatingPanel.style.top = newTop + 'px';
    floatingPanel.style.right = 'auto';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    floatingPanel.classList.remove('dragging');
  });

  // Touch support
  panelDragHandle.addEventListener('touchstart', (e) => {
    if (e.target.closest('button')) return;
    isDragging = true;
    floatingPanel.classList.add('dragging');
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    const rect = floatingPanel.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - 100, startLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - 60, startTop + dy));
    floatingPanel.style.left = newLeft + 'px';
    floatingPanel.style.top = newTop + 'px';
    floatingPanel.style.right = 'auto';
  }, { passive: true });

  document.addEventListener('touchend', () => {
    isDragging = false;
    floatingPanel.classList.remove('dragging');
  });
}

// ===== PANEL SHOW/HIDE =====
document.getElementById('panelClose').addEventListener('click', () => {
  floatingPanel.classList.add('hidden');
  togglePanelBtn.classList.remove('hidden');
});

document.getElementById('panelMinimize').addEventListener('click', () => {
  panelBody.classList.toggle('hidden');
});

togglePanelBtn.addEventListener('click', () => {
  floatingPanel.classList.remove('hidden');
  togglePanelBtn.classList.add('hidden');
});

// ===== ACCORDION SECTIONS =====
document.querySelectorAll('.panel-section-header').forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('open');
    const body = header.nextElementSibling;
    body.classList.toggle('open');
  });
});

// ===== HOT ROUTES IN PANEL =====
function renderPanelHotRoutes() {
  const container = document.getElementById('panelRouteAssignments');
  const positions = Object.keys(currentRoutes);
  container.innerHTML = positions.map(pos => `
    <div class="flex items-center gap-2">
      <span class="text-xs font-bold w-8 text-neon-cyan">${pos}</span>
      <select class="panel-mini-select flex-1" data-pos="${pos}">
        ${HOT_ROUTES.map(r =>
          `<option value="${r.id}" ${currentRoutes[pos] === r.id ? 'selected' : ''}>${r.icon} ${r.name}</option>`
        ).join('')}
      </select>
    </div>
  `).join('');

  container.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', () => {
      currentRoutes[sel.dataset.pos] = sel.value;
    });
  });
}

// ===== OFFENSIVE ADJUSTMENTS IN PANEL =====
function renderOffAdj() {
  const container = document.getElementById('offAdjContent');
  container.innerHTML = Object.values(OFFENSIVE_ADJUSTMENTS).map(group => `
    <div class="mb-3">
      <div class="text-xs font-bold text-gray-500 uppercase mb-1">${group.name}</div>
      <div class="flex flex-wrap gap-1">
        ${group.options.map(opt => `
          <button class="panel-mini-btn" data-adj="${opt.id}" title="${opt.description}\n${opt.effect}">
            ${opt.name}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-adj]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });
}

// ===== DEFENSIVE ADJUSTMENTS IN PANEL =====
function renderDefAdj() {
  const container = document.getElementById('defAdjContent');
  container.innerHTML = Object.values(DEFENSIVE_ADJUSTMENTS).map(group => `
    <div class="mb-3">
      <div class="text-xs font-bold text-gray-500 uppercase mb-1">${group.name}</div>
      <div class="flex flex-wrap gap-1">
        ${group.options.map(opt => `
          <button class="panel-mini-btn" data-adj="${opt.id}" title="${opt.description}\n${opt.effect}">
            ${opt.name}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-adj]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });
}

// ===== MACROS IN PANEL =====
function renderPanelMacros() {
  const container = document.getElementById('panelMacrosGrid');
  container.innerHTML = MACROS.map(macro => {
    const sideColor = macro.side === 'offense' ? 'text-neon-cyan' : 'text-neon-red';
    const sideIcon = macro.side === 'offense' ? 'bi-lightning-fill' : 'bi-shield-fill';
    return `
      <button class="panel-mini-btn text-left py-2 px-2" data-macro="${macro.id}" title="${macro.description}">
        <i class="bi ${sideIcon} ${sideColor} mr-1"></i>
        <span class="text-xs">${macro.name}</span>
      </button>
    `;
  }).join('');

  container.querySelectorAll('[data-macro]').forEach(btn => {
    btn.addEventListener('click', () => showMacroDetail(btn.dataset.macro));
  });
}

function showMacroDetail(macroId) {
  const macro = MACROS.find(m => m.id === macroId);
  if (!macro) return;

  const sideColor = macro.side === 'offense' ? '#00FFFF' : '#FF1493';
  const sideLabel = macro.side === 'offense' ? 'Offensive' : 'Defensive';

  detailModalContent.innerHTML = `
    <div class="max-w-lg mx-auto">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span class="text-xs font-bold uppercase" style="color: ${sideColor}">${sideLabel} Macro</span>
          <h2 class="text-2xl font-black">${macro.name}</h2>
        </div>
        <button class="text-gray-400 hover:text-white text-2xl" id="closeModal">&times;</button>
      </div>
      <p class="text-gray-300 mb-4">${macro.description}</p>

      <h3 class="text-sm font-bold text-gray-400 uppercase mb-2">Adjustments Applied</h3>
      <div class="flex flex-wrap gap-1 mb-4">
        ${macro.adjustments.map(a => `<span class="tag-blue text-xs">${formatAdjId(a)}</span>`).join('')}
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-sm font-bold text-green-400 uppercase mb-2">Best Against</h3>
          <div class="flex flex-wrap gap-1">
            ${macro.bestAgainst.map(p => `<span class="tag-green text-xs">${p}</span>`).join('')}
          </div>
        </div>
        <div>
          <h3 class="text-sm font-bold text-red-400 uppercase mb-2">Countered By</h3>
          <div class="flex flex-wrap gap-1">
            ${macro.counters.map(p => `<span class="tag-red text-xs">${p}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  detailModal.classList.add('active');
  document.getElementById('closeModal').addEventListener('click', () => detailModal.classList.remove('active'));
}

function formatAdjId(id) {
  return id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ===== ANALYTICS PANEL =====
const situationSelect = document.getElementById('situationSelect');
const analyticsGradeDisplay = document.getElementById('analyticsGradeDisplay');
const analyticsRecommendations = document.getElementById('analyticsRecommendations');

function updateAnalytics() {
  if (!currentPlay || !currentCoverage) {
    if (analyticsGradeDisplay) analyticsGradeDisplay.innerHTML = '<p class="text-xs text-gray-500">Select a play and coverage to see grades</p>';
    if (analyticsRecommendations) analyticsRecommendations.innerHTML = '';
    return;
  }

  const situation = situationSelect?.value || '';
  const grade = calculateMatchupGrade(currentPlay, currentCoverage, { situation: situation || undefined });

  if (analyticsGradeDisplay) {
    analyticsGradeDisplay.innerHTML = `
      <div class="p-2 rounded-lg bg-dark-700 border border-dark-600">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-gray-400">MATCHUP GRADE</span>
          <span class="text-sm font-black" style="color: ${grade.color}">${grade.grade}</span>
        </div>
        <div class="w-full bg-dark-900 rounded-full h-2 overflow-hidden">
          <div class="h-2 rounded-full" style="width: ${grade.grade}%; background: ${grade.color}"></div>
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-xs text-gray-500">${CONCEPT_LABELS[grade.conceptKey] || ''}</span>
          <span class="text-xs font-bold" style="color: ${grade.color}">${grade.label}</span>
        </div>
      </div>
    `;
  }

  if (analyticsRecommendations) {
    const recs = recommendPlays(currentCoverage, { situation: situation || undefined }).slice(0, 5);
    analyticsRecommendations.innerHTML = `
      <div class="mt-2">
        <div class="text-xs font-bold text-gray-500 uppercase mb-1">Best concepts vs ${currentCoverage}</div>
        <div class="space-y-1">
          ${recs.map(r => `
            <div class="flex items-center gap-1">
              <div class="w-full bg-dark-900 rounded-full h-1.5 flex-1 overflow-hidden">
                <div class="h-1.5 rounded-full" style="width: ${r.grade}%; background: ${r.color}"></div>
              </div>
              <span class="text-xs font-bold w-6 text-right" style="color: ${r.color}">${r.grade}</span>
              <span class="text-xs text-gray-400 w-24 truncate">${r.conceptLabel}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

if (situationSelect) {
  situationSelect.addEventListener('change', updateAnalytics);
}

// ===== PLAY CREATOR CONTROLS =====
function initCreatorControls() {
  const btnFlip = document.getElementById('btnFlip');
  const btnReset = document.getElementById('btnReset');

  btnFlip.addEventListener('click', () => {
    isFlipped = !isFlipped;
    btnFlip.classList.toggle('active', isFlipped);
    updateAnimation();
  });

  btnReset.addEventListener('click', () => {
    currentRoutes = { WR1: 'streak', WR2: 'curl', WR3: 'slant', TE: 'drag', RB: 'flat' };
    isFlipped = false;
    document.getElementById('creatorPlayName').value = '';
    renderPanelHotRoutes();
    updateAnimation();
  });
}

// ===== MODAL CLOSE =====
detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('active');
});

// ===== INITIALIZE =====
initSelects();
initDrag();
renderPanelHotRoutes();
renderOffAdj();
renderDefAdj();
renderPanelMacros();
initCreatorControls();

// Draw initial empty field
const initRenderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
activeRenderer = initRenderer;
initRenderer.drawField();
