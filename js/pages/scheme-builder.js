// Scheme Builder - Interactive Play Designer with Drag/Drop & Route Editing
import { HOT_ROUTES, OFFENSIVE_ADJUSTMENTS, DEFENSIVE_ADJUSTMENTS, MACROS } from '../data/adjustments.js';
import { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import COVERAGES from '../data/coverages.js';
import { PlayArtRenderer, PLAY_ROUTES } from '../components/playArt.js';
import { calculateMatchupGrade, recommendPlays, CONCEPT_LABELS, ADJUSTMENT_MODIFIERS } from '../data/analytics.js';

// ===== STATE =====
let activeRenderer = null;
let isFlipped = false;
let isLooping = true;
let isPlaying = true;
let currentPlay = null;
let currentCoverage = null;
let interactiveMode = true; // default to interactive
let playerPositions = {}; // dynamic player positions {key: [x, y]}
let playerRoutes = {}; // custom route overrides {key: routeName}
let originalPlayerPositions = null; // stored before first flip for perfect restore
let originalPlayerRoutes = null; // stored before first flip for perfect restore
let originalRoutePaths = null; // stored ROUTE_PATHS_LOCAL state before first flip
let selectedPlayer = null;
let draggedPlayer = null;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let currentFormation = 'Gun';
let currentSubFormation = 'Spread Y-Flex';
let currentDefFormation = 'Nickel';
let currentDefSubFormation = '';

// ===== ACTIVE ADJUSTMENTS HELPER =====
function getActiveAdjustments() {
  const active = [];
  document.querySelectorAll('#offAdjContent [data-adj].active, #defAdjContent [data-adj].active').forEach(btn => {
    active.push(btn.dataset.adj);
  });
  return active;
}

// Available routes for the route picker
const ROUTE_OPTIONS = [
  // Vertical
  { id: 'streak', name: 'Streak', icon: '↑' },
  { id: 'go', name: 'Go', icon: '↑' },
  { id: 'fade', name: 'Fade', icon: '↗↗' },
  { id: 'seam', name: 'Seam', icon: '⬆' },
  // Post family
  { id: 'post', name: 'Post', icon: '↗' },
  { id: 'deep_post', name: 'Deep Post', icon: '↗' },
  { id: 'skinny_post', name: 'Skinny Post', icon: '↗' },
  { id: 'post_corner', name: 'Post Corner', icon: '↗↘' },
  // Corner / Out family
  { id: 'corner', name: 'Corner', icon: '↘' },
  { id: 'deep_corner', name: 'Deep Corner', icon: '↘' },
  { id: 'out', name: 'Out', icon: '→' },
  { id: 'deep_out', name: 'Deep Out', icon: '→' },
  { id: 'speed_out', name: 'Speed Out', icon: '→' },
  // In / Cross family
  { id: 'in', name: 'In', icon: '←' },
  { id: 'deep_in', name: 'Deep In', icon: '←' },
  { id: 'dig', name: 'Dig', icon: '←' },
  { id: 'shallow_cross', name: 'Shallow Cross', icon: '→→' },
  { id: 'drag', name: 'Drag', icon: '→→' },
  { id: 'drag_left', name: 'Drag Left', icon: '←←' },
  // Quick
  { id: 'slant', name: 'Slant', icon: '↙' },
  { id: 'curl', name: 'Curl', icon: '↑↓' },
  { id: 'comeback', name: 'Comeback', icon: '↑↘' },
  { id: 'hitch', name: 'Hitch', icon: '⤒' },
  // Flat / Swing
  { id: 'flat', name: 'Flat', icon: '⤵' },
  { id: 'flat_left', name: 'Flat Left', icon: '⤶' },
  { id: 'swing', name: 'Swing', icon: '⤵' },
  { id: 'swing_left', name: 'Swing Left', icon: '⤶' },
  { id: 'check_down', name: 'Check Down', icon: '⤵' },
  { id: 'texas', name: 'Texas', icon: '⤴' },
  // Wheel / Whip
  { id: 'wheel', name: 'Wheel', icon: '⤴' },
  { id: 'whip', name: 'Whip', icon: '↑→↓' },
  { id: 'angle', name: 'Angle', icon: '∠' },
  // Screen
  { id: 'screen', name: 'Screen', icon: '⤷' },
  { id: 'screen_left', name: 'Screen Left', icon: '⤶' },
  { id: 'screen_right', name: 'Screen Right', icon: '⤷' },
  // Blocking
  { id: 'block', name: 'Block', icon: '■' },
  { id: 'pass_block', name: 'Pass Block', icon: '■' },
  { id: 'lead_block', name: 'Lead', icon: '■►' },
  { id: 'stalk_block', name: 'Stalk Block', icon: '■' },
  { id: 'crack_block', name: 'Crack Block', icon: '■←' },
  // Run
  { id: 'run_inside', name: 'A Gap', icon: '▲' },
  { id: 'run_power', name: 'B Gap', icon: '▶' },
  { id: 'run_outside', name: 'C Gap', icon: '►' },
  { id: 'run_dive', name: 'Dive', icon: '▼' },
  { id: 'run_stretch', name: 'Stretch', icon: '►' },
  { id: 'run_counter', name: 'Counter', icon: '◄▶' },
];

// ===== DOM =====
const liveCanvas = document.getElementById('liveCanvas');
const pbSelect = document.getElementById('pbSelect');
const fmSelect = document.getElementById('fmSelect');
const sfSelect = document.getElementById('sfSelect');
const plSelect = document.getElementById('plSelect');
const covSelect = document.getElementById('covSelect');
const defFmSelect = document.getElementById('defFmSelect');
const defSfSelect = document.getElementById('defSfSelect');
const btnPlay = document.getElementById('btnPlay');
const btnReplay = document.getElementById('btnReplay');
const btnLoop = document.getElementById('btnLoop');
const floatingPanel = document.getElementById('floatingPanel');
const panelDragHandle = document.getElementById('panelDragHandle');
const panelBody = document.getElementById('panelBody');
const togglePanelBtn = document.getElementById('togglePanelBtn');
const detailModal = document.getElementById('detailModal');
const detailModalContent = document.getElementById('detailModalContent');

// ===== CLEAR DEPENDENT STATE =====
function clearSchemeBuilderState() {
  // Clear adjustment toggles
  document.querySelectorAll('#offAdjContent [data-adj].active, #defAdjContent [data-adj].active').forEach(btn => {
    btn.classList.remove('active');
  });

  // Clear analytics display
  if (analyticsGradeDisplay) analyticsGradeDisplay.innerHTML = '<p class="text-xs text-gray-500">Select a play and coverage to see grades</p>';
  if (analyticsRecommendations) analyticsRecommendations.innerHTML = '';

  // Clear play info
  const nameEl = document.getElementById('infoPlayName');
  const typeEl = document.getElementById('infoPlayType');
  const vsEl = document.getElementById('infoVsCoverage');
  if (nameEl) nameEl.textContent = 'Select a play';
  if (typeEl) typeEl.textContent = 'Choose a playbook, formation, and play above';
  if (vsEl) { vsEl.textContent = ''; vsEl.className = 'text-xs text-gray-500'; }

  // Reset flip state — prevents stale position snapshots from old formations
  isFlipped = false;
  originalPlayerPositions = null;
  originalPlayerRoutes = null;
  if (originalRoutePaths) {
    for (const routeName of Object.keys(ROUTE_PATHS_LOCAL)) {
      if (originalRoutePaths[routeName]) {
        ROUTE_PATHS_LOCAL[routeName] = originalRoutePaths[routeName].map(wp => [...wp]);
      }
    }
  }
  originalRoutePaths = null;
  const btnFlipEl = document.getElementById('btnFlip');
  if (btnFlipEl) btnFlipEl.classList.remove('active');

  // Destroy active renderer
  if (activeRenderer) { activeRenderer.destroy(); activeRenderer = null; }
}

// ===== POPULATE SELECTS =====
function initSelects() {
  const sorted = [...OFFENSIVE_PLAYBOOKS].sort((a, b) => a.name.localeCompare(b.name));
  pbSelect.innerHTML = '<option value="">Playbook...</option>' +
    sorted.map(b => `<option value="${b.name}">${b.name}</option>`).join('');

  const covSorted = [...COVERAGES].sort((a, b) => a.name.localeCompare(b.name));
  covSelect.innerHTML = '<option value="">No coverage</option>' +
    covSorted.map(c => `<option value="${c.name}">${c.name}</option>`).join('');

  pbSelect.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === pbSelect.value);
    fmSelect.innerHTML = '<option value="">Formation...</option>';
    sfSelect.innerHTML = '<option value="">Sub-formation...</option>';
    plSelect.innerHTML = '<option value="">Play...</option>';
    fmSelect.disabled = true; sfSelect.disabled = true; plSelect.disabled = true;
    // Clear all dependent state
    currentPlay = null;
    currentFormation = 'Gun';
    currentSubFormation = 'Spread Y-Flex';
    playerRoutes = {};
    selectedPlayer = null;
    clearSchemeBuilderState();
    if (book && book.formations) {
      Object.keys(book.formations).sort().forEach(f => {
        fmSelect.innerHTML += `<option value="${f}">${f}</option>`;
      });
      fmSelect.disabled = false;
    }
    resetInteractivePositions();
    renderInteractive();
    renderPanelHotRoutes();
  });

  fmSelect.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === pbSelect.value);
    sfSelect.innerHTML = '<option value="">Sub-formation...</option>';
    plSelect.innerHTML = '<option value="">Play...</option>';
    sfSelect.disabled = true; plSelect.disabled = true;
    currentFormation = fmSelect.value || 'Gun';
    currentSubFormation = '';
    currentPlay = null;
    playerRoutes = {};
    selectedPlayer = null;
    clearSchemeBuilderState();
    if (book && book.formations && book.formations[fmSelect.value]) {
      Object.keys(book.formations[fmSelect.value]).sort().forEach(s => {
        sfSelect.innerHTML += `<option value="${s}">${s}</option>`;
      });
      sfSelect.disabled = false;
    }
    resetInteractivePositions();
    updateDisplay();
  });

  sfSelect.addEventListener('change', () => {
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === pbSelect.value);
    plSelect.innerHTML = '<option value="">Play...</option>';
    plSelect.disabled = true;
    currentSubFormation = sfSelect.value;
    currentPlay = null;
    playerRoutes = {};
    selectedPlayer = null;
    clearSchemeBuilderState();
    if (book && book.formations && book.formations[fmSelect.value]) {
      const plays = book.formations[fmSelect.value][sfSelect.value] || [];
      [...plays].sort().forEach(p => {
        plSelect.innerHTML += `<option value="${p}">${p}</option>`;
      });
      plSelect.disabled = false;
    }
    resetInteractivePositions();
    updateDisplay();
  });

  plSelect.addEventListener('change', () => {
    currentPlay = plSelect.value;
    loadPlayRoutes();
    updateDisplay();
  });

  covSelect.addEventListener('change', () => {
    currentCoverage = covSelect.value || null;
    updateDisplay();
  });

  // Populate defensive formation dropdown from all DEFENSIVE_PLAYBOOKS
  const defFormationSet = new Set();
  DEFENSIVE_PLAYBOOKS.forEach(pb => {
    if (pb.formations) {
      Object.keys(pb.formations).forEach(fm => defFormationSet.add(fm));
    }
  });
  const defFormations = [...defFormationSet].sort();
  defFmSelect.innerHTML = '<option value="">Def Formation...</option>' +
    defFormations.map(f => `<option value="${f}"${f === 'Nickel' ? ' selected' : ''}>${f}</option>`).join('');
  currentDefFormation = 'Nickel';
  // Populate initial subformations for Nickel
  populateDefSubFormations('Nickel');

  defFmSelect.addEventListener('change', () => {
    currentDefFormation = defFmSelect.value || 'Nickel';
    currentDefSubFormation = '';
    populateDefSubFormations(currentDefFormation);
    updateDisplay();
  });

  defSfSelect.addEventListener('change', () => {
    currentDefSubFormation = defSfSelect.value || '';
    updateDisplay();
  });
}

