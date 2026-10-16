// Madden 27 - NFL Next Gen Stats-Style Analytics Engine
// Real football logic for play effectiveness, matchup grading, and situational intelligence

// ===== PLAY EFFECTIVENESS vs COVERAGE (0-100 scale) =====
// Based on real NFL route concept effectiveness against coverage shells
const MATCHUP_GRADES = {
  // Format: { playConceptKey: { coverageKey: grade } }
  // Grade: 0-30 = Bad, 31-50 = Below Average, 51-65 = Neutral, 66-80 = Good, 81-100 = Excellent

  // === PASSING CONCEPTS vs COVERAGES ===
  'verticals': {
    'Cover 0': 92, 'Cover 1': 78, 'Cover 1 Robber': 72, 'Cover 1 Hole': 70,
    'Cover 2 Zone': 55, 'Cover 2 Man': 60, 'Cover 2 Sink': 50, 'Cover 2 Lurk': 48,
    'Cover 3': 40, 'Cover 3 Sky': 42, 'Cover 3 Buzz': 38, 'Cover 3 Cloud': 44, 'Cover 3 Match': 35,
    'Cover 4': 25, 'Cover 4 Palms': 28, 'Cover 4 Drop': 15,
    'Cover 6': 45, 'Cover 9': 58, 'Tampa 2': 42, 'Prevent': 10,
    'Inverted Cover 2': 52, 'Cover 2 Press': 65
  },
  'flood': {
    'Cover 0': 45, 'Cover 1': 82, 'Cover 1 Robber': 68, 'Cover 1 Hole': 70,
    'Cover 2 Zone': 58, 'Cover 2 Man': 50, 'Cover 2 Sink': 55, 'Cover 2 Lurk': 52,
    'Cover 3': 85, 'Cover 3 Sky': 78, 'Cover 3 Buzz': 80, 'Cover 3 Cloud': 65, 'Cover 3 Match': 62,
    'Cover 4': 55, 'Cover 4 Palms': 52, 'Cover 4 Drop': 60,
    'Cover 6': 65, 'Cover 9': 48, 'Tampa 2': 72, 'Prevent': 70,
    'Inverted Cover 2': 55, 'Cover 2 Press': 50
  },
  'mesh_cross': {
    'Cover 0': 88, 'Cover 1': 85, 'Cover 1 Robber': 55, 'Cover 1 Hole': 52,
    'Cover 2 Zone': 62, 'Cover 2 Man': 82, 'Cover 2 Sink': 58, 'Cover 2 Lurk': 50,
    'Cover 3': 65, 'Cover 3 Sky': 62, 'Cover 3 Buzz': 60, 'Cover 3 Cloud': 68, 'Cover 3 Match': 55,
    'Cover 4': 72, 'Cover 4 Palms': 70, 'Cover 4 Drop': 78,
    'Cover 6': 65, 'Cover 9': 80, 'Tampa 2': 60, 'Prevent': 82,
    'Inverted Cover 2': 70, 'Cover 2 Press': 75
  },
  'levels': {
    'Cover 0': 72, 'Cover 1': 78, 'Cover 1 Robber': 65, 'Cover 1 Hole': 62,
    'Cover 2 Zone': 68, 'Cover 2 Man': 72, 'Cover 2 Sink': 60, 'Cover 2 Lurk': 55,
    'Cover 3': 75, 'Cover 3 Sky': 70, 'Cover 3 Buzz': 72, 'Cover 3 Cloud': 65, 'Cover 3 Match': 58,
    'Cover 4': 70, 'Cover 4 Palms': 65, 'Cover 4 Drop': 75,
    'Cover 6': 68, 'Cover 9': 70, 'Tampa 2': 65, 'Prevent': 78,
    'Inverted Cover 2': 62, 'Cover 2 Press': 68
  },
  'smash': {
    'Cover 0': 55, 'Cover 1': 65, 'Cover 1 Robber': 60, 'Cover 1 Hole': 58,
    'Cover 2 Zone': 82, 'Cover 2 Man': 72, 'Cover 2 Sink': 78, 'Cover 2 Lurk': 75,
    'Cover 3': 68, 'Cover 3 Sky': 65, 'Cover 3 Buzz': 62, 'Cover 3 Cloud': 58, 'Cover 3 Match': 52,
    'Cover 4': 42, 'Cover 4 Palms': 45, 'Cover 4 Drop': 48,
    'Cover 6': 70, 'Cover 9': 68, 'Tampa 2': 75, 'Prevent': 58,
    'Inverted Cover 2': 78, 'Cover 2 Press': 70
  },
  'post_seam': {
    'Cover 0': 90, 'Cover 1': 72, 'Cover 1 Robber': 68, 'Cover 1 Hole': 65,
    'Cover 2 Zone': 85, 'Cover 2 Man': 68, 'Cover 2 Sink': 72, 'Cover 2 Lurk': 65,
    'Cover 3': 55, 'Cover 3 Sky': 52, 'Cover 3 Buzz': 50, 'Cover 3 Cloud': 58, 'Cover 3 Match': 48,
    'Cover 4': 38, 'Cover 4 Palms': 42, 'Cover 4 Drop': 30,
    'Cover 6': 62, 'Cover 9': 65, 'Tampa 2': 45, 'Prevent': 20,
    'Inverted Cover 2': 75, 'Cover 2 Press': 72
  },
  'corner_out': {
    'Cover 0': 65, 'Cover 1': 82, 'Cover 1 Robber': 78, 'Cover 1 Hole': 75,
    'Cover 2 Zone': 55, 'Cover 2 Man': 72, 'Cover 2 Sink': 58, 'Cover 2 Lurk': 52,
    'Cover 3': 72, 'Cover 3 Sky': 68, 'Cover 3 Buzz': 70, 'Cover 3 Cloud': 48, 'Cover 3 Match': 55,
    'Cover 4': 42, 'Cover 4 Palms': 40, 'Cover 4 Drop': 38,
    'Cover 6': 55, 'Cover 9': 70, 'Tampa 2': 65, 'Prevent': 35,
    'Inverted Cover 2': 52, 'Cover 2 Press': 55
  },
  'quick_game': {
    'Cover 0': 40, 'Cover 1': 55, 'Cover 1 Robber': 50, 'Cover 1 Hole': 45,
    'Cover 2 Zone': 62, 'Cover 2 Man': 48, 'Cover 2 Sink': 72, 'Cover 2 Lurk': 68,
    'Cover 3': 65, 'Cover 3 Sky': 60, 'Cover 3 Buzz': 62, 'Cover 3 Cloud': 55, 'Cover 3 Match': 70,
    'Cover 4': 78, 'Cover 4 Palms': 75, 'Cover 4 Drop': 85,
    'Cover 6': 68, 'Cover 9': 45, 'Tampa 2': 72, 'Prevent': 90,
    'Inverted Cover 2': 65, 'Cover 2 Press': 35
  },
  'screen': {
    'Cover 0': 30, 'Cover 1': 45, 'Cover 1 Robber': 40, 'Cover 1 Hole': 42,
    'Cover 2 Zone': 58, 'Cover 2 Man': 68, 'Cover 2 Sink': 72, 'Cover 2 Lurk': 65,
    'Cover 3': 60, 'Cover 3 Sky': 55, 'Cover 3 Buzz': 58, 'Cover 3 Cloud': 45, 'Cover 3 Match': 62,
    'Cover 4': 72, 'Cover 4 Palms': 70, 'Cover 4 Drop': 80,
    'Cover 6': 65, 'Cover 9': 65, 'Tampa 2': 55, 'Prevent': 85,
    'Inverted Cover 2': 60, 'Cover 2 Press': 55
  },
  'pa_concept': {
    'Cover 0': 60, 'Cover 1': 75, 'Cover 1 Robber': 68, 'Cover 1 Hole': 65,
    'Cover 2 Zone': 72, 'Cover 2 Man': 78, 'Cover 2 Sink': 68, 'Cover 2 Lurk': 62,
    'Cover 3': 72, 'Cover 3 Sky': 78, 'Cover 3 Buzz': 75, 'Cover 3 Cloud': 70, 'Cover 3 Match': 65,
    'Cover 4': 55, 'Cover 4 Palms': 52, 'Cover 4 Drop': 48,
    'Cover 6': 68, 'Cover 9': 72, 'Tampa 2': 70, 'Prevent': 40,
    'Inverted Cover 2': 72, 'Cover 2 Press': 70
  },

  // === RUN CONCEPTS vs COVERAGES ===
  'inside_run': {
    'Cover 0': 35, 'Cover 1': 55, 'Cover 1 Robber': 58, 'Cover 1 Hole': 60,
    'Cover 2 Zone': 65, 'Cover 2 Man': 62, 'Cover 2 Sink': 68, 'Cover 2 Lurk': 70,
    'Cover 3': 62, 'Cover 3 Sky': 55, 'Cover 3 Buzz': 60, 'Cover 3 Cloud': 65, 'Cover 3 Match': 58,
    'Cover 4': 75, 'Cover 4 Palms': 78, 'Cover 4 Drop': 82,
    'Cover 6': 70, 'Cover 9': 60, 'Tampa 2': 58, 'Prevent': 90,
    'Inverted Cover 2': 55, 'Cover 2 Press': 62
  },
  'outside_run': {
    'Cover 0': 42, 'Cover 1': 60, 'Cover 1 Robber': 55, 'Cover 1 Hole': 58,
    'Cover 2 Zone': 55, 'Cover 2 Man': 58, 'Cover 2 Sink': 62, 'Cover 2 Lurk': 65,
    'Cover 3': 55, 'Cover 3 Sky': 42, 'Cover 3 Buzz': 52, 'Cover 3 Cloud': 60, 'Cover 3 Match': 55,
    'Cover 4': 72, 'Cover 4 Palms': 75, 'Cover 4 Drop': 80,
    'Cover 6': 65, 'Cover 9': 55, 'Tampa 2': 52, 'Prevent': 88,
    'Inverted Cover 2': 48, 'Cover 2 Press': 55
  },
  'option_run': {
    'Cover 0': 50, 'Cover 1': 62, 'Cover 1 Robber': 60, 'Cover 1 Hole': 58,
    'Cover 2 Zone': 68, 'Cover 2 Man': 65, 'Cover 2 Sink': 70, 'Cover 2 Lurk': 72,
    'Cover 3': 65, 'Cover 3 Sky': 55, 'Cover 3 Buzz': 60, 'Cover 3 Cloud': 62, 'Cover 3 Match': 58,
    'Cover 4': 72, 'Cover 4 Palms': 70, 'Cover 4 Drop': 78,
    'Cover 6': 68, 'Cover 9': 62, 'Tampa 2': 60, 'Prevent': 85,
    'Inverted Cover 2': 58, 'Cover 2 Press': 62
  },
  'draw': {
    'Cover 0': 55, 'Cover 1': 62, 'Cover 1 Robber': 58, 'Cover 1 Hole': 55,
    'Cover 2 Zone': 65, 'Cover 2 Man': 70, 'Cover 2 Sink': 72, 'Cover 2 Lurk': 68,
    'Cover 3': 62, 'Cover 3 Sky': 58, 'Cover 3 Buzz': 60, 'Cover 3 Cloud': 65, 'Cover 3 Match': 55,
    'Cover 4': 68, 'Cover 4 Palms': 65, 'Cover 4 Drop': 72,
    'Cover 6': 65, 'Cover 9': 68, 'Tampa 2': 60, 'Prevent': 78,
    'Inverted Cover 2': 62, 'Cover 2 Press': 62
  }
};

