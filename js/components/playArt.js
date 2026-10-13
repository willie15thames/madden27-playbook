// Madden 27 Play Art Engine - Canvas-based animated X's and O's
// Renders offensive and defensive play art with animated routes/zones

const FIELD_GREEN = '#1a472a';
const FIELD_LINE = 'rgba(255,255,255,0.15)';
const YARD_LINE = 'rgba(255,255,255,0.25)';
const OFF_COLOR = '#60a5fa';
const DEF_COLOR = '#f87171';
const ROUTE_COLOR = '#60a5fa';
const ZONE_COLOR = 'rgba(248,113,113,0.18)';
const ZONE_BORDER = 'rgba(248,113,113,0.5)';
const BALL_COLOR = '#fbbf24';
const LOS_COLOR = 'rgba(255,255,255,0.5)';

// Player positions on the field (normalized 0-1 coordinates)
// Offense faces UP (toward top of canvas)
const OFFENSE_POSITIONS = {
  'Shotgun': {
    'Spread Y-Flex': {
      QB: [0.5, 0.72], RB: [0.42, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], WR2: [0.22, 0.58], WR3: [0.78, 0.58], WR4: [0.92, 0.58]
    },
    'Bunch': {
      QB: [0.5, 0.72], RB: [0.42, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], TE: [0.78, 0.56], WR2: [0.82, 0.60], WR3: [0.86, 0.56]
    },
    'Trips TE': {
      QB: [0.5, 0.72], RB: [0.42, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], TE: [0.72, 0.62], WR2: [0.80, 0.56], WR3: [0.90, 0.56]
    },
    'Doubles': {
      QB: [0.5, 0.72], RB: [0.42, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], WR2: [0.25, 0.58], TE: [0.72, 0.62], WR3: [0.92, 0.58]
    },
    'Empty Trey': {
      QB: [0.5, 0.72], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.06, 0.58], WR2: [0.22, 0.58], TE: [0.72, 0.62], WR3: [0.82, 0.56], WR4: [0.94, 0.56]
    },
    '5 Wide': {
      QB: [0.5, 0.72], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.06, 0.58], WR2: [0.22, 0.58], WR3: [0.5, 0.56], WR4: [0.78, 0.58], WR5: [0.94, 0.58]
    },
    'Split Close': {
      QB: [0.5, 0.72], RB: [0.42, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.10, 0.58], TE: [0.72, 0.62], WR2: [0.28, 0.58], WR3: [0.90, 0.58]
    },
    'Cluster': {
      QB: [0.5, 0.72], RB: [0.42, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], WR2: [0.22, 0.54], WR3: [0.26, 0.60], WR4: [0.92, 0.58]
    }
  },
  'Singleback': {
    'Ace': {
      QB: [0.5, 0.68], RB: [0.5, 0.78], LT: [0.30, 0.62], LG: [0.38, 0.62], C: [0.5, 0.62], RG: [0.62, 0.62], RT: [0.70, 0.62],
      TE1: [0.25, 0.62], WR1: [0.08, 0.58], TE2: [0.75, 0.62], WR2: [0.92, 0.58]
    },
    'Bunch': {
      QB: [0.5, 0.68], RB: [0.5, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], TE: [0.78, 0.56], WR2: [0.82, 0.60], WR3: [0.86, 0.56]
    },
    'Y Trips': {
      QB: [0.5, 0.68], RB: [0.5, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], TE: [0.72, 0.62], WR2: [0.82, 0.56], WR3: [0.92, 0.56]
    }
  },
  'I-Form': {
    'Pro': {
      QB: [0.5, 0.68], FB: [0.5, 0.75], RB: [0.5, 0.82], LT: [0.30, 0.62], LG: [0.38, 0.62], C: [0.5, 0.62], RG: [0.62, 0.62], RT: [0.70, 0.62],
      TE: [0.75, 0.62], WR1: [0.08, 0.58], WR2: [0.92, 0.58]
    },
    'Tight': {
      QB: [0.5, 0.68], FB: [0.5, 0.75], RB: [0.5, 0.82], LT: [0.30, 0.62], LG: [0.38, 0.62], C: [0.5, 0.62], RG: [0.62, 0.62], RT: [0.70, 0.62],
      TE1: [0.25, 0.62], TE2: [0.75, 0.62], WR1: [0.08, 0.58]
    }
  },
  'Pistol': {
    'Trips': {
      QB: [0.5, 0.68], RB: [0.5, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], TE: [0.72, 0.62], WR2: [0.82, 0.56], WR3: [0.92, 0.56]
    },
    'Strong': {
      QB: [0.5, 0.68], RB: [0.5, 0.78], LT: [0.30, 0.62], LG: [0.38, 0.62], C: [0.5, 0.62], RG: [0.62, 0.62], RT: [0.70, 0.62],
      TE1: [0.25, 0.62], TE2: [0.75, 0.62], WR1: [0.08, 0.58], WR2: [0.92, 0.58]
    },
    'Bunch': {
      QB: [0.5, 0.68], RB: [0.5, 0.78], LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62],
      WR1: [0.08, 0.58], TE: [0.78, 0.56], WR2: [0.82, 0.60], WR3: [0.86, 0.56]
    }
  },
  'Goal Line': {
    'Normal': {
      QB: [0.5, 0.68], FB: [0.45, 0.75], RB: [0.5, 0.82], LT: [0.28, 0.62], LG: [0.36, 0.62], C: [0.5, 0.62], RG: [0.64, 0.62], RT: [0.72, 0.62],
      TE1: [0.22, 0.62], TE2: [0.78, 0.62], WR1: [0.92, 0.58]
    }
  }
};

