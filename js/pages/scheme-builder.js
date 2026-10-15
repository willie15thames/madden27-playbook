// Scheme Builder - Adjustments, Macros, Hot Routes, and Play Creator
import { HOT_ROUTES, OFFENSIVE_ADJUSTMENTS, DEFENSIVE_ADJUSTMENTS, MACROS, PLAY_TEMPLATES } from '../data/adjustments.js';
import { OFFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import COVERAGES from '../data/coverages.js';
import PlayArtRenderer from '../components/playArt.js';

// ===== DOM Elements =====
const tabBtns = document.querySelectorAll('[data-tab]');
const macrosGrid = document.getElementById('macrosGrid');
const adjustmentsContainer = document.getElementById('adjustmentsContainer');
const hotRoutesGrid = document.getElementById('hotRoutesGrid');
const detailModal = document.getElementById('detailModal');
const detailModalContent = document.getElementById('detailModalContent');

// Play Creator elements
const creatorCanvas = document.getElementById('creatorCanvas');
const routeAssignments = document.getElementById('routeAssignments');
const playNameInput = document.getElementById('playNameInput');
const creatorFormation = document.getElementById('creatorFormation');
const templateDropdown = document.getElementById('templateDropdown');
const existingPlaybook = document.getElementById('existingPlaybook');
const existingFormation = document.getElementById('existingFormation');
const existingSub = document.getElementById('existingSub');
const existingPlay = document.getElementById('existingPlay');
const testCoverage = document.getElementById('testCoverage');
const flipPlayBtn = document.getElementById('flipPlayBtn');
const resetPlayBtn = document.getElementById('resetPlayBtn');

let activeRenderer = null;
let isFlipped = false;

// Current route state for play creator
let currentRoutes = {
  WR1: 'streak', WR2: 'curl', WR3: 'slant', TE: 'drag', RB: 'flat'
};

// ===== TAB SWITCHING =====
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    const tabId = 'tab' + btn.dataset.tab.charAt(0).toUpperCase() + btn.dataset.tab.slice(1);
    const tab = document.getElementById(tabId);
    if (tab) tab.classList.remove('hidden');
  });
});

// ===== MACROS RENDERING =====
function renderMacros(filter = 'all') {
  const filtered = filter === 'all' ? MACROS : MACROS.filter(m => m.side === filter);
  macrosGrid.innerHTML = filtered.map(macro => {
    const sideColor = macro.side === 'offense' ? 'text-neon-cyan' : 'text-neon-red';
    const sideIcon = macro.side === 'offense' ? 'bi-lightning-fill' : 'bi-shield-fill';
    const sideBg = macro.side === 'offense' ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-pink-500/10 border-pink-500/30';
    return `
      <div class="results-panel cursor-pointer hover:border-[#00FFFF]/50 transition-all" data-macro-id="${macro.id}">
        <div class="flex items-center gap-2 mb-2">
          <i class="bi ${sideIcon} ${sideColor}"></i>
          <h3 class="font-bold text-lg">${macro.name}</h3>
        </div>
        <p class="text-sm text-gray-400 mb-3">${macro.description}</p>
        <div class="flex flex-wrap gap-1 mb-2">
          ${macro.adjustments.map(a => `<span class="tag-blue text-xs">${formatAdjId(a)}</span>`).join('')}
        </div>
        <div class="text-xs text-gray-500">
          <span class="text-green-400">Best vs:</span> ${macro.bestAgainst.slice(0, 3).join(', ')}
        </div>
      </div>
    `;
  }).join('');

  // Click handlers
  macrosGrid.querySelectorAll('[data-macro-id]').forEach(el => {
    el.addEventListener('click', () => showMacroDetail(el.dataset.macroId));
  });
}

function formatAdjId(id) {
  return id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
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
      <div class="space-y-2 mb-4">
        ${macro.adjustments.map(a => {
          const adj = findAdjustment(a);
          return `<div class="flex items-center gap-2 bg-dark-700/50 rounded-lg p-2">
            <span class="tag-blue text-xs">${formatAdjId(a)}</span>
            <span class="text-xs text-gray-400">${adj ? adj.description : ''}</span>
          </div>`;
        }).join('')}
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

function findAdjustment(id) {
  const allAdj = { ...OFFENSIVE_ADJUSTMENTS, ...DEFENSIVE_ADJUSTMENTS };
  for (const group of Object.values(allAdj)) {
    const found = group.options.find(o => o.id === id);
    if (found) return found;
  }
  return null;
}

// Macro filter buttons
document.querySelectorAll('[data-macro-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-macro-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMacros(btn.dataset.macroFilter);
  });
});