// ===== MAP PLAY NAMES TO CONCEPT KEYS =====
function getConceptKey(playName) {
  if (!playName) return null;
  const lower = playName.toLowerCase();

  // Screen plays
  if (lower.includes('screen') || lower.includes('slip screen') || lower.includes('tunnel')) return 'screen';

  // PA / Play Action
  if (lower.startsWith('pa ') || lower.includes('play action') || lower.includes('fake')) return 'pa_concept';

  // Run plays
  if (lower.includes('inside zone') || lower.includes('hb dive') || lower.includes('iso') ||
      lower.includes('trap') || lower.includes('wham') || lower.includes('duo') ||
      lower.includes('fb dive') || lower.includes('sneak') || lower.includes('wedge') ||
      lower.includes('power') || lower.includes('counter') || lower.includes('blast') ||
      lower.includes('buck') || lower.includes('lead')) return 'inside_run';

  if (lower.includes('outside zone') || lower.includes('stretch') || lower.includes('toss') ||
      lower.includes('sweep') || lower.includes('jet') || lower.includes('pitch') ||
      lower.includes('end around') || lower.includes('reverse')) return 'outside_run';

  if (lower.includes('option') || lower.includes('read opt') || lower.includes('veer') ||
      lower.includes('wildcat')) return 'option_run';

  if (lower.includes('draw') || lower.includes('hb draw') || lower.includes('qb draw')) return 'draw';

  // Vertical concepts
  if (lower.includes('vertical') || lower.includes('streak') || lower.includes('go route') ||
      lower.includes('four vert') || lower.includes('4 vert')) return 'verticals';

  // Mesh / Crossing concepts
  if (lower.includes('mesh') || lower.includes('cross') || lower.includes('drag') ||
      lower.includes('shallow') || lower.includes('over')) return 'mesh_cross';

  // Flood concepts
  if (lower.includes('flood') || lower.includes('sail') || lower.includes('y sail')) return 'flood';

  // Levels concepts
  if (lower.includes('level') || lower.includes('spacing') || lower.includes('drive') ||
      lower.includes('bench')) return 'levels';

  // Post/Seam concepts
  if (lower.includes('post') || lower.includes('seam') || lower.includes('deep in') ||
      lower.includes('deep dig') || lower.includes('skinny')) return 'post_seam';

  // Smash concepts
  if (lower.includes('smash') || lower.includes('hitch corner') || lower.includes('curl corner')) return 'smash';

  // Corner/Out concepts
  if (lower.includes('corner') || /\bout\b/.test(lower) || lower.includes('comeback') ||
      lower.includes('fade') || lower.includes('flag')) return 'corner_out';

  // Quick game
  if (lower.includes('slant') || lower.includes('quick') || lower.includes('stick') ||
      lower.includes('hitch') || lower.includes('curl') || lower.includes('spot') ||
      lower.includes('flat') || lower.includes('bubble') || lower.includes('rpo') ||
      lower.includes('alert')) return 'quick_game';

  return 'quick_game'; // default
}

