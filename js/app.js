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
    // Use a search term that matches catalog naming (e.g. "Cover 1" → "Cover 1",
    // but also "Tampa 2" → "Tampa", "Inverted Cover 2" → "Invert")
    const searchTerm = cov.name.replace(/\s*\([^)]*\)/, '').trim();
    const navigateToCoverage = () => {
      window.location.href = `pages/coverages.html?search=${encodeURIComponent(searchTerm)}`;
    };
    card.addEventListener('click', (e) => {
      // If a tag was clicked, navigate to offenses instead
      if (e.target.classList.contains('cheat-tag')) {
        e.stopPropagation();
        // Normalize concept tags to match play names in the offenses catalog
        // Strip common suffixes: "Post routes" → "Post", "Flood concepts" → "Flood"
        const CONCEPT_MAP = {
          'flat routes': 'flat', 'flat route': 'flat', 'shallow crosses': 'shallow cross', 'shallow crossers': 'shallow cross',
          'double moves': 'post corner', 'wheel routes': 'wheel', 'hot routes': 'hot route',
          'quick game': 'slant', 'curl routes': 'curl', 'post routes': 'post',
          'corner routes': 'corner', 'out routes': 'out', 'deep crossers': 'deep crossers',
          'deep outs': 'PA deep outs', 'seam routes': 'seam', 'drag routes': 'drag',
          'sideline fades': 'fade', 'sideline throws': 'corner strike', 'streak': 'verticals',
          'streaks': 'four verticals', 'quick crosses': 'mesh', 'middle reads': 'levels',
          'stick concepts': 'stick', 'mesh concepts': 'mesh', 'levels concepts': 'levels',
          'levels concept': 'levels', 'flood concepts': 'flood', 'smash concepts': 'smash',
          'smash concept': 'smash', 'bunch formations': 'bunch', 'spot concepts': 'spot',
          'spot concept': 'spot',
          'hb screens': 'hb screen', 'hb swings': 'swing', 'check downs': 'check down',
          'delayed handoffs': 'draw', 'curls': 'curl', 'comebacks': 'comeback',
          'slants': 'slant', 'drags': 'drag', 'screens': 'screen',
          'crossers': 'crossers', 'crossing routes': 'crossers', 'intermediate crossers': 'crossers',
          'inside crossing routes': 'crossers',
          'go routes': 'four verticals', 'deep posts': 'deep post', 'deep corners': 'deep corner',
          '4 verticals': 'four verticals', 'verticals': 'verticals',
          'dig routes': 'dig', 'in routes': 'deep in', 'digging routes': 'dig',
          'bubble screens': 'bubble screen', 'toss plays': 'hb toss',
          'outside runs': 'outside zone', 'strong side runs': 'power',
          'deep passes': 'four verticals', 'deep bombs': 'four verticals',
          'deep sideline routes': 'corner strike', 'deep routes': 'verticals',
          'comeback routes': 'comeback', 'posts': 'post', 'quick outs': 'quick outs',
          'short to intermediate routes': 'slant', 'deep middle attacks': 'seam',
          'quick slants': 'quick slants', 'quick passes': 'quick slants',
          'option routes': 'read option', 'rpos': 'rpo', 'misdirection': 'counter',
          'heavy motion': 'jet sweep', 'play action deep': 'pa post shot',
          'te attacks': 'y trail', 'te seams': 'pa shot seams',
          'weak side flood': 'flood', 'backside out routes': 'out',
          'curl-flat combos': 'curl flat', 'post-wheel combo': 'hb wheel',
          'pick plays': 'mesh', 'pick routes': 'mesh',
          'any short route': 'quick slants', 'short curls': 'curl',
          'short middle': 'stick', 'angle routes': 'angle',
          'deep corner routes': 'deep corner', 'routes away from lurker': 'flood',
          'speed mismatches deep': 'four verticals', 'speed receivers': 'four verticals',
          'trips formations': 'trips', 'deep passing': 'four verticals'
        };
        let concept = e.target.dataset.concept;
        const lower = concept.toLowerCase();
        if (CONCEPT_MAP[lower]) concept = CONCEPT_MAP[lower];
        else concept = concept.replace(/\s+(routes?|concepts?|formations?|throws?)$/i, '').trim();
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