function populateDefSubFormations(defFormation) {
  const subSet = new Set();
  DEFENSIVE_PLAYBOOKS.forEach(pb => {
    if (pb.formations && pb.formations[defFormation]) {
      Object.keys(pb.formations[defFormation]).forEach(sf => subSet.add(sf));
    }
  });
  const subs = [...subSet].sort();
  if (subs.length > 0) {
    defSfSelect.innerHTML = '<option value="">Def Look...</option>' +
      subs.map(s => `<option value="${s}">${s}</option>`).join('');
    defSfSelect.disabled = false;
  } else {
    defSfSelect.innerHTML = '<option value="">Def Look...</option>';
    defSfSelect.disabled = true;
  }
}

// ===== INTERACTIVE POSITIONS & ROUTES =====
function resetInteractivePositions() {
  const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
  playerPositions = { ...renderer.getOffensePositions(currentFormation, currentSubFormation) };
  renderer.destroy();
  selectedPlayer = null;
  playerRoutes = {};
}

function loadPlayRoutes() {
  if (!currentPlay) { playerRoutes = {}; return; }
  const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
  const playData = renderer.getPlayRoutes(currentPlay);
  renderer.destroy();
  playerRoutes = {};
  if (playData && playData.routes) {
    for (const [key, route] of Object.entries(playData.routes)) {
      playerRoutes[key] = route;
    }
  }
  // Also store QB action and isRun
  playerRoutes._qb = playData ? playData.qb : 'qb_drop';
  playerRoutes._isRun = playData ? !!playData.isRun : false;
  playerRoutes._ball_target = playData ? playData.ball_target : null;
}

// ===== DISPLAY =====
function updateDisplay() {
  if (interactiveMode && Object.keys(playerPositions).length > 0) {
    renderInteractive();
  } else if (isPlaying) {
    updateAnimation();
  }
  updatePlayInfo(currentPlay, currentCoverage);
  updateAnalytics();
  renderPanelHotRoutes();
}

