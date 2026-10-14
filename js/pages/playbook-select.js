import COVERAGES from '../data/coverages.js';
import PLAY_TYPES from '../data/plays.js';
import { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PlayArtRenderer } from '../components/playArt.js';

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

let currentSide = 'offense';
let currentPlaybooks = OFFENSIVE_PLAYBOOKS;
let renderers = [];
function cleanupRenderers() { renderers.forEach(r => r.destroy()); renderers = []; }

function populatePlaybookSelector() {
  playbookSelector.innerHTML = '<option value="">Choose a playbook...</option>';
  currentPlaybooks.forEach(pb => {
    const opt = document.createElement('option');
    opt.value = pb.id;
    opt.textContent = pb.name;
    playbookSelector.appendChild(opt);
  });
  playbookInfo.classList.add('hidden');
  formationTree.innerHTML = '';
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

// Playbook selection
playbookSelector.addEventListener('change', () => {
  const pb = currentPlaybooks.find(p => p.id === playbookSelector.value);
  if (!pb) {
    playbookInfo.classList.add('hidden');
    formationTree.innerHTML = '';
    return;
  }

  // Show info
  playbookInfo.classList.remove('hidden');
  document.getElementById('playbookName').textContent = pb.name;
  document.getElementById('playbookStyle').textContent = `Style: ${pb.style}`;
  document.getElementById('formationCount').textContent = Object.keys(pb.formations).length;

  // Build formation tree
  formationTree.innerHTML = '';
  Object.entries(pb.formations).forEach(([formationName, subFormations]) => {
    const group = document.createElement('div');
    group.className = 'formation-group animate-fade-in';

    const totalPlays = Object.values(subFormations).reduce((sum, plays) => sum + plays.length, 0);

    group.innerHTML = `
      <div class="formation-header" data-formation="${formationName}">
        <div class="flex items-center gap-3">
          <i class="bi ${currentSide === 'offense' ? 'bi-lightning-fill text-[#00FFFF]' : 'bi-shield-fill text-[#FF1493]'}"></i>
          <span>${formationName}</span>
          <span class="text-xs text-gray-500">${Object.keys(subFormations).length} sets &middot; ${totalPlays} plays</span>
        </div>
        <i class="bi bi-chevron-down chevron text-gray-500"></i>
      </div>
      <div class="formation-body">
        ${Object.entries(subFormations).map(([subName, plays]) => `
          <div class="sub-formation">
            <div class="sub-formation-name">${subName}</div>
            <div class="flex flex-wrap gap-2">
              ${plays.map((play, pi) => `
                <div class="play-chip-art" data-play="${play}" data-formation="${formationName}" data-subformation="${subName}">
                  <canvas id="pbArt_${formationName.replace(/\s+/g,'_')}_${subName.replace(/\s+/g,'_')}_${pi}" width="60" height="48" class="rounded" style="background:#1a472a;"></canvas>
                  <span class="text-xs text-center block mt-1 truncate" style="max-width:60px;">${play}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    formationTree.appendChild(group);
  });

  // Accordion behavior
  formationTree.querySelectorAll('.formation-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // Close all
      formationTree.querySelectorAll('.formation-body').forEach(b => b.classList.remove('open'));
      formationTree.querySelectorAll('.formation-header').forEach(h => h.classList.remove('open'));
      // Open clicked if was closed
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
        // Render play art canvases inside this formation
        body.querySelectorAll('.play-chip-art canvas').forEach(canvas => {
          if (canvas.dataset.rendered) return;
          canvas.dataset.rendered = '1';
          const chipEl = canvas.closest('.play-chip-art');
          const fm = chipEl.dataset.formation;
          const sf = chipEl.dataset.subformation;
          const pn = chipEl.dataset.play;
          const r = new PlayArtRenderer(canvas, { width: 60, height: 48 });
          if (currentSide === 'offense') {
            r.renderPlayCard(fm, sf, pn);
          } else {
            r.renderCoverageCard(fm, pn);
          }
          renderers.push(r);
        });
      }
    });
  });

  // Play chip clicks
  formationTree.querySelectorAll('.play-chip-art').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const playName = chip.dataset.play;
      openPlayDetail(playName, chip.dataset.formation, chip.dataset.subformation);
    });
  });
});

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

  if (!play) {
    modalContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-black">${playName}</h2>
        <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="flex justify-center mb-4">
        <canvas id="pbModalArt" width="280" height="220" class="rounded-lg" style="background:#1a472a;"></canvas>
      </div>
      <p class="text-gray-300 mb-4">This play is available in the selected playbook.</p>
      <div class="results-section">
        <h4 class="text-[#00FFFF]">Play Information</h4>
        <p class="text-sm text-gray-400">Detailed matchup data for this specific play variation is not yet available. Check the general play type categories on the <a href="offenses.html" class="text-neon-cyan underline">Offenses page</a> for similar plays.</p>
      </div>
      ${getSimilarPlaysHTML(playName)}
    `;
  } else {
    const subtypeClass = play.type === 'Run' ? 'run' : play.subtype === 'Screen' ? 'screen' : play.subtype === 'RPO' ? 'rpo' : 'pass';
    modalContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-black">${playName}</h2>
          <div class="flex gap-2 mt-1">
            <span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span>
            <span class="play-type-badge ${subtypeClass}">${play.subtype}</span>
          </div>
        </div>
        <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="flex justify-center mb-4">
        <canvas id="pbModalArt" width="280" height="220" class="rounded-lg" style="background:#1a472a;"></canvas>
      </div>
      <p class="text-gray-300 mb-6">${play.description}</p>

      <div class="results-section">
        <h4 class="text-[#00FFFF]"><i class="bi bi-lightning-fill mr-1"></i> This Play Beats</h4>
        <div class="flex flex-wrap">${play.beats.map(b => `<span class="tag-green">${b}</span>`).join('')}</div>
      </div>
      <div class="results-section">
        <h4 class="text-[#FF1493]"><i class="bi bi-shield-fill mr-1"></i> Stopped By</h4>
        <div class="flex flex-wrap">${play.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
      </div>
      <div class="results-section">
        <h4 class="text-[#00FFFF]"><i class="bi bi-check-circle-fill mr-1"></i> Good vs Coverages</h4>
        <div class="flex flex-wrap">${play.goodVsCoverages.map(c => `<span class="tag-green">${c}</span>`).join('')}</div>
      </div>
      <div class="results-section">
        <h4 class="text-[#FF1493]"><i class="bi bi-x-circle-fill mr-1"></i> Bad vs Coverages</h4>
        <div class="flex flex-wrap">${(play.badVsCoverages.length > 0 ? play.badVsCoverages : ['None specifically']).map(c => `<span class="tag-red">${c}</span>`).join('')}</div>
      </div>
      <div class="p-4 bg-dark-700 rounded-lg border border-dark-600 mt-4">
        <h4 class="text-sm font-bold text-neon-cyan mb-2"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</h4>
        <p class="text-sm text-gray-300">${play.tips}</p>
      </div>
    `;
  }

  modal.classList.add('active');
  modalContent.querySelector('#closeModal').addEventListener('click', closeModal);

  const pbModalCanvas = document.getElementById('pbModalArt');
  if (pbModalCanvas) {
    const r = new PlayArtRenderer(pbModalCanvas, { width: 280, height: 220 });
    r.renderPlayCard(fm, sf, playName);
    renderers.push(r);
  }
}

function openDefenseDetail(coverageName, formation) {
  const cov = findCoverage(coverageName);
  const fm = formation || 'Nickel';

  if (!cov) {
    modalContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-black">${coverageName}</h2>
        <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="flex justify-center mb-4">
        <canvas id="pbModalArt" width="280" height="220" class="rounded-lg" style="background:#1a472a;"></canvas>
      </div>
      <p class="text-gray-300 mb-4">This coverage is available in the selected playbook.</p>
      <div class="results-section">
        <h4 class="text-[#FF1493]">Coverage Information</h4>
        <p class="text-sm text-gray-400">Check the <a href="coverages.html" class="text-neon-cyan underline">Coverages page</a> for detailed breakdowns of similar coverages.</p>
      </div>
    `;
  } else {
    const typeClass = cov.type === 'Man' ? 'man' : cov.type === 'Zone' ? 'zone' : cov.type === 'Zone Match' ? 'zone-match' : 'hybrid';
    modalContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-black">${cov.name}</h2>
          <div class="flex gap-2 mt-1">
            <span class="type-badge ${typeClass}">${cov.type}</span>
            <span class="text-sm text-gray-400">${cov.shell}</span>
          </div>
        </div>
        <button id="closeModal" class="text-gray-400 hover:text-white text-2xl"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="flex justify-center mb-4">
        <canvas id="pbModalArt" width="280" height="220" class="rounded-lg" style="background:#1a472a;"></canvas>
      </div>
      <p class="text-gray-300 mb-6">${cov.description}</p>

      <div class="results-section">
        <h4 class="text-[#00FFFF]"><i class="bi bi-check-circle-fill mr-1"></i> Strengths</h4>
        <ul class="space-y-1">
          ${cov.strengths.map(s => `<li class="text-sm text-gray-300 flex items-start gap-2"><i class="bi bi-plus-circle text-[#00FFFF] mt-0.5"></i>${s}</li>`).join('')}
        </ul>
      </div>
      <div class="results-section">
        <h4 class="text-[#FF1493]"><i class="bi bi-exclamation-circle-fill mr-1"></i> Weaknesses</h4>
        <ul class="space-y-1">
          ${cov.weaknesses.map(w => `<li class="text-sm text-gray-300 flex items-start gap-2"><i class="bi bi-dash-circle text-[#FF1493] mt-0.5"></i>${w}</li>`).join('')}
        </ul>
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
      <div class="p-4 bg-dark-700 rounded-lg border border-dark-600 mt-4">
        <h4 class="text-sm font-bold text-neon-cyan mb-2"><i class="bi bi-lightbulb-fill mr-1"></i> Pro Tip</h4>
        <p class="text-sm text-gray-300">${cov.tips}</p>
      </div>
    `;
  }

  modal.classList.add('active');
  modalContent.querySelector('#closeModal').addEventListener('click', closeModal);

  const pbModalCanvas = document.getElementById('pbModalArt');
  if (pbModalCanvas) {
    const r = new PlayArtRenderer(pbModalCanvas, { width: 280, height: 220 });
    r.renderCoverageCard(fm, coverageName);
    renderers.push(r);
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
        ${similar.map(([name, play]) => `
          <div class="p-3 bg-dark-700 rounded-lg border border-dark-600">
            <div class="font-bold text-sm mb-1">${name} <span class="play-type-badge ${play.type === 'Run' ? 'run' : 'pass'}">${play.type}</span></div>
            <div class="flex flex-wrap mt-1">
              <span class="text-xs text-gray-500 mr-2">Beats:</span>
              ${play.goodVsCoverages.slice(0, 3).map(c => `<span class="tag-green">${c}</span>`).join('')}
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

// Initial
populatePlaybookSelector();
