// Madden 27 Defensive Playbook Data
// Source: madden.tools, huddle.gg - Actual in-game data
// Generated from research on 2026-10-13

// ============================================================
// SECTION 1: ALL 32 NFL TEAM DEFENSIVE PLAYBOOKS
// Each team lists its formations and sub-formations with play counts
// ============================================================

const TEAM_DEFENSIVE_PLAYBOOKS = {
  "Arizona Cardinals": {
    totalPlays: 377,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "3-4": { sets: ["Grizzly", "Over", "Over Solid", "Tite", "Under"], plays: 63 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Single Mug", "3-3 Cub", "3-3 Swap Dbl Mug", "3-3 Wide Jack", "2-4"], plays: 139 },
      "3-3-5": { sets: ["3 High Over", "Penny", "Penny 3 High"], plays: 45 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3-6", "Load Weak", "1-4 Dbl Mug", "1-4-6"], plays: 87 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Atlanta Falcons": {
    totalPlays: 311,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "3-4": { sets: ["Cub", "Odd", "Over", "Under 4t"], plays: 54 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Wide", "2-4"], plays: 121 },
      "3-3-5": { sets: ["Penny"], plays: 21 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3-6", "Rush"], plays: 57 },
      "Quarter": { sets: ["Normal"], plays: 15 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Baltimore Ravens": {
    totalPlays: 387,
    formations: {
      "4-3": { sets: ["Under", "Odd Leo"], plays: 30 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Cub", "Odd", "Over", "Over Solid", "Under"], plays: 63 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Wide", "3-3 Cub", "3-3 Load Mug", "Swap Dbl Mug", "Triple", "2-4", "3-3 Single Mug"], plays: 164 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "2-3-6 Will", "1-4-6"], plays: 96 },
      "Quarter": { sets: ["Over Load"], plays: 6 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Buffalo Bills": {
    totalPlays: 352,
    formations: {
      "4-3": { sets: ["Under"], plays: 15 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Cub", "Grizzly", "Over", "Over Solid", "Under", "Under 4t"], plays: 75 },
      "Nickel": { sets: ["2-4", "2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Odd", "2-4 Swap Dbl Mug", "2-4 Wide", "3-3 Cub", "Load", "Triple"], plays: 168 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "1-4 Dbl Mug"], plays: 66 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Carolina Panthers": {
    totalPlays: 395,
    formations: {
      "4-3": { sets: ["Even 6-1", "Under"], plays: 24 },
      "3-4": { sets: ["Bear", "Odd", "Over", "Over Solid", "Tite Grizzly", "Under 4t"], plays: 75 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Single Mug", "2-4 Swap Dbl Mug", "2-4 Wide", "3-3 Cub", "3-3 Odd", "2-4"], plays: 166 },
      "3-3-5": { sets: ["Over Flex", "Over Wide"], plays: 36 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "1-4-6"], plays: 75 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Chicago Bears": {
    totalPlays: 301,
    formations: {
      "4-3": { sets: ["Over", "Over Solid", "Under", "Odd Leo"], plays: 57 },
      "46": { sets: ["Bear Under"], plays: 6 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Mug", "Over", "Swap Dbl Mug", "Wide", "2-4 Odd"], plays: 129 },
      "3-3-5": { sets: ["Penny"], plays: 21 },
      "Dime": { sets: ["2-3-6", "Rush"], plays: 57 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Cincinnati Bengals": {
    totalPlays: 265,
    formations: {
      "4-3": { sets: ["Over", "Over Solid"], plays: 27 },
      "3-4": { sets: ["Cub", "Tite", "Under"], plays: 39 },
      "Nickel": { sets: ["3-3 Dbl Mug", "2-4 Swap Dbl Mug", "3-3 Cub", "3-3 Load Dbl Mug", "Over", "Single Mug", "Wide"], plays: 135 },
      "Dime": { sets: ["Normal", "Single Mug"], plays: 33 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Cleveland Browns": {
    totalPlays: 280,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Over Solid", "Over Wide"], plays: 45 },
      "46": { sets: ["Bear"], plays: 6 },
      "5-2": { sets: ["Normal"], plays: 6 },
      "Nickel": { sets: ["3-3 Cub", "Double Mug", "Load Mug", "Over", "Single Mug", "Swap Dbl Mug", "Wide"], plays: 138 },
      "Dime": { sets: ["Normal", "Rush", "Single Mug"], plays: 54 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Dallas Cowboys": {
    totalPlays: 374,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "3-4": { sets: ["Cub", "Over", "Over Solid", "Tite", "Under 4t"], plays: 63 },
      "2-5": { sets: ["Over Wide"], plays: 15 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load", "2-4 Load Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Wide", "3-3 Cub", "Triple", "2-4", "2-4 Odd"], plays: 181 },
      "3-3-5": { sets: ["Penny"], plays: 21 },
      "Dime": { sets: ["2-3-6", "Rush"], plays: 57 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Denver Broncos": {
    totalPlays: 352,
    formations: {
      "4-3": { sets: ["Under"], plays: 15 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Cub", "Grizzly", "Over", "Over Solid", "Under", "Under 4t"], plays: 75 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Swap Dbl Mug", "2-4 Wide", "3-3 Cub", "Load", "Triple", "2-4", "2-4 Odd"], plays: 168 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "1-4 Dbl Mug"], plays: 66 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Detroit Lions": {
    totalPlays: 292,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Over Walk", "Under", "Tite Leo"], plays: 63 },
      "3-4": { sets: ["Bear", "Cub"], plays: 12 },
      "Nickel": { sets: ["3-3 Dbl Mug", "2-4 Single Mug", "3-3 Cub", "3-3 Load Dbl Mug", "3-3 Load Mug", "3-3 Over", "3-3 Swap Dbl Mug", "Over", "Wide", "3-3 Will"], plays: 150 },
      "Dime": { sets: ["2-3-6"], plays: 36 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Green Bay Packers": {
    totalPlays: 377,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "3-4": { sets: ["Grizzly", "Over", "Over Solid", "Tite", "Under"], plays: 63 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Single Mug", "3-3 Cub", "3-3 Swap Dbl Mug", "3-3 Wide Jack", "2-4"], plays: 139 },
      "3-3-5": { sets: ["3 High Over", "Penny", "Penny 3 High"], plays: 45 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3-6", "Load Weak", "1-4 Dbl Mug", "1-4-6"], plays: 87 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Houston Texans": {
    totalPlays: 308,
    formations: {
      "4-3": { sets: ["Over", "Over Solid", "Over Wide", "Tite Leo"], plays: 48 },
      "5-2": { sets: ["Normal"], plays: 6 },
      "Nickel": { sets: ["3-3 Dbl Mug", "3-3 Load Mug", "Load", "Load Dbl Mug", "Over", "Single Mug", "Wide"], plays: 139 },
      "4-2-5": { sets: ["Over G", "Over Wide", "Under"], plays: 60 },
      "Dime": { sets: ["Normal", "Rush"], plays: 36 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Indianapolis Colts": {
    totalPlays: 325,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over Solid"], plays: 15 },
      "3-4": { sets: ["Cub", "Tite", "Under"], plays: 39 },
      "Nickel": { sets: ["3-3 Dbl Mug", "3-3 Cub", "3-3 Load Dbl Mug", "3-3 Over", "Over", "Single Mug", "Wide", "3-3 Will"], plays: 117 },
      "4-2-5": { sets: ["Over G"], plays: 18 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "Rush", "1-4 Dbl Mug"], plays: 87 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Jacksonville Jaguars": {
    totalPlays: 299,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Over Solid"], plays: 33 },
      "46": { sets: ["Bear Under"], plays: 6 },
      "3-4": { sets: ["Under"], plays: 15 },
      "Nickel": { sets: ["3-3 Dbl Mug", "3-3 Load Mug", "3-3 Swap Dbl Mug", "Over", "Wide", "3-3 Single Mug"], plays: 127 },
      "4-2-5": { sets: ["Over G", "Over Wide"], plays: 42 },
      "3-3-5": { sets: ["Over Flex"], plays: 18 },
      "Dime": { sets: ["Load Weak", "3-2-6"], plays: 39 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Kansas City Chiefs": {
    totalPlays: 379,
    formations: {
      "4-3": { sets: ["Odd", "Over", "Over Solid", "Over Walk", "Over Wide", "Under"], plays: 69 },
      "46": { sets: ["Normal"], plays: 9 },
      "Nickel": { sets: ["Double Mug", "Load", "Load Dbl Mug", "Load Mug", "Over", "Single Mug", "Swap Dbl Mug", "Wide"], plays: 156 },
      "4-2-5": { sets: ["Over G", "Over Wide"], plays: 42 },
      "3-3-5": { sets: ["Over Flex", "Penny"], plays: 39 },
      "Dime": { sets: ["2-3 Single Mug", "Normal"], plays: 33 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Las Vegas Raiders": {
    totalPlays: 329,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over Walk", "Odd Leo"], plays: 30 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Over", "Under"], plays: 33 },
      "Nickel": { sets: ["3-3 Dbl Mug", "3-3 Cub", "3-3 Load Dbl Mug", "3-3 Load Mug", "3-3 Wide Jack", "Over", "Triple", "3-3 Single Mug"], plays: 145 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "2-3-6 Will"], plays: 75 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Los Angeles Chargers": {
    totalPlays: 368,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "46": { sets: ["Normal"], plays: 9 },
      "3-4": { sets: ["Grizzly", "Odd", "Over", "Over Solid", "Under"], plays: 66 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Wide", "3-3 Cub", "Load Mug", "Single Mug", "Swap Dbl Mug", "Triple", "2-4"], plays: 167 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "1-4 Dbl Mug", "1-4-6"], plays: 87 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Los Angeles Rams": {
    totalPlays: 337,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "3-4": { sets: ["Cub", "Even", "Odd", "Over", "Under 4t"], plays: 63 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Wide", "2-4"], plays: 123 },
      "3-3-5": { sets: ["Penny"], plays: 21 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "Rush"], plays: 72 },
      "Quarter": { sets: ["Normal"], plays: 15 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Miami Dolphins": {
    totalPlays: 308,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Over Solid"], plays: 36 },
      "3-4": { sets: ["Under"], plays: 18 },
      "2-5": { sets: ["Over Wide"], plays: 15 },
      "Nickel": { sets: ["3-3 Dbl Mug", "3-3 Cub", "3-3 Load Mug", "Over", "Wide", "3-3 Single Mug"], plays: 121 },
      "4-2-5": { sets: ["Over G"], plays: 24 },
      "3-3-5": { sets: ["Over Flex", "Over Wide"], plays: 36 },
      "Dime": { sets: ["Load Weak", "3-2-6"], plays: 39 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Minnesota Vikings": {
    totalPlays: 436,
    formations: {
      "4-3": { sets: ["Even 6-1", "Odd Leo"], plays: 21 },
      "3-4": { sets: ["Even", "Over", "Over Solid", "Tite 5t", "Under", "Over Ed"], plays: 81 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Swap Dbl Mug", "2-4 Wide", "3-3 Odd", "2-4"], plays: 165 },
      "4-2-5": { sets: ["3 High"], plays: 12 },
      "3-3-5": { sets: ["Penny 3 High"], plays: 12 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "Rush", "1-4 Dbl Mug", "1-4-6"], plays: 108 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "New England Patriots": {
    totalPlays: 331,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Under"], plays: 42 },
      "3-4": { sets: ["Grizzly", "Over", "Over Solid", "Under", "Over Ed"], plays: 63 },
      "5-2": { sets: ["Normal"], plays: 6 },
      "Nickel": { sets: ["3-3 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Wide", "3-3 Over", "Load Mug", "Over", "Single Mug", "2-4 Odd", "3-3 Will"], plays: 138 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "Load Weak"], plays: 63 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "New Orleans Saints": {
    totalPlays: 344,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Cub", "Odd", "Over", "Under"], plays: 54 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load", "2-4 Load Mug", "2-4 Swap Dbl Mug", "Load Dbl Mug", "Wide", "2-4"], plays: 148 },
      "3-3-5": { sets: ["Penny"], plays: 21 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "1-4-6"], plays: 75 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "New York Giants": {
    totalPlays: 394,
    formations: {
      "46": { sets: ["Normal"], plays: 9 },
      "3-4": { sets: ["Odd", "Over", "Over Solid", "Tite", "Under", "Over Ed"], plays: 84 },
      "2-5": { sets: ["Over Wide"], plays: 15 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load", "2-4 Single Mug", "2-4 Wide", "3-3 Load Dbl Mug", "3-3 Load Mug", "2-4"], plays: 138 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "Rush", "2-3-6 Will", "1-4-6"], plays: 117 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "New York Jets": {
    totalPlays: 337,
    formations: {
      "4-3": { sets: ["Over", "Over Solid"], plays: 27 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Grizzly", "Over", "Under", "Over Ed"], plays: 57 },
      "Nickel": { sets: ["3-3 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Single Mug", "3-3 Cub", "3-3 Load Mug", "3-3 Over", "Over", "Wide", "3-3 Will"], plays: 132 },
      "Dime": { sets: ["2-3-6", "2-3-6 Will", "1-4-6"], plays: 81 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Philadelphia Eagles": {
    totalPlays: 374,
    formations: {
      "4-3": { sets: ["Even 6-1"], plays: 6 },
      "3-4": { sets: ["Cub", "Over", "Over Solid", "Tite", "Under 4t"], plays: 63 },
      "2-5": { sets: ["Over Wide"], plays: 15 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load", "2-4 Load Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Wide", "3-3 Cub", "Triple", "2-4", "2-4 Odd"], plays: 181 },
      "3-3-5": { sets: ["Penny"], plays: 21 },
      "Dime": { sets: ["2-3-6", "Rush"], plays: 57 },
      "Dollar": { sets: ["Sugar 3-2"], plays: 12 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Pittsburgh Steelers": {
    totalPlays: 313,
    formations: {
      "4-3": { sets: ["Odd Leo"], plays: 12 },
      "3-4": { sets: ["Cub", "Even", "Over", "Tite", "Under"], plays: 60 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Wide", "3-3 Load Dbl Mug", "3-3 Load Mug", "3-3 Over", "Over", "Single Mug", "Triple", "3-3 Will"], plays: 132 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "1-4 Dbl Mug", "2-3-6 Will"], plays: 90 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "San Francisco 49ers": {
    totalPlays: 329,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Over Solid", "Over Walk", "Over Wide", "Under"], plays: 66 },
      "3-4": { sets: ["Over Solid"], plays: 9 },
      "5-2": { sets: ["Normal"], plays: 6 },
      "Nickel": { sets: ["2-4 Load Dbl Mug", "3-3 Cub", "Double Mug", "Load", "Load Mug", "Over", "Single Mug", "Wide"], plays: 151 },
      "4-2-5": { sets: ["Over Wide", "Under"], plays: 33 },
      "Dime": { sets: ["Normal", "3-2-6"], plays: 45 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Seattle Seahawks": {
    totalPlays: 424,
    formations: {
      "4-3": { sets: ["Over Solid", "Under", "Odd Leo"], plays: 39 },
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Over", "Tite 5t", "Under", "Over Ed"], plays: 66 },
      "2-5": { sets: ["Over Wide"], plays: 15 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Wide", "3-3 Cub", "3-3 Odd", "2-4"], plays: 147 },
      "3-3-5": { sets: ["Over Flex"], plays: 18 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3-6", "3-2 Swap Dbl Mug", "Rush", "1-4 Dbl Mug"], plays: 87 },
      "Quarter": { sets: ["Over Load"], plays: 6 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Tampa Bay Buccaneers": {
    totalPlays: 331,
    formations: {
      "4-4": { sets: ["Split"], plays: 9 },
      "3-4": { sets: ["Bear", "Cub", "Grizzly", "Over", "Over Solid", "Under"], plays: 66 },
      "2-5": { sets: ["Over Wide"], plays: 15 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Swap Dbl Mug", "3-3 Cub", "3-3 Wide Jack", "Triple", "2-4", "2-4 Odd"], plays: 150 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6 Will", "1-4-6"], plays: 54 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Tennessee Titans": {
    totalPlays: 332,
    formations: {
      "4-3": { sets: ["Even 6-1", "Over", "Over Solid", "Over Walk", "Over Wide", "Under"], plays: 66 },
      "46": { sets: ["Bear"], plays: 9 },
      "3-4": { sets: ["Over Solid"], plays: 9 },
      "Nickel": { sets: ["2-4 Load Dbl Mug", "3-3 Cub", "Double Mug", "Load", "Load Mug", "Over", "Single Mug", "Wide"], plays: 151 },
      "4-2-5": { sets: ["Over Wide", "Under"], plays: 33 },
      "Dime": { sets: ["Normal", "3-2-6"], plays: 45 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  },
  "Washington Commanders": {
    totalPlays: 436,
    formations: {
      "4-3": { sets: ["Even 6-1", "Odd Leo"], plays: 21 },
      "3-4": { sets: ["Even", "Over", "Over Solid", "Tite 5t", "Under", "Over Ed"], plays: 81 },
      "Nickel": { sets: ["2-4 Dbl Mug", "2-4 Load Dbl Mug", "2-4 Load Mug", "2-4 Single Mug", "2-4 Swap Dbl Mug", "2-4 Wide", "3-3 Odd", "2-4"], plays: 165 },
      "4-2-5": { sets: ["3 High"], plays: 12 },
      "3-3-5": { sets: ["Penny 3 High"], plays: 12 },
      "2-4-5": { sets: ["Over Wide"], plays: 18 },
      "Dime": { sets: ["2-3 Single Mug", "2-3-6", "Rush", "1-4 Dbl Mug", "1-4-6"], plays: 108 },
      "Goal Line": { sets: ["6-2", "Pinch", "5-3"], plays: 13 },
      "Prevent": { sets: ["3 Deep"], plays: 6 }
    }
  }
};

// ============================================================
// SECTION 2: SCHEME / ALTERNATE DEFENSIVE PLAYBOOKS
// ============================================================

const SCHEME_DEFENSIVE_PLAYBOOKS = {
  "3-4 Defense": {
    totalPlays: 214,
    formations: {
      "3-4": {
        sets: {
          "Bear": { personnel: "Base 3-4", plays: 9 },
          "Odd": { personnel: "Base 3-4", plays: 15 },
          "Over": { personnel: "Base 3-4", plays: 15 },
          "Under": { personnel: "Base 3-4", plays: 15 }
        },
        totalPlays: 54
      },
      "Nickel": {
        sets: {
          "2-4 Dbl Mug": { personnel: "Base 3-4", plays: 15 },
          "3-3": { personnel: "Nickel 3-3-5", plays: 15 },
          "2-4": { personnel: "Nickel 2-4-5", plays: 42 }
        },
        totalPlays: 72
      },
      "Dime": {
        sets: {
          "2-3-6": { personnel: "Big Dime 4-1-6", plays: 36 },
          "2-3-6 Sam": { personnel: "Big Dime 2-3-6", plays: 18 }
        },
        totalPlays: 54
      },
      "Quarter": {
        sets: {
          "1-3-7": { personnel: "Big Quarter 1-3-7", plays: 15 }
        },
        totalPlays: 15
      },
      "Goal Line": {
        sets: {
          "6-2": { personnel: "6-2-3", plays: 6 },
          "Pinch": { personnel: "6-2-3", plays: 1 },
          "5-3": { personnel: "5-3", plays: 6 }
        },
        totalPlays: 13
      },
      "Prevent": {
        sets: {
          "3 Deep": { personnel: "Big Quarter 3-1-7", plays: 6 }
        },
        totalPlays: 6
      }
    }
  },

  "4-3 Defense": {
    totalPlays: 226,
    formations: {
      "4-3": {
        sets: {
          "Over": { personnel: "Base 4-3", plays: 15 },
          "Over Solid": { personnel: "Base 4-3", plays: 9 },
          "Over Wide": { personnel: "Base 4-3", plays: 9 },
          "Under": { personnel: "Base 4-3", plays: 15 }
        },
        totalPlays: 48
      },
      "4-4": {
        sets: {
          "Split": { personnel: "4-4-3", plays: 9 }
        },
        totalPlays: 9
      },
      "Nickel": {
        sets: {
          "Double Mug": { personnel: "Nickel 4-2-5", plays: 15 },
          "Over": { personnel: "Nickel 4-2-5", plays: 42 },
          "Wide": { personnel: "Nickel 4-2-5", plays: 21 },
          "3-3": { personnel: "Nickel 3-3-5", plays: 15 }
        },
        totalPlays: 93
      },
      "4-2-5": {
        sets: {
          "Over G": { personnel: "Big Nickel 4-2-5", plays: 24 }
        },
        totalPlays: 24
      },
      "Dime": {
        sets: {
          "Normal": { personnel: "Dime 4-1-6", plays: 18 },
          "Single Mug": { personnel: "Dime 4-1-6", plays: 15 }
        },
        totalPlays: 33
      },
      "Goal Line": {
        sets: {
          "6-2": { personnel: "6-2-3", plays: 6 },
          "Pinch": { personnel: "6-2-3", plays: 1 },
          "5-3": { personnel: "5-3", plays: 6 }
        },
        totalPlays: 13
      },
      "Prevent": {
        sets: {
          "3 Deep": { personnel: "Big Quarter 3-1-7", plays: 6 }
        },
        totalPlays: 6
      }
    }
  },

  "46 Defense": {
    totalPlays: 215,
    formations: {
      "4-4": {
        sets: {
          "Split": { personnel: "4-4-3", plays: 10 }
        },
        totalPlays: 10
      },
      "46": {
        sets: {
          "Bear": { personnel: "Base 4-3", plays: 9 },
          "Bear Under": { personnel: "Base 4-3", plays: 6 },
          "Normal": { personnel: "Base 4-3", plays: 9 }
        },
        totalPlays: 24
      },
      "3-4": {
        sets: {
          "Bear": { personnel: "Base 3-4", plays: 9 }
        },
        totalPlays: 9
      },
      "Nickel": {
        sets: {
          "3-3 Cub": { personnel: "Nickel 4-2-5", plays: 12 },
          "Double Mug": { personnel: "Nickel 4-2-5", plays: 15 },
          "Over": { personnel: "Nickel 4-2-5", plays: 42 },
          "3-3": { personnel: "Nickel 3-3-5", plays: 15 }
        },
        totalPlays: 84
      },
      "4-2-5": {
        sets: {
          "Over G": { personnel: "Big Nickel 4-2-5", plays: 24 }
        },
        totalPlays: 24
      },
      "Dime": {
        sets: {
          "Normal": { personnel: "Dime 4-1-6", plays: 18 },
          "3-2-6": { personnel: "Dime 3-2-6", plays: 27 }
        },
        totalPlays: 45
      },
      "Goal Line": {
        sets: {
          "6-2": { personnel: "6-2-3", plays: 6 },
          "Pinch": { personnel: "6-2-3", plays: 1 },
          "5-3": { personnel: "5-3", plays: 6 }
        },
        totalPlays: 13
      },
      "Prevent": {
        sets: {
          "3 Deep": { personnel: "Big Quarter 3-1-7", plays: 6 }
        },
        totalPlays: 6
      }
    }
  },

  "Cover 2 Defense": {
    totalPlays: 163,
    formations: {
      "4-3": {
        sets: {
          "Over": { personnel: "Base 4-3", plays: 15 },
          "Over Wide": { personnel: "Base 4-3", plays: 9 },
          "Under": { personnel: "Base 4-3", plays: 15 }
        },
        totalPlays: 39
      },
      "Nickel": {
        sets: {
          "Double Mug": { personnel: "Nickel 4-2-5", plays: 15 },
          "Over": { personnel: "Nickel 4-2-5", plays: 42 },
          "3-3": { personnel: "Nickel 3-3-5", plays: 15 }
        },
        totalPlays: 72
      },
      "Dime": {
        sets: {
          "Normal": { personnel: "Dime 4-1-6", plays: 18 }
        },
        totalPlays: 18
      },
      "Quarter": {
        sets: {
          "Normal": { personnel: "Big Quarter 3-1-7", plays: 15 }
        },
        totalPlays: 15
      },
      "Goal Line": {
        sets: {
          "6-2": { personnel: "6-2-3", plays: 6 },
          "Pinch": { personnel: "6-2-3", plays: 1 },
          "5-3": { personnel: "5-3", plays: 6 }
        },
        totalPlays: 13
      },
      "Prevent": {
        sets: {
          "3 Deep": { personnel: "Big Quarter 3-1-7", plays: 6 }
        },
        totalPlays: 6
      }
    }
  },

  "Multiple D Defense": {
    totalPlays: 304,
    formations: {
      "4-3": {
        sets: {
          "Odd": { personnel: "Base 4-3", plays: 9 },
          "Over": { personnel: "Base 4-3", plays: 15 },
          "Under": { personnel: "Base 4-3", plays: 15 }
        },
        totalPlays: 39
      },
      "3-4": {
        sets: {
          "Cub": { personnel: "Base 3-4", plays: 6 },
          "Odd": { personnel: "Base 3-4", plays: 15 }
        },
        totalPlays: 21
      },
      "5-2": {
        sets: {
          "Normal": { personnel: "Base 3-4", plays: 6 }
        },
        totalPlays: 6
      },
      "Nickel": {
        sets: {
          "3-3 Dbl Mug": { personnel: "Base 3-4", plays: 15 },
          "3-3 Cub": { personnel: "Nickel 4-2-5", plays: 12 },
          "3-3 Over Jack": { personnel: "Nickel 4-2-5", plays: 42 },
          "3-3 Swap Dbl Mug": { personnel: "Nickel 4-2-5", plays: 18 },
          "3-3 Wide Jack": { personnel: "Nickel 4-2-5", plays: 24 },
          "3-3": { personnel: "Nickel 3-3-5", plays: 15 }
        },
        totalPlays: 126
      },
      "2-4-5": {
        sets: {
          "Over Wide": { personnel: "Big Nickel 4-2-5", plays: 18 }
        },
        totalPlays: 18
      },
      "Dime": {
        sets: {
          "Normal": { personnel: "Dime 4-1-6", plays: 18 },
          "1-4 Dbl Mug": { personnel: "Big Dime 3-2-6", plays: 15 },
          "3-2-6": { personnel: "Dime 3-2-6", plays: 27 }
        },
        totalPlays: 60
      },
      "Quarter": {
        sets: {
          "Normal": { personnel: "Big Quarter 3-1-7", plays: 15 }
        },
        totalPlays: 15
      },
      "Goal Line": {
        sets: {
          "6-2": { personnel: "6-2-3", plays: 6 },
          "Pinch": { personnel: "6-2-3", plays: 1 },
          "5-3": { personnel: "5-3", plays: 6 }
        },
        totalPlays: 13
      },
      "Prevent": {
        sets: {
          "3 Deep": { personnel: "Big Quarter 3-1-7", plays: 6 }
        },
        totalPlays: 6
      }
    }
  },

  "Madden Defense": {
    totalPlays: 118,
    formations: {
      "4-3": {
        sets: {
          "Even 6-1": { personnel: "Base 4-3", plays: 9 }
        },
        totalPlays: 9
      },
      "4-4": {
        sets: {
          "Split": { personnel: "4-4-3", plays: 6 }
        },
        totalPlays: 6
      },
      "3-4": {
        sets: {
          "Bear": { personnel: "Base 3-4", plays: 9 },
          "Odd": { personnel: "Base 3-4", plays: 15 }
        },
        totalPlays: 24
      },
      "5-2": {
        sets: {
          "Normal": { personnel: "Base 3-4", plays: 6 }
        },
        totalPlays: 6
      },
      "Nickel": {
        sets: {
          "Over": { personnel: "Nickel 4-2-5", plays: 21 },
          "3-3": { personnel: "Nickel 3-3-5", plays: 15 }
        },
        totalPlays: 36
      },
      "Dime": {
        sets: {
          "Normal": { personnel: "Dime 4-1-6", plays: 18 }
        },
        totalPlays: 18
      },
      "Goal Line": {
        sets: {
          "6-2": { personnel: "6-2-3", plays: 6 },
          "Pinch": { personnel: "6-2-3", plays: 1 },
          "5-3": { personnel: "5-3", plays: 6 }
        },
        totalPlays: 13
      },
      "Prevent": {
        sets: {
          "3 Deep": { personnel: "Big Quarter 3-1-7", plays: 6 }
        },
        totalPlays: 6
      }
    }
  }
};

// ============================================================
// SECTION 3: ALL DEFENSIVE FORMATIONS AND SUB-FORMATIONS
// Every formation family with all known sub-formation variations
// ============================================================

const ALL_DEFENSIVE_FORMATIONS = {
  // --- BASE FORMATIONS ---
  "4-3": {
    personnel: "4 DL, 3 LB, 4 DB",
    category: "Base",
    subFormations: [
      "Even 6-1",
      "Odd",
      "Over",
      "Over Solid",
      "Over Walk",
      "Over Wide",
      "Under",
      "Odd Leo",
      "Tite Leo"
    ],
    description: "Traditional 4 down linemen, 3 linebackers base defense. Strong against the run with 4-man rush."
  },
  "3-4": {
    personnel: "3 DL, 4 LB, 4 DB",
    category: "Base",
    subFormations: [
      "Bear",
      "Cub",
      "Even",
      "Grizzly",
      "Odd",
      "Over",
      "Over Ed",
      "Over Solid",
      "Tite",
      "Tite 5t",
      "Tite Grizzly",
      "Under",
      "Under 4t"
    ],
    description: "3 down linemen with 4 linebackers. Versatile blitz packages with OLB edge rushers."
  },
  "46": {
    personnel: "4 DL, 3 LB, 4 DB (8-man box look)",
    category: "Base",
    subFormations: [
      "Bear",
      "Bear Under",
      "Normal"
    ],
    description: "Aggressive 8-man box look. SS moves into the box as an extra run defender. Great run stopping formation."
  },
  "4-4": {
    personnel: "4 DL, 4 LB, 3 DB",
    category: "Base",
    subFormations: [
      "Split"
    ],
    description: "Heavy box formation with 4 linemen and 4 linebackers. Excellent against the run, vulnerable to the pass."
  },
  "5-2": {
    personnel: "5 DL, 2 LB, 4 DB",
    category: "Base",
    subFormations: [
      "Normal"
    ],
    description: "5-man front with 2 linebackers. Clogs running lanes but limited coverage options."
  },
  "2-5": {
    personnel: "2 DL, 5 LB, 4 DB",
    category: "Base",
    subFormations: [
      "Over Wide"
    ],
    description: "Light front with 5 linebackers providing versatile blitz and coverage options."
  },

  // --- NICKEL FORMATIONS (5 DB) ---
  "Nickel": {
    personnel: "Variable DL, Variable LB, 5 DB",
    category: "Sub Package",
    subFormations: [
      // 4-2-5 Nickel variations
      "Over",
      "Wide",
      "Double Mug",
      "Single Mug",
      "Load",
      "Load Mug",
      "Load Dbl Mug",
      "Swap Dbl Mug",
      "Triple",
      // 3-3-5 Nickel variations
      "3-3",
      "3-3 Cub",
      "3-3 Dbl Mug",
      "3-3 Load Dbl Mug",
      "3-3 Load Mug",
      "3-3 Odd",
      "3-3 Over",
      "3-3 Over Jack",
      "3-3 Single Mug",
      "3-3 Swap Dbl Mug",
      "3-3 Wide Jack",
      "3-3 Will",
      // 2-4-5 Nickel variations
      "2-4",
      "2-4 Dbl Mug",
      "2-4 Load",
      "2-4 Load Dbl Mug",
      "2-4 Load Mug",
      "2-4 Odd",
      "2-4 Single Mug",
      "2-4 Swap Dbl Mug",
      "2-4 Wide"
    ],
    description: "5 defensive backs replace a linebacker. The most common sub package in modern Madden. Nickel Over is the most popular set with 42-57 plays."
  },
  "4-2-5": {
    personnel: "4 DL, 2 LB, 5 DB (Big Nickel)",
    category: "Sub Package",
    subFormations: [
      "Over G",
      "Over Wide",
      "Under",
      "3 High"
    ],
    description: "Big Nickel package. Extra DB replaces a linebacker while keeping 4 down linemen. Over G is the most popular set."
  },
  "2-4-5": {
    personnel: "2 DL, 4 LB, 5 DB",
    category: "Sub Package",
    subFormations: [
      "Over Wide"
    ],
    description: "Light front nickel look with only 2 down linemen but 4 linebackers and 5 DBs."
  },

  // --- 3-3-5 FORMATIONS ---
  "3-3-5": {
    personnel: "3 DL, 3 LB, 5 DB",
    category: "Sub Package",
    subFormations: [
      "Penny",
      "Penny 3 High",
      "3 High Over",
      "Over Flex",
      "Over Wide"
    ],
    description: "3-3-5 defense with penny back (extra nickel DB). Strong against spread offenses with flexible coverage."
  },

  // --- DIME FORMATIONS (6 DB) ---
  "Dime": {
    personnel: "Variable DL, Variable LB, 6 DB",
    category: "Sub Package",
    subFormations: [
      // Standard Dime (4-1-6)
      "Normal",
      "Single Mug",
      "Rush",
      // Big Dime variations
      "2-3-6",
      "2-3-6 Sam",
      "2-3-6 Will",
      "2-3 Single Mug",
      "Load Weak",
      // Other Dime
      "3-2-6",
      "3-2 Swap Dbl Mug",
      "1-4 Dbl Mug",
      "1-4-6"
    ],
    description: "6 defensive backs on the field. Used in obvious passing situations. Dime 2-3-6 is the largest set with 36-39 plays."
  },

  // --- DOLLAR FORMATION (6+ DB, aggressive) ---
  "Dollar": {
    personnel: "3 DL, 2 LB, 6 DB",
    category: "Sub Package",
    subFormations: [
      "Sugar 3-2"
    ],
    description: "Aggressive sub package with 6 DBs designed for blitzing and pass defense. Sugar 3-2 brings pressure from multiple angles."
  },

  // --- QUARTER FORMATION (7 DB) ---
  "Quarter": {
    personnel: "3 DL, 1 LB, 7 DB",
    category: "Sub Package",
    subFormations: [
      "Normal",
      "1-3-7",
      "Over Load"
    ],
    description: "7 defensive backs on the field. Maximum pass coverage. Used in Hail Mary or desperation pass situations."
  },

  // --- GOAL LINE ---
  "Goal Line": {
    personnel: "6 DL, 2-3 LB, 2-3 DB",
    category: "Specialty",
    subFormations: [
      "6-2",
      "5-3",
      "Pinch"
    ],
    description: "Heavy run-stopping package near the goal line. Maximum players in the box."
  },

  // --- PREVENT ---
  "Prevent": {
    personnel: "3 DL, 1 LB, 7 DB",
    category: "Specialty",
    subFormations: [
      "3 Deep"
    ],
    description: "Deep prevent defense. All 32 teams and all scheme playbooks include Prevent 3 Deep with 6 plays."
  }
};

// ============================================================
// SECTION 4: PLAYS/COVERAGES AVAILABLE PER FORMATION
// Actual play names found in the game for key formations
// ============================================================

const FORMATION_PLAYS = {
  // --- 4-3 OVER (21 plays) ---
  "4-3 Over": [
    "Cover 1 Contain", "Cover 1 Hole", "Cover 1 Hole Press", "Cover 1 Robber Press",
    "Cover 1 Sting WK", "Cover 2 Hard Flat", "Cover 2 Man", "Cover 3 Cloud Press",
    "Cover 3 Sky", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6",
    "Dbl Safety Blitz", "Free Fire", "Free Fire 3", "Olb Fire Man",
    "Press Quarters", "Sam Edge 3", "Scene 4 4-3 Defense", "Tampa 2",
    "Thunder Smoke"
  ],

  // --- 4-3 UNDER (25 plays) ---
  "4-3 Under": [
    "2 Invert Hard Flat", "Cover 1 Contain Press", "Cover 1 FS Fire", "Cover 1 Hole",
    "Cover 1 Hole Press", "Cover 1 Robber Press", "Cover 1 Slant Crash", "Cover 2 Invert",
    "Cover 2 Man", "Cover 3 Hard Flat", "Cover 3 Match", "Cover 3 Seam Press",
    "Cover 3 Sky WK", "Cover 4 Quarters", "Free Fire", "Free Fire Ls",
    "FS Fire 3", "Hammer 0 Blast", "Mike Sam Crash Press", "Safety Blitz",
    "Sam Blitz 2", "SS Sam Crash Press", "Tampa 2", "Will Go Fire 3",
    "WK Corner Blitz"
  ],

  // --- 3-4 ODD (17 plays) ---
  "3-4 Odd": [
    "Cover 1 Hole", "Cover 1 Robber", "Cover 2 Hard Flat", "Cover 3 Match",
    "Cover 3 Sky", "Cover 4 Drop Show 2", "Cover 4 Quarters", "Cover 6",
    "Crash Blitz 3", "Cross 3 Fire", "Pinch Buck 0", "Pinch Dog 2 Press",
    "Saw Blitz 1", "SS 2 Trap", "Storm Brave 1", "Tampa 2",
    "Will Buck 3 Press"
  ],

  // --- 46 BEAR (9 plays) ---
  "46 Bear": [
    "46 Mid Blitz", "Cover 1", "Cover 3", "Engage Eight",
    "Gap Press", "LB Blitz 3", "Safety Fire", "Slant Weak",
    "Slant Weak 3"
  ],

  // --- NICKEL OVER (57 plays - largest formation set) ---
  "Nickel Over": [
    "1 Double Slot", "1 Double TE", "1 Double Wr1", "1 Double Wr2",
    "Bracket 9 Switch", "Bracket Switch Willie", "Cov 2 Man Contain",
    "Cov 3 Buzz Match WK", "Cover 1 Contain", "Cover 1 Hole", "Cover 1 Hole Press",
    "Cover 1 LB Blitz", "Cover 1 Robber Press", "Cover 1 SS Blitz",
    "Cover 2 Drop", "Cover 2 Hard Flat", "Cover 2 Invert", "Cover 2 Man",
    "Cover 2 Match", "Cover 2 Roll", "Cover 3 Buzz Mable", "Cover 3 Buzz Match",
    "Cover 3 Cloud", "Cover 3 Hard Flat", "Cover 3 Match", "Cover 3 Sky",
    "Cover 3 Sky KO", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters",
    "Cover 4 Quarters CK Bingo", "Cover 4 Quarters CK Stress",
    "Cover 4 Quarters CK Zone It", "Cover 6", "Cover 6 Willie",
    "Cover 9 Sammie", "Cover 9 Show 2", "Dbl Safety Blitz",
    "Double Bracket", "Double Bracket Switch", "Edge Blitz 0", "Edge Blitz 3",
    "Field Sim 3", "FS Will Blitz 0", "Nickel 2 Trap", "Nickel Blitz 2",
    "Nickel Blitz 3", "Nickel Sim 2", "Overload 3 Seam", "Overload Blitz",
    "Over Storm Brave", "Roll 23 Cloud", "Roll Cover 2 Invert",
    "Roll Cover 3 Cloud", "Show SS Sim 2", "Sim Pressure 3", "Tampa 2"
  ],

  // --- NICKEL 2-4 (52 plays) ---
  "Nickel 2-4": [
    "1 Double Slot", "1 Double TE", "1 Double Wr1", "1 Double Wr2",
    "Bracket 9 Switch", "Bracket Switch Willie", "Buck Slant 3",
    "Cover 1 Contain", "Cover 1 Hole", "Cover 1 Hole Press", "Cover 1 LB Blitz",
    "Cover 1 Robber", "Cover 1 Robber Press", "Cover 2 Hard Flat",
    "Cover 2 Invert", "Cover 2 Man", "Cover 2 Match", "Cover 2 Roll",
    "Cover 3 Buzz Mable", "Cover 3 Cloud", "Cover 3 Hard Flat", "Cover 3 Match",
    "Cover 3 Sky", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters",
    "Cover 6", "Cover 6 Willie", "Cover 9 Sammie", "Cover 9 Show 2",
    "Cross Sim 2", "Dbl Safety Blitz", "Double Bracket", "Double Bracket Switch",
    "Edge Blitz 0", "Edge Blitz 3", "Field Sim 3", "FS Will Blitz 0",
    "Nickel 2 Trap", "Nickel Sim 2", "Overload 3 Seam", "Over Storm Brave",
    "Pounder", "Roll 23 Cloud", "Roll Cover 2 Invert", "Roll Cover 3 Cloud",
    "Roll King", "Roll Ring", "Show SS Sim 2", "Silver Shoot Pinch",
    "Sim Pressure 3", "Tampa 2"
  ],

  // --- NICKEL 3-3 (20 plays) ---
  "Nickel 3-3": [
    "3 Double Buzz", "3 Overload Fire Press", "Cov 2 Invert Hard Flat",
    "Cover 1 Contain Spy", "Cover 1 Robber Press", "Cover 2 Drop",
    "Cover 2 Invert", "Cover 2 Man", "Cover 3 Drop", "Cover 3 Sky Drop KO",
    "Cover 4 Drop", "LB All Go", "LB Blitz 1", "LB Cross 3",
    "Loop Crash 2", "Nickel 2 Trap", "Nickel LB Blitz", "Overload Blitz 3",
    "SS Mike Blitz", "Tampa 2"
  ],

  // --- NICKEL WIDE (26 plays) ---
  "Nickel Wide": [
    "CB Zone Blitz Press", "Cov 2 Invert Hard Flat", "Cov 3 Buzz Match",
    "Cov 3 Buzz Match WK", "Cover 1 Hole", "Cover 1 LB Blitz",
    "Cover 1 Robber Press", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Cloud",
    "Cover 3 Match", "Cover 3 Sky KO", "Cover 3 Sky Press", "Cover 4 Palms",
    "Cover 4 Quarters", "Cover 4 Zone", "Cover 6", "Cover 6 Zone",
    "Cover 9 Show 2", "Cover 9 Zone", "Dbl Safety Blitz", "Nickel 2 Trap",
    "Nickel Blitz 3", "Over Storm Brave", "Silver Shoot Pinch", "Tampa 2 Contain"
  ],

  // --- NICKEL DOUBLE MUG (16 plays) ---
  "Nickel Double Mug": [
    "2 Invert Hard Flat", "Blitz Loop 3", "Buck Zone Blitz", "Coffee House 3 Seam",
    "Cover 1 Hole", "Cover 2 Invert", "Cover 3 Match", "Cover 3 Sky",
    "Field Sim 3", "Mid Blitz", "Nickel 2 Trap", "Nickel Dog 3 Buzz",
    "Nickel Overload 3", "Nickel Sim 2", "SS Blitz 3", "Tampa 2"
  ],

  // --- NICKEL 2-4 DBL MUG (17 plays) ---
  "Nickel 2-4 Dbl Mug": [
    "2 Invert Hard Flat", "Blitz Loop 3", "Buck Zone Blitz", "Coffee House 3 Seam",
    "Cover 1 Hole", "Cover 2", "Cover 2 Invert", "Cover 3 Match",
    "Cover 3 Sky", "Field Sim 3", "Mid Blitz", "Nickel 2 Trap",
    "Nickel Dog 3 Buzz", "Nickel Dog Meg", "Nickel Overload 3", "Nickel Sim 2",
    "SS Dog 3"
  ],

  // --- NICKEL 3-3 CUB (14 plays) ---
  "Nickel 3-3 Cub": [
    "1 Sam SS Blitz", "3 Sam SS Blitz", "3 Sam Will Blitz", "CB Blitz 2",
    "Cover 1 Contain", "Cover 1 Robber", "Cover 3 Buzz", "Cover 4 Show 2",
    "LB Blitz 1", "Mike Blitz 0", "Nickel Blitz 3", "Olb Blitz 1",
    "SS Blitz 0", "Tampa 2"
  ],

  // --- BIG NICKEL OVER G (24 plays) ---
  "Big Nickel Over G": [
    "Casino Blitz", "Corner Blitz 3", "Cover 1 Hole", "Cover 2",
    "Cover 2 Contain", "Cover 2 Man", "Cover 3 Buzz Match", "Cover 3 Match",
    "Cover 3 Sky", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6",
    "Cover 6 Invert", "Cover 6 Trap", "Cover 9", "LB Blitz",
    "Mike SS 3", "Pinch Blitz", "SS Blitz 2", "SS Blitz 3",
    "SS LB Blitz", "WS Blitz 1", "WS Blitz 2", "WS Blitz 3"
  ],

  // --- 3-3-5 PENNY (24 plays) ---
  "3-3-5 Penny": [
    "3 Sam Will Blitz", "Corner Blitz 2", "Corner Blitz 3", "Cover 1 Hole",
    "Cover 1 Robber", "Cover 3 Buzz", "Cover 3 Match", "Cover 3 Sky",
    "Cover 4 Palms", "Cover 4 Quarters", "Cover 6", "Cover 6 Willie",
    "Cover 9", "Cover Hole 1", "Double Double", "Hot Blitz 3",
    "Mike Blitz 0", "Mike Blitz 1", "Pinch Blitz 0", "Sam Mike 3 Press",
    "Saw Blitz 1", "Saw Blitz 3", "Slot Blitz 3", "Tampa 2"
  ],

  // --- DIME NORMAL (20 plays) ---
  "Dime Normal": [
    "3 Double Buzz", "Cover 1 Contain", "Cover 1 Robber Press", "Cover 2 Hard Flat",
    "Cover 2 Man", "Cover 2 Man KO", "Cover 3 Buzz Match", "Cover 3 Buzz Press",
    "Cover 3 Cloud", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6",
    "DB Blitz 0", "Dbl Safety Blitz", "Dime Blitz 3", "LB Blitz 1",
    "Overload 3 Show 2", "Scene 44-2 Defense", "SS Blitz 3", "Tampa 2"
  ],

  // --- DIME 2-3-6 (57 plays - huge set) ---
  "Dime 2-3-6": [
    "1 Double Slot", "1 Double TE", "1 Double Wr1", "1 Double Wr2",
    "Bracket 9 Switch", "Bracket Switch Willie", "Buck Slant 3",
    "Cover 1 Hole", "Cover 1 LB Blitz", "Cover 1 QB Contain",
    "Cover 1 Robber Show 2", "Cover 2 Hard Flat", "Cover 2 Invert",
    "Cover 2 Man", "Cover 2 Sink", "Cover 3 Bluff", "Cover 3 Buzz Mable",
    "Cover 3 Buzz Match", "Cover 3 Buzz Show 2", "Cover 3 Hard Flat",
    "Cover 3 Match", "Cover 3 Sky", "Cover 4 Palms", "Cover 4 Quarters",
    "Cover 6", "Cover 6 Invert", "Cover 6 Show 2", "Cover 6 Willie",
    "Cover 9 Sammie", "Cover 9 Show 2", "Dbl Safety Blitz",
    "Double Bracket", "Double Bracket Switch", "Edge Blitz 0", "Edge Blitz 3",
    "Field Sim 3", "FS Middle 3", "FS Will Blitz 0", "Man Double Buzz",
    "Nickel 2 Trap", "Nickel Sim 2", "Overload 3 Press", "Over Storm Brave",
    "Pounder", "Press Quarters", "Prowl Slant 3 Seam", "Roll 23 Cloud",
    "Roll Cover 2 Invert", "Roll Cover 3 Cloud", "Roll King", "Roll Ring",
    "Silver Shoot Pinch", "Sim Pressure 3", "Slant Zone 2",
    "SS Overload 3", "Tampa 2", "Under Smoke 2"
  ],

  // --- DOLLAR SUGAR 3-2 (14 plays) ---
  "Dollar Sugar 3-2": [
    "Cover 1 Robber Press", "Cover 2 Drop", "Cover 2 Man LB Blitz",
    "Cover 3 Sky", "Cover 4 Drop", "DB Fire 2", "Dbl Safety Go",
    "Dt Mike Loop 0", "Dt Mike Loop 1", "Overload 3 Seam", "Overload Blitz",
    "SS Zone Blitz", "Tampa 2", "Zero Blitz"
  ],

  // --- QUARTER NORMAL (15 plays) ---
  "Quarter Normal": [
    "3 DBL Mable Cloud", "3 Double Buzz", "3 Double Mable", "Cover 1 Thief",
    "Cover 2 Man Spy", "Cover 2 Spy", "Cover 3 Mable", "Cover 3 Spy",
    "Cover 4 Drop", "DB Strike 1", "Fz 2 Deep", "Fz 3 Sky",
    "Man Up 3 Deep", "Overload 3", "Under Smoke"
  ],

  // --- PREVENT 3 DEEP (6 plays - universal) ---
  "Prevent 3 Deep": [
    "3 Deep Blitz", "Cover 1 Contain", "Cover 2 Drop",
    "Cover 3", "Man 3 Deep", "Prevent"
  ],

  // --- GOAL LINE 6-2 (6 plays) ---
  "Goal Line 6-2": [
    "Cover 1", "Cover 2 Man", "Engage Eight",
    "Goal Line Blitz", "Pinch", "Stuff"
  ]
};

// ============================================================
// SECTION 5: MASTER LIST OF ALL COVERAGE SHELLS IN THE GAME
// Every coverage concept that appears across all formations
// ============================================================

const ALL_COVERAGE_CONCEPTS = {
  // MAN COVERAGES
  "Cover 0": {
    shell: "0 Deep", type: "Man",
    variants: ["Cover 0", "Zero Blitz", "Engage Eight", "Edge Blitz 0", "Mike Blitz 0", "Pinch Blitz 0", "FS Will Blitz 0", "SS Blitz 0", "Hammer 0 Blast"]
  },
  "Cover 1": {
    shell: "1 Deep", type: "Man",
    variants: [
      "Cover 1", "Cover 1 Contain", "Cover 1 Contain Press", "Cover 1 Contain Spy",
      "Cover 1 FS Fire", "Cover 1 Hole", "Cover 1 Hole Press",
      "Cover 1 LB Blitz", "Cover 1 QB Contain", "Cover 1 Robber",
      "Cover 1 Robber Press", "Cover 1 Robber Show 2", "Cover 1 Slant Crash",
      "Cover 1 SS Blitz", "Cover 1 Sting WK", "Cover 1 Thief",
      "1 Double Slot", "1 Double TE", "1 Double Wr1", "1 Double Wr2"
    ]
  },
  "Cover 2 Man": {
    shell: "2 Deep", type: "Man",
    variants: [
      "Cover 2 Man", "Cover 2 Man Contain", "Cover 2 Man KO",
      "Cover 2 Man LB Blitz", "Cover 2 Man Spy", "Cov 2 Man Contain"
    ]
  },

  // ZONE COVERAGES
  "Cover 2 Zone": {
    shell: "2 Deep", type: "Zone",
    variants: [
      "Cover 2", "Cover 2 Drop", "Cover 2 Hard Flat", "Cover 2 Invert",
      "Cover 2 Match", "Cover 2 Roll", "Cover 2 Sink", "Cover 2 Spy",
      "Cover 2 Contain", "Tampa 2", "Tampa 2 Contain",
      "2 Invert Hard Flat", "Cov 2 Invert Hard Flat",
      "Roll Cover 2 Invert"
    ]
  },
  "Cover 3": {
    shell: "3 Deep", type: "Zone",
    variants: [
      "Cover 3", "Cover 3 Bluff", "Cover 3 Buzz", "Cover 3 Buzz Mable",
      "Cover 3 Buzz Match", "Cover 3 Buzz Match WK", "Cover 3 Buzz Press",
      "Cover 3 Buzz Show 2", "Cover 3 Cloud", "Cover 3 Cloud Press",
      "Cover 3 Drop", "Cover 3 Hard Flat", "Cover 3 Mable", "Cover 3 Match",
      "Cover 3 Seam Press", "Cover 3 Sky", "Cover 3 Sky Drop KO",
      "Cover 3 Sky KO", "Cover 3 Sky Press", "Cover 3 Sky WK", "Cover 3 Spy",
      "Roll 23 Cloud", "Roll Cover 3 Cloud",
      "3 Double Buzz", "3 Double Mable", "3 DBL Mable Cloud",
      "Cov 3 Buzz Match", "Cov 3 Buzz Match WK"
    ]
  },
  "Cover 4": {
    shell: "4 Deep", type: "Zone",
    variants: [
      "Cover 4 Drop", "Cover 4 Drop Field", "Cover 4 Drop Show 2",
      "Cover 4 Palms", "Cover 4 Quarters", "Cover 4 Quarters CK Bingo",
      "Cover 4 Quarters CK Stress", "Cover 4 Quarters CK Zone It",
      "Cover 4 Show 2", "Cover 4 Zone", "Press Quarters"
    ]
  },
  "Cover 6": {
    shell: "Mixed (Cover 4 + Cover 2)", type: "Zone",
    variants: [
      "Cover 6", "Cover 6 Invert", "Cover 6 Show 2", "Cover 6 Trap",
      "Cover 6 Willie", "Cover 6 Zone"
    ]
  },
  "Cover 9": {
    shell: "Mixed (Cover 3 + Man)", type: "Hybrid",
    variants: [
      "Cover 9", "Cover 9 Sammie", "Cover 9 Show 2", "Cover 9 Zone"
    ]
  },

  // SPECIALTY
  "Prevent": {
    shell: "3+ Deep", type: "Zone",
    variants: ["Prevent", "Man 3 Deep", "Fz 2 Deep", "Fz 3 Sky", "Man Up 3 Deep"]
  }
};

// ============================================================
// SECTION 6: BLITZ CATEGORIES FOUND IN THE GAME
// ============================================================

const BLITZ_CATEGORIES = {
  "Safety Blitz": [
    "Dbl Safety Blitz", "Dbl Safety Go", "Safety Blitz", "Safety Fire",
    "SS Blitz 0", "SS Blitz 2", "SS Blitz 3", "SS Dog 3",
    "SS LB Blitz", "SS Mike Blitz", "SS Overload 3", "SS Zone Blitz",
    "Cover 1 SS Blitz", "FS Will Blitz 0", "FS Fire 3", "FS Middle 3",
    "WS Blitz 1", "WS Blitz 2", "WS Blitz 3", "Show SS Sim 2"
  ],
  "LB Blitz": [
    "Cover 1 LB Blitz", "LB All Go", "LB Blitz", "LB Blitz 1",
    "LB Blitz 3", "LB Cross 3", "Mike Blitz 0", "Mike Blitz 1",
    "Nickel LB Blitz", "SS LB Blitz", "Sam Edge 3", "Sam Blitz 2",
    "3 Sam Will Blitz", "3 Sam SS Blitz", "1 Sam SS Blitz"
  ],
  "DB Blitz": [
    "CB Blitz 2", "CB Zone Blitz Press", "Corner Blitz 2", "Corner Blitz 3",
    "DB Blitz 0", "DB Fire 2", "DB Strike 1", "WK Corner Blitz"
  ],
  "Edge/Overload Blitz": [
    "Edge Blitz 0", "Edge Blitz 3", "Overload 3", "Overload 3 Press",
    "Overload 3 Seam", "Overload 3 Show 2", "Overload Blitz",
    "Overload Blitz 3", "Nickel Overload 3"
  ],
  "Nickel/Dime Blitz": [
    "Nickel 2 Trap", "Nickel Blitz 2", "Nickel Blitz 3",
    "Nickel Dog 3 Buzz", "Nickel Dog Meg", "Nickel Sim 2",
    "Dime Blitz 3", "Casino Blitz", "Pinch Blitz"
  ],
  "Sim Pressure": [
    "Cross Sim 2", "Field Sim 3", "Nickel Sim 2", "Show SS Sim 2",
    "Sim Pressure 3"
  ],
  "Fire Zone": [
    "Cover 1 FS Fire", "Cross 3 Fire", "Free Fire", "Free Fire 3",
    "Free Fire Ls", "FS Fire 3", "Olb Fire Man", "3 Overload Fire Press"
  ],
  "Zero Blitz": [
    "Zero Blitz", "Engage Eight", "46 Mid Blitz", "Mid Blitz",
    "Pinch Buck 0", "Hammer 0 Blast"
  ]
};

// ============================================================
// SECTION 7: PERSONNEL GROUPING REFERENCE
// ============================================================

const DEFENSIVE_PERSONNEL = {
  "Base 4-3": { dl: 4, lb: 3, db: 4, description: "Standard 4-3 with 4 down linemen, 3 LBs, 4 DBs" },
  "Base 3-4": { dl: 3, lb: 4, db: 4, description: "Standard 3-4 with 3 down linemen, 4 LBs, 4 DBs" },
  "4-4-3": { dl: 4, lb: 4, db: 3, description: "Heavy package with 8 in the box" },
  "Nickel 4-2-5": { dl: 4, lb: 2, db: 5, description: "Standard Nickel with extra CB replacing a LB" },
  "Nickel 3-3-5": { dl: 3, lb: 3, db: 5, description: "Nickel 3-3-5 with 3 DL and 3 LBs" },
  "Nickel 2-4-5": { dl: 2, lb: 4, db: 5, description: "Light front nickel with 2 DL" },
  "Big Nickel 4-2-5": { dl: 4, lb: 2, db: 5, description: "Big Nickel - extra safety instead of corner" },
  "Dime 4-1-6": { dl: 4, lb: 1, db: 6, description: "Standard Dime with 6 DBs" },
  "Dime 3-2-6": { dl: 3, lb: 2, db: 6, description: "Dime variant with 3 DL" },
  "Big Dime 4-1-6": { dl: 4, lb: 1, db: 6, description: "Big Dime - extra safety in Dime package" },
  "Big Dime 2-3-6": { dl: 2, lb: 3, db: 6, description: "Big Dime variant with light front" },
  "Big Dime 1-4-6": { dl: 1, lb: 4, db: 6, description: "Big Dime with 1 DL and 4 LBs" },
  "Big Quarter 3-1-7": { dl: 3, lb: 1, db: 7, description: "Quarter defense with 7 DBs for max coverage" },
  "Big Quarter 1-3-7": { dl: 1, lb: 3, db: 7, description: "Quarter variant with 1 DL" },
  "6-2-3": { dl: 6, lb: 2, db: 3, description: "Goal Line package with 6 DL" }
};

export {
  TEAM_DEFENSIVE_PLAYBOOKS,
  SCHEME_DEFENSIVE_PLAYBOOKS,
  ALL_DEFENSIVE_FORMATIONS,
  FORMATION_PLAYS,
  ALL_COVERAGE_CONCEPTS,
  BLITZ_CATEGORIES,
  DEFENSIVE_PERSONNEL
};