function updateAnimation() {
  if (activeRenderer) activeRenderer.destroy();
  if (!currentPlay && !fmSelect.value && !currentFormation) {
    const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
    activeRenderer = renderer;
    renderer.drawField();
    updatePlayInfo(null, null);
    return;
  }

  const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
  renderer.loopEnabled = isLooping;
  activeRenderer = renderer;

  // Use the canonical model state, not the dropdown values, to prevent desync
  // when Creator sets a formation that doesn't exist in the selected playbook's dropdown.
  const formation = currentFormation || fmSelect.value || 'Gun';
  const subFormation = currentSubFormation || sfSelect.value || '';
  const play = currentPlay || 'Inside Zone';

  // Pass custom positions/routes if the user has edited them
  const hasPositionEdits = Object.keys(playerPositions).length > 0;
  const hasRouteEdits = Object.keys(playerRoutes).filter(k => !k.startsWith('_')).length > 0;
  const posOverrides = hasPositionEdits ? playerPositions : null;
  const routeOvr = hasRouteEdits ? playerRoutes : null;
  const activeAdj = getActiveAdjustments();
  const adjParam = activeAdj.length > 0 ? activeAdj : null;

  if (currentCoverage) {
    renderer.renderLivePlay({
      side: 'offense',
      offFormation: formation,
      offSubFormation: subFormation,
      playFamily: play,
      defFormation: currentDefFormation || 'Nickel',
      defSubFormation: currentDefSubFormation || undefined,
      coverageName: currentCoverage,
      duration: 3500,
      positionOverrides: posOverrides,
      routeOverrides: routeOvr,
      flipped: isFlipped,
      adjustments: adjParam
    });
  } else {
    renderer.renderSinglePlayLive({
      mode: 'offense',
      offFormation: formation,
      offSubFormation: subFormation,
      playFamily: play,
      duration: 3500,
      positionOverrides: posOverrides,
      routeOverrides: routeOvr,
      flipped: isFlipped,
      adjustments: adjParam
    });
  }
}

// ===== INTERACTIVE CANVAS RENDERING =====
// Mirrored from ROUTE_PATHS in playArt.js — must stay in sync
const ROUTE_PATHS_LOCAL = {
  // Vertical routes
  'streak': [[0, -0.30]],
  'go': [[0, -0.30]],
  'fade': [[0.03, -0.30]],
  'seam': [[0, -0.26]],
  // Post family
  'post': [[0, -0.12], [-0.08, -0.18]],
  'deep_post': [[0, -0.16], [-0.06, -0.16]],
  'skinny_post': [[0, -0.10], [-0.03, -0.18]],
  'post_corner': [[0, -0.10], [-0.05, -0.10], [0.06, -0.12]],
  // Corner / Out family
  'corner': [[0, -0.12], [0.06, -0.18]],
  'deep_corner': [[0, -0.16], [0.06, -0.14]],
  'out': [[0, -0.10], [0.08, 0]],
  'deep_out': [[0, -0.14], [0.08, 0]],
  'speed_out': [[0.08, -0.04]],
  // In / Cross family
  'in': [[0, -0.10], [-0.08, 0]],
  'deep_in': [[0, -0.14], [-0.08, 0]],
  'dig': [[0, -0.14], [-0.08, 0]],
  'shallow_cross': [[0, -0.03], [0.18, -0.02]],
  'drag': [[0, -0.03], [0.22, 0]],
  'drag_left': [[0, -0.03], [-0.22, 0]],
  // Slant
  'slant': [[-0.06, -0.14]],
  // Curl / Comeback / Hitch
  'curl': [[0, -0.13], [0, 0.03]],
  'comeback': [[0, -0.14], [0.03, 0.04]],
  'hitch': [[0, -0.07], [0, 0.02]],
  // Flat / Swing / Check-down
  'flat': [[0.10, -0.03]],
  'flat_left': [[-0.10, -0.03]],
  'swing': [[0.06, 0.02], [0.08, -0.04]],
  'swing_left': [[-0.06, 0.02], [-0.08, -0.04]],
  'check_down': [[0.04, 0.01], [0.06, -0.03]],
  'texas': [[0.06, 0.02], [0.04, -0.14]],
  // Wheel / Whip / Angle
  'wheel': [[0.06, -0.02], [0.04, -0.26]],
  'whip': [[0, -0.06], [0.05, 0.03], [0.06, -0.04]],
  'angle': [[0.03, 0.03], [0.10, -0.10]],
  // Screen
  'screen': [[-0.04, 0.03], [-0.06, 0.01]],
  'screen_right': [[0.04, 0.03], [0.06, 0.01]],
  'screen_left': [[-0.04, 0.03], [-0.06, 0.01]],
  // Blocking
  'block': [],
  'pass_block': [[0, -0.01]],
  'lead_block': [[0.04, -0.08], [0.02, -0.10]],
  'stalk_block': [[0, -0.04]],
  'crack_block': [[-0.06, -0.06]],
  'zone_step_right': [[0.04, -0.04]],
  'zone_step_left': [[-0.04, -0.04]],
  'combo_block': [[0, -0.06]],
  // Run paths — must carry RB through the LOS (synced with ROUTE_PATHS in playArt.js)
  'run_right': [[0.10, -0.16], [0.06, -0.12]],
  'run_left': [[-0.10, -0.16], [-0.06, -0.12]],
  'run_inside': [[0.02, -0.14], [0.01, -0.14]],
  'run_power': [[0.06, -0.14], [0.02, -0.14]],
  'run_power_left': [[-0.06, -0.14], [-0.02, -0.14]],
  'run_counter': [[-0.04, -0.04], [0.08, -0.12], [0.02, -0.12]],
  'run_stretch': [[0.16, -0.06], [0.06, -0.12], [0.02, -0.10]],
  'run_stretch_left': [[-0.16, -0.06], [-0.06, -0.12], [-0.02, -0.10]],
  'run_dive': [[0.01, -0.10], [0.0, -0.10], [0.0, -0.08]],
  'run_outside': [[0.14, -0.08], [0.06, -0.10], [0.02, -0.10]],
  'run_outside_left': [[-0.14, -0.08], [-0.06, -0.10], [-0.02, -0.10]],
  // Option / QB
  'option_give': [[0.08, -0.10], [0.04, -0.12]],
  'option_keep': [[-0.06, -0.10], [-0.04, -0.12]],
  'qb_boot_right': [[0.16, 0.02], [0.04, -0.10]],
  'qb_boot_left': [[-0.16, 0.02], [-0.04, -0.10]],
  'qb_drop': [[0, 0.03]],
  'qb_scramble': [[-0.04, -0.08]],
  'qb_handoff': [[0, 0.02]],
  // OL movement
  'pull_left': [[-0.08, 0.0], [-0.06, -0.08]],
  'pull_right': [[0.08, 0.0], [0.06, -0.08]],
  'ol_release_right': [[0.10, -0.02], [0.05, -0.05]],
  'ol_release_left': [[-0.10, -0.02], [-0.05, -0.05]],
  // Double moves
  'sluggo': [[0, -0.06], [-0.03, -0.02], [0, -0.22]],
  'out_n_up': [[0, -0.10], [0.06, 0], [0, -0.20]],
  'stutter_go': [[0, -0.06], [0, 0.01], [0, -0.25]],
  'comeback_go': [[0, -0.12], [0.02, 0.03], [0, -0.21]],
  'hitch_go': [[0, -0.07], [0, 0.02], [0, -0.25]],
  'delay': [[0, 0.01], [0, -0.01], [0, -0.04], [0, -0.18]],
};

function renderInteractive() {
  if (activeRenderer) { activeRenderer.destroy(); activeRenderer = null; }

  const ctx = liveCanvas.getContext('2d');
  const W = liveCanvas.width;
  const H = liveCanvas.height;
  const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];

  ctx.clearRect(0, 0, W, H);

  // Draw field
  ctx.fillStyle = '#1a472a';
  ctx.fillRect(0, 0, W, H);

  // Field lines
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  for (let y = 0; y < H; y += H / 10) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // LOS
  const losY = 0.60 * H;
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 4]);
  ctx.beginPath(); ctx.moveTo(0, losY); ctx.lineTo(W, losY); ctx.stroke();
  ctx.setLineDash([]);

  // Hash marks
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1;
  const hashLeft = W * 0.38, hashRight = W * 0.62;
  for (let y = 0; y < H; y += H / 20) {
    ctx.beginPath(); ctx.moveTo(hashLeft, y); ctx.lineTo(hashLeft, y + 3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hashRight, y); ctx.lineTo(hashRight, y + 3); ctx.stroke();
  }

  // Draw routes first (behind players)
  for (const [key, pos] of Object.entries(playerPositions)) {
    if (olKeys.includes(key)) continue;
    const route = key === 'QB' ? (playerRoutes._qb || 'qb_drop') : (playerRoutes[key] || 'block');
    const path = ROUTE_PATHS_LOCAL[route] || [];
    if (path.length === 0) continue;

    const isRun = playerRoutes._isRun && key !== 'QB';
    const routeColor = isRun ? '#8A2BE2' : '#00FFFF';

    ctx.strokeStyle = routeColor;
    ctx.lineWidth = selectedPlayer === key ? 3 : 2;
    ctx.globalAlpha = selectedPlayer === key ? 1 : 0.7;
    ctx.beginPath();
    let cx = pos[0] * W, cy = pos[1] * H;
    ctx.moveTo(cx, cy);
    for (const [dx, dy] of path) {
      cx += dx * W;
      cy += dy * H;
      ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    // Arrow head at end
    if (path.length > 0) {
      const lastDx = path[path.length - 1][0] * W;
      const lastDy = path[path.length - 1][1] * H;
      const angle = Math.atan2(lastDy, lastDx);
      ctx.fillStyle = routeColor;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx - 6 * Math.cos(angle - 0.4), cy - 6 * Math.sin(angle - 0.4));
      ctx.lineTo(cx - 6 * Math.cos(angle + 0.4), cy - 6 * Math.sin(angle + 0.4));
      ctx.closePath();
      ctx.fill();
    }

    // Route label
    if (route !== 'block') {
      const labelX = (pos[0] * W + cx) / 2;
      const labelY = (pos[1] * H + cy) / 2 - 10;
      const routeLabel = route.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      ctx.font = 'bold 8px system-ui';
      const tw = ctx.measureText(routeLabel).width + 6;
      ctx.fillStyle = 'rgba(0,0,0,0.75)';
      ctx.beginPath();
      ctx.roundRect(labelX - tw / 2, labelY - 6, tw, 12, 3);
      ctx.fill();
      ctx.fillStyle = routeColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(routeLabel, labelX, labelY);
    }

    ctx.globalAlpha = 1;
  }

  // Draw players
  for (const [key, pos] of Object.entries(playerPositions)) {
    const isOL = olKeys.includes(key);
    const isQB = key === 'QB';
    const isSelected = selectedPlayer === key;
    const px = pos[0] * W;
    const py = pos[1] * H;
    const size = isQB ? 12 : (isOL ? 9 : 10);

    // Selection glow
    if (isSelected) {
      ctx.shadowColor = '#00FFFF';
      ctx.shadowBlur = 15;
      ctx.fillStyle = 'rgba(0,255,255,0.25)';
      ctx.beginPath();
      ctx.arc(px, py, size + 6, 0, Math.PI * 2);
      ctx.fill();
      // Pulsing ring
      const pulse = 1 + Math.sin(Date.now() / 200) * 0.15;
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, (size + 4) * pulse, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Hover glow for dragging hint
    if (!isSelected && !isOL) {
      ctx.fillStyle = 'rgba(0,255,255,0.08)';
      ctx.beginPath();
      ctx.arc(px, py, size + 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player circle
    const playerColor = isQB ? '#8A2BE2' : (isOL ? '#4B0082' : '#00FFFF');
    ctx.fillStyle = playerColor;
    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = isSelected ? '#fff' : 'rgba(255,255,255,0.5)';
    ctx.lineWidth = isSelected ? 2 : 1;
    ctx.stroke();

    // Label
    const label = key.replace(/\d/g, '').substring(0, 2);
    ctx.fillStyle = isOL ? '#9ca3af' : '#0d001a';
    ctx.font = `bold ${Math.max(8, size - 1)}px system-ui`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, px, py);
  }

  // Instruction text
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = 'bold 10px system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const hint = selectedPlayer
    ? `${selectedPlayer} selected — drag to move, click another player, or use panel to change route`
    : 'Click a player to select, drag to reposition';
  ctx.fillText(hint, W / 2, 6);

  // Mode indicator
  ctx.fillStyle = 'rgba(0,255,255,0.12)';
  ctx.beginPath();
  ctx.roundRect(W / 2 - 60, H - 24, 120, 18, 4);
  ctx.fill();
  ctx.fillStyle = '#00FFFF';
  ctx.font = 'bold 9px system-ui';
  ctx.textBaseline = 'middle';
  ctx.fillText('INTERACTIVE MODE', W / 2, H - 15);
}

// ===== CANVAS INTERACTION (Click & Drag) =====
function getPlayerAtPoint(canvasX, canvasY) {
  const W = liveCanvas.width;
  const H = liveCanvas.height;
  let closest = null;
  let closestDist = Infinity;

  for (const [key, pos] of Object.entries(playerPositions)) {
    const px = pos[0] * W;
    const py = pos[1] * H;
    const dist = Math.hypot(canvasX - px, canvasY - py);
    if (dist < 20 && dist < closestDist) {
      closestDist = dist;
      closest = key;
    }
  }
  return closest;
}

function canvasCoords(e) {
  const rect = liveCanvas.getBoundingClientRect();
  const scaleX = liveCanvas.width / rect.width;
  const scaleY = liveCanvas.height / rect.height;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  };
}

