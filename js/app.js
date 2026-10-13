// Main app JS for index page
import COVERAGES from './data/coverages.js';

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Cheat sheet on home page
const cheatSheet = document.getElementById('cheatSheet');
if (cheatSheet) {
  COVERAGES.forEach(cov => {
    const typeClass = cov.type === 'Man' ? 'man' : cov.type === 'Zone' ? 'zone' : cov.type === 'Zone Match' ? 'zone-match' : 'hybrid';
    const card = document.createElement('div');
    card.className = 'cheat-card animate-fade-in';
    card.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-bold text-sm">${cov.name}</h3>
        <span class="type-badge ${typeClass}">${cov.type}</span>
      </div>
      <div class="mb-2">
        <span class="text-xs text-gray-500 font-semibold uppercase">Stops:</span>
        <div class="mt-1 flex flex-wrap">${cov.stops.slice(0, 4).map(s => `<span class="tag-green">${s}</span>`).join('')}</div>
      </div>
      <div>
        <span class="text-xs text-gray-500 font-semibold uppercase">Beaten by:</span>
        <div class="mt-1 flex flex-wrap">${cov.beatenBy.slice(0, 4).map(b => `<span class="tag-red">${b}</span>`).join('')}</div>
      </div>
    `;
    cheatSheet.appendChild(card);
  });
}
