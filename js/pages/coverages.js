import COVERAGES from '../data/coverages.js';
import DEFENSIVE_PLAYS from '../data/defensive-plays.js';
import { PlayArtRenderer } from '../components/playArt.js';

// Mobile menu
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

const grid = document.getElementById('coverageGrid');
const modal = document.getElementById('coverageModal');
const modalContent = document.getElementById('coverageModalContent');
const searchInput = document.getElementById('coverageSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';
let renderers = [];

function cleanup() { renderers.forEach(r => r.destroy()); renderers = []; }

function getTypeClass(type) {
  if (type === 'Man') return 'man';
  if (type === 'Zone') return 'zone';
  if (type === 'Zone Match') return 'zone-match';
  return 'hybrid';
}

function renderCards(filter = 'all', search = '') {
  cleanup();
  grid.innerHTML = '';
  const filtered = COVERAGES.filter(cov => {
    const matchFilter = filter === 'all' || cov.type === filter || (filter === 'Zone Match' && cov.type === 'Zone Match');
    const matchSearch = !search || cov.name.toLowerCase().includes(search.toLowerCase()) ||
      cov.description.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  filtered.forEach((cov, i) => {
    const variants = DEFENSIVE_PLAYS.filter(dp => dp.coverageFamily === cov.name.split('(')[0].trim() || dp.coverage === cov.name || dp.coverageFamily === cov.name);
    const card = document.createElement('div');
    card.className = 'coverage-card animate-fade-in';
    card.style.animationDelay = `${i * 0.05}s`;
    card.style.borderLeft = `3px solid ${cov.color}`;
    card.innerHTML = `
      <div class="flex gap-3 mb-3">
        <canvas id="covArt${i}" width="140" height="110" class="rounded-lg flex-shrink-0" style="background:#1a472a;"></canvas>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-bold text-lg truncate">${cov.name}</h3>
            <span class="type-badge ${getTypeClass(cov.type)} flex-shrink-0 ml-2">${cov.type}</span>
          </div>
          <p class="text-gray-400 text-xs mb-2 line-clamp-2">${cov.description}</p>
          <div class="text-xs text-gray-500">${variants.length} variant${variants.length !== 1 ? 's' : ''} across formations</div>
        </div>
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
    `;
    card.addEventListener('click', () => openModal(cov, variants));
    grid.appendChild(card);

    // Render play art
    const canvas = document.getElementById(`covArt${i}`);
    if (canvas) {
      const r = new PlayArtRenderer(canvas, { width: 140, height: 110 });
      r.renderCoverageCard('Nickel', cov.name);
      renderers.push(r);
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

    <div class="flex justify-center mb-4">
      <canvas id="modalCovArt" width="280" height="220" class="rounded-lg" style="background:#1a472a;"></canvas>
    </div>

    <p class="text-gray-300 mb-4">${cov.description}</p>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="results-section mb-0">
        <h4 class="text-green-400"><i class="bi bi-check-circle-fill mr-1"></i> Strengths</h4>
        <ul class="space-y-1">
          ${cov.strengths.map(s => `<li class="text-xs text-gray-300 flex items-start gap-1"><i class="bi bi-plus-circle text-green-500 mt-0.5 flex-shrink-0"></i>${s}</li>`).join('')}
        </ul>
      </div>
      <div class="results-section mb-0">
        <h4 class="text-red-400"><i class="bi bi-exclamation-circle-fill mr-1"></i> Weaknesses</h4>
        <ul class="space-y-1">
          ${cov.weaknesses.map(w => `<li class="text-xs text-gray-300 flex items-start gap-1"><i class="bi bi-dash-circle text-red-500 mt-0.5 flex-shrink-0"></i>${w}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="results-section">
      <h4 class="text-green-400"><i class="bi bi-shield-fill-check mr-1"></i> What It Stops</h4>
      <div class="flex flex-wrap">${cov.stops.map(s => `<span class="tag-green">${s}</span>`).join('')}</div>
    </div>

    <div class="results-section">
      <h4 class="text-red-400"><i class="bi bi-lightning-fill mr-1"></i> What Beats It</h4>
      <div class="flex flex-wrap">${cov.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
    </div>

    <div class="results-section">
      <h4 class="text-yellow-400"><i class="bi bi-bullseye mr-1"></i> Best Against</h4>
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

  // Render modal play art
  const mainCanvas = document.getElementById('modalCovArt');
  if (mainCanvas) {
    const r = new PlayArtRenderer(mainCanvas, { width: 280, height: 220 });
    r.renderCoverageCard('Nickel', cov.name);
    renderers.push(r);
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
        // Render big art
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

function closeModal() { cleanup(); modal.classList.remove('active'); }
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
renderCards();
