// Madden 27 - ALL Offensive & Defensive Playbooks with Formations and Plays
// Data sourced from huddle.gg Madden 27 playbook database for accuracy

// ========== OFFENSIVE PLAYBOOKS ==========
const OFFENSIVE_PLAYBOOKS = [
  {
    id: "buffalo_bills",
    name: "Buffalo Bills",
    style: "Spread / Pass Heavy",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag", "HB Pump Draw", "Inside Zone", "Jet Sweep", "MTN Dbl Swing", "MTN FK Swing", "MTN HB Screen", "PA Draw Shot", "PA Jet Sweep", "Spacing", "Stretch Alert Bubble", "Zone Fake Jet"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick", "Stretch Alert Smoke", "Y Corner"],
        "Toad X Nasty": ["HB Mid Zone", "Inside Zone", "MTN HB Toss", "PA Boot", "Spacing", "Stick", "Stretch Alert Bubble"],
        "U Off Stack": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick", "Zone Split"],
        "Wing": ["Close PA Cross", "Close PA Post", "Close Zone Strg", "Curl Combo", "HB Duo", "HB Mid Zone", "HB Stretch Alert Smoke", "MTN H Zone Wk", "MTN HB Toss Crack", "MTN PA FK Slide", "MTN PA Poco Slide", "MTN Spacing", "MTN Z Spot", "PA Boot LT", "PA TE Flood", "TE Attack", "Y Stick", "Zone Split Alert Lookie"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "MTN PA Slide", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "MTN FK Swing", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick", "Stretch Alert Smoke"]
      },
      "I Form": {
        "Pro": ["94 Will", "Alert Z Lookie", "Curls", "FB Dive Fake HB", "FB Fake HB Flip", "HB Counter Str", "HB Duo", "ISO", "PA Boot", "PA Comeback Slide", "PA Power O", "PA WR In", "PA X Dig", "Power O", "Quick Slants", "Stretch Alert X Smoke", "Texas", "X Post"],
        "Y Off Close": ["FB Dive", "HB Counter", "HB Duo", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Sweep"]
      },
      "Pistol": {
        "Open Flex Close": ["HB Stretch", "Inside Zone", "PA Read", "QB Scramble", "Read Option", "RPO Alert"],
        "Strong Slot Close": ["Inside Zone", "PA Boot", "Power Read", "QB Scramble", "Read Option", "RPO Peek"]
      },
      "Gun": {
        "Bunch TE": ["Corner Strike", "Curl Flat", "HB Slip Screen", "Inside Zone", "MTN Bench", "MTN Return Levels", "MTN Z Spot", "Orbit Cross Screen", "Orbit PA HB Wheel", "Orbit RPO Alert Screen"],
        "Bunch Y Nasty": ["Choice Shallow Dig", "Counter Y", "Inside Zone", "Mesh HB Sneak", "MTN China Cross", "MTN HB Choice", "MTN Outside Zone", "MTN Smash Sluggo", "MTN Speed Dig Under", "MTN Spot HB Under", "PA Cross X Whip", "RPO Zone Alert", "Y Flat Goalline", "Z Mesh Goalline", "Z Spot Goalline"],
        "Bunch Y-Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Mesh", "MTN Drive", "PA Seams", "Spacing", "Verticals"],
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Orbit Screen", "Smash", "Stick"],
        "Doubles HB Wk": ["Boomerang 01 Trap", "Boomerang Slot Swing", "Boomerang Y Delay", "Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Base", "HB Cross Screen", "HB Mid Draw", "HB Slip Screen", "Inside Zone", "PA Y-Cross", "Pin Pull Sweep", "RE", "Read Option"],
        "Doubles Z Close Wk": ["Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Bunch": ["Curl Flats", "Divide Wheel", "L Spot", "QB Draw", "Spacing", "Trail", "Verticals", "Y Curl", "Z Spot N Go"],
        "Empty Chips": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Tunnel Screen", "Verticals"],
        "Empty Y Slot": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Normal Y Off": ["Curl Combo", "Dbl Dig", "Double Slants", "Exit RPO Alert Screen", "Exit Slot Option", "Exit Switch Out", "Fake Jet HB Seam", "Fake Jet Pass Power", "Four Verticals", "HB Scissors", "HB Slip Screen", "Inside Zone", "Jet Touch Pass", "MTN Curls", "MTN HB Off Tackle", "MTN PA Read", "MTN PA Verticals", "MTN Scissors", "MTN Y Lead Read Option", "Orbit PA Curls", "Orbit PA Y Screen", "Orbit RPO Alert Swing", "RPO Peek Slant", "Stick Slot Option"],
        "Normal Y Off Close": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split WR Backfield": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Split Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Spread Y-Flex": ["Angle Y Sail", "HB Draw", "HB Slip Screen", "Inside Zone", "MTN Drive", "MTN FK Screen Wheel", "MTN FL Screen", "MTN HB Cross Screen", "MTN Out H-Angle", "MTN Replace", "MTN Shallow HB Angle", "MTN Slot Flags", "MTN Sluggo Replace", "PA Seams", "QB Zone", "RPO Alert Screen", "Spot N Go", "Y-Option"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "Mesh Traffic", "PA Boot", "PA Read", "Stick", "Verticals"],
        "Trey Open HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Middle Screen", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Verticals"],
        "Trips TE": ["China Y Post", "Curl Flat", "Deep In", "Drive Post", "HB Counter", "HB Slip Screen", "Inside Cross", "Inside Zone", "MTN Bench", "MTN Return Levels", "MTN Z Spot", "Orbit Cross Screen", "Orbit PA HB Wheel", "Orbit RPO Alert Screen", "PA Boot Shot", "PA Counter Go", "QB Strong Power", "QB Zone", "Read Option", "RPO Alert Bubble", "Shallow X Dig", "Shuffle MTN FK Screen Wheel", "Shuffle MTN HB Swing", "Shuffle MTN Levels", "Slot Quick Flat", "Verticals", "WR Short Post"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Y Off X Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"],
        "Sneak": ["QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "kansas_city_chiefs",
    name: "Kansas City Chiefs",
    style: "West Coast / Spread",
    formations: {
      "Singleback": {
        "Ace Slot": ["HB Dive", "HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick", "Y Trail"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Jailbreak Screen", "Mesh", "MTN Spot", "PA Draw Shot", "Spacing", "Stick"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Spot"],
        "Deuce Close": ["Counter", "HB Toss", "Inside Zone", "PA Scissors", "Quick Slants", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick", "Stretch"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"],
        "Wing Tight Nasty": ["Counter", "HB Dive", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "HB Toss", "PA Boot", "PA Crossers", "Power O"]
      },
      "Strong": {
        "Jumbo": ["Counter", "HB Dive", "Power O", "Quick Slants", "Stick", "Stretch", "Sweep"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Full House Over Close": ["Counter", "HB Dive", "Inside Zone", "Mesh", "PA Boot", "Power O", "Read Option"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Strike", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN China Cross", "PA Cross", "Spot", "Stick"],
        "Bunch X Nasty": ["Corner Strike", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Smash", "PA Crossers", "Spot"],
        "Bunch Y-Flex": ["Corner Strike", "Four Verticals", "HB Screen", "Inside Zone", "Mesh", "Screens", "MTN Spot", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Corner Strike", "Counter", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Doubles Y Off Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Empty Bunch Y Flex": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Trips Speed": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Normal Off Close Wk": ["Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Read", "Stick"],
        "Spread Dbl Flex Wk": ["Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Stack Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Shallow", "PA Crossers", "Stick"],
        "Tight Open": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Stick"],
        "Tight Y Off": ["01 Trap", "Cheat Outside Zone", "Cheat RPO Zone Alert Bubble", "Cheat Slash Wheel Cross", "Duo", "Fake Jet HB Seam", "Flood Drive", "HB Scissors", "HB Slip Screen", "Jet Touch Pass", "MTN Mesh Spot", "MTN PA Spinner", "MTN Slot Choice", "MTN Spinner HB Inside", "MTN WR Outside Zone", "MTN Y-Corner", "PA Go Slot Cross", "Read Option", "TE Corner", "Wheel Spot", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Trey Open Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Trey Y-Flex Str": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Trio Y-Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Wing Close Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Wing Stack": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight": ["Counter", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Y Off Trio Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Y Off Trips Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Y Off Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "philadelphia_eagles",
    name: "Philadelphia Eagles",
    style: "RPO / Run Heavy",
    formations: {
      "Singleback": {
        "Ace Dbl Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Deuce": ["Counter", "HB Dive", "Inside Zone", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick", "Stretch"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Tight": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "Strong I": {
        "Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "Wildcat": {
        "Trips Over": ["Counter", "End Around", "HB Power", "Inside Zone", "Jet Sweep", "Power", "Read Option"]
      },
      "Pistol": {
        "Bunch": ["Counter", "Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Deuce": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "QB Power", "Read Option", "RPO Alert"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Boot", "Power O", "Read Option", "RPO Peek", "Stretch"],
        "Full House TE": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Quick Slants", "Read Option"],
        "Strong Y Off Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Wing Flex Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Read Option", "RPO Alert", "RPO Power Read", "Stretch"]
      },
      "Gun": {
        "Bunch Quads": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers", "Spacing", "Split Zone"],
        "Bunch TE": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Orbit PA HB Wheel", "RPO Alert Screen"],
        "Bunch X Nasty": ["Corner Strike", "Counter", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "RPO Zone Alert", "Split Zone"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "RPO Alert", "Split Zone", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "RPO Read", "Split Zone"],
        "Doubles Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "RPO Alert", "Split Zone", "Stick"],
        "Empty Base Flex": ["Bubble Screen", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Trey Stack": ["Corner Strike", "Curl Flats", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "MTN PA Read", "Orbit RPO Alert Swing", "Read Option", "RPO Peek Slant", "Stick"],
        "Normal Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "RPO Alert", "Split Zone", "Stick"],
        "Slot Right": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "Split Zone", "Stick", "Verticals"],
        "Spread Flex Wk": ["Counter", "HB Draw", "Inside Zone", "MTN Drive", "PA Boot", "PA Seams", "RPO Alert Screen", "Split Zone", "Spot N Go"],
        "Stack Y Off": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Crossers", "RPO Alert", "Split Zone", "Stick"],
        "Tight Y Off": ["Counter", "Duo", "HB Slip Screen", "Inside Zone", "MTN Mesh Spot", "PA Go Slot Cross", "Read Option", "RPO Zone Alert", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option", "RPO Alert", "Split Zone", "Stick"],
        "Trey Open": ["Corner Strike", "Dagger Deep Curl", "Double Ins", "Four Verticals", "H MTN Flood H-Sneak", "H MTN Mesh", "H MTN X Shallow Cross", "HB Slip Screen", "Inside Zone", "Jet New Orleans", "Levels Switch", "PA Read", "Read Option", "RPO Alert Draw Stick", "Shock H Option", "Slants", "Slot Drive", "Stick", "WR Mid Screen", "Y Corner", "Y-Drag"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "Read Option", "RPO Alert Bubble", "Shuffle MTN Levels", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "Split Zone", "Stick"],
        "Wing": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "Split Zone"],
        "Wing Slot Offset Wk": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "PA Shot Seams", "PA Zone Shot", "Read Option", "Split Zone"],
        "Wing Slot Wk": ["Comeback", "Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "Split Zone"],
        "Wing Stack": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Split Zone"],
        "Y Off Trio Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Alert", "Split Zone", "Stick"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak", "Tush Push"],
        "Sneak": ["QB Sneak", "Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "baltimore_ravens",
    name: "Baltimore Ravens",
    style: "Run Heavy / RPO",
    formations: {
      "Singleback": {
        "Ace Double Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Bunch Ace": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "HB Dive", "Inside Zone", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Tight Doubles": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight Z": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "H Tight": ["Counter", "FB Dive", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Ace Double Wing": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Full House TE": ["Counter", "HB Dive", "Inside Zone", "Levels", "PA Boot", "Power O", "Read Option"],
        "Strong": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Peek"],
        "U Off Trips": ["Counter", "HB Dive", "Inside Zone", "PA Read", "Read Option", "RPO Alert", "RPO Peek"],
        "Wing Tight Z": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA", "Screens Boot", "PA Crossers", "Spacing", "Split Zone"],
        "Bunch Y-Flex": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Split Zone", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "RPO Alert", "Smash", "Split Zone"],
        "Doubles HB Wk": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option", "Split Zone"],
        "Empty Quads": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Hitch", "Quick Slants", "Spacing", "Verticals"],
        "Heavy Raven": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Zone Shot", "Power O", "Read Option", "Spacing", "Split Zone"],
        "Normal Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "RPO Alert", "Split Zone"],
        "Split Wing Nasty": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Crossers", "PA Read", "Read Option", "RPO Alert", "Split Zone"],
        "Spread Dbl Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Boot", "PA Seams", "RPO Alert Screen", "Split Zone"],
        "Tight Slot Flip": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Split Zone", "Stick"],
        "Tight Slots": ["Bench", "Drive Trail", "HB Quick Base", "HB Sweep", "Inside Zone", "Jet Pass FK Zone", "Mesh", "Mid Zone", "MTN Bench Snag N Go", "MTN HB Draw", "MTN Inside Zone", "MTN PA Flood Under", "MTN PA Slide", "MTN Salem Slot Option", "Out N Ups", "PA Shot Portland", "PA Slide", "PA Zone FK Jet", "PA Seam", "Stick", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Shot Seams", "Read Option", "RPO Alert", "Split Zone"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Read Option", "Split Zone", "Stick"],
        "Trey Open Str": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Split Zone", "Stick"],
        "Trips TE Offset": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "Read Option", "RPO Alert Bubble"],
        "Trips TE Offset Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "RPO Alert", "Split Zone"],
        "Trips X Nasty Off Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Split Zone", "Stick"],
        "U Off Trips": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Read Option", "RPO Alert", "Split Zone"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Deep Outs", "PA Read", "PA Shot Seams", "Read Option", "Split Zone"],
        "Wing Slot Wk": ["Comeback", "Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "Split Zone"],
        "Y Off Trio Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Crossers", "RPO Alert", "Split Zone"],
        "Y Off Trio Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Split Zone"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"],
        "Sneak": ["QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "san_francisco_49ers",
    name: "San Francisco 49ers",
    style: "West Coast / Outside Zone",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Spot"],
        "Deuce Close": ["Counter", "HB Stretch", "Inside Zone", "Outside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Deuce Close Tilt": ["Counter", "HB Stretch", "Inside Zone", "Outside Zone", "PA Scissors", "Stretch", "Wide Zone"],
        "Doubles Y Off Flex": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "East Tight": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "PA Cross", "Spacing"],
        "U Off Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "U Off Trips Cluster": ["HB Stretch", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Wide Zone"],
        "Wing Flex Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Wing Slot": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "Outside Zone", "PA Boot", "PA Crossers", "Power O"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "Outside Zone", "PA Power O", "Power O"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "HB Dive", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O", "Read Option", "Stretch"],
        "Strong Y Off Close": ["Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Spacing", "Split Zone"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "Outside Zone", "PA Cross", "PA Read", "RPO Zone Alert", "Split Zone"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Split Zone", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "RPO Alert", "Split Zone"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Hitch", "Quick Outs", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Tight": ["Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Strong Slots": ["Curl Flats", "Mesh", "QB Draw", "Quick Hitch", "Smash", "Spacing", "Stick", "Verticals"],
        "Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone"],
        "Split Twins Stack": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "RPO Alert", "Split Zone", "Stick"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen", "Split Zone"],
        "Tight Base Flex": ["HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Split Zone"],
        "Tight Slot Flip": ["HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Split Zone"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "MTN Mesh Spot", "Outside Zone", "PA Go Slot Cross", "Read Option", "Split Zone", "Zone Fake Jet"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "Split Zone", "Stick", "Verticals"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "Split Zone", "Stick"],
        "U Off Stack": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "RPO Alert", "Split Zone", "Stick"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Split Zone"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "dallas_cowboys",
    name: "Dallas Cowboys",
    style: "Balanced / Power Run",
    formations: {
      "Singleback": {
        "Ace Close": ["HB Dive", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Bunch": ["HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Spot", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "ISO", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Doubles": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Crossers", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Tight Left": ["Counter", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Off Trio Close": ["Counter", "HB Duo", "Inside Zone", "PA Crossers", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"],
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Stretch"],
        "Z Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"]
      },
      "Pistol": {
        "Bunch TE": ["Counter", "Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Strong Y Off Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Trips": ["Counter", "Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "Verticals"]
      },
      "Gun": {
        "Bunch Open TE": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Quick Outs", "Spacing", "Stick"],
        "Bunch Quads Close": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "HB Wheel", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers", "Read Option"],
        "Bunch Spread Nasty": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Split Zone"],
        "Bunch Wide": ["Corner Strike", "Counter", "Curl Flat", "Dig Under", "Inside Zone", "Mesh", "Mesh Over", "PA Crossers", "Spacing", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Sail", "Skinny Post"],
        "Doubles HB Wk": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "PA Shot Seams", "Read Option"],
        "Doubles Y Off Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Crossers", "Power Read", "Stick"],
        "Doubles Z Close": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Levels", "Mills", "PA Read", "Snag"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Smash", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Mesh", "QB Draw", "Quick Outs", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Wk": ["Bench", "Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Quick Outs", "Spot", "Stick"],
        "Spread Y-Flex Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Deep Outs", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Stick"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Spot", "Stick", "WR Screen"],
        "Trey Open": ["Corner Strike", "Curl HB Burst", "Dagger Deep Curl", "Four Verticals", "HB Angle Screen", "HB Base", "HB Cross Screen", "HB Draw", "HB Off Tackle", "HB Slip Screen", "Inside Zone", "Levels Switch", "Mesh", "PA WR In", "Read Option", "RPO Alert Draw Stick", "Same Side Zone", "Shock H Option", "Slants", "Strong Flood", "Y-Drag"],
        "Trey Open Str": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Power Read", "Quick Outs", "Stick"],
        "Trio Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Stick"],
        "Trips TE Offset": ["Corner Strike", "Counter", "Curl Flat", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "Read Option"],
        "Wing Slot Offset": ["Counter", "Dagger", "HB Draw", "Inside Zone", "Inverted Veer", "PA Boot", "PA Read", "Read Option", "Speed Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "detroit_lions",
    name: "Detroit Lions",
    style: "Balanced / Aggressive",
    formations: {
      "Singleback": {
        "Bunch": ["HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Spot", "Stick"],
        "Bunch X Nasty": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Power O", "Stick"],
        "Doubles South": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "U Off Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "Y Off Close": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Maryland I": {
        "Close": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Tight Close": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Gun": {
        "Box Y Split": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Bunch Quads": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Outside Zone", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "MTN Smash", "Outside Zone", "PA Cross", "RPO Zone Alert"],
        "Bunch Y-Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Seams", "Spacing", "Verticals"],
        "Doubles Clamp Stack": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read"],
        "Doubles Hip": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Y Off Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "PA Read", "Stick"],
        "Empty Bunch Open": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Normal Off Close Wk": ["Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Stick"],
        "Spread Dbl Flex Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Slants"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Trio Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Stick"],
        "Trips Y Slot": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Flex Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Stick"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "miami_dolphins",
    name: "Miami Dolphins",
    style: "Speed / Spread",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Quick Slants"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Quick Slants", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Quick Slants", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O", "Quick Slants"],
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O", "Quick Slants"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Scissors", "Power O", "Quick Slants"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "Outside Zone", "PA Boot", "Power O", "Quick Slants"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Quick Slants"]
      },
      "Weak": {
        "Slot Close": ["Counter", "Duo", "HB Dive", "PA Boot", "PA Power O", "Power O", "Quick Slants"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Deuce Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Strong Y Off Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Tight Y Off Flex": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Quick Slants", "Read Option"],
        "Wing Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "RPO Alert", "Stretch"],
        "Wing Flex Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Slants", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch": ["Bunch Trail", "Corner Strike", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch Spread Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post", "Spacing"],
        "Cluster HB Str": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Smash"],
        "Deuce Close": ["Corner Strike", "Counter", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Doubles Y-Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Trey": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Go Go Twins Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Normal Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Split Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Split Close Pro": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Tight": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Slots HB Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Tight Y Off": ["Corner Strike", "Duo", "Four Verticals", "HB Slip Screen", "Inside Zone", "Mesh", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick", "Verticals"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "new_england_patriots",
    name: "New England Patriots",
    style: "Erhardt-Perkins / Versatile",
    formations: {
      "Singleback": {
        "Ace Close": ["HB Dive", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Ace Slot": ["HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick", "Y Trail"],
        "Doubles Off Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Power O", "Stick"],
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trips": ["Counter", "Inside Zone", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "H Tight Close": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Jumbo": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "Power O", "Stretch"]
      },
      "Weak": {
        "Z Close": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Ace": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Bunch TE": ["Counter", "Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"]
      },
      "Gun": {
        "Ace Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick", "Verticals"],
        "Bunch Offset Close": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read"],
        "Bunch Open Offset": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Doubles Flex Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Hip": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Z Close": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Stick", "Verticals"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Stick"],
        "Split Twins Offset Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Tight Offset TE": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Slants"],
        "Tight Slots HB Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off": ["Counter", "Duo", "HB Draw", "HB Slip Screen", "Inside Zone", "Outside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Stick", "Verticals"],
        "Trio Offset": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips TE": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "RPO Alert Bubble", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "U Off Trips Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Trips Wk Nasty Goose": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"],
        "Y Off Trips Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"],
        "Sneak": ["QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "green_bay_packers",
    name: "Green Bay Packers",
    style: "West Coast / Spread",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Quick Slants"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Quick Slants", "Slant Flat", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Drag Over", "HB Duo", "Inside Zone", "PA Boot", "Quick Slants", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Quick Slants", "Spacing", "Wide Zone"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close Flex": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O", "Quick Slants"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Spacing", "Stretch"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "HB Pitch", "PA Boot", "Power O", "Quick Slants", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Strong Y Off Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch Spread": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN China Cross", "PA Cross", "Stick"],
        "Bunch TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post", "Spacing"],
        "Cluster": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash", "Stick"],
        "Cluster HB Str": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Smash"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Tight": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Trey": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Normal Y Off": ["Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "Mesh", "PA Read", "Stick"],
        "Pack Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Split Y Off": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Split Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y-Flex": ["Four Verticals", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "MTN Slot Flags", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Tight Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off": ["Corner Strike", "Duo", "Four Verticals", "HB Slip Screen", "Inside Zone", "Mesh", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Trio": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips TE Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Wing Slot Offset Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Y Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "arizona_cardinals",
    name: "Arizona Cardinals",
    style: "Spread / Air Raid",
    formations: {
      "Singleback": {
        "Bunch": ["HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Spot", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Read", "PA Scissors", "Quick Slants", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Quick Outs", "Quick Slants", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "HB Toss", "Inside Zone", "PA Boot", "Quick Slants", "Spacing"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Quick Slants", "Stick"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Deuce": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Deuce Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Quick Slants", "Read Option"],
        "Strong Y Off Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Box": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "RPO Alert"],
        "Bunch Str Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch X Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce Close": ["Corner Strike", "Counter", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Doubles Hip": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Empty Base Flex": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Split Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Split Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y-Flex Wk": ["Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Spread Y-Slot": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Trips Y Slot": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Trio Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "las_vegas_raiders",
    name: "Las Vegas Raiders",
    style: "Vertical / Deep Shots",
    formations: {
      "Singleback": {
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot", "Spacing"],
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Y Off Trio Close": ["Counter", "HB Duo", "Inside Zone", "PA Crossers", "Power O", "Spacing", "Stick"],
        "Y Trips Close Wing": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Weak": {
        "3WR Flex": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Wing": ["Counter", "Duo", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Split T": {
        "Tight": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off Flex": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "5WR Trio": ["Counter", "Curl Flats", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "QB Draw", "Spacing", "Verticals"],
        "Ace Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick", "Verticals"],
        "Box HB Strong": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Box Offset Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Bunch Str Offset": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Outside Zone"],
        "Bunch Wide Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Spacing"],
        "Doubles Flex Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Spread Y-Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Tight Doubles": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Tight Flex Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Flex Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trio HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trio Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "U Off Trips Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "U Off Trips Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Slot Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Trio": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trips Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read"]
      },
      "Goal Line": {
        "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"]
      },
      "Hail Mary": {
        "Hail Mary": ["Hail Mary"]
      }
    }
  },
  {
    id: "atlanta_falcons",
    name: "Atlanta Falcons",
    style: "Balanced / Play Action",
    formations: {
      "Singleback": {
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Z": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Trips Close": ["Counter", "HB Duo", "Inside Zone", "PA Crossers", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O"],
        "Slot Stack": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Power O", "Power O"]
      },
      "Weak": { "H Close Off": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Split Backs": { "Offset Wing Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch": ["Counter", "Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Bunch TE": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Doubles Hip": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off Stack": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Strong Y Off Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "U Off Trips": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Wing Slot": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Bunch Offset": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read"],
        "Bunch Spread": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Outside Zone"],
        "Bunch Wide Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Spacing"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Open": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Stick", "Verticals"],
        "Normal Off Close Wk": ["Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read"],
        "Normal Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Spread Y Slot Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Slants"],
        "Tight Y Off": ["Counter", "Duo", "HB Draw", "HB Slip Screen", "Inside Zone", "Outside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trey Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trips Y Slot": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"],
        "Y Off Trips Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "chicago_bears",
    name: "Chicago Bears",
    style: "Balanced / West Coast",
    formations: {
      "Singleback": {
        "Ace Double Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stick"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Spacing", "Stick", "Stretch Alert Bubble", "Zone Split"],
        "East Tight": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick"],
        "Tight Doubles": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "Slant Flat", "Spacing", "Stick"],
        "U Off Stack": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "U Off Trips": ["Curl Flat", "Inside Zone", "PA Read", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["Curl Flat", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stick", "Stretch"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Stick", "Stretch", "Sweep"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Stick"]
      },
      "Strong I": { "H Wing": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O"] },
      "Weak": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Spacing", "Stick"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Spacing", "Stick", "Stretch"]
      },
      "Gun": {
        "Bunch Open TE": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch Spread": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch X Nasty": ["Corner Strike", "Curl Flat", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Double Stack": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option", "Spacing", "Stick"],
        "Empty Base Trio": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Slot Right": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Spread": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spacing", "Stick"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Spacing", "Stick"],
        "Tight Y Off Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "Spacing", "Stick"],
        "Trips": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Trips HB Wk": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Trips TE Flex": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Trips TE Offset Wk": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Wing Flex Offset Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Slot Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Y Off Trio Wk": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Y Off Trips": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Y Off Trips Wk": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "cincinnati_bengals",
    name: "Cincinnati Bengals",
    style: "Balanced / Spread",
    formations: {
      "Singleback": {
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Quick Slants", "Stretch Alert Bubble", "Wham", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Quick Slants", "Slant Flat", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Quick Slants", "Spacing", "Stick"],
        "Wing Tight Z": ["Counter", "Curl Flat", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch"]
      },
      "I Form": { "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"] },
      "Gun": {
        "Box": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Bunch Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"],
        "Bunch Quads": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "PA Crossers"],
        "Bunch Str Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN China Cross", "PA Cross", "Skinny Post"],
        "Bunch Trio Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Spacing"],
        "Bunch Y-Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Seams", "Verticals"],
        "Deuce Close": ["Corner Strike", "Counter", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Doubles": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Doubles Hip": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty HB Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Trips Speed": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Y Off Wk": ["Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Slot": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Split Y Off": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Spread Y-Flex": ["Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Spread Y-Slot Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Slots": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Slots HB Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Tight Y Off": ["Corner Strike", "Duo", "Four Verticals", "HB Slip Screen", "Inside Zone", "Mesh", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "U Off Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Wing HB Wk Close": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Trips Wk Nasty": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Trips Wk Nasty Goose": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"],
        "Y Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "denver_broncos",
    name: "Denver Broncos",
    style: "Power Run / Play Action",
    formations: {
      "Singleback": {
        "Bunch TE": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Bunch X Nasty": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "ISO", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "U Off Trio": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Power O", "Spacing"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Flex Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Crossers", "Power O"],
        "Slot": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"]
      },
      "Strong": {
        "Close Flex": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "Jumbo": ["Counter", "HB Blast", "HB Dive", "ISO", "Power O", "Stretch", "Trap"],
        "Y Off Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"]
      },
      "Weak": { "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Full House": { "Tight": ["Counter", "HB Dive", "Inside Zone", "Power O"] },
      "Pistol": {
        "Doubles Y Off": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Bubble"],
        "Y Off Trips": ["Counter", "HB Dive", "Inside Zone", "PA Read", "Read Option", "RPO Alert", "Triple Option"]
      },
      "Gun": {
        "Box": ["Counter", "Double Slants", "HB Draw", "Inside Zone", "Levels", "PA Read", "Quick Outs", "Read Option", "Split Zone"],
        "Bunch Spread": ["Corner Strike", "Counter", "Drive", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Quick Outs", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Counter", "Drive", "Inside Zone", "Mesh", "MTN China Cross", "Outside Zone", "PA Cross", "Speed Option"],
        "Bunch Wide Nasty": ["Corner Strike", "Counter", "Curl Combo", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Smash", "Spacing"],
        "Doubles Flex Y Off Close": ["Comeback", "Counter", "Dig Under", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "RPO Read", "Stick"],
        "Doubles Hip": ["Corner Strike", "Counter", "Dig Under", "HB Draw", "Inside Zone", "Levels", "PA Read", "PA Shot Seams", "Skinny Post"],
        "Empty Base Flex": ["Bubble Screen", "Corner Strike", "Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Chips Quads": ["Corner Strike", "Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Smash", "Spacing", "Verticals"],
        "Flex Y Off Wk": ["Counter", "HB Draw", "HB Screen", "Inside Zone", "Levels", "PA Crossers", "RPO Bubble", "Stick", "Verticals"],
        "Split Flanker Close": ["Counter", "Double Slants", "Flood", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Y Trail"],
        "Spread Dbl Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Read", "PA Seams", "RPO Alert Screen", "RPO Peek"],
        "Spread Y-Slot": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Deep Outs", "PA Seams", "RPO Alert Screen", "Spot"],
        "Tight": ["Counter", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "PA Slot Cross", "Stick"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "Quick Outs", "Read Option", "RPO Zone Peek", "Skinny Post"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Read", "Power Read", "Read Option", "Spacing", "Stick"],
        "Trey Open Offset": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Read Option", "Stick"],
        "Trey Open Str": ["Corner Strike", "Counter", "Double Slants", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Spacing"],
        "Trey Y-Flex": ["Corner Strike", "Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trio HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "PA Read", "Snag"],
        "Wing Flex Offset": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Post Corner", "Read Option", "RPO Bubble", "Spot"],
        "Y Off Trio Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "PA Shot Seams", "Post Corner", "Y Trail"],
        "Y Off Trips Nasty": ["Corner Strike", "Counter", "Curl Combo", "Double Post", "HB Draw", "Inside Zone", "Levels", "PA Read", "QB Draw"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "cleveland_browns",
    name: "Cleveland Browns",
    style: "Power Run / Balanced",
    formations: {
      "Singleback": {
        "Ace Close": ["Counter", "HB Dive", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Ace Double Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Ace Slot": ["Counter", "HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick"],
        "Bunch": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Power O", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Z": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "H Tight": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": {
        "H Tight Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "Y Off Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"]
      },
      "Weak": { "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Split Backs": { "Offset Wing Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"] },
      "Pistol": {
        "Tight Y Off Flex": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Speed Option"],
        "U Off Trips": ["Counter", "HB Dive", "Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Alert"],
        "Weak Slot": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Smash"],
        "Wing Tight Z": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Quick Slants", "Read Option"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Inverted Veer", "Mesh", "PA Crossers", "Sail", "Spacing"],
        "Bunch X Nasty": ["Bubble Screen", "Corner Strike", "Counter", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "PA Zone Shot", "RPO Zone Alert"],
        "Bunch Y-Flex": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "RPO Alert", "Stick", "Verticals"],
        "Deuce Close": ["Bubble Screen", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "PA Read", "Power Read", "RPO Read"],
        "Doubles HB Wk": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Quick Slants", "Read Option"],
        "Doubles Hip": ["Corner Strike", "Counter", "Deep Post", "HB Draw", "Inside Zone", "Inverted Veer", "Levels", "PA Read", "Y Trail"],
        "Doubles Y-Flex": ["Bench", "Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "WR Screen"],
        "Empty Chips Quads": ["Corner Strike", "Curl Flats", "Mesh", "QB Draw", "Quick Outs", "Quick Slants", "Slant Flat", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Smash", "Stick", "Verticals"],
        "Empty HB Wide": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Outs", "Quick Slants", "Stick", "Verticals"],
        "Normal Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "PA Zone Shot", "Power Read", "Spot"],
        "Tight Y Off Wk": ["Counter", "Double Post", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option", "Stick", "WR Screen"],
        "Trey Open": ["Bubble Screen", "Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trio Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Trips TE": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Slant Flat", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Quick Outs", "Spot"],
        "U Off Trips": ["Counter", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "PA Read", "Post Corner", "Spot", "Stick"],
        "Wing Flex Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Quick Slants", "Read Option"],
        "Wing Slot Offset": ["Counter", "Double Post", "HB Draw", "Inside Zone", "Mills", "PA Boot", "PA Read", "PA Shot Seams", "Read Option"],
        "Y Off Trips Wk": ["Corner Strike", "Counter", "Deep Crossers", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Peek"],
        "Y Trips Wk": ["Corner Strike", "Counter", "Curl Flat", "Deep Post", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "carolina_panthers",
    name: "Carolina Panthers",
    style: "Dual Threat / RPO",
    formations: {
      "Singleback": {
        "Ace": ["HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "PA Read", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Read", "PA Scissors", "Split Zone", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Trio": ["HB Blast", "Inside Zone", "Mesh", "PA Read", "PA Zone Shot", "Spacing", "Stick"],
        "U Off Trips": ["Inside Zone", "Outside Zone", "PA Power O", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "PA Read", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "PA Read", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "PA Read", "Power O", "Stretch", "Sweep"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "PA Read", "Play Action", "Spacing", "Stick"]
      },
      "I Form": { "Close Flex": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"] },
      "Strong": {
        "H Close Off": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Power O", "Quick Hitch"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stretch"]
      },
      "Weak": { "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch X Nasty": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Alert", "RPO Peek", "RPO Read"],
        "Doubles": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "RPO Peek", "RPO Read"],
        "Tight Y Off Flex": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "RPO Peek", "RPO Read"],
        "Trips": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "RPO Peek", "Verticals"],
        "U Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"]
      },
      "Gun": {
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "RPO Alert", "RPO Peek", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "RPO Alert", "RPO Peek", "RPO Read"],
        "Empty Base Trio": ["Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Outs", "Spacing", "Verticals"],
        "Empty Bunch": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "RPO Alert", "RPO Peek", "RPO Read"],
        "Split Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read", "Stick"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert", "RPO Alert Screen", "RPO Peek", "RPO Read"],
        "Tight Doubles": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Tight Slot Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "RPO Alert", "RPO Peek", "RPO Read"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "RPO Alert", "RPO Peek", "RPO Read", "Zone Fake Jet"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "RPO Peek", "RPO Read", "Stick"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "RPO Alert", "RPO Peek", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert", "RPO Alert Bubble", "RPO Peek", "Verticals"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "RPO Peek", "RPO Read", "Stick"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Wing Trips Wk Nasty Goose": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Alert", "RPO Bubble", "RPO Peek", "RPO Read"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Alert", "RPO Peek", "RPO Read"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Alert", "RPO Peek", "RPO Read"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "tampa_bay_buccaneers",
    name: "Tampa Bay Buccaneers",
    style: "Vertical / Play Action",
    formations: {
      "Singleback": {
        "Bunch TE": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Bunch X Nasty": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "U Off Trips": ["Counter", "Inside Zone", "PA Read", "Power O", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"]
      },
      "I Form": {
        "Close Flex": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Power O", "Power O"]
      },
      "Pistol": {
        "Bunch TE": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off Stack": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Strong Y Off Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Trips": ["Counter", "Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "Verticals"]
      },
      "Gun": {
        "5WR Tight": ["Counter", "Curl Flats", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "QB Draw", "Spacing", "Verticals"],
        "Bunch Str Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "MTN China Cross", "Outside Zone", "PA Cross", "PA Read"],
        "Bunch TE": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Outside Zone"],
        "Bunch Y-Flex": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Cluster HB Str": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Smash"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read"],
        "Empty Base Trio": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Stick", "Verticals"],
        "Normal Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Spread Y-Slot": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Slants"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trio Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Stick"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trips TE": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Orbit Cross Screen", "Outside Zone", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips X Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Y Off Trio Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Y Off Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "los_angeles_chargers",
    name: "Los Angeles Chargers",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Ace Slot": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Spacing", "Stick", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Trips": ["Curl Flat", "Inside Zone", "PA Read", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["Curl Flat", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Slot": ["Curl Flat", "HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O", "Stick"],
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O", "Stick"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Stick"]
      },
      "Weak": { "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Split T": { "Tight": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Spacing", "Stick"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Spacing", "Stick", "Stretch"],
        "Tight Y Off Flex": ["Curl Flat", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Y Off Trips": ["Curl Flat", "Inside Zone", "PA Read", "Read Option", "RPO Alert", "Spacing", "Stick"]
      },
      "Gun": {
        "Bunch Spread": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch Str Offset": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch TE Wk": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Spacing", "Stick"],
        "Bunch Wide Nasty": ["Corner Strike", "Curl Flat", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Bunch X Nasty": ["Corner Strike", "Curl Flat", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Chips": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Flex Y Off Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Go Go Twins Flex": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Normal Y Off Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Split Close Pro": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Spread Y-Flex Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spacing", "Stick"],
        "Tight Offset TE": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Spacing", "Stick"],
        "Tight Y Off": ["Curl Flat", "Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Spacing", "Stick", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "Spacing", "Stick"],
        "Trey Open": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "PA Read", "Spacing", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Spacing", "Stick", "Verticals"],
        "Wing Pair": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Slot Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Tight Z": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Y Off Trips Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"], "Sneak": ["QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "indianapolis_colts",
    name: "Indianapolis Colts",
    style: "Balanced / Run First",
    formations: {
      "Singleback": {
        "Bunch": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Stick"],
        "Doubles Off Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Power O", "Stick"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Y Trips Close": ["Counter", "HB Duo", "Inside Zone", "PA Crossers", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Slot": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Power O", "Power O"]
      },
      "Strong I": { "Pro": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O"] },
      "Pistol": {
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "East Tight": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O", "Read Option"],
        "Strong": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power Read", "Read Option", "RPO Peek"],
        "Wing Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch Offset": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read"],
        "Bunch Spread Nasty": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "MTN China Cross", "Outside Zone", "PA Cross", "PA Read"],
        "Bunch TE": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Outside Zone"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read"],
        "Doubles Off Close Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Bunch": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Flanker Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Crossers", "PA Read", "Stick"],
        "Normal Y Off": ["Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "HB Slip Screen", "Inside Zone", "PA Read", "Stick"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Stick"],
        "Spread Flex Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Slants"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trips TE Flex Close Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Wing HB Wk Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "washington_commanders",
    name: "Washington Commanders",
    style: "Spread / RPO",
    formations: {
      "Singleback": {
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot", "Quick Slants"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "PA Zone Shot", "Quick Slants", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "PA Read", "Quick Slants", "Stick"],
        "Doubles Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA Zone Shot", "Quick Slants", "Spacing", "Stick"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "U Off Trips Cluster": ["HB Slam", "Inside Zone", "Mesh", "PA Read", "Quick Slants", "Spacing", "Stick"],
        "Wing Flex Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Quick Slants", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Quick Slants", "Spacing", "Stick"],
        "Wing Tight U": ["Counter", "HB Toss", "ISO", "PA Boot", "Power O", "Quick Slants", "Stretch"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "PA Scissors", "Quick Slants", "Spacing", "Stick"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Quick Slants", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Quick Slants"]
      },
      "Pistol": {
        "Double Hip": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Quick Slants", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "Mesh", "PA Boot", "Power O", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power Read", "Quick Slants", "Read Option"],
        "Trips Left Open": ["Inside Zone", "Levels", "Mesh", "PA Crossers", "Quick Slants", "Read Option", "RPO Alert"],
        "Wing Flex Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Slants", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"],
        "Bunch TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Deuce Close": ["Corner Strike", "Counter", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Double Stack": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Doubles Y Off": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Tight": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Go Go Slot Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Heavy": ["Corner Strike", "Counter", "Four Verticals", "HB Dive", "Inside Zone", "Levels", "Mesh", "PA Boot", "Power O"],
        "Normal Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Split Slot Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Spread": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Offset TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"],
        "Trey Open Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips TE": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "U Off Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Trio Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "new_york_giants",
    name: "New York Giants",
    style: "Balanced / Power",
    formations: {
      "Singleback": {
        "Bunch TE": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Doubles Off Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Power O", "Stick"],
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trio": ["Counter", "Inside Zone", "Mesh", "PA Read", "Power O", "Spacing", "Stick"],
        "Wing": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "I Form": { "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"] },
      "Pistol": {
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option"],
        "Full House Over Close": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Open Flex Close": ["Counter", "HB Stretch", "Inside Zone", "Outside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Wide Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Spacing"],
        "Bunch Y-Flex": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Doubles Hip": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Off Close Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Offset Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Z Close Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Empty HB Wide": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Trey Stack": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Split Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Crossers", "PA Read", "Stick"],
        "Spread": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Spread Dbl Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Stack Y-Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Crossers", "PA Read", "Stick"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Slants"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Tight Y Off": ["Counter", "Duo", "HB Draw", "HB Slip Screen", "Inside Zone", "Outside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trey Open Offset": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trey Y-Flex": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "Stick", "Verticals"],
        "Trips HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trips TE Offset Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "U Off Trips": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Close Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"],
        "Y Off Trio Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Y Off Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read"],
        "Y Off Trips Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "jacksonville_jaguars",
    name: "Jacksonville Jaguars",
    style: "Spread / Versatile",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Quick Slants"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Quick Slants", "Stretch Alert Bubble", "Wide Zone", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Dive", "HB Duo", "Inside Zone", "PA Boot", "Quick Slants", "Spacing", "Stick"],
        "Trips Close": ["HB Dive", "Inside Zone", "Mesh", "PA Read", "Quick Slants", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Quick Slants", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Quick Slants", "Spacing", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Quick Slants", "Slant Flat", "Stick"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Quick Slants", "Spacing", "Stick", "Stretch"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Quick Slants", "Spacing", "Stick", "Sweep"]
      },
      "Strong": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off Stack": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Quick Slants", "Read Option"],
        "U Off Trips": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "5WR Tight": ["Corner Strike", "Curl Flats", "Deep Post", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Bunch Spread Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch TE Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Skinny Post"],
        "Bunch Wide Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Cluster HB Str": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Smash"],
        "Double Stack": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Doubles Clamp Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Doubles Flex Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Doubles Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Spread Y Slot Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"],
        "Tight Slots": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Y Off Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing HB Wk Close": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"],
        "Y Off Trio Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "new_york_jets",
    name: "New York Jets",
    style: "West Coast / Run Power",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Spacing", "Stick", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "Slant Flat", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Spacing", "Stick"],
        "Wing Close": ["Curl Flat", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stick", "Stretch", "Sweep"],
        "Y Trips Close": ["Curl Flat", "HB Duo", "Inside Zone", "PA Crossers", "Slant Flat", "Spacing", "Stick"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Stick"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick", "Stretch"],
        "Pro": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "Weak": {
        "Close Flex": ["Counter", "Curl Flat", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing": ["Counter", "Curl Flat", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "Pistol": {
        "Deuce": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert", "Spacing", "Stick"],
        "Doubles Y Off": ["Curl Flat", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "East Tight": ["Counter", "Inside Zone", "PA Boot", "Power O", "Read Option", "Spacing", "Stick"],
        "Wing Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Spacing", "Stick", "Stretch"]
      },
      "Gun": {
        "4WR Trips Strong": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Ace Slot": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Bunch TE": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Spacing", "Stick"],
        "Bunch X Nasty": ["Corner Strike", "Curl Flat", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Doubles Flex Y Off Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Doubles Y Off Nasty": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Empty Ace": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Flex Trey": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Split Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Split Slot Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Spread Dbl Flex Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spacing", "Stick"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Spacing", "Stick"],
        "Trey Y-Flex": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Spacing", "Stick", "Verticals"],
        "Trips TE Offset": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Spacing", "Stick"],
        "Wing Slot Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Slot Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Tight Flip": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "los_angeles_rams",
    name: "Los Angeles Rams",
    style: "McVay System / Outside Zone",
    formations: {
      "Singleback": {
        "Ace Close": ["HB Dive", "HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Outside Zone", "PA Draw Shot"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "Outside Zone", "PA Cross", "Wide Zone"],
        "Deuce Close": ["Counter", "HB Stretch", "Inside Zone", "Outside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "Trips": ["Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing", "Stick", "Verticals"],
        "Trips Close": ["HB Stretch", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Wide Zone"],
        "Wing Flex Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Z": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Trips Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O"],
        "Slot Stack": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Alert", "RPO Peek"],
        "Tight Slots": ["Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Alert", "Stick"]
      },
      "Gun": {
        "Bunch Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Spacing", "Split Zone"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Spacing", "Split Zone"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Outside Zone", "PA Read", "Split Zone"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Spacing", "Split Zone"],
        "Doubles Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "Split Zone", "Stick"],
        "Empty Bunch Open": ["Bubble Screen", "Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Smash", "Spacing", "Stick", "Verticals"],
        "Empty Strong Slots": ["Curl Flats", "Mesh", "QB Draw", "Slant Flat", "Smash", "Spacing", "Stick", "Verticals"],
        "Flanker Close": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone", "Stick"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "PA Zone Shot", "RPO Alert", "Split Zone"],
        "Split WR Backfield": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "Split Zone", "Stick"],
        "Spread Y Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen", "Split Zone"],
        "Tight Flex": ["HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Split Zone"],
        "Tight Flex Wk": ["HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Split Zone"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "Outside Zone", "PA Go Slot Cross", "PA Read", "Read Option", "Split Zone", "Zone Fake Jet"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Split Zone", "Stick"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "RPO Alert", "Split Zone"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "Outside Zone", "PA Boot Shot", "RPO Alert Bubble", "Split Zone", "Verticals"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Split Zone"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers", "PA Read", "PA Zone Shot", "Split Zone"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Zone Shot", "RPO Alert", "Split Zone"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "new_orleans_saints",
    name: "New Orleans Saints",
    style: "West Coast / Versatile",
    formations: {
      "Singleback": {
        "Tight Y Off": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Spacing", "Stick"],
        "Wing Slot": ["Curl Flat", "HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stick", "Stretch", "Sweep"],
        "Y Trips Close": ["Curl Flat", "HB Duo", "Inside Zone", "PA Crossers", "Slant Flat", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Stick"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick", "Stretch"],
        "Wing Close": ["Counter", "Curl Flat", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "Wildcat": { "Pro": ["End Around", "HB Power", "Jet Sweep", "Power", "Read Option"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Spacing", "Stick", "Stretch"],
        "U Off Stack": ["Curl Flat", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Flex Close": ["Curl Flat", "Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Spacing", "Stick"],
        "Y Trips": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "Spacing", "Stick"]
      },
      "Gun": {
        "Box Y Off": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Spacing", "Stick"],
        "Bunch Spread": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch TE Wk": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Spacing", "Stick"],
        "Bunch X Nasty": ["Corner Strike", "Curl Flat", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert", "Spacing", "Stick"],
        "Cluster HB Str": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Curl Flat", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Spacing", "Stick"],
        "Doubles Flex Y Off Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Doubles Off Close Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Triple Stack": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Heavy Saint": ["Counter", "Curl Flat", "HB Dive", "Inside Zone", "Mesh", "PA Boot", "Power O", "Spacing", "Stick"],
        "Normal Y Off": ["Curl Combo", "Curl Flat", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "PA Read", "Spacing", "Stick"],
        "Spread Dbl Flex": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spacing", "Stick"],
        "Spread Y-Slot": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spacing", "Stick"],
        "Stack Y-Flex": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Tight Base Flex": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Tight Y Off": ["Curl Flat", "Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Spacing", "Stick", "Zone Fake Jet"],
        "Trey Open": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "PA Read", "Spacing", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Spacing", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "U Off Stack": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Wing Slot Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Y Off Trio Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Y Off Trips Nasty": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "seattle_seahawks",
    name: "Seattle Seahawks",
    style: "Power Run / Play Action",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "ISO", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off Flex": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Flex Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Tight Left": ["Counter", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Off Trio Close": ["Counter", "HB Duo", "Inside Zone", "PA Crossers", "Power O", "Spacing", "Stick"],
        "Y Trips Close Wing": ["Counter", "Inside Zone", "ISO", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"],
        "Slot Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Weak": {
        "3WR Flex": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "Close Flex": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Trap"]
      },
      "Gun": {
        "Box Y Off": ["Counter", "HB Draw", "Inside Zone", "PA Crossers", "PA Read", "Read Option", "RPO Lookie", "Stick", "WR Screen"],
        "Bunch Open Offset": ["Corner Strike", "Counter", "Curl Flat", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "PA Read", "Spacing"],
        "Bunch Spread Nasty": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "QB Draw", "RPO Zone Peek", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Counter", "Deep Crossers", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "PA Zone Shot", "RPO Zone Alert"],
        "Deuce": ["Counter", "Deep Post", "Drive", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Bubble", "Split Zone"],
        "Doubles Flex Y Off Close": ["Counter", "Dagger", "Double Post", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Snag", "Stick"],
        "Doubles Z Close Wk": ["Comeback", "Corner Strike", "Counter", "Curl Combo", "Deep Crossers", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Smash", "Spacing", "Verticals"],
        "Empty Bunch Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Outs", "Quick Slants", "Smash", "Spacing", "Verticals"],
        "Empty Trey Stack": ["Curl Flats", "Mesh", "QB Draw", "Quick Hitch", "Quick Slants", "Smash", "Spacing", "Verticals"],
        "Normal Flex Snug": ["Bubble Screen", "Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Verticals"],
        "Split Twins Offset": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Spread Dbl Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Mills", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Base Flex": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "PA Shot Seams", "Power Read", "Read Option", "Stick"],
        "Tight Flex Offset": ["Bubble Screen", "Counter", "Four Verticals", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Snag"],
        "Tight Flex Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Smash", "WR Screen"],
        "Tight Slot Flip": ["Comeback", "Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Deep Outs", "PA Read", "Read Option"],
        "Tight Y Off": ["Counter", "Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "QB Draw", "Read Option", "RPO Zone Peek", "Zone Fake Jet"],
        "Trips TE": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "PA Read", "RPO Alert Bubble", "Verticals"],
        "Wing Tight Nasty": ["Counter", "Flood", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Read", "Split Zone"],
        "Y Off Trio Close": ["Counter", "Curl Flat", "Double Slants", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Bubble"],
        "Y Trips Wk": ["Corner Strike", "Counter", "Double Post", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Peek"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"], "Sneak": ["QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "pittsburgh_steelers",
    name: "Pittsburgh Steelers",
    style: "Power Run / Balanced",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "ISO", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["Counter", "HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Power O", "Stick"],
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Wing Close": ["Counter", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"] },
      "Weak I": { "Slot": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Gun": {
        "4WR Trips Strong": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "PA Shot Seams", "PA Zone Shot", "Stick"],
        "Bunch Open": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "RPO Alert", "RPO Bubble", "Sail"],
        "Bunch Open TE": ["Corner Strike", "Counter", "Curl Flat", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "RPO Bubble", "Spot"],
        "Bunch Spread": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Quick Slants", "Spacing", "WR Screen"],
        "Bunch X Nasty": ["Corner Strike", "Counter", "Double Slants", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "PA Slot Cross", "RPO Zone Alert"],
        "Cluster": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "RPO Bubble", "Smash", "Stick"],
        "Doubles Clamp Stack": ["Bubble Screen", "Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Inverted Veer", "Levels"],
        "Doubles Y Off Nasty": ["Corner Strike", "Counter", "Drag Over", "HB Draw", "Inside Zone", "Levels", "Mills", "PA Crossers", "PA Read"],
        "Empty Base Trio": ["Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Empty Strong Slot": ["Corner Strike", "Curl Flats", "Mesh", "QB Draw", "Smash", "Spacing", "Stick", "Verticals"],
        "Flex Trey": ["Corner Strike", "Counter", "Dagger", "HB Draw", "Inside Zone", "Levels", "PA Read", "Spacing", "Stick"],
        "Normal Y Off": ["Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "Mesh", "PA Read", "Stick"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Lookie", "Stick", "Y Trail"],
        "Spread Y-Slot Wk": ["Counter", "Flood", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Deep Outs", "PA Read", "RPO Peek", "Spot"],
        "Tight Flex Wk": ["Counter", "Curl Flat", "Double Slants", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Quick Hitch", "Read Option"],
        "Tight Y Off": ["Counter", "Duo", "HB Slip Screen", "Inside Zone", "PA Crossers", "PA Go Slot Cross", "PA Read", "Read Option", "Zone Fake Jet"],
        "Trips TE": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "Double Post", "Drive", "HB Draw", "Inside Zone", "Inverted Veer", "Levels", "PA Read"],
        "Trips X Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Quick Hitch", "RPO Alert", "Stick"],
        "Wing Slot Offset": ["Counter", "Double Post", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Quick Slants", "Read Option"],
        "Wing Trips Wk Nasty": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Quick Outs", "Read Option", "Stick", "Y Trail"],
        "Y Off Trips Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Quick Hitch", "Sail"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"], "Sneak": ["QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "houston_texans",
    name: "Houston Texans",
    style: "Spread / Aggressive",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Quick Slants"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Crossers", "PA Scissors", "Quick Slants", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Quick Slants", "Spacing", "Stick"],
        "Trips Close": ["HB Toss", "Inside Zone", "Mesh", "PA Read", "Quick Slants", "Spacing", "Stick"],
        "U Off Trips Cluster": ["HB Toss", "Inside Zone", "Mesh", "PA Read", "Quick Slants", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Quick Slants", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "PA Zone Shot", "Quick Slants", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Quick Slants", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch", "Sweep"]
      },
      "I Form": {
        "Tight": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Boot Over", "Power O", "Quick Slants"],
        "Wing": ["Counter", "FB Dive", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O", "Quick Slants"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "PA Shot Seams", "Power O", "Quick Slants", "Stretch"],
        "Wing": ["Counter", "FB Dive", "HB Toss", "PA Boot", "Power O", "Quick Slants", "Stretch"]
      },
      "Gun": {
        "Box": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Bunch Spread Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE Str": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "MTN Spot", "Skinny Post"],
        "Bunch Wide Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Bunch Y-Flex": ["Corner Strike", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Corner Strike", "Counter", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Doubles Flex Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option"],
        "Empty Base Flex": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Sketch Stack": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Normal Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Split Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y-Slot": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Y Off": ["Corner Strike", "Duo", "Four Verticals", "HB Slip Screen", "Inside Zone", "Mesh", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"],
        "Y Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "tennessee_titans",
    name: "Tennessee Titans",
    style: "Power Run / Physical",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter", "HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "ISO", "PA Scissors", "Power O", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Trips": ["Counter", "Inside Zone", "PA Read", "Power O", "Spacing", "Stick", "Verticals"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Crossers", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Split T": { "Tight": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Wildcat": { "Slot Flex": ["End Around", "HB Power", "Jet Sweep", "Power", "Read Option"] },
      "Pistol": {
        "Deuce Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "QB Scramble", "Read Option"],
        "Open Flex Close": ["Counter", "HB Dive", "HB Stretch", "Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Box Offset Wk": ["Bench", "Comeback", "Corner Strike", "Counter", "Curl Combo", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch": ["Corner Strike", "Counter", "Curl Flat", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "RPO Peek", "Spacing"],
        "Bunch Quads": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers", "Snag", "Spot"],
        "Bunch Spread": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Skinny Post", "Spacing", "Split Zone"],
        "Bunch Str Nasty": ["Corner Strike", "Counter", "Deep Crossers", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross", "PA Shot Seams", "Stick"],
        "Bunch Y-Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "PA Seams", "PA Zone Shot", "Verticals", "Y Trail"],
        "Deuce Close": ["Counter", "HB Draw", "HB Screen", "Inside Zone", "Levels", "PA Read", "Post Corner", "Quick Slants", "Verticals"],
        "Doubles Clamp Stack": ["Corner Strike", "Counter", "Double Slants", "Four Verticals", "HB Draw", "HB Screen", "Inside Zone", "Levels", "PA Crossers"],
        "Doubles Y Off Nasty": ["Corner Strike", "Counter", "Deep Crossers", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Read Option", "WR Screen"],
        "Empty Base Flex": ["Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Outs", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Quick Hitch", "Quick Outs", "Spacing", "Stick", "Verticals"],
        "Empty Trips Speed": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Slant Flat", "Smash", "Spacing", "Verticals"],
        "Normal Y Off Close": ["Counter", "Dig Under", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "PA Read", "Spacing"],
        "Split Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Inverted Veer", "Levels", "PA Crossers", "Quick Slants", "Stick", "Verticals"],
        "Spread Dbl Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot Wk": ["Counter", "Double Slants", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Crossers", "PA Seams", "RPO Alert Screen"],
        "Stack HB Wk": ["Bench", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Read", "Smash", "Stick"],
        "Tight Flex": ["Corner Strike", "Counter", "Curl Flat", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Smash"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Mesh", "PA Read", "PA Zone Shot", "Read Option", "RPO Alert", "Stick"],
        "Tight Y Off Wk": ["Bubble Screen", "Counter", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Shot Seams", "Read Option", "RPO Peek"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "Counter", "Double Post", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "Counter", "Curl Combo", "Drive", "HB Draw", "Inside Zone", "Levels", "PA Read", "Sail"],
        "Trips X Nasty": ["Corner Strike", "Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "PA Read", "Spacing", "Stick"],
        "U Off Trips Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Bubble", "RPO Read", "Skinny Post", "Stick"],
        "Wing Slot Offset": ["Counter", "Flood", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Quick Outs", "Read Option", "RPO Zone Peek"],
        "Y Off Trio Wk": ["Comeback", "Corner Strike", "Counter", "Curl Combo", "HB Draw", "Inside Zone", "Levels", "PA Read", "PA Shot Seams"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "minnesota_vikings",
    name: "Minnesota Vikings",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot", "Stick"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Spacing", "Stick", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Y Off Flex": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "Slant Flat", "Spacing", "Stick"],
        "Tight Doubles": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trips": ["Curl Flat", "Inside Zone", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["Curl Flat", "HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Flex Close": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "Slant Flat", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stick", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O", "Stick"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O", "Stick"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Spacing", "Stick", "Stretch"]
      },
      "Strong": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"] },
      "Weak": {
        "Close": ["Counter", "Curl Flat", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"],
        "H Close Off": ["Counter", "Curl Flat", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"],
        "Slot Close": ["Counter", "Curl Flat", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "Pistol": { "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"] },
      "Gun": {
        "Ace": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Ace Slot": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Box": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Spacing", "Stick"],
        "Bunch Open Offset": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch Spread Nasty": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch TE": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Spacing", "Stick"],
        "Bunch Wide": ["Corner Strike", "Curl Flat", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Curl Flat", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Spacing", "Stick"],
        "Empty Base Trio": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Wk": ["Curl Combo", "Curl Flat", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Spacing", "Stick"],
        "Split U Off Close": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Slant Flat", "Spacing", "Stick"],
        "Spread Y-Slot Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spacing", "Stick"],
        "Tight Flex Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Tight Y Off": ["Curl Flat", "Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Spacing", "Stick", "Zone Fake Jet"],
        "Tight Y Off Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option", "Spacing", "Stick"],
        "Trey Open": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Slot Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Wing Stack Wk": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Spacing", "Stick"],
        "Y Off Trio Wk": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },

  // ========== SCHEME / ALTERNATE OFFENSIVE PLAYBOOKS ==========
  {
    id: "air_raid",
    name: "Air Raid",
    style: "Pass Heavy / Spread",
    formations: {
      "Pistol": {
        "Ace": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "Levels", "Mesh", "PA Boot", "Power O"],
        "Spread": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Strong": ["Inside Zone", "Levels", "Mesh", "PA Boot", "Power Read", "Quick Slants", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Alert"],
        "Trips Left Open": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Peek"],
        "Weak Slot Open": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Alert"],
        "Y Off Trips": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Slants", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Spacing"],
        "Bunch Quads": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Levels", "Mesh", "Skinny Post", "Spacing", "Verticals"],
        "Cluster": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Levels", "Mesh", "Skinny Post", "Smash", "Stick"],
        "Double Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Doubles": ["Corner Strike", "Curl Combo", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Doubles Y Off": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Open Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Slot Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Split Slot Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Spread Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Spread Y-Slot": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams"],
        "Tight": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Trey Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Trey Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Stick", "Verticals"],
        "Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Wing Flex Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "air_raid_classic",
    name: "Air Raid Classic",
    style: "Pass Heavy / Classic Spread",
    formations: {
      "Pistol": {
        "Ace": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Quick Slants", "Read Option"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Slants"],
        "Spread": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Alert"],
        "Trips Left Open": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Alert"],
        "Weak Slot Open": ["Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Cluster": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Levels", "Mesh", "Quick Slants", "Skinny Post", "Stick"],
        "Double Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Doubles": ["Corner Strike", "Curl Combo", "Deep Post", "Four Verticals", "HB Draw", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Doubles Y Off": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Skinny Post"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Open Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Spread Y-Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "Spot N Go"],
        "Spread Y-Slot": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Seams", "Skinny Post"],
        "Tight": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trey Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Stick"],
        "Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Wing Slot Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "balanced",
    name: "Balanced",
    style: "Balanced / Multiple",
    formations: {
      "Singleback": {
        "Ace": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing", "Stick"],
        "Ace Overload": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Bunch": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "Power O", "Spacing"],
        "Doubles": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Tight Flex": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Power O"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Z": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Trips TE Slot": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "ISO", "Outside Zone", "Power O"]
      },
      "Strong": {
        "Pro": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Slot Flex": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"]
      },
      "Weak": {
        "H U Deep": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Slot Flex": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"]
      },
      "Full House": {
        "Normal Wide": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "Outside Zone", "Power O", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Wing Flex": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power Read", "Read Option"]
      },
      "Gun": {
        "Ace": ["Counter", "Drag Over", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Quick Outs", "Slant Flat", "Stick"],
        "Ace Slot": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mills", "Outside Zone", "PA Read", "Quick Hitch", "Stick"],
        "Doubles Flex Wing": ["Counter", "Deep Post", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Deep Outs", "PA Read", "Stick"],
        "Empty Trey": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Split Slot": ["Counter", "Deep Crossers", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "PA Slot Cross", "Stick"],
        "Spread": ["Counter", "HB Draw", "Inside Zone", "MTN Drive", "Outside Zone", "PA Read", "PA Seams", "PA Zone Shot", "Spot N Go"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Play Action"],
        "Trey Y-Flex Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Post Corner"],
        "Y Trips Wk": ["Corner Strike", "Counter", "Double Post", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "benkerts_dimes",
    name: "Benkert's Dimes",
    style: "Pass Heavy / Creator Playbook",
    formations: {
      "Pistol": {
        "Ace": ["Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Power Read", "Read Option"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Smash"],
        "Spread": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Read Option", "Triple Option"],
        "Strong Slot Open": ["Counter", "Inside Zone", "Levels", "Mesh", "PA Crossers", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "Deep Crossers", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Mesh", "Skinny Post", "Spacing"],
        "Bunch Quads": ["Corner Strike", "Deep Crossers", "Deep Post", "Four Verticals", "HB Screen", "Mesh", "Skinny Post", "Spacing", "Verticals"],
        "Cluster": ["Corner Strike", "Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Levels", "Mesh", "Skinny Post", "Stick"],
        "Doubles": ["Curl Combo", "Deep Crossers", "Deep Post", "Double Post", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Skinny Post"],
        "Doubles Y Off": ["Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Skinny Post", "Stick"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Spread Y-Flex": ["Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen", "Skinny Post"],
        "Spread Y-Slot": ["Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "Skinny Post"],
        "Tight": ["Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Trey Open": ["Corner Strike", "Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Skinny Post", "Stick"],
        "Trips": ["Corner Strike", "Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post"],
        "Wing Slot Offset": ["Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "pistol_scheme",
    name: "Pistol",
    style: "Pistol Heavy / Read Option",
    formations: {
      "Pistol": {
        "Ace": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Ace Slot": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Bunch": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Bunch TE": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "Stick"],
        "Bunch X Nasty": ["Counter", "Inside Zone", "Mesh", "MTN China Cross", "Outside Zone", "PA Read", "Read Option"],
        "Doubles": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Flex Hip": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option"],
        "Open Flex": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Open Flex Close": ["Counter", "HB Stretch", "Inside Zone", "Outside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Spread": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Strong": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power Read", "Read Option"],
        "Strong Slot": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power Read", "Read Option"],
        "Strong Slot Open": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Tight Slots": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trips": ["Counter", "Inside Zone", "Outside Zone", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Trips Left Open": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Peek"],
        "U Off": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "U Off Trips": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Weak I": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Weak I Wing": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Weak Slot": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Weak Slot Open": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power Read", "Read Option"],
        "Wing Slot": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trips": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "RPO Peek"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "run_n_gun",
    name: "Run 'N' Gun",
    style: "Balanced / Tempo",
    formations: {
      "Singleback": {
        "Ace": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O", "Spacing"],
        "Bunch": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "Power O", "Spacing"],
        "Doubles": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Doubles Y Off": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Strong": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power Read", "Read Option"],
        "Wing Slot": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing"],
        "Bunch Quads": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "Spacing", "Verticals"],
        "Doubles": ["Counter", "Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Spread Y-Flex": ["Counter", "HB Draw", "Inside Zone", "MTN Drive", "Outside Zone", "PA Boot", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "run_and_shoot",
    name: "Run and Shoot",
    style: "4 WR / Motion Heavy",
    formations: {
      "Singleback": {
        "Ace": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O", "Spacing"],
        "Doubles": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Power O"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Spacing"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing"],
        "Cluster": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Read", "Stick"],
        "Doubles": ["Counter", "Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Y Off": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Crossers", "PA Read", "Stick"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Quads": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Spread Y-Flex": ["Counter", "HB Draw", "Inside Zone", "MTN Drive", "Outside Zone", "PA Boot", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "run_balanced",
    name: "Run Balanced",
    style: "Balanced Run / Multiple",
    formations: {
      "Singleback": {
        "Ace": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O", "Spacing"],
        "Ace Dbl Wing": ["Counter", "Duo", "HB Toss", "Inside Zone", "Outside Zone", "Power O", "Stretch"],
        "Ace Slot": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Doubles": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Doubles Flex": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Power O"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Y Off Trio": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Y Trips": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Read", "Power O", "Stick"]
      },
      "I Form": {
        "Hulk": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "Outside Zone", "Power O", "Stretch"],
        "Pro": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Slot Open": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "Strong": {
        "Pro": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "Weak": {
        "Close Flex": ["Counter", "Duo", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Slot Open": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"]
      },
      "Full House": {
        "Normal": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "Outside Zone", "Power O", "Stretch"]
      },
      "Wildcat": {
        "Normal": ["End Around", "HB Dive", "Inside Zone", "Jet Sweep", "Power O", "Read Option", "Speed Option"]
      },
      "Pistol": {
        "Bunch": ["Counter", "Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Bubble", "RPO Peek"],
        "Full House Base": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "Outside Zone", "Power O", "Triple Option"],
        "Full House TE": ["Counter", "HB Dive", "Inside Zone", "Inverted Veer", "PA Boot", "Power O", "Split Zone"],
        "Wing Slot": ["Counter", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option", "Speed Option"]
      },
      "Gun": {
        "Doubles Flex": ["Counter", "Delayed Draw", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Stick", "Wide Zone"],
        "Flex Y Off": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "PA Read", "RPO Lookie", "Stick"],
        "Split Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "RPO Zone Peek", "Stick"],
        "Spread": ["Counter", "HB Draw", "Inside Zone", "MTN Drive", "Outside Zone", "PA Boot", "PA Read", "PA Seams", "Spot N Go"],
        "Spread Y-Slot": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "PA Seams"],
        "Trey Offset": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Wing Stack": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "run_heavy",
    name: "Run Heavy",
    style: "Power Run / Ground and Pound",
    formations: {
      "Singleback": {
        "Ace": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O", "Spacing"],
        "Ace Slot": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Bunch": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "Power O", "Spacing"],
        "Bunch Ace": ["Corner Strike", "Counter", "HB Dive", "HB Screen", "Inside Zone", "Mesh", "Power O"],
        "East": ["Counter", "FB Dive", "HB Dive", "HB Toss", "Inside Zone", "Power O", "Stretch"],
        "Trio": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Trips Y Slot": ["Counter", "HB Dive", "HB Draw", "Inside Zone", "PA Read", "Power O", "Stick"],
        "Wing Slot": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch"]
      },
      "Strong I": {
        "Pro": ["Counter", "FB Dive", "HB Blast", "HB Dive", "HB Slam", "PA Boot", "Power O", "Wham"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "HB Pitch", "Power O", "Stretch", "Wide Zone"],
        "Twins Over": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Split Zone"],
        "Wing": ["Counter", "HB Toss", "Inside Zone", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Open Flex": ["Counter", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Wham"]
      },
      "Weak I": {
        "Slot": ["Counter", "Delayed Draw", "FB Dive", "HB Dive", "Inside Zone", "PA Boot", "Power O"]
      },
      "Power I": {
        "Strong": ["Counter", "FB Dive", "HB Blast", "HB Dive", "HB Slam", "ISO", "Power O", "Stretch", "Triple Option"]
      },
      "Full House": {
        "Wide": ["Counter", "FB Dive", "HB Dive", "HB Toss", "Inside Zone", "Power O", "Stretch"]
      },
      "Gun": {
        "Ace": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "RPO Zone Peek", "Split Zone", "Stick"],
        "Bunch TE": ["Corner Strike", "Counter", "Dagger", "HB Screen", "Inside Zone", "Mesh", "PA Boot", "Split Zone", "Stick"],
        "Doubles": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "PA Boot", "PA Read", "PA Zone Shot", "Split Zone"],
        "Split Slot": ["Counter", "Dig Under", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Split Zone", "Y Trail"],
        "Split Y-Flex": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Crossers", "PA Read", "Skinny Post", "Split Zone"],
        "Y Off Trio Wk": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Read Option", "RPO Lookie", "Split Zone"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "shotgun_scheme",
    name: "Shotgun",
    style: "Gun Heavy / Spread",
    formations: {
      "Gun": {
        "5WR Tight": ["Corner Strike", "Curl Flats", "Deep Post", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Bunch": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Spacing"],
        "Bunch Quads Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Levels", "Mesh", "Quick Slants", "Skinny Post", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Cross", "Skinny Post", "Stick"],
        "Bunch Str Offset": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Cross", "Quick Slants", "Skinny Post"],
        "Bunch Y-Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Verticals"],
        "Doubles": ["Corner Strike", "Curl Combo", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Doubles Hip": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Doubles Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Doubles Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Doubles Y Off": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Empty Ace": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing"],
        "Empty Bunch Y Flex": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Flex Y Off Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Gadget Backfield": ["Corner Strike", "End Around", "Four Verticals", "HB Dive", "Jet Sweep", "Levels", "Mesh", "Orbit", "QB Scramble", "Read Option"],
        "Gadget Package": ["Corner Strike", "End Around", "Four Verticals", "HB Dive", "Jet Sweep", "Mesh", "Orbit", "QB Scramble", "Read Option", "Trick Play"],
        "Go Go Slot Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Normal Y Off Wk": ["Corner Strike", "Curl Combo", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Slot Left": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Split Close": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Split Slot": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Tight Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Trey Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Stick"],
        "Trio HB Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Trips HB Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "U Off Trips": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Pair": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"],
        "Y Off Trio Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Y Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "shotgun_classic",
    name: "Shotgun Classic",
    style: "Gun Heavy / Classic",
    formations: {
      "Gun": {
        "Bunch": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing"],
        "Bunch Y-Flex": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "PA Read"],
        "Doubles": ["Counter", "Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Hip": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Y Off": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"],
        "Empty Ace": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Stick"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Stick"],
        "Flex Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"],
        "Normal Y Off Wk": ["Counter", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Split Slot": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trips HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Stack": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "shotgun_mix",
    name: "Shotgun Mix",
    style: "Gun Heavy / Versatile",
    formations: {
      "Pistol": {
        "Ace": ["Counter", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Spread": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Cross", "PA Read"],
        "Bunch Y-Flex": ["Corner Strike", "Counter", "HB Draw", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Verticals"],
        "Doubles": ["Counter", "Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Doubles Hip": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Y Off": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Crossers", "PA Read"],
        "Empty Base": ["Corner Strike", "Curl Flats", "Levels", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Wide": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Spacing", "Stick"],
        "Flex Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Crossers", "PA Read", "Stick"],
        "Split Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Spread Y-Flex": ["Counter", "HB Draw", "Inside Zone", "MTN Drive", "Outside Zone", "PA Boot", "PA Read", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Trey Open": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read"],
        "Wing Slot Offset": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Stack": ["Counter", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Boot", "PA Read", "Read Option"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "singleback_scheme",
    name: "Singleback",
    style: "Under Center / Singleback Heavy",
    formations: {
      "Singleback": {
        "Ace Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Power O", "Spacing"],
        "Ace Dbl Wing": ["Counter", "Duo", "HB Toss", "Inside Zone", "Outside Zone", "Power O", "Stretch"],
        "Ace Slot": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Bunch Ace": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "Power O", "Spacing"],
        "Bunch TE": ["Corner Strike", "Counter", "HB Screen", "Inside Zone", "Mesh", "Power O", "Stick"],
        "Deuce Close": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "Power O", "Stretch", "Zone Split"],
        "Doubles": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Doubles Y Off Close": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Doubles Y-Slot Close": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Spread": ["Counter", "HB Draw", "Inside Zone", "PA Read", "Power O", "RPO Alert", "Stick"],
        "Tight Doubles": ["Counter", "HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Spacing"],
        "Tight Y Off": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Trey": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Trio": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Power O", "Stick"],
        "Trips": ["Corner Strike", "Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Power O"],
        "U Off Trips": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Power O"],
        "Wing Flex Close": ["Counter", "HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Pair": ["Counter", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Power O", "Spacing"],
        "Wing Stack": ["Counter", "HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Spacing"],
        "Wing Tight": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Left": ["Counter", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Nasty": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Wing Tight U": ["Counter", "Duo", "HB Toss", "Inside Zone", "Outside Zone", "PA Boot", "Power O"],
        "Wing Tight Z": ["Counter", "HB Dive", "Inside Zone", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Trips": ["Counter", "HB Draw", "Inside Zone", "Outside Zone", "PA Read", "Power O", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "spread_scheme",
    name: "Spread",
    style: "Spread / RPO Heavy",
    formations: {
      "Pistol": {
        "Doubles": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option"],
        "U Off": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Slants", "Read Option"]
      },
      "Gun": {
        "Ace Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Box Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"],
        "Bunch": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Spacing"],
        "Bunch Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Bunch Open Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "RPO Bubble", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN China Cross", "RPO Lookie", "Spot"],
        "Dbls Y-Flex Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "PA Shot Seams"],
        "Double Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Doubles Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Doubles Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "RPO Zone Peek"],
        "Empty Base Flex": ["Corner Strike", "Curl Flats", "Four Verticals", "Mesh", "QB Draw", "Quick Outs", "Spacing", "Verticals"],
        "Monster": ["Corner Strike", "End Around", "Four Verticals", "HB Dive", "Inverted Veer", "Jet Sweep", "Mesh", "Read Option", "Speed Option"],
        "Normal Y Off": ["Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Slot Cross"],
        "Split Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Stick"],
        "Spread Flex": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "MTN Drive", "PA Seams", "PA Zone Shot", "RPO Alert Screen"],
        "Spread HB Wk": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams", "Play Action"],
        "Stack Y Off": ["Corner Strike", "Deep Crossers", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Tackle Over": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Power O"],
        "Tackle Over Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Power O"],
        "Tight Doubles": ["Corner Strike", "Four Verticals", "HB Duo", "Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Hitch", "Spacing"],
        "Tight Slot Open": ["Corner Strike", "Deep Post", "Drag Over", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot"],
        "Trey Open Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Mills", "PA Read"],
        "Trio Offset": ["Corner Strike", "Deep Post", "Double Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Trio Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Post Corner", "Skinny Post"],
        "Trips TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Wing Slot Offset": ["Corner Strike", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Deep Outs", "PA Read", "Read Option"],
        "Wing Slot Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"],
        "Wing Tight": ["Corner Strike", "Counter", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Y Off Trips Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Y-Trips Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Y-Trips Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "spread_classic",
    name: "Spread Classic",
    style: "Spread / Classic",
    formations: {
      "Pistol": {
        "Doubles": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Quick Slants", "Read Option"],
        "U Off": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Quick Slants", "Read Option"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Skinny Post", "Spacing"],
        "Bunch Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Screen", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Bunch X Nasty": ["Corner Strike", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "MTN China Cross", "Quick Slants", "Skinny Post"],
        "Double Stack": ["Corner Strike", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Doubles Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Doubles Offset Wk": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Skinny Post"],
        "Empty Base Flex": ["Corner Strike", "Curl Flats", "Four Verticals", "Levels", "Mesh", "QB Draw", "Quick Slants", "Spacing"],
        "Normal Y Off": ["Corner Strike", "Curl Combo", "Deep Post", "Double Slants", "Four Verticals", "HB Draw", "Levels", "Mesh", "Skinny Post"],
        "Spread Flex": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "MTN Drive", "PA Seams"],
        "Tight Slot Open": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "Skinny Post"],
        "Trey Open Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Trips TE": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"],
        "Wing Slot Offset": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read"],
        "Wing Tight": ["Corner Strike", "Counter", "Deep Post", "Four Verticals", "Inside Zone", "Levels", "Mesh", "PA Boot", "Read Option"],
        "Y Off Trips": ["Corner Strike", "Deep Post", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "Quick Slants", "Skinny Post"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "two_back",
    name: "Two Back",
    style: "Power Run / Two Back Heavy",
    formations: {
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"],
        "H Pro": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Pro": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Slot": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Slot Close": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Slot Flex": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Slot Stack": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Tight": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "Power O", "Trap"],
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"],
        "Y Off": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Counter", "HB Duo", "ISO", "PA Boot", "Power O"]
      },
      "Strong": {
        "Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Stretch"],
        "Close Flex": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "H Close Off": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "H Slot": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "H Tight Close": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "Power O", "Trap"],
        "Jumbo": ["Counter", "HB Blast", "HB Dive", "ISO", "Power O", "Stretch", "Trap"],
        "Slot": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Slot Flex": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Blast", "HB Counter", "HB Duo", "ISO", "Power O"],
        "Z Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"]
      },
      "Weak": {
        "Close": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Close Flex": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "H Wing": ["Counter", "HB Blast", "HB Toss", "ISO", "PA Boot", "Power O", "Trap"],
        "Pro": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "Slot": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"],
        "Slot Close": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Z Close": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"]
      },
      "Split Backs": {
        "3WR": ["Counter", "HB Draw", "Inside Zone", "ISO", "PA Read", "Power O", "Stick"],
        "Pro": ["Counter", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O", "Trap"],
        "Slot": ["Counter", "HB Dive", "Inside Zone", "ISO", "PA Boot", "PA Read", "Power O"]
      },
      "Near": {
        "Close Flex": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"],
        "Pro": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"]
      },
      "Far": {
        "Pro": ["Counter", "FB Dive", "HB Blast", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Tight Slot": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "ISO", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Strong": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Weak Slot": ["Counter", "HB Dive", "Inside Zone", "Inverted Veer", "PA Read", "Read Option", "Smash"]
      },
      "Gun": {
        "Split Close": ["Counter", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "PA Read", "PA Slot Cross", "Stick"],
        "Split Pro Offset Wk": ["Counter", "Curl Combo", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "PA Zone Shot", "RPO Lookie"],
        "Split Slot": ["Counter", "Dig Under", "HB Draw", "Inside Zone", "Levels", "PA Read", "Post Corner", "RPO Zone Peek", "Slant Flat"],
        "Split Slot Offset": ["Counter", "Curl Combo", "HB Draw", "HB Screen", "Inside Zone", "Levels", "PA Read", "RPO Peek", "Stick"],
        "Split Twins": ["Bubble Screen", "Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Quick Slants", "RPO Alert", "Y Trail"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  },
  {
    id: "west_coast",
    name: "West Coast",
    style: "West Coast / Short Pass",
    formations: {
      "Singleback": {
        "Ace": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing", "Stick"],
        "Bunch Ace": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Mesh", "Spacing", "Stick"],
        "Doubles Flex": ["Curl Flat", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Doubles North": ["Curl Flat", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Doubles Y Open": ["Curl Flat", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"],
        "East": ["Counter", "HB Dive", "Inside Zone", "Power O", "Spacing", "Stick", "Stretch"],
        "Spread": ["Curl Flat", "HB Draw", "Inside Zone", "PA Read", "RPO Alert", "Spacing", "Stick"],
        "Wing Slot": ["Curl Flat", "HB Duo", "Inside Zone", "PA Boot", "Slant Flat", "Spacing", "Stick"],
        "Y Trips": ["Curl Flat", "HB Draw", "Inside Zone", "PA Read", "Slant Flat", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "HB Slam", "PA Boot", "Power O", "Stick"],
        "Slot": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Wing": ["Counter", "HB Pitch", "HB Toss", "PA Boot", "Power O", "Stick", "Stretch"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stick", "Stretch", "Wham"],
        "Pro": ["Counter", "Curl Flat", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"],
        "Slot": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"]
      },
      "Weak": {
        "Close": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Slot Flex": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"]
      },
      "Near": {
        "Close": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Close Flex": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"],
        "Jumbo": ["Counter", "Curl Flat", "HB Dive", "Power O", "Spacing", "Stick", "Stretch"],
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"],
        "Y Left Slot": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"]
      },
      "Far": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O", "Spacing", "Stick"],
        "Slot": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Tight Slot": ["Curl Flat", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Spacing", "Stick"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "Curl Flat", "HB Screen", "Inside Zone", "Levels", "Mesh", "PA Shot Seams", "Spacing", "Stick"],
        "Doubles": ["Curl Combo", "Curl Flat", "Four Verticals", "HB Draw", "Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "Empty Trey": ["Curl Flats", "Levels", "Mesh", "QB Draw", "Slant Flat", "Spacing", "Stick", "Verticals"],
        "Split Offset": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slant Flat", "Spacing", "Stick"],
        "Spread Dbl Flex": ["Curl Flat", "HB Draw", "Inside Zone", "Mesh", "MTN Drive", "PA Seams", "Spacing", "Spot N Go", "Stick"],
        "Tight Slots": ["Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Boot", "PA Read", "Spacing", "Stick"],
        "Trey Open Offset": ["Corner Strike", "Curl Flat", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Spacing", "Stick"]
      },
      "Goal Line": { "Normal": ["FB Dive", "HB Dive", "PA Boot", "Power O", "QB Sneak"] },
      "Hail Mary": { "Hail Mary": ["Hail Mary"] }
    }
  }
];


// ========== DEFENSIVE PLAYBOOKS ==========
// Verified from huddle.gg and madden.tools Madden 27 data

// Helper: representative plays by formation type
const DEF_PLAYS = {
  base34: ["Cover 1 Hole", "Cover 1 Robber", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "OLB Fire Man", "Sting Pinch", "Gap Press"],
  base43: ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Thunder Smoke", "LB Sting I", "Sam Edge 3"],
  base46: ["Cover 0", "Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Tampa 2", "OLB Blitz", "Gap Press", "Thunder Smoke"],
  nickel24: ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 2 Zone", "Cover 3 Buzz Match", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Edge Blitz 0", "Nickel 2 Trap", "Nickel Sim 2"],
  nickel33: ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2"],
  nickelMug: ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Mid Blitz 0", "Nickel Dog 3 Buzz", "Nickel Sim 2", "Tampa 2"],
  nickelOver: ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Edge Blitz 0"],
  dime: ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Cloud", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6", "Tampa 2"],
  dollar: ["Cover 1 Hole", "Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2", "Mid Blitz 0"],
  quarter: ["Cover 4 Quarters", "Cover 4 Palms", "Cover 6", "Prevent"],
  prevent: ["Prevent"],
  goalLine: ["Cover 0", "Cover 1", "Gap Press"],
  goalPinch: ["Cover 0", "Cover 1"],
  split44: ["Cover 1 Hole", "Cover 3 Sky", "Cover 4 Quarters", "Gap Press"],
  base52: ["Cover 1 Hole", "Cover 3 Sky", "Gap Press"],
  cub34: ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz"],
  bear34: ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz", "Sting Pinch", "Tampa 2"],
  nickelWide: ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
  nickelTriple: ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "Edge Blitz 0"],
  nickelCub: ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz"],
  overG: ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2"],
  "335": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "OLB Blitz"],
  "245": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters"],
  rush: ["Cover 1 Hole", "Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2", "Edge Blitz 0"]
};

const DEFENSIVE_PLAYBOOKS = [
  // -------- 32 NFL TEAM DEFENSIVE PLAYBOOKS --------
  {
    id: "def_arizona_cardinals",
    name: "Arizona Cardinals",
    style: "3-4 Odd / Multiple Nickel",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "3-4": {
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,7),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Wide Jack": DEF_PLAYS.nickel33.slice(0,5)
      },
      "3-3-5": {
        "3 High Over": DEF_PLAYS["335"],
        "Penny": DEF_PLAYS["335"].slice(0,5),
        "Penny 3 High": DEF_PLAYS["335"].slice(0,4)
      },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Load Weak": DEF_PLAYS.dime.slice(0,5),
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_atlanta_falcons",
    name: "Atlanta Falcons",
    style: "3-4 Odd / Nickel 2-4",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8)
      },
      "3-3-5": { "Penny": DEF_PLAYS["335"].slice(0,5) },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush
      },
      "Quarter": { "Normal": DEF_PLAYS.quarter },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_baltimore_ravens",
    name: "Baltimore Ravens",
    style: "3-4 Multiple / Heavy Nickel",
    formations: {
      "4-3": {
        "Under": DEF_PLAYS.base43.slice(0,6),
        "Odd Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Triple": DEF_PLAYS.nickelTriple,
        "3-3 Single Mug": DEF_PLAYS.nickelMug.slice(0,4)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "2-3-6 Will": DEF_PLAYS.dime.slice(0,5),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Quarter": { "Over Load": DEF_PLAYS.quarter.slice(0,3) },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_buffalo_bills",
    name: "Buffalo Bills",
    style: "3-4 Multiple / Aggressive Nickel",
    formations: {
      "4-3": { "Under": DEF_PLAYS.base43.slice(0,6) },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Load": DEF_PLAYS.nickelOver.slice(0,6),
        "Triple": DEF_PLAYS.nickelTriple
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_carolina_panthers",
    name: "Carolina Panthers",
    style: "3-4 Hybrid / Versatile Nickel",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Under": DEF_PLAYS.base43.slice(0,6)
      },
      "3-4": {
        "Bear": DEF_PLAYS.bear34,
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite Grizzly": DEF_PLAYS.base34.slice(0,5),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Odd": DEF_PLAYS.nickel33
      },
      "3-3-5": {
        "Over Flex": DEF_PLAYS["335"],
        "Over Wide": DEF_PLAYS["335"].slice(0,5)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_chicago_bears",
    name: "Chicago Bears",
    style: "4-3 Over / Zone Nickel",
    formations: {
      "4-3": {
        "Over": DEF_PLAYS.base43,
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Under": DEF_PLAYS.base43.slice(0,6),
        "Odd Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "46": { "Bear Under": DEF_PLAYS.base46.slice(0,6) },
      "Nickel": {
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide,
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8)
      },
      "3-3-5": { "Penny": DEF_PLAYS["335"].slice(0,5) },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_cincinnati_bengals",
    name: "Cincinnati Bengals",
    style: "4-3 / Nickel 3-3",
    formations: {
      "4-3": {
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Solid": DEF_PLAYS.base43.slice(0,6)
      },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide
      },
      "Dime": {
        "Normal": DEF_PLAYS.dime.slice(0,6),
        "Single Mug": DEF_PLAYS.dime.slice(0,4)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_cleveland_browns",
    name: "Cleveland Browns",
    style: "4-3 Even / Nickel Heavy",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Over Wide": DEF_PLAYS.base43.slice(0,5)
      },
      "46": { "Bear": DEF_PLAYS.base46.slice(0,6) },
      "5-2": { "Normal": DEF_PLAYS.base52 },
      "Nickel": {
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Double Mug": DEF_PLAYS.nickelMug,
        "Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide
      },
      "Dime": {
        "Normal": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush,
        "Single Mug": DEF_PLAYS.dime.slice(0,4)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_dallas_cowboys",
    name: "Dallas Cowboys",
    style: "3-4 / Aggressive Nickel 2-4",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "2-5": { "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]) },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load": DEF_PLAYS.nickelOver.slice(0,6),
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Triple": DEF_PLAYS.nickelTriple,
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8)
      },
      "3-3-5": { "Penny": DEF_PLAYS["335"].slice(0,5) },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_denver_broncos",
    name: "Denver Broncos",
    style: "3-4 Multiple / Nickel Pressure",
    formations: {
      "4-3": { "Under": DEF_PLAYS.base43.slice(0,6) },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Load": DEF_PLAYS.nickelOver.slice(0,6),
        "Triple": DEF_PLAYS.nickelTriple,
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_detroit_lions",
    name: "Detroit Lions",
    style: "4-3 Wide / Nickel 3-3 Heavy",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Walk": DEF_PLAYS.base43.slice(0,6),
        "Under": DEF_PLAYS.base43.slice(0,6),
        "Tite Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "3-4": {
        "Bear": DEF_PLAYS.bear34.slice(0,4),
        "Cub": DEF_PLAYS.cub34
      },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Over": DEF_PLAYS.nickel33,
        "3-3 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Wide": DEF_PLAYS.nickelWide,
        "3-3 Will": DEF_PLAYS.nickel33.slice(0,5)
      },
      "Dime": { "2-3-6": DEF_PLAYS.dime.slice(0,6) },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_green_bay_packers",
    name: "Green Bay Packers",
    style: "3-4 Odd / Versatile Nickel",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "3-4": {
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,7),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Wide Jack": DEF_PLAYS.nickel33.slice(0,5)
      },
      "3-3-5": {
        "3 High Over": DEF_PLAYS["335"],
        "Penny": DEF_PLAYS["335"].slice(0,5),
        "Penny 3 High": DEF_PLAYS["335"].slice(0,4)
      },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Load Weak": DEF_PLAYS.dime.slice(0,5),
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_houston_texans",
    name: "Houston Texans",
    style: "4-3 Over / Nickel Multiple",
    formations: {
      "4-3": {
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Over Wide": DEF_PLAYS.base43.slice(0,5),
        "Tite Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "5-2": { "Normal": DEF_PLAYS.base52 },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Load": DEF_PLAYS.nickelOver.slice(0,6),
        "Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide
      },
      "4-2-5": {
        "Over G": DEF_PLAYS.overG,
        "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]),
        "Under": DEF_PLAYS["245"]
      },
      "Dime": {
        "Normal": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_indianapolis_colts",
    name: "Indianapolis Colts",
    style: "3-4 Hybrid / Nickel 3-3",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over Solid": DEF_PLAYS.base43.slice(0,6)
      },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Over": DEF_PLAYS.nickel33,
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide,
        "3-3 Will": DEF_PLAYS.nickel33.slice(0,5)
      },
      "4-2-5": { "Over G": DEF_PLAYS.overG },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush,
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_jacksonville_jaguars",
    name: "Jacksonville Jaguars",
    style: "4-3 / Nickel 3-3 Multiple",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Solid": DEF_PLAYS.base43.slice(0,6)
      },
      "46": { "Bear Under": DEF_PLAYS.base46.slice(0,6) },
      "3-4": { "Under": DEF_PLAYS.base34.slice(0,6) },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Wide": DEF_PLAYS.nickelWide,
        "3-3 Single Mug": DEF_PLAYS.nickelMug.slice(0,4)
      },
      "4-2-5": {
        "Over G": DEF_PLAYS.overG,
        "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"])
      },
      "3-3-5": { "Over Flex": DEF_PLAYS["335"] },
      "Dime": {
        "Load Weak": DEF_PLAYS.dime.slice(0,5),
        "3-2-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_kansas_city_chiefs",
    name: "Kansas City Chiefs",
    style: "4-3 Multiple / Nickel Pressure",
    formations: {
      "4-3": {
        "Odd": DEF_PLAYS.base43.slice(0,5),
        "Over": DEF_PLAYS.base43,
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Over Walk": DEF_PLAYS.base43.slice(0,6),
        "Over Wide": DEF_PLAYS.base43.slice(0,5),
        "Under": DEF_PLAYS.base43.slice(0,6)
      },
      "46": { "Normal": DEF_PLAYS.base46.slice(0,7) },
      "Nickel": {
        "Double Mug": DEF_PLAYS.nickelMug,
        "Load": DEF_PLAYS.nickelOver.slice(0,6),
        "Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide
      },
      "4-2-5": {
        "Over G": DEF_PLAYS.overG,
        "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"])
      },
      "3-3-5": {
        "Over Flex": DEF_PLAYS["335"],
        "Penny": DEF_PLAYS["335"].slice(0,5)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "Normal": DEF_PLAYS.dime.slice(0,6)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_las_vegas_raiders",
    name: "Las Vegas Raiders",
    style: "3-4 / Nickel 3-3 Multiple",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over Walk": DEF_PLAYS.base43.slice(0,6),
        "Odd Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Wide Jack": DEF_PLAYS.nickel33.slice(0,5),
        "Over": DEF_PLAYS.nickelOver,
        "Triple": DEF_PLAYS.nickelTriple,
        "3-3 Single Mug": DEF_PLAYS.nickelMug.slice(0,4)
      },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "2-3-6 Will": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_los_angeles_chargers",
    name: "Los Angeles Chargers",
    style: "3-4 Odd / Nickel Blitz Heavy",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "46": { "Normal": DEF_PLAYS.base46.slice(0,7) },
      "3-4": {
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Triple": DEF_PLAYS.nickelTriple
      },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_los_angeles_rams",
    name: "Los Angeles Rams",
    style: "3-4 Even / Nickel 2-4",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Even": DEF_PLAYS.base34.slice(0,6),
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8)
      },
      "3-3-5": { "Penny": DEF_PLAYS["335"].slice(0,5) },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush
      },
      "Quarter": { "Normal": DEF_PLAYS.quarter },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_miami_dolphins",
    name: "Miami Dolphins",
    style: "4-3 / Nickel 3-3 / 4-2-5",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Solid": DEF_PLAYS.base43.slice(0,6)
      },
      "3-4": { "Under": DEF_PLAYS.base34.slice(0,6) },
      "2-5": { "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]) },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Wide": DEF_PLAYS.nickelWide,
        "3-3 Single Mug": DEF_PLAYS.nickelMug.slice(0,4)
      },
      "4-2-5": { "Over G": DEF_PLAYS.overG },
      "3-3-5": {
        "Over Flex": DEF_PLAYS["335"],
        "Over Wide": DEF_PLAYS["335"].slice(0,5)
      },
      "Dime": {
        "Load Weak": DEF_PLAYS.dime.slice(0,5),
        "3-2-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_minnesota_vikings",
    name: "Minnesota Vikings",
    style: "3-4 Multiple / Heavy Nickel 2-4",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Odd Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "3-4": {
        "Even": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite 5t": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Over Ed": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Odd": DEF_PLAYS.nickel33
      },
      "4-2-5": { "3 High": DEF_PLAYS.overG.slice(0,4) },
      "3-3-5": { "Penny 3 High": DEF_PLAYS["335"].slice(0,4) },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush,
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_new_england_patriots",
    name: "New England Patriots",
    style: "3-4 / 4-3 Hybrid Multiple",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Under": DEF_PLAYS.base43.slice(0,6)
      },
      "3-4": {
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Over Ed": DEF_PLAYS.base34.slice(0,5)
      },
      "5-2": { "Normal": DEF_PLAYS.base52 },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Over": DEF_PLAYS.nickel33,
        "Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Will": DEF_PLAYS.nickel33.slice(0,5)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Load Weak": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_new_orleans_saints",
    name: "New Orleans Saints",
    style: "3-4 Odd / Nickel 2-4 Pressure",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load": DEF_PLAYS.nickelOver.slice(0,6),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "Wide": DEF_PLAYS.nickelWide
      },
      "3-3-5": { "Penny": DEF_PLAYS["335"].slice(0,5) },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_new_york_giants",
    name: "New York Giants",
    style: "3-4 / 46 Hybrid / Dime Heavy",
    formations: {
      "46": { "Normal": DEF_PLAYS.base46.slice(0,7) },
      "3-4": {
        "Odd": DEF_PLAYS.base34.slice(0,7),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Over Ed": DEF_PLAYS.base34.slice(0,5)
      },
      "2-5": { "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]) },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load": DEF_PLAYS.nickelOver.slice(0,6),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush,
        "2-3-6 Will": DEF_PLAYS.dime.slice(0,5),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_new_york_jets",
    name: "New York Jets",
    style: "3-4 / 4-3 Hybrid Multiple",
    formations: {
      "4-3": {
        "Over": DEF_PLAYS.base43.slice(0,7),
        "Over Solid": DEF_PLAYS.base43.slice(0,6)
      },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Over Ed": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "3-3 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Over": DEF_PLAYS.nickel33,
        "Over": DEF_PLAYS.nickelOver,
        "Wide": DEF_PLAYS.nickelWide,
        "3-3 Will": DEF_PLAYS.nickel33.slice(0,5)
      },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "2-3-6 Will": DEF_PLAYS.dime.slice(0,5),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_philadelphia_eagles",
    name: "Philadelphia Eagles",
    style: "3-4 / Nickel 2-4 Aggressive",
    formations: {
      "4-3": { "Even 6-1": DEF_PLAYS.base43.slice(0,6) },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under 4t": DEF_PLAYS.base34.slice(0,5)
      },
      "2-5": { "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]) },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load": DEF_PLAYS.nickelOver.slice(0,6),
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Triple": DEF_PLAYS.nickelTriple,
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8)
      },
      "3-3-5": { "Penny": DEF_PLAYS["335"].slice(0,5) },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush
      },
      "Dollar": { "Sugar 3-2": DEF_PLAYS.dollar },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_pittsburgh_steelers",
    name: "Pittsburgh Steelers",
    style: "3-4 Even / Zone Blitz",
    formations: {
      "4-3": { "Odd Leo": DEF_PLAYS.base43.slice(0,5) },
      "3-4": {
        "Cub": DEF_PLAYS.cub34,
        "Even": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Tite": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "Nickel": {
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Over": DEF_PLAYS.nickel33,
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Triple": DEF_PLAYS.nickelTriple,
        "3-3 Will": DEF_PLAYS.nickel33.slice(0,5)
      },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6 Will": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_san_francisco_49ers",
    name: "San Francisco 49ers",
    style: "4-3 Wide / Nickel Multiple",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43,
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Over Walk": DEF_PLAYS.base43.slice(0,6),
        "Over Wide": DEF_PLAYS.base43.slice(0,5),
        "Under": DEF_PLAYS.base43.slice(0,6)
      },
      "3-4": { "Over Solid": DEF_PLAYS.base34.slice(0,6) },
      "5-2": { "Normal": DEF_PLAYS.base52 },
      "Nickel": {
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Double Mug": DEF_PLAYS.nickelMug,
        "Load": DEF_PLAYS.nickelOver.slice(0,6),
        "Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide
      },
      "4-2-5": {
        "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]),
        "Under": DEF_PLAYS["245"]
      },
      "Dime": {
        "Normal": DEF_PLAYS.dime.slice(0,6),
        "3-2-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_seattle_seahawks",
    name: "Seattle Seahawks",
    style: "3-4 / 4-3 Hybrid / Cover 3 Heavy",
    formations: {
      "4-3": {
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Under": DEF_PLAYS.base43.slice(0,6),
        "Odd Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Tite 5t": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Over Ed": DEF_PLAYS.base34.slice(0,5)
      },
      "2-5": { "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]) },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Odd": DEF_PLAYS.nickel33
      },
      "3-3-5": { "Over Flex": DEF_PLAYS["335"] },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "3-2 Swap Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "Rush": DEF_PLAYS.rush,
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4)
      },
      "Quarter": { "Over Load": DEF_PLAYS.quarter.slice(0,3) },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_tampa_bay_buccaneers",
    name: "Tampa Bay Buccaneers",
    style: "3-4 Multiple / Tampa 2 Heritage",
    formations: {
      "4-4": { "Split": DEF_PLAYS.split44 },
      "3-4": {
        "Bear": DEF_PLAYS.bear34,
        "Cub": DEF_PLAYS.cub34,
        "Grizzly": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Under": DEF_PLAYS.base34.slice(0,6)
      },
      "2-5": { "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]) },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "3-3 Wide Jack": DEF_PLAYS.nickel33.slice(0,5),
        "Triple": DEF_PLAYS.nickelTriple,
        "2-4 Odd": DEF_PLAYS.nickel24.slice(0,8)
      },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6 Will": DEF_PLAYS.dime.slice(0,5),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_tennessee_titans",
    name: "Tennessee Titans",
    style: "4-3 Wide / Nickel Multiple",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Over": DEF_PLAYS.base43,
        "Over Solid": DEF_PLAYS.base43.slice(0,6),
        "Over Walk": DEF_PLAYS.base43.slice(0,6),
        "Over Wide": DEF_PLAYS.base43.slice(0,5),
        "Under": DEF_PLAYS.base43.slice(0,6)
      },
      "46": { "Bear": DEF_PLAYS.base46.slice(0,7) },
      "3-4": { "Over Solid": DEF_PLAYS.base34.slice(0,6) },
      "Nickel": {
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "3-3 Cub": DEF_PLAYS.nickelCub,
        "Double Mug": DEF_PLAYS.nickelMug,
        "Load": DEF_PLAYS.nickelOver.slice(0,6),
        "Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Over": DEF_PLAYS.nickelOver,
        "Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "Wide": DEF_PLAYS.nickelWide
      },
      "4-2-5": {
        "Over Wide": DEF_PLAYS["245"].concat(["Tampa 2"]),
        "Under": DEF_PLAYS["245"]
      },
      "Dime": {
        "Normal": DEF_PLAYS.dime.slice(0,6),
        "3-2-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  {
    id: "def_washington_commanders",
    name: "Washington Commanders",
    style: "3-4 Multiple / Heavy Nickel 2-4",
    formations: {
      "4-3": {
        "Even 6-1": DEF_PLAYS.base43.slice(0,6),
        "Odd Leo": DEF_PLAYS.base43.slice(0,5)
      },
      "3-4": {
        "Even": DEF_PLAYS.base34.slice(0,6),
        "Over": DEF_PLAYS.base34.slice(0,6),
        "Over Solid": DEF_PLAYS.base34.slice(0,6),
        "Tite 5t": DEF_PLAYS.base34.slice(0,5),
        "Under": DEF_PLAYS.base34.slice(0,6),
        "Over Ed": DEF_PLAYS.base34.slice(0,5)
      },
      "Nickel": {
        "2-4": DEF_PLAYS.nickel24,
        "2-4 Dbl Mug": DEF_PLAYS.nickelMug,
        "2-4 Load Dbl Mug": DEF_PLAYS.nickelMug.slice(0,5),
        "2-4 Load Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Single Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Swap Dbl Mug": DEF_PLAYS.nickelMug.slice(0,4),
        "2-4 Wide": DEF_PLAYS.nickel24.slice(0,8),
        "3-3 Odd": DEF_PLAYS.nickel33
      },
      "4-2-5": { "3 High": DEF_PLAYS.overG.slice(0,4) },
      "3-3-5": { "Penny 3 High": DEF_PLAYS["335"].slice(0,4) },
      "2-4-5": { "Over Wide": DEF_PLAYS["245"] },
      "Dime": {
        "2-3 Single Mug": DEF_PLAYS.dime.slice(0,4),
        "2-3-6": DEF_PLAYS.dime.slice(0,6),
        "Rush": DEF_PLAYS.rush,
        "1-4 Dbl Mug": DEF_PLAYS.dime.slice(0,4),
        "1-4-6": DEF_PLAYS.dime.slice(0,5)
      },
      "Goal Line": { "6-2": DEF_PLAYS.goalLine, "Pinch": DEF_PLAYS.goalPinch, "5-3": DEF_PLAYS.goalLine },
      "Prevent": { "3 Deep": DEF_PLAYS.prevent }
    }
  },
  // -------- SCHEME / ALTERNATE DEFENSIVE PLAYBOOKS --------
  {
    id: "def_34",
    name: "3-4 Defense",
    style: "Odd Front / Versatile",
    formations: {
      "3-4": {
        "Bear": ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz", "Sting Pinch", "Tampa 2"],
        "Odd": ["Cover 1 Hole", "Cover 1 Robber", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "OLB Fire Man", "Sam Edge 3"],
        "Over": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Thunder Smoke"],
        "Under": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "OLB Blitz"]
      },
      "Nickel": {
        "2-4": ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Buzz Match", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Edge Blitz 0", "Nickel 2 Trap", "Nickel Sim 2"],
        "2-4 Dbl Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Mid Blitz 0", "Nickel Dog 3 Buzz", "Nickel Sim 2", "Tampa 2"],
        "3-3": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2"]
      },
      "Dime": {
        "2-3": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Cloud", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6", "Tampa 2"],
        "2-3 Odd Jack": ["Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["Prevent"]
      },
      "Goal Line": {
        "5-3": ["Cover 0", "Cover 1", "Gap Press"],
        "6-2": ["Cover 0", "Cover 1", "Gap Press"],
        "Pinch": ["Cover 0", "Cover 1"]
      },
      "Quarter": {
        "1-3-7": ["Cover 4 Quarters", "Cover 4 Palms", "Prevent"]
      }
    }
  },
  {
    id: "def_43",
    name: "4-3 Defense",
    style: "Even Front / Zone Heavy",
    formations: {
      "4-3": {
        "Over": ["1 Hole Press", "1 Robber Press", "Cover 1 Contain", "Cover 1 Hole", "Cover 2 Hard Flat", "Cover 2 Man", "Cover 3 Cloudstr", "Cover 3 Sky", "Cover 4 Press", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Free Fire", "LB Sting I", "OLB Fire Man", "Sam Edge 3", "Thunder Smoke"],
        "Over Solid": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "Thunder Smoke"],
        "Over Wide": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "Under": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "OLB Blitz"]
      },
      "4-4": {
        "Split": ["Cover 1 Hole", "Cover 3 Sky", "Cover 4 Quarters", "Gap Press"]
      },
      "Nickel": {
        "Double Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Mid Blitz 0", "Nickel Dog 3 Buzz", "Tampa 2"],
        "Over": ["1 Double Slot", "1 Double TE", "1 Double WR1", "Cover 1 Contain", "Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Buzz Match", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Drop Field", "Cover 4 Palms", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Edge Blitz 0", "Nickel 2 Trap", "Nickel Sim 2"],
        "Wide": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"]
      },
      "4-2-5": {
        "Over G": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2"]
      },
      "Dime": {
        "Normal": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Cloud", "Cover 4 Quarters", "Cover 6", "Tampa 2"],
        "Single Mug": ["Cover 1 Hole", "Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["Prevent"]
      },
      "Goal Line": {
        "5-3": ["Cover 0", "Cover 1", "Gap Press"],
        "6-2": ["Cover 0", "Cover 1", "Gap Press"],
        "Pinch": ["Cover 0", "Cover 1"]
      }
    }
  },
  {
    id: "def_46",
    name: "46 Defense",
    style: "Aggressive / Blitz Heavy",
    formations: {
      "46": {
        "Bear": ["Cover 0", "Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz"],
        "Bear Under": ["Cover 0", "Cover 1 Hole", "Cover 3 Sky", "Gap Press"],
        "Normal": ["Cover 0", "Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Tampa 2", "OLB Blitz", "Thunder Smoke"]
      },
      "3-4": {
        "Bear": ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz", "Tampa 2"]
      },
      "4-4": {
        "Split": ["Cover 1 Hole", "Cover 3 Sky", "Cover 4 Quarters", "Gap Press"]
      },
      "Nickel": {
        "3-3": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "3-3 Cub": ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz"],
        "Double Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Mid Blitz 0", "Tampa 2"],
        "Over": ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Edge Blitz 0", "Nickel 2 Trap"]
      },
      "4-2-5": {
        "Over G": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"]
      },
      "Dime": {
        "3-2 Odd": ["Cover 1 Hole", "Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2"],
        "Normal": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["Prevent"]
      },
      "Goal Line": {
        "5-3": ["Cover 0", "Cover 1", "Gap Press"],
        "6-2": ["Cover 0", "Cover 1", "Gap Press"],
        "Pinch": ["Cover 0", "Cover 1"]
      }
    }
  },
  {
    id: "def_multiple",
    name: "Multiple D",
    style: "Multiple / Versatile",
    formations: {
      "3-4": {
        "Cub": ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz"],
        "Odd": ["Cover 1 Hole", "Cover 1 Robber", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "OLB Fire Man"]
      },
      "4-3": {
        "Odd": ["Cover 1 Hole", "Cover 2 Man", "Cover 2 Zone", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "Over": ["Cover 1 Hole", "Cover 2 Man", "Cover 2 Sink", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Tampa 2", "Thunder Smoke"],
        "Under": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Match", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"]
      },
      "5-2": {
        "Normal": ["Cover 1 Hole", "Cover 3 Sky", "Gap Press"]
      },
      "Nickel": {
        "3-3": ["Cover 1 Hole", "Cover 2 Lurk", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "3-3 Cub": ["Cover 1 Hole", "Cover 3 Sky", "Gap Press", "OLB Blitz"],
        "3-3 Dbl Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Press", "Cover 3 Sky", "Inverted Cover 2", "Mid Blitz 0", "Tampa 2"],
        "3-3 Over Jack": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Cover 9", "Tampa 2"],
        "3-3 Swap Dbl Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Mid Blitz 0"],
        "3-3 Wide Jack": ["Cover 1 Hole", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters"]
      },
      "Dime": {
        "1-4 Dbl Mug": ["Cover 1 Hole", "Cover 3 Cloud", "Mid Blitz 0", "Tampa 2"],
        "3-2 Odd": ["Cover 1 Hole", "Cover 3 Cloud", "Cover 4 Quarters", "Tampa 2"],
        "Normal": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Cloud", "Cover 4 Quarters", "Cover 6", "Tampa 2"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Cover 4 Quarters"]
      },
      "Quarter": {
        "Normal": ["Cover 4 Quarters", "Cover 4 Palms", "Cover 6", "Prevent"]
      },
      "Prevent": {
        "3 Deep": ["Prevent"]
      },
      "Goal Line": {
        "5-3": ["Cover 0", "Cover 1", "Gap Press"],
        "6-2": ["Cover 0", "Cover 1", "Gap Press"],
        "Pinch": ["Cover 0", "Cover 1"]
      }
    }
  },
  {
    id: "def_cover2",
    name: "Cover 2 Defense",
    style: "Tampa 2 / Zone Heavy",
    formations: {
      "4-3": {
        "Over": ["Cover 1 Hole", "Cover 2 Hard Flat", "Cover 2 Man", "Cover 2 Press", "Cover 2 Zone", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2", "Thunder Smoke"],
        "Over Wide": ["Cover 1 Hole", "Cover 2 Man", "Cover 2 Sink", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "Under": ["Cover 1 Hole", "Cover 2 Lurk", "Cover 2 Man", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"]
      },
      "Nickel": {
        "3-3": ["Cover 1 Hole", "Cover 2 Man", "Cover 2 Zone", "Cover 3 Cloud", "Cover 3 Match", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "Double Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Sky", "Inverted Cover 2", "Mid Blitz 0", "Tampa 2"],
        "Over": ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Sky", "Cover 4 Quarters", "Cover 6", "Cover 9", "Tampa 2"]
      },
      "Dime": {
        "Normal": ["Cover 1 Hole", "Cover 2 Invert", "Cover 3 Cloud", "Cover 4 Quarters", "Cover 6", "Tampa 2"]
      },
      "Quarter": {
        "Normal": ["Cover 4 Quarters", "Cover 4 Palms", "Cover 6", "Prevent"]
      },
      "Prevent": {
        "3 Deep": ["Prevent"]
      },
      "Goal Line": {
        "5-3": ["Cover 0", "Cover 1", "Gap Press"],
        "6-2": ["Cover 0", "Cover 1", "Gap Press"],
        "Pinch": ["Cover 0", "Cover 1"]
      }
    }
  },
  {
    id: "def_madden",
    name: "Madden Defense",
    style: "Default / Starter",
    formations: {
      "4-3": {
        "Over": ["Cover 1 Hole", "Cover 2 Man", "Cover 2 Zone", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "Under": ["Cover 1 Hole", "Cover 2 Man", "Cover 2 Sink", "Cover 3 Sky", "Tampa 2"]
      },
      "Nickel": {
        "Over": ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Man", "Cover 3 Cloud", "Cover 3 Match", "Cover 3 Sky", "Cover 4 Quarters", "Tampa 2"],
        "Double Mug": ["Cover 1 Hole", "Cover 2 Invert", "Cover 2 Press", "Cover 3 Sky", "Inverted Cover 2", "Mid Blitz 0"]
      },
      "Dime": {
        "Normal": ["Cover 1 Hole", "Cover 2 Lurk", "Cover 3 Cloud", "Cover 4 Quarters", "Cover 9", "Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["Prevent"]
      },
      "Goal Line": {
        "5-3": ["Cover 0", "Cover 1"],
        "6-2": ["Cover 0", "Cover 1"],
        "Pinch": ["Cover 0", "Cover 1"]
      }
    }
  }
];

export { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS };
