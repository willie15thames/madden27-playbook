// Madden 27 Play Art Engine - Canvas-based animated X's and O's
// Renders offensive and defensive play art with animated routes/zones

const FIELD_GREEN = '#1a472a';
const FIELD_LINE = 'rgba(255,255,255,0.15)';
const YARD_LINE = 'rgba(255,255,255,0.25)';
const OFF_COLOR = '#00FFFF';
const DEF_COLOR = '#FF1493';
const ROUTE_COLOR = '#00FFFF';
const ZONE_COLOR = 'rgba(255,20,147,0.18)';
const ZONE_BORDER = 'rgba(255,20,147,0.5)';
const BALL_COLOR = '#8A2BE2';
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
  'Cover 1 Hole': { zones: ['deep_middle', 'mid_hole'], type: 'man' },
  'Cover 2 Zone': { zones: ['deep_half_left', 'deep_half_right', 'flat_left', 'flat_right', 'hook_left', 'hook_right', 'mid_hole'], type: 'zone' },
  'Cover 2 Man': { zones: ['deep_half_left', 'deep_half_right'], type: 'man' },
  'Cover 2 Invert': { zones: ['deep_half_left', 'deep_half_right', 'flat_left', 'flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 2 Sink': { zones: ['deep_half_left', 'deep_half_right', 'hook_left', 'hook_right', 'mid_hole'], type: 'zone' },
  'Cover 2 Lurk': { zones: ['deep_half_left', 'deep_half_right', 'mid_hole', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 2 Press': { zones: ['deep_half_left', 'deep_half_right'], type: 'man' },
  'Cover 2 Hard Flat': { zones: ['deep_half_left', 'deep_half_right', 'flat_left', 'flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 3': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'curl_flat_left', 'curl_flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 3 Sky': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'flat_right', 'hook_left', 'hook_right', 'curl_flat_left'], type: 'zone' },
  'Cover 3 Cloud': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'flat_left', 'flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 3 Buzz': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'hook_left', 'hook_right', 'mid_hole'], type: 'zone' },
  'Cover 3 Match': { zones: ['deep_third_left', 'deep_third_mid', 'deep_third_right', 'hook_left', 'hook_right', 'curl_flat_left', 'curl_flat_right'], type: 'zone' },
  'Cover 4': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'hook_left', 'hook_right', 'mid_hole'], type: 'zone' },
  'Cover 4 Palms': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'hook_left', 'hook_right'], type: 'zone' },
  'Cover 4 Drop': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'curl_flat_left', 'curl_flat_right'], type: 'zone' },
  'Cover 6': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_half_right', 'hook_left', 'hook_right', 'flat_right'], type: 'zone' },
  'Cover 9': { zones: ['deep_half_left', 'deep_half_right'], type: 'man' },
  'Tampa 2': { zones: ['deep_half_left', 'deep_half_right', 'tampa_mlb_deep', 'flat_left', 'flat_right', 'hook_left', 'hook_right'], type: 'zone' },
  'Prevent': { zones: ['deep_quarter_1', 'deep_quarter_2', 'deep_quarter_3', 'deep_quarter_4', 'deep_middle'], type: 'zone' },
  'Mid Blitz': { zones: [], type: 'man' },
  'Edge Blitz': { zones: [], type: 'man' },
  'Inverted Cover 2': { zones: ['deep_half', 'deep_half', 'hook_curl', 'flat', 'flat'], type: 'zone' }
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
  },
  'Wide Zone': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_drop', isRun: true
  },
  'Split Zone': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside', FB: 'run_counter' },
    qb: 'qb_drop', isRun: true
  },
  'Duo': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_power' },
    qb: 'qb_drop', isRun: true
  },
  'Trap': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Wham': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside', FB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'ISO': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside', FB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Sweep': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_drop', isRun: true
  },
  'End Around': {
    routes: { WR1: 'block', WR2: 'run_stretch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', isRun: true
  },
  'QB Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'run_inside', isRun: true
  },
  'QB Power': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_power', FB: 'run_power' },
    qb: 'run_power', isRun: true
  },
  'QB Scramble': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'streak', WR4: 'curl', TE: 'block', RB: 'block' },
    qb: 'qb_scramble', isRun: true
  },
  'Power Read': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'Speed Option': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'option_keep', isRun: true
  },
  'Triple Option': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'option_give', FB: 'run_dive' },
    qb: 'option_keep', isRun: true
  },
  'Inverted Veer': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'run_power', isRun: true
  },
  'Deep Post': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Deep Crossers': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'post', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Hail Mary': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'streak', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Skinny Post': {
    routes: { WR1: 'post', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Double Post': {
    routes: { WR1: 'post', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Post Corner': {
    routes: { WR1: 'corner', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Read': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Scissors': {
    routes: { WR1: 'post', WR2: 'corner', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Shot Seams': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Slot Cross': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'drag', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Power O': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'drag', WR4: 'curl', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Zone Shot': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Spacing': {
    routes: { WR1: 'curl', WR2: 'flat', WR3: 'hitch', WR4: 'out', TE: 'drag', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Drive': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Snag': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Dagger': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Mills': {
    routes: { WR1: 'post', WR2: 'in', WR3: 'corner', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Bench': {
    routes: { WR1: 'curl', WR2: 'out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Sail': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'out', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Dig Under': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Mesh Traffic': {
    routes: { WR1: 'post', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Bunch Trail': {
    routes: { WR1: 'streak', WR2: 'flat', WR3: 'corner', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Quick Outs': {
    routes: { WR1: 'out', WR2: 'out', WR3: 'out', WR4: 'out', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Comeback': {
    routes: { WR1: 'comeback', WR2: 'comeback', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Slant Flat': {
    routes: { WR1: 'slant', WR2: 'flat', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Quick Hitch': {
    routes: { WR1: 'hitch', WR2: 'hitch', WR3: 'hitch', WR4: 'hitch', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'WR Screen': {
    routes: { WR1: 'screen', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Bubble Screen': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Tunnel Screen': {
    routes: { WR1: 'block', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Middle Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'RPO Alert': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'RPO Bubble': {
    routes: { WR1: 'screen', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'RPO Peek': {
    routes: { WR1: 'slant', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Orbit': {
    routes: { WR1: 'streak', WR2: 'run_stretch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', isRun: true
  },
  'Orbit Screen': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'HB Blast': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Slam': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Pitch': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_handoff', isRun: true
  },
  'Delayed Draw': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Jailbreak Screen': {
    routes: { WR1: 'screen', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Screens': {
    routes: { WR1: 'screen', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'RPO Zone Peek': {
    routes: { WR1: 'slant', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'RPO Power Read': {
    routes: { WR1: 'block', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_drop', isRun: true
  },
  'RPO Lookie': {
    routes: { WR1: 'out', WR2: 'slant', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Play Action': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
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
    if (!playFamily) return DEFAULT_PASS_ROUTES;
    if (PLAY_ROUTES[playFamily]) return PLAY_ROUTES[playFamily];
    const lower = playFamily.toLowerCase();
    // Exact prefix match first (avoids "PA Power O" matching "Power O")
    for (const key of Object.keys(PLAY_ROUTES)) {
      if (lower === key.toLowerCase()) return PLAY_ROUTES[key];
    }
    // Try "starts with" for PA/RPO variants
    for (const key of Object.keys(PLAY_ROUTES)) {
      if (lower.startsWith(key.toLowerCase()) || key.toLowerCase().startsWith(lower)) {
        return PLAY_ROUTES[key];
      }
    }
    // Partial includes (skip if play is PA/RPO and key is a run)
    const isPA = lower.startsWith('pa ') || lower.startsWith('rpo ');
    for (const key of Object.keys(PLAY_ROUTES)) {
      const kl = key.toLowerCase();
      if (isPA && PLAY_ROUTES[key].isRun) continue;
      if (lower.includes(kl) || kl.includes(lower)) return PLAY_ROUTES[key];
    }
    // Fallback by type
    const runWords = ['zone', 'power', 'dive', 'stretch', 'counter', 'toss', 'sweep', 'sneak', 'option', 'draw', 'iso', 'trap', 'wham', 'blast', 'slam', 'duo', 'pitch', 'veer', 'orbit'];
    return runWords.some(w => lower.includes(w)) ? DEFAULT_RUN_ROUTES : DEFAULT_PASS_ROUTES;
  }

  getCoverageZones(coverageName) {
    if (!coverageName) return COVERAGE_ZONES['Cover 3'];
    const lower = coverageName.toLowerCase();
    // Exact match
    if (COVERAGE_ZONES[coverageName]) return COVERAGE_ZONES[coverageName];
    // Try longest key match first to avoid "Cover 1" matching before "Cover 1 Hole"
    const keys = Object.keys(COVERAGE_ZONES).sort((a, b) => b.length - a.length);
    for (const key of keys) {
      const kl = key.toLowerCase();
      if (lower.includes(kl) || kl.includes(lower)) return COVERAGE_ZONES[key];
    }
    return COVERAGE_ZONES['Cover 3'];
  }

  // Static render (no animation)
  renderOffense(formation, subFormation, playFamily) {
    this.drawField();
    const positions = this.getOffensePositions(formation, subFormation);
    const playData = this.getPlayRoutes(playFamily);
    const routes = playData.routes;

    // Draw the box zone on run plays (static preview)
    if (playData.isRun) {
      this._drawBoxZoneOnly(positions, 0.8);
    }

    // Draw OL first (no routes)
    for (const key of ['LT', 'LG', 'C', 'RG', 'RT']) {
      if (positions[key]) this.drawPlayer(positions[key][0], positions[key][1], '#4B0082', '', 7);
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

      // Draw the box on run plays
      if (playData.isRun && progress > 0.15) {
        this._drawBox(offPositions, defPositions, Math.min((progress - 0.15) * 3, 1), true);
      }

      // OL
      for (const key of ['LT', 'LG', 'C', 'RG', 'RT']) {
        if (offPositions[key]) this.drawPlayer(offPositions[key][0], offPositions[key][1], '#4B0082', '', 7);
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

  // ============================
  // LIVE PLAY ANIMATION ENGINE
  // ============================
  // Players physically move: WRs run routes, OL engages DL, DBs drop/follow, gaps fill
  // side: 'offense' | 'defense' - which side is highlighted
  renderLivePlay({ side = 'offense', offFormation, offSubFormation, playFamily, defFormation, coverageName, duration = 4000, visibleGroups = null }) {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.isAnimating = true;

    const offPositions = this.getOffensePositions(offFormation, offSubFormation);
    const defPositions = this.getDefensePositions(defFormation);
    const playData = this.getPlayRoutes(playFamily);
    const coverageData = this.getCoverageZones(coverageName);
    const routes = playData.routes;
    const isRun = !!playData.isRun;
    const isOffSide = side === 'offense';

    // Build offensive player animation data
    const offPlayers = [];
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    const gapLabels = ['D', 'C', 'B', 'A', 'A', 'B', 'C', 'D'];

    for (const [key, startPos] of Object.entries(offPositions)) {
      const isOL = olKeys.includes(key);
      const isQB = key === 'QB';
      const routeName = isOL ? 'block' : (isQB ? playData.qb : (routes[key] || 'block'));
      const path = ROUTE_PATHS[routeName] || [];

      // Compute final position by following waypoints
      let endX = startPos[0], endY = startPos[1];
      for (const [dx, dy] of path) { endX += dx; endY += dy; }

      // OL: push forward slightly to engage
      if (isOL) {
        const blockDir = isRun ? this._getRunBlockDirection(key, playFamily) : 0;
        endX = startPos[0] + blockDir * 0.03;
        endY = startPos[1] - 0.03;
      }

      offPlayers.push({
        key, startPos: [...startPos], endPos: [endX, endY],
        routeName, path, isOL, isQB,
        label: key.replace(/\d/g, '').substring(0, 2),
        color: isQB ? BALL_COLOR : (isOL ? '#4B0082' : OFF_COLOR),
        size: isQB ? 9 : (isOL ? 7 : 8)
      });
    }

    // Build defensive player animation data
    const defPlayers = [];
    const defEntries = Object.entries(defPositions);
    const dlKeys = ['DE', 'DE1', 'DE2', 'DT', 'DT1', 'DT2', 'NT', 'LE', 'RE', 'DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'];
    const lbKeys = ['LOLB', 'ROLB', 'ILB1', 'ILB2', 'MLB', 'LB', 'LB1', 'LB2', 'LB3'];
    const dbKeys = ['CB1', 'CB2', 'NCB', 'NCB1', 'NCB2', 'NCB3', 'SS', 'FS', 'S'];

    for (const [key, startPos] of defEntries) {
      const isDL = dlKeys.includes(key);
      const isLB = lbKeys.includes(key);
      const isDB = dbKeys.includes(key);

      let endX = startPos[0], endY = startPos[1];

      if (isDL) {
        // DL rushes to LOS then gets blocked
        endY = 0.60;
      } else if (coverageData.type === 'zone') {
        // Zone: move toward assigned zone center
        const zoneTarget = this._getDefenderZoneTarget(key, isLB, isDB, coverageData, isRun, startPos);
        if (zoneTarget) { endX = zoneTarget[0]; endY = zoneTarget[1]; }
      } else {
        // Man: DBs follow nearest WR, LBs mirror or blitz
        const manTarget = this._getManTarget(key, isLB, isDB, startPos, offPlayers, isRun);
        if (manTarget) { endX = manTarget[0]; endY = manTarget[1]; }
      }

      defPlayers.push({
        key, startPos: [...startPos], endPos: [endX, endY],
        isDL, isLB, isDB,
        label: key.replace(/\d/g, '').substring(0, 2),
        color: DEF_COLOR, size: 8
      });
    }

    // Gap data for run plays
    const gaps = isRun ? this._computeGaps(offPositions) : [];

    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      this.animProgress = t;

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawField();

      // Phase timing
      const preSnap = t < 0.08;
      const snapPhase = t >= 0.08 && t < 0.15;
      const developPhase = t >= 0.15;
      const routeT = Math.max(0, (t - 0.15) / 0.65); // 15%-80% = route development
      const lateT = Math.max(0, (t - 0.70) / 0.30); // 70%-100% = ball flight / finish

      // Easing
      const ease = v => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
      const moveT = ease(Math.min(routeT, 1));

      // === Draw coverage zones (fade in during development) ===
      if (coverageData.type === 'zone' && developPhase) {
        const zoneFade = Math.min(routeT * 2, 1);
        for (const zone of coverageData.zones) {
          this.drawZone(zone, (isOffSide ? 0.08 : 0.14) * zoneFade);
        }
        // Zone labels for defense perspective
        if (!isOffSide && zoneFade > 0.5) {
          this._drawZoneLabels(coverageData.zones, zoneFade);
        }
      }

      // === The Box + Gap fit labels for run plays ===
      if (isRun && developPhase) {
        const gapFade = Math.min(routeT * 2.5, 1);
        this._drawBox(offPositions, defPositions, gapFade, isOffSide);
        if (gaps.length > 0) this._drawGaps(gaps, gapFade, isOffSide);
      }

      // === Draw route trails (the path behind moving players) ===
      if (developPhase) {
        for (const p of offPlayers) {
          if (p.isOL || p.path.length === 0) continue;
          const routeColor = (isRun && !p.isQB) ? BALL_COLOR : ROUTE_COLOR;
          const alpha = isOffSide ? 0.7 : 0.3;
          this.ctx.globalAlpha = alpha;
          this.drawRoute(p.startPos[0], p.startPos[1], p.path, routeColor, routeT, 2, p.routeName === 'block');
          this.ctx.globalAlpha = 1;
          // Route name labels (offense perspective)
          if (isOffSide && routeT > 0.3 && !p.isQB && p.routeName !== 'block') {
            this._drawRouteLabel(p, routeT);
          }
        }
      }

      // === Block engagement lines (OL <-> DL) ===
      if (developPhase) {
        this._drawBlockEngagements(offPlayers, defPlayers, moveT, isOffSide);
      }

      // === Move and draw defensive players ===
      const dimOpp = isOffSide ? 0.55 : 1.0;
      for (const p of defPlayers) {
        const vis = this._isVisible(p.key, visibleGroups);
        const mt = p.isDL ? Math.min(moveT * 1.5, 1) : moveT;
        const x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * (developPhase ? mt : 0);
        const y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * (developPhase ? mt : 0);
        this.ctx.globalAlpha = vis ? dimOpp : 0.12;
        const glow = !isOffSide && developPhase && vis;
        if (glow) this._drawGlow(x, y, DEF_COLOR, p.size + 3);
        this.drawPlayer(x, y, p.color, vis ? p.label : '', p.size);
        this.ctx.globalAlpha = 1;
      }

      // === Move and draw offensive players ===
      const dimOff = isOffSide ? 1.0 : 0.55;
      for (const p of offPlayers) {
        const vis = this._isVisible(p.key, visibleGroups);
        let x, y;
        if (p.isOL) {
          const olT = developPhase ? Math.min(moveT * 2, 1) : 0;
          x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * olT;
          y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * olT;
        } else {
          x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * (developPhase ? moveT : 0);
          y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * (developPhase ? moveT : 0);
        }
        this.ctx.globalAlpha = vis ? dimOff : 0.12;
        const glow = isOffSide && developPhase && !p.isOL && vis;
        if (glow) this._drawGlow(x, y, p.isQB ? BALL_COLOR : OFF_COLOR, p.size + 3);
        this.drawPlayer(x, y, p.color, vis ? p.label : '', p.size);
        this.ctx.globalAlpha = 1;
      }

      // === Ball flight for pass plays ===
      if (!isRun && playData.ball_target && lateT > 0 && lateT < 1) {
        const targetPlayer = offPlayers.find(p => p.key === playData.ball_target);
        const qbPlayer = offPlayers.find(p => p.isQB);
        if (targetPlayer && qbPlayer) {
          const qx = qbPlayer.endPos[0], qy = qbPlayer.endPos[1];
          const tx = targetPlayer.endPos[0], ty = targetPlayer.endPos[1];
          const bx = (qx + (tx - qx) * lateT) * this.width;
          const by = (qy + (ty - qy) * lateT) * this.height;
          // Ball shadow
          this.ctx.fillStyle = 'rgba(0,0,0,0.3)';
          this.ctx.beginPath();
          this.ctx.ellipse(bx + 2, by + 2, 5, 3, Math.atan2(ty - qy, tx - qx), 0, Math.PI * 2);
          this.ctx.fill();
          // Ball
          this.ctx.fillStyle = BALL_COLOR;
          this.ctx.beginPath();
          this.ctx.ellipse(bx, by, 5, 3, Math.atan2(ty - qy, tx - qx), 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.strokeStyle = '#92400e';
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          // Spiral laces
          const angle = Math.atan2(ty - qy, tx - qx);
          this.ctx.strokeStyle = '#fff';
          this.ctx.lineWidth = 0.8;
          this.ctx.beginPath();
          this.ctx.moveTo(bx - 2 * Math.cos(angle + 0.8), by - 2 * Math.sin(angle + 0.8));
          this.ctx.lineTo(bx + 2 * Math.cos(angle + 0.8), by + 2 * Math.sin(angle + 0.8));
          this.ctx.stroke();
        }
      }

      // === Side indicator ===
      this._drawSideIndicator(side, t);

      if (t < 1) {
        this.animFrame = requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
        this._loopTimeout = setTimeout(() => {
          if (this.canvas.isConnected) {
            this.renderLivePlay({ side, offFormation, offSubFormation, playFamily, defFormation, coverageName, duration, visibleGroups });
          }
        }, 1500);
      }
    };

    this.animFrame = requestAnimationFrame(animate);
  }

  // === Live Play Helpers ===

  // Position group classification
  _getPositionGroup(key) {
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    if (olKeys.includes(key)) return 'OL';
    if (key === 'QB') return 'QB';
    if (key.startsWith('WR')) return 'WR';
    if (key.startsWith('TE')) return 'TE';
    if (key === 'RB' || key === 'FB') return 'RB';
    const dlKeys = ['DE', 'DE1', 'DE2', 'DT', 'DT1', 'DT2', 'NT', 'LE', 'RE', 'DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'];
    if (dlKeys.includes(key)) return 'DL';
    const lbKeys = ['LOLB', 'ROLB', 'ILB1', 'ILB2', 'MLB', 'LB', 'LB1', 'LB2', 'LB3'];
    if (lbKeys.includes(key)) return 'LB';
    return 'DB';
  }

  _isVisible(key, visibleGroups) {
    if (!visibleGroups) return true;
    return visibleGroups.has(this._getPositionGroup(key));
  }

  _hexToRgba(hex, alpha) {
    if (hex.startsWith('#')) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }
    if (hex.startsWith('rgb')) return hex.replace(')', `,${alpha})`).replace('rgb(', 'rgba(');
    return hex;
  }

  _drawGlow(x, y, color, radius) {
    const ctx = this.ctx;
    const px = x * this.width, py = y * this.height;
    const grad = ctx.createRadialGradient(px, py, 0, px, py, radius * 1.5);
    grad.addColorStop(0, this._hexToRgba(color, 0.35));
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(px, py, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();
  }

  _getRunBlockDirection(olKey, playFamily) {
    const name = playFamily.toLowerCase();
    // Zone runs: whole OL slides one direction
    if (name.includes('stretch') || name.includes('toss') || name.includes('outside zone')) {
      return olKey === 'LT' || olKey === 'LG' ? 1 : (olKey === 'RT' || olKey === 'RG' ? 1.5 : 1);
    }
    if (name.includes('counter')) {
      return olKey === 'RG' ? -2 : (olKey === 'RT' ? -1.5 : 0.3);
    }
    if (name.includes('power')) {
      return olKey === 'RG' ? -1.5 : 0.3;
    }
    return 0; // Inside zone / dive: straight ahead
  }

  _getDefenderZoneTarget(key, isLB, isDB, coverageData, isRun, startPos) {
    if (isRun && isLB) {
      // LBs fill gaps on run plays
      return [startPos[0], startPos[1] + 0.06];
    }
    // Map defender keys to likely zone assignments
    const zoneMap = {
      'CB1': ['deep_third_left', 'deep_quarter_1', 'deep_half_left', 'curl_flat_left'],
      'CB2': ['deep_third_right', 'deep_quarter_4', 'deep_half_right', 'curl_flat_right'],
      'NCB': ['hook_left', 'curl_flat_left', 'mid_hole'],
      'NCB1': ['hook_left', 'curl_flat_left', 'deep_quarter_2'],
      'NCB2': ['hook_right', 'curl_flat_right', 'deep_quarter_3'],
      'NCB3': ['mid_hole', 'deep_quarter_3'],
      'FS': ['deep_middle', 'deep_half_left', 'deep_third_mid', 'deep_quarter_2'],
      'SS': ['deep_half_right', 'deep_quarter_3', 'hook_right', 'flat_right'],
      'S': ['deep_middle'],
      'LOLB': ['flat_left', 'curl_flat_left', 'hook_left'],
      'ROLB': ['flat_right', 'curl_flat_right', 'hook_right'],
      'ILB1': ['hook_left', 'mid_hole'],
      'ILB2': ['hook_right', 'mid_hole'],
      'MLB': ['mid_hole', 'tampa_mlb_deep', 'hook_left'],
      'LB': ['mid_hole', 'hook_left'],
      'LB1': ['hook_left', 'mid_hole'],
      'LB2': ['hook_right', 'mid_hole'],
      'LB3': ['mid_hole']
    };
    const candidates = zoneMap[key] || [];
    for (const zName of candidates) {
      if (coverageData.zones.includes(zName)) {
        const z = ZONE_SHAPES[zName];
        if (z) return [z.x + z.w / 2, z.y + z.h / 2];
      }
    }
    return null;
  }

  _getManTarget(key, isLB, isDB, startPos, offPlayers, isRun) {
    if (isRun && isLB) {
      return [startPos[0], startPos[1] + 0.06];
    }
    if (!isDB && !isLB) return null;
    // Find nearest WR/TE to follow
    const receivers = offPlayers.filter(p => !p.isOL && !p.isQB && p.routeName !== 'block');
    if (receivers.length === 0) return null;
    let nearest = receivers[0], minDist = Infinity;
    for (const r of receivers) {
      const d = Math.hypot(r.startPos[0] - startPos[0], r.startPos[1] - startPos[1]);
      if (d < minDist) { minDist = d; nearest = r; }
    }
    // Follow partway to their end position
    const followFactor = isDB ? 0.85 : 0.6;
    return [
      nearest.startPos[0] + (nearest.endPos[0] - nearest.startPos[0]) * followFactor + (isDB ? 0.02 : 0),
      nearest.startPos[1] + (nearest.endPos[1] - nearest.startPos[1]) * followFactor + 0.02
    ];
  }

  _computeGaps(offPositions) {
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    const olPositions = olKeys.filter(k => offPositions[k]).map(k => offPositions[k]);
    const gaps = [];
    const labels = ['C/D', 'B', 'A', 'A', 'B', 'C/D'];
    // Gaps between OL
    for (let i = 0; i < olPositions.length - 1; i++) {
      const x = (olPositions[i][0] + olPositions[i + 1][0]) / 2;
      const y = olPositions[i][1] - 0.02;
      gaps.push({ x, y, label: labels[i] || 'G' });
    }
    // Outside gaps
    if (olPositions.length >= 2) {
      gaps.unshift({ x: olPositions[0][0] - 0.06, y: olPositions[0][1] - 0.02, label: 'D' });
      gaps.push({ x: olPositions[olPositions.length - 1][0] + 0.06, y: olPositions[olPositions.length - 1][1] - 0.02, label: 'D' });
    }
    return gaps;
  }

  // Draw "The Box" - the area between tackles where defenders stack vs the run
  _drawBox(offPositions, defPositions, fade, isOffSide) {
    const ctx = this.ctx;
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    const olXs = olKeys.filter(k => offPositions[k]).map(k => offPositions[k][0]);
    if (olXs.length < 2) return;

    const leftEdge = Math.min(...olXs) - 0.04;
    const rightEdge = Math.max(...olXs) + 0.04;
    const losY = 0.60;
    const boxDepth = 0.20; // ~5 yards behind LOS
    const boxTop = losY - boxDepth;

    const x = leftEdge * this.width;
    const y = boxTop * this.height;
    const w = (rightEdge - leftEdge) * this.width;
    const h = boxDepth * this.height;

    // Box zone fill
    ctx.globalAlpha = fade * 0.18;
    ctx.fillStyle = '#FF1493';
    ctx.fillRect(x, y, w, h);
    ctx.globalAlpha = fade * 0.5;
    ctx.strokeStyle = '#FF1493';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.strokeRect(x, y, w, h);
    ctx.setLineDash([]);

    // Count defenders in the box
    let inBox = 0;
    for (const [key, pos] of Object.entries(defPositions)) {
      if (pos[0] >= leftEdge && pos[0] <= rightEdge && pos[1] >= boxTop && pos[1] <= losY + 0.04) {
        inBox++;
      }
    }

    // Box count label
    ctx.globalAlpha = fade * 0.9;
    const label = `${inBox} IN BOX`;
    ctx.font = `bold ${Math.max(9, this.width * 0.032)}px system-ui`;
    const tw = ctx.measureText(label).width + 10;
    const lx = (leftEdge + rightEdge) / 2 * this.width;
    const ly = boxTop * this.height - 2;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.beginPath();
    ctx.roundRect(lx - tw / 2, ly - 12, tw, 14, 3);
    ctx.fill();
    ctx.fillStyle = '#FF1493';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(label, lx, ly);
    ctx.globalAlpha = 1;
  }

  // Box zone only (no defender count) for single-play card view
  _drawBoxZoneOnly(offPositions, fade) {
    const ctx = this.ctx;
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    const olXs = olKeys.filter(k => offPositions[k]).map(k => offPositions[k][0]);
    if (olXs.length < 2) return;
    const leftEdge = Math.min(...olXs) - 0.04;
    const rightEdge = Math.max(...olXs) + 0.04;
    const losY = 0.60;
    const boxTop = losY - 0.20;
    const x = leftEdge * this.width;
    const y = boxTop * this.height;
    const w = (rightEdge - leftEdge) * this.width;
    const h = 0.20 * this.height;
    ctx.globalAlpha = fade * 0.12;
    ctx.fillStyle = '#FF1493';
    ctx.fillRect(x, y, w, h);
    ctx.globalAlpha = fade * 0.35;
    ctx.strokeStyle = '#FF1493';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.strokeRect(x, y, w, h);
    ctx.setLineDash([]);
    // Label
    ctx.globalAlpha = fade * 0.7;
    ctx.font = `bold ${Math.max(8, this.width * 0.028)}px system-ui`;
    ctx.fillStyle = '#FF1493';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('THE BOX', (leftEdge + rightEdge) / 2 * this.width, boxTop * this.height - 2);
    ctx.globalAlpha = 1;
  }

  _drawGaps(gaps, fade, isOffSide) {
    const ctx = this.ctx;
    ctx.globalAlpha = fade * (isOffSide ? 0.7 : 0.5);
    for (const gap of gaps) {
      const px = gap.x * this.width;
      const py = gap.y * this.height;
      // Gap indicator
      ctx.fillStyle = 'rgba(0,255,255,0.25)';
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();
      // Label
      ctx.fillStyle = '#00FFFF';
      ctx.font = 'bold 8px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(gap.label, px, py);
    }
    ctx.globalAlpha = 1;
  }

  _drawBlockEngagements(offPlayers, defPlayers, moveT, isOffSide) {
    if (moveT < 0.3) return;
    const ctx = this.ctx;
    const engageFade = Math.min((moveT - 0.3) / 0.3, 1);
    const olPlayers = offPlayers.filter(p => p.isOL);
    const dlPlayers = defPlayers.filter(p => p.isDL);

    ctx.globalAlpha = engageFade * 0.6;
    for (const ol of olPlayers) {
      // Find nearest DL
      let nearest = null, minDist = Infinity;
      for (const dl of dlPlayers) {
        const d = Math.hypot(ol.endPos[0] - dl.startPos[0], ol.endPos[1] - dl.startPos[1]);
        if (d < minDist) { minDist = d; nearest = dl; }
      }
      if (nearest && minDist < 0.2) {
        const ox = ol.endPos[0] * this.width;
        const oy = ol.endPos[1] * this.height;
        const dx = (nearest.startPos[0] + (nearest.endPos[0] - nearest.startPos[0]) * Math.min(moveT * 1.5, 1)) * this.width;
        const dy = (nearest.startPos[1] + (nearest.endPos[1] - nearest.startPos[1]) * Math.min(moveT * 1.5, 1)) * this.height;
        // Clash spark
        const mx = (ox + dx) / 2, my = (oy + dy) / 2;
        ctx.strokeStyle = isOffSide ? '#00FFFF' : '#FF1493';
        ctx.lineWidth = 2;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(dx, dy);
        ctx.stroke();
        ctx.setLineDash([]);
        // Impact spark
        if (engageFade > 0.5) {
          ctx.fillStyle = '#00FFFF';
          const sparkSize = 3 + Math.sin(performance.now() / 100) * 1.5;
          ctx.beginPath();
          ctx.arc(mx, my, sparkSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  _drawRouteLabel(player, routeT) {
    if (routeT < 0.4) return;
    const ctx = this.ctx;
    const fade = Math.min((routeT - 0.4) / 0.2, 1);
    // Position label at midpoint of route
    const midX = (player.startPos[0] + player.endPos[0]) / 2;
    const midY = (player.startPos[1] + player.endPos[1]) / 2;
    const px = midX * this.width;
    const py = midY * this.height - 10;
    const name = player.routeName.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
    ctx.globalAlpha = fade * 0.85;
    // Background pill
    ctx.font = 'bold 7px system-ui';
    const tw = ctx.measureText(name).width + 6;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.beginPath();
    ctx.roundRect(px - tw / 2, py - 6, tw, 12, 3);
    ctx.fill();
    // Text
    ctx.fillStyle = '#00FFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, px, py);
    ctx.globalAlpha = 1;
  }

  _drawZoneLabels(zones, fade) {
    const ctx = this.ctx;
    ctx.globalAlpha = fade * 0.7;
    for (const zoneName of zones) {
      const z = ZONE_SHAPES[zoneName];
      if (!z) continue;
      const px = (z.x + z.w / 2) * this.width;
      const py = (z.y + z.h / 2) * this.height;
      const label = zoneName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).replace('Deep ', 'D.').replace('Half ', 'H.').replace('Quarter ', 'Q.').replace('Curl ', 'C/');
      const shortLabel = label.length > 12 ? label.substring(0, 11) + '.' : label;
      ctx.font = 'bold 7px system-ui';
      const tw = ctx.measureText(shortLabel).width + 6;
      ctx.fillStyle = 'rgba(248,113,113,0.2)';
      ctx.beginPath();
      ctx.roundRect(px - tw / 2, py - 6, tw, 12, 3);
      ctx.fill();
      ctx.fillStyle = '#FF1493';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(shortLabel, px, py);
    }
    ctx.globalAlpha = 1;
  }

  _drawSideIndicator(side, t) {
    const ctx = this.ctx;
    const fade = Math.min(t * 5, 1);
    ctx.globalAlpha = fade * 0.8;
    const isOff = side === 'offense';
    const label = isOff ? 'OFFENSE VIEW' : 'DEFENSE VIEW';
    const color = isOff ? '#00FFFF' : '#FF1493';
    ctx.font = 'bold 9px system-ui';
    const tw = ctx.measureText(label).width + 10;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.roundRect(this.width / 2 - tw / 2, 4, tw, 16, 4);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, this.width / 2, 12);
    ctx.globalAlpha = 1;
  }

  // === SINGLE-PLAY LIVE ANIMATION (no opponent, card view) ===
  // Shows only offense OR defense animated, for card previews
  // visibleGroups: null (all) or Set of group names: 'OL','QB','WR','TE','RB','DL','LB','DB'
  renderSinglePlayLive({ mode = 'offense', offFormation, offSubFormation, playFamily, defFormation, coverageName, duration = 3500, visibleGroups = null }) {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.isAnimating = true;

    const isOff = mode === 'offense';
    const offPositions = isOff ? this.getOffensePositions(offFormation, offSubFormation) : null;
    const playData = isOff ? this.getPlayRoutes(playFamily) : null;
    const defPositions = !isOff ? this.getDefensePositions(defFormation) : null;
    const coverageData = !isOff ? this.getCoverageZones(coverageName) : null;

    // Build player data
    const players = [];
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];

    if (isOff && offPositions && playData) {
      const routes = playData.routes;
      for (const [key, startPos] of Object.entries(offPositions)) {
        const isOL = olKeys.includes(key);
        const isQB = key === 'QB';
        const routeName = isOL ? 'block' : (isQB ? playData.qb : (routes[key] || 'block'));
        const path = ROUTE_PATHS[routeName] || [];
        let endX = startPos[0], endY = startPos[1];
        for (const [dx, dy] of path) { endX += dx; endY += dy; }
        if (isOL) {
          const blockDir = playData.isRun ? this._getRunBlockDirection(key, playFamily) : 0;
          endX = startPos[0] + blockDir * 0.03;
          endY = startPos[1] - 0.03;
        }
        players.push({
          key, startPos: [...startPos], endPos: [endX, endY],
          routeName, path, isOL, isQB,
          label: key.replace(/\d/g, '').substring(0, 2),
          color: isQB ? BALL_COLOR : (isOL ? '#4B0082' : OFF_COLOR),
          size: isQB ? 9 : (isOL ? 7 : 8)
        });
      }
    } else if (!isOff && defPositions) {
      const dlKeys = ['DE', 'DE1', 'DE2', 'DT', 'DT1', 'DT2', 'NT', 'LE', 'RE', 'DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'];
      const lbKeys = ['LOLB', 'ROLB', 'ILB1', 'ILB2', 'MLB', 'LB', 'LB1', 'LB2', 'LB3'];
      for (const [key, startPos] of Object.entries(defPositions)) {
        const isDL = dlKeys.includes(key);
        const isLB = lbKeys.includes(key);
        const isDB = !isDL && !isLB;
        let endX = startPos[0], endY = startPos[1];
        if (isDL) { endY = 0.60; }
        else if (coverageData && coverageData.type === 'zone') {
          const zoneTarget = this._getDefenderZoneTarget(key, isLB, isDB, coverageData, false, startPos);
          if (zoneTarget) { endX = zoneTarget[0]; endY = zoneTarget[1]; }
        }
        players.push({
          key, startPos: [...startPos], endPos: [endX, endY],
          isDL, isLB, isDB,
          label: key.replace(/\d/g, '').substring(0, 2),
          color: DEF_COLOR, size: 8
        });
      }
    }

    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawField();

      const developPhase = t >= 0.12;
      const routeT = Math.max(0, (t - 0.12) / 0.68);
      const lateT = Math.max(0, (t - 0.70) / 0.30);
      const ease = v => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
      const moveT = ease(Math.min(routeT, 1));

      if (isOff && playData) {
        // Draw the box zone on run plays
        if (playData.isRun && developPhase && offPositions) {
          const boxFade = Math.min(routeT * 2.5, 1);
          this._drawBoxZoneOnly(offPositions, boxFade);
        }

        // Draw route trails
        if (developPhase) {
          for (const p of players) {
            if (p.isOL || p.path.length === 0) continue;
            if (!this._isVisible(p.key, visibleGroups)) continue;
            const routeColor = (playData.isRun && !p.isQB) ? BALL_COLOR : ROUTE_COLOR;
            this.drawRoute(p.startPos[0], p.startPos[1], p.path, routeColor, routeT, 2, p.routeName === 'block');
            if (routeT > 0.3 && !p.isQB && p.routeName !== 'block') {
              this._drawRouteLabel(p, routeT);
            }
          }
        }

        // Draw players moving along routes
        for (const p of players) {
          const vis = this._isVisible(p.key, visibleGroups);
          let x, y;
          if (p.isOL) {
            const olT = developPhase ? Math.min(moveT * 2, 1) : 0;
            x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * olT;
            y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * olT;
          } else {
            x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * (developPhase ? moveT : 0);
            y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * (developPhase ? moveT : 0);
          }
          if (!vis) { this.ctx.globalAlpha = 0.15; }
          if (developPhase && !p.isOL && vis) this._drawGlow(x, y, p.isQB ? BALL_COLOR : OFF_COLOR, p.size + 3);
          this.drawPlayer(x, y, p.color, vis ? p.label : '', p.size);
          this.ctx.globalAlpha = 1;
        }

        // Ball flight
        if (!playData.isRun && playData.ball_target && lateT > 0 && lateT < 1) {
          const targetPlayer = players.find(p => p.key === playData.ball_target);
          const qbPlayer = players.find(p => p.isQB);
          if (targetPlayer && qbPlayer) {
            const qx = qbPlayer.endPos[0], qy = qbPlayer.endPos[1];
            const tx = targetPlayer.endPos[0], ty = targetPlayer.endPos[1];
            const bx = (qx + (tx - qx) * lateT) * this.width;
            const by = (qy + (ty - qy) * lateT) * this.height;
            this.ctx.fillStyle = BALL_COLOR;
            this.ctx.beginPath();
            this.ctx.ellipse(bx, by, 5, 3, Math.atan2(ty - qy, tx - qx), 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#92400e'; this.ctx.lineWidth = 1; this.ctx.stroke();
          }
        }
      } else if (!isOff && coverageData) {
        // Draw zones
        if (coverageData.type === 'zone' && developPhase) {
          const zoneFade = Math.min(routeT * 2, 1);
          for (const zone of coverageData.zones) {
            this.drawZone(zone, 0.14 * zoneFade);
          }
          if (zoneFade > 0.5) this._drawZoneLabels(coverageData.zones, zoneFade);
        }
        // Draw defenders moving
        for (const p of players) {
          const vis = this._isVisible(p.key, visibleGroups);
          const mt = p.isDL ? Math.min(moveT * 1.5, 1) : moveT;
          const x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * (developPhase ? mt : 0);
          const y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * (developPhase ? mt : 0);
          if (!vis) { this.ctx.globalAlpha = 0.15; }
          if (developPhase && vis) this._drawGlow(x, y, DEF_COLOR, p.size + 3);
          this.drawPlayer(x, y, p.color, vis ? p.label : '', p.size);
          this.ctx.globalAlpha = 1;
        }
      }

      // Play name label
      const ctx = this.ctx;
      const label = isOff ? (playFamily || '') : (coverageName || '');
      if (label && t > 0.05) {
        ctx.globalAlpha = Math.min((t - 0.05) * 5, 0.8);
        ctx.fillStyle = isOff ? OFF_COLOR : DEF_COLOR;
        ctx.font = `bold ${Math.max(10, this.width * 0.04)}px system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(label, this.width / 2, 6);
        ctx.globalAlpha = 1;
      }

      if (t < 1) {
        this.animFrame = requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
        this._loopTimeout = setTimeout(() => {
          if (this.canvas.isConnected) {
            this.renderSinglePlayLive({ mode, offFormation, offSubFormation, playFamily, defFormation, coverageName, duration });
          }
        }, 1200);
      }
    };

    this.animFrame = requestAnimationFrame(animate);
  }

  stop() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    if (this._loopTimeout) clearTimeout(this._loopTimeout);
    this.isAnimating = false;
  }

  destroy() {
    this.stop();
  }
}

export { PlayArtRenderer, PLAY_ROUTES, COVERAGE_ZONES, OFFENSE_POSITIONS, DEFENSE_POSITIONS };