const DEFENSE_POSITIONS = {
  '3-4 Odd': {
    DE1: [0.30, 0.56], NT: [0.50, 0.56], DE2: [0.70, 0.56],
    LOLB: [0.18, 0.50], ILB1: [0.40, 0.48], ILB2: [0.60, 0.48], ROLB: [0.82, 0.50],
    CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.35], FS: [0.50, 0.22]
  },
  '4-3 Over': {
    LE: [0.25, 0.56], DT1: [0.40, 0.56], DT2: [0.58, 0.56], RE: [0.72, 0.56],
    LOLB: [0.18, 0.48], MLB: [0.50, 0.46], ROLB: [0.80, 0.48],
    CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.32], FS: [0.50, 0.22]
  },
  '4-3 Under': {
    LE: [0.28, 0.56], DT1: [0.42, 0.56], DT2: [0.60, 0.56], RE: [0.75, 0.56],
    LOLB: [0.15, 0.48], MLB: [0.48, 0.46], ROLB: [0.82, 0.48],
    CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.35, 0.32], FS: [0.50, 0.22]
  },
  'Nickel': {
    LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
    LB1: [0.35, 0.48], LB2: [0.65, 0.48],
    CB1: [0.06, 0.42], NCB: [0.25, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.30], FS: [0.50, 0.20]
  },
  'Dime': {
    LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
    LB: [0.50, 0.48],
    CB1: [0.06, 0.42], NCB1: [0.22, 0.42], NCB2: [0.78, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.28], FS: [0.50, 0.18]
  },
  'Quarter': {
    DE1: [0.30, 0.56], NT: [0.50, 0.56], DE2: [0.70, 0.56],
    LB: [0.50, 0.48],
    CB1: [0.06, 0.40], NCB1: [0.22, 0.40], NCB2: [0.50, 0.40], NCB3: [0.78, 0.40], CB2: [0.94, 0.40], SS: [0.65, 0.25], FS: [0.42, 0.18]
  },
  '46': {
    LE: [0.22, 0.56], DT1: [0.38, 0.56], DT2: [0.55, 0.56], RE: [0.72, 0.56],
    LOLB: [0.15, 0.50], MLB: [0.48, 0.46], ROLB: [0.82, 0.50],
    CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.62, 0.52], FS: [0.50, 0.22]
  },
  'Goal Line': {
    DL1: [0.22, 0.56], DL2: [0.34, 0.56], DL3: [0.46, 0.56], DL4: [0.54, 0.56], DL5: [0.66, 0.56], DL6: [0.78, 0.56],
    LB1: [0.30, 0.48], LB2: [0.50, 0.48], LB3: [0.70, 0.48],
    CB1: [0.08, 0.42], S: [0.50, 0.30]
  }
};