// ===== SITUATIONAL PLAY GRADES =====
// Down & Distance effectiveness modifiers
const SITUATION_MODIFIERS = {
  '1st_and_10': { inside_run: 1.15, outside_run: 1.1, pa_concept: 1.2, verticals: 0.9, quick_game: 0.95, screen: 0.85, mesh_cross: 1.0, levels: 1.0, flood: 0.95, smash: 0.9, post_seam: 0.95, corner_out: 0.9, option_run: 1.1, draw: 0.95 },
  '2nd_and_short': { inside_run: 1.2, outside_run: 1.15, pa_concept: 1.15, verticals: 0.85, quick_game: 1.0, screen: 0.8, mesh_cross: 0.95, levels: 0.95, flood: 0.9, smash: 0.85, post_seam: 0.9, corner_out: 0.85, option_run: 1.15, draw: 0.9 },
  '2nd_and_long': { inside_run: 0.8, outside_run: 0.85, pa_concept: 1.1, verticals: 1.1, quick_game: 1.0, screen: 1.1, mesh_cross: 1.1, levels: 1.15, flood: 1.1, smash: 1.05, post_seam: 1.1, corner_out: 1.05, option_run: 0.85, draw: 1.15 },
  '3rd_and_short': { inside_run: 1.3, outside_run: 1.1, pa_concept: 1.25, verticals: 0.7, quick_game: 1.15, screen: 0.6, mesh_cross: 1.0, levels: 0.9, flood: 0.85, smash: 0.8, post_seam: 0.8, corner_out: 0.75, option_run: 1.2, draw: 1.1 },
  '3rd_and_long': { inside_run: 0.4, outside_run: 0.45, pa_concept: 0.9, verticals: 1.15, quick_game: 0.85, screen: 1.2, mesh_cross: 1.2, levels: 1.2, flood: 1.15, smash: 1.1, post_seam: 1.15, corner_out: 1.1, option_run: 0.5, draw: 1.3 },
  '4th_and_short': { inside_run: 1.3, outside_run: 1.05, pa_concept: 1.3, verticals: 0.6, quick_game: 1.2, screen: 0.5, mesh_cross: 0.95, levels: 0.85, flood: 0.8, smash: 0.75, post_seam: 0.7, corner_out: 0.7, option_run: 1.25, draw: 0.8 },
  'red_zone': { inside_run: 1.2, outside_run: 1.0, pa_concept: 1.3, verticals: 0.6, quick_game: 1.1, screen: 0.5, mesh_cross: 1.0, levels: 0.9, flood: 1.15, smash: 1.1, post_seam: 0.85, corner_out: 1.2, option_run: 1.15, draw: 0.7 },
  'goal_line': { inside_run: 1.4, outside_run: 0.9, pa_concept: 1.35, verticals: 0.3, quick_game: 1.1, screen: 0.3, mesh_cross: 0.8, levels: 0.6, flood: 0.7, smash: 0.65, post_seam: 0.5, corner_out: 1.1, option_run: 1.3, draw: 0.5 },
  'two_minute': { inside_run: 0.5, outside_run: 0.6, pa_concept: 0.8, verticals: 1.15, quick_game: 1.2, screen: 1.1, mesh_cross: 1.1, levels: 1.1, flood: 1.1, smash: 1.05, post_seam: 1.1, corner_out: 1.15, option_run: 0.5, draw: 0.7 }
};