function initCanvasInteraction() {
  // Mouse events
  liveCanvas.addEventListener('mousedown', (e) => {
    if (!interactiveMode) return;
    const { x, y } = canvasCoords(e);
    const player = getPlayerAtPoint(x, y);
    if (player) {
      const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
      if (olKeys.includes(player)) return; // Don't allow moving OL
      selectedPlayer = player;
      draggedPlayer = player;
      isDragging = false; // Will become true on move
      dragStartX = x;
      dragStartY = y;
      renderInteractive();
      renderPanelHotRoutes();
    } else {
      selectedPlayer = null;
      draggedPlayer = null;
      renderInteractive();
      renderPanelHotRoutes();
    }
  });

  liveCanvas.addEventListener('mousemove', (e) => {
    if (!interactiveMode || !draggedPlayer) return;
    const { x, y } = canvasCoords(e);
    const dist = Math.hypot(x - dragStartX, y - dragStartY);
    if (dist > 3) {
      isDragging = true;
      const W = liveCanvas.width;
      const H = liveCanvas.height;
      playerPositions[draggedPlayer] = [
        Math.max(0.03, Math.min(0.97, x / W)),
        Math.max(0.03, Math.min(0.97, y / H))
      ];
      renderInteractive();
    }
  });

  liveCanvas.addEventListener('mouseup', () => {
    draggedPlayer = null;
    isDragging = false;
  });

  liveCanvas.addEventListener('mouseleave', () => {
    draggedPlayer = null;
    isDragging = false;
  });

  // Touch events
  liveCanvas.addEventListener('touchstart', (e) => {
    if (!interactiveMode) return;
    const { x, y } = canvasCoords(e);
    const player = getPlayerAtPoint(x, y);
    if (player) {
      const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
      if (olKeys.includes(player)) return;
      selectedPlayer = player;
      draggedPlayer = player;
      isDragging = false;
      dragStartX = x;
      dragStartY = y;
      renderInteractive();
      renderPanelHotRoutes();
      e.preventDefault();
    }
  }, { passive: false });

  liveCanvas.addEventListener('touchmove', (e) => {
    if (!interactiveMode || !draggedPlayer) return;
    const { x, y } = canvasCoords(e);
    isDragging = true;
    const W = liveCanvas.width;
    const H = liveCanvas.height;
    playerPositions[draggedPlayer] = [
      Math.max(0.03, Math.min(0.97, x / W)),
      Math.max(0.03, Math.min(0.97, y / H))
    ];
    renderInteractive();
    e.preventDefault();
  }, { passive: false });

  liveCanvas.addEventListener('touchend', () => {
    draggedPlayer = null;
    isDragging = false;
  });

  // Cursor changes
  liveCanvas.addEventListener('mousemove', (e) => {
    if (!interactiveMode || draggedPlayer) return;
    const { x, y } = canvasCoords(e);
    const player = getPlayerAtPoint(x, y);
    liveCanvas.style.cursor = player ? 'grab' : 'default';
  });
}

// ===== PLAY INFO =====
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
    const adjustments = getActiveAdjustments();
    const situation = situationSelect?.value || '';
    const grade = calculateMatchupGrade(play, coverage, { situation: situation || undefined, adjustments });
    const adjCount = adjustments.length;
    const adjNote = adjCount > 0 ? ` <span class="text-gray-400">(${adjCount} adj)</span>` : '';
    vsEl.innerHTML = `<span class="text-neon-red font-bold">vs ${coverage}</span> <span class="ml-2 font-black" style="color: ${grade.color}">${grade.grade} — ${grade.label}</span>${adjNote}`;
    vsEl.className = 'text-xs';
  } else {
    vsEl.textContent = '';
    vsEl.className = 'text-xs text-gray-500';
  }
}

// ===== PLAY CONTROLS =====
btnPlay.addEventListener('click', () => {
  isPlaying = !isPlaying;
  interactiveMode = !isPlaying;
  btnPlay.innerHTML = isPlaying ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-play-fill"></i>';
  btnPlay.classList.toggle('active', isPlaying);
  if (isPlaying) {
    updateAnimation();
  } else {
    if (activeRenderer) activeRenderer.destroy();
    if (Object.keys(playerPositions).length === 0) resetInteractivePositions();
    if (currentPlay && Object.keys(playerRoutes).length === 0) loadPlayRoutes();
    renderInteractive();
  }
});

btnReplay.addEventListener('click', () => {
  if (interactiveMode) {
    renderInteractive();
  } else {
    updateAnimation();
  }
});

btnLoop.addEventListener('click', () => {
  isLooping = !isLooping;
  btnLoop.classList.toggle('active', isLooping);
  // Update currently running renderer so change takes effect immediately
  if (activeRenderer) {
    activeRenderer.loopEnabled = isLooping;
  }
});
btnLoop.classList.add('active');

// ===== FLOATING PANEL DRAG =====
function initDrag() {
  let isPanelDragging = false;
  let startX, startY, startLeft, startTop;

  panelDragHandle.addEventListener('mousedown', (e) => {
    if (e.target.closest('button')) return;
    isPanelDragging = true;
    floatingPanel.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
    const rect = floatingPanel.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isPanelDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - 100, startLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - 60, startTop + dy));
    floatingPanel.style.left = newLeft + 'px';
    floatingPanel.style.top = newTop + 'px';
    floatingPanel.style.right = 'auto';
  });

  document.addEventListener('mouseup', () => {
    isPanelDragging = false;
    floatingPanel.classList.remove('dragging');
  });

  // Touch support
  panelDragHandle.addEventListener('touchstart', (e) => {
    if (e.target.closest('button')) return;
    isPanelDragging = true;
    floatingPanel.classList.add('dragging');
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    const rect = floatingPanel.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isPanelDragging) return;
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
    isPanelDragging = false;
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
  const olKeys = ['LT', 'LG', 'C', 'RG', 'RT', 'QB'];
  const positions = Object.keys(playerPositions).filter(k => !olKeys.includes(k));

  if (positions.length === 0) {
    container.innerHTML = '<p class="text-xs text-gray-500">Select a formation first</p>';
    return;
  }

  container.innerHTML = positions.map(pos => {
    const currentRoute = playerRoutes[pos] || 'block';
    const isSelected = selectedPlayer === pos;
    return `
      <div class="flex items-center gap-2 ${isSelected ? 'bg-dark-700 rounded p-1 -mx-1 border border-neon-cyan/30' : ''}">
        <button class="text-xs font-bold w-8 ${isSelected ? 'text-white' : 'text-neon-cyan'} hover:text-white cursor-pointer"
                data-select-player="${pos}" title="Click to select ${pos}">${pos}</button>
        <select class="panel-mini-select flex-1" data-route-pos="${pos}">
          ${ROUTE_OPTIONS.map(r =>
            `<option value="${r.id}" ${currentRoute === r.id ? 'selected' : ''}>${r.icon} ${r.name}</option>`
          ).join('')}
        </select>
      </div>
    `;
  }).join('');

  // Player select buttons
  container.querySelectorAll('[data-select-player]').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPlayer = btn.dataset.selectPlayer;
      renderInteractive();
      renderPanelHotRoutes();
    });
  });

  // Route change
  container.querySelectorAll('[data-route-pos]').forEach(sel => {
    sel.addEventListener('change', () => {
      playerRoutes[sel.dataset.routePos] = sel.value;
      renderInteractive();
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
      // Mutual exclusion: deactivate other buttons in the same group
      const group = btn.closest('.mb-3');
      if (!btn.classList.contains('active') && group) {
        group.querySelectorAll('[data-adj].active').forEach(b => b.classList.remove('active'));
      }
      btn.classList.toggle('active');
      updateDisplay();
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
      // Mutual exclusion: deactivate other buttons in the same group
      const group = btn.closest('.mb-3');
      if (!btn.classList.contains('active') && group) {
        group.querySelectorAll('[data-adj].active').forEach(b => b.classList.remove('active'));
      }
      btn.classList.toggle('active');
      updateDisplay();
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
    btn.addEventListener('click', () => {
      applyMacroAdjustments(btn.dataset.macro);
      showMacroDetail(btn.dataset.macro);
    });
  });
}

// Route overrides for offensive macros, keyed by macro id.
// Keys use generic skill-position labels that are mapped to actual formation positions below.
const MACRO_ROUTES = {
  anti_cover3: {
    // Flood concept: streak + corner + flat attack the 3-deep shell
    intent: { outside_top: 'streak', outside_mid: 'corner', rb: 'flat', inside: 'drag', te: 'flat' }
  },
  anti_cover2: {
    // Posts and seams split the two deep safeties
    intent: { outside_top: 'post', outside_mid: 'seam', inside: 'post', te: 'seam', rb: 'drag' }
  },
  flood_right: {
    // Three levels right: streak, corner, flat
    intent: { outside_top: 'streak', outside_mid: 'corner', inside: 'out', te: 'flat', rb: 'swing' }
  },
  quick_attack: {
    // Quick-game concepts: slants, drags, hitches
    intent: { outside_top: 'slant', outside_mid: 'drag', inside: 'hitch', te: 'drag', rb: 'check_down' }
  },
  max_protect: {
    // Only 2-3 out, rest block
    intent: { outside_top: 'streak', outside_mid: 'in', inside: 'block', te: 'block', rb: 'block' }
  },
  run_setup: {
    // Blocking assignments for a run look
    intent: { outside_top: 'stalk_block', outside_mid: 'stalk_block', inside: 'block', te: 'block', rb: 'run_inside' }
  },
  tempo_attack: {
    // Mix of quick reads
    intent: { outside_top: 'slant', outside_mid: 'curl', inside: 'drag', te: 'flat', rb: 'swing' }
  }
};

// Map generic intent slots to actual formation positions
function mapMacroRoutesToPositions(intent) {
  const olKeys = ['LT', 'LG', 'C', 'RG', 'RT', 'QB'];
  const positions = Object.keys(playerPositions).filter(k => !olKeys.includes(k));
  const routes = {};

  // Categorize positions by role
  const wrs = positions.filter(p => p.startsWith('WR') || p === 'X' || p === 'Z' || p === 'SLOT');
  const tes = positions.filter(p => p.startsWith('TE') || p === 'Y');
  const rbs = positions.filter(p => p.startsWith('RB') || p.startsWith('HB') || p === 'FB');
  const others = positions.filter(p => !wrs.includes(p) && !tes.includes(p) && !rbs.includes(p));

  // Sort WRs by x-position (left to right) so assignments make spatial sense
  wrs.sort((a, b) => (playerPositions[a]?.[0] || 0) - (playerPositions[b]?.[0] || 0));

  // Assign outside_top to the widest WR (last), outside_mid to next, inside to remaining
  if (wrs.length >= 1 && intent.outside_top) routes[wrs[wrs.length - 1]] = intent.outside_top;
  if (wrs.length >= 2 && intent.outside_mid) routes[wrs[wrs.length - 2]] = intent.outside_mid;
  if (wrs.length >= 3 && intent.inside) routes[wrs[wrs.length - 3]] = intent.inside;

  // TE
  if (tes.length >= 1 && intent.te) routes[tes[0]] = intent.te;

  // RB
  if (rbs.length >= 1 && intent.rb) routes[rbs[0]] = intent.rb;

  // Remaining skill players get the 'inside' route or block
  for (const p of others) {
    routes[p] = intent.inside || 'block';
  }

  return routes;
}

function applyMacroAdjustments(macroId) {
  const macro = MACROS.find(m => m.id === macroId);
  if (!macro) return;

  // Determine which panel to target based on macro side
  const containerId = macro.side === 'offense' ? 'offAdjContent' : 'defAdjContent';
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear all active adjustments in that panel
  container.querySelectorAll('[data-adj].active').forEach(btn => btn.classList.remove('active'));

  // Activate the macro's adjustments
  for (const adjId of macro.adjustments) {
    const btn = container.querySelector(`[data-adj="${adjId}"]`);
    if (btn) btn.classList.add('active');
  }

  // Apply macro route overrides for offensive macros
  if (macro.side === 'offense' && MACRO_ROUTES[macroId]) {
    const routeOverrides = mapMacroRoutesToPositions(MACRO_ROUTES[macroId].intent);
    for (const [pos, route] of Object.entries(routeOverrides)) {
      playerRoutes[pos] = route;
    }
    renderInteractive();
    renderPanelHotRoutes();
  }

  updateDisplay();
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
  const adjustments = getActiveAdjustments();
  const grade = calculateMatchupGrade(currentPlay, currentCoverage, { situation: situation || undefined, adjustments });

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
    const recs = recommendPlays(currentCoverage, { situation: situation || undefined, adjustments }).slice(0, 5);
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
  situationSelect.addEventListener('change', () => {
    updatePlayInfo(currentPlay, currentCoverage);
    updateAnalytics();
  });
}

// ===== PLAY CREATOR CONTROLS =====
function initCreatorControls() {
  const btnFlip = document.getElementById('btnFlip');
  const btnReset = document.getElementById('btnReset');
  const creatorFormation = document.getElementById('creatorFormation');

  if (creatorFormation) {
    creatorFormation.addEventListener('change', () => {
      currentFormation = creatorFormation.value || 'Gun';
      currentSubFormation = '';
      currentPlay = null;
      playerRoutes = {};
      selectedPlayer = null;
      // Sync main formation select if it has this value
      if (fmSelect) {
        const matchOpt = [...fmSelect.options].find(o => o.value === currentFormation);
        if (matchOpt) fmSelect.value = currentFormation;
      }
      // Reset dependent dropdowns
      if (sfSelect) { sfSelect.innerHTML = '<option value="">Sub-formation...</option>'; sfSelect.disabled = true; }
      if (plSelect) { plSelect.innerHTML = '<option value="">Play...</option>'; plSelect.disabled = true; }
      clearSchemeBuilderState();
      resetInteractivePositions();
      if (currentPlay) loadPlayRoutes();
      renderInteractive();
      renderPanelHotRoutes();
    });
  }

  btnFlip.addEventListener('click', () => {
    // Route swap pairs: left <-> right variants
    const FLIP_ROUTE_MAP = {
      'drag': 'drag_left', 'drag_left': 'drag',
      'flat': 'flat_left', 'flat_left': 'flat',
      'swing': 'swing_left', 'swing_left': 'swing',
      'screen_left': 'screen_right', 'screen_right': 'screen_left',
      'pull_left': 'pull_right', 'pull_right': 'pull_left',
      'zone_step_left': 'zone_step_right', 'zone_step_right': 'zone_step_left',
      'run_left': 'run_right', 'run_right': 'run_left',
      'run_stretch': 'run_stretch_left', 'run_stretch_left': 'run_stretch',
      'run_outside': 'run_outside_left', 'run_outside_left': 'run_outside',
      'run_power': 'run_power_left', 'run_power_left': 'run_power',
      'ol_release_left': 'ol_release_right', 'ol_release_right': 'ol_release_left',
      'qb_boot_left': 'qb_boot_right', 'qb_boot_right': 'qb_boot_left',
    };

    if (isFlipped) {
      // Already flipped — restore originals for perfect round-trip
      isFlipped = false;
      btnFlip.classList.remove('active');
      if (originalPlayerPositions) {
        playerPositions = JSON.parse(JSON.stringify(originalPlayerPositions));
      }
      if (originalPlayerRoutes) {
        playerRoutes = JSON.parse(JSON.stringify(originalPlayerRoutes));
      }
      if (originalRoutePaths) {
        // Restore ROUTE_PATHS_LOCAL waypoints from stored originals
        for (const routeName of Object.keys(ROUTE_PATHS_LOCAL)) {
          if (originalRoutePaths[routeName]) {
            ROUTE_PATHS_LOCAL[routeName] = originalRoutePaths[routeName].map(wp => [...wp]);
          }
        }
      }
      originalPlayerPositions = null;
      originalPlayerRoutes = null;
      originalRoutePaths = null;
    } else {
      // Store originals before first flip
      originalPlayerPositions = JSON.parse(JSON.stringify(playerPositions));
      originalPlayerRoutes = JSON.parse(JSON.stringify(playerRoutes));
      originalRoutePaths = {};
      for (const routeName of Object.keys(ROUTE_PATHS_LOCAL)) {
        originalRoutePaths[routeName] = ROUTE_PATHS_LOCAL[routeName].map(wp => [...wp]);
      }

      isFlipped = true;
      btnFlip.classList.add('active');

      // Flip all positions horizontally
      for (const [key, pos] of Object.entries(playerPositions)) {
        playerPositions[key] = [1 - pos[0], pos[1]];
      }

      // Swap left/right route variants
      for (const [key, route] of Object.entries(playerRoutes)) {
        if (key.startsWith('_')) continue; // skip _qb, _isRun, _ball_target
        if (FLIP_ROUTE_MAP[route]) {
          playerRoutes[key] = FLIP_ROUTE_MAP[route];
        }
      }
      // Also flip QB action if applicable
      if (playerRoutes._qb && FLIP_ROUTE_MAP[playerRoutes._qb]) {
        playerRoutes._qb = FLIP_ROUTE_MAP[playerRoutes._qb];
      }

      // Negate x-component of route waypoints ONLY for routes without a swap partner.
      // Routes with FLIP_ROUTE_MAP entries already change direction via the name swap.
      const swappedRoutes = new Set([...Object.keys(FLIP_ROUTE_MAP), ...Object.values(FLIP_ROUTE_MAP)]);
      for (const routeName of Object.keys(ROUTE_PATHS_LOCAL)) {
        if (swappedRoutes.has(routeName)) continue; // direction handled by route swap
        const waypoints = ROUTE_PATHS_LOCAL[routeName];
        for (let i = 0; i < waypoints.length; i++) {
          waypoints[i] = [-waypoints[i][0], waypoints[i][1]];
        }
      }
    }

    renderInteractive();
  });

  btnReset.addEventListener('click', () => {
    isFlipped = false;
    btnFlip.classList.remove('active');
    // Clear stored flip originals
    originalPlayerPositions = null;
    originalPlayerRoutes = null;
    // Restore ROUTE_PATHS_LOCAL to default (undo any negated waypoints from flipping)
    if (originalRoutePaths) {
      for (const routeName of Object.keys(ROUTE_PATHS_LOCAL)) {
        if (originalRoutePaths[routeName]) {
          ROUTE_PATHS_LOCAL[routeName] = originalRoutePaths[routeName].map(wp => [...wp]);
        }
      }
      originalRoutePaths = null;
    }
    document.getElementById('creatorPlayName').value = '';
    resetInteractivePositions();
    if (currentPlay) loadPlayRoutes();
    renderInteractive();
    renderPanelHotRoutes();
  });
}

// ===== SAVED SCHEMES (localStorage) =====
const STORAGE_KEY = 'savedSchemes';

function getSavedSchemes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('Failed to parse saved schemes:', e);
    return {};
  }
}