// Route paths (waypoints as delta from start position, normalized)
const ROUTE_PATHS = {
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
  'angle': [[0.04, 0.04], [0.15, -0.12]],
  'block': [],
  'run_right': [[0.15, -0.05]],
  'run_left': [[-0.15, -0.05]],
  'run_inside': [[0, -0.12]],
  'run_power': [[0.06, -0.12]],
  'run_counter': [[-0.05, -0.02], [0.10, -0.12]],
  'run_stretch': [[0.20, -0.04]],
  'run_dive': [[0, -0.08]],
  'option_give': [[0.10, -0.06]],
  'option_keep': [[-0.08, -0.10]],
  'qb_boot_right': [[0.20, -0.05]],
  'qb_drop': [[0, 0.04]],
  'qb_scramble': [[-0.05, -0.10]]
};

// Coverage zone shapes (center + radius, normalized)
const ZONE_SHAPES = {
  'deep_third_left':   { x: 0.17, y: 0.18, w: 0.33, h: 0.22 },
  'deep_third_mid':    { x: 0.34, y: 0.18, w: 0.32, h: 0.22 },
  'deep_third_right':  { x: 0.67, y: 0.18, w: 0.33, h: 0.22 },
  'deep_half_left':    { x: 0.0, y: 0.12, w: 0.50, h: 0.26 },
  'deep_half_right':   { x: 0.50, y: 0.12, w: 0.50, h: 0.26 },
  'deep_quarter_1':    { x: 0.0, y: 0.14, w: 0.25, h: 0.24 },
  'deep_quarter_2':    { x: 0.25, y: 0.14, w: 0.25, h: 0.24 },
  'deep_quarter_3':    { x: 0.50, y: 0.14, w: 0.25, h: 0.24 },
  'deep_quarter_4':    { x: 0.75, y: 0.14, w: 0.25, h: 0.24 },
  'hook_left':         { x: 0.20, y: 0.38, w: 0.20, h: 0.16 },
  'hook_right':        { x: 0.60, y: 0.38, w: 0.20, h: 0.16 },
  'curl_flat_left':    { x: 0.0, y: 0.38, w: 0.20, h: 0.18 },
  'curl_flat_right':   { x: 0.80, y: 0.38, w: 0.20, h: 0.18 },
  'flat_left':         { x: 0.0, y: 0.48, w: 0.18, h: 0.14 },
  'flat_right':        { x: 0.82, y: 0.48, w: 0.18, h: 0.14 },
  'mid_hole':          { x: 0.35, y: 0.36, w: 0.30, h: 0.16 },
  'deep_middle':       { x: 0.30, y: 0.10, w: 0.40, h: 0.20 },
  'tampa_mlb_deep':    { x: 0.33, y: 0.20, w: 0.34, h: 0.18 }
};

// Coverage zone assignments per coverage type
const COVERAGE_ZONES = {
  'Cover 0': { zones: [], type: 'man' },
  'Cover 1': { zones: ['deep_middle'], type: 'man' },
  'Cover 1 Robber': { zones: ['deep_middle', 'mid_hole'], type: 'man' },
  'Cover 2 Zone': { zones: ['deep_half_left', 'deep_half_right', 'flat_left', 'flat_right', 'hook_left', 'hook_right', 'mid_hole'], type: 'zone' },
  'Cover 2 Man Under': { zones: ['deep_half_left', 'deep_half_right'], type: 'man' },
  'Cover 3': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'curl_flat_left', 'curl_flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 3 Sky': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'flat_right', 'hook_left', 'hook_right', 'curl_flat_left'], type: 'zone' },
  'Cover 3 Match': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'hook_left', 'hook_right', 'curl_flat_left', 'curl_flat_right'], type: 'zone' },
  'Cover 4': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'hook_left', 'hook_right', 'mid_hole'], type: 'zone' },
  'Cover 4 Palms': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 6': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_half_right', 'hook_left', 'hook_right', 'flat_right'], type: 'zone' },
  'Cover 9': { zones: ['deep_half_left', 'deep_half_right'], type: 'man' },
  'Tampa 2': { zones: ['deep_half_left', 'deep_half_right', 'tampa_mlb_deep', 'flat_left', 'flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Prevent': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'deep_middle'], type: 'zone' }
};

