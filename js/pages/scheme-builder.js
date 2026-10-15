// Scheme Builder - Interactive Play Designer with Drag/Drop & Route Editing
import { HOT_ROUTES, OFFENSIVE_ADJUSTMENTS, DEFENSIVE_ADJUSTMENTS, MACROS } from '../data/adjustments.js';
import { OFFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import COVERAGES from '../data/coverages.js';
import { PlayArtRenderer, PLAY_ROUTES } from '../components/playArt.js';
import { calculateMatchupGrade, recommendPlays, CONCEPT_LABELS } from '../data/analytics.js';

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
let selectedPlayer = null;
let draggedPlayer = null;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let currentFormation = 'Gun';
let currentSubFormation = 'Spread Y-Flex';

// Available routes for the route picker
const ROUTE_OPTIONS = [
  { id: 'streak', name: 'Streak', icon: '↑' },
  { id: 'post', name: 'Post', icon: '↗' },
  { id: 'corner', name: 'Corner', icon: '↘' },
  { id: 'out', name: 'Out', icon: '→' },
  { id: 'in', name: 'In', icon: '←' },
  { id: 'slant', name: 'Slant', icon: '↙' },
  { id: 'drag', name: 'Drag', icon: '→→' },
  { id: 'drag_left', name: 'Drag Left', icon: '←←' },
  { id: 'curl', name: 'Curl', icon: '↑↓' },
  { id: 'comeback', name: 'Comeback', icon: '↑↘' },
  { id: 'flat', name: 'Flat', icon: '⤵' },
  { id: 'flat_left', name: 'Flat Left', icon: '⤶' },
  { id: 'wheel', name: 'Wheel', icon: '⤴' },
  { id: 'seam', name: 'Seam', icon: '⬆' },
  { id: 'hitch', name: 'Hitch', icon: '⤒' },
  { id: 'fade', name: 'Fade', icon: '↗↗' },
  { id: 'screen', name: 'Screen', icon: '⤷' },
  { id: 'screen_left', name: 'Screen Left', icon: '⤶' },
  { id: 'angle', name: 'Angle', icon: '∠' },
  { id: 'block', name: 'Block', icon: '■' },
  { id: 'run_inside', name: 'Inside Run', icon: '▲' },
  { id: 'run_stretch', name: 'Stretch', icon: '►' },
  { id: 'run_power', name: 'Power', icon: '▶' },
  { id: 'run_counter', name: 'Counter', icon: '◄▶' },
  { id: 'run_dive', name: 'Dive', icon: '▼' },
];

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
    currentFormation = fmSelect.value || 'Gun';
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
    currentSubFormation = sfSelect.value || 'Spread Y-Flex';
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
  if (!currentPlay && !fmSelect.value) {
    const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
    activeRenderer = renderer;
    renderer.drawField();
    updatePlayInfo(null, null);
    return;
  }

  const renderer = new PlayArtRenderer(liveCanvas, { width: 640, height: 480 });
  activeRenderer = renderer;

  const formation = fmSelect.value || 'Gun';
  const subFormation = sfSelect.value || 'Spread Y-Flex';
  const play = currentPlay || 'Inside Zone';

  if (currentCoverage) {
    renderer.renderLivePlay({
      side: 'offense',
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
}

// ===== INTERACTIVE CANVAS RENDERING =====
const ROUTE_PATHS_LOCAL = {
  'streak': [[0, -0.35]],
  'post': [[0, -0.15], [-0.12, -0.30]],
  'corner': [[0, -0.15], [0.12, -0.30]],
  'out': [[0, -0.12], [0.12, 0]],
  'in': [[0, -0.12], [-0.12, 0]],
  'slant': [[-0.10, -0.18]],
  'drag': [[0, -0.04], [0.30, -0.04]],
  'drag_left': [[0, -0.04], [-0.30, -0.04]],
  'curl': [[0, -0.15], [0, 0.03]],
  'comeback': [[0, -0.18], [0.04, 0.04]],
  'flat': [[0.10, -0.02]],
  'flat_left': [[-0.10, -0.02]],
  'wheel': [[0.08, -0.02], [0.08, -0.30]],
  'seam': [[0, -0.30]],
  'hitch': [[0, -0.08], [0, 0.02]],
  'fade': [[0.04, -0.35]],
  'screen': [[0.06, 0.04], [0.10, 0.02]],
  'screen_left': [[-0.06, 0.04], [-0.10, 0.02]],
  'angle': [[0.04, 0.04], [0.15, -0.12]],
  'block': [],
  'run_right': [[0.15, -0.05]],
  'run_left': [[-0.15, -0.05]],
  'run_inside': [[0, -0.12]],
  'run_power': [[0.06, -0.12]],
  'run_counter': [[-0.05, -0.02], [0.10, -0.12]],
  'run_stretch': [[0.20, -0.04]],
  'run_dive': [[0, -0.08]],
  'run_outside': [[0.20, -0.06]],
  'qb_drop': [[0, 0.04]],
  'qb_boot_right': [[0.22, 0.02], [0.06, -0.12]],
  'qb_boot_left': [[-0.22, 0.02], [-0.06, -0.12]],
  'qb_handoff': [[0, 0.02]],
  'qb_scramble': [[-0.05, -0.10]],
  'option_give': [[0.10, -0.06]],
  'option_keep': [[-0.08, -0.10]],
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
    // Flip all positions horizontally
    for (const [key, pos] of Object.entries(playerPositions)) {
      playerPositions[key] = [1 - pos[0], pos[1]];
    }
    renderInteractive();
  });

  btnReset.addEventListener('click', () => {
    isFlipped = false;
    document.getElementById('creatorPlayName').value = '';
    resetInteractivePositions();
    if (currentPlay) loadPlayRoutes();
    renderInteractive();
    renderPanelHotRoutes();
  });
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

// Start in interactive mode with empty field
isPlaying = false;
interactiveMode = true;
btnPlay.innerHTML = '<i class="bi bi-play-fill"></i>';
resetInteractivePositions();
renderInteractive();
renderPanelHotRoutes();
