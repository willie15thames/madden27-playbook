// Main app JS for index page
import COVERAGES from './data/coverages.js';
import PLAY_TYPES from './data/plays.js';
import { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS } from './data/playbooks.js';

// Dynamic stats from actual data
function computeStats() {
  let totalPlays = 0;
  let totalFormations = 0;
  const allBooks = [...OFFENSIVE_PLAYBOOKS, ...DEFENSIVE_PLAYBOOKS];

  for (const book of allBooks) {
    if (book.formations) {
      for (const [formation, subs] of Object.entries(book.formations)) {
        for (const [subName, plays] of Object.entries(subs)) {
          totalFormations++;
          if (Array.isArray(plays)) totalPlays += plays.length;
        }
      }
    }
  }

  return {
    coverages: COVERAGES.length,
    totalPlays,
    totalFormations,
    totalPlaybooks: allBooks.length
  };
}

const stats = computeStats();

const statCov = document.querySelector('#statCoverages div');
const statPlays = document.querySelector('#statPlays div');
const statForm = document.querySelector('#statFormations div');
const statBooks = document.querySelector('#statPlaybooks div');

const statPlayTypes = document.querySelector('#statPlayTypes div');
if (statCov) statCov.textContent = stats.coverages.toLocaleString();
if (statPlayTypes) statPlayTypes.textContent = Object.keys(PLAY_TYPES).length.toLocaleString();
if (statPlays) statPlays.textContent = stats.totalPlays.toLocaleString();
if (statForm) statForm.textContent = stats.totalFormations.toLocaleString();
if (statBooks) statBooks.textContent = stats.totalPlaybooks.toLocaleString();

// Cheat sheet on home page — clickable cards navigate to Coverages/Offenses pages
const cheatSheet = document.getElementById('cheatSheet');
if (cheatSheet) {
  [...COVERAGES].sort((a, b) => a.name.localeCompare(b.name)).forEach(cov => {
    const typeClass = cov.type === 'Man' ? 'man' : cov.type === 'Zone' ? 'zone' : cov.type === 'Zone Match' ? 'zone-match' : 'hybrid';
    const card = document.createElement('div');
    card.className = 'cheat-card animate-fade-in';
    card.style.cursor = 'pointer';
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-bold text-sm">${cov.name}</h3>
        <span class="type-badge ${typeClass}">${cov.type}</span>
      </div>
      <div class="mb-2">
        <span class="text-xs text-gray-500 font-semibold uppercase">Stops:</span>
        <div class="mt-1 flex flex-wrap">${cov.stops.slice(0, 4).map(s => `<span class="tag-green cheat-tag" data-concept="${s}" data-dest="offenses">${s}</span>`).join('')}</div>
      </div>
      <div>
        <span class="text-xs text-gray-500 font-semibold uppercase">Beaten by:</span>
        <div class="mt-1 flex flex-wrap">${cov.beatenBy.slice(0, 4).map(b => `<span class="tag-red cheat-tag" data-concept="${b}" data-dest="offenses">${b}</span>`).join('')}</div>
      </div>
    `;

    // Click coverage name/card → navigate to Coverages page with search
    const navigateToCoverage = () => {
      window.location.href = `pages/coverages.html?search=${encodeURIComponent(cov.name)}`;
    };
    card.addEventListener('click', (e) => {
      // If a tag was clicked, navigate to offenses instead
      if (e.target.classList.contains('cheat-tag')) {
        e.stopPropagation();
        const concept = e.target.dataset.concept;
        window.location.href = `pages/offenses.html?search=${encodeURIComponent(concept)}`;
        return;
      }
      navigateToCoverage();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigateToCoverage();
      }
    });

    cheatSheet.appendChild(card);
  });
}
