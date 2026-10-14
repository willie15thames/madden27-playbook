import COVERAGES from '../data/coverages.js';
import PLAY_TYPES from '../data/plays.js';
import OFFENSIVE_PLAYS from '../data/offensive-plays.js';
import DEFENSIVE_PLAYS from '../data/defensive-plays.js';
import { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PERSONNEL_OFFENSE, PERSONNEL_DEFENSE, FORMATIONS_OFFENSE, FORMATIONS_DEFENSE } from '../data/personnel.js';
import { PlayArtRenderer } from '../components/playArt.js';

// Mobile menu
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

const searchInput = document.getElementById('universalSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const subFilters = document.getElementById('subFilters');
const subFilterSelect = document.getElementById('subFilterSelect');
const resultCount = document.getElementById('resultCount');
const resultsContainer = document.getElementById('searchResults');
const modal = document.getElementById('detailModal');
const modalContent = document.getElementById('detailModalContent');

let activeFilter = 'all';
let activeSubFilter = '';
let renderers = [];
function cleanupRenderers() { renderers.forEach(r => r.destroy()); renderers = []; }

// Build unified search index
function buildIndex() {
  const items = [];

  // Offensive play types
  for (const [name, play] of Object.entries(PLAY_TYPES)) {
    const variants = OFFENSIVE_PLAYS.filter(op => op.family === name || op.name === name);
    items.push({
      category: 'offense',
      type: play.type === 'Run' ? 'run' : 'pass',
      name,
      subtype: play.subtype,
      formation: null,
      personnel: null,
      playbooks: [...new Set(variants.flatMap(v => v.playbooks))],
      description: play.description,
      tags: [play.type, play.subtype, ...play.beats, ...play.goodVsCoverages],
      data: { kind: 'offenseType', name, play, variants }
    });
  }

  // Offensive play variants
  OFFENSIVE_PLAYS.forEach(op => {
    items.push({
      category: 'offense',
      type: op.playType === 'Run' ? 'run' : 'pass',
      name: op.name,
      subtype: op.subType,
      formation: op.formation,
      subFormation: op.subFormation,
      personnel: op.personnel,
      playbooks: op.playbooks,
      description: op.description,
      tags: [op.playType, op.subType, op.formation, op.subFormation, op.personnel, ...op.playbooks, ...op.beats, ...op.goodVsCoverages],
      data: { kind: 'offenseVariant', variant: op }
    });
  });

  // Coverages
  COVERAGES.forEach(cov => {
    const variants = DEFENSIVE_PLAYS.filter(dp => dp.coverageFamily === cov.name.split('(')[0].trim() || dp.coverage === cov.name || dp.coverageFamily === cov.name);
    items.push({
      category: 'defense',
      type: cov.type.toLowerCase(),
      name: cov.name,
      subtype: cov.type,
      formation: null,
      personnel: null,
      playbooks: [],
      description: cov.description,
      tags: [cov.type, cov.shell, ...cov.stops, ...cov.beatenBy, ...cov.bestAgainst],
      data: { kind: 'coverage', cov, variants }
    });
  });

  // Defensive play variants
  DEFENSIVE_PLAYS.forEach(dp => {
    items.push({
      category: 'defense',
      type: 'variant',
      name: dp.name,
      subtype: dp.coverage,
      formation: dp.formation,
      subFormation: dp.subFormation,
      personnel: dp.personnel,
      playbooks: dp.playbooks,
      description: dp.description,
      tags: [dp.coverage, dp.coverageFamily, dp.formation, dp.subFormation, dp.personnel, ...dp.playbooks, ...dp.stops, ...dp.beatenBy],
      data: { kind: 'defenseVariant', variant: dp }
    });
  });

  return items;
}

const INDEX = buildIndex();

// Collect unique values for sub-filters
function getFormations() {
  const set = new Set();
  FORMATIONS_OFFENSE.forEach(f => set.add(f));
  FORMATIONS_DEFENSE.forEach(f => set.add(f));
  INDEX.forEach(item => { if (item.formation) set.add(item.formation); });
  return [...set].sort();
}

function getPersonnelOptions() {
  const opts = [];
  for (const [key, val] of Object.entries(PERSONNEL_OFFENSE)) {
    opts.push({ value: val.label, label: `${val.label} (${val.description})` });
  }
  for (const [key, val] of Object.entries(PERSONNEL_DEFENSE)) {
    opts.push({ value: val.label, label: `${val.label} (${val.description})` });
  }
  return opts.sort((a, b) => a.label.localeCompare(b.label));
}

function getPlaybookOptions() {
  const opts = [];
  OFFENSIVE_PLAYBOOKS.forEach(pb => opts.push({ value: pb.name, label: `OFF: ${pb.name}` }));
  DEFENSIVE_PLAYBOOKS.forEach(pb => opts.push({ value: pb.name, label: `DEF: ${pb.name}` }));
  return opts.sort((a, b) => a.label.localeCompare(b.label));
}

// Filtering
function filterItems(search, filter, subFilter) {
  const query = search.toLowerCase().trim();
  const terms = query.split(/\s+/).filter(Boolean);

  return INDEX.filter(item => {
    // Category filter
    if (filter === 'offense' && item.category !== 'offense') return false;
    if (filter === 'defense' && item.category !== 'defense') return false;
    if (filter === 'formation' && !item.formation) return false;
    if (filter === 'personnel' && !item.personnel) return false;
    if (filter === 'playbook' && (!item.playbooks || item.playbooks.length === 0)) return false;

    // Sub-filter
    if (subFilter) {
      if (filter === 'formation' && item.formation !== subFilter) return false;
      if (filter === 'personnel' && !item.personnel?.includes(subFilter)) return false;
      if (filter === 'playbook' && !item.playbooks?.some(pb => pb === subFilter)) return false;
    }

    // Text search
    if (terms.length === 0) return true;
    const searchable = [item.name, item.subtype, item.formation, item.subFormation, item.personnel, item.description, ...item.tags]
      .filter(Boolean).join(' ').toLowerCase();
    return terms.every(term => searchable.includes(term));
  });
}

// Deduplicate: when no search query, collapse variants into their parent types/coverages
function deduplicateResults(items, hasQuery) {
  if (hasQuery) return items;
  const seen = new Set();
  return items.filter(item => {
    if (item.data.kind === 'offenseType' || item.data.kind === 'coverage') {
      seen.add(item.data.kind + ':' + item.name);
      return true;
    }
    // Show variants only if their parent type isn't in results
    const parentKey = item.category === 'offense'
      ? 'offenseType:' + (item.data.variant?.family || item.name)
      : 'coverage:' + (item.data.variant?.coverageFamily || item.name);
    return !seen.has(parentKey);
  });
}

// Render
function render() {
  cleanupRenderers();
  const query = searchInput.value;
  let items = filterItems(query, activeFilter, activeSubFilter);

  // When browsing without a search query, show parent types first
  if (!query.trim()) {
    items.sort((a, b) => {
      const kindOrder = { offenseType: 0, coverage: 1, offenseVariant: 2, defenseVariant: 3 };
      const ka = kindOrder[a.data.kind] ?? 2;
      const kb = kindOrder[b.data.kind] ?? 2;
      if (ka !== kb) return ka - kb;
      return a.name.localeCompare(b.name);
    });
    items = deduplicateResults(items, false);
  }

  // Limit display
  const MAX = 100;
  const total = items.length;
  const display = items.slice(0, MAX);

  resultCount.textContent = total === 0
    ? 'No results found'
    : `${total} result${total !== 1 ? 's' : ''}${total > MAX ? ` (showing first ${MAX})` : ''}`;

  resultsContainer.innerHTML = '';

  display.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'search-result-card animate-fade-in';
    card.style.animationDelay = `${i * 0.02}s`;

    const icon = getIcon(item);
    const badge = getBadge(item);
    const meta = getMeta(item);

    card.innerHTML = `
      <div class="flex items-start gap-3">
        <canvas id="searchArt${i}" width="140" height="112" class="rounded-lg flex-shrink-0" style="background:#1a472a;"></canvas>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <h3 class="font-bold text-white">${item.name}</h3>
            ${badge}
          </div>
          <p class="text-gray-400 text-sm line-clamp-2 mb-2">${item.description}</p>
          ${meta}
        </div>
        <i class="bi bi-chevron-right text-gray-600 flex-shrink-0 mt-3"></i>
      </div>
    `;

    card.addEventListener('click', () => openDetail(item));
    resultsContainer.appendChild(card);

    // Render play art thumbnail
    const canvas = document.getElementById(`searchArt${i}`);
    if (canvas) {
      const r = new PlayArtRenderer(canvas, { width: 140, height: 112 });
      if (item.category === 'offense') {
        const fm = item.formation || 'Shotgun';
        const sf = item.subFormation || 'Spread Y-Flex';
        const pn = item.data.variant?.family || item.data.variant?.name || item.name;
        r.renderPlayCard(fm, sf, pn);
      } else {
        const fm = item.formation || 'Nickel';
        const cn = item.data.variant?.coverage || item.data.cov?.name || item.name;
        r.renderCoverageCard(fm, cn);
      }
      renderers.push(r);
    }
  });

  if (total === 0) {
    resultsContainer.innerHTML = `
      <div class="text-center py-16">
        <i class="bi bi-search text-4xl text-gray-700 mb-4 block"></i>
        <p class="text-gray-500 text-lg">No results match your search.</p>
        <p class="text-gray-600 text-sm mt-1">Try a different keyword or filter.</p>
      </div>
    `;
  }
}

function getIcon(item) {
  if (item.data.kind === 'offenseType' || item.data.kind === 'offenseVariant') {
    return { icon: 'bi-lightning-fill', bg: 'bg-cyan-500/20 text-[#00FFFF]' };
  }
  if (item.data.kind === 'coverage') {
    return { icon: 'bi-shield-fill', bg: 'bg-pink-500/20 text-[#FF1493]' };
  }
  return { icon: 'bi-shield-fill-check', bg: 'bg-violet-500/20 text-[#8A2BE2]' };
}

function getBadge(item) {
  if (item.data.kind === 'offenseType') {
    const play = item.data.play;
    const cls = play.type === 'Run' ? 'run' : play.subtype === 'Screen' ? 'screen' : play.subtype === 'RPO' ? 'rpo' : 'pass';
    return `<span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span>
            <span class="play-type-badge ${cls}">${play.subtype}</span>`;
  }
  if (item.data.kind === 'coverage') {
    const cov = item.data.cov;
    const cls = cov.type === 'Man' ? 'man' : cov.type === 'Zone' ? 'zone' : cov.type === 'Zone Match' ? 'zone-match' : 'hybrid';
    return `<span class="type-badge ${cls}">${cov.type}</span>`;
  }
  if (item.data.kind === 'offenseVariant') {
    return `<span class="play-type-badge ${item.data.variant.playType === 'Run' ? 'run' : 'pass'}">${item.data.variant.playType}</span>`;
  }
  if (item.data.kind === 'defenseVariant') {
    return `<span class="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-[#B45CFF]">${item.data.variant.coverage}</span>`;
  }
  return '';
}

