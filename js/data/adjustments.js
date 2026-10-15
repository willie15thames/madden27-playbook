// Madden 27 Pre-Snap Adjustments, Hot Routes, and Macro System
// Covers all offensive and defensive adjustments available in the game

// ===== HOT ROUTES (Offensive) =====
export const HOT_ROUTES = [
  { id: 'streak', name: 'Streak', icon: '↑', description: 'Run straight upfield as fast as possible', type: 'deep' },
  { id: 'fade', name: 'Fade', icon: '↗', description: 'Run a fade route to the sideline corner', type: 'deep' },
  { id: 'out', name: 'Out', icon: '→', description: 'Run an out route toward the sideline', type: 'intermediate' },
  { id: 'in', name: 'In / Dig', icon: '←', description: 'Run an in route across the middle', type: 'intermediate' },
  { id: 'curl', name: 'Curl', icon: '↩', description: 'Run upfield then curl back toward QB', type: 'intermediate' },
  { id: 'comeback', name: 'Comeback', icon: '↙', description: 'Run deep then come back to the sideline', type: 'intermediate' },
  { id: 'drag', name: 'Drag', icon: '⟶', description: 'Run a shallow drag route across the formation', type: 'short' },
  { id: 'slant', name: 'Slant', icon: '⤡', description: 'Quick slant across the middle at 45°', type: 'short' },
  { id: 'flat', name: 'Flat', icon: '↘', description: 'Run to the flat area near the sideline', type: 'short' },
  { id: 'hitch', name: 'Hitch', icon: '⤓', description: 'Quick 5-yard hitch and turn back', type: 'short' },
  { id: 'corner', name: 'Corner', icon: '↗', description: 'Run a corner route to the deep sideline', type: 'deep' },
  { id: 'post', name: 'Post', icon: '↖', description: 'Run a post route to the deep middle', type: 'deep' },
  { id: 'wheel', name: 'Wheel', icon: '⟳', description: 'Swing out to the flat then turn upfield', type: 'deep' },
  { id: 'block', name: 'Block', icon: '█', description: 'Stay in and pass protect', type: 'protection' },
  { id: 'delay', name: 'Delay', icon: '⏳', description: 'Wait 1-2 seconds then run the route', type: 'modifier' },
  { id: 'motion', name: 'Motion', icon: '⇄', description: 'Put this player in pre-snap motion', type: 'modifier' }
];

// ===== OFFENSIVE ADJUSTMENTS =====
export const OFFENSIVE_ADJUSTMENTS = {
  lineProtection: {
    name: 'Line Protection',
    category: 'Protection',
    options: [
      { id: 'slide_left', name: 'Slide Left', description: 'OL slides protection to the left', effect: 'Better pass pro vs right edge rush, weaker on left' },
      { id: 'slide_right', name: 'Slide Right', description: 'OL slides protection to the right', effect: 'Better pass pro vs left edge rush, weaker on right' },
      { id: 'pinch', name: 'Pinch', description: 'OL pinches inside to protect A and B gaps', effect: 'Blocks interior pressure but exposes the edges' },
      { id: 'aggressive', name: 'Aggressive Block', description: 'OL blocks aggressively, engaging downfield faster', effect: 'Better run blocking but worse pass protection' },
      { id: 'max_protect', name: 'Max Protect', description: 'RB and TE stay in to block, fewer receivers out', effect: '7-8 blockers but only 2-3 routes. Use vs all-out blitz' },
      { id: 'id_mike', name: 'ID the Mike', description: 'Identify the Mike LB to set blocking assignments', effect: 'OL protection keys off the identified defender' }
    ]
  },
  rbAssignment: {
    name: 'RB Assignment',
    category: 'Protection',
    options: [
      { id: 'rb_block', name: 'Block', description: 'RB stays in to pass protect', effect: 'Extra blocker but lose a receiving option' },
      { id: 'rb_route', name: 'Run Route', description: 'RB runs their assigned route', effect: 'Default behavior — RB enters the route tree' },
      { id: 'rb_delay', name: 'Delay Route', description: 'RB checks for blitz then releases into route', effect: 'Blocks first, then runs route late' }
    ]
  },
  motion: {
    name: 'Pre-Snap Motion',
    category: 'Formation',
    options: [
      { id: 'motion_left', name: 'Motion Left', description: 'Send player in motion to the left', effect: 'Reveals man vs zone (man defender follows)' },
      { id: 'motion_right', name: 'Motion Right', description: 'Send player in motion to the right', effect: 'Reveals man vs zone (man defender follows)' },
      { id: 'motion_snap', name: 'Motion + Snap', description: 'Snap the ball while player is in motion', effect: 'Creates jet/orbit motion with snap timing' }
    ]
  },
  audibles: {
    name: 'Audibles',
    category: 'Play Change',
    options: [
      { id: 'flip_play', name: 'Flip Play', description: 'Mirror the entire play to the opposite side', effect: 'All routes and assignments flip left-to-right' },
      { id: 'audible_1', name: 'Audible 1', description: 'Switch to audible play slot 1', effect: 'Changes to pre-set audible play' },
      { id: 'audible_2', name: 'Audible 2', description: 'Switch to audible play slot 2', effect: 'Changes to pre-set audible play' },
      { id: 'audible_3', name: 'Audible 3', description: 'Switch to audible play slot 3', effect: 'Changes to pre-set audible play' },
      { id: 'audible_4', name: 'Audible 4', description: 'Switch to audible play slot 4', effect: 'Changes to pre-set audible play' },
      { id: 'no_huddle', name: 'No Huddle', description: 'Quick snap from the previous formation', effect: 'Prevents defense from substituting' }
    ]
  },
  tempo: {
    name: 'Tempo',
    category: 'Play Change',
    options: [
      { id: 'hurry_up', name: 'Hurry Up', description: 'Sprint to the line and quick snap', effect: 'Prevents defensive adjustments, burns clock' },
      { id: 'chew_clock', name: 'Chew Clock', description: 'Run the play clock down before snapping', effect: 'Burns maximum clock time' },
      { id: 'hard_count', name: 'Hard Count', description: 'QB uses hard count to try to draw offsides', effect: 'Can draw a free play penalty' }
    ]
  }
};