// ===== ADJUSTMENT MODIFIERS =====
// How pre-snap adjustments shift matchup grades per concept
const ADJUSTMENT_MODIFIERS = {
  'press': { quick_game: -8, verticals: 5, screen: -5, mesh_cross: -3 },
  'dl_pinch': { inside_run: -10, outside_run: 8, draw: -5 },
  'dl_spread': { inside_run: 5, outside_run: -8, option_run: -5 },
  'lb_blitz': { quick_game: -10, inside_run: -8, screen: 15, pa_concept: -12 },
  'shade_outside': { corner_out: -8, quick_game: 3, post_seam: 5, flood: -5 },
  'shade_inside': { post_seam: -5, corner_out: 5, mesh_cross: -5, levels: -3 },
  'dl_contain': { outside_run: -10, option_run: -8, qb_scramble: -10 },
  'lb_spy': { option_run: -8, draw: -8, screen: -5 },
  'guess_run': { inside_run: -12, outside_run: -12, pa_concept: 15, screen: 10 },
  'guess_pass': { inside_run: 10, outside_run: 10, pa_concept: -10, verticals: -8 },
  'off': { quick_game: 5, screen: 5, verticals: -3 },
  'max_protect': { verticals: 8, pa_concept: 5, quick_game: -5, screen: -8 },
  'id_mike': { inside_run: -3, pa_concept: -5, draw: -5 },
  'aggressive': { inside_run: -5, outside_run: -5, quick_game: -5, verticals: 10, screen: 8 },
  'conservative': { inside_run: 3, outside_run: 3, quick_game: 3, verticals: -5, screen: -3 },
  'hurry_up': { pa_concept: -8, inside_run: 5, quick_game: -5 },
  'no_huddle': { pa_concept: -5, quick_game: -3 },
  'slide_right': { outside_run: -5, inside_run: 3 },
  'slide_left': { outside_run: -5, inside_run: 3 },
  'motion_snap': { inside_run: -3, outside_run: -5, mesh_cross: -3 },
  'motion_right': { outside_run: -3, flood: -3 }
};

