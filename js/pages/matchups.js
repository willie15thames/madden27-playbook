import COVERAGES from '../data/coverages.js';
import PLAY_TYPES from '../data/plays.js';
import DEFENSIVE_PLAYS from '../data/defensive-plays.js';
import OFFENSIVE_PLAYS from '../data/offensive-plays.js';
import { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS } from '../data/playbooks.js';
import { PlayArtRenderer } from '../components/playArt.js';

document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

const offPlaybookSelect = document.getElementById('offPlaybookSelect');
const offFormationSelect = document.getElementById('offFormationSelect');
const offSubFormationSelect = document.getElementById('offSubFormationSelect');
const offPlaySelect = document.getElementById('offPlaySelect');
const defPlaybookSelect = document.getElementById('defPlaybookSelect');
const defFormationSelect = document.getElementById('defFormationSelect');
const defSubFormationSelect = document.getElementById('defSubFormationSelect');
const defPlaySelect = document.getElementById('defPlaySelect');
const matchupResults = document.getElementById('matchupResults');

let vsRenderer = null;
let offStaticRenderer = null;
let defStaticRenderer = null;

// Track current selections
let currentOff = { formation: '', subFormation: '', play: '' };
let currentDef = { formation: '', subFormation: '', play: '' };

OFFENSIVE_PLAYBOOKS.forEach(pb => {
  const opt = document.createElement('option');
  opt.value = pb.id; opt.textContent = pb.name;
  offPlaybookSelect.appendChild(opt);
});
DEFENSIVE_PLAYBOOKS.forEach(pb => {
  const opt = document.createElement('option');
  opt.value = pb.id; opt.textContent = pb.name;
  defPlaybookSelect.appendChild(opt);
});

// Cascading selects - Offense
offPlaybookSelect.addEventListener('change', () => {
  const pb = OFFENSIVE_PLAYBOOKS.find(p => p.id === offPlaybookSelect.value);
  resetSelect(offFormationSelect, 'Choose a formation...');
  resetSelect(offSubFormationSelect, 'Choose a sub-formation...');
  resetSelect(offPlaySelect, 'Choose a play...');
  if (pb) { populateSelect(offFormationSelect, Object.keys(pb.formations)); }
  checkMatchup();
});
offFormationSelect.addEventListener('change', () => {
  const pb = OFFENSIVE_PLAYBOOKS.find(p => p.id === offPlaybookSelect.value);
  resetSelect(offSubFormationSelect, 'Choose a sub-formation...');
  resetSelect(offPlaySelect, 'Choose a play...');
  if (pb && offFormationSelect.value) {
    populateSelect(offSubFormationSelect, Object.keys(pb.formations[offFormationSelect.value]));
  }
  currentOff.formation = offFormationSelect.value;
  checkMatchup();
});
offSubFormationSelect.addEventListener('change', () => {
  const pb = OFFENSIVE_PLAYBOOKS.find(p => p.id === offPlaybookSelect.value);
  resetSelect(offPlaySelect, 'Choose a play...');
  if (pb && offFormationSelect.value && offSubFormationSelect.value) {
    const plays = pb.formations[offFormationSelect.value][offSubFormationSelect.value];
    if (plays) populateSelect(offPlaySelect, plays);
  }
  currentOff.subFormation = offSubFormationSelect.value;
  checkMatchup();
});
offPlaySelect.addEventListener('change', () => { currentOff.play = offPlaySelect.value; checkMatchup(); });

// Cascading selects - Defense
defPlaybookSelect.addEventListener('change', () => {
  const pb = DEFENSIVE_PLAYBOOKS.find(p => p.id === defPlaybookSelect.value);
  resetSelect(defFormationSelect, 'Choose a formation...');
  resetSelect(defSubFormationSelect, 'Choose a sub-formation...');
  resetSelect(defPlaySelect, 'Choose a coverage...');
  if (pb) { populateSelect(defFormationSelect, Object.keys(pb.formations)); }
  checkMatchup();
});
defFormationSelect.addEventListener('change', () => {
  const pb = DEFENSIVE_PLAYBOOKS.find(p => p.id === defPlaybookSelect.value);
  resetSelect(defSubFormationSelect, 'Choose a sub-formation...');
  resetSelect(defPlaySelect, 'Choose a coverage...');
  if (pb && defFormationSelect.value) {
    populateSelect(defSubFormationSelect, Object.keys(pb.formations[defFormationSelect.value]));
  }
  currentDef.formation = defFormationSelect.value;
  checkMatchup();
});
defSubFormationSelect.addEventListener('change', () => {
  const pb = DEFENSIVE_PLAYBOOKS.find(p => p.id === defPlaybookSelect.value);
  resetSelect(defPlaySelect, 'Choose a coverage...');
  if (pb && defFormationSelect.value && defSubFormationSelect.value) {
    const plays = pb.formations[defFormationSelect.value][defSubFormationSelect.value];
    if (plays) populateSelect(defPlaySelect, plays);
  }
  currentDef.subFormation = defSubFormationSelect.value;
  checkMatchup();
});
defPlaySelect.addEventListener('change', () => { currentDef.play = defPlaySelect.value; checkMatchup(); });

function resetSelect(sel, placeholder) {
  sel.innerHTML = `<option value="">${placeholder}</option>`;
  sel.disabled = true;
}
function populateSelect(sel, items) {
  items.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item; opt.textContent = item;
    sel.appendChild(opt);
  });
  sel.disabled = false;
}