// Play route assignments per play family
const PLAY_ROUTES = {
  '4 Verticals': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Crossers': {
    routes: { WR1: 'drag', WR2: 'post', WR3: 'in', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Mesh': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'drag', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Levels': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Flood': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'out', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Smash': {
    routes: { WR1: 'hitch', WR2: 'corner', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Spot': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Stick': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Curl Flat': {
    routes: { WR1: 'curl', WR2: 'flat', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Quick Slants': {
    routes: { WR1: 'slant', WR2: 'slant', WR3: 'slant', WR4: 'slant', TE: 'slant', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Drag Over': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'drag_left', WR4: 'curl', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'HB Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'HB Wheel': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'wheel' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'PA Boot Over': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Post Shot': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Deep Outs': {
    routes: { WR1: 'comeback', WR2: 'out', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Corner Strike': {
    routes: { WR1: 'corner', WR2: 'hitch', WR3: 'streak', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Inside Zone': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Outside Zone': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_drop', isRun: true
  },
  'HB Stretch': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_drop', isRun: true
  },
  'Power O': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_power', FB: 'run_power' },
    qb: 'qb_drop', isRun: true
  },
  'Counter': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_counter', FB: 'run_power' },
    qb: 'qb_drop', isRun: true
  },
  'HB Dive': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_dive', FB: 'run_dive' },
    qb: 'qb_drop', isRun: true
  },
  'HB Toss': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_drop', isRun: true
  },
  'HB Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Read Option': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'Jet Sweep': {
    routes: { WR1: 'block', WR2: 'run_stretch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', isRun: true
  },
  'QB Sneak': {
    routes: { RB: 'block', FB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'block' },
    qb: 'run_dive', isRun: true
  },
  'RPO Read': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Mesh Over': {
    routes: { WR1: 'post', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Y Trail': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'angle', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Fade': {
    routes: { WR1: 'fade', TE: 'block', TE1: 'block', TE2: 'block', RB: 'block', FB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Boot': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', TE: 'in', RB: 'block', FB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'FB Dive': {
    routes: { FB: 'run_dive', RB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'block' },
    qb: 'qb_drop', isRun: true
  },
  'Tush Push': {
    routes: { FB: 'run_dive', RB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'block' },
    qb: 'run_dive', isRun: true
  }
};

// Default routes if play family not found
const DEFAULT_PASS_ROUTES = {
  routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'flat' },
  qb: 'qb_drop', ball_target: 'WR2'
};
const DEFAULT_RUN_ROUTES = {
  routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
  qb: 'qb_drop', isRun: true
};

// ============================
// RENDERING ENGINE
// ============================
class PlayArtRenderer {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = options.width || 320;
    this.height = options.height || 260;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.animProgress = 0;
    this.animFrame = null;
    this.isAnimating = false;
  }

  // Draw field background
  drawField() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    // Field
    ctx.fillStyle = FIELD_GREEN;
    ctx.fillRect(0, 0, w, h);
    // Yard lines
    for (let i = 1; i < 8; i++) {
      ctx.strokeStyle = FIELD_LINE;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h * i / 8);
      ctx.lineTo(w, h * i / 8);
      ctx.stroke();
    }
    // Hash marks
    for (let i = 1; i < 8; i++) {
      ctx.strokeStyle = FIELD_LINE;
      ctx.lineWidth = 1;
      const y = h * i / 8;
      ctx.beginPath(); ctx.moveTo(w * 0.38, y - 3); ctx.lineTo(w * 0.38, y + 3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w * 0.62, y - 3); ctx.lineTo(w * 0.62, y + 3); ctx.stroke();
    }
    // Line of scrimmage
    ctx.strokeStyle = LOS_COLOR;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.60);
    ctx.lineTo(w, h * 0.60);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Draw a player dot
  drawPlayer(x, y, color, label, size = 8) {
    const ctx = this.ctx;
    const px = x * this.width;
    const py = y * this.height;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Label
    if (label) {
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, size - 1)}px system-ui`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, px, py);
    }
  }

  // Draw a route line (animated)
  drawRoute(startX, startY, waypoints, color, progress = 1, lineWidth = 2, dashed = false) {
    if (!waypoints || waypoints.length === 0) return;
    const ctx = this.ctx;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    if (dashed) ctx.setLineDash([4, 3]);

    const totalSegs = waypoints.length;
    const segsToShow = progress * totalSegs;

    ctx.beginPath();
    let cx = startX * this.width;
    let cy = startY * this.height;
    ctx.moveTo(cx, cy);

    for (let i = 0; i < totalSegs; i++) {
      const [dx, dy] = waypoints[i];
      const tx = cx + dx * this.width;
      const ty = cy + dy * this.height;

      if (i < Math.floor(segsToShow)) {
        ctx.lineTo(tx, ty);
        cx = tx; cy = ty;
      } else if (i < segsToShow) {
        const frac = segsToShow - Math.floor(segsToShow);
        const mx = cx + (tx - cx) * frac;
        const my = cy + (ty - cy) * frac;
        ctx.lineTo(mx, my);
        // Arrow head at current position
        this.drawArrowHead(cx, cy, mx, my, color);
        cx = mx; cy = my;
        break;
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Arrow at end if fully drawn
    if (progress >= 1 && waypoints.length > 0) {
      const lastWP = waypoints[waypoints.length - 1];
      let prevX = startX * this.width;
      let prevY = startY * this.height;
      for (let i = 0; i < waypoints.length - 1; i++) {
        prevX += waypoints[i][0] * this.width;
        prevY += waypoints[i][1] * this.height;
      }
      const endX = prevX + lastWP[0] * this.width;
      const endY = prevY + lastWP[1] * this.height;
      this.drawArrowHead(prevX, prevY, endX, endY, color);
    }
  }

  drawArrowHead(fromX, fromY, toX, toY, color) {
    const ctx = this.ctx;
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const len = 6;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - len * Math.cos(angle - 0.4), toY - len * Math.sin(angle - 0.4));
    ctx.lineTo(toX - len * Math.cos(angle + 0.4), toY - len * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fill();
  }

  // Draw zone overlay
  drawZone(zone, alpha = 0.15) {
    const zoneData = ZONE_SHAPES[zone];
    if (!zoneData) return;
    const ctx = this.ctx;
    const x = zoneData.x * this.width;
    const y = zoneData.y * this.height;
    const w = zoneData.w * this.width;
    const h = zoneData.h * this.height;
    ctx.fillStyle = `rgba(248,113,113,${alpha})`;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = ZONE_BORDER;
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, w, h);
  }

  // Get closest formation match
  getOffensePositions(formation, subFormation) {
    const formGroup = OFFENSE_POSITIONS[formation];
    if (formGroup && formGroup[subFormation]) return formGroup[subFormation];
    if (formGroup) return Object.values(formGroup)[0];
    return OFFENSE_POSITIONS['Shotgun']['Spread Y-Flex'];
  }

  getDefensePositions(formation) {
    // Map sub-formations to base
    if (formation.includes('3-4') || formation.includes('Bear')) return DEFENSE_POSITIONS['3-4 Odd'];
    if (formation.includes('4-3 Under')) return DEFENSE_POSITIONS['4-3 Under'];
    if (formation.includes('4-3')) return DEFENSE_POSITIONS['4-3 Over'];
    if (formation.includes('Nickel') || formation.includes('3-3-5') || formation.includes('2-4-5')) return DEFENSE_POSITIONS['Nickel'];
    if (formation.includes('Dime')) return DEFENSE_POSITIONS['Dime'];
    if (formation.includes('Dollar') || formation.includes('Quarter')) return DEFENSE_POSITIONS['Quarter'];
    if (formation.includes('46')) return DEFENSE_POSITIONS['46'];
    if (formation.includes('Goal')) return DEFENSE_POSITIONS['Goal Line'];
    return DEFENSE_POSITIONS['Nickel'];
  }

  getPlayRoutes(playFamily) {
    if (PLAY_ROUTES[playFamily]) return PLAY_ROUTES[playFamily];
    // Try partial match
    for (const key of Object.keys(PLAY_ROUTES)) {
      if (playFamily.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(playFamily.toLowerCase())) {
        return PLAY_ROUTES[key];
      }
    }
    return playFamily && (playFamily.toLowerCase().includes('zone') || playFamily.toLowerCase().includes('power') || playFamily.toLowerCase().includes('dive') || playFamily.toLowerCase().includes('stretch') || playFamily.toLowerCase().includes('counter') || playFamily.toLowerCase().includes('toss') || playFamily.toLowerCase().includes('sweep') || playFamily.toLowerCase().includes('sneak') || playFamily.toLowerCase().includes('option'))
      ? DEFAULT_RUN_ROUTES : DEFAULT_PASS_ROUTES;
  }

  getCoverageZones(coverageName) {
    for (const key of Object.keys(COVERAGE_ZONES)) {
      if (coverageName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(coverageName.toLowerCase())) {
        return COVERAGE_ZONES[key];
      }
    }
    return COVERAGE_ZONES['Cover 3'];
  }

  // Static render (no animation)
  renderOffense(formation, subFormation, playFamily) {
    this.drawField();
    const positions = this.getOffensePositions(formation, subFormation);
    const playData = this.getPlayRoutes(playFamily);
    const routes = playData.routes;

    // Draw OL first (no routes)
    for (const key of ['LT', 'LG', 'C', 'RG', 'RT']) {
      if (positions[key]) this.drawPlayer(positions[key][0], positions[key][1], '#6b7280', '', 7);
    }

    // Draw routes then players
    const skillPositions = Object.keys(positions).filter(k => !['LT', 'LG', 'C', 'RG', 'RT'].includes(k));
    for (const key of skillPositions) {
      const pos = positions[key];
      const routeName = key === 'QB' ? playData.qb : (routes[key] || 'block');
      const path = ROUTE_PATHS[routeName] || [];
      if (path.length > 0) {
        const isRun = playData.isRun && key !== 'QB';
        this.drawRoute(pos[0], pos[1], path, isRun ? BALL_COLOR : ROUTE_COLOR, 1, 2, routeName === 'block');
      }
    }

    // Players on top
    for (const key of skillPositions) {
      const pos = positions[key];
      const label = key.replace(/\d/g, '').substring(0, 2);
      const isQB = key === 'QB';
      const color = isQB ? BALL_COLOR : OFF_COLOR;
      this.drawPlayer(pos[0], pos[1], color, label, isQB ? 9 : 8);
    }
  }

  renderDefense(formation, coverageName) {
    const positions = this.getDefensePositions(formation);
    const coverageData = this.getCoverageZones(coverageName);

    // Draw zones
    if (coverageData.type === 'zone') {
      for (const zone of coverageData.zones) {
        this.drawZone(zone, 0.12);
      }
    }

    // Draw defenders
    for (const [key, pos] of Object.entries(positions)) {
      const label = key.replace(/\d/g, '').substring(0, 2);
      this.drawPlayer(pos[0], pos[1], DEF_COLOR, label, 8);
    }
  }

  // Full static play card
  renderPlayCard(offFormation, offSubFormation, playFamily) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.renderOffense(offFormation, offSubFormation, playFamily);
  }

  renderCoverageCard(defFormation, coverageName) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawField();
    this.renderDefense(defFormation, coverageName);
  }

  // ANIMATED VS matchup
  renderMatchupAnimated(offFormation, offSubFormation, playFamily, defFormation, coverageName, duration = 4000) {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.isAnimating = true;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      this.animProgress = progress;

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawField();

      // Defense zones (fade in)
      const defPositions = this.getDefensePositions(defFormation);
      const coverageData = this.getCoverageZones(coverageName);
      if (coverageData.type === 'zone') {
        for (const zone of coverageData.zones) {
          this.drawZone(zone, 0.08 + 0.08 * Math.min(progress * 3, 1));
        }
      }

      // Defense players
      for (const [key, pos] of Object.entries(defPositions)) {
        const label = key.replace(/\d/g, '').substring(0, 2);
        this.drawPlayer(pos[0], pos[1], DEF_COLOR, label, 8);
      }

      // Offense
      const offPositions = this.getOffensePositions(offFormation, offSubFormation);
      const playData = this.getPlayRoutes(playFamily);
      const routes = playData.routes;

      // OL
      for (const key of ['LT', 'LG', 'C', 'RG', 'RT']) {
        if (offPositions[key]) this.drawPlayer(offPositions[key][0], offPositions[key][1], '#6b7280', '', 7);
      }

      // Animated routes
      const skillPositions = Object.keys(offPositions).filter(k => !['LT', 'LG', 'C', 'RG', 'RT'].includes(k));
      const routeProgress = Math.max(0, (progress - 0.15) / 0.7); // Routes start at 15% and finish at 85%

      for (const key of skillPositions) {
        const pos = offPositions[key];
        const routeName = key === 'QB' ? playData.qb : (routes[key] || 'block');
        const path = ROUTE_PATHS[routeName] || [];
        if (path.length > 0) {
          const isRun = playData.isRun && key !== 'QB';
          this.drawRoute(pos[0], pos[1], path, isRun ? BALL_COLOR : ROUTE_COLOR, routeProgress, 2, routeName === 'block');
        }
      }

      // Players on top
      for (const key of skillPositions) {
        const pos = offPositions[key];
        const label = key.replace(/\d/g, '').substring(0, 2);
        const isQB = key === 'QB';
        this.drawPlayer(pos[0], pos[1], isQB ? BALL_COLOR : OFF_COLOR, label, isQB ? 9 : 8);
      }

      // Ball flight (pass plays at ~75% progress)
      if (!playData.isRun && playData.ball_target && progress > 0.65 && progress < 0.95) {
        const targetPos = offPositions[playData.ball_target];
        if (targetPos) {
          const ballProg = (progress - 0.65) / 0.30;
          const qbPos = offPositions['QB'] || [0.5, 0.72];
          const routeData = routes[playData.ball_target];
          const routePath = ROUTE_PATHS[routeData] || [];
          let endX = targetPos[0], endY = targetPos[1];
          if (routePath.length > 0) {
            for (const [dx, dy] of routePath) { endX += dx; endY += dy; }
          }
          const bx = (qbPos[0] + (endX - qbPos[0]) * ballProg) * this.width;
          const by = (qbPos[1] + (endY - qbPos[1]) * ballProg) * this.height;
          this.ctx.fillStyle = BALL_COLOR;
          this.ctx.beginPath();
          this.ctx.ellipse(bx, by, 5, 3, Math.atan2(endY - qbPos[1], endX - qbPos[0]), 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.strokeStyle = '#92400e';
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }

      if (progress < 1) {
        this.animFrame = requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
        // Loop
        setTimeout(() => {
          if (this.canvas.isConnected) {
            this.renderMatchupAnimated(offFormation, offSubFormation, playFamily, defFormation, coverageName, duration);
          }
        }, 1500);
      }
    };

    this.animFrame = requestAnimationFrame(animate);
  }

  stop() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.isAnimating = false;
  }

  destroy() {
    this.stop();
  }
}

export { PlayArtRenderer, PLAY_ROUTES, COVERAGE_ZONES, OFFENSE_POSITIONS, DEFENSE_POSITIONS };
