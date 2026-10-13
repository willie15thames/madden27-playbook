// Madden 27 - ALL Offensive & Defensive Playbooks with Formations and Plays

// ========== OFFENSIVE PLAYBOOKS ==========
const OFFENSIVE_PLAYBOOKS = [
  {
    id: "arizona_cardinals",
    name: "Arizona Cardinals",
    style: "Spread",
    formations: {
      "Singleback": {
        "Ace": ["HB Dive", "PA Crossers", "Mesh", "Inside Zone", "HB Stretch", "PA Boot Over", "Spot", "Curl Flat"],
        "Ace Pair": ["PA Shot Seams", "Levels", "HB Power", "Flood", "Y Trail", "HB Draw"],
        "Y Trips": ["PA Deep Outs", "4 Verticals", "HB Stretch", "Mesh Over", "Drag Over", "Inside Zone"],
        "Bunch": ["Bunch Trail", "HB Power", "PA Post Shot", "Smash", "HB Dive", "Screen"],
        "Deuce Close": ["HB Toss", "PA Scissors", "Inside Zone", "Counter", "Flood"],
        "Wing Tight": ["Power O", "PA Boot", "Dive", "Sweep", "Play Action"]
      },
      "Shotgun": {
        "Bunch": ["Mesh", "Stick", "PA Crossers", "HB Screen", "Corner Strike", "Verticals"],
        "Cluster": ["Smash", "PA Read", "Inside Zone", "Curl Flat", "HB Wheel", "Levels"],
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "Trips TE": ["PA Boot Over", "Flood", "HB Stretch", "Mesh", "Spot", "4 Verticals"],
        "Empty Trey": ["Mesh", "4 Verticals", "Drag Over", "Quick Slants", "Stick"],
        "5 Wide": ["Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over", "Screens"],
        "Doubles": ["Inside Zone", "PA Read", "Levels", "Curl Flat", "HB Draw", "4 Verticals"],
        "Trey Open": ["Inside Zone", "PA Crossers", "4 Verticals", "HB Draw", "Levels", "Stick"]
      },
      "I-Form": {
        "Pro": ["HB Dive", "PA Crossers", "Power O", "HB Toss", "Play Action Deep"],
        "Tight": ["HB Dive", "Power O", "Lead Draw", "PA Boot", "Counter"],
        "Close": ["HB Stretch", "Power O", "PA Deep Outs", "Counter", "FB Dive"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "PA Read", "Mesh", "HB Stretch", "Stick", "4 Verticals"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "HB Counter", "4 Verticals"],
        "Strong": ["Power O", "PA Boot", "Inside Zone", "Counter", "HB Stretch"]
      },
      "Gun Split Close": {
        "Base": ["Inside Zone", "HB Draw", "PA Crossers", "Levels", "Mesh", "4 Verticals"]
      },
      "Wildcat": {
        "Normal": ["Jet Sweep", "Power", "Counter", "End Around", "Read Option"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "PA Boot", "Fade"]
      }
    }
  },
  {
    id: "baltimore_ravens",
    name: "Baltimore Ravens",
    style: "Run Heavy / RPO",
    formations: {
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Power O", "HB Stretch", "Mesh", "Counter"],
        "Ace Close": ["HB Dive", "PA Boot", "Inside Zone", "Counter", "Flood"],
        "Bunch": ["Mesh", "HB Stretch", "PA Deep Outs", "Spot", "Inside Zone"],
        "Wing Tight": ["Power O", "Counter", "HB Toss", "PA Boot", "Dive"]
      },
      "Shotgun": {
        "Spread": ["RPO Read", "Inside Zone", "PA Crossers", "4 Verticals", "Read Option", "HB Draw"],
        "Trips TE": ["RPO Alert", "Inside Zone", "PA Boot Over", "Mesh", "Flood"],
        "Bunch": ["RPO Peek", "Mesh", "Stick", "Inside Zone", "Corner Strike"],
        "Empty Trey": ["Quick Slants", "Mesh", "4 Verticals", "Drag Over", "Spot"],
        "Doubles": ["Inside Zone", "RPO Read", "Levels", "PA Crossers", "HB Draw"],
        "Split Close": ["RPO Alert", "Inside Zone", "HB Draw", "Levels", "Mesh", "Read Option"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "Counter", "PA Crossers", "HB Toss", "Lead Dive"],
        "Tight": ["Power O", "HB Dive", "FB Dive", "Counter", "PA Boot"],
        "Close": ["HB Stretch", "Power O", "Counter", "PA Deep", "FB Dive"]
      },
      "Pistol": {
        "Strong": ["Read Option", "Inside Zone", "Power Read", "PA Boot", "Counter"],
        "Trips": ["Read Option", "RPO Read", "Inside Zone", "PA Crossers", "4 Verticals"],
        "Bunch": ["Inside Zone", "RPO Peek", "Mesh", "Power Read", "Stretch"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "FB Dive", "PA Boot"]
      }
    }
  },
  {
    id: "buffalo_bills",
    name: "Buffalo Bills",
    style: "Spread / Pass Heavy",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen", "Verticals"],
        "Trips TE": ["Flood", "PA Boot Over", "HB Stretch", "Mesh", "4 Verticals"],
        "Empty Trey": ["Quick Slants", "Mesh", "4 Verticals", "Drag Over", "Stick"],
        "5 Wide": ["Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over"],
        "Doubles": ["Inside Zone", "Levels", "PA Crossers", "Curl Flat", "4 Verticals"],
        "Cluster": ["Smash", "Inside Zone", "Curl Flat", "HB Wheel", "Levels"],
        "Split Close": ["Inside Zone", "HB Draw", "Levels", "PA Crossers", "Mesh"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "HB Stretch", "Spot", "Power O"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Stick", "Screen"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Drag Over", "Mesh Over"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "HB Stretch", "Stick"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "I-Form": {
        "Pro": ["HB Dive", "Power O", "PA Crossers", "Counter", "HB Toss"],
        "Tight": ["Power O", "HB Dive", "Counter", "PA Boot", "FB Dive"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "PA Boot"]
      }
    }
  },
  {
    id: "kansas_city_chiefs",
    name: "Kansas City Chiefs",
    style: "West Coast / Spread",
    formations: {
      "Shotgun": {
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen", "Verticals"],
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "Trips TE": ["PA Boot Over", "Flood", "HB Stretch", "Mesh", "Spot", "4 Verticals"],
        "Empty Trey": ["Mesh", "4 Verticals", "Drag Over", "Quick Slants", "Stick"],
        "5 Wide": ["Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over", "Screens"],
        "Doubles": ["Inside Zone", "PA Read", "Levels", "Curl Flat", "4 Verticals"],
        "Cluster": ["Smash", "PA Read", "Inside Zone", "Curl Flat", "HB Wheel"],
        "Trey Open": ["Inside Zone", "4 Verticals", "PA Crossers", "Stick", "Levels"],
        "Split Close": ["Inside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "HB Stretch", "PA Boot Over"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Stick", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Mesh Over", "Drag Over"],
        "Deuce Close": ["Inside Zone", "HB Toss", "PA Scissors", "Counter", "Flood"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Stick", "4 Verticals"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "HB Counter"],
        "Strong": ["Power O", "Inside Zone", "PA Boot", "Counter", "Stretch"]
      },
      "I-Form": {
        "Pro": ["HB Dive", "PA Crossers", "Power O", "HB Toss", "PA Deep"],
        "Close": ["Power O", "HB Stretch", "Counter", "PA Boot", "FB Dive"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "PA Boot", "Fade"]
      }
    }
  },
  {
    id: "dallas_cowboys",
    name: "Dallas Cowboys",
    style: "Balanced / Power Run",
    formations: {
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Power O", "HB Stretch", "Mesh", "Counter"],
        "Ace Close": ["HB Dive", "Power O", "PA Boot", "Inside Zone", "Flood"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Spot", "Stick"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Drag Over", "Mesh Over"],
        "Deuce Close": ["HB Toss", "Inside Zone", "Counter", "PA Scissors", "Flood"],
        "Wing Tight": ["Power O", "Counter", "PA Boot", "HB Toss", "Dive"]
      },
      "Shotgun": {
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen"],
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "HB Draw"],
        "Trips TE": ["Flood", "PA Boot Over", "HB Stretch", "Mesh", "Spot"],
        "Doubles": ["Inside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "Split Close": ["Inside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"],
        "Trey Open": ["Inside Zone", "PA Crossers", "4 Verticals", "Stick", "Levels"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss", "Lead Draw"],
        "Tight": ["Power O", "HB Dive", "FB Dive", "Counter", "PA Boot"],
        "Close": ["HB Stretch", "Power O", "PA Deep Outs", "Counter", "FB Dive"]
      },
      "Pistol": {
        "Strong": ["Power O", "Inside Zone", "PA Boot", "Counter", "HB Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"],
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "HB Stretch", "Stick"]
      },
      "Strong Close": {
        "Base": ["Power O", "Counter", "HB Dive", "PA Boot", "Stretch"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "PA Boot", "FB Dive"]
      }
    }
  },
  {
    id: "san_francisco_49ers",
    name: "San Francisco 49ers",
    style: "West Coast / Outside Zone",
    formations: {
      "Singleback": {
        "Ace": ["Outside Zone", "PA Crossers", "Mesh", "HB Stretch", "Power O", "Inside Zone"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Spot", "Screen"],
        "Deuce Close": ["Outside Zone", "HB Toss", "PA Scissors", "Counter", "Flood"],
        "Wing Tight": ["Power O", "Outside Zone", "PA Boot", "Counter", "Sweep"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Outside Zone", "Drag Over", "Mesh Over"]
      },
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Outside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen"],
        "Trips TE": ["PA Boot Over", "Flood", "Outside Zone", "Mesh", "4 Verticals"],
        "Doubles": ["Outside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "Cluster": ["Smash", "PA Read", "Outside Zone", "Curl Flat", "Levels"],
        "Split Close": ["Outside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"],
        "Empty Trey": ["Mesh", "4 Verticals", "Quick Slants", "Drag Over", "Stick"]
      },
      "I-Form": {
        "Pro": ["Power O", "Outside Zone", "PA Crossers", "HB Toss", "Counter", "PA Deep"],
        "Tight": ["Power O", "Outside Zone", "FB Dive", "Counter", "PA Boot"],
        "Close": ["Outside Zone", "Power O", "Counter", "PA Boot", "FB Dive"]
      },
      "Pistol": {
        "Strong": ["Outside Zone", "Power O", "PA Boot", "Inside Zone", "Counter"],
        "Bunch": ["Outside Zone", "Mesh", "PA Read", "Stretch", "Stick"],
        "Trips": ["Outside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "PA Boot"]
      }
    }
  },
  {
    id: "las_vegas_raiders",
    name: "Las Vegas Raiders",
    style: "Vertical / Deep Shots",
    formations: {
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Power O", "HB Stretch", "Deep Post"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Verticals", "Corner Strike"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Mesh Over", "Drag Over"]
      },
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "Verticals"],
        "5 Wide": ["4 Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "4 Verticals", "HB Stretch"],
        "Doubles": ["Inside Zone", "Levels", "PA Crossers", "4 Verticals", "HB Draw"],
        "Empty Trey": ["4 Verticals", "Mesh", "Quick Slants", "Drag Over", "Stick"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"],
        "Tight": ["Power O", "HB Dive", "Counter", "PA Boot", "FB Dive"]
      },
      "Pistol": {
        "Trips": ["Inside Zone", "PA Crossers", "4 Verticals", "Levels", "Counter"],
        "Strong": ["Power O", "Inside Zone", "PA Boot", "Counter", "Stretch"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "PA Boot"]
      }
    }
  },
  {
    id: "new_england_patriots",
    name: "New England Patriots",
    style: "Erhardt-Perkins / Versatile",
    formations: {
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "Power O", "HB Stretch", "Spot"],
        "Ace Close": ["HB Dive", "Power O", "PA Boot", "Counter", "Flood"],
        "Bunch": ["Mesh", "PA Post Shot", "Stick", "HB Stretch", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Drag Over", "Mesh Over", "Inside Zone"],
        "Wing Tight": ["Power O", "Counter", "PA Boot", "Inside Zone", "HB Toss"]
      },
      "Shotgun": {
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen"],
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "HB Stretch", "Spot"],
        "Doubles": ["Inside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "Split Close": ["Inside Zone", "HB Draw", "Mesh", "Levels", "PA Crossers"],
        "Empty Trey": ["Mesh", "4 Verticals", "Quick Slants", "Drag Over", "Stick"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"],
        "Tight": ["Power O", "HB Dive", "FB Dive", "PA Boot", "Counter"],
        "Close": ["Power O", "HB Stretch", "Counter", "PA Deep", "FB Dive"]
      },
      "Pistol": {
        "Strong": ["Power O", "Inside Zone", "PA Boot", "Counter", "Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "PA Boot", "FB Dive"]
      }
    }
  },
  {
    id: "green_bay_packers",
    name: "Green Bay Packers",
    style: "West Coast / Spread",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "HB Stretch", "4 Verticals"],
        "Doubles": ["Inside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "5 Wide": ["4 Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over"],
        "Cluster": ["Smash", "PA Read", "Inside Zone", "Curl Flat", "HB Wheel"],
        "Split Close": ["Inside Zone", "HB Draw", "Levels", "PA Crossers", "Mesh"],
        "Empty Trey": ["Mesh", "4 Verticals", "Quick Slants", "Drag Over", "Stick"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "HB Stretch", "Spot"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Stick", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Mesh Over", "Drag Over"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Stick", "HB Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"],
        "Close": ["Power O", "HB Stretch", "PA Boot", "Counter", "FB Dive"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "PA Boot"]
      }
    }
  },
  {
    id: "miami_dolphins",
    name: "Miami Dolphins",
    style: "Speed / Spread",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Jet Sweep", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "Jet Sweep"],
        "5 Wide": ["4 Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "Jet Sweep", "4 Verticals"],
        "Empty Trey": ["Mesh", "4 Verticals", "Quick Slants", "Drag Over", "Stick"],
        "Doubles": ["Inside Zone", "Levels", "PA Crossers", "Jet Sweep", "4 Verticals"],
        "Cluster": ["Smash", "PA Read", "Jet Sweep", "Curl Flat", "Levels"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Jet Sweep", "HB Stretch", "Mesh"],
        "Bunch": ["Mesh", "PA Post Shot", "Jet Sweep", "Stick", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Jet Sweep", "Drag Over", "Mesh Over"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "Jet Sweep", "PA Read", "Stick"],
        "Trips": ["Inside Zone", "PA Crossers", "Jet Sweep", "4 Verticals", "Levels"]
      },
      "I-Form": {
        "Pro": ["HB Dive", "Power O", "PA Crossers", "Jet Sweep", "HB Toss"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "Jet Sweep"]
      }
    }
  },
  {
    id: "philadelphia_eagles",
    name: "Philadelphia Eagles",
    style: "RPO / Run Heavy",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["RPO Read", "Inside Zone", "PA Crossers", "Levels", "HB Draw"],
        "Bunch": ["RPO Peek", "Mesh", "Stick", "PA Crossers", "HB Screen"],
        "Trips TE": ["RPO Alert", "PA Boot Over", "Flood", "Mesh", "Inside Zone"],
        "Doubles": ["RPO Read", "Inside Zone", "Levels", "PA Crossers", "4 Verticals"],
        "Split Close": ["RPO Alert", "Inside Zone", "HB Draw", "Mesh", "Levels"],
        "Trey Open": ["Inside Zone", "RPO Read", "PA Crossers", "4 Verticals", "Stick"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "RPO Read", "PA Crossers", "Power O", "HB Stretch"],
        "Bunch": ["RPO Peek", "Mesh", "PA Post Shot", "HB Stretch", "Stick"],
        "Wing Tight": ["Power O", "Counter", "RPO Alert", "PA Boot", "Sweep"]
      },
      "Pistol": {
        "Strong": ["Read Option", "Power O", "Inside Zone", "PA Boot", "Counter"],
        "Trips": ["Read Option", "RPO Read", "Inside Zone", "PA Crossers", "4 Verticals"],
        "Bunch": ["Inside Zone", "RPO Peek", "Mesh", "Power Read", "Stretch"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"],
        "Tight": ["Power O", "HB Dive", "FB Dive", "Counter", "PA Boot"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Tush Push", "PA Boot"]
      }
    }
  },
  {
    id: "detroit_lions",
    name: "Detroit Lions",
    style: "Balanced / Aggressive",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "HB Stretch", "4 Verticals"],
        "Doubles": ["Inside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "Split Close": ["Inside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "Power O", "HB Stretch"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Stick", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Drag Over", "Mesh Over"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"],
        "Close": ["Power O", "HB Stretch", "Counter", "PA Boot", "FB Dive"]
      },
      "Pistol": {
        "Strong": ["Power O", "Inside Zone", "PA Boot", "Counter", "Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "PA Boot"]
      }
    }
  },
  {
    id: "run_balanced",
    name: "Run Balanced",
    style: "Generic / Balanced Run",
    formations: {
      "Singleback": {
        "Ace": ["Inside Zone", "Power O", "HB Stretch", "PA Crossers", "Counter", "Mesh"],
        "Ace Close": ["HB Dive", "Power O", "Inside Zone", "PA Boot", "Flood"],
        "Wing Tight": ["Power O", "Counter", "HB Toss", "PA Boot", "Dive", "Sweep"],
        "Deuce Close": ["Inside Zone", "Counter", "HB Toss", "PA Scissors", "Flood"]
      },
      "Shotgun": {
        "Doubles": ["Inside Zone", "PA Read", "Levels", "HB Draw", "4 Verticals"],
        "Trips TE": ["Inside Zone", "PA Boot Over", "Flood", "Mesh", "HB Stretch"],
        "Split Close": ["Inside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"],
        "Bunch": ["Mesh", "Stick", "Inside Zone", "PA Crossers", "HB Screen"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "Counter", "PA Crossers", "HB Toss", "Lead Draw"],
        "Tight": ["Power O", "HB Dive", "FB Dive", "Counter", "PA Boot"],
        "Close": ["HB Stretch", "Power O", "Counter", "PA Deep", "FB Dive"]
      },
      "Strong Close": {
        "Base": ["Power O", "Counter", "HB Dive", "Stretch", "PA Boot"]
      },
      "Pistol": {
        "Strong": ["Power O", "Inside Zone", "Counter", "PA Boot", "Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Counter", "Levels", "4 Verticals"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "FB Dive", "Counter"]
      }
    }
  },
  {
    id: "pass_balanced",
    name: "Pass Balanced",
    style: "Generic / Balanced Pass",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen", "Verticals"],
        "5 Wide": ["4 Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over", "Screens"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "HB Stretch", "Spot", "4 Verticals"],
        "Empty Trey": ["Mesh", "4 Verticals", "Quick Slants", "Drag Over", "Stick"],
        "Doubles": ["Inside Zone", "PA Read", "Levels", "Curl Flat", "4 Verticals"],
        "Cluster": ["Smash", "PA Read", "Inside Zone", "Curl Flat", "HB Wheel", "Levels"],
        "Split Close": ["Inside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"]
      },
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "HB Stretch", "Spot"],
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Stick", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Mesh Over", "Drag Over"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Stick", "HB Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "Fade", "PA Boot"]
      }
    }
  },
  {
    id: "west_coast",
    name: "West Coast",
    style: "Generic / West Coast",
    formations: {
      "Singleback": {
        "Ace": ["Inside Zone", "PA Crossers", "Mesh", "HB Stretch", "Spot", "Curl Flat"],
        "Bunch": ["Mesh", "PA Post Shot", "Stick", "HB Stretch", "Screen", "Spot"],
        "Ace Pair": ["Levels", "PA Shot Seams", "HB Power", "Flood", "Y Trail"],
        "Y Trips": ["PA Deep Outs", "4 Verticals", "Drag Over", "Mesh Over", "Inside Zone"]
      },
      "Shotgun": {
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen"],
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over"],
        "Cluster": ["Smash", "PA Read", "Inside Zone", "Curl Flat", "HB Wheel"],
        "Doubles": ["Inside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "HB Stretch", "Spot"],
        "Split Close": ["Inside Zone", "HB Draw", "Mesh", "Levels", "PA Crossers"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Stick", "HB Stretch"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "I-Form": {
        "Pro": ["Power O", "HB Dive", "PA Crossers", "Counter", "HB Toss"],
        "Close": ["Power O", "HB Stretch", "PA Boot", "Counter", "FB Dive"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Power O", "PA Boot", "Fade"]
      }
    }
  },
  {
    id: "spread",
    name: "Spread",
    style: "Generic / Air Raid",
    formations: {
      "Shotgun": {
        "Spread Y-Flex": ["4 Verticals", "Inside Zone", "PA Crossers", "Levels", "Drag Over", "HB Draw"],
        "5 Wide": ["4 Verticals", "Mesh", "Levels", "Quick Slants", "Drag Over", "Screens"],
        "Bunch": ["Mesh", "Stick", "PA Crossers", "Corner Strike", "HB Screen", "Verticals"],
        "Empty Trey": ["Mesh", "4 Verticals", "Quick Slants", "Drag Over", "Stick"],
        "Trips TE": ["PA Boot Over", "Flood", "Mesh", "4 Verticals", "Spot"],
        "Doubles": ["Inside Zone", "Levels", "PA Read", "Curl Flat", "4 Verticals"],
        "Cluster": ["Smash", "PA Read", "Inside Zone", "Curl Flat", "HB Wheel"],
        "Trey Open": ["Inside Zone", "4 Verticals", "PA Crossers", "Stick", "Levels"],
        "Split Close": ["Inside Zone", "HB Draw", "PA Crossers", "Mesh", "Levels"]
      },
      "Singleback": {
        "Bunch": ["Mesh", "PA Post Shot", "HB Stretch", "Stick", "Spot"],
        "Y Trips": ["4 Verticals", "PA Deep Outs", "Inside Zone", "Drag Over", "Mesh Over"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Stick", "4 Verticals"],
        "Trips": ["Inside Zone", "PA Crossers", "Levels", "4 Verticals", "Counter"]
      },
      "Goal Line": {
        "Normal": ["QB Sneak", "HB Dive", "Fade", "Quick Slants", "PA Boot"]
      }
    }
  }
];


// ========== DEFENSIVE PLAYBOOKS ==========
const DEFENSIVE_PLAYBOOKS = [
  {
    id: "def_34",
    name: "3-4 Defense",
    style: "Odd Front / Versatile",
    formations: {
      "3-4 Odd": {
        "Base": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 4", "Tampa 2"],
        "Over": ["Cover 3", "Cover 1 Robber", "Cover 2 Man Under", "Cover 4 Palms", "Cover 6"],
        "Under": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 4", "Cover 0"],
        "Bear": ["Cover 3", "Cover 1", "Cover 0", "Tampa 2", "Cover 2 Zone"],
        "Pinch": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under", "Cover 4"]
      },
      "3-4 Even": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Cover 6"],
        "61": ["Cover 1", "Cover 3", "Cover 0", "Cover 2 Man Under", "Tampa 2"]
      },
      "Nickel": {
        "Normal": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Cover 2 Man Under", "Tampa 2"],
        "3-3-5": ["Cover 3", "Cover 1", "Cover 4", "Cover 3 Match", "Cover 2 Zone"],
        "2-4-5": ["Cover 3", "Cover 1 Robber", "Cover 2 Zone", "Cover 4 Palms", "Cover 9"],
        "Double A Gap": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under"]
      },
      "Dime": {
        "Normal": ["Cover 4", "Cover 3", "Cover 2 Zone", "Cover 1", "Cover 6"],
        "2-3-6": ["Cover 4", "Cover 3", "Cover 2 Zone", "Cover 1 Robber"]
      },
      "Dollar": {
        "Normal": ["Cover 4", "Cover 3", "Cover 1", "Cover 0", "Prevent"]
      },
      "Quarter": {
        "Normal": ["Cover 4", "Cover 4 Palms", "Cover 6", "Cover 3", "Prevent"],
        "3-3-5": ["Cover 4", "Cover 4 Palms", "Cover 3 Match", "Cover 6"]
      },
      "Goal Line": {
        "Normal": ["Cover 0", "Cover 1", "Cover 3"]
      }
    }
  },
  {
    id: "def_43",
    name: "4-3 Defense",
    style: "Even Front / Zone Heavy",
    formations: {
      "4-3 Over": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 4"],
        "Plus": ["Cover 3", "Cover 1", "Cover 2 Man Under", "Cover 4", "Tampa 2"],
        "Storm": ["Cover 3", "Cover 1 Robber", "Cover 2 Zone", "Cover 4", "Cover 0"]
      },
      "4-3 Under": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Tampa 2"],
        "Even": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 6", "Cover 4 Palms"]
      },
      "4-3 Wide": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 4"]
      },
      "Nickel": {
        "Normal": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Tampa 2", "Cover 2 Man Under"],
        "3-3-5": ["Cover 3", "Cover 1", "Cover 4", "Cover 3 Match", "Cover 2 Zone"],
        "Wide": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 4"],
        "Double A Gap": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under"]
      },
      "Dime": {
        "Normal": ["Cover 4", "Cover 3", "Cover 2 Zone", "Cover 1", "Cover 6"],
        "Flat": ["Cover 4", "Cover 3", "Cover 1", "Cover 2 Zone"]
      },
      "Dollar": {
        "Normal": ["Cover 4", "Cover 3", "Cover 1", "Cover 0", "Prevent"]
      },
      "Quarter": {
        "Normal": ["Cover 4", "Cover 4 Palms", "Cover 6", "Cover 3", "Prevent"],
        "3-3-5": ["Cover 4", "Cover 4 Palms", "Cover 3 Match", "Cover 6"]
      },
      "Goal Line": {
        "Normal": ["Cover 0", "Cover 1", "Cover 3"]
      }
    }
  },
  {
    id: "def_46",
    name: "46 Defense",
    style: "Aggressive / Blitz Heavy",
    formations: {
      "46": {
        "Normal": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under", "Tampa 2"],
        "Bear": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Zone"],
        "Speed": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under"]
      },
      "4-3 Over": {
        "Base": ["Cover 3", "Cover 1", "Cover 2 Zone", "Tampa 2", "Cover 4"]
      },
      "Nickel": {
        "Normal": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 4", "Cover 0"],
        "Double A Gap": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under"]
      },
      "Dime": {
        "Normal": ["Cover 4", "Cover 3", "Cover 1", "Cover 2 Zone"]
      },
      "Quarter": {
        "Normal": ["Cover 4", "Cover 4 Palms", "Cover 3", "Prevent"]
      },
      "Goal Line": {
        "Normal": ["Cover 0", "Cover 1"]
      }
    }
  },
  {
    id: "def_multiple",
    name: "Multiple D",
    style: "Multiple / Versatile",
    formations: {
      "3-4 Odd": {
        "Base": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 4", "Tampa 2"],
        "Over": ["Cover 3", "Cover 1 Robber", "Cover 2 Man Under", "Cover 4 Palms"]
      },
      "4-3 Over": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 4"],
        "Plus": ["Cover 3", "Cover 1", "Cover 2 Man Under", "Cover 4"]
      },
      "4-3 Under": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Tampa 2"]
      },
      "Nickel": {
        "Normal": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Tampa 2", "Cover 2 Man Under"],
        "3-3-5": ["Cover 3", "Cover 1", "Cover 4", "Cover 3 Match", "Cover 2 Zone"],
        "2-4-5": ["Cover 3", "Cover 1 Robber", "Cover 2 Zone", "Cover 4 Palms", "Cover 9"],
        "Wide": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2"],
        "Double A Gap": ["Cover 0", "Cover 1", "Cover 3"]
      },
      "Dime": {
        "Normal": ["Cover 4", "Cover 3", "Cover 2 Zone", "Cover 1", "Cover 6"]
      },
      "Dollar": {
        "Normal": ["Cover 4", "Cover 3", "Cover 1", "Cover 0", "Prevent"]
      },
      "Quarter": {
        "Normal": ["Cover 4", "Cover 4 Palms", "Cover 6", "Cover 3", "Prevent"],
        "3-3-5": ["Cover 4", "Cover 4 Palms", "Cover 3 Match"]
      },
      "Big Nickel": {
        "Over G": ["Cover 3", "Cover 1", "Cover 4", "Cover 2 Zone", "Cover 6"]
      },
      "Goal Line": {
        "Normal": ["Cover 0", "Cover 1", "Cover 3"]
      }
    }
  },
  {
    id: "def_34_bear",
    name: "3-4 Bear",
    style: "Run Stuff / Physical",
    formations: {
      "3-4 Bear": {
        "Base": ["Cover 3", "Cover 1", "Cover 0", "Cover 2 Zone", "Tampa 2"],
        "Over": ["Cover 3", "Cover 1", "Cover 2 Man Under", "Cover 4"]
      },
      "3-4 Odd": {
        "Base": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 4"],
        "Under": ["Cover 3", "Cover 1", "Cover 0", "Tampa 2"]
      },
      "Nickel": {
        "Normal": ["Cover 3", "Cover 1", "Cover 2 Zone", "Cover 4", "Tampa 2"],
        "3-3-5": ["Cover 3", "Cover 1", "Cover 4", "Cover 3 Match"]
      },
      "Dime": {
        "Normal": ["Cover 4", "Cover 3", "Cover 1", "Cover 2 Zone"]
      },
      "Quarter": {
        "Normal": ["Cover 4", "Cover 4 Palms", "Cover 3", "Prevent"]
      },
      "Goal Line": {
        "Normal": ["Cover 0", "Cover 1"]
      }
    }
  },
  {
    id: "def_nickel",
    name: "Nickel",
    style: "Pass Defense / Sub Package",
    formations: {
      "Nickel": {
        "Normal": ["Cover 3", "Cover 2 Zone", "Cover 1", "Cover 4", "Tampa 2", "Cover 2 Man Under", "Cover 9"],
        "3-3-5": ["Cover 3", "Cover 1", "Cover 4", "Cover 3 Match", "Cover 2 Zone", "Cover 4 Palms"],
        "2-4-5": ["Cover 3", "Cover 1 Robber", "Cover 2 Zone", "Cover 4 Palms", "Cover 9"],
        "Wide": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 4"],
        "Double A Gap": ["Cover 0", "Cover 1", "Cover 3", "Cover 2 Man Under"]
      },
      "4-3 Over": {
        "Base": ["Cover 3", "Cover 2 Zone", "Cover 1", "Tampa 2"]
      },
      "Dime": {
        "Normal": ["Cover 4", "Cover 3", "Cover 2 Zone", "Cover 1", "Cover 6"],
        "2-3-6": ["Cover 4", "Cover 3", "Cover 1 Robber", "Cover 2 Zone"]
      },
      "Dollar": {
        "Normal": ["Cover 4", "Cover 3", "Cover 1", "Prevent"]
      },
      "Quarter": {
        "Normal": ["Cover 4", "Cover 4 Palms", "Cover 6", "Cover 3", "Prevent"],
        "3-3-5": ["Cover 4", "Cover 4 Palms", "Cover 3 Match"]
      },
      "Goal Line": {
        "Normal": ["Cover 0", "Cover 1", "Cover 3"]
      }
    }
  }
];

export { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS };
