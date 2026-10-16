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

// ===== DYNAMIC FORMATION POSITION GENERATOR =====
// Builds player positions from formation + sub-formation names using NFL logic
// Handles all 392+ offensive and 100+ defensive sub-formations dynamically

const OL_BASE = { LT: [0.32, 0.62], LG: [0.39, 0.62], C: [0.5, 0.62], RG: [0.61, 0.62], RT: [0.68, 0.62] };
const OL_TIGHT = { LT: [0.30, 0.62], LG: [0.38, 0.62], C: [0.5, 0.62], RG: [0.62, 0.62], RT: [0.70, 0.62] };
const OL_WIDE = { LT: [0.28, 0.62], LG: [0.36, 0.62], C: [0.5, 0.62], RG: [0.64, 0.62], RT: [0.72, 0.62] };

// Build offensive positions dynamically from formation + subFormation names
function buildOffensePositions(formation, subFormation) {
  const form = (formation || '').toLowerCase();
  const sub = (subFormation || '').toLowerCase();
  const full = form + ' ' + sub;

  // OL base
  const isGoalLine = form.includes('goal');
  const isTight = sub.includes('tight') || sub.includes('close') || isGoalLine;
  const ol = isGoalLine ? { ...OL_WIDE } : (isTight ? { ...OL_TIGHT } : { ...OL_BASE });
  const pos = { ...ol };

  // QB depth based on formation type
  if (form === 'gun' || form === 'shotgun') {
    pos.QB = [0.5, 0.72];
  } else if (form === 'pistol') {
    pos.QB = [0.5, 0.68];
  } else {
    // Under center: Singleback, I Form, Strong, Weak, Split Backs, etc.
    pos.QB = [0.5, 0.65];
  }

  // Determine if empty backfield
  const isEmpty = sub.includes('empty') || sub.includes('5wr');

  // Determine backfield
  if (isGoalLine) {
    pos.FB = [0.45, 0.75];
    pos.RB = [0.5, 0.82];
    pos.TE1 = [0.22, 0.62];
    pos.TE2 = [0.78, 0.62];
    pos.WR1 = [0.92, 0.58];
    return pos;
  }

  if (form === 'hail mary') {
    pos.QB = [0.5, 0.72];
    pos.WR1 = [0.08, 0.58];
    pos.WR2 = [0.30, 0.58];
    pos.WR3 = [0.50, 0.58];
    pos.WR4 = [0.70, 0.58];
    pos.WR5 = [0.92, 0.58];
    return pos;
  }

  if (form === 'wildcat') {
    pos.QB = [0.20, 0.62]; // QB splits out as WR
    pos.RB = [0.5, 0.72]; // RB takes direct snap
    pos.WR1 = [0.06, 0.58];
    pos.WR2 = [0.92, 0.58];
    pos.WR3 = [0.80, 0.58];
    pos.TE = [0.75, 0.62];
    return pos;
  }

  // I Form / Strong I / Power I / Maryland I
  const isIForm = form.includes('i form') || form === 'strong i' || form === 'power i' || form === 'maryland i';
  if (isIForm) {
    pos.QB = [0.5, 0.65];
    pos.FB = [0.5, 0.73];
    pos.RB = [0.5, 0.80];
    if (form === 'power i' || form === 'maryland i') {
      pos.FB = [0.48, 0.73];
    }
    // Receivers
    if (sub.includes('ace') || sub.includes('tight')) {
      pos.TE1 = [0.25, 0.62]; pos.TE2 = [0.75, 0.62];
      pos.WR1 = [0.08, 0.58];
    } else if (sub.includes('slot')) {
      pos.TE = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    } else {
      // Pro default
      pos.TE = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    }
    return pos;
  }

  // Strong / Near
  if (form === 'strong' || form === 'near') {
    pos.QB = [0.5, 0.65];
    pos.FB = [0.56, 0.73];
    pos.RB = [0.5, 0.80];
    if (sub.includes('slot')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.92, 0.58];
    } else {
      pos.TE = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    }
    if (sub.includes('wing')) { pos.TE = [0.74, 0.64]; }
    return pos;
  }

  // Weak / Far
  if (form === 'weak' || form === 'far' || form === 'weak i') {
    pos.QB = [0.5, 0.65];
    pos.FB = [0.44, 0.73];
    pos.RB = [0.5, 0.80];
    if (sub.includes('slot')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.78, 0.58]; pos.WR3 = [0.92, 0.58];
    } else {
      pos.TE = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    }
    return pos;
  }

  // Full House / Split Backs / Split T
  if (form === 'full house' || form === 'split backs' || form === 'split t') {
    pos.QB = [0.5, 0.65];
    pos.RB = [0.44, 0.76];
    pos.FB = [0.56, 0.76];
    pos.TE = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    if (sub.includes('wide')) { pos.WR3 = [0.22, 0.58]; }
    return pos;
  }

  // === GUN / SHOTGUN / PISTOL / SINGLEBACK with dynamic receiver placement ===
  const isGun = form === 'gun' || form === 'shotgun';
  const isPistol = form === 'pistol';
  const isSingleback = form === 'singleback';

  // Backfield
  if (!isEmpty) {
    if (isGun) {
      // RB position varies
      if (sub.includes('hb str') || sub.includes('hb strong')) pos.RB = [0.58, 0.78];
      else if (sub.includes('hb wk') || sub.includes('hb weak')) pos.RB = [0.42, 0.78];
      else if (sub.includes('split') && sub.includes('backfield')) {
        pos.RB = [0.44, 0.78]; pos.FB = [0.56, 0.78];
        pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.WR3 = [0.92, 0.58];
        return pos;
      }
      else if (sub.includes('box')) pos.RB = [0.50, 0.78];
      else pos.RB = [0.42, 0.78];
    } else if (isPistol) {
      pos.RB = [0.5, 0.78];
    } else if (isSingleback) {
      pos.RB = [0.5, 0.76];
    }
  }

  // Count available receiver slots (11 players - 5 OL - 1 QB - backfield)
  const backfieldCount = isEmpty ? 0 : (pos.FB ? 2 : 1);
  const receiverSlots = 11 - 5 - 1 - backfieldCount;

  // Determine receiver distribution from sub-formation name
  const hasBunch = sub.includes('bunch');
  const hasTrips = sub.includes('trips') || sub.includes('trey') || sub.includes('trio');
  const hasQuads = sub.includes('quads') || sub.includes('4wr');
  const hasDoubles = sub.includes('doubles') || sub.includes('dbls');
  const hasCluster = sub.includes('cluster');
  const hasStack = sub.includes('stack');
  const hasSpread = sub.includes('spread') || sub.includes('flex');
  const hasSplit = sub.includes('split');
  const hasAce = sub.includes('ace');
  const hasWing = sub.includes('wing');
  const hasTE = sub.includes(' te') || sub.includes('tight') || sub.includes('y off') || sub.includes('y-flex') || sub.includes('deuce') || sub.includes('ace');
  const hasNormal = sub.includes('normal') || sub.includes('off ') || sub === '';

  // Wing formation adds a wing TE
  if (hasWing && isSingleback) {
    pos.TE = [0.74, 0.64];
    if (sub.includes('pair')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('slot')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.58]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('close')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.58]; pos.WR3 = [0.92, 0.58];
    } else {
      // Default wing - 3 WR + TE
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.92, 0.58];
    }
    return pos;
  }

  // Empty formations - 5 receivers, no RB
  if (isEmpty) {
    if (hasBunch) {
      if (hasQuads) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.76, 0.56]; pos.WR3 = [0.80, 0.60]; pos.WR4 = [0.84, 0.56]; pos.WR5 = [0.94, 0.58];
      } else if (sub.includes('wide')) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.20, 0.58]; pos.TE = [0.78, 0.56]; pos.WR3 = [0.82, 0.60]; pos.WR4 = [0.86, 0.56];
      } else if (sub.includes('open')) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.20, 0.58]; pos.WR3 = [0.74, 0.56]; pos.WR4 = [0.80, 0.60]; pos.WR5 = [0.94, 0.58];
      } else {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.58]; pos.TE = [0.78, 0.56]; pos.WR3 = [0.82, 0.60]; pos.WR4 = [0.86, 0.56];
      }
    } else if (hasTrips || sub.includes('trey')) {
      if (hasStack) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.20, 0.58]; pos.WR3 = [0.80, 0.54]; pos.WR4 = [0.80, 0.60]; pos.WR5 = [0.94, 0.58];
      } else {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.58]; pos.TE = [0.72, 0.62]; pos.WR3 = [0.82, 0.56]; pos.WR4 = [0.94, 0.56];
      }
    } else if (hasQuads) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.72, 0.58]; pos.WR3 = [0.78, 0.56]; pos.WR4 = [0.84, 0.58]; pos.WR5 = [0.94, 0.58];
    } else if (sub.includes('chips')) {
      // Chips = compressed, inline receivers
      if (sub.includes('quads')) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.72, 0.60]; pos.WR3 = [0.76, 0.58]; pos.WR4 = [0.82, 0.60]; pos.WR5 = [0.94, 0.58];
      } else if (sub.includes('nasty')) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.18, 0.60]; pos.WR3 = [0.24, 0.58]; pos.WR4 = [0.82, 0.60]; pos.WR5 = [0.94, 0.58];
      } else if (sub.includes('tight')) {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.72, 0.62]; pos.WR3 = [0.78, 0.60]; pos.WR4 = [0.84, 0.62]; pos.WR5 = [0.94, 0.58];
      } else {
        pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.72, 0.60]; pos.WR4 = [0.78, 0.58]; pos.WR5 = [0.94, 0.58];
      }
    } else if (sub.includes('ace')) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.24, 0.58]; pos.TE = [0.72, 0.62]; pos.WR3 = [0.76, 0.58]; pos.WR4 = [0.94, 0.58];
    } else if (sub.includes('slot')) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.50, 0.56]; pos.WR4 = [0.78, 0.58]; pos.WR5 = [0.94, 0.58];
    } else if (sub.includes('base')) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.72, 0.62]; pos.WR4 = [0.82, 0.58]; pos.WR5 = [0.94, 0.58];
    } else if (sub.includes('sketch')) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.56]; pos.WR3 = [0.22, 0.62]; pos.WR4 = [0.78, 0.58]; pos.WR5 = [0.94, 0.58];
    } else if (sub.includes('strong')) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.72, 0.58]; pos.WR3 = [0.78, 0.56]; pos.WR4 = [0.86, 0.58]; pos.WR5 = [0.94, 0.58];
    } else if (sub.includes('hb wide')) {
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.50, 0.58]; pos.WR4 = [0.78, 0.58]; pos.WR5 = [0.94, 0.58];
    } else {
      // Default empty 5-wide spread
      pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.50, 0.56]; pos.WR4 = [0.76, 0.58]; pos.WR5 = [0.94, 0.58];
    }
    return pos;
  }

  // === NON-EMPTY RECEIVER PLACEMENT ===

  // Bunch formations
  if (hasBunch) {
    pos.WR1 = [0.08, 0.58];
    if (sub.includes('quads')) {
      pos.WR2 = [0.72, 0.56]; pos.WR3 = [0.80, 0.60]; pos.WR4 = [0.88, 0.56];
    } else if (sub.includes('wide')) {
      pos.TE = [0.76, 0.56]; pos.WR2 = [0.80, 0.60]; pos.WR3 = [0.86, 0.56];
    } else if (sub.includes('open')) {
      if (sub.includes('te')) {
        pos.TE = [0.72, 0.62]; pos.WR2 = [0.78, 0.56]; pos.WR3 = [0.84, 0.58];
      } else if (sub.includes('offset')) {
        pos.WR2 = [0.74, 0.56]; pos.WR3 = [0.80, 0.60]; pos.WR4 = [0.94, 0.58];
      } else {
        pos.WR2 = [0.76, 0.56]; pos.WR3 = [0.80, 0.60]; pos.WR4 = [0.94, 0.58];
      }
    } else if (sub.includes('spread')) {
      pos.WR2 = [0.22, 0.58]; pos.TE = [0.78, 0.56]; pos.WR3 = [0.86, 0.58];
    } else if (sub.includes('str') || sub.includes('strong')) {
      pos.WR2 = [0.78, 0.56]; pos.WR3 = [0.82, 0.60]; pos.WR4 = [0.86, 0.56];
    } else if (sub.includes('te')) {
      pos.TE = [0.72, 0.62]; pos.WR2 = [0.80, 0.56]; pos.WR3 = [0.88, 0.56];
    } else if (sub.includes('y-trips') || sub.includes('trio')) {
      pos.TE = [0.72, 0.62]; pos.WR2 = [0.82, 0.56]; pos.WR3 = [0.92, 0.56];
    } else if (sub.includes('y-flex')) {
      pos.TE = [0.72, 0.58]; pos.WR2 = [0.82, 0.56]; pos.WR3 = [0.92, 0.58];
    } else {
      pos.TE = [0.78, 0.56]; pos.WR2 = [0.82, 0.60]; pos.WR3 = [0.86, 0.56];
    }
    return pos;
  }

  // Cluster
  if (hasCluster) {
    pos.WR1 = [0.08, 0.58];
    pos.WR2 = [0.22, 0.54]; pos.WR3 = [0.26, 0.60]; pos.WR4 = [0.92, 0.58];
    if (sub.includes('hb str')) { pos.RB = [0.58, 0.78]; }
    return pos;
  }

  // Quads (without bunch)
  if (hasQuads) {
    pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.72, 0.58]; pos.WR3 = [0.80, 0.56]; pos.WR4 = [0.92, 0.58];
    return pos;
  }

  // Trips / Trey / Trio
  if (hasTrips) {
    pos.WR1 = [0.08, 0.58];
    if (sub.includes('te')) {
      pos.TE = [0.72, 0.62]; pos.WR2 = [0.82, 0.56]; pos.WR3 = [0.92, 0.56];
    } else if (sub.includes('open')) {
      pos.WR2 = [0.74, 0.56]; pos.WR3 = [0.82, 0.58]; pos.WR4 = [0.94, 0.58];
    } else if (sub.includes('strong') || sub.includes('str')) {
      pos.WR2 = [0.74, 0.58]; pos.WR3 = [0.82, 0.56]; pos.WR4 = [0.92, 0.56];
    } else if (sub.includes('wk') || sub.includes('weak')) {
      pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.82, 0.56]; pos.WR4 = [0.92, 0.56];
    } else {
      pos.TE = [0.72, 0.62]; pos.WR2 = [0.82, 0.56]; pos.WR3 = [0.92, 0.56];
    }
    return pos;
  }

  // Doubles (2x2)
  if (hasDoubles) {
    if (sub.includes('y off') || sub.includes('y-flex')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.TE = [0.72, 0.58]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('flex')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.76, 0.58]; pos.WR4 = [0.92, 0.58];
    } else if (sub.includes('hip')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.TE = [0.72, 0.62]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('off close') || sub.includes('z close')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.78, 0.58]; pos.WR4 = [0.92, 0.58];
    } else if (sub.includes('stack')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.08, 0.54]; pos.WR3 = [0.92, 0.58]; pos.WR4 = [0.92, 0.54];
    } else if (sub.includes('clamp')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.20, 0.56]; pos.WR3 = [0.80, 0.56]; pos.WR4 = [0.92, 0.58];
    } else if (sub.includes('offset')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.24, 0.56]; pos.WR3 = [0.76, 0.56]; pos.WR4 = [0.92, 0.58];
    } else {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.TE = [0.72, 0.62]; pos.WR3 = [0.92, 0.58];
    }
    return pos;
  }

  // Stack
  if (hasStack && !hasDoubles) {
    pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.08, 0.54]; pos.WR3 = [0.92, 0.58]; pos.WR4 = [0.92, 0.54];
    return pos;
  }

  // Ace formations
  if (hasAce) {
    if (sub.includes('slot')) {
      pos.TE = [0.72, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('offset')) {
      pos.TE1 = [0.25, 0.62]; pos.TE2 = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    } else {
      pos.TE1 = [0.25, 0.62]; pos.TE2 = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    }
    return pos;
  }

  // Deuce formations
  if (sub.includes('deuce')) {
    pos.TE1 = [0.25, 0.62]; pos.TE2 = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    return pos;
  }

  // Wing TE
  if (hasWing) {
    pos.TE = [0.74, 0.64];
    if (sub.includes('close')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.58]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('pair')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.92, 0.58];
    } else {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.58]; pos.WR3 = [0.92, 0.58];
    }
    return pos;
  }

  // Singleback-specific sub-formations
  if (isSingleback) {
    if (sub.includes('bunch te')) {
      pos.TE = [0.72, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.80, 0.56]; pos.WR3 = [0.88, 0.56];
    } else if (sub.includes('bunch')) {
      pos.TE = [0.78, 0.56]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.60]; pos.WR3 = [0.86, 0.56];
    } else if (sub.includes('toad') || sub.includes('nasty')) {
      pos.TE = [0.72, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.58]; pos.WR3 = [0.92, 0.58];
    } else if (sub.includes('stack')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.78, 0.58]; pos.WR4 = [0.92, 0.58];
    } else if (sub.includes('off close')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.78, 0.58]; pos.WR4 = [0.92, 0.58];
    } else {
      // Default singleback: 1 TE, 3 WR
      pos.TE = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.24, 0.58]; pos.WR3 = [0.92, 0.58];
    }
    return pos;
  }

  // Pistol-specific
  if (isPistol) {
    if (sub.includes('strong') || sub.includes('ace')) {
      pos.TE1 = [0.25, 0.62]; pos.TE2 = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    } else if (sub.includes('bunch')) {
      pos.TE = [0.78, 0.56]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.60]; pos.WR3 = [0.86, 0.56];
    } else if (sub.includes('trips') || sub.includes('trey')) {
      pos.TE = [0.72, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.56]; pos.WR3 = [0.92, 0.56];
    } else if (sub.includes('flex') || sub.includes('spread')) {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.78, 0.58]; pos.WR4 = [0.92, 0.58];
    } else {
      pos.TE = [0.72, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.82, 0.56]; pos.WR3 = [0.92, 0.56];
    }
    return pos;
  }

  // === GUN/SHOTGUN - main formation ===
  // Normal / Y Off / Default
  if (sub.includes('normal') || sub.includes('y off') || sub.includes('y-flex') || sub.includes('y-option')) {
    pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.TE = [0.72, 0.58]; pos.WR3 = [0.92, 0.58];
    return pos;
  }

  // Split formations
  if (sub.includes('split') && !sub.includes('backfield')) {
    if (sub.includes('close')) {
      pos.WR1 = [0.10, 0.58]; pos.TE = [0.72, 0.62]; pos.WR2 = [0.28, 0.58]; pos.WR3 = [0.90, 0.58];
    } else {
      pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.WR3 = [0.75, 0.58]; pos.WR4 = [0.92, 0.58];
    }
    return pos;
  }

  // Spread
  if (hasSpread) {
    pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.78, 0.58]; pos.WR4 = [0.92, 0.58];
    return pos;
  }

  // Box formation (tight slot)
  if (sub.includes('box')) {
    pos.TE = [0.72, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.78, 0.58]; pos.WR3 = [0.92, 0.58];
    return pos;
  }

  // 5WR / 4WR
  if (sub.includes('5wr')) {
    pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.50, 0.56]; pos.WR4 = [0.78, 0.58]; pos.WR5 = [0.94, 0.58];
    delete pos.RB;
    return pos;
  }
  if (sub.includes('4wr')) {
    pos.WR1 = [0.06, 0.58]; pos.WR2 = [0.22, 0.58]; pos.WR3 = [0.78, 0.58]; pos.WR4 = [0.94, 0.58];
    return pos;
  }

  // TE-heavy formations
  if (sub.includes('tight') && isGun) {
    pos.TE1 = [0.25, 0.62]; pos.TE2 = [0.75, 0.62]; pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.92, 0.58];
    return pos;
  }

  // Default Gun: 2x2 with TE
  pos.WR1 = [0.08, 0.58]; pos.WR2 = [0.25, 0.58]; pos.TE = [0.72, 0.62]; pos.WR3 = [0.92, 0.58];
  return pos;
}

// Build defensive positions dynamically from formation + subFormation names
function buildDefensePositions(formation, subFormation) {
  const form = (formation || '').toLowerCase();
  const sub = (subFormation || '').toLowerCase();
  const full = form + ' ' + sub;

  // Goal Line
  if (form.includes('goal')) {
    if (sub.includes('6-2')) {
      return {
        DL1: [0.22, 0.56], DL2: [0.32, 0.56], DL3: [0.42, 0.56], DL4: [0.58, 0.56], DL5: [0.68, 0.56], DL6: [0.78, 0.56],
        LB1: [0.35, 0.48], LB2: [0.65, 0.48],
        CB1: [0.08, 0.42], CB2: [0.92, 0.42], S: [0.50, 0.30]
      };
    }
    if (sub.includes('pinch')) {
      return {
        DL1: [0.30, 0.56], DL2: [0.40, 0.56], DL3: [0.50, 0.56], DL4: [0.60, 0.56], DL5: [0.70, 0.56],
        LB1: [0.25, 0.48], LB2: [0.50, 0.48], LB3: [0.75, 0.48],
        CB1: [0.08, 0.42], CB2: [0.92, 0.42], S: [0.50, 0.30]
      };
    }
    // 5-3 default
    return {
      DL1: [0.25, 0.56], DL2: [0.38, 0.56], DL3: [0.50, 0.56], DL4: [0.62, 0.56], DL5: [0.75, 0.56],
      LB1: [0.30, 0.48], LB2: [0.50, 0.48], LB3: [0.70, 0.48],
      CB1: [0.08, 0.42], CB2: [0.92, 0.42], S: [0.50, 0.30]
    };
  }

  // Prevent
  if (form.includes('prevent')) {
    return {
      DE1: [0.30, 0.56], NT: [0.50, 0.56], DE2: [0.70, 0.56],
      LB: [0.50, 0.48],
      CB1: [0.06, 0.30], CB2: [0.94, 0.30], NCB1: [0.25, 0.32], NCB2: [0.75, 0.32],
      SS: [0.60, 0.18], FS: [0.40, 0.18], S: [0.50, 0.12]
    };
  }

  // Quarter / Dollar
  if (form.includes('quarter') || form.includes('dollar')) {
    return {
      DE1: [0.30, 0.56], NT: [0.50, 0.56], DE2: [0.70, 0.56],
      LB: [0.50, 0.48],
      CB1: [0.06, 0.40], NCB1: [0.22, 0.40], NCB2: [0.50, 0.40], NCB3: [0.78, 0.40], CB2: [0.94, 0.40],
      SS: [0.65, 0.25], FS: [0.42, 0.18]
    };
  }

  // Dime formations
  if (form.includes('dime') || form.includes('2-4-5') || form.includes('2-5')) {
    const isDblMug = full.includes('dbl mug') || full.includes('double mug');
    const isSingleMug = full.includes('single mug');

    if (isDblMug || full.includes('1-4')) {
      // 1-4 Dbl Mug: 1 DL, 4 LB-types mugged up at the LOS
      return {
        NT: [0.50, 0.56],
        LOLB: [0.34, 0.57], LB1: [0.42, 0.57], LB2: [0.58, 0.57], ROLB: [0.66, 0.57],
        CB1: [0.06, 0.42], NCB1: [0.22, 0.42], CB2: [0.94, 0.42], NCB2: [0.78, 0.42],
        SS: [0.65, 0.28], FS: [0.50, 0.18]
      };
    }
    if (isSingleMug) {
      return {
        LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
        LB: [0.50, 0.57],
        CB1: [0.06, 0.42], NCB1: [0.22, 0.42], CB2: [0.94, 0.42], NCB2: [0.78, 0.42],
        SS: [0.65, 0.28], FS: [0.50, 0.18]
      };
    }
    if (full.includes('3-2 odd')) {
      return {
        DE1: [0.30, 0.56], NT: [0.50, 0.56], DE2: [0.70, 0.56],
        LB1: [0.38, 0.48], LB2: [0.62, 0.48],
        CB1: [0.06, 0.42], NCB1: [0.22, 0.42], CB2: [0.94, 0.42], NCB2: [0.78, 0.42],
        SS: [0.65, 0.28], FS: [0.50, 0.18]
      };
    }
    // Default Dime
    return {
      LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
      LB: [0.50, 0.48],
      CB1: [0.06, 0.42], NCB1: [0.22, 0.42], NCB2: [0.78, 0.42], CB2: [0.94, 0.42],
      SS: [0.65, 0.28], FS: [0.50, 0.18]
    };
  }

  // Nickel formations (4 DL, 2 LB, 5 DB) or 3-3-5
  if (form.includes('nickel') || form.includes('3-3-5') || form.includes('4-2-5')) {
    const isDblMug = full.includes('dbl mug') || full.includes('double mug');
    const isSwapDblMug = full.includes('swap dbl mug') || full.includes('swap double mug');

    if (isDblMug || isSwapDblMug) {
      // Double Mug: 2 LBs mugged up at the LOS between DL
      return {
        LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
        LB1: [0.38, 0.57], LB2: [0.62, 0.57],
        CB1: [0.06, 0.42], NCB: [0.25, 0.42], CB2: [0.94, 0.42],
        SS: [0.65, 0.30], FS: [0.50, 0.20]
      };
    }
    if (full.includes('3-3') && !full.includes('3-3-5')) {
      // Nickel 3-3: 3 DL, 3 LBs
      const isCub = full.includes('cub');
      const isJack = full.includes('jack');
      const isWide = full.includes('wide');
      return {
        DE1: [0.28, 0.56], NT: [0.50, 0.56], DE2: [0.72, 0.56],
        LB1: [isCub ? 0.20 : 0.30, isCub ? 0.52 : 0.48],
        LB2: [0.50, 0.48],
        LB3: [isJack ? 0.80 : 0.70, isJack ? 0.52 : 0.48],
        CB1: [0.06, isWide ? 0.40 : 0.42], NCB: [0.25, 0.42], CB2: [0.94, isWide ? 0.40 : 0.42],
        SS: [0.65, 0.30], FS: [0.50, 0.20]
      };
    }
    if (full.includes('wide')) {
      return {
        LE: [0.20, 0.56], DT1: [0.40, 0.56], DT2: [0.60, 0.56], RE: [0.80, 0.56],
        LB1: [0.35, 0.48], LB2: [0.65, 0.48],
        CB1: [0.04, 0.40], NCB: [0.22, 0.40], CB2: [0.96, 0.40],
        SS: [0.65, 0.28], FS: [0.50, 0.18]
      };
    }
    if (full.includes('over g') || full.includes('4-2-5')) {
      return {
        LE: [0.22, 0.56], DT1: [0.38, 0.56], DT2: [0.55, 0.56], RE: [0.72, 0.56],
        LB1: [0.35, 0.48], LB2: [0.65, 0.48],
        CB1: [0.06, 0.42], NCB: [0.25, 0.42], CB2: [0.94, 0.42],
        SS: [0.65, 0.30], FS: [0.50, 0.20]
      };
    }
    // Default Nickel Over
    return {
      LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
      LB1: [0.35, 0.48], LB2: [0.65, 0.48],
      CB1: [0.06, 0.42], NCB: [0.25, 0.42], CB2: [0.94, 0.42],
      SS: [0.65, 0.30], FS: [0.50, 0.20]
    };
  }

  // 46 Defense
  if (form.includes('46')) {
    if (sub.includes('bear')) {
      return {
        LE: [0.22, 0.56], DT1: [0.36, 0.56], NT: [0.50, 0.56], DT2: [0.64, 0.56], RE: [0.78, 0.56],
        MLB: [0.48, 0.46], ROLB: [0.82, 0.48],
        CB1: [0.06, 0.42], CB2: [0.94, 0.42],
        SS: [0.62, 0.52], FS: [0.50, 0.22]
      };
    }
    return {
      LE: [0.22, 0.56], DT1: [0.38, 0.56], DT2: [0.55, 0.56], RE: [0.72, 0.56],
      LOLB: [0.15, 0.50], MLB: [0.48, 0.46], ROLB: [0.82, 0.50],
      CB1: [0.06, 0.42], CB2: [0.94, 0.42],
      SS: [0.62, 0.52], FS: [0.50, 0.22]
    };
  }

  // 5-2 Defense
  if (form.includes('5-2')) {
    return {
      LE: [0.22, 0.56], DT1: [0.36, 0.56], NT: [0.50, 0.56], DT2: [0.64, 0.56], RE: [0.78, 0.56],
      LB1: [0.35, 0.48], LB2: [0.65, 0.48],
      CB1: [0.06, 0.42], CB2: [0.94, 0.42],
      SS: [0.65, 0.32], FS: [0.50, 0.22]
    };
  }

  // 4-4 Defense
  if (form.includes('4-4')) {
    return {
      LE: [0.22, 0.56], DT1: [0.40, 0.56], DT2: [0.60, 0.56], RE: [0.78, 0.56],
      LOLB: [0.18, 0.50], ILB1: [0.40, 0.48], ILB2: [0.60, 0.48], ROLB: [0.82, 0.50],
      CB1: [0.06, 0.42], CB2: [0.94, 0.42], FS: [0.50, 0.22]
    };
  }

  // 4-3 Defense
  if (form.includes('4-3')) {
    if (sub.includes('under')) {
      return {
        LE: [0.28, 0.56], DT1: [0.42, 0.56], DT2: [0.60, 0.56], RE: [0.75, 0.56],
        LOLB: [0.15, 0.48], MLB: [0.48, 0.46], ROLB: [0.82, 0.48],
        CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.35, 0.32], FS: [0.50, 0.22]
      };
    }
    if (sub.includes('wide')) {
      return {
        LE: [0.20, 0.56], DT1: [0.38, 0.56], DT2: [0.62, 0.56], RE: [0.80, 0.56],
        LOLB: [0.15, 0.48], MLB: [0.50, 0.46], ROLB: [0.85, 0.48],
        CB1: [0.04, 0.42], CB2: [0.96, 0.42], SS: [0.65, 0.32], FS: [0.50, 0.22]
      };
    }
    if (sub.includes('odd')) {
      return {
        DE1: [0.28, 0.56], NT: [0.50, 0.56], DE2: [0.72, 0.56], RE: [0.82, 0.54],
        LOLB: [0.18, 0.48], MLB: [0.50, 0.46], ROLB: [0.82, 0.48],
        CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.32], FS: [0.50, 0.22]
      };
    }
    // Over (default), Solid, Even
    return {
      LE: [0.25, 0.56], DT1: [0.40, 0.56], DT2: [0.58, 0.56], RE: [0.72, 0.56],
      LOLB: [0.18, 0.48], MLB: [0.50, 0.46], ROLB: [0.80, 0.48],
      CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.32], FS: [0.50, 0.22]
    };
  }

  // 3-4 Defense
  if (form.includes('3-4')) {
    const isCub = sub.includes('cub');
    const isBear = sub.includes('bear');
    if (isBear) {
      return {
        DE1: [0.28, 0.56], NT: [0.50, 0.56], DE2: [0.72, 0.56],
        LOLB: [0.18, 0.54], ILB1: [0.40, 0.48], ILB2: [0.60, 0.48], ROLB: [0.82, 0.54],
        CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.35], FS: [0.50, 0.22]
      };
    }
    if (isCub) {
      return {
        DE1: [0.28, 0.56], NT: [0.50, 0.56], DE2: [0.72, 0.56],
        LOLB: [0.18, 0.52], ILB1: [0.38, 0.48], ILB2: [0.62, 0.48], ROLB: [0.82, 0.52],
        CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.35], FS: [0.50, 0.22]
      };
    }
    // Default 3-4 Odd
    return {
      DE1: [0.30, 0.56], NT: [0.50, 0.56], DE2: [0.70, 0.56],
      LOLB: [0.18, 0.50], ILB1: [0.40, 0.48], ILB2: [0.60, 0.48], ROLB: [0.82, 0.50],
      CB1: [0.06, 0.42], CB2: [0.94, 0.42], SS: [0.65, 0.35], FS: [0.50, 0.22]
    };
  }

  // Fallback: Nickel Over
  return {
    LE: [0.25, 0.56], DT1: [0.42, 0.56], DT2: [0.58, 0.56], RE: [0.75, 0.56],
    LB1: [0.35, 0.48], LB2: [0.65, 0.48],
    CB1: [0.06, 0.42], NCB: [0.25, 0.42], CB2: [0.94, 0.42],
    SS: [0.65, 0.30], FS: [0.50, 0.20]
  };
}

// Legacy constants kept for backward compatibility but not used by the dynamic system
const OFFENSE_POSITIONS = {};
const DEFENSE_POSITIONS = {};

// Route paths (waypoints as delta from start position, normalized)
const ROUTE_PATHS = {
  // Vertical routes
  'streak': [[0, -0.30]],
  'go': [[0, -0.30]],
  'fade': [[0.03, -0.30]],
  'seam': [[0, -0.26]],
  // Post family
  'post': [[0, -0.12], [-0.08, -0.18]],
  'deep_post': [[0, -0.16], [-0.06, -0.16]],
  'skinny_post': [[0, -0.10], [-0.03, -0.18]],
  'post_corner': [[0, -0.10], [-0.05, -0.10], [0.06, -0.12]],
  // Corner / Out family
  'corner': [[0, -0.12], [0.06, -0.18]],
  'deep_corner': [[0, -0.16], [0.06, -0.14]],
  'out': [[0, -0.10], [0.08, 0]],
  'deep_out': [[0, -0.14], [0.08, 0]],
  'speed_out': [[0.08, -0.04]],
  // In / Cross family
  'in': [[0, -0.10], [-0.08, 0]],
  'deep_in': [[0, -0.14], [-0.08, 0]],
  'dig': [[0, -0.14], [-0.08, 0]],
  'shallow_cross': [[0, -0.03], [0.18, -0.02]],
  'drag': [[0, -0.03], [0.22, 0]],
  'drag_left': [[0, -0.03], [-0.22, 0]],
  // Slant
  'slant': [[-0.06, -0.14]],
  // Curl / Comeback / Hitch
  'curl': [[0, -0.13], [0, 0.03]],
  'comeback': [[0, -0.14], [0.03, 0.04]],
  'hitch': [[0, -0.07], [0, 0.02]],
  // Flat / Swing / Check-down
  'flat': [[0.10, -0.03]],
  'flat_left': [[-0.10, -0.03]],
  'swing': [[0.06, 0.02], [0.08, -0.04]],
  'swing_left': [[-0.06, 0.02], [-0.08, -0.04]],
  'check_down': [[0.04, 0.01], [0.06, -0.03]],
  'texas': [[0.06, 0.02], [0.04, -0.14]],
  // Wheel / Whip / Angle
  'wheel': [[0.06, -0.02], [0.04, -0.26]],
  'whip': [[0, -0.06], [0.05, 0.03], [0.06, -0.04]],
  'angle': [[0.03, 0.03], [0.10, -0.10]],
  // Screen
  'screen': [[-0.04, 0.03], [-0.06, 0.01]],
  'screen_right': [[0.04, 0.03], [0.06, 0.01]],
  'screen_left': [[-0.04, 0.03], [-0.06, 0.01]],
  // Blocking
  'block': [],
  'pass_block': [[0, -0.01]],
  'lead_block': [[0.04, -0.08]],
  'stalk_block': [[0, -0.04]],
  'crack_block': [[-0.06, -0.06]],
  'zone_step_right': [[0.04, -0.04]],
  'zone_step_left': [[-0.04, -0.04]],
  'combo_block': [[0, -0.06]],
  // Run paths
  'run_right': [[0.10, -0.06]],
  'run_left': [[-0.10, -0.06]],
  'run_inside': [[0.02, -0.10]],
  'run_power': [[0.06, -0.10]],
  'run_counter': [[-0.04, -0.02], [0.08, -0.10]],
  'run_stretch': [[0.16, -0.04]],
  'run_dive': [[0.01, -0.07]],
  'run_outside': [[0.14, -0.05]],
  // Option / QB
  'option_give': [[0.08, -0.06]],
  'option_keep': [[-0.06, -0.08]],
  'qb_boot_right': [[0.16, 0.02], [0.04, -0.10]],
  'qb_boot_left': [[-0.16, 0.02], [-0.04, -0.10]],
  'qb_drop': [[0, 0.03]],
  'qb_scramble': [[-0.04, -0.08]],
  'qb_handoff': [[0, 0.02]],
  // OL movement
  'pull_left': [[-0.08, 0.0], [-0.06, -0.08]],
  'pull_right': [[0.08, 0.0], [0.06, -0.08]],
  'ol_release_right': [[0.10, -0.02], [0.05, -0.05]],
  'ol_release_left': [[-0.10, -0.02], [-0.05, -0.05]],
  // Defensive route paths
  'rush_a_gap': [[0, -0.08]],
  'rush_b_gap': [[0.04, -0.08]],
  'rush_c_gap': [[0.06, -0.06]],
  'rush_contain': [[0.08, -0.04]],
  'zone_hook': [[0, -0.06]],
  'zone_curl_flat': [[0.08, -0.04]],
  'zone_mid': [[0, -0.08]],
  'zone_flat': [[0.10, -0.02]],
  'zone_deep_third': [[0, -0.16]],
  'zone_deep_half': [[0, -0.18]],
  'zone_deep_middle': [[0, -0.20]],
  'press_man': [[0, -0.04]],
  'man_cover': [[0, -0.06]],
  'blitz_a': [[0, -0.12]],
  'blitz_b': [[0.04, -0.12]],
  'blitz_edge': [[0.08, -0.10]],
  // Defensive assignment paths
  'man_trail': [],
  'spy': [[0, -0.04]],
  'deep_middle': [[0, -0.18]],
  'deep_third': [[0, -0.16], [0.06, -0.04]],
  'deep_half': [[0, -0.16], [0.08, 0]],
  'hook_zone': [[0, -0.06], [-0.03, 0]],
  'curl_flat': [[0.06, -0.04]],
  'flat_zone': [[0.10, -0.02]],
  'robber': [[0, -0.08]]
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
  'Inverted Cover 2': { zones: ['deep_half_left', 'deep_half_right', 'hook_left', 'hook_right', 'flat_left', 'flat_right'], type: 'zone' }
};