function checkMatchup() {
  const offPlay = offPlaySelect.value;
  const defPlay = defPlaySelect.value;
  if (!offPlay && !defPlay) { matchupResults.classList.add('hidden'); return; }
  matchupResults.classList.remove('hidden');

  const offPlayData = PLAY_TYPES[offPlay] || null;
  const defCoverageData = findCoverage(defPlay);
  const offFormation = offFormationSelect.value || 'Shotgun';
  const offSubForm = offSubFormationSelect.value || 'Spread Y-Flex';
  const defFormation = defFormationSelect.value || 'Nickel';

  document.getElementById('offPlayName').textContent = offPlay || '—';
  document.getElementById('offPlayType').textContent = offPlayData ? `${offPlayData.type} / ${offPlayData.subtype}` : 'Select a play';
  document.getElementById('defPlayName').textContent = defPlay || '—';
  document.getElementById('defPlayType').textContent = defCoverageData ? `${defCoverageData.type} / ${defCoverageData.shell}` : 'Select a coverage';

  // Verdict
  const verdictPanel = document.getElementById('verdictPanel');
  const verdictText = document.getElementById('verdictText');
  const verdictDetail = document.getElementById('verdictDetail');

  if (offPlayData && defCoverageData) {
    const offWins = doesOffenseBeat(offPlay, offPlayData, defPlay, defCoverageData);
    const defWins = doesDefenseBeat(defPlay, defCoverageData, offPlay, offPlayData);
    if (offWins && !defWins) {
      verdictText.textContent = `${offPlay} BEATS ${defCoverageData.name}`;
      verdictText.className = 'text-2xl font-black mb-2 text-green-400';
      verdictDetail.textContent = 'The offense has the advantage in this matchup.';
      verdictPanel.style.borderColor = '#22c55e';
    } else if (defWins && !offWins) {
      verdictText.textContent = `${defCoverageData.name} STOPS ${offPlay}`;
      verdictText.className = 'text-2xl font-black mb-2 text-red-400';
      verdictDetail.textContent = 'The defense has the advantage in this matchup.';
      verdictPanel.style.borderColor = '#ef4444';
    } else if (offWins && defWins) {
      verdictText.textContent = 'EVEN MATCHUP';
      verdictText.className = 'text-2xl font-black mb-2 text-yellow-400';
      verdictDetail.textContent = 'Both sides have answers. Execution and user skill decide.';
      verdictPanel.style.borderColor = '#eab308';
    } else {
      verdictText.textContent = 'NEUTRAL MATCHUP';
      verdictText.className = 'text-2xl font-black mb-2 text-gray-400';
      verdictDetail.textContent = 'No strong advantage. Read and react.';
      verdictPanel.style.borderColor = '#6b7280';
    }
  } else {
    verdictText.textContent = offPlayData ? 'Select a defensive coverage' : 'Select an offensive play';
    verdictText.className = 'text-2xl font-black mb-2 text-gray-400';
    verdictDetail.textContent = '';
    verdictPanel.style.borderColor = '#252540';
  }

  // Live play animation with side toggle
  const vsContainer = document.getElementById('vsCanvasContainer');
  if (vsContainer) {
    vsContainer.innerHTML = '';
    if (offPlay && defPlay) {
      // Side toggle
      const toggleDiv = document.createElement('div');
      toggleDiv.className = 'flex justify-center mb-3';
      toggleDiv.innerHTML = `
        <div class="inline-flex rounded-lg overflow-hidden border border-dark-600" id="matchupSideToggle">
          <button class="side-btn active" data-side="offense"><i class="bi bi-lightning-fill mr-1"></i>Run Offense</button>
          <button class="side-btn" data-side="defense"><i class="bi bi-shield-fill mr-1"></i>Run Defense</button>
        </div>
      `;
      vsContainer.appendChild(toggleDiv);

      const canvas = document.createElement('canvas');
      canvas.width = 400; canvas.height = 320;
      canvas.className = 'rounded-xl mx-auto block';
      canvas.style.background = '#1a472a';
      canvas.style.maxWidth = '100%';
      vsContainer.appendChild(canvas);

      if (vsRenderer) vsRenderer.destroy();
      vsRenderer = new PlayArtRenderer(canvas, { width: 400, height: 320 });

      let matchupSide = 'offense';
      const startMatchupAnim = () => {
        vsRenderer.renderLivePlay({
          side: matchupSide,
          offFormation, offSubFormation: offSubForm, playFamily: offPlay,
          defFormation, coverageName: defPlay,
          duration: 4000
        });
      };
      startMatchupAnim();

      toggleDiv.querySelectorAll('.side-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          matchupSide = btn.dataset.side;
          toggleDiv.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          startMatchupAnim();
        });
      });
    }
  }

  // Static play art cards
  const offArtContainer = document.getElementById('offArtContainer');
  const defArtContainer = document.getElementById('defArtContainer');
  if (offArtContainer) {
    offArtContainer.innerHTML = '';
    if (offPlay) {
      const c = document.createElement('canvas');
      c.width = 220; c.height = 175;
      c.className = 'rounded-lg mx-auto block';
      c.style.background = '#1a472a';
      offArtContainer.appendChild(c);
      if (offStaticRenderer) offStaticRenderer.destroy();
      offStaticRenderer = new PlayArtRenderer(c, { width: 220, height: 175 });
      offStaticRenderer.renderPlayCard(offFormation, offSubForm, offPlay);
    }
  }
  if (defArtContainer) {
    defArtContainer.innerHTML = '';
    if (defPlay) {
      const c = document.createElement('canvas');
      c.width = 220; c.height = 175;
      c.className = 'rounded-lg mx-auto block';
      c.style.background = '#1a472a';
      defArtContainer.appendChild(c);
      if (defStaticRenderer) defStaticRenderer.destroy();
      defStaticRenderer = new PlayArtRenderer(c, { width: 220, height: 175 });
      defStaticRenderer.renderCoverageCard(defFormation, defPlay);
    }
  }

  // Analysis panels
  const offenseAnalysis = document.getElementById('offenseAnalysis');
  if (offPlayData) {
    offenseAnalysis.innerHTML = `
      <p class="text-sm text-gray-300 mb-3">${offPlayData.description}</p>
      <div class="mb-2"><span class="text-xs text-gray-500 font-semibold">BEATS:</span><div class="mt-1 flex flex-wrap">${offPlayData.beats.map(b => `<span class="tag-green">${b}</span>`).join('')}</div></div>
      <div class="mb-2"><span class="text-xs text-gray-500 font-semibold">STOPPED BY:</span><div class="mt-1 flex flex-wrap">${offPlayData.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div></div>
      <div class="p-2 bg-dark-700 rounded border border-dark-600"><p class="text-xs text-neon-cyan font-bold mb-1">Tip</p><p class="text-xs text-gray-300">${offPlayData.tips}</p></div>
    `;
  } else { offenseAnalysis.innerHTML = '<p class="text-gray-500 text-sm">Select an offensive play.</p>'; }

  const defenseAnalysis = document.getElementById('defenseAnalysis');
  if (defCoverageData) {
    defenseAnalysis.innerHTML = `
      <p class="text-sm text-gray-300 mb-3">${defCoverageData.description}</p>
      <div class="mb-2"><span class="text-xs text-gray-500 font-semibold">STOPS:</span><div class="mt-1 flex flex-wrap">${defCoverageData.stops.map(s => `<span class="tag-green">${s}</span>`).join('')}</div></div>
      <div class="mb-2"><span class="text-xs text-gray-500 font-semibold">BEATEN BY:</span><div class="mt-1 flex flex-wrap">${defCoverageData.beatenBy.map(b => `<span class="tag-red">${b}</span>`).join('')}</div></div>
      <div class="p-2 bg-dark-700 rounded border border-dark-600"><p class="text-xs text-neon-cyan font-bold mb-1">Tip</p><p class="text-xs text-gray-300">${defCoverageData.tips}</p></div>
    `;
  } else { defenseAnalysis.innerHTML = '<p class="text-gray-500 text-sm">Select a defensive coverage.</p>'; }

  // Recommendations
  const recommendations = document.getElementById('recommendations');
  if (offPlayData && defCoverageData) {
    const offAlts = getOffensiveAlternatives(defCoverageData);
    const defAlts = getDefensiveAlternatives(offPlay, offPlayData);
    recommendations.innerHTML = `
      <h3 class="text-lg font-bold text-neon-cyan mb-4"><i class="bi bi-stars mr-2"></i>Recommendations</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><h4 class="text-sm font-bold text-blue-400 uppercase mb-2">Best Plays vs ${defCoverageData.name}</h4><div class="flex flex-wrap">${offAlts.map(a => `<span class="tag-blue">${a}</span>`).join('')}</div></div>
        <div><h4 class="text-sm font-bold text-red-400 uppercase mb-2">Best Coverages vs ${offPlay}</h4><div class="flex flex-wrap">${defAlts.map(a => `<span class="tag-purple">${a}</span>`).join('')}</div></div>
      </div>
    `;
  } else {
    recommendations.innerHTML = '<p class="text-gray-500 text-sm text-center py-4">Select both sides to see recommendations.</p>';
  }
}