// ===== PERSONNEL EFFECTIVENESS =====
// How personnel groupings affect play concept grades
const PERSONNEL_BONUS = {
  '10': { quick_game: 8, mesh_cross: 10, levels: 8, verticals: 10, screen: 5, inside_run: -15, outside_run: -10, pa_concept: -5 },
  '11': { quick_game: 3, mesh_cross: 5, levels: 3, verticals: 5, inside_run: 0, outside_run: 0, pa_concept: 5 },
  '12': { inside_run: 8, outside_run: 5, pa_concept: 12, quick_game: -3, verticals: -5, mesh_cross: 0, levels: 0 },
  '13': { inside_run: 15, outside_run: 10, pa_concept: 10, quick_game: -10, verticals: -15, mesh_cross: -8, levels: -8 },
  '21': { inside_run: 12, outside_run: 8, pa_concept: 10, quick_game: -5, verticals: -8, mesh_cross: -3, draw: -5 },
  '22': { inside_run: 18, outside_run: 12, pa_concept: 8, quick_game: -15, verticals: -18, mesh_cross: -12, levels: -12 }
};

// ===== EXPECTED POINTS ADDED (EPA) ESTIMATION =====
// Simplified EPA model based on down, distance, field position
function estimateEPA(down, distance, yardLine, isFirstDown) {
  // Base EP by field position (simplified)
  const baseEP = getExpectedPoints(yardLine);
  const newYardLine = Math.max(0, yardLine - distance);
  const newEP = isFirstDown ? getExpectedPoints(newYardLine) : baseEP * 0.7;
  return newEP - baseEP;
}