// ===== ADJUSTMENTS RENDERING =====
function renderAdjustments(filter = 'all') {
  const offGroups = filter === 'defense' ? {} : OFFENSIVE_ADJUSTMENTS;
  const defGroups = filter === 'offense' ? {} : DEFENSIVE_ADJUSTMENTS;

  let html = '';

  if (Object.keys(offGroups).length > 0) {
    html += `<h2 class="text-xl font-bold text-neon-cyan mb-4"><i class="bi bi-lightning-fill mr-1"></i> Offensive Adjustments</h2>`;
    html += renderAdjustmentGroups(offGroups, 'offense');
  }

  if (Object.keys(defGroups).length > 0) {
    html += `<h2 class="text-xl font-bold text-neon-red mb-4 mt-6"><i class="bi bi-shield-fill mr-1"></i> Defensive Adjustments</h2>`;
    html += renderAdjustmentGroups(defGroups, 'defense');
  }

  adjustmentsContainer.innerHTML = html;
}

function renderAdjustmentGroups(groups, side) {
  const borderColor = side === 'offense' ? 'border-cyan-500/30' : 'border-pink-500/30';
  return Object.values(groups).map(group => `
    <div class="results-panel mb-4 ${borderColor}">
      <h3 class="font-bold text-lg mb-3">${group.name}
        <span class="text-xs text-gray-500 ml-2">${group.category}</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        ${group.options.map(opt => `
          <div class="bg-dark-700/50 rounded-lg p-3 hover:bg-dark-700 transition-colors">
            <div class="font-semibold text-sm">${opt.name}</div>
            <p class="text-xs text-gray-400 mt-1">${opt.description}</p>
            <p class="text-xs text-gray-500 mt-1"><span class="text-neon-cyan">Effect:</span> ${opt.effect}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Adjustment filter buttons
document.querySelectorAll('[data-adj-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-adj-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAdjustments(btn.dataset.adjFilter);
  });
});

// ===== HOT ROUTES RENDERING =====
function renderHotRoutes(filter = 'all') {
  const filtered = filter === 'all' ? HOT_ROUTES : HOT_ROUTES.filter(r => r.type === filter);
  hotRoutesGrid.innerHTML = filtered.map(route => {
    const typeColors = {
      deep: 'text-red-400 bg-red-500/10',
      intermediate: 'text-yellow-400 bg-yellow-500/10',
      short: 'text-green-400 bg-green-500/10',
      protection: 'text-blue-400 bg-blue-500/10',
      modifier: 'text-purple-400 bg-purple-500/10'
    };
    const color = typeColors[route.type] || 'text-gray-400 bg-gray-500/10';
    return `
      <div class="results-panel text-center hover:border-[#00FFFF]/50 transition-all">
        <div class="text-3xl mb-2">${route.icon}</div>
        <h3 class="font-bold">${route.name}</h3>
        <span class="inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${color}">${route.type}</span>
        <p class="text-xs text-gray-400 mt-2">${route.description}</p>
      </div>
    `;
  }).join('');
}

// Hot route filter buttons
document.querySelectorAll('[data-hr-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-hr-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderHotRoutes(btn.dataset.hrFilter);
  });
});

// ===== PLAY CREATOR =====
function initPlayCreator() {
  // Populate coverage test dropdown
  const sortedCoverages = [...COVERAGES].sort((a, b) => a.name.localeCompare(b.name));
  testCoverage.innerHTML = '<option value="">No coverage (offense only)</option>' +
    sortedCoverages.map(c => `<option value="${c.name}">${c.name}</option>`).join('');

  // Populate existing playbook dropdown
  const sortedBooks = [...OFFENSIVE_PLAYBOOKS].sort((a, b) => a.name.localeCompare(b.name));
  existingPlaybook.innerHTML = '<option value="">Choose a playbook...</option>' +
    sortedBooks.map(b => `<option value="${b.name}">${b.name}</option>`).join('');

  // Create mode buttons
  document.querySelectorAll('[data-create]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-create]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('templateSelect').classList.toggle('hidden', btn.dataset.create !== 'template');
      document.getElementById('existingSelect').classList.toggle('hidden', btn.dataset.create !== 'existing');
      if (btn.dataset.create === 'scratch') resetRoutes();
    });
  });

  // Template selection
  templateDropdown.addEventListener('change', () => {
    const template = PLAY_TEMPLATES[templateDropdown.value];
    if (template) {
      currentRoutes = { ...template.defaultRoutes };
      renderRouteAssignments();
      updatePreview();
    }
  });

  // Existing play cascading selects
  existingPlaybook.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === existingPlaybook.value);
    existingFormation.innerHTML = '<option value="">Choose a formation...</option>';
    existingSub.innerHTML = '<option value="">Choose a sub-formation...</option>';
    existingPlay.innerHTML = '<option value="">Choose a play...</option>';
    if (book && book.formations) {
      Object.keys(book.formations).sort().forEach(f => {
        existingFormation.innerHTML += `<option value="${f}">${f}</option>`;
      });
    }
  });

  existingFormation.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === existingPlaybook.value);
    existingSub.innerHTML = '<option value="">Choose a sub-formation...</option>';
    existingPlay.innerHTML = '<option value="">Choose a play...</option>';
    if (book && book.formations && book.formations[existingFormation.value]) {
      Object.keys(book.formations[existingFormation.value]).sort().forEach(s => {
        existingSub.innerHTML += `<option value="${s}">${s}</option>`;
      });
    }
  });

  existingSub.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === existingPlaybook.value);
    existingPlay.innerHTML = '<option value="">Choose a play...</option>';
    if (book && book.formations && book.formations[existingFormation.value]) {
      const plays = book.formations[existingFormation.value][existingSub.value] || [];
      [...plays].sort().forEach(p => {
        existingPlay.innerHTML += `<option value="${p}">${p}</option>`;
      });
    }
  });

  existingPlay.addEventListener('change', () => {
    if (existingPlay.value) {
      playNameInput.value = existingPlay.value + ' (Modified)';
      updatePreview();
    }
  });

  // Formation change
  creatorFormation.addEventListener('change', () => {
    renderRouteAssignments();
    updatePreview();
  });

  // Test coverage change
  testCoverage.addEventListener('change', updatePreview);

  // Flip play
  flipPlayBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    flipPlayBtn.classList.toggle('active', isFlipped);
    updatePreview();
  });

  // Reset
  resetPlayBtn.addEventListener('click', resetRoutes);

  // Initial render
  renderRouteAssignments();
  updatePreview();
}