// Defensive assignment mappings per coverage type
const DEF_ASSIGNMENTS = {
  'Cover 0': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'man_trail', FS: 'man_trail',
    LB1: 'blitz_a', LB2: 'blitz_b', LB3: 'blitz_b',
    LOLB: 'blitz_edge', ROLB: 'blitz_edge',
    ILB1: 'blitz_a', ILB2: 'blitz_b', MLB: 'blitz_a'
  },
  'Cover 1': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'man_trail', FS: 'deep_middle',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'curl_flat',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 1 Robber': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'robber', FS: 'deep_middle',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'curl_flat',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 1 Hole': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'robber', FS: 'deep_middle',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'curl_flat',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Zone': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Man': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'man_trail', ROLB: 'man_trail',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Invert': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Sink': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Press': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'man_trail', ROLB: 'man_trail',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Hard Flat': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'flat_zone', ROLB: 'flat_zone',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 2 Lurk': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'robber', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'robber'
  },
  'Cover 3': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'curl_flat', NCB1: 'curl_flat', NCB2: 'curl_flat',
    SS: 'curl_flat', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 3 Sky': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'curl_flat', NCB1: 'curl_flat', NCB2: 'curl_flat',
    SS: 'flat_zone', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 3 Cloud': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'curl_flat', NCB1: 'curl_flat', NCB2: 'curl_flat',
    SS: 'deep_third', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'deep_third',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 3 Buzz': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'hook_zone', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 3 Match': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'curl_flat', NCB1: 'curl_flat', NCB2: 'curl_flat',
    SS: 'curl_flat', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 4': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_third', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 4 Palms': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_third', FS: 'deep_third',
    LB1: 'curl_flat', LB2: 'curl_flat', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 4 Drop': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'curl_flat', NCB1: 'curl_flat', NCB2: 'curl_flat',
    SS: 'deep_third', FS: 'deep_third',
    LB1: 'curl_flat', LB2: 'curl_flat', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 6': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_third',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'curl_flat',
    LOLB: 'curl_flat', ROLB: 'flat_zone',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Cover 9': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'man_trail', LB2: 'man_trail', LB3: 'man_trail',
    LOLB: 'man_trail', ROLB: 'man_trail',
    ILB1: 'man_trail', ILB2: 'man_trail', MLB: 'man_trail'
  },
  'Tampa 2': {
    CB1: 'flat_zone', CB2: 'flat_zone',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'deep_middle'
  },
  'Prevent': {
    CB1: 'deep_third', CB2: 'deep_third',
    NCB: 'deep_third', NCB1: 'deep_third', NCB2: 'deep_third',
    SS: 'deep_half', FS: 'deep_half',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'deep_middle', ILB2: 'hook_zone', MLB: 'deep_middle'
  },
  'Mid Blitz': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'man_trail', FS: 'man_trail',
    LB1: 'blitz_a', LB2: 'blitz_b', LB3: 'blitz_b',
    LOLB: 'blitz_edge', ROLB: 'blitz_edge',
    ILB1: 'blitz_a', ILB2: 'blitz_b', MLB: 'blitz_a'
  },
  'Edge Blitz': {
    CB1: 'man_trail', CB2: 'man_trail', CB3: 'man_trail', CB4: 'man_trail',
    NCB: 'man_trail', NCB1: 'man_trail', NCB2: 'man_trail',
    SS: 'blitz_edge', FS: 'deep_middle',
    LB1: 'hook_zone', LB2: 'blitz_edge', LB3: 'hook_zone',
    LOLB: 'blitz_edge', ROLB: 'blitz_edge',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  },
  'Inverted Cover 2': {
    CB1: 'deep_half', CB2: 'deep_half',
    NCB: 'hook_zone', NCB1: 'hook_zone', NCB2: 'hook_zone',
    SS: 'flat_zone', FS: 'flat_zone',
    LB1: 'hook_zone', LB2: 'hook_zone', LB3: 'hook_zone',
    LOLB: 'curl_flat', ROLB: 'curl_flat',
    ILB1: 'hook_zone', ILB2: 'hook_zone', MLB: 'hook_zone'
  }
};

// Helper to look up defensive assignment for a coverage
function getDefAssignment(coverageName, defKey) {
  if (!coverageName) return null;
  if (DEF_ASSIGNMENTS[coverageName]) {
    return DEF_ASSIGNMENTS[coverageName][defKey] || null;
  }
  const lower = coverageName.toLowerCase().replace(/\s*-\s*(nickel|dime|quarter|3-3|4-2|dollar)\s*\d*$/, '').trim();
  // Huddle.gg format: leading number = Cover X
  const numPrefix = lower.match(/^(\d)\s/);
  if (numPrefix) {
    const expanded = 'Cover ' + numPrefix[1];
    const remainder = lower.substring(2).trim();
    const keys = Object.keys(DEF_ASSIGNMENTS).sort((a, b) => b.length - a.length);
    for (const key of keys) {
      const kl = key.toLowerCase();
      if (kl.startsWith(expanded.toLowerCase()) && remainder.split(/\s+/).some(w => kl.includes(w))) {
        return DEF_ASSIGNMENTS[key][defKey] || null;
      }
    }
    // Fallback to base Cover X
    for (const key of keys) {
      if (key.toLowerCase().startsWith(expanded.toLowerCase())) {
        return DEF_ASSIGNMENTS[key][defKey] || null;
      }
    }
  }
  // Special names
  if (lower.includes('blitz') || lower.includes('fire zone')) {
    return (DEF_ASSIGNMENTS['Mid Blitz'] || {})[defKey] || null;
  }
  if (lower.includes('tampa')) return (DEF_ASSIGNMENTS['Tampa 2'] || {})[defKey] || null;
  // Longest key match
  const keys = Object.keys(DEF_ASSIGNMENTS).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    const kl = key.toLowerCase();
    if (lower.includes(kl) || kl.includes(lower)) {
      return DEF_ASSIGNMENTS[key][defKey] || null;
    }
  }
  return null;
}

// Check if a defensive assignment is a blitz type
function isBlitzAssignment(assignment) {
  return assignment === 'blitz_a' || assignment === 'blitz_b' || assignment === 'blitz_edge';
}

// Play route assignments per play family
const PLAY_ROUTES = {
  'Four Verticals': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  '4 Verticals': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Crossers': {
    routes: { WR1: 'shallow_cross', WR2: 'deep_post', WR3: 'deep_in', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Mesh': {
    routes: { WR1: 'go', WR2: 'shallow_cross', WR3: 'drag_left', WR4: 'go', TE: 'drag', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2', motion: { player: 'WR3', path: [[-0.15, 0]] }
  },
  'Levels': {
    routes: { WR1: 'go', WR2: 'deep_in', WR3: 'shallow_cross', WR4: 'curl', TE: 'seam', RB: 'swing' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Flood': {
    routes: { WR1: 'go', WR2: 'deep_corner', WR3: 'out', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
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
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen_left' },
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
    routes: { WR1: 'deep_corner', WR2: 'hitch', WR3: 'go', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Inside Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', LT: 'zone_step_right', LG: 'zone_step_right', C: 'combo_block', RG: 'zone_step_right', RT: 'zone_step_right' },
    qb: 'qb_handoff', isRun: true
  },
  'Outside Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside', LT: 'zone_step_right', LG: 'zone_step_right', C: 'zone_step_right', RG: 'zone_step_right', RT: 'zone_step_right' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Stretch': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch', LT: 'zone_step_right', LG: 'zone_step_right', C: 'zone_step_right', RG: 'zone_step_right', RT: 'zone_step_right' },
    qb: 'qb_handoff', isRun: true
  },
  'Power O': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power', FB: 'lead_block', LG: 'pass_block', RG: 'pull_left', C: 'pass_block', LT: 'pass_block', RT: 'pass_block' },
    qb: 'qb_handoff', isRun: true
  },
  'Counter': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_counter', FB: 'run_power', RG: 'pull_left', RT: 'pull_left', LT: 'pass_block', LG: 'pass_block', C: 'pass_block' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Dive': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_dive', FB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Toss': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Toss Crack': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.12, 0]] }
  },
  'HB Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Read Option': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'Jet Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.20, 0]] }
  },
  'Jet Sweep Touch': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.20, 0]] }
  },
  'QB Sneak': {
    routes: { RB: 'block', FB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
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
    routes: { WR1: 'shallow_cross', WR2: 'deep_corner', WR3: 'flat', TE: 'dig', RB: 'block', FB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2', motion: { player: 'TE', path: [[0.10, 0]] }
  },
  'FB Dive': {
    routes: { FB: 'run_dive', RB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'qb_drop', isRun: true
  },
  'Tush Push': {
    routes: { FB: 'run_dive', RB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'run_dive', isRun: true
  },
  'Wide Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch', LT: 'zone_step_right', LG: 'zone_step_right', C: 'zone_step_right', RG: 'zone_step_right', RT: 'zone_step_right' },
    qb: 'qb_handoff', isRun: true
  },
  'Split Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', FB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'Duo': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Trap': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', RG: 'pull_left', LT: 'pass_block', LG: 'pass_block', C: 'pass_block', RT: 'pass_block' },
    qb: 'qb_handoff', isRun: true
  },
  'Wham': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', FB: 'lead_block' },
    qb: 'qb_handoff', isRun: true
  },
  'ISO': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', FB: 'lead_block' },
    qb: 'qb_handoff', isRun: true
  },
  'Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'End Around': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR3', path: [[-0.25, 0]] }
  },
  'QB Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'run_inside', isRun: true
  },
  'QB Power': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power', FB: 'run_power' },
    qb: 'run_power', isRun: true
  },
  'QB Scramble': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'streak', WR4: 'curl', TE: 'block', RB: 'block' },
    qb: 'qb_scramble', isRun: true
  },
  'Power Read': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'Speed Option': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'option_keep', isRun: true
  },
  'Triple Option': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give', FB: 'run_dive' },
    qb: 'option_keep', isRun: true
  },
  'Inverted Veer': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
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
    routes: { WR1: 'skinny_post', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Double Post': {
    routes: { WR1: 'deep_post', WR2: 'skinny_post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Post Corner': {
    routes: { WR1: 'deep_corner', WR2: 'post_corner', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Read': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Scissors': {
    routes: { WR1: 'deep_post', WR2: 'deep_corner', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
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
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'dig', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Mills': {
    routes: { WR1: 'skinny_post', WR2: 'dig', WR3: 'corner', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Bench': {
    routes: { WR1: 'curl', WR2: 'speed_out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Sail': {
    routes: { WR1: 'streak', WR2: 'deep_corner', WR3: 'out', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Dig Under': {
    routes: { WR1: 'dig', WR2: 'shallow_cross', WR3: 'streak', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Mesh Traffic': {
    routes: { WR1: 'skinny_post', WR2: 'shallow_cross', WR3: 'shallow_cross', WR4: 'streak', TE: 'dig', RB: 'flat' },
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
    routes: { WR1: 'streak', WR2: 'screen_right', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
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
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'RB', path: [[0.20, 0]] }
  },
  'Orbit Screen': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'HB Blast': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Slam': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Pitch': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
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
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_drop', isRun: true
  },
  'RPO Lookie': {
    routes: { WR1: 'out', WR2: 'slant', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Play Action': {
    routes: { WR1: 'go', WR2: 'deep_post', WR3: 'dig', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Cross': {
    routes: { WR1: 'deep_in', WR2: 'shallow_cross', WR3: 'deep_post', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1', motion: { player: 'TE', path: [[0.10, 0]] }
  },
  'PA Seams': {
    routes: { WR1: 'go', WR2: 'seam', WR3: 'seam', WR4: 'go', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Slide': {
    routes: { WR1: 'shallow_cross', WR2: 'curl', WR3: 'flat', WR4: 'go', TE: 'dig', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2', motion: { player: 'TE', path: [[0.08, 0]] }
  },
  'Verticals': {
    routes: { WR1: 'go', WR2: 'seam', WR3: 'seam', WR4: 'go', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Curl Combo': {
    routes: { WR1: 'curl', WR2: 'curl', WR3: 'curl', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Double Slants': {
    routes: { WR1: 'slant', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Levels Switch': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Trick Play': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Flea Flicker': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'streak', WR4: 'corner', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'HB Pass': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'streak', WR4: 'corner', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', ball_target: 'WR2'
  },
  'Philly Special': {
    routes: { WR1: 'flat', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'flat', ball_target: 'QB'
  },
  'Mid Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Pin Pull Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Jet Touch Pass': {
    routes: { WR1: 'streak', WR2: 'run_stretch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },

  // ===== PLAY ACTION VARIANTS =====
  'PA Counter': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Draw': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Rollout Left': {
    routes: { WR1: 'corner', WR2: 'flat_left', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_left', ball_target: 'WR1'
  },
  'PA Rollout Right': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'corner', WR4: 'flat', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR3'
  },
  'PA Waggle': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2', motion: { player: 'TE', path: [[0.10, 0]] }
  },
  'PA Counter Shot': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'seam', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Deep Cross': {
    routes: { WR1: 'in', WR2: 'streak', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Boot Left': {
    routes: { WR1: 'corner', WR2: 'flat_left', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_left', ball_target: 'WR1'
  },
  'PA Y Cross': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'PA X Post': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Stretch': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'in', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Inside Zone': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Outside Zone': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },

  // ===== MOTION / JET PLAYS =====
  'Jet Pass': {
    routes: { WR1: 'streak', WR2: 'run_stretch', WR3: 'slant', WR4: 'curl', TE: 'drag', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Motion Crossers': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Orbit Jet': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true
  },
  'Motion Drive': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Jet Motion Screen': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Motion Levels': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Shift Flood': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'out', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR3'
  },

  // ===== WEST COAST / AIR RAID CONCEPTS =====
  'Shallow Cross': {
    routes: { WR1: 'post', WR2: 'drag', WR3: 'in', WR4: 'streak', TE: 'drag', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Cross Dig': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Double Cross': {
    routes: { WR1: 'in', WR2: 'drag_left', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Mesh Spot': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'drag_left', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR4'
  },
  'Texas': {
    routes: { WR1: 'go', WR2: 'curl', WR3: 'go', WR4: 'go', TE: 'flat', RB: 'texas' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Whip': {
    routes: { WR1: 'whip', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'China': {
    routes: { WR1: 'go', WR2: 'deep_corner', WR3: 'flat', WR4: 'curl', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Scissors': {
    routes: { WR1: 'deep_post', WR2: 'deep_corner', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Y Stick': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'flat', WR4: 'streak', TE: 'out', RB: 'block' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Hoss Y Juke': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'flat', WR4: 'streak', TE: 'hitch', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Stick Nod': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Y Shallow Cross': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'drag', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Z Spot': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Smash Corner': {
    routes: { WR1: 'hitch', WR2: 'corner', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Y Cross': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Under Center Cross': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'in', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Deep Comeback': {
    routes: { WR1: 'comeback', WR2: 'comeback', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Double Out': {
    routes: { WR1: 'out', WR2: 'out', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Seam Read': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Y Sail': {
    routes: { WR1: 'go', WR2: 'go', WR3: 'deep_out', WR4: 'flat', TE: 'deep_corner', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Corner Post': {
    routes: { WR1: 'deep_post', WR2: 'deep_corner', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Post Wheel': {
    routes: { WR1: 'deep_post', WR2: 'streak', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'wheel' },
    qb: 'qb_drop', ball_target: 'WR1'
  },

  // ===== SCREEN PLAYS =====
  'TE Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'screen', RB: 'block' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Slip Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Slow Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Swing Screen': {
    routes: { WR1: 'streak', WR2: 'block', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'screen_right' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Flare Screen': {
    routes: { WR1: 'streak', WR2: 'block', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'screen_left' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'RB Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },

  // ===== WILDCAT / SPECIAL =====
  'Wildcat Power': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Wildcat Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Wildcat Counter': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'Wildcat Pass': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Wildcat Read': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'Direct Snap': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },

  // ===== DESIGNED QB RUNS =====
  'QB Counter': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'run_counter', isRun: true
  },
  'QB Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'run_stretch', isRun: true
  },
  'QB Zone Read': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'QB Follow': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', FB: 'run_inside' },
    qb: 'run_inside', isRun: true
  },
  'QB Blast': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'run_dive', isRun: true
  },
  'QB Wrap': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'run_power', isRun: true
  },
  'Designed Rollout': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'QB Option': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
    qb: 'option_keep', isRun: true
  },

  // ===== RUN & SHOOT CONCEPTS =====
  'Choice': {
    routes: { WR1: 'curl', WR2: 'in', WR3: 'out', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Switch': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'streak', WR4: 'drag_left', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Go': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Streak Right': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'curl', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR4'
  },
  'Streak Left': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'curl', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },

  // ===== ADDITIONAL RUN PLAYS =====
  'Inside Power': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Outside Power': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside', FB: 'run_outside' },
    qb: 'qb_handoff', isRun: true
  },
  'Lead Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside', FB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Lead Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch', FB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Guard Pull': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Center Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Buck Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Blast': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Stretch Right': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Stretch Left': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Inside Trap': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Counter Trey': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'Weak Dive': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },
  'Strong Dive': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },
  'FB Counter': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block', FB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'FB Toss': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block', FB: 'run_outside' },
    qb: 'qb_handoff', isRun: true
  },
  'Toss Strong': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Toss Weak': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Lead': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', FB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Weak': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Read': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },

  // ===== GOAL LINE / SHORT YARDAGE =====
  'Goal Line Power': {
    routes: { WR1: 'stalk_block', TE: 'block', TE1: 'block', TE2: 'block', RB: 'run_power', FB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Goal Line Dive': {
    routes: { WR1: 'stalk_block', TE: 'block', TE1: 'block', TE2: 'block', RB: 'run_dive', FB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },
  'Sneak Left': {
    routes: { RB: 'block', FB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'run_inside', isRun: true
  },
  'Sneak Right': {
    routes: { RB: 'block', FB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'run_inside', isRun: true
  },
  'Wedge': {
    routes: { WR1: 'stalk_block', TE: 'block', TE1: 'block', TE2: 'block', RB: 'run_dive', FB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },
  'QB Wedge': {
    routes: { RB: 'block', FB: 'block', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'run_dive', isRun: true
  },

  // ===== ADDITIONAL CONCEPTS =====
  'Dino': {
    routes: { WR1: 'in', WR2: 'out', WR3: 'streak', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Dragon': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Whip Route': {
    routes: { WR1: 'out', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'China Route': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'flat', WR4: 'curl', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Sail Concept': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'out', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Double Move': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Whip Screen': {
    routes: { WR1: 'screen', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'TE Angle': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'streak', WR4: 'streak', TE: 'angle', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'TE Seam': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'TE Corner': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'corner', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Slot Out': {
    routes: { WR1: 'go', WR2: 'speed_out', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Slot Post': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Slot Corner': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Drag Route': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Crosser': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'post', WR4: 'streak', TE: 'drag', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Levels Y': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Verticals Seam': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Curl Route': {
    routes: { WR1: 'curl', WR2: 'curl', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Hitch Screen': {
    routes: { WR1: 'hitch', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Out Route': {
    routes: { WR1: 'deep_out', WR2: 'curl', WR3: 'go', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'In Route': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Flat Route': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'streak', WR4: 'curl', TE: 'flat', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Angle Route': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'angle', RB: 'angle' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Wheel Route': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'flat', RB: 'wheel' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Seam Route': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Corner Route': {
    routes: { WR1: 'corner', WR2: 'hitch', WR3: 'streak', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Post Route': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Slant Route': {
    routes: { WR1: 'slant', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Flood Right': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'corner', WR4: 'flat', TE: 'seam', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR3'
  },
  'PA Flood Left': {
    routes: { WR1: 'flat_left', WR2: 'corner', WR3: 'drag_left', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_boot_left', ball_target: 'WR2'
  },
  'Stick Draw': {
    routes: { WR1: 'out', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Quick Out Flat': {
    routes: { WR1: 'out', WR2: 'flat', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Deep Dig': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'streak', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Slant Wheel': {
    routes: { WR1: 'slant', WR2: 'wheel', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Out and Up': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Hitch and Go': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Slot Fade': {
    routes: { WR1: 'streak', WR2: 'fade', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'HB Angle': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'flat', RB: 'angle' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Flat Wheel': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'flat', RB: 'wheel' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Spot Drop': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'flat_left' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Curl Seam': {
    routes: { WR1: 'curl', WR2: 'seam', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Quick Fade': {
    routes: { WR1: 'fade', WR2: 'slant', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Iso Power': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power', FB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Mid Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Off Tackle': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_handoff', isRun: true
  },
  'Reverse': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR3', path: [[-0.25, 0]] }
  },
  'HB Counter': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Stretch': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Power Left': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Power Right': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'Dive Left': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },
  'Dive Right': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_dive' },
    qb: 'qb_handoff', isRun: true
  },

  // ===== REAL MADDEN 27 PLAY NAMES - MTN (Motion), Orbit, PA, RPO, etc. =====

  // MTN (Motion) Plays - pre-snap motion then execute concept
  'MTN Bench': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Bench Snag N Go': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'corner', WR4: 'hitch', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'MTN China Cross': {
    routes: { WR1: 'drag', WR2: 'post', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Curls': {
    routes: { WR1: 'curl', WR2: 'curl', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN Dbl Swing': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN Drive': {
    routes: { WR1: 'in', WR2: 'flat', WR3: 'drag', WR4: 'curl', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1', motion: { player: 'WR2', path: [[-0.18, 0]] }
  },
  'MTN FK Screen Wheel': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'wheel', WR4: 'streak', TE: 'block', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN FK Swing': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'slant', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN FL Screen': {
    routes: { WR1: 'screen', WR2: 'block', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN H Zone Wk': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'MTN HB Choice': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'slant', WR4: 'streak', TE: 'seam', RB: 'angle' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN HB Cross Screen': {
    routes: { WR1: 'streak', WR2: 'block', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN HB Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'MTN HB Off Tackle': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'MTN HB Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN HB Toss': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'MTN HB Toss Crack': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.12, 0]] }
  },
  'MTN Inside Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.18, 0]] }
  },
  'MTN Mesh Spot': {
    routes: { WR1: 'drag', WR2: 'drag_left', WR3: 'curl', WR4: 'streak', TE: 'flat', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN Out H-Angle': {
    routes: { WR1: 'out', WR2: 'streak', WR3: 'angle', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN Outside Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.18, 0]] }
  },
  'MTN PA FK Slide': {
    routes: { WR1: 'in', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'MTN PA Flood Under': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'flat', WR4: 'drag', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'MTN PA Poco Slide': {
    routes: { WR1: 'post', WR2: 'corner', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN PA Read': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'MTN PA Slide': {
    routes: { WR1: 'in', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'MTN PA Spinner': {
    routes: { WR1: 'post', WR2: 'in', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN PA Verticals': {
    routes: { WR1: 'streak', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Replace': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Return Levels': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN Salem Slot Option': {
    routes: { WR1: 'streak', WR2: 'slant', WR3: 'out', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Scissors': {
    routes: { WR1: 'deep_post', WR2: 'deep_corner', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Shallow': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'in', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Shallow HB Angle': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'in', WR4: 'curl', TE: 'seam', RB: 'angle' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN Slot Choice': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'slant', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'MTN Slot Flags': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'corner', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Sluggo Replace': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN Smash': {
    routes: { WR1: 'hitch', WR2: 'corner', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2', motion: { player: 'WR2', path: [[-0.18, 0]] }
  },
  'MTN Smash Sluggo': {
    routes: { WR1: 'hitch', WR2: 'post', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Spacing': {
    routes: { WR1: 'hitch', WR2: 'out', WR3: 'flat', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'MTN Speed Dig Under': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'MTN Spinner HB Inside': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'MTN Spot': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'MTN Spot HB Under': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'drag' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'MTN WR Outside Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_handoff', isRun: true
  },
  'MTN Y Lead Read Option': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'option_give' },
    qb: 'option_keep', isRun: true
  },
  'MTN Y-Corner': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'corner', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'MTN Z Spot': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'MTN Zone Toss': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.20, 0]] }
  },
  'MTN Duo': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true, motion: { player: 'WR2', path: [[-0.18, 0]] }
  },

  // Orbit / Shuffle Motion Plays
  'Orbit Cross Screen': {
    routes: { WR1: 'streak', WR2: 'block', WR3: 'screen', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Orbit PA Curls': {
    routes: { WR1: 'curl', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Orbit PA HB Wheel': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'wheel' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Orbit PA Y Screen': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'screen', RB: 'block' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Orbit RPO Alert Screen': {
    routes: { WR1: 'slant', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Orbit RPO Alert Swing': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Orbit Screen': {
    routes: { WR1: 'streak', WR2: 'block', WR3: 'screen', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Shuffle MTN FK Screen Wheel': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'wheel', WR4: 'streak', TE: 'block', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Shuffle MTN HB Swing': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'slant', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Shuffle MTN Levels': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },

  // PA (Play Action) Variants
  'PA Boot LT': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', TE: 'in', RB: 'block', FB: 'block' },
    qb: 'qb_boot_left', ball_target: 'WR2'
  },
  'PA Boot Over': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Boot Shot': {
    routes: { WR1: 'post', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR1'
  },
  'PA Comeback Slide': {
    routes: { WR1: 'comeback', WR2: 'in', WR3: 'flat', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Counter Go': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Cross': {
    routes: { WR1: 'deep_in', WR2: 'drag', WR3: 'skinny_post', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3', motion: { player: 'TE', path: [[0.10, 0]] }
  },
  'PA Draw Shot': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Go Slot Cross': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Jet Sweep': {
    routes: { WR1: 'drag', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Power O': {
    routes: { WR1: 'streak', WR2: 'post', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Seams': {
    routes: { WR1: 'go', WR2: 'seam', WR3: 'seam', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'PA Shot Portland': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'corner', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA TE Flood': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'out', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'TE'
  },
  'PA WR In': {
    routes: { WR1: 'in', WR2: 'streak', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA X Dig': {
    routes: { WR1: 'in', WR2: 'streak', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'PA Y-Cross': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'PA Zone FK Jet': {
    routes: { WR1: 'drag', WR2: 'post', WR3: 'flat', WR4: 'streak', TE: 'in', RB: 'block' },
    qb: 'qb_boot_right', ball_target: 'WR2'
  },
  'PA Cross X Whip': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'out', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },

  // RPO (Run-Pass Option) Variants
  'RPO Alert': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'RPO Alert Bubble': {
    routes: { WR1: 'slant', WR2: 'flat', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'RPO Alert Screen': {
    routes: { WR1: 'slant', WR2: 'screen', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'RPO Peek': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'RPO Peek Slant': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'RPO Zone Alert': {
    routes: { WR1: 'slant', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Exit RPO Alert Screen': {
    routes: { WR1: 'screen', WR2: 'hitch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Exit Slot Option': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'slant', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Exit Switch Out': {
    routes: { WR1: 'out', WR2: 'slant', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Cheat Outside Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_outside' },
    qb: 'qb_handoff', isRun: true
  },
  'Cheat RPO Zone Alert Bubble': {
    routes: { WR1: 'slant', WR2: 'flat', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Cheat Slash Wheel Cross': {
    routes: { WR1: 'in', WR2: 'wheel', WR3: 'drag', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', ball_target: 'WR2'
  },

  // Specific Madden Play Concepts
  'Curl Combo': {
    routes: { WR1: 'curl', WR2: 'flat', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Curl Flats': {
    routes: { WR1: 'curl', WR2: 'flat', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Curl HB Burst': {
    routes: { WR1: 'curl', WR2: 'flat', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'angle' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Curls': {
    routes: { WR1: 'curl', WR2: 'curl', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Cross Drag': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Dagger': {
    routes: { WR1: 'deep_post', WR2: 'streak', WR3: 'dig', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Dagger Deep Curl': {
    routes: { WR1: 'deep_post', WR2: 'curl', WR3: 'dig', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Dbl Dig': {
    routes: { WR1: 'dig', WR2: 'dig', WR3: 'shallow_cross', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Deep In': {
    routes: { WR1: 'deep_in', WR2: 'streak', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Dig Under': {
    routes: { WR1: 'dig', WR2: 'shallow_cross', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'check_down' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Divide Wheel': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'wheel', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Double Ins': {
    routes: { WR1: 'in', WR2: 'in', WR3: 'streak', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Drive': {
    routes: { WR1: 'in', WR2: 'flat', WR3: 'drag', WR4: 'curl', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Drive Post': {
    routes: { WR1: 'post', WR2: 'flat', WR3: 'drag', WR4: 'curl', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Drive Trail': {
    routes: { WR1: 'in', WR2: 'flat', WR3: 'drag', WR4: 'curl', TE: 'angle', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'China Y Post': {
    routes: { WR1: 'drag', WR2: 'post', WR3: 'drag_left', WR4: 'streak', TE: 'post', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Choice Shallow Dig': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'out', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Inside Cross': {
    routes: { WR1: 'in', WR2: 'drag_left', WR3: 'drag', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Shallow X Dig': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Slot Quick Flat': {
    routes: { WR1: 'streak', WR2: 'flat', WR3: 'slant', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'WR Short Post': {
    routes: { WR1: 'post', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Slot Drive': {
    routes: { WR1: 'in', WR2: 'flat', WR3: 'drag', WR4: 'curl', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Trail': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'curl', WR4: 'streak', TE: 'angle', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Wheel Spot': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'wheel', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Out N Ups': {
    routes: { WR1: 'corner', WR2: 'corner', WR3: 'streak', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'X Post': {
    routes: { WR1: 'post', WR2: 'streak', WR3: 'drag', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Y Corner': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'corner', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Y Curl': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'drag', WR4: 'streak', TE: 'curl', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Y-Drag': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'drag', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Y-Option': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'out', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Y Flat Goalline': {
    routes: { WR1: 'slant', WR2: 'flat', WR3: 'drag', WR4: 'slant', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Z Mesh Goalline': {
    routes: { WR1: 'slant', WR2: 'drag', WR3: 'drag_left', WR4: 'flat', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Z Spot Goalline': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Z Spot N Go': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'post', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR4'
  },
  'Spot N Go': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'post', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR4'
  },
  'L Spot': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'curl', WR4: 'flat', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Bench': {
    routes: { WR1: 'streak', WR2: 'speed_out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Slants': {
    routes: { WR1: 'slant', WR2: 'slant', WR3: 'slant', WR4: 'slant', TE: 'slant', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Comeback': {
    routes: { WR1: 'comeback', WR2: 'comeback', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },

  // HB Run Variants
  'HB Base': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Duo': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Mid Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'HB Mid Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Off Tackle': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Power': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power', FB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Pump Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'HB Quick Base': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Scissors': {
    routes: { WR1: 'deep_post', WR2: 'deep_corner', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'swing' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'HB Slip Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'HB Cross Screen': {
    routes: { WR1: 'streak', WR2: 'block', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'HB Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Counter Str': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_counter', FB: 'run_power' },
    qb: 'qb_handoff', isRun: true
  },
  'HB Stretch Alert Smoke': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Stretch Alert Bubble': {
    routes: { WR1: 'flat', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Stretch Alert Smoke': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Stretch Alert X Smoke': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Delayed Draw': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'run_inside' },
    qb: 'qb_drop', isRun: true
  },
  'Pin Pull Sweep': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_stretch' },
    qb: 'qb_handoff', isRun: true
  },
  'Counter Y': {
    routes: { WR1: 'stalk_block', WR2: 'crack_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Split': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside', FB: 'run_counter' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Split Alert Lookie': {
    routes: { WR1: 'hitch', WR2: 'block', WR3: 'block', WR4: 'block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Zone Fake Jet': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Same Side Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'QB Strong Power': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_power' },
    qb: 'run_power', isRun: true
  },
  'QB Zone': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'run_inside', isRun: true
  },

  // Special Plays
  'Fake Jet HB Seam': {
    routes: { WR1: 'block', WR2: 'run_stretch', WR3: 'block', WR4: 'block', TE: 'block', RB: 'seam' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Fake Jet Pass Power': {
    routes: { WR1: 'drag', WR2: 'run_stretch', WR3: 'in', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Jet Touch Pass': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true
  },
  'Jet New Orleans': {
    routes: { WR1: 'stalk_block', WR2: 'run_stretch', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'block' },
    qb: 'qb_handoff', isRun: true
  },
  'Boomerang 01 Trap': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'Boomerang Slot Swing': {
    routes: { WR1: 'streak', WR2: 'flat', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Boomerang Y Delay': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'angle', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Shock H Option': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'slant', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Alert Z Lookie': {
    routes: { WR1: 'streak', WR2: 'hitch', WR3: 'slant', WR4: 'curl', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Angle Y Sail': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'angle', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'WR Mid Screen': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Middle Screen': {
    routes: { WR1: 'streak', WR2: 'streak', WR3: 'streak', WR4: 'streak', TE: 'block', RB: 'screen' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'Tunnel Screen': {
    routes: { WR1: 'streak', WR2: 'screen', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Bubble Screen': {
    routes: { WR1: 'streak', WR2: 'screen_right', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Stick Slot Option': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'flat', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Texas': {
    routes: { WR1: 'go', WR2: 'curl', WR3: 'dig', WR4: 'streak', TE: 'seam', RB: 'texas' },
    qb: 'qb_drop', ball_target: 'RB'
  },
  'RE': {
    routes: { WR1: 'streak', WR2: 'in', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'TE Attack': {
    routes: { WR1: 'streak', WR2: 'curl', WR3: 'drag', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Y Stick': {
    routes: { WR1: 'streak', WR2: 'out', WR3: 'flat', WR4: 'streak', TE: 'hitch', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'TE'
  },
  'Mesh Traffic': {
    routes: { WR1: 'streak', WR2: 'shallow_cross', WR3: 'shallow_cross', WR4: 'streak', TE: 'dig', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'Mesh HB Sneak': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'seam', RB: 'angle' },
    qb: 'qb_drop', ball_target: 'RB'
  },

  // Singleback / I-Form specific
  'Close PA Cross': {
    routes: { WR1: 'in', WR2: 'drag', WR3: 'post', WR4: 'streak', TE: 'drag', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR3'
  },
  'Close PA Post': {
    routes: { WR1: 'post', WR2: 'drag', WR3: 'in', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR1'
  },
  'Close Zone Strg': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  '94 Will': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  '01 Trap': {
    routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
    qb: 'qb_handoff', isRun: true
  },
  'FB Dive Fake HB': {
    routes: { FB: 'run_dive', RB: 'flat', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'qb_drop', isRun: true
  },
  'FB Fake HB Flip': {
    routes: { FB: 'run_dive', RB: 'run_counter', TE: 'block', TE1: 'block', TE2: 'block', WR1: 'stalk_block' },
    qb: 'qb_handoff', isRun: true
  },

  // H-Back / TE-specific
  'H MTN Flood H-Sneak': {
    routes: { WR1: 'streak', WR2: 'corner', WR3: 'flat', WR4: 'streak', TE: 'flat', RB: 'block' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'H MTN Mesh': {
    routes: { WR1: 'streak', WR2: 'drag', WR3: 'drag_left', WR4: 'streak', TE: 'in', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR2'
  },
  'H MTN X Shallow Cross': {
    routes: { WR1: 'drag', WR2: 'in', WR3: 'curl', WR4: 'streak', TE: 'seam', RB: 'flat' },
    qb: 'qb_drop', ball_target: 'WR1'
  },

  // ===== DEFENSIVE COVERAGE PLAYS =====
  'Cover 0': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_a_gap', DE1: 'rush_c_gap', DE2: 'rush_c_gap', LB1: 'blitz_a', LB2: 'blitz_b', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'man_cover', FS: 'man_cover' },
    isCoverage: true
  },
  'Cover 1': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'man_cover', LB2: 'man_cover', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'man_cover', FS: 'zone_deep_middle' },
    isCoverage: true
  },
  'Cover 1 Robber': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'man_cover', LB2: 'zone_mid', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'man_cover', FS: 'zone_deep_middle' },
    isCoverage: true
  },
  'Cover 1 Hole': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'man_cover', LB2: 'zone_mid', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'man_cover', FS: 'zone_deep_middle' },
    isCoverage: true
  },
  'Cover 2 Zone': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 2 Man': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'man_cover', LB2: 'man_cover', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 2 Invert': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 2 Sink': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_hook', LB2: 'zone_mid', LB3: 'zone_hook', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 2 Lurk': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_hook', LB2: 'zone_mid', LB3: 'zone_hook', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 2 Press': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'man_cover', LB2: 'man_cover', LB3: 'man_cover', CB1: 'press_man', CB2: 'press_man', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 2 Hard Flat': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 3': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_hook', FS: 'zone_deep_third' },
    isCoverage: true
  },
  'Cover 3 Sky': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_flat', FS: 'zone_deep_third' },
    isCoverage: true
  },
  'Cover 3 Cloud': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_third', FS: 'zone_deep_third' },
    isCoverage: true
  },
  'Cover 3 Buzz': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_hook', LB2: 'zone_mid', LB3: 'zone_hook', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_hook', FS: 'zone_deep_third' },
    isCoverage: true
  },
  'Cover 3 Match': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_hook', FS: 'zone_deep_third' },
    isCoverage: true
  },
  'Cover 4': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_hook', LB2: 'zone_mid', LB3: 'zone_hook', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 4 Palms': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_hook', LB2: 'zone_mid', LB3: 'zone_hook', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 4 Drop': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_mid', LB3: 'zone_curl_flat', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 6': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_hook', LB2: 'zone_mid', LB3: 'zone_hook', CB1: 'zone_deep_third', CB2: 'zone_deep_half', SS: 'zone_deep_third', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Cover 9': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'man_cover', LB2: 'man_cover', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Tampa 2': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_deep_middle', LB3: 'zone_curl_flat', CB1: 'zone_flat', CB2: 'zone_flat', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Prevent': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_contain', DE2: 'rush_contain', LB1: 'zone_mid', LB2: 'zone_mid', LB3: 'zone_mid', CB1: 'zone_deep_third', CB2: 'zone_deep_third', SS: 'zone_deep_half', FS: 'zone_deep_half' },
    isCoverage: true
  },
  'Mid Blitz': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'blitz_a', LB2: 'blitz_b', LB3: 'man_cover', CB1: 'man_cover', CB2: 'man_cover', SS: 'blitz_edge', FS: 'man_cover' },
    isCoverage: true
  },
  'Edge Blitz': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'blitz_edge', LB2: 'man_cover', LB3: 'blitz_edge', CB1: 'man_cover', CB2: 'man_cover', SS: 'man_cover', FS: 'zone_deep_middle' },
    isCoverage: true
  },
  'Inverted Cover 2': {
    routes: {},
    defRoutes: { DT1: 'rush_a_gap', DT2: 'rush_b_gap', DE1: 'rush_c_gap', DE2: 'rush_contain', LB1: 'zone_curl_flat', LB2: 'zone_hook', LB3: 'zone_curl_flat', CB1: 'zone_deep_half', CB2: 'zone_deep_half', SS: 'zone_flat', FS: 'zone_flat' },
    isCoverage: true
  }
};

// Auto-tag plays based on routes and names
(function autoTagPlays() {
  const shortRoutes = new Set(['flat', 'flat_left', 'screen', 'screen_left', 'screen_right', 'hitch', 'drag', 'drag_left', 'shallow_cross', 'check_down', 'swing', 'swing_left', 'quick_out']);
  const mediumRoutes = new Set(['curl', 'comeback', 'in', 'out', 'dig', 'deep_in', 'deep_out', 'speed_out', 'slant', 'whip', 'angle', 'texas']);
  const deepRoutes = new Set(['streak', 'go', 'post', 'deep_post', 'skinny_post', 'post_corner', 'corner', 'deep_corner', 'seam', 'fade', 'wheel']);
  const runRoutes = new Set(['run_inside', 'run_power', 'run_counter', 'run_stretch', 'run_dive', 'run_outside', 'run_right', 'run_left']);

  for (const [name, play] of Object.entries(PLAY_ROUTES)) {
    const tags = [];
    const routes = play.routes || {};
    const target = routes[play.ball_target] || '';
    const allRoutes = Object.values(routes);

    // Type tags
    if (name.includes('Screen') || target.includes('screen')) tags.push('screen');
    if (name.startsWith('PA ') || name.includes('Play Action')) tags.push('play_action');
    if (name.startsWith('RPO')) tags.push('rpo');
    if (allRoutes.some(r => runRoutes.has(r)) && !name.includes('Screen')) {
      if (name.includes('Option') || name.includes('Read')) tags.push('option');
      else if (!tags.includes('rpo')) tags.push('run');
    }

    // Depth tags
    if (shortRoutes.has(target)) tags.push('short', 'quick_game');
    else if (mediumRoutes.has(target)) tags.push('medium');
    else if (deepRoutes.has(target)) tags.push('deep');

    // Concept tags
    if (name.includes('Flood')) tags.push('flood');
    if (name.includes('Mesh')) tags.push('mesh');
    if (name.includes('Levels')) tags.push('levels');
    if (name.includes('Smash')) tags.push('smash');
    if (name.includes('Verticals') || name.includes('Four Verts') || name.includes('Verts')) tags.push('verticals');

    play.tags = tags.length ? tags : ['medium'];
  }
})();

const COVERAGE_BEATERS = {
  'Cover 0': {
    beatenBy: ['quick_game', 'screen', 'slant'],
    beats: ['deep'],
    tip: 'No safety help \u2014 throw hot routes and screens before pressure arrives'
  },
  'Cover 1': {
    beatenBy: ['levels', 'flood', 'mesh'],
    beats: ['deep', 'verticals'],
    tip: 'Single high safety \u2014 flood one side to create 2-on-1 matchups'
  },
  'Cover 2 Zone': {
    beatenBy: ['deep', 'verticals', 'smash'],
    beats: ['short', 'quick_game'],
    tip: 'Deep middle is open \u2014 attack seams and post routes between the safeties'
  },
  'Cover 2 Man': {
    beatenBy: ['mesh', 'levels', 'flood'],
    beats: ['short', 'screen'],
    tip: 'Pick plays and crossers create free releases against tight man coverage'
  },
  'Cover 3': {
    beatenBy: ['flood', 'smash', 'medium'],
    beats: ['deep', 'verticals'],
    tip: 'Curl-flat window is the weakness \u2014 smash and flood concepts exploit the seam'
  },
  'Cover 4': {
    beatenBy: ['short', 'quick_game', 'run'],
    beats: ['deep', 'verticals'],
    tip: 'Four deep defenders leave underneath wide open \u2014 attack with curls and drags'
  },
  'Cover 6': {
    beatenBy: ['flood', 'levels'],
    beats: ['deep'],
    tip: 'Identify the Cover 2 side and attack the deep middle or seam on that side'
  },
  'Man Blitz': {
    beatenBy: ['quick_game', 'screen', 'mesh'],
    beats: ['run', 'deep'],
    tip: 'Hot routes and screens punish the blitz \u2014 get the ball out fast'
  },
  'Zone Blitz': {
    beatenBy: ['short', 'quick_game'],
    beats: ['deep', 'play_action'],
    tip: 'Zone blitz drops a rusher into coverage \u2014 find the vacated zone'
  }
};

// Default routes if play family not found
const DEFAULT_PASS_ROUTES = {
  routes: { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'seam', RB: 'flat' },
  qb: 'qb_drop', ball_target: 'WR2'
};
const DEFAULT_RUN_ROUTES = {
  routes: { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' },
  qb: 'qb_handoff', isRun: true
};

// Keyword-based route inference for plays not in PLAY_ROUTES
function inferRoutes(name) {
  const l = name.toLowerCase();
  // Strip formation suffix (e.g. "- Gun Trey Y")
  const base = l.replace(/\s*-\s*(gun|singleback|pistol|i form|strong|weak|shotgun|empty|trips|dbl|dbls|bunch|nickel|dime|quarter|3-3|4-2)\b.*$/i, '').trim();

  // ---- RUN plays ----
  const runWords = ['zone', 'power', 'dive', 'stretch', 'counter', 'toss', 'sweep', 'sneak',
    'draw', 'iso', 'trap', 'wham', 'blast', 'slam', 'duo', 'pitch', 'veer', 'orbit',
    'option', 'lead', 'buck', 'off tackle', 'plunge', 'ram', 'gut', 'belly', 'base'];
  const isRun = runWords.some(w => base.includes(w)) ||
    /^\d+\s+(iso|lead|duo|power|counter|zone|trap|dive|toss|sweep|blast|slam|base|gut|belly)/.test(base) ||
    /^(hb|fb|qb)\s+(dive|stretch|toss|power|counter|slam|blast|iso|draw|wham|duo|gut|trap|zone|base|off tackle|plunge|sweep)/i.test(base);

  if (isRun) {
    const r = { WR1: 'stalk_block', WR2: 'stalk_block', WR3: 'stalk_block', WR4: 'stalk_block', TE: 'block', RB: 'run_inside' };
    if (base.includes('power')) { r.RB = 'run_power'; r.FB = 'lead_block'; r.RG = 'pull_left'; }
    else if (base.includes('counter')) { r.RB = 'run_counter'; r.RG = 'pull_left'; r.RT = 'pull_left'; }
    else if (base.includes('stretch') || base.includes('toss') || base.includes('sweep') || base.includes('pitch')) { r.RB = 'run_stretch'; r.LT = 'zone_step_right'; r.LG = 'zone_step_right'; r.C = 'zone_step_right'; r.RG = 'zone_step_right'; r.RT = 'zone_step_right'; }
    else if (base.includes('outside zone') || base.includes('oz')) { r.RB = 'run_outside'; r.LT = 'zone_step_right'; r.LG = 'zone_step_right'; r.C = 'zone_step_right'; r.RG = 'zone_step_right'; r.RT = 'zone_step_right'; }
    else if (base.includes('inside zone') || base.includes('iz')) { r.RB = 'run_inside'; r.C = 'combo_block'; r.LG = 'zone_step_right'; r.RG = 'zone_step_right'; }
    else if (base.includes('dive')) r.RB = 'run_dive';
    else if (base.includes('draw')) r.RB = 'run_inside';
    else if (base.includes('trap')) { r.RB = 'run_inside'; r.RG = 'pull_left'; }
    else if (base.includes('iso')) { r.RB = 'run_inside'; r.FB = 'lead_block'; }
    else if (base.includes('duo')) { r.RB = 'run_power'; r.C = 'combo_block'; }
    else if (base.includes('wham')) { r.RB = 'run_inside'; r.FB = 'lead_block'; }
    else if (base.includes('option')) { r.RB = 'option_give'; r.QB = 'option_keep'; }
    if (base.includes('crack')) r.WR2 = 'crack_block';
    return { routes: r, qb: base.includes('draw') ? 'qb_drop' : (base.includes('option') ? 'option_keep' : 'qb_handoff'), isRun: true };
  }

  // ---- SCREEN plays ----
  if (base.includes('screen')) {
    const r = { WR1: 'streak', WR2: 'block', WR3: 'block', WR4: 'streak', TE: 'block', RB: 'screen_left' };
    if (base.includes('wr') || base.includes('bubble') || base.includes('tunnel') || base.includes('jailbreak')) { r.WR2 = 'screen_right'; r.RB = 'flat'; }
    else if (base.includes('middle') || base.includes('mid')) { r.RB = 'screen'; r.WR2 = 'block'; }
    else if (base.includes('slip')) { r.RB = 'screen_left'; r.TE = 'flat'; }
    return { routes: r, qb: 'qb_drop', ball_target: base.includes('wr') ? 'WR2' : 'RB' };
  }

  // ---- PA / Play Action ----
  const isPA = base.includes('pa ') || base.startsWith('pa ') || base.includes('play action') ||
    base.includes('fake') || base.includes('paf') || base.startsWith('fk ');

  // ---- RPO ----
  const isRPO = base.includes('rpo') || base.includes('alert');

  // ---- Build pass routes from keywords ----
  const r = { WR1: 'streak', WR2: 'curl', WR3: 'in', WR4: 'streak', TE: 'seam', RB: isPA ? 'block' : 'flat' };
  let target = 'WR2';

  // Primary concept keywords
  if (base.includes('corner strike')) { r.WR1 = 'corner'; r.WR2 = 'slant'; r.WR3 = 'flat'; target = 'WR1'; }
  else if (base.includes('four vert') || base.includes('4 vert') || base.includes('all go')) { r.WR1 = 'streak'; r.WR2 = 'seam'; r.WR3 = 'seam'; r.WR4 = 'streak'; r.TE = 'seam'; target = 'WR2'; }
  else if (base.includes('mesh')) { r.WR2 = 'drag'; r.WR3 = 'drag_left'; r.TE = 'drag'; target = 'WR2'; }
  else if (base.includes('levels')) { r.WR2 = 'in'; r.WR3 = 'drag'; r.TE = 'seam'; target = 'WR3'; }
  else if (base.includes('flood')) { r.WR2 = 'corner'; r.WR3 = 'out'; r.WR4 = 'flat'; target = 'WR3'; }
  else if (base.includes('smash')) { r.WR1 = 'hitch'; r.WR2 = 'corner'; target = 'WR2'; }
  else if (base.includes('spot')) { r.WR2 = 'corner'; r.WR3 = 'curl'; r.WR4 = 'flat'; target = 'WR3'; }
  else if (base.includes('dagger')) { r.WR1 = 'post'; r.WR3 = 'dig'; target = 'WR1'; }
  else if (base.includes('crosser') || base.includes('cross')) { r.WR1 = 'in'; r.WR2 = 'drag'; r.TE = 'drag'; target = 'WR1'; }
  else if (base.includes('curl flat') || base.includes('curl flats')) { r.WR2 = 'curl'; r.WR3 = 'flat'; target = 'WR2'; }
  else if (base.includes('stick')) { r.WR2 = 'out'; r.WR3 = 'flat'; r.TE = 'seam'; target = 'WR2'; }
  else if (base.includes('drive')) { r.WR2 = 'dig'; r.WR3 = 'drag'; target = 'WR2'; }
  else if (base.includes('sail')) { r.WR2 = 'deep_corner'; r.WR3 = 'out'; r.WR4 = 'flat'; target = 'WR2'; }
  else if (base.includes('scissors')) { r.WR1 = 'post'; r.WR2 = 'corner'; target = 'WR2'; }
  else if (base.includes('bench')) { r.WR1 = 'curl'; r.WR2 = 'speed_out'; r.WR3 = 'flat'; target = 'WR2'; }
  else if (base.includes('spacing')) { r.WR1 = 'out'; r.WR2 = 'curl'; r.WR3 = 'flat'; r.TE = 'drag'; target = 'WR2'; }
  else if (base.includes('y trail')) { r.WR2 = 'drag'; r.TE = 'angle'; target = 'TE'; }
  else if (base.includes('mills')) { r.WR1 = 'skinny_post'; r.WR2 = 'dig'; r.WR3 = 'corner'; target = 'WR1'; }
  else if (base.includes('texas')) { r.TE = 'flat'; r.RB = 'texas'; target = 'RB'; }
  else if (base.includes('china')) { r.WR2 = 'corner'; r.WR3 = 'flat'; target = 'WR2'; }
  else if (base.includes('dig')) { r.WR1 = 'dig'; r.WR2 = 'shallow_cross'; target = 'WR1'; }
  else if (base.includes('hitch') || base.includes('all hitch')) { r.WR1 = 'hitch'; r.WR2 = 'hitch'; r.WR3 = 'hitch'; target = 'WR2'; }
  else if (base.includes('all curl') || base.includes('curls')) { r.WR1 = 'curl'; r.WR2 = 'curl'; r.WR3 = 'curl'; target = 'WR2'; }
  else if (base.includes('all slant') || base.includes('slants')) { r.WR1 = 'slant'; r.WR2 = 'slant'; r.WR3 = 'slant'; target = 'WR2'; }

  // Overlay single-route keywords (these modify existing routes)
  if (base.includes('post') && !base.includes('spot')) { r.WR1 = base.includes('deep post') ? 'deep_post' : (base.includes('skinny') ? 'skinny_post' : 'post'); target = 'WR1'; }
  if (base.includes('corner') && !base.includes('corner strike') && !r.WR2.includes('corner')) { r.WR2 = base.includes('deep corner') ? 'deep_corner' : 'corner'; target = 'WR2'; }
  if (base.includes('wheel')) { r.RB = 'wheel'; target = 'RB'; }
  if (base.includes('seam') && !base.includes('seam show')) { r.TE = 'seam'; }
  if (base.includes('drag') && !base.includes('dagger')) { r.WR3 = 'drag'; }
  if (base.includes('out route') || (base.includes(' out') && !base.includes('outside'))) { r.WR2 = 'out'; target = 'WR2'; }
  if (base.includes('go route') || base.includes('all go')) { r.WR1 = 'go'; }
  if (base.includes('whip')) { r.WR1 = 'whip'; target = 'WR1'; }
  if (base.includes('angle') && !base.includes('angle smash')) { r.TE = 'angle'; target = 'TE'; }
  if (base.includes('swing')) { r.RB = 'swing'; target = 'RB'; }
  if (base.includes('check down') || base.includes('checkdown')) { r.RB = 'check_down'; target = 'RB'; }
  if (base.includes('flat') && !base.includes('curl flat')) { r.RB = 'flat'; }

  // RPO overlay: add a run option
  if (isRPO) {
    r.RB = 'run_inside';
    if (!base.includes('screen')) target = 'WR2';
  }

  // PA: QB boot
  const qb = isPA ? (base.includes('boot') || base.includes('waggle') ? (base.includes('lt') || base.includes('left') ? 'qb_boot_left' : 'qb_boot_right') : 'qb_drop') : 'qb_drop';

  // Jet/motion overlay
  let motion;
  if (base.includes('jet') || base.includes('mtn')) {
    motion = { player: 'WR2', path: [[-0.20, 0]] };
  } else if (base.includes('orbit')) {
    motion = { player: 'RB', path: [[0.20, 0]] };
  } else if (base.includes('reverse') || base.includes('end around')) {
    motion = { player: 'WR3', path: [[-0.25, 0]] };
  } else if (base.includes('pa boot') || base.includes('pa waggle') || base.includes('pa slide') || base.includes('pa cross')) {
    motion = { player: 'TE', path: [[0.10, 0]] };
  }

  const result = { routes: r, qb, ball_target: target };
  if (isRPO) result.isRPO = true;
  if (motion) result.motion = motion;
  return result;
}

// ============================
// RENDERING ENGINE
// ============================
class PlayArtRenderer {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(() => {
        const rect = canvas.parentElement?.getBoundingClientRect();
        if (rect && rect.width > 0) {
          const scale = Math.min(rect.width / this.width, 1);
          canvas.style.transform = `scale(${scale})`;
          canvas.style.transformOrigin = 'top left';
        }
      });
      if (canvas.parentElement) this._resizeObserver.observe(canvas.parentElement);
    }
    this.width = options.width || 320;
    this.height = options.height || 260;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.animProgress = 0;
    this.animFrame = null;
    this.isAnimating = false;
    this.loopEnabled = true;
    this._initTouchHandlers();
  }

  // Draw field background with subtle gradient and realistic turf
  drawField() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    // Field gradient for depth
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#1e5c30');
    grad.addColorStop(0.5, FIELD_GREEN);
    grad.addColorStop(1, '#153d1f');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    // Subtle turf stripes (alternating darker/lighter bands)
    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        ctx.fillStyle = 'rgba(0,0,0,0.04)';
        ctx.fillRect(0, h * i / 8, w, h / 8);
      }
    }
    // Yard lines
    for (let i = 1; i < 8; i++) {
      ctx.strokeStyle = FIELD_LINE;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, h * i / 8);
      ctx.lineTo(w, h * i / 8);
      ctx.stroke();
    }
    // Hash marks
    for (let i = 1; i < 8; i++) {
      ctx.strokeStyle = FIELD_LINE;
      ctx.lineWidth = 0.8;
      const y = h * i / 8;
      ctx.beginPath(); ctx.moveTo(w * 0.38, y - 3); ctx.lineTo(w * 0.38, y + 3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w * 0.62, y - 3); ctx.lineTo(w * 0.62, y + 3); ctx.stroke();
    }
    // Line of scrimmage with subtle glow
    ctx.save();
    ctx.shadowColor = LOS_COLOR;
    ctx.shadowBlur = 4;
    ctx.strokeStyle = LOS_COLOR;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.60);
    ctx.lineTo(w, h * 0.60);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // Draw a player dot with subtle shadow and cleaner label
  drawPlayer(x, y, color, label, size = 8) {
    const ctx = this.ctx;
    const px = x * this.width;
    const py = y * this.height;
    // Drop shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath();
    ctx.arc(px + 1, py + 1, size, 0, Math.PI * 2);
    ctx.fill();
    // Player circle with subtle gradient
    const pGrad = ctx.createRadialGradient(px - size * 0.3, py - size * 0.3, 0, px, py, size);
    pGrad.addColorStop(0, this._lightenColor(color, 30));
    pGrad.addColorStop(1, color);
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1;
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

  _lightenColor(hex, amount) {
    if (!hex.startsWith('#')) return hex;
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = Math.min(255, r + amount);
    g = Math.min(255, g + amount);
    b = Math.min(255, b + amount);
    return `rgb(${r},${g},${b})`;
  }

  // Clamp pixel coords to keep routes visible within canvas margins
  _clamp(px, py) {
    const m = 4; // margin pixels
    return [Math.max(m, Math.min(this.width - m, px)), Math.max(m, Math.min(this.height - m, py))];
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
      let [tx, ty] = this._clamp(cx + dx * this.width, cy + dy * this.height);

      if (i < Math.floor(segsToShow)) {
        ctx.lineTo(tx, ty);
        cx = tx; cy = ty;
      } else if (i < segsToShow) {
        const frac = segsToShow - Math.floor(segsToShow);
        const mx = cx + (tx - cx) * frac;
        const my = cy + (ty - cy) * frac;
        ctx.lineTo(mx, my);
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
      let [endX, endY] = this._clamp(prevX + lastWP[0] * this.width, prevY + lastWP[1] * this.height);
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

  // Dynamic formation position resolution
  getOffensePositions(formation, subFormation) {
    return buildOffensePositions(formation, subFormation);
  }

  getDefensePositions(formation, subFormation) {
    return buildDefensePositions(formation, subFormation || '');
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
    // Infer routes from play name keywords
    return inferRoutes(playFamily);
  }

  getCoverageZones(coverageName) {
    if (!coverageName) return COVERAGE_ZONES['Cover 3'];
    const lower = coverageName.toLowerCase();
    // Exact match
    if (COVERAGE_ZONES[coverageName]) return COVERAGE_ZONES[coverageName];
    // Huddle.gg format: leading number = Cover X (e.g., "1 Double Buzz" -> Cover 1)
    const numPrefix = lower.replace(/\s*-\s*(nickel|dime|quarter|3-3|4-2|dollar)\s*\d*$/, '').trim().match(/^(\d)\s/);
    if (numPrefix) {
      const expanded = 'Cover ' + numPrefix[1];
      // Try specific variant first
      const remainder = lower.substring(2).trim();
      const keys = Object.keys(COVERAGE_ZONES).sort((a, b) => b.length - a.length);
      for (const key of keys) {
        const kl = key.toLowerCase();
        if (kl.startsWith(expanded.toLowerCase()) && remainder.split(/\s+/).some(w => kl.includes(w))) return COVERAGE_ZONES[key];
      }
      // Fallback to base Cover X
      if (COVERAGE_ZONES[expanded]) return COVERAGE_ZONES[expanded];
      for (const key of keys) {
        if (key.toLowerCase().startsWith(expanded.toLowerCase())) return COVERAGE_ZONES[key];
      }
    }
    // Special names
    if (lower.includes('tampa')) return COVERAGE_ZONES['Tampa 2'] || COVERAGE_ZONES['Cover 2 Zone'];
    if (lower.includes('blitz') || lower.includes('fire zone')) return COVERAGE_ZONES['Cover 0'] || COVERAGE_ZONES['Cover 1'];
    if (lower.includes('prevent')) return COVERAGE_ZONES['Prevent'] || COVERAGE_ZONES['Cover 4'];
    if (lower.includes('46')) return COVERAGE_ZONES['Cover 2 Man'] || COVERAGE_ZONES['Cover 2 Zone'];
    // Try longest key match
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

    // Draw run lanes and box zone on run plays (static preview)
    if (playData.isRun) {
      this._drawRunLanes(positions, playFamily, 0.8, true);
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
      const label = this._getOffLabel(key);
      const isQB = key === 'QB';
      const color = isQB ? BALL_COLOR : OFF_COLOR;
      this.drawPlayer(pos[0], pos[1], color, label, isQB ? 9 : 8);
    }
    if (this.width >= 300) this._drawLegend();
  }

  renderDefense(formation, coverageName, subFormation) {
    const positions = this.getDefensePositions(formation, subFormation);
    const coverageData = this.getCoverageZones(coverageName);

    // Draw zones
    if (coverageData.type === 'zone') {
      for (const zone of coverageData.zones) {
        this.drawZone(zone, 0.12);
      }
    }

    // Draw defenders
    for (const [key, pos] of Object.entries(positions)) {
      const label = this._getDefLabel(key);
      this.drawPlayer(pos[0], pos[1], DEF_COLOR, label, 8);
    }
  }

  // Full static play card
  renderPlayCard(offFormation, offSubFormation, playFamily) {
    this._currentCoverage = null;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.renderOffense(offFormation, offSubFormation, playFamily);
  }

  renderCoverageCard(defFormation, coverageName, defSubFormation) {
    this._currentCoverage = coverageName || null;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawField();
    this.renderDefense(defFormation, coverageName, defSubFormation);
  }

  // ANIMATED VS matchup
  renderMatchupAnimated(offFormation, offSubFormation, playFamily, defFormation, coverageName, duration = 4000, defSubFormation) {
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
      const defPositions = this.getDefensePositions(defFormation, defSubFormation);
      const coverageData = this.getCoverageZones(coverageName);
      if (coverageData.type === 'zone') {
        for (const zone of coverageData.zones) {
          this.drawZone(zone, 0.08 + 0.08 * Math.min(progress * 3, 1));
        }
      }

      // Defense players
      for (const [key, pos] of Object.entries(defPositions)) {
        const label = this._getDefLabel(key);
        this.drawPlayer(pos[0], pos[1], DEF_COLOR, label, 8);
      }

      // Offense
      const offPositions = this.getOffensePositions(offFormation, offSubFormation);
      const playData = this.getPlayRoutes(playFamily);
      const routes = playData.routes;

      // Draw run lanes and box on run plays
      if (playData.isRun && progress > 0.15) {
        const runFade = Math.min((progress - 0.15) * 3, 1);
        this._drawRunLanes(offPositions, playFamily, runFade, true);
        this._drawBox(offPositions, defPositions, runFade, true);
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
        const label = this._getOffLabel(key);
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
  renderLivePlay({ side = 'offense', offFormation, offSubFormation, playFamily, defFormation, defSubFormation, coverageName, duration = 4000, visibleGroups = null }) {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.isAnimating = true;
    this._currentCoverage = coverageName || null;

    const offPositions = this.getOffensePositions(offFormation, offSubFormation);
    const defPositions = this.getDefensePositions(defFormation, defSubFormation);
    const playData = this.getPlayRoutes(playFamily);
    const coverageData = this.getCoverageZones(coverageName);
    const routes = playData.routes;
    const isRun = !!playData.isRun;
    const isOffSide = side === 'offense';

    // Build offensive player animation data
    const offPlayers = [];
    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    // Gap labels (left to right): D(outside LT), C(LT-LG), B(LG-C), A(C-RG), B(RG-RT), C(outside RT)
    const gapLabels = ['D', 'C', 'B', 'A', 'B', 'C'];

    for (const [key, startPos] of Object.entries(offPositions)) {
      const isOL = olKeys.includes(key);
      const isQB = key === 'QB';
      const routeName = isOL ? 'block' : (isQB ? playData.qb : (routes[key] || 'block'));
      const path = ROUTE_PATHS[routeName] || [];

      // Compute final position by following waypoints, clamped to field bounds
      let endX = startPos[0], endY = startPos[1];
      for (const [dx, dy] of path) { endX += dx; endY += dy; }
      endX = Math.max(0.02, Math.min(0.98, endX));
      endY = Math.max(0.02, Math.min(0.98, endY));

      // OL: compute block target based on play type
      let isPull = false;
      if (isOL) {
        const blockTarget = this._getOLBlockTarget(key, playFamily);
        endX = startPos[0] + blockTarget.dx;
        endY = startPos[1] + blockTarget.dy;
        isPull = blockTarget.isPull;
      }

      offPlayers.push({
        key, startPos: [...startPos], endPos: [endX, endY],
        routeName, path, isOL, isQB, isPull,
        label: this._getOffLabel(key),
        color: isQB ? BALL_COLOR : (isOL ? '#4B0082' : OFF_COLOR),
        size: isQB ? 9 : (isOL ? 7 : 8)
      });
    }

    // Adjust motion player's startPos to post-motion endpoint so routes originate from there
    if (playData.motion) {
      const motionPlayer = offPlayers.find(p => p.key === playData.motion.player);
      if (motionPlayer) {
        let mx = motionPlayer.startPos[0], my = motionPlayer.startPos[1];
        for (const [dx, dy] of playData.motion.path) { mx += dx; my += dy; }
        const motionEndPos = [mx, my];
        // Recompute endPos relative to the motion endpoint
        let endX = mx, endY = my;
        for (const [dx, dy] of motionPlayer.path) { endX += dx; endY += dy; }
        endX = Math.max(0.02, Math.min(0.98, endX));
        endY = Math.max(0.02, Math.min(0.98, endY));
        // Store original start for pre-snap drawing, update startPos to motion endpoint
        motionPlayer._origStartPos = [...motionPlayer.startPos];
        motionPlayer.startPos = motionEndPos;
        motionPlayer.endPos = [endX, endY];
      }
    }

    // Build defensive player animation data
    const defPlayers = [];
    const defEntries = Object.entries(defPositions);
    const dlKeys = ['DE', 'DE1', 'DE2', 'DT', 'DT1', 'DT2', 'NT', 'LE', 'RE', 'DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'];
    const lbKeys = ['LOLB', 'ROLB', 'ILB1', 'ILB2', 'MLB', 'LB', 'LB1', 'LB2', 'LB3', 'LB4'];
    const dbKeys = ['CB1', 'CB2', 'NCB', 'NCB1', 'NCB2', 'NCB3', 'SS', 'FS', 'S'];

    // Pre-compute man coverage 1-to-1 assignments to avoid multiple DBs on same WR
    const manAssignments = {};
    if (coverageData.type !== 'zone') {
      const receivers = offPlayers.filter(p => !p.isOL && !p.isQB && p.routeName !== 'block');
      const assignedReceivers = new Set();
      // Sort defenders: DBs first (by proximity priority), then LBs
      const manDefenders = defEntries
        .map(([key, pos]) => ({ key, pos, isDB: dbKeys.includes(key), isLB: lbKeys.includes(key), isDL: dlKeys.includes(key) }))
        .filter(d => (d.isDB || d.isLB) && !d.isDL);
      // DBs get first pick, then LBs
      manDefenders.sort((a, b) => (b.isDB ? 1 : 0) - (a.isDB ? 1 : 0));
      for (const def of manDefenders) {
        if (isRun && def.isLB) {
          manAssignments[def.key] = [def.pos[0], def.pos[1] + 0.06];
          continue;
        }
        let nearest = null, minDist = Infinity;
        for (const r of receivers) {
          if (assignedReceivers.has(r)) continue;
          const d = Math.hypot(r.startPos[0] - def.pos[0], r.startPos[1] - def.pos[1]);
          if (d < minDist) { minDist = d; nearest = r; }
        }
        if (nearest) {
          assignedReceivers.add(nearest);
          const followFactor = def.isDB ? 0.85 : 0.6;
          manAssignments[def.key] = {
            endPos: [
              nearest.startPos[0] + (nearest.endPos[0] - nearest.startPos[0]) * followFactor + (def.isDB ? 0.02 : 0),
              nearest.startPos[1] + (nearest.endPos[1] - nearest.startPos[1]) * followFactor + 0.02
            ],
            receiver: nearest,
            followFactor: followFactor,
            offset: [def.isDB ? 0.02 : 0, 0.02]
          };
        }
      }
    }

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
        // Man: use pre-computed 1-to-1 assignment
        const manTarget = manAssignments[key];
        if (manTarget) { endX = manTarget.endPos[0]; endY = manTarget.endPos[1]; }
      }

      // Look up defensive assignment from DEF_ASSIGNMENTS
      const defAssignment = getDefAssignment(coverageName, key);
      const assignmentPath = (defAssignment && defAssignment !== 'man_trail') ? (ROUTE_PATHS[defAssignment] || []) : [];
      const isBlitz = isBlitzAssignment(defAssignment);

      const manData = manAssignments[key] || null;
      defPlayers.push({
        key, startPos: [...startPos], endPos: [endX, endY],
        isDL, isLB, isDB,
        label: this._getDefLabel(key),
        color: DEF_COLOR, size: 8,
        assignment: defAssignment,
        assignmentPath: assignmentPath,
        isBlitz: isBlitz,
        manReceiver: manData ? manData.receiver : null,
        manFollowFactor: manData ? manData.followFactor : 0,
        manOffset: manData ? manData.offset : [0, 0]
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

      // === Pre-snap motion indicator ===
      if (preSnap && playData.motion) {
        const motionData = playData.motion;
        const motionPlayer = offPlayers.find(p => p.key === motionData.player);
        if (motionPlayer) {
          const motionT = t / 0.08; // 0 to 1 during preSnap
          const ctx = this.ctx;
          // Use original (pre-motion) position as the start of the motion path
          const origPos = motionPlayer._origStartPos || motionPlayer.startPos;
          const sx = origPos[0] * this.width;
          const sy = origPos[1] * this.height;
          let ex = origPos[0], ey = origPos[1];
          for (const [dx, dy] of motionData.path) { ex += dx; ey += dy; }
          const endPx = ex * this.width;
          const endPy = ey * this.height;
          // Dashed yellow motion path
          ctx.save();
          ctx.globalAlpha = 0.8;
          ctx.strokeStyle = '#FFD700';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(endPx, endPy);
          ctx.stroke();
          ctx.setLineDash([]);
          // Arrowhead at the end of motion path
          const angle = Math.atan2(endPy - sy, endPx - sx);
          ctx.fillStyle = '#FFD700';
          ctx.beginPath();
          ctx.moveTo(endPx, endPy);
          ctx.lineTo(endPx - 8 * Math.cos(angle - 0.4), endPy - 8 * Math.sin(angle - 0.4));
          ctx.lineTo(endPx - 8 * Math.cos(angle + 0.4), endPy - 8 * Math.sin(angle + 0.4));
          ctx.closePath();
          ctx.fill();
          // Animate the motion player dot along the path
          const curX = sx + (endPx - sx) * motionT;
          const curY = sy + (endPy - sy) * motionT;
          ctx.fillStyle = '#FFD700';
          ctx.globalAlpha = 0.9;
          ctx.beginPath();
          ctx.arc(curX, curY, 4, 0, Math.PI * 2);
          ctx.fill();
          // "MOTION" label
          ctx.font = 'bold 7px system-ui';
          ctx.fillStyle = '#FFD700';
          ctx.globalAlpha = 0.7;
          ctx.textAlign = 'center';
          ctx.fillText('MOTION', (sx + endPx) / 2, Math.min(sy, endPy) - 6);
          ctx.restore();
        }
      }

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
        this._drawRunLanes(offPositions, playFamily, gapFade, isOffSide, defPositions);
        this._drawBox(offPositions, defPositions, gapFade, isOffSide);
        if (gaps.length > 0) this._drawGaps(gaps, gapFade, isOffSide);
      }

      // === Draw route trails (the path behind moving players) ===
      if (developPhase) {
        for (const p of offPlayers) {
          if (p.isOL && !p.isPull) continue; // Skip non-pulling OL
          if (p.path.length === 0 && !p.isPull) continue;
          const routeColor = (isRun && !p.isQB) ? BALL_COLOR : ROUTE_COLOR;
          const alpha = isOffSide ? 0.7 : 0.3;
          this.ctx.globalAlpha = alpha;
          if (p.isPull) {
            // Draw pull path as a curved arrow
            const sx = p.startPos[0] * this.width, sy = p.startPos[1] * this.height;
            const ex = p.endPos[0] * this.width, ey = p.endPos[1] * this.height;
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(sx, sy);
            this.ctx.quadraticCurveTo(sx, ey, ex, ey);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
          } else {
            this.drawRoute(p.startPos[0], p.startPos[1], p.path, routeColor, routeT, 2, p.routeName === 'block');
          }
          this.ctx.globalAlpha = 1;
          // Route name labels (offense perspective)
          if (isOffSide && routeT > 0.3 && !p.isQB && p.routeName !== 'block') {
            this._drawRouteLabel(p, routeT);
          }
          // Pull labels for OL
          if (isOffSide && p.isPull && routeT > 0.4) {
            this._drawRouteLabel({ ...p, routeName: 'pull_left' }, routeT);
          }
        }
      }

      // === Draw defensive assignment trails ===
      if (developPhase && coverageName) {
        for (const p of defPlayers) {
          if (p.isDL) continue; // DL handled by block engagements
          if (!p.assignment) continue;
          const vis = this._isVisible(p.key, visibleGroups);
          if (!vis) continue;
          const alpha = isOffSide ? 0.3 : 0.65;
          this.ctx.globalAlpha = alpha;
          if (p.isBlitz) {
            // Blitz routes: red dashed lines rushing toward QB
            if (p.assignmentPath.length > 0) {
              this.drawRoute(p.startPos[0], p.startPos[1], p.assignmentPath, '#ff4444', routeT, 2, true);
            }
          } else if (p.assignment === 'man_trail') {
            // Man trail: draw dashed line toward matched receiver end position
            const sx = p.startPos[0] * this.width, sy = p.startPos[1] * this.height;
            const ex = p.endPos[0] * this.width, ey = p.endPos[1] * this.height;
            const trailT = Math.min(routeT, 1);
            const cx = sx + (ex - sx) * trailT;
            const cy = sy + (ey - sy) * trailT;
            this.ctx.strokeStyle = DEF_COLOR;
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(sx, sy);
            this.ctx.lineTo(cx, cy);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
          } else if (p.assignmentPath.length > 0) {
            // Zone drops: draw route path in defensive color
            this.drawRoute(p.startPos[0], p.startPos[1], p.assignmentPath, DEF_COLOR, routeT, 1.5, false);
          }
          this.ctx.globalAlpha = 1;
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
        let x, y;
        if (p.manReceiver && p.manReceiver.path && p.manReceiver.path.length > 0 && developPhase) {
          // Man coverage: follow matched receiver's path with offset
          const recPos = this._posAlongPath(p.manReceiver.startPos[0], p.manReceiver.startPos[1], p.manReceiver.path, mt * p.manFollowFactor);
          x = Math.max(0.02, Math.min(0.98, recPos.x + p.manOffset[0]));
          y = Math.max(0.02, Math.min(0.98, recPos.y + p.manOffset[1]));
        } else {
          x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * (developPhase ? mt : 0);
          y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * (developPhase ? mt : 0);
        }
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
        if (p.isOL && p.isPull && p.path && p.path.length > 0) {
          // Pull routes: follow waypoints (down then across)
          const olT = developPhase ? Math.min(moveT * 2, 1) : 0;
          const pos = this._posAlongPath(p.startPos[0], p.startPos[1], p.path, olT);
          x = pos.x; y = pos.y;
        } else if (p.isOL) {
          const olT = developPhase ? Math.min(moveT * 2, 1) : 0;
          x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * olT;
          y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * olT;
        } else if (p.path && p.path.length > 0) {
          // Non-OL: follow route waypoints
          const pos = this._posAlongPath(p.startPos[0], p.startPos[1], p.path, developPhase ? moveT : 0);
          x = pos.x; y = pos.y;
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
        if (this.loopEnabled) {
          this._loopTimeout = setTimeout(() => {
            if (this.canvas.isConnected) {
              this.renderLivePlay({ side, offFormation, offSubFormation, playFamily, defFormation, defSubFormation, coverageName, duration, visibleGroups });
            }
          }, 1500);
        }
      }
    };

    this.animFrame = requestAnimationFrame(animate);
  }

  // === Label Helpers ===

  _getDefLabel(key) {
    const labels = {
      'LOLB': 'OLB', 'ROLB': 'OLB', 'ILB1': 'ILB', 'ILB2': 'ILB',
      'MLB': 'MLB', 'NT': 'NT', 'LE': 'LE', 'RE': 'RE',
      'DT1': 'DT', 'DT2': 'DT', 'DE1': 'DE', 'DE2': 'DE',
      'DL1': 'DL', 'DL2': 'DL', 'DL3': 'DL', 'DL4': 'DL', 'DL5': 'DL', 'DL6': 'DL',
      'CB1': 'CB', 'CB2': 'CB', 'NCB': 'NC', 'NCB1': 'NC', 'NCB2': 'NC', 'NCB3': 'NC',
      'SS': 'SS', 'FS': 'FS', 'S': 'S',
      'LB': 'LB', 'LB1': 'LB', 'LB2': 'LB', 'LB3': 'LB', 'LB4': 'LB'
    };
    return labels[key] || key.replace(/\d/g, '').substring(0, 2);
  }

  /**
   * Walk along a path of waypoint deltas, returning {x, y} at normalized time t (0-1).
   * Each segment is weighted by its length so movement speed is proportional to distance.
   */
  _posAlongPath(startX, startY, waypoints, t) {
    if (!waypoints || waypoints.length === 0) return { x: startX, y: startY };
    t = Math.max(0, Math.min(1, t));

    // Build absolute waypoint positions and compute cumulative segment lengths
    const pts = [{ x: startX, y: startY }];
    let cx = startX, cy = startY;
    for (const [dx, dy] of waypoints) {
      cx += dx;
      cy += dy;
      pts.push({ x: cx, y: cy });
    }

    // Compute segment lengths
    const segLengths = [];
    let totalLen = 0;
    for (let i = 1; i < pts.length; i++) {
      const len = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
      segLengths.push(len);
      totalLen += len;
    }

    if (totalLen === 0) return { x: startX, y: startY };

    // Find which segment t falls into
    const targetDist = t * totalLen;
    let accumulated = 0;
    for (let i = 0; i < segLengths.length; i++) {
      if (accumulated + segLengths[i] >= targetDist) {
        const segT = (targetDist - accumulated) / segLengths[i];
        const x = Math.max(0.02, Math.min(0.98, pts[i].x + (pts[i + 1].x - pts[i].x) * segT));
        const y = Math.max(0.02, Math.min(0.98, pts[i].y + (pts[i + 1].y - pts[i].y) * segT));
        return { x, y };
      }
      accumulated += segLengths[i];
    }

    // t === 1, return last point clamped
    const last = pts[pts.length - 1];
    return {
      x: Math.max(0.02, Math.min(0.98, last.x)),
      y: Math.max(0.02, Math.min(0.98, last.y))
    };
  }

  _getOffLabel(key) {
    const labels = {
      'QB': 'QB', 'RB': 'RB', 'FB': 'FB',
      'WR1': 'WR', 'WR2': 'WR', 'WR3': 'WR', 'WR4': 'WR', 'WR5': 'WR',
      'TE': 'TE', 'TE1': 'TE', 'TE2': 'TE',
      'LT': 'LT', 'LG': 'LG', 'C': 'C', 'RG': 'RG', 'RT': 'RT'
    };
    return labels[key] || key.replace(/\d/g, '').substring(0, 2);
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
    const lbKeys = ['LOLB', 'ROLB', 'ILB1', 'ILB2', 'MLB', 'LB', 'LB1', 'LB2', 'LB3', 'LB4'];
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

  // Returns {dx, dy, isPull} for OL end position delta
  _getOLBlockTarget(olKey, playFamily) {
    const name = playFamily.toLowerCase();
    // Check if the QB route is a bootleg
    const playRoutes = this.getPlayRoutes(playFamily);
    const isBootQB = playRoutes && (playRoutes.qb === 'qb_boot_right' || playRoutes.qb === 'qb_boot_left');

    // Screen plays: OL releases downfield to block for screen
    if (name.includes('screen')) {
      if (olKey === 'LG' || olKey === 'C') return { dx: 0.10, dy: -0.08, isPull: true };
      if (olKey === 'RG') return { dx: 0.12, dy: -0.06, isPull: true };
      if (olKey === 'LT') return { dx: 0.06, dy: -0.06, isPull: false };
      if (olKey === 'RT') return { dx: 0.14, dy: -0.04, isPull: true };
      return { dx: 0, dy: -0.03, isPull: false };
    }

    // Bootleg / PA Boot: slide protection away from rollout
    if (name.includes('boot') || name.includes('bootleg') || isBootQB) {
      if (olKey === 'RT' || olKey === 'RG') return { dx: -0.04, dy: -0.03, isPull: false };
      return { dx: -0.02, dy: -0.03, isPull: false };
    }

    // Power / Duo: pulling guard (RG pulls across)
    if ((name.includes('power') || name === 'duo') && !name.includes('rpo') && !name.includes('pa ')) {
      if (olKey === 'RG') return { dx: -0.18, dy: -0.10, isPull: true };
      return { dx: 0.02, dy: -0.03, isPull: false };
    }

    // Counter: RG + RT pull to opposite side
    if (name.includes('counter') && !name.includes('rpo') && !name.includes('pa ')) {
      if (olKey === 'RG') return { dx: -0.22, dy: -0.10, isPull: true };
      if (olKey === 'RT') return { dx: -0.16, dy: -0.08, isPull: true };
      return { dx: 0.02, dy: -0.03, isPull: false };
    }

    // Zone runs: entire OL slides one direction
    if (name.includes('stretch') || name.includes('toss') || name.includes('outside zone') || name.includes('wide zone') || name.includes('sweep')) {
      return { dx: 0.05, dy: -0.03, isPull: false };
    }

    // Trap: guard pulls across to kick out
    if (name === 'trap' || name.includes('trap')) {
      if (olKey === 'RG') return { dx: -0.14, dy: -0.08, isPull: true };
      return { dx: 0, dy: -0.03, isPull: false };
    }

    // Default: straight ahead fire off
    return { dx: 0, dy: -0.03, isPull: false };
  }

  // Backward compat wrapper
  _getRunBlockDirection(olKey, playFamily) {
    const target = this._getOLBlockTarget(olKey, playFamily);
    return target.dx / 0.03;
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
    // Between-OL gap labels: LT-LG=C, LG-C=B, C-RG=A, RG-RT=B
    const labels = ['C', 'B', 'A', 'B'];
    // Gaps between OL
    for (let i = 0; i < olPositions.length - 1; i++) {
      const x = (olPositions[i][0] + olPositions[i + 1][0]) / 2;
      const y = olPositions[i][1] - 0.02;
      gaps.push({ x, y, label: labels[i] || 'G' });
    }
    // Outside gaps: left of LT = D gap, right of RT = C gap
    if (olPositions.length >= 2) {
      gaps.unshift({ x: olPositions[0][0] - 0.06, y: olPositions[0][1] - 0.02, label: 'D' });
      gaps.push({ x: olPositions[olPositions.length - 1][0] + 0.06, y: olPositions[olPositions.length - 1][1] - 0.02, label: 'C' });
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

  // Draw RB running lanes - dynamically computed from OL blocking vs DL positions
  // Finds actual holes where blockers have sealed defenders, determines primary + cutback
  _drawRunLanes(offPositions, playFamily, fade, isOffSide, defPositions) {
    const ctx = this.ctx;
    const playData = this.getPlayRoutes(playFamily);
    if (!playData.isRun) return;

    const olKeys = ['LT', 'LG', 'C', 'RG', 'RT'];
    const olEntries = olKeys.filter(k => offPositions[k]).map(k => ({ key: k, pos: offPositions[k] }));
    if (olEntries.length < 3) return;

    const rbPos = offPositions['RB'] || offPositions['FB'];
    if (!rbPos) return;

    // Compute OL end positions after blocking
    const olEndPositions = olEntries.map(ol => {
      const blockDir = this._getRunBlockDirection(ol.key, playFamily);
      return {
        key: ol.key,
        startX: ol.pos[0],
        endX: ol.pos[0] + blockDir * 0.03,
        endY: ol.pos[1] - 0.03
      };
    });

    // Compute gaps between OL players at their end positions
    const gapOpenings = [];
    for (let i = 0; i < olEndPositions.length - 1; i++) {
      const left = olEndPositions[i];
      const right = olEndPositions[i + 1];
      const gapCenterX = (left.endX + right.endX) / 2;
      const gapWidth = Math.abs(right.endX - left.endX);
      gapOpenings.push({ idx: i, x: gapCenterX, width: gapWidth, blocked: false });
    }
    // Add outside gaps
    gapOpenings.unshift({ idx: -1, x: olEndPositions[0].endX - 0.07, width: 0.08, blocked: false });
    gapOpenings.push({ idx: olEndPositions.length - 1, x: olEndPositions[olEndPositions.length - 1].endX + 0.07, width: 0.08, blocked: false });

    // If we have defensive positions, check which gaps are blocked by unblocked DL
    if (defPositions) {
      const dlKeys = ['DE', 'DE1', 'DE2', 'DT', 'DT1', 'DT2', 'NT', 'LE', 'RE', 'DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'];
      const dlPositions = Object.entries(defPositions)
        .filter(([k]) => dlKeys.includes(k))
        .map(([k, pos]) => ({ key: k, x: pos[0], y: pos[1] }));

      // Each OL blocks nearest DL - remaining DL clog gaps
      const blockedDL = new Set();
      for (const ol of olEndPositions) {
        let nearest = null, minDist = Infinity;
        for (const dl of dlPositions) {
          if (blockedDL.has(dl.key)) continue;
          const d = Math.abs(ol.endX - dl.x);
          if (d < minDist) { minDist = d; nearest = dl; }
        }
        if (nearest && minDist < 0.15) blockedDL.add(nearest.key);
      }

      // Unblocked DL clog gaps they sit in
      for (const dl of dlPositions) {
        if (blockedDL.has(dl.key)) continue;
        for (const gap of gapOpenings) {
          if (Math.abs(dl.x - gap.x) < gap.width * 0.7) {
            gap.blocked = true;
          }
        }
      }
    }

    // Score each gap: wider + unblocked = better
    for (const gap of gapOpenings) {
      gap.score = gap.blocked ? 0 : gap.width;
    }

    // Use play family to prefer inside/outside gaps
    const routes = playData.routes;
    const rbRoute = routes['RB'] || routes['FB'] || 'run_inside';
    const midIdx = Math.floor(gapOpenings.length / 2);

    // Weight gaps by run direction
    for (let i = 0; i < gapOpenings.length; i++) {
      const distFromCenter = Math.abs(i - midIdx);
      if (rbRoute === 'run_inside' || rbRoute === 'run_dive') {
        gapOpenings[i].score *= (1 + 0.3 / (1 + distFromCenter)); // prefer center
      } else if (rbRoute === 'run_stretch' || rbRoute === 'run_outside') {
        gapOpenings[i].score *= (1 + distFromCenter * 0.15); // prefer edges
      } else if (rbRoute === 'run_power') {
        gapOpenings[i].score *= i > midIdx ? 1.3 : 0.8; // prefer strong side
      } else if (rbRoute === 'run_counter') {
        gapOpenings[i].score *= i < midIdx ? 1.3 : 0.8; // prefer weak side
      }
    }

    // Find best gap (primary) and second best (cutback)
    const sorted = [...gapOpenings].sort((a, b) => b.score - a.score);
    const primary = sorted[0];
    const cutback = sorted.length > 1 ? sorted[1] : null;

    if (!primary || primary.score === 0) return;

    const losY = 0.60;
    const laneEndY = losY - 0.25;
    const laneWidth = Math.max(0.05, Math.min(primary.width + 0.02, 0.10));

    // Draw primary lane
    const pLeft = primary.x - laneWidth / 2;
    const pRight = primary.x + laneWidth / 2;
    const px = pLeft * this.width;
    const py = laneEndY * this.height;
    const pw = (pRight - pLeft) * this.width;
    const ph = (losY - laneEndY + 0.12) * this.height;

    ctx.globalAlpha = fade * 0.2;
    ctx.fillStyle = '#00FFFF';
    ctx.beginPath();
    ctx.roundRect(px, py, pw, ph, 4);
    ctx.fill();
    ctx.globalAlpha = fade * 0.6;
    ctx.strokeStyle = '#00FFFF';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(px, py, pw, ph);
    ctx.setLineDash([]);

    // Arrow inside primary lane pointing up
    const arrowX = primary.x * this.width;
    const arrowY = (laneEndY + 0.03) * this.height;
    ctx.globalAlpha = fade * 0.8;
    ctx.fillStyle = '#00FFFF';
    ctx.beginPath();
    ctx.moveTo(arrowX, arrowY - 6);
    ctx.lineTo(arrowX - 5, arrowY + 2);
    ctx.lineTo(arrowX + 5, arrowY + 2);
    ctx.fill();

    // Draw cutback lane (dimmer)
    if (cutback && cutback.score > 0 && Math.abs(cutback.x - primary.x) > 0.04) {
      const cWidth = Math.max(0.04, Math.min(cutback.width + 0.01, 0.08));
      const cLeft = cutback.x - cWidth / 2;
      const cRight = cutback.x + cWidth / 2;
      const cx = cLeft * this.width;
      const cw = (cRight - cLeft) * this.width;

      ctx.globalAlpha = fade * 0.1;
      ctx.fillStyle = '#8A2BE2';
      ctx.beginPath();
      ctx.roundRect(cx, py, cw, ph, 4);
      ctx.fill();
      ctx.globalAlpha = fade * 0.35;
      ctx.strokeStyle = '#8A2BE2';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.strokeRect(cx, py, cw, ph);
      ctx.setLineDash([]);

      // Cutback label
      ctx.globalAlpha = fade * 0.6;
      ctx.font = `bold ${Math.max(7, this.width * 0.022)}px system-ui`;
      ctx.fillStyle = '#8A2BE2';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('CUT', cutback.x * this.width, (laneEndY + 0.01) * this.height);
    }

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
    const midX = (player.startPos[0] + player.endPos[0]) / 2;
    const midY = (player.startPos[1] + player.endPos[1]) / 2;
    const px = midX * this.width;
    const py = midY * this.height - 10;
    const ROUTE_DISPLAY = {
      'streak': 'Streak', 'go': 'Go', 'fade': 'Fade', 'seam': 'Seam',
      'post': 'Post', 'deep_post': 'Deep Post', 'skinny_post': 'Skinny Post',
      'post_corner': 'Post Corner',
      'corner': 'Corner', 'deep_corner': 'Deep Corner',
      'out': 'Out', 'deep_out': 'Deep Out', 'speed_out': 'Speed Out',
      'in': 'In', 'deep_in': 'Deep In', 'dig': 'Dig',
      'shallow_cross': 'Shallow', 'drag': 'Drag', 'drag_left': 'Drag',
      'slant': 'Slant',
      'curl': 'Curl', 'comeback': 'Comeback', 'hitch': 'Hitch',
      'flat': 'Flat', 'flat_left': 'Flat',
      'swing': 'Swing', 'swing_left': 'Swing',
      'check_down': 'Check Down', 'texas': 'Texas',
      'wheel': 'Wheel', 'whip': 'Whip', 'angle': 'Angle',
      'screen': 'Screen', 'screen_left': 'Screen', 'screen_right': 'Screen',
      'block': 'Block', 'pass_block': 'Pass Block', 'lead_block': 'Lead',
      'stalk_block': 'Stalk', 'crack_block': 'Crack',
      'zone_step_right': 'Zone', 'zone_step_left': 'Zone', 'combo_block': 'Combo',
      'run_right': 'Run', 'run_left': 'Run', 'run_inside': 'A Gap', 'run_power': 'B Gap',
      'run_counter': 'Counter', 'run_stretch': 'Stretch', 'run_dive': 'Dive',
      'run_outside': 'C Gap', 'option_give': 'Give', 'option_keep': 'Keep',
      'qb_boot_right': 'Boot', 'qb_boot_left': 'Boot', 'qb_drop': 'Drop',
      'qb_scramble': 'Scramble', 'qb_handoff': 'Handoff',
      'pull_left': 'Pull', 'pull_right': 'Pull',
      'ol_release_right': 'Release', 'ol_release_left': 'Release',
      'rush_a_gap': 'A Gap Rush', 'rush_b_gap': 'B Gap Rush', 'rush_c_gap': 'C Gap Rush', 'rush_contain': 'Contain',
      'zone_hook': 'Hook Zone', 'zone_curl_flat': 'Curl/Flat', 'zone_mid': 'Mid Zone',
      'zone_flat': 'Flat Zone', 'zone_deep_third': 'Deep Third', 'zone_deep_half': 'Deep Half',
      'zone_deep_middle': 'Deep Mid', 'press_man': 'Press Man', 'man_cover': 'Man Cover',
      'blitz_a': 'A Gap Blitz', 'blitz_b': 'B Gap Blitz', 'blitz_edge': 'Edge Blitz'
    };
    const name = ROUTE_DISPLAY[player.routeName] || player.routeName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    ctx.globalAlpha = fade * 0.85;
    const fontSize = Math.max(7, this.width * 0.016);
    ctx.font = `bold ${fontSize}px system-ui`;
    const tw = ctx.measureText(name).width + 6;
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.beginPath();
    ctx.roundRect(px - tw / 2, py - 6, tw, 13, 3);
    ctx.fill();
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
  renderSinglePlayLive({ mode = 'offense', offFormation, offSubFormation, playFamily, defFormation, defSubFormation, coverageName, duration = 3500, visibleGroups = null }) {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.isAnimating = true;
    this._currentCoverage = coverageName || null;

    const isOff = mode === 'offense';
    const offPositions = isOff ? this.getOffensePositions(offFormation, offSubFormation) : null;
    const playData = isOff ? this.getPlayRoutes(playFamily) : null;
    const defPositions = !isOff ? this.getDefensePositions(defFormation, defSubFormation) : null;
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
        let isPull = false;
        if (isOL) {
          const blockTarget = this._getOLBlockTarget(key, playFamily);
          endX = startPos[0] + blockTarget.dx;
          endY = startPos[1] + blockTarget.dy;
          isPull = blockTarget.isPull;
        }
        players.push({
          key, startPos: [...startPos], endPos: [endX, endY],
          routeName, path, isOL, isQB, isPull,
          label: this._getOffLabel(key),
          color: isQB ? BALL_COLOR : (isOL ? '#4B0082' : OFF_COLOR),
          size: isQB ? 9 : (isOL ? 7 : 8)
        });
      }
    } else if (!isOff && defPositions) {
      const dlKeys = ['DE', 'DE1', 'DE2', 'DT', 'DT1', 'DT2', 'NT', 'LE', 'RE', 'DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'];
      const lbKeys = ['LOLB', 'ROLB', 'ILB1', 'ILB2', 'MLB', 'LB', 'LB1', 'LB2', 'LB3', 'LB4'];
      const dbKeysLocal = ['CB1', 'CB2', 'NCB', 'NCB1', 'NCB2', 'NCB3', 'SS', 'FS', 'S'];

      // For man coverage, compute zone-like drop targets so DBs move
      const manDropTargets = {};
      if (coverageData && coverageData.type === 'man') {
        // Simulate man coverage movement: DBs drop toward receiver areas
        const defEntries = Object.entries(defPositions);
        const dbDefs = defEntries.filter(([k]) => dbKeysLocal.includes(k));
        const lbDefs = defEntries.filter(([k]) => lbKeys.includes(k));
        // DBs shadow toward their side's receiver zone
        for (const [key, pos] of dbDefs) {
          if (key === 'CB1') manDropTargets[key] = [pos[0] + 0.02, pos[1] - 0.12];
          else if (key === 'CB2') manDropTargets[key] = [pos[0] - 0.02, pos[1] - 0.12];
          else if (key === 'FS') manDropTargets[key] = [pos[0], pos[1] - 0.08];
          else if (key === 'SS') manDropTargets[key] = [pos[0] - 0.04, pos[1] - 0.06];
          else manDropTargets[key] = [pos[0], pos[1] - 0.08];
        }
        for (const [key, pos] of lbDefs) {
          manDropTargets[key] = [pos[0], pos[1] + 0.04];
        }
      }

      for (const [key, startPos] of Object.entries(defPositions)) {
        const isDL = dlKeys.includes(key);
        const isLB = lbKeys.includes(key);
        const isDB = !isDL && !isLB;
        let endX = startPos[0], endY = startPos[1];
        if (isDL) { endY = 0.60; }
        else if (coverageData && coverageData.type === 'zone') {
          const zoneTarget = this._getDefenderZoneTarget(key, isLB, isDB, coverageData, false, startPos);
          if (zoneTarget) { endX = zoneTarget[0]; endY = zoneTarget[1]; }
        } else if (coverageData && coverageData.type === 'man' && manDropTargets[key]) {
          endX = manDropTargets[key][0];
          endY = manDropTargets[key][1];
        }
        // Look up defensive assignment from DEF_ASSIGNMENTS
        const defAssignment = getDefAssignment(coverageName, key);
        const assignmentPath = (defAssignment && defAssignment !== 'man_trail') ? (ROUTE_PATHS[defAssignment] || []) : [];
        const isBlitz = isBlitzAssignment(defAssignment);

        players.push({
          key, startPos: [...startPos], endPos: [endX, endY],
          isDL, isLB, isDB,
          label: this._getDefLabel(key),
          color: DEF_COLOR, size: 8,
          assignment: defAssignment,
          assignmentPath: assignmentPath,
          isBlitz: isBlitz
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
          this._drawRunLanes(offPositions, playFamily, boxFade, true);
          this._drawBoxZoneOnly(offPositions, boxFade);
        }

        // Draw route trails
        if (developPhase) {
          for (const p of players) {
            if (p.isOL && !p.isPull) continue;
            if (p.path.length === 0 && !p.isPull) continue;
            if (!this._isVisible(p.key, visibleGroups)) continue;
            const routeColor = (playData.isRun && !p.isQB) ? BALL_COLOR : ROUTE_COLOR;
            if (p.isPull) {
              const sx = p.startPos[0] * this.width, sy = p.startPos[1] * this.height;
              const ex = p.endPos[0] * this.width, ey = p.endPos[1] * this.height;
              this.ctx.strokeStyle = '#FFD700';
              this.ctx.lineWidth = 2;
              this.ctx.setLineDash([4, 3]);
              this.ctx.beginPath();
              this.ctx.moveTo(sx, sy);
              this.ctx.quadraticCurveTo(sx, ey, ex, ey);
              this.ctx.stroke();
              this.ctx.setLineDash([]);
            } else {
              this.drawRoute(p.startPos[0], p.startPos[1], p.path, routeColor, routeT, 2, p.routeName === 'block');
            }
            if (routeT > 0.3 && !p.isQB && p.routeName !== 'block') {
              this._drawRouteLabel(p, routeT);
            }
            if (p.isPull && routeT > 0.4) {
              this._drawRouteLabel({ ...p, routeName: 'pull_left' }, routeT);
            }
          }
        }

        // Draw players moving along routes
        for (const p of players) {
          const vis = this._isVisible(p.key, visibleGroups);
          let x, y;
          if (p.isOL && p.isPull && p.path && p.path.length > 0) {
            const olT = developPhase ? Math.min(moveT * 2, 1) : 0;
            const pos = this._posAlongPath(p.startPos[0], p.startPos[1], p.path, olT);
            x = pos.x; y = pos.y;
          } else if (p.isOL) {
            const olT = developPhase ? Math.min(moveT * 2, 1) : 0;
            x = p.startPos[0] + (p.endPos[0] - p.startPos[0]) * olT;
            y = p.startPos[1] + (p.endPos[1] - p.startPos[1]) * olT;
          } else if (p.path && p.path.length > 0) {
            const pos = this._posAlongPath(p.startPos[0], p.startPos[1], p.path, developPhase ? moveT : 0);
            x = pos.x; y = pos.y;
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
        // Draw defensive assignment trails
        if (developPhase && coverageName) {
          for (const p of players) {
            if (p.isDL) continue;
            if (!p.assignment) continue;
            const vis = this._isVisible(p.key, visibleGroups);
            if (!vis) continue;
            this.ctx.globalAlpha = 0.65;
            if (p.isBlitz) {
              if (p.assignmentPath.length > 0) {
                this.drawRoute(p.startPos[0], p.startPos[1], p.assignmentPath, '#ff4444', routeT, 2, true);
              }
            } else if (p.assignment === 'man_trail') {
              const sx = p.startPos[0] * this.width, sy = p.startPos[1] * this.height;
              const ex = p.endPos[0] * this.width, ey = p.endPos[1] * this.height;
              const trailT = Math.min(routeT, 1);
              const cx = sx + (ex - sx) * trailT;
              const cy = sy + (ey - sy) * trailT;
              this.ctx.strokeStyle = DEF_COLOR;
              this.ctx.lineWidth = 1.5;
              this.ctx.setLineDash([3, 3]);
              this.ctx.beginPath();
              this.ctx.moveTo(sx, sy);
              this.ctx.lineTo(cx, cy);
              this.ctx.stroke();
              this.ctx.setLineDash([]);
            } else if (p.assignmentPath.length > 0) {
              this.drawRoute(p.startPos[0], p.startPos[1], p.assignmentPath, DEF_COLOR, routeT, 1.5, false);
            }
            this.ctx.globalAlpha = 1;
          }
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
        if (this.loopEnabled) {
          this._loopTimeout = setTimeout(() => {
            if (this.canvas.isConnected) {
              this.renderSinglePlayLive({ mode, offFormation, offSubFormation, playFamily, defFormation, defSubFormation, coverageName, duration, visibleGroups });
            }
          }, 1200);
        }
      }
    };

    this.animFrame = requestAnimationFrame(animate);
  }

  _drawLegend() {
    const ctx = this.ctx;
    const x = 8;
    const y = this.height - 60;
    const lineH = 14;
    const items = [
      { color: '#00FFFF', dash: [], label: 'Route' },
      { color: '#FFD700', dash: [], label: 'Pull' },
      { color: '#FF4444', dash: [3, 3], label: 'Blitz' },
      { color: '#44FF44', dash: [], label: 'Block' },
    ];

    ctx.save();
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.roundRect(x - 4, y - 4, 70, items.length * lineH + 8, 4);
    ctx.fill();

    ctx.globalAlpha = 0.85;
    ctx.font = 'bold 8px system-ui';
    ctx.textBaseline = 'middle';
    items.forEach((item, i) => {
      const ly = y + i * lineH + lineH / 2;
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 2;
      ctx.setLineDash(item.dash);
      ctx.beginPath();
      ctx.moveTo(x, ly);
      ctx.lineTo(x + 18, ly);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText(item.label, x + 22, ly);
    });
    ctx.restore();
  }

  stop() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    if (this._loopTimeout) clearTimeout(this._loopTimeout);
    this.isAnimating = false;
  }

  // Pinch-to-zoom and double-tap-to-reset touch handlers
  _initTouchHandlers() {
    const canvas = this.canvas;
    if (!canvas) return;

    let lastDist = 0;
    let scale = 1;
    let originX = 0, originY = 0;
    let lastTap = 0;

    this._touchStartHandler = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastDist = Math.hypot(dx, dy);
        originX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        originY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      }
    };

    this._touchMoveHandler = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        if (lastDist > 0) {
          scale = Math.min(3, Math.max(1, scale * (dist / lastDist)));
          const rect = canvas.getBoundingClientRect();
          const ox = ((originX - rect.left) / rect.width * 100);
          const oy = ((originY - rect.top) / rect.height * 100);
          canvas.style.transformOrigin = `${ox}% ${oy}%`;
          canvas.style.transform = `scale(${scale})`;
        }
        lastDist = dist;
      }
    };

    this._touchEndHandler = (e) => {
      if (e.touches.length < 2) {
        lastDist = 0;
        if (scale <= 1.05) {
          scale = 1;
          canvas.style.transform = '';
          canvas.style.transformOrigin = '';
        }
      }
      // Double-tap to reset zoom
      if (e.touches.length === 0) {
        const now = Date.now();
        if (now - lastTap < 300) {
          scale = 1;
          canvas.style.transform = '';
          canvas.style.transformOrigin = '';
        }
        lastTap = now;
      }
    };

    canvas.addEventListener('touchstart', this._touchStartHandler, { passive: false });
    canvas.addEventListener('touchmove', this._touchMoveHandler, { passive: false });
    canvas.addEventListener('touchend', this._touchEndHandler);
  }

  destroy() {
    this.stop();
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    // Remove touch handlers
    if (this.canvas) {
      if (this._touchStartHandler) {
        this.canvas.removeEventListener('touchstart', this._touchStartHandler);
        this._touchStartHandler = null;
      }
      if (this._touchMoveHandler) {
        this.canvas.removeEventListener('touchmove', this._touchMoveHandler);
        this._touchMoveHandler = null;
      }
      if (this._touchEndHandler) {
        this.canvas.removeEventListener('touchend', this._touchEndHandler);
        this._touchEndHandler = null;
      }
    }
  }
}

export { PlayArtRenderer, PLAY_ROUTES, COVERAGE_BEATERS, COVERAGE_ZONES, DEF_ASSIGNMENTS, OFFENSE_POSITIONS, DEFENSE_POSITIONS };