function getExpectedPoints(yardLine) {
  // Simplified expected points by yard line (own territory = high number)
  if (yardLine <= 0) return 7.0; // Touchdown
  if (yardLine <= 5) return 5.5;
  if (yardLine <= 10) return 4.5;
  if (yardLine <= 20) return 3.2;
  if (yardLine <= 30) return 2.2;
  if (yardLine <= 40) return 1.5;
  if (yardLine <= 50) return 0.8;
  if (yardLine <= 60) return 0.3;
  if (yardLine <= 70) return -0.1;
  if (yardLine <= 80) return -0.5;
  if (yardLine <= 90) return -1.0;
  return -1.5;
}

// ===== COVERAGE NAME NORMALIZER =====
// Maps display names like "Cover 4 (Quarters)" or "Cover 4 Quarters - Nickel"
// to MATCHUP_GRADES keys like "Cover 4"
function normalizeCoverageName(coverageName) {
  if (!coverageName) return '';
  // Strip formation suffix (e.g., "Cover 3 - Nickel" → "Cover 3")
  let name = coverageName.split(' - ')[0].trim();
  // Strip parenthetical (e.g., "Cover 4 (Quarters)" → "Cover 4")
  name = name.replace(/\s*\([^)]*\)/, '').trim();
  // Try exact match first
  const sampleGrades = MATCHUP_GRADES['verticals'];
  if (sampleGrades && sampleGrades[name] !== undefined) return name;
  // Try fuzzy: find the longest matching key
  if (sampleGrades) {
    const keys = Object.keys(sampleGrades);
    // Exact after normalization
    const exact = keys.find(k => k.toLowerCase() === name.toLowerCase());
    if (exact) return exact;
    // Coverage name starts with key (e.g. "Cover 2 Man Under" starts with "Cover 2 Man")
    const startsWith = keys.filter(k => name.toLowerCase().startsWith(k.toLowerCase()))
      .sort((a, b) => b.length - a.length);
    if (startsWith.length) return startsWith[0];
    // Key starts with coverage name (e.g. "Cover 4" matches "Cover 4 Palms")
    const keyStarts = keys.filter(k => k.toLowerCase().startsWith(name.toLowerCase()))
      .sort((a, b) => a.length - b.length);
    if (keyStarts.length) return keyStarts[0];
  }
  return name;
}

// ===== CORE GRADE COMPUTATION (single source of truth) =====
// Computes grade for a known concept key against a coverage, with optional modifiers
function computeGradeForConcept(conceptKey, coverageName, options = {}) {
  const conceptGrades = MATCHUP_GRADES[conceptKey];
  if (!conceptGrades) return { grade: 50, label: 'Unknown', color: '#9ca3af', conceptKey };

  const normalizedCoverage = normalizeCoverageName(coverageName);
  let grade = conceptGrades[normalizedCoverage] || 50;

  // Apply situation modifier
  if (options.situation && SITUATION_MODIFIERS[options.situation]) {
    const mod = SITUATION_MODIFIERS[options.situation][conceptKey] || 1.0;
    grade = Math.round(grade * mod);
  }

  // Apply personnel bonus
  if (options.personnel && PERSONNEL_BONUS[options.personnel]) {
    const bonus = PERSONNEL_BONUS[options.personnel][conceptKey] || 0;
    grade = Math.round(grade + bonus);
  }

  // Apply adjustment modifiers
  let adjustmentTotal = 0;
  if (options.adjustments && Array.isArray(options.adjustments)) {
    for (const adj of options.adjustments) {
      const mod = ADJUSTMENT_MODIFIERS[adj];
      if (mod && mod[conceptKey]) {
        adjustmentTotal += mod[conceptKey];
      }
    }
    grade += adjustmentTotal;
  }

  // Clamp
  grade = Math.max(0, Math.min(100, grade));

  return {
    grade,
    label: getGradeLabel(grade),
    color: getGradeColor(grade),
    conceptKey,
    breakdown: {
      base: conceptGrades[normalizedCoverage] || 50,
      situationMod: options.situation ? (SITUATION_MODIFIERS[options.situation]?.[conceptKey] || 1.0) : 1.0,
      personnelBonus: options.personnel ? (PERSONNEL_BONUS[options.personnel]?.[conceptKey] || 0) : 0,
      adjustmentMod: adjustmentTotal
    }
  };
}