function putSavedSchemes(schemes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schemes));
    return true;
  } catch (e) {
    console.error('Save failed:', e);
    alert('Could not save scheme — browser storage may be full or blocked.');
    return false;
  }
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function saveScheme() {
  const nameInput = document.getElementById('creatorPlayName');
  const name = (nameInput.value || '').trim();
  if (!name) {
    nameInput.focus();
    nameInput.style.borderColor = '#FF1493';
    setTimeout(() => { nameInput.style.borderColor = ''; }, 1500);
    return;
  }

  const schemes = getSavedSchemes();

  // Capture active adjustments
  const activeAdj = [];
  document.querySelectorAll('#offAdjContent [data-adj].active, #defAdjContent [data-adj].active').forEach(btn => {
    activeAdj.push(btn.dataset.adj);
  });

  schemes[name] = {
    currentFormation,
    currentSubFormation,
    currentPlay,
    currentCoverage,
    playerPositions: { ...playerPositions },
    playerRoutes: { ...playerRoutes },
    isFlipped,
    activeAdjustments: activeAdj,
    // Also save select values so we can restore the cascade
    pbValue: pbSelect.value,
    fmValue: fmSelect.value,
    sfValue: sfSelect.value,
    plValue: plSelect.value,
    covValue: covSelect.value,
    defFmValue: defFmSelect.value,
    defSfValue: defSfSelect.value,
    savedAt: new Date().toISOString()
  };

  if (!putSavedSchemes(schemes)) return;
  renderSavedSchemesList();

  // Brief visual feedback
  nameInput.style.borderColor = '#00FFFF';
  setTimeout(() => { nameInput.style.borderColor = ''; }, 1000);
}