function resetRoutes() {
  currentRoutes = { WR1: 'streak', WR2: 'curl', WR3: 'slant', TE: 'drag', RB: 'flat' };
  isFlipped = false;
  playNameInput.value = '';
  renderRouteAssignments();
  updatePreview();
}

function renderRouteAssignments() {
  const positions = Object.keys(currentRoutes);
  const routeOptions = HOT_ROUTES.map(r =>
    `<option value="${r.id}">${r.icon} ${r.name}</option>`
  ).join('');

  routeAssignments.innerHTML = positions.map(pos => `
    <div class="flex items-center gap-2">
      <span class="text-xs font-bold w-10 text-neon-cyan">${pos}</span>
      <select class="custom-select flex-1 text-sm" data-position="${pos}">
        ${HOT_ROUTES.map(r =>
          `<option value="${r.id}" ${currentRoutes[pos] === r.id ? 'selected' : ''}>${r.icon} ${r.name}</option>`
        ).join('')}
      </select>
    </div>
  `).join('');

  // Route change listeners
  routeAssignments.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', () => {
      currentRoutes[sel.dataset.position] = sel.value;
      updatePreview();
    });
  });
}

function updatePreview() {
  if (activeRenderer) activeRenderer.destroy();

  const renderer = new PlayArtRenderer(creatorCanvas, { width: 480, height: 380 });
  activeRenderer = renderer;

  const formation = creatorFormation.value;
  const playName = playNameInput.value || 'Custom Play';
  const coverage = testCoverage.value;

  // Use existing play if selected, otherwise show generic formation
  if (existingPlay.value && existingFormation.value) {
    if (coverage) {
      renderer.renderLivePlay({
        side: 'both',
        offFormation: existingFormation.value,
        offSubFormation: existingSub.value || 'Default',
        playFamily: existingPlay.value,
        defFormation: 'Nickel',
        coverageName: coverage,
        duration: 3000
      });
    } else {
      renderer.renderSinglePlayLive({
        mode: 'offense',
        offFormation: existingFormation.value,
        offSubFormation: existingSub.value || 'Default',
        playFamily: existingPlay.value,
        duration: 3000
      });
    }
  } else {
    // Render generic formation with custom routes indicator
    const subFormation = formation === 'Shotgun' ? 'Spread Y-Flex' :
                         formation === 'Singleback' ? 'Ace' :
                         formation === 'I Form' ? 'Pro' : 'Default';

    if (coverage) {
      renderer.renderLivePlay({
        side: 'both',
        offFormation: formation,
        offSubFormation: subFormation,
        playFamily: playName,
        defFormation: 'Nickel',
        coverageName: coverage,
        duration: 3000
      });
    } else {
      renderer.renderSinglePlayLive({
        mode: 'offense',
        offFormation: formation,
        offSubFormation: subFormation,
        playFamily: playName,
        duration: 3000
      });
    }
  }

  // Update play info
  const infoEl = document.getElementById('creatorPlayInfo');
  const routeList = Object.entries(currentRoutes)
    .map(([pos, route]) => {
      const hr = HOT_ROUTES.find(r => r.id === route);
      return `<span class="text-neon-cyan">${pos}:</span> ${hr ? hr.name : route}`;
    }).join(' | ');
  infoEl.innerHTML = `<p class="text-xs">${routeList}</p>
    ${isFlipped ? '<p class="text-xs text-yellow-400 mt-1">Play Flipped</p>' : ''}`;
}

// ===== MODAL CLOSE =====
detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('active');
});

// ===== INITIALIZE =====
renderMacros();
renderAdjustments();
renderHotRoutes();
initPlayCreator();