// ===== MATCHUP GRADE CALCULATOR =====
// Public API: maps play name -> concept key, then delegates to computeGradeForConcept
function calculateMatchupGrade(playName, coverageName, options = {}) {
  const conceptKey = getConceptKey(playName);
  if (!conceptKey) return { grade: 50, label: 'Unknown', color: '#9ca3af' };

  return computeGradeForConcept(conceptKey, coverageName, options);
}

function getGradeLabel(grade) {
  if (grade >= 85) return 'Dominant';
  if (grade >= 75) return 'Strong';
  if (grade >= 65) return 'Favorable';
  if (grade >= 55) return 'Even';
  if (grade >= 45) return 'Slight Edge Defense';
  if (grade >= 35) return 'Unfavorable';
  if (grade >= 25) return 'Poor';
  return 'Terrible';
}

function getGradeColor(grade) {
  if (grade >= 80) return '#22c55e';
  if (grade >= 65) return '#84cc16';
  if (grade >= 50) return '#eab308';
  if (grade >= 35) return '#f97316';
  return '#ef4444';
}

// ===== PLAY RECOMMENDATION ENGINE =====
// Given a coverage, recommend best play concepts
// Delegates to computeGradeForConcept to ensure identical scoring logic with calculateMatchupGrade
function recommendPlays(coverageName, options = {}) {
  const results = [];

  for (const conceptKey of Object.keys(MATCHUP_GRADES)) {
    const gradeResult = computeGradeForConcept(conceptKey, coverageName, options);

    results.push({
      conceptKey,
      conceptLabel: CONCEPT_LABELS[conceptKey] || conceptKey,
      grade: gradeResult.grade,
      label: gradeResult.label,
      color: gradeResult.color
    });
  }

  return results.sort((a, b) => b.grade - a.grade);
}

// Given a play, recommend best coverages to stop it
function recommendCoverages(playName) {
  const conceptKey = getConceptKey(playName);
  if (!conceptKey || !MATCHUP_GRADES[conceptKey]) return [];

  const grades = MATCHUP_GRADES[conceptKey];
  const results = Object.entries(grades).map(([cov, grade]) => ({
    coverage: cov,
    offenseGrade: grade,
    defenseGrade: 100 - grade,
    label: getGradeLabel(100 - grade),
    color: getGradeColor(100 - grade)
  }));

  return results.sort((a, b) => b.defenseGrade - a.defenseGrade);
}

const CONCEPT_LABELS = {
  verticals: 'Verticals / Deep Shots',
  flood: 'Flood Concepts',
  mesh_cross: 'Mesh / Crossing Routes',
  levels: 'Levels / Spacing',
  smash: 'Smash / High-Low',
  post_seam: 'Post / Seam Routes',
  corner_out: 'Corner / Out Routes',
  quick_game: 'Quick Game / RPOs',
  screen: 'Screens',
  pa_concept: 'Play Action',
  inside_run: 'Inside Run',
  outside_run: 'Outside Run',
  option_run: 'Option / Read',
  draw: 'Draw Plays'
};

// ===== WIN PROBABILITY MODEL =====
// Simplified WP based on score differential, time remaining, possession
function estimateWinProbability(scoreDiff, timeRemainingSeconds, hasBall, yardLine) {
  // Base WP from score differential
  let wp = 0.5 + (scoreDiff * 0.035);

  // Time factor — score matters more as time runs out
  const gameProgress = 1 - (timeRemainingSeconds / 3600);
  const timeFactor = 1 + (gameProgress * 1.5);
  wp = 0.5 + (wp - 0.5) * timeFactor;

  // Possession bonus
  if (hasBall) wp += 0.03;

  // Field position bonus
  if (hasBall && yardLine < 30) wp += 0.02;
  if (hasBall && yardLine < 10) wp += 0.03;

  return Math.max(0.01, Math.min(0.99, wp));
}