function loadScheme(name) {
  const schemes = getSavedSchemes();
  const scheme = schemes[name];
  if (!scheme) return;

  // Restore state variables — use explicit undefined checks to preserve intentional empty strings
  currentFormation = scheme.currentFormation != null ? scheme.currentFormation : 'Gun';
  currentSubFormation = scheme.currentSubFormation != null ? scheme.currentSubFormation : '';
  currentPlay = scheme.currentPlay || null;
  currentCoverage = scheme.currentCoverage || null;
  isFlipped = scheme.isFlipped || false;

  // Validate position overrides against the current formation's roster
  // This prevents stale keys from producing 12+ player merges
  const tempRenderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
  const validKeys = new Set(Object.keys(tempRenderer.getOffensePositions(currentFormation, currentSubFormation)));
  tempRenderer.destroy();

  playerPositions = {};
  if (scheme.playerPositions) {
    for (const [k, v] of Object.entries(scheme.playerPositions)) {
      if (validKeys.has(k)) playerPositions[k] = v;
    }
  }
  playerRoutes = {};
  if (scheme.playerRoutes) {
    for (const [k, v] of Object.entries(scheme.playerRoutes)) {
      if (k === '_ball_target') {
        // Validate ball target points to an existing player, resolving common aliases
        if (v) {
          const TARGET_ALIASES = { TE: 'TE1', TE1: 'TE', TE2: 'TE', WR5: 'WR4', FB: 'RB' };
          if (validKeys.has(v)) playerRoutes[k] = v;
          else if (TARGET_ALIASES[v] && validKeys.has(TARGET_ALIASES[v])) playerRoutes[k] = TARGET_ALIASES[v];
        }
      } else if (k.startsWith('_') || validKeys.has(k)) {
        playerRoutes[k] = v;
      }
    }
  }
  selectedPlayer = null;

  // Restore select cascade: playbook -> formation -> sub-formation -> play
  if (scheme.pbValue) {
    pbSelect.value = scheme.pbValue;
  } else {
    // No book saved — clear all cascaded selectors to prevent stale state
    pbSelect.value = '';
    fmSelect.innerHTML = '<option value="">Formation...</option>';
    fmSelect.disabled = true;
    sfSelect.innerHTML = '<option value="">Sub-formation...</option>';
    sfSelect.disabled = true;
    plSelect.innerHTML = '<option value="">Play...</option>';
    plSelect.disabled = true;
  }
  if (scheme.pbValue) {
    // Repopulate formation select
    const book = OFFENSIVE_PLAYBOOKS.find(b => b.name === scheme.pbValue);
    if (book && book.formations) {
      fmSelect.innerHTML = '<option value="">Formation...</option>';
      Object.keys(book.formations).sort().forEach(f => {
        fmSelect.innerHTML += `<option value="${f}">${f}</option>`;
      });
      fmSelect.disabled = false;

      if (scheme.fmValue) {
        fmSelect.value = scheme.fmValue;
        sfSelect.innerHTML = '<option value="">Sub-formation...</option>';
        if (book.formations[scheme.fmValue]) {
          Object.keys(book.formations[scheme.fmValue]).sort().forEach(s => {
            sfSelect.innerHTML += `<option value="${s}">${s}</option>`;
          });
          sfSelect.disabled = false;

          if (scheme.sfValue) {
            sfSelect.value = scheme.sfValue;
            plSelect.innerHTML = '<option value="">Play...</option>';
            const plays = book.formations[scheme.fmValue][scheme.sfValue] || [];
            [...plays].sort().forEach(p => {
              plSelect.innerHTML += `<option value="${p}">${p}</option>`;
            });
            plSelect.disabled = false;

            if (scheme.plValue) {
              plSelect.value = scheme.plValue;
            }
          }
        }
      }
    }
  }

  // Always restore coverage (clear if not saved)
  covSelect.value = scheme.covValue || '';
  currentCoverage = scheme.currentCoverage || covSelect.value || null;

  // Always restore defensive formation/subformation (clear if not saved)
  defFmSelect.value = scheme.defFmValue || 'Nickel';
  currentDefFormation = scheme.defFmValue || 'Nickel';
  populateDefSubFormations(currentDefFormation);
  defSfSelect.value = scheme.defSfValue || '';
  currentDefSubFormation = scheme.defSfValue || '';

  // Restore creator panel fields
  const nameInput = document.getElementById('creatorPlayName');
  if (nameInput) nameInput.value = name;

  const creatorFormation = document.getElementById('creatorFormation');
  if (creatorFormation) creatorFormation.value = currentFormation;

  const btnFlip = document.getElementById('btnFlip');
  if (btnFlip) btnFlip.classList.toggle('active', isFlipped);

  // Restore adjustments
  document.querySelectorAll('#offAdjContent [data-adj].active, #defAdjContent [data-adj].active').forEach(btn => {
    btn.classList.remove('active');
  });
  if (scheme.activeAdjustments) {
    for (const adjId of scheme.activeAdjustments) {
      const btn = document.querySelector(`#offAdjContent [data-adj="${adjId}"], #defAdjContent [data-adj="${adjId}"]`);
      if (btn) btn.classList.add('active');
    }
  }

  // Ensure we are in interactive mode
  isPlaying = false;
  interactiveMode = true;
  btnPlay.innerHTML = '<i class="bi bi-play-fill"></i>';

  renderInteractive();
  renderPanelHotRoutes();
  updatePlayInfo(currentPlay, currentCoverage);
  updateAnalytics();
}

function deleteScheme(name) {
  const schemes = getSavedSchemes();
  delete schemes[name];
  putSavedSchemes(schemes);
  renderSavedSchemesList();
}

function renderSavedSchemesList() {
  const dropdown = document.getElementById('savedSchemesDropdown');
  const listContainer = document.getElementById('savedSchemesList');
  const schemes = getSavedSchemes();
  const names = Object.keys(schemes).sort();

  // Populate dropdown (escaped)
  dropdown.innerHTML = '<option value="">Load a saved scheme...</option>' +
    names.map(n => { const e = escapeHTML(n); return `<option value="${e}">${e}</option>`; }).join('');

  // Populate list with delete buttons
  if (names.length === 0) {
    listContainer.innerHTML = '<p class="text-xs text-gray-500">No saved schemes yet</p>';
  } else {
    listContainer.innerHTML = names.map(n => {
      const scheme = schemes[n];
      const e = escapeHTML(n);
      const info = escapeHTML([scheme.currentFormation, scheme.currentPlay].filter(Boolean).join(' / ') || 'Custom');
      return `
        <div class="flex items-center gap-1 group">
          <button class="flex-1 text-left text-xs text-gray-300 hover:text-white truncate" data-load-scheme="${e}" title="Load ${e}">
            <i class="bi bi-folder2-open mr-1 text-neon-cyan"></i>${e}
            <span class="text-gray-500 ml-1">${info}</span>
          </button>
          <button class="text-gray-600 hover:text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" data-delete-scheme="${e}" title="Delete ${e}">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      `;
    }).join('');

    // Wire load buttons
    listContainer.querySelectorAll('[data-load-scheme]').forEach(btn => {
      btn.addEventListener('click', () => {
        loadScheme(btn.dataset.loadScheme);
      });
    });

    // Wire delete buttons
    listContainer.querySelectorAll('[data-delete-scheme]').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteScheme(btn.dataset.deleteScheme);
      });
    });
  }
}

function initSavedSchemes() {
  // Save button
  const btnSave = document.getElementById('btnSaveScheme');
  if (btnSave) {
    btnSave.addEventListener('click', saveScheme);
  }

  // Dropdown load
  const dropdown = document.getElementById('savedSchemesDropdown');
  if (dropdown) {
    dropdown.addEventListener('change', () => {
      if (dropdown.value) {
        loadScheme(dropdown.value);
        dropdown.value = ''; // reset dropdown after loading
      }
    });
  }

  // Initial render of saved schemes list
  renderSavedSchemesList();
}

// ===== MODAL CLOSE =====
detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('active');
});

// ===== INITIALIZE =====
initSelects();
initDrag();
initCanvasInteraction();
renderOffAdj();
renderDefAdj();
renderPanelMacros();
initCreatorControls();
initSavedSchemes();

// Start in interactive mode with empty field
isPlaying = false;
interactiveMode = true;
btnPlay.innerHTML = '<i class="bi bi-play-fill"></i>';
resetInteractivePositions();
renderInteractive();
renderPanelHotRoutes();