// ===== DEFENSIVE ADJUSTMENTS =====
export const DEFENSIVE_ADJUSTMENTS = {
  dLine: {
    name: 'D-Line Adjustments',
    category: 'Front',
    options: [
      { id: 'dl_pinch', name: 'Pinch', description: 'DL pinches inside to clog interior gaps', effect: 'Stops inside runs but weakens edge contain' },
      { id: 'dl_spread', name: 'Spread', description: 'DL spreads wide to cover more gaps', effect: 'Better edge contain but weaker interior' },
      { id: 'dl_crash_left', name: 'Crash Left', description: 'DL crashes toward the left at snap', effect: 'Aggressive pursuit left, vulnerable right' },
      { id: 'dl_crash_right', name: 'Crash Right', description: 'DL crashes toward the right at snap', effect: 'Aggressive pursuit right, vulnerable left' },
      { id: 'dl_default', name: 'Default', description: 'Reset to default alignment', effect: 'Standard gap assignments' },
      { id: 'dl_contain', name: 'Contain', description: 'DEs set the edge and contain the QB/RB', effect: 'Prevents scrambles and outside runs' },
      { id: 'dl_qb_contain', name: 'QB Contain', description: 'DEs specifically spy the QB', effect: 'Counters mobile QBs and read options' }
    ]
  },
  linebackers: {
    name: 'Linebacker Adjustments',
    category: 'Front',
    options: [
      { id: 'lb_spread', name: 'Spread LBs', description: 'LBs widen their alignment', effect: 'Better in coverage, weaker vs inside runs' },
      { id: 'lb_pinch', name: 'Pinch LBs', description: 'LBs tighten their alignment inside', effect: 'Better vs inside runs, weaker in coverage' },
      { id: 'lb_blitz', name: 'LB Blitz', description: 'Send a LB on a blitz', effect: 'Extra rusher but exposes a coverage gap' },
      { id: 'lb_zone', name: 'LB Drop to Zone', description: 'Drop a blitzing LB into zone coverage', effect: 'Extra coverage but less pass rush' },
      { id: 'lb_man', name: 'LB Man Up', description: 'Assign a LB to man coverage on a specific player', effect: 'Locks LB onto a receiver' },
      { id: 'lb_spy', name: 'QB Spy', description: 'LB spies the QB instead of rushing or dropping', effect: 'Contains scrambling QBs' }
    ]
  },
  secondary: {
    name: 'Secondary Adjustments',
    category: 'Coverage',
    options: [
      { id: 'press', name: 'Press Coverage', description: 'DBs press at the line of scrimmage', effect: 'Disrupts routes but vulnerable to speed/double moves' },
      { id: 'off', name: 'Off Coverage', description: 'DBs back off the LOS giving cushion', effect: 'Prevents deep plays but gives up short throws' },
      { id: 'shade_outside', name: 'Shade Outside', description: 'DBs shade to the outside hip', effect: 'Takes away out routes and sideline throws' },
      { id: 'shade_inside', name: 'Shade Inside', description: 'DBs shade to the inside hip', effect: 'Takes away slants and middle of field' },
      { id: 'shade_over', name: 'Shade Over Top', description: 'DBs play over the top of receivers', effect: 'Takes away deep but gives up underneath' },
      { id: 'shade_under', name: 'Shade Underneath', description: 'DBs play underneath receivers', effect: 'Takes away short but gives up deep' },
      { id: 'man_align', name: 'Man Align', description: 'DBs align head-up on their man assignment', effect: 'Shows man coverage pre-snap' },
      { id: 'zone_match', name: 'Match Coverage', description: 'Zones convert to man when receivers enter', effect: 'Hybrid zone-man that matches routes' }
    ]
  },
  safeties: {
    name: 'Safety Adjustments',
    category: 'Coverage',
    options: [
      { id: 'safety_blitz', name: 'Safety Blitz', description: 'Send a safety on a blitz', effect: 'Extra pressure but no deep help' },
      { id: 'safety_deep', name: 'Play Deep', description: 'Safety drops deeper than normal', effect: 'Prevents big plays over the top' },
      { id: 'safety_robber', name: 'Robber', description: 'Safety cheats toward LOS to jump routes', effect: 'Great vs intermediate routes, risky vs deep' },
      { id: 'safety_cloud', name: 'Cloud Flat', description: 'Safety drops to cloud flat coverage', effect: 'Covers flat but leaves deep open' }
    ]
  },
  teamShift: {
    name: 'Team Shifts',
    category: 'Alignment',
    options: [
      { id: 'shift_left', name: 'Shift Left', description: 'Shift entire defense to the left', effect: 'Overloads left side, weakens right' },
      { id: 'shift_right', name: 'Shift Right', description: 'Shift entire defense to the right', effect: 'Overloads right side, weakens left' },
      { id: 'base_align', name: 'Base Align', description: 'Reset to base alignment', effect: 'Default positions' },
      { id: 'show_blitz', name: 'Show Blitz', description: 'LBs and safeties creep to LOS', effect: 'Disguises coverage, intimidates offense' },
      { id: 'guess_pass', name: 'Guess Pass', description: 'Defenders play pass-first', effect: 'Better coverage but worse run defense' },
      { id: 'guess_run', name: 'Guess Run', description: 'Defenders play run-first', effect: 'Better run defense but worse coverage' }
    ]
  }
};