// ===== FORMATION TENDENCY ANALYSIS =====
// Analyze a playbook's tendencies
function analyzePlaybookTendencies(playbook) {
  let totalPlays = 0;
  let runPlays = 0;
  let passingPlays = 0;
  const formationCounts = {};
  const playCounts = {};

  if (!playbook || !playbook.formations) return null;

  for (const [formation, subFormations] of Object.entries(playbook.formations)) {
    let formCount = 0;
    for (const [sub, plays] of Object.entries(subFormations)) {
      formCount += plays.length;
      totalPlays += plays.length;
      for (const play of plays) {
        playCounts[play] = (playCounts[play] || 0) + 1;
        const concept = getConceptKey(play);
        if (['inside_run', 'outside_run', 'option_run'].includes(concept)) {
          runPlays++;
        } else {
          passingPlays++;
        }
      }
    }
    formationCounts[formation] = formCount;
  }

  const runPassRatio = totalPlays > 0 ? (runPlays / totalPlays * 100).toFixed(1) : '0.0';
  const topPlays = Object.entries(playCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count, pct: (count / totalPlays * 100).toFixed(1) }));

  const topFormations = Object.entries(formationCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count, pct: (count / totalPlays * 100).toFixed(1) }));

  return {
    totalPlays,
    runPlays,
    passingPlays,
    runPassRatio: `${runPassRatio}% run`,
    passRunRatio: `${(100 - parseFloat(runPassRatio)).toFixed(1)}% pass`,
    topPlays,
    topFormations,
    style: parseFloat(runPassRatio) > 55 ? 'Run Heavy' :
           parseFloat(runPassRatio) > 45 ? 'Balanced' :
           parseFloat(runPassRatio) > 35 ? 'Pass Heavy' : 'Air Raid'
  };
}

// ===== COVERAGE SHELL DETECTION =====
// Detect likely coverage from defensive formation and play name
function detectCoverageShell(coverageName) {
  if (!coverageName) return null;
  const lower = coverageName.toLowerCase();

  if (lower.includes('cover 0')) return { shell: '0 Deep', safeties: 0, type: 'Man', blitz: true };
  if (lower.includes('cover 1')) return { shell: '1 Deep', safeties: 1, type: 'Man', blitz: false };
  if (lower.includes('tampa 2')) return { shell: '2 Deep + MLB', safeties: 2, type: 'Zone', blitz: false };
  if (lower.includes('cover 2')) return { shell: '2 Deep', safeties: 2, type: lower.includes('man') ? 'Man' : 'Zone', blitz: false };
  if (lower.includes('cover 3')) return { shell: '3 Deep', safeties: 1, type: lower.includes('match') ? 'Zone Match' : 'Zone', blitz: false };
  if (lower.includes('cover 4')) return { shell: '4 Deep', safeties: 2, type: lower.includes('palms') ? 'Zone Match' : 'Zone', blitz: false };
  if (lower.includes('cover 6')) return { shell: 'Mixed', safeties: 2, type: 'Zone', blitz: false };
  if (lower.includes('cover 9')) return { shell: '2 Deep', safeties: 2, type: 'Man', blitz: false };
  if (lower.includes('prevent')) return { shell: 'Deep', safeties: 2, type: 'Zone', blitz: false };
  if (lower.includes('blitz') || lower.includes('pressure')) return { shell: 'Mixed', safeties: 0, type: 'Blitz', blitz: true };

  return { shell: 'Unknown', safeties: 2, type: 'Zone', blitz: false };
}

export {
  calculateMatchupGrade,
  recommendPlays,
  recommendCoverages,
  getConceptKey,
  estimateEPA,
  estimateWinProbability,
  analyzePlaybookTendencies,
  detectCoverageShell,
  getGradeLabel,
  getGradeColor,
  MATCHUP_GRADES,
  SITUATION_MODIFIERS,
  CONCEPT_LABELS,
  PERSONNEL_BONUS,
  ADJUSTMENT_MODIFIERS
};