function getMeta(item) {
  const parts = [];
  if (item.formation) parts.push(`<span class="text-xs text-gray-500"><i class="bi bi-diagram-3-fill mr-1"></i>${item.formation}${item.subFormation ? ' / ' + item.subFormation : ''}</span>`);
  if (item.personnel) parts.push(`<span class="text-xs text-gray-500"><i class="bi bi-people-fill mr-1"></i>${item.personnel}</span>`);
  if (item.playbooks && item.playbooks.length > 0) {
    const shown = item.playbooks.slice(0, 3).join(', ');
    const extra = item.playbooks.length > 3 ? ` +${item.playbooks.length - 3}` : '';
    parts.push(`<span class="text-xs text-gray-500"><i class="bi bi-book-fill mr-1"></i>${shown}${extra}</span>`);
  }
  if (item.data.kind === 'offenseType' && item.data.variants.length > 0) {
    parts.push(`<span class="text-xs text-gray-500"><i class="bi bi-layers-fill mr-1"></i>${item.data.variants.length} variants</span>`);
  }
  if (item.data.kind === 'coverage' && item.data.variants.length > 0) {
    parts.push(`<span class="text-xs text-gray-500"><i class="bi bi-layers-fill mr-1"></i>${item.data.variants.length} variants</span>`);
  }
  return parts.length ? `<div class="flex flex-wrap gap-3">${parts.join('')}</div>` : '';
}

// Side selector state
let currentSide = 'offense';
let currentModalItem = null;