// ===== MACROS (Pre-Set Adjustment Combos) =====
export const MACROS = [
  {
    id: 'anti_run',
    name: 'Stuff the Run',
    side: 'defense',
    description: 'Set up to stop the run: pinch DL, pinch LBs, guess run',
    adjustments: ['dl_pinch', 'lb_pinch', 'guess_run'],
    counters: ['Outside runs', 'Play action', 'PA Boot', 'Quick passes'],
    bestAgainst: ['Inside Zone', 'HB Dive', 'Counter', 'Power O', 'QB Sneak', 'Duo', 'Trap']
  },
  {
    id: 'anti_pass',
    name: 'Pass Rush Heavy',
    side: 'defense',
    description: 'Max pressure: spread DL, LB blitz, guess pass, press',
    adjustments: ['dl_spread', 'lb_blitz', 'guess_pass', 'press'],
    counters: ['Screens', 'Quick slants', 'Draws', 'HB Screen'],
    bestAgainst: ['Four Verticals', 'Deep Post', 'PA Crossers', 'Deep Crossers', 'Levels']
  },
  {
    id: 'cover2_shell',
    name: 'Cover 2 Shell',
    side: 'defense',
    description: 'Two deep safeties with underneath zones: shade over top, off coverage',
    adjustments: ['shade_over', 'off', 'dl_contain'],
    counters: ['Seam routes', 'Deep post', 'Skinny post'],
    bestAgainst: ['Streak', 'Four Verticals', 'Corner Strike', 'Quick Outs']
  },
  {
    id: 'anti_mobile_qb',
    name: 'Contain Mobile QB',
    side: 'defense',
    description: 'Contain edges, spy the QB: DL contain, LB spy, shade inside',
    adjustments: ['dl_contain', 'lb_spy', 'shade_inside'],
    counters: ['PA Crossers', 'Deep post', 'Levels'],
    bestAgainst: ['Read Option', 'QB Scramble', 'Speed Option', 'QB Draw', 'Inverted Veer']
  },
  {
    id: 'anti_man_beater',
    name: 'Anti-Man Beater',
    side: 'defense',
    description: 'Shade outside + press to disrupt crossing routes and mesh',
    adjustments: ['shade_outside', 'press'],
    counters: ['Slants', 'Quick game', 'Screens'],
    bestAgainst: ['Mesh', 'Deep Crossers', 'Drag Over', 'PA Slot Cross']
  },
  {
    id: 'max_protect',
    name: 'Max Protect',
    side: 'offense',
    description: 'Keep RB and TE in to block: max protect, ID mike',
    adjustments: ['max_protect', 'id_mike'],
    counters: ['Fewer route options', 'Only 2-3 receivers out'],
    bestAgainst: ['Cover 0', 'All-out blitz', 'Edge Blitz 0', 'Mid Blitz 0']
  },
  {
    id: 'quick_attack',
    name: 'Quick Attack',
    side: 'offense',
    description: 'Hot route to quick game: slants, drags, hitches for fast throws',
    adjustments: ['motion_snap'],
    counters: ['Press man', 'Robber coverage'],
    bestAgainst: ['Cover 0', 'Cover 1', 'Blitz heavy', 'Aggressive defense']
  },
  {
    id: 'flood_right',
    name: 'Flood Right',
    side: 'offense',
    description: 'Motion + hot route to overload the right side with 3 receivers',
    adjustments: ['motion_right'],
    counters: ['Cover 4 right side', 'Bracket coverage'],
    bestAgainst: ['Cover 3', 'Cover 1', 'Tampa 2', 'Man coverage']
  },
  {
    id: 'anti_cover3',
    name: 'Beat Cover 3',
    side: 'offense',
    description: 'Hot route to flood/corner concepts to attack Cover 3 holes',
    adjustments: ['slide_right'],
    counters: ['Cover 4', 'Pattern matching'],
    bestAgainst: ['Cover 3', 'Cover 3 Sky', 'Cover 3 Cloud', 'Cover 3 Buzz']
  },
  {
    id: 'anti_cover2',
    name: 'Beat Cover 2',
    side: 'offense',
    description: 'Hot route to posts and seams to split Cover 2 safeties',
    adjustments: ['slide_left'],
    counters: ['Cover 4', 'Single high safety'],
    bestAgainst: ['Cover 2 Zone', 'Cover 2 Man Under', 'Tampa 2', 'Cover 2 Sink']
  },
  {
    id: 'run_setup',
    name: 'Run Setup',
    side: 'offense',
    description: 'Aggressive blocking, no motion — physical downhill run setup',
    adjustments: ['aggressive'],
    counters: ['Play action vulnerability if run is stopped'],
    bestAgainst: ['Nickel', 'Dime', 'Dollar', 'Light boxes', 'Cover 4']
  },
  {
    id: 'tempo_attack',
    name: 'Tempo Attack',
    side: 'offense',
    description: 'Hurry up + no huddle to prevent defensive subs and adjustments',
    adjustments: ['hurry_up', 'no_huddle'],
    counters: ['Defense stays in base', 'Fatigue management'],
    bestAgainst: ['Heavy formations caught in Dime/Nickel', 'Slow LBs', 'Substitution-dependent defenses']
  }
];

// ===== PLAY CREATION TEMPLATES =====
export const PLAY_TEMPLATES = {
  passing: {
    name: 'Passing Play',
    description: 'Create a pass play from scratch or template',
    defaultRoutes: {
      WR1: 'streak', WR2: 'curl', WR3: 'slant',
      TE: 'drag', RB: 'flat'
    }
  },
  running: {
    name: 'Running Play',
    description: 'Create a run play with blocking assignments',
    defaultRoutes: {
      WR1: 'block', WR2: 'block', WR3: 'block',
      TE: 'block', RB: 'run_inside'
    }
  },
  screen: {
    name: 'Screen Play',
    description: 'Create a screen play with blocking setup',
    defaultRoutes: {
      WR1: 'block', WR2: 'streak', WR3: 'block',
      TE: 'flat', RB: 'flat'
    }
  },
  rpo: {
    name: 'RPO Play',
    description: 'Run-pass option with a read key',
    defaultRoutes: {
      WR1: 'slant', WR2: 'hitch', WR3: 'bubble',
      TE: 'block', RB: 'run_inside'
    }
  }
};