function findCoverage(name) {
  if (!name) return null;
  return COVERAGES.find(c => c.name.toLowerCase().includes(name.toLowerCase().split('(')[0].trim()) || name.toLowerCase().includes(c.name.split('(')[0].trim().toLowerCase())) || null;
}
function doesOffenseBeat(offName, offData, defName, defData) {
  const defLow = defData.name.toLowerCase();
  return [...offData.beats, ...offData.goodVsCoverages].some(b => defLow.includes(b.toLowerCase()) || b.toLowerCase().includes(defLow.split('(')[0].trim()));
}
function doesDefenseBeat(defName, defData, offName, offData) {
  const offLow = offName.toLowerCase();
  const defLow = defData.name.toLowerCase();
  return defData.stops.some(s => offLow.includes(s.toLowerCase()) || s.toLowerCase().includes(offLow)) ||
    offData.badVsCoverages.some(b => defLow.includes(b.toLowerCase()) || b.toLowerCase().includes(defLow.split('(')[0].trim()));
}
function getOffensiveAlternatives(defCoverage) {
  const results = [];
  const defName = defCoverage.name.toLowerCase();
  for (const [playName, playData] of Object.entries(PLAY_TYPES)) {
    if (playData.goodVsCoverages.some(g => defName.includes(g.toLowerCase()) || g.toLowerCase().includes(defName.split('(')[0].trim()))) results.push(playName);
  }
  defCoverage.beatenBy.forEach(b => { if (!results.includes(b)) results.push(b); });
  return results.slice(0, 10);
}
function getDefensiveAlternatives(offPlay, offData) {
  const results = [];
  COVERAGES.forEach(cov => {
    if (cov.stops.some(s => offPlay.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(offPlay.toLowerCase()))) results.push(cov.name);
  });
  offData.badVsCoverages.forEach(b => { if (!results.includes(b)) results.push(b); });
  return results.slice(0, 10);
}