function getSideToggleHTML() {
  return `
    <div class="flex justify-center mb-3">
      <div class="inline-flex rounded-lg overflow-hidden border border-dark-600" id="sideToggle">
        <button class="side-btn ${currentSide === 'offense' ? 'active' : ''}" data-side="offense">
          <i class="bi bi-lightning-fill mr-1"></i>Run Offense
        </button>
        <button class="side-btn ${currentSide === 'defense' ? 'active' : ''}" data-side="defense">
          <i class="bi bi-shield-fill mr-1"></i>Run Defense
        </button>
      </div>
    </div>
  `;
}

function bindSideToggle() {
  const toggle = modalContent.querySelector('#sideToggle');
  if (!toggle) return;
  toggle.querySelectorAll('.side-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSide = btn.dataset.side;
      toggle.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (currentModalItem) startLiveAnimation(currentModalItem);
    });
  });
}

function startLiveAnimation(item) {
  cleanupRenderers();
  const c = document.getElementById('modalSearchArt');
  if (!c) return;
  const r = new PlayArtRenderer(c, { width: 440, height: 340 });

  const offFormation = item.offFormation || 'Shotgun';
  const offSubFormation = item.offSubFormation || 'Spread Y-Flex';
  const playFamily = item.playFamily || 'Inside Zone';
  const defFormation = item.defFormation || 'Nickel';
  const coverageName = item.coverageName || 'Cover 3';

  r.renderLivePlay({
    side: currentSide,
    offFormation, offSubFormation, playFamily,
    defFormation, coverageName,
    duration: 4000
  });
  renderers.push(r);
}

// Detail modal
function openDetail(item) {
  // Build animation params
  let animItem = {};
  if (item.data.kind === 'offenseType') {
    currentSide = 'offense';
    animItem = { offFormation: 'Shotgun', offSubFormation: 'Spread Y-Flex', playFamily: item.data.name, defFormation: 'Nickel', coverageName: 'Cover 3' };
    openOffenseTypeDetail(item.data.name, item.data.play, item.data.variants);
  } else if (item.data.kind === 'coverage') {
    currentSide = 'defense';
    animItem = { offFormation: 'Shotgun', offSubFormation: 'Spread Y-Flex', playFamily: 'PA Crossers', defFormation: 'Nickel', coverageName: item.data.cov.name };
    openCoverageDetail(item.data.cov, item.data.variants);
  } else if (item.data.kind === 'offenseVariant') {
    currentSide = 'offense';
    const v = item.data.variant;
    animItem = { offFormation: v.formation, offSubFormation: v.subFormation, playFamily: v.family || v.name, defFormation: 'Nickel', coverageName: 'Cover 3' };
    openOffenseVariantDetail(v);
  } else if (item.data.kind === 'defenseVariant') {
    currentSide = 'defense';
    const v = item.data.variant;
    animItem = { offFormation: 'Shotgun', offSubFormation: 'Spread Y-Flex', playFamily: 'PA Crossers', defFormation: v.formation, coverageName: v.coverage };
    openDefenseVariantDetail(v);
  }
  currentModalItem = animItem;
  bindSideToggle();
  startLiveAnimation(animItem);
}

function openOffenseTypeDetail(name, play, variants) {
  cleanupRenderers();
  const subtypeClass = play.type === 'Run' ? 'run' : play.subtype === 'Screen' ? 'screen' : play.subtype === 'RPO' ? 'rpo' : 'pass';
  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${name}</h2>
        <div class="flex gap-2 mt-1">
          <span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span>
          <span class="play-type-badge ${subtypeClass}">${play.subtype}</span>
        </div>
      </div>
      <button class="close-modal text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>
    ${getSideToggleHTML()}
    <div class="flex justify-center mb-4">
      <canvas id="modalSearchArt" width="440" height="340" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <p class="text-gray-300 mb-4">${play.description}</p>
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
    ${variants.length > 0 ? `
    <div class="border-t border-dark-600 pt-4">
      <h3 class="text-lg font-black mb-3"><i class="bi bi-layers-fill text-neon-purple mr-2"></i>Variants (${variants.length})</h3>
      <div class="space-y-2">
        ${variants.slice(0, 20).map(v => `
          <div class="p-3 bg-dark-700 rounded-lg border border-dark-600">
            <div class="font-semibold text-sm">${v.name}</div>
            <div class="text-xs text-gray-500">${v.formation} / ${v.subFormation} &middot; ${v.personnel}</div>
            <div class="mt-1 flex flex-wrap">${v.playbooks.slice(0, 4).map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
          </div>
        `).join('')}
        ${variants.length > 20 ? `<p class="text-xs text-gray-500 text-center">+${variants.length - 20} more variants</p>` : ''}
      </div>
    </div>` : ''}
  `;
  showModal();
}

function openCoverageDetail(cov, variants) {
  cleanupRenderers();
  const typeClass = cov.type === 'Man' ? 'man' : cov.type === 'Zone' ? 'zone' : cov.type === 'Zone Match' ? 'zone-match' : 'hybrid';
  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${cov.name}</h2>
        <div class="flex items-center gap-2 mt-1">
          <span class="type-badge ${typeClass}">${cov.type}</span>
          <span class="text-sm text-gray-400">${cov.shell}</span>
        </div>
      </div>
      <button class="close-modal text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>
    ${getSideToggleHTML()}
    <div class="flex justify-center mb-4">
      <canvas id="modalSearchArt" width="440" height="340" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <p class="text-gray-300 mb-4">${cov.description}</p>
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
    <div class="p-3 bg-dark-700 rounded-lg border border-dark-600 mb-4">
      <p class="text-xs text-neon-cyan font-bold mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</p>
      <p class="text-xs text-gray-300">${cov.tips}</p>
    </div>
    ${variants.length > 0 ? `
    <div class="border-t border-dark-600 pt-4">
      <h3 class="text-lg font-black mb-3"><i class="bi bi-layers-fill text-neon-purple mr-2"></i>Variants (${variants.length})</h3>
      <div class="space-y-2">
        ${variants.slice(0, 20).map(v => `
          <div class="p-3 bg-dark-700 rounded-lg border border-dark-600">
            <div class="font-semibold text-sm">${v.name}</div>
            <div class="text-xs text-gray-500">${v.formation} / ${v.subFormation} &middot; ${v.personnel}</div>
            <div class="mt-1 flex flex-wrap">${v.playbooks.slice(0, 4).map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
          </div>
        `).join('')}
        ${variants.length > 20 ? `<p class="text-xs text-gray-500 text-center">+${variants.length - 20} more variants</p>` : ''}
      </div>
    </div>` : ''}
  `;
  showModal();
}

function openOffenseVariantDetail(v) {
  cleanupRenderers();
  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${v.name}</h2>
        <div class="flex gap-2 mt-1">
          <span class="play-type-badge ${v.playType === 'Run' ? 'run' : 'pass'}">${v.playType}</span>
          <span class="text-sm text-gray-400">${v.formation} / ${v.subFormation}</span>
        </div>
      </div>
      <button class="close-modal text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>
    ${getSideToggleHTML()}
    <div class="flex justify-center mb-4">
      <canvas id="modalSearchArt" width="440" height="340" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <p class="text-gray-300 mb-4">${v.description}</p>
    <div class="text-xs text-gray-500 mb-4"><i class="bi bi-people-fill mr-1"></i>${v.personnel}</div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-[#00FFFF]"><i class="bi bi-lightning-fill mr-1"></i> Beats</h4>
        <div class="flex flex-wrap">${v.beats.map(b => `<span class="tag-green">${b}</span>`).join('')}</div>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-[#FF1493]"><i class="bi bi-shield-fill mr-1"></i> Stopped By</h4>
        <div class="flex flex-wrap">${v.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-[#00FFFF]">Good vs Coverages</h4>
        <div class="flex flex-wrap">${v.goodVsCoverages.map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-[#FF1493]">Bad vs Coverages</h4>
        <div class="flex flex-wrap">${(v.badVsCoverages.length ? v.badVsCoverages : ['None']).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
      </div>
    </div>
    <div class="mb-4">
      <span class="text-xs text-gray-500 font-semibold">PLAYBOOKS:</span>
      <div class="mt-1 flex flex-wrap">${v.playbooks.map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
    </div>
    ${v.hotRoutes && v.hotRoutes.length ? `
    <div class="mb-4">
      <span class="text-xs text-gray-500 font-semibold">HOT ROUTES:</span>
      <div class="mt-1 flex flex-wrap">${v.hotRoutes.map(h => `<span class="tag-yellow">${h}</span>`).join('')}</div>
    </div>` : ''}
    <div class="p-3 bg-dark-700 rounded-lg border border-dark-600">
      <p class="text-xs text-neon-cyan font-bold mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Tip</p>
      <p class="text-xs text-gray-300">${v.tips}</p>
    </div>
  `;
  showModal();
}

function openDefenseVariantDetail(v) {
  cleanupRenderers();
  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-2xl font-black">${v.name}</h2>
        <div class="flex gap-2 mt-1">
          <span class="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-[#B45CFF]">${v.coverage}</span>
          <span class="text-sm text-gray-400">${v.formation} / ${v.subFormation}</span>
        </div>
      </div>
      <button class="close-modal text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
    </div>
    ${getSideToggleHTML()}
    <div class="flex justify-center mb-4">
      <canvas id="modalSearchArt" width="440" height="340" class="rounded-lg" style="background:#1a472a;max-width:100%;"></canvas>
    </div>
    <p class="text-gray-300 mb-4">${v.description}</p>
    <div class="text-xs text-gray-500 mb-4"><i class="bi bi-people-fill mr-1"></i>${v.personnel}</div>
    <div class="grid grid-cols-3 gap-3 text-xs mb-4">
      <div class="p-2 bg-dark-700 rounded-lg border border-dark-600 text-center">
        <div class="text-gray-500 font-semibold">Rush</div>
        <div class="text-white text-lg font-bold">${v.rushCount}</div>
      </div>
      <div class="p-2 bg-dark-700 rounded-lg border border-dark-600 text-center">
        <div class="text-gray-500 font-semibold">Drop</div>
        <div class="text-white text-lg font-bold">${v.dropCount}</div>
      </div>
      <div class="p-2 bg-dark-700 rounded-lg border border-dark-600 text-center">
        <div class="text-gray-500 font-semibold">Blitz</div>
        <div class="text-white text-lg font-bold">${v.blitzCount}</div>
      </div>
    </div>
    <div class="results-section">
      <h4 class="text-[#00FFFF]"><i class="bi bi-shield-fill-check mr-1"></i> Stops</h4>
      <div class="flex flex-wrap">${v.stops.map(s => `<span class="tag-green">${s}</span>`).join('')}</div>
    </div>
    <div class="results-section">
      <h4 class="text-[#FF1493]"><i class="bi bi-lightning-fill mr-1"></i> Beaten By</h4>
      <div class="flex flex-wrap">${v.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
    </div>
    <div class="mb-4">
      <span class="text-xs text-gray-500 font-semibold">PLAYBOOKS:</span>
      <div class="mt-1 flex flex-wrap">${v.playbooks.map(p => `<span class="tag-purple">${p}</span>`).join('')}</div>
    </div>
    <div class="mb-4">
      <span class="text-xs text-gray-500 font-semibold">ADJUSTMENTS:</span>
      <div class="mt-1 flex flex-wrap">${v.adjustments.map(a => `<span class="tag-blue">${a}</span>`).join('')}</div>
    </div>
    <div class="p-3 bg-dark-700 rounded-lg border border-dark-600">
      <p class="text-xs text-neon-cyan font-bold mb-1"><i class="bi bi-lightbulb-fill mr-1"></i> Tip</p>
      <p class="text-xs text-gray-300">${v.tips}</p>
    </div>
  `;
  showModal();
}

function showModal() {
  modal.classList.add('active');
  modalContent.querySelector('.close-modal').addEventListener('click', closeModal);
}

function closeModal() { cleanupRenderers(); modal.classList.remove('active'); }
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Sub-filter population
function updateSubFilters() {
  if (['formation', 'personnel', 'playbook'].includes(activeFilter)) {
    subFilters.classList.remove('hidden');
    subFilterSelect.innerHTML = '<option value="">All...</option>';

    let options = [];
    if (activeFilter === 'formation') options = getFormations().map(f => ({ value: f, label: f }));
    else if (activeFilter === 'personnel') options = getPersonnelOptions();
    else if (activeFilter === 'playbook') options = getPlaybookOptions();

    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.value;
      el.textContent = opt.label;
      subFilterSelect.appendChild(el);
    });
  } else {
    subFilters.classList.add('hidden');
    activeSubFilter = '';
  }
}

// Event listeners
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    activeSubFilter = '';
    updateSubFilters();
    render();
  });
});

subFilterSelect.addEventListener('change', () => {
  activeSubFilter = subFilterSelect.value;
  render();
});

let debounceTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(render, 150);
});

// Search result card styles are in main styles.css

// Initial render
render();
