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
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash", "Stick"],
        "Doubles HB Wk": ["Boomerang 01 Trap", "Boomerang Slot Swing", "Boomerang Y Delay", "Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Base", "HB Cross Screen", "HB Mid Draw", "HB Slip Screen", "Inside Zone", "PA Y-Cross", "Pin Pull Sweep", "RE", "Read Option"],
        "Doubles Z Close Wk": ["Corner Strike", "Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Bunch": ["Curl Flats", "Divide Wheel", "L Spot", "QB Draw", "Spacing", "Trail", "Verticals", "Y Curl", "Z Spot N Go"],
        "Empty Chips": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Y Slot": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Normal Y Off": ["Curl Combo", "Dbl Dig", "Double Slants", "Exit RPO Alert Screen", "Exit Slot Option", "Exit Switch Out", "Fake Jet HB Seam", "Fake Jet Pass Power", "Four Verticals", "HB Scissors", "HB Slip Screen", "Inside Zone", "Jet Touch Pass", "MTN Curls", "MTN HB Off Tackle", "MTN PA Read", "MTN PA Verticals", "MTN Scissors", "MTN Y Lead Read Option", "Orbit PA Curls", "Orbit PA Y Screen", "Orbit RPO Alert Swing", "RPO Peek Slant", "Stick Slot Option"],
        "Normal Y Off Close": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split WR Backfield": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Split Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Spread Y-Flex": ["Angle Y Sail", "HB Draw", "HB Slip Screen", "Inside Zone", "MTN Drive", "MTN FK Screen Wheel", "MTN FL Screen", "MTN HB Cross Screen", "MTN Out H-Angle", "MTN Replace", "MTN Shallow HB Angle", "MTN Slot Flags", "MTN Sluggo Replace", "PA Seams", "QB Zone", "RPO Alert Screen", "Spot N Go", "Y-Option"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick", "Verticals"],
        "Trey Open HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
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
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot", "Spacing", "Stick"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "Spot"],
        "Deuce Close": ["Counter", "HB Toss", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick", "Stretch"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Nasty": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "HB Toss", "PA Boot", "PA Crossers", "Power O"]
      },
      "Strong": {
        "Jumbo": ["Counter", "HB Dive", "Power O", "Stretch", "Sweep"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Full House Over Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross", "Spot", "Stick"],
        "Bunch X Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Smash", "PA Crossers", "Spot"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Y Off Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Empty Bunch Y Flex": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Trips Speed": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Normal Off Close Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Spread Dbl Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Stack Y-Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Shallow", "PA Crossers", "Stick"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Stick"],
        "Tight Y Off": ["01 Trap", "Cheat Outside Zone", "Cheat RPO Zone Alert Bubble", "Cheat Slash Wheel Cross", "Duo", "Fake Jet HB Seam", "Flood Drive", "HB Scissors", "HB Slip Screen", "Jet Touch Pass", "MTN Mesh Spot", "MTN PA Spinner", "MTN Slot Choice", "MTN Spinner HB Inside", "MTN WR Outside Zone", "MTN Y-Corner", "PA Go Slot Cross", "Read Option", "TE Corner", "Wheel Spot", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trey Y-Flex Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Wing Close Offset": ["HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Stick"],
        "Wing Stack": ["HB Draw", "Inside Zone", "Levels", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight": ["Counter", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "Stick"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Y Off Trips Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Deuce": ["Counter", "HB Dive", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick", "Stretch"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong I": {
        "Wing": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Wildcat": {
        "Trips Over": ["End Around", "HB Power", "Jet Sweep", "Power", "Read Option"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Deuce": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "RPO Peek", "Stretch"],
        "Full House TE": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Wing Flex Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch Quads": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen", "Orbit PA HB Wheel", "RPO Alert Screen"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels", "RPO Read"],
        "Doubles Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Trey Stack": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "MTN PA Read", "Orbit RPO Alert Swing", "Read Option", "RPO Peek Slant", "Stick"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "RPO Alert", "Stick"],
        "Slot Right": ["HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "Stick", "Verticals"],
        "Spread Flex Wk": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Stack Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "RPO Alert", "Stick"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "MTN Mesh Spot", "PA Go Slot Cross", "Read Option", "RPO Zone Alert", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option", "RPO Alert", "Stick"],
        "Trey Open": ["Corner Strike", "Dagger Deep Curl", "Double Ins", "Four Verticals", "H MTN Flood H-Sneak", "H MTN Mesh", "H MTN X Shallow Cross", "HB Slip Screen", "Inside Zone", "Jet New Orleans", "Levels Switch", "PA Read", "Read Option", "RPO Alert Draw Stick", "Shock H Option", "Slants", "Slot Drive", "Stick", "WR Mid Screen", "Y Corner", "Y-Drag"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "Read Option", "RPO Alert Bubble", "Shuffle MTN Levels", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert", "Stick"],
        "Wing": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Wing Slot Offset Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Alert", "Stick"]
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
        "Bunch Ace": ["HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Doubles": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Stack": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight Z": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "H Tight": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Ace Double Wing": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Full House TE": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Strong": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Peek"],
        "U Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert", "RPO Peek"],
        "Wing Tight Z": ["Counter", "Inside Zone", "PA Boot", "Power Read", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Heavy Raven": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "RPO Alert"],
        "Split Wing Nasty": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Slot Flip": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Slots": ["Bench", "Drive Trail", "HB Quick Base", "HB Sweep", "Inside Zone", "Jet Pass FK Zone", "Mesh", "Mid Zone", "MTN Bench Snag N Go", "MTN HB Draw", "MTN Inside Zone", "MTN PA Flood Under", "MTN PA Slide", "MTN Salem Slot Option", "Out N Ups", "PA Shot Portland", "PA Slide", "PA Zone FK Jet", "PA Seam", "Stick", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option", "RPO Alert"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Read Option", "Stick"],
        "Trey Open Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trips TE Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "Read Option", "RPO Alert Bubble"],
        "Trips TE Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Alert"],
        "Trips X Nasty Off Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "U Off Trips": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Read Option", "RPO Alert"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "RPO Alert"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"]
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
        "Deuce Close": ["Counter", "Inside Zone", "Outside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Deuce Close Tilt": ["Counter", "Inside Zone", "Outside Zone", "PA Scissors", "Stretch"],
        "Doubles Y Off Flex": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "East Tight": ["Counter", "HB Dive", "HB Toss", "Outside Zone", "PA Boot", "Power O"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA Cross", "Spacing"],
        "U Off Close": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "U Off Trips Cluster": ["Inside Zone", "Mesh", "Outside Zone", "PA Read", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "Outside Zone", "PA Boot", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Wing Slot": ["HB Duo", "Inside Zone", "Outside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "Outside Zone", "PA Boot", "Power O", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "Outside Zone", "PA Boot", "PA Crossers", "Power O"],
        "Wing": ["Counter", "HB Toss", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "Outside Zone", "PA Power O", "Power O"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Toss", "Outside Zone", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "HB Dive", "Outside Zone", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "Outside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Strong Y Off Close": ["Inside Zone", "Outside Zone", "PA Boot", "Power Read", "Read Option"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "Outside Zone", "PA Cross", "RPO Zone Alert"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Outside Zone", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Tight": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Strong Slots": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers"],
        "Split Twins Stack": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Stick"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "Outside Zone", "PA Seams", "RPO Alert Screen"],
        "Tight Base Flex": ["HB Draw", "Inside Zone", "Outside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Slot Flip": ["HB Draw", "Inside Zone", "Mesh", "Outside Zone", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "MTN Mesh Spot", "Outside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Crossers", "Stick", "Verticals"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Stick"],
        "U Off Stack": ["HB Draw", "Inside Zone", "Levels", "Outside Zone", "PA Read", "Stick"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Outside Zone", "PA Crossers"]
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
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles": ["HB Duo", "Inside Zone", "PA Boot", "PA Crossers", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Off Trio Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Trips": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "Verticals"]
      },
      "Gun": {
        "Bunch Open TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Quads Close": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Wide": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Doubles Y Off Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles Z Close": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y-Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants", "Stick"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Trey Open": ["Corner Strike", "Curl HB Burst", "Dagger Deep Curl", "Four Verticals", "HB Angle Screen", "HB Base", "HB Cross Screen", "HB Draw", "HB Off Tackle", "HB Slip Screen", "Inside Zone", "Levels Switch", "Mesh", "PA WR In", "Read Option", "RPO Alert Draw Stick", "Same Side Zone", "Shock H Option", "Slants", "Strong Flood", "Y-Drag"],
        "Trey Open Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips TE Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Doubles South": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "U Off Stack": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "Y Off Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Maryland I": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Tight Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Gun": {
        "Box Y Split": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Read Option"],
        "Bunch Quads": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Bunch Y-Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Mesh", "PA Seams", "Spacing", "Verticals"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Y Off Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Empty Bunch Open": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Normal Off Close Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Dbl Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option", "Stick"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips Y Slot": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Flex Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Weak": {
        "Slot Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Tight Y Off Flex": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"],
        "Wing Flex Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing", "Stick"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Trey": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Go Go Twins Flex": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Split Close Pro": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Slots HB Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trips": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Strong": {
        "H Tight Close": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Jumbo": ["Counter", "HB Dive", "Power O", "Stretch"]
      },
      "Weak": {
        "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"]
      },
      "Gun": {
        "Ace Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Bunch Offset Close": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Doubles Flex Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Doubles Z Close": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Split Twins Offset Close": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Tight Offset TE": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Slots HB Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trio Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "QB Zone", "RPO Alert Bubble", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "U Off Trips Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Trips Wk Nasty Goose": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close Flex": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross", "Stick"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Cluster": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash", "Stick"],
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Trey": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "PA Read", "Stick"],
        "Pack Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "MTN Slot Flags", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trio": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips TE Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Slot Offset Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Deuce": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Box": ["HB Draw", "Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Bunch Str Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stretch"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Split Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread Y-Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips Y Slot": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trio Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Y Off Trio Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"],
        "Y Trips Close Wing": ["Counter", "Inside Zone", "PA Boot", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O", "Quick Slants"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"]
      },
      "Weak": {
        "3WR Flex": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O"]
      },
      "Split T": {
        "Tight": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off Flex": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "5WR Trio": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Ace Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Box HB Strong": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Box Offset Wk": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Str Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Doubles Flex Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Tight Doubles": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Flex Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Flex Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trio HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "U Off Trips Flex": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "U Off Trips Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Trio": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Z": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot Stack": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Weak": { "H Close Off": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Split Backs": { "Offset Wing Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Doubles Hip": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off Stack": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "U Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Wing Slot": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Open": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Off Close Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Spread Y Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips Y Slot": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Ace Double Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "East Tight": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O"],
        "Tight Doubles": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "U Off Stack": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing"],
        "U Off Trips": ["Inside Zone", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong I": { "H Wing": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O"] },
      "Weak": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"]
      },
      "Gun": {
        "Bunch Open TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Double Stack": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Empty Base Trio": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Slot Right": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Spread": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips TE Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Flex Offset Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight Nasty": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight Z": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": { "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"] },
      "Gun": {
        "Box": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Quads": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Bunch Trio Open": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Y-Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Mesh", "PA Seams", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty HB Wide": ["Curl Flats", "Mesh", "QB Draw", "Verticals"],
        "Empty Trips Speed": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Split Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Spread Y-Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Slots HB Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "U Off Trips Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing HB Wk Close": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Trips Wk Nasty": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Trips Wk Nasty Goose": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close Wk": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Y Off": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "U Off Trio": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"]
      },
      "Strong": {
        "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Jumbo": ["Counter", "HB Dive", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Weak": { "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Full House": { "Tight": ["Counter", "HB Dive", "Inside Zone", "Power O"] },
      "Pistol": {
        "Doubles Y Off": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Box": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Y Off Wk": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Split Flanker Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trey Open Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trio HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Flex Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Ace Close": ["HB Dive", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Ace Double Wing": ["Counter", "HB Dive", "HB Toss", "Inside Zone", "PA Boot", "Power O"],
        "Ace Slot": ["HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick"],
        "Bunch": ["HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Z": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "H Tight": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": {
        "H Tight Close": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Weak": { "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Split Backs": { "Offset Wing Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"] },
      "Pistol": {
        "Tight Y Off Flex": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "U Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Weak Slot": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert"],
        "Wing Tight Z": ["Counter", "Inside Zone", "PA Boot", "Power Read", "Read Option"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty HB Wide": ["Curl Flats", "Mesh", "QB Draw", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "U Off Trips": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Flex Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Ace": ["HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Trio": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "U Off Trips": ["Inside Zone", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": { "Close Flex": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"] },
      "Strong": {
        "H Close Off": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Weak": { "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch X Nasty": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Doubles": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off Flex": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trips": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "Verticals"],
        "U Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Empty Base Trio": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Bunch": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Split Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Slot Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Trips Wk Nasty Goose": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "U Off Trips": ["Inside Zone", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"]
      },
      "I Form": {
        "Close Flex": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off Stack": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Strong Y Off Close": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Trips": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert", "Verticals"]
      },
      "Gun": {
        "5WR Tight": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Empty Base Trio": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Ace Slot": ["HB Duo", "Inside Zone", "PA Boot Over", "PA Crossers", "Spacing", "Stick"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Trips": ["Inside Zone", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Weak": { "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Split T": { "Tight": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Tight Y Off Flex": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch TE Wk": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Chips": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Y Off Wk": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Go Go Twins Flex": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Close Pro": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread Y-Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Offset TE": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing Pair": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight Z": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch": ["HB Stretch", "Inside Zone", "Mesh", "PA Post Shot", "Spacing", "Stick"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Slot": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong I": { "Pro": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "East Tight": ["Counter", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Strong": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Peek"],
        "Wing Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "Bunch Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Off Close Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Flanker Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "PA Read", "Stick"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips TE Flex Close Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing HB Wk Close": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Doubles Y Off": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Trips Cluster": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight U": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Pistol": {
        "Double Hip": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Trips Left Open": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert"],
        "Wing Flex Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Double Stack": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Go Go Slot Open": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Heavy": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Offset TE": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "U Off Trips": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trio Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trio": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"]
      },
      "I Form": { "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Full House Over Close": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Open Flex Close": ["HB Stretch", "Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Doubles Hip": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Off Close Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Doubles Offset Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Z Close Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty HB Wide": ["Curl Flats", "Mesh", "QB Draw", "Verticals"],
        "Empty Trey Stack": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Split Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Stack Y-Flex": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips TE Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "U Off Trips": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Close Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Trips Close": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Stick"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "Strong": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Doubles Y Off Stack": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "U Off Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "5WR Tight": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch TE Wk": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash"],
        "Double Stack": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Spread Y Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing HB Wk Close": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Pro": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O"]
      },
      "Weak": {
        "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Deuce": ["Inside Zone", "PA Boot", "Power Read", "Read Option", "RPO Alert"],
        "Doubles Y Off": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "East Tight": ["Counter", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Wing Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert", "Stretch"]
      },
      "Gun": {
        "4WR Trips Strong": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Ace Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles Y Off Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Empty Ace": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Flex Trey": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Split Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread Dbl Flex Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Slants"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Tight Flip": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"]
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
        "Ace Close": ["HB Dive", "HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Trips": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Trips Close": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Z": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot Stack": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Tight Slots": ["Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"]
      },
      "Gun": {
        "Bunch Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Doubles Y Off": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Empty Bunch Open": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Chips Nasty": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Strong Slots": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Flanker Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split WR Backfield": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Flex Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trio Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read", "Stick"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Wing": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot LT", "PA TE Flood", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "MTN Spacing", "PA Boot LT", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Trips Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Wildcat": { "Pro": ["End Around", "HB Power", "Jet Sweep", "Power", "Read Option"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "U Off Stack": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Flex Close": ["Inside Zone", "PA Boot", "Read Option", "RPO Alert"],
        "Y Trips": ["Inside Zone", "Levels", "PA Crossers", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Box Y Off": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE Wk": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Cluster HB Str": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles Off Close Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Triple Stack": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Heavy Saint": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "PA Read"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Stack Y-Flex": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Tight Base Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "U Off Stack": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Off Trips Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Off Trio Close": ["HB Duo", "Inside Zone", "PA Crossers", "Spacing", "Stick"],
        "Y Trips Close Wing": ["Counter", "Inside Zone", "PA Boot", "Spacing", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "PA Power O", "Power O"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Weak": {
        "3WR Flex": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Close Flex": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O"]
      },
      "Gun": {
        "Box Y Off": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Deuce": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles Z Close Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Trey Stack": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Normal Flex Snug": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Split Twins Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Base Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Flex Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Flex Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Slot Flip": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing Tight Nasty": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Off Close": ["HB Duo", "Inside Zone", "PA Boot LT", "PA Cross", "Stick"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Pair Heavy": ["Counter", "HB Dive", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"] },
      "Weak I": { "Slot": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Gun": {
        "4WR Trips Strong": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Bunch Open": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Open TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Cluster": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "Smash", "Stick"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Y Off Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Empty Base Trio": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Strong Slot": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Flex Trey": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Slip Screen", "Inside Zone", "PA Read"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y-Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Doubles": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Tight Flex Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Trips Wk Nasty": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trips Close": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "U Off Trips Cluster": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Tight Nasty": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Tight": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Gun": {
        "Box": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE Str": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot"],
        "Bunch Wide Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN Smash", "PA Cross", "RPO Zone Alert"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Stick", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Doubles HB Wk": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Sketch Stack": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers", "Stick"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Orbit Cross Screen", "PA Boot Shot", "RPO Alert Bubble", "Verticals"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Crossers"]
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
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "U Off Trips": ["Inside Zone", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing", "Stick"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Y Off Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Power O", "Power O"]
      },
      "Split T": { "Tight": ["Counter", "HB Dive", "PA Boot", "Power O"] },
      "Wildcat": { "Slot Flex": ["End Around", "HB Power", "Jet Sweep", "Power", "Read Option"] },
      "Pistol": {
        "Deuce Close": ["Inside Zone", "PA Boot", "Power O", "Read Option", "Stretch"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Open Flex Close": ["HB Stretch", "Inside Zone", "PA Read", "Read Option", "RPO Alert"]
      },
      "Gun": {
        "Box Offset Wk": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Quads": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Crossers"],
        "Bunch Spread": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "PA Cross"],
        "Bunch Y-Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Mesh", "PA Seams", "Verticals"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Doubles Y Off Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Trips Speed": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Y Off Close": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Split Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Stack HB Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Tight Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Trey Y-Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick", "Verticals"],
        "Trips TE Flex": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips X Nasty": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "U Off Trips Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "PA Draw Shot"],
        "Bunch X Nasty": ["HB Stretch", "Inside Zone", "Mesh", "MTN China Cross", "MTN Smash", "PA Cross"],
        "Deuce Close": ["Counter", "Inside Zone", "PA Scissors", "Stretch Alert Bubble", "Zone Split"],
        "Doubles Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Tight Doubles": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Trips": ["Inside Zone", "Mesh", "PA Read", "Spacing", "Stick", "Verticals"],
        "Wing Close": ["HB Duo", "HB Stretch", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"]
      },
      "I Form": {
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "PA Crossers", "Power O"],
        "Slot Close": ["Counter", "FB Dive", "HB Dive", "ISO", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong": { "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"] },
      "Weak": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "H Close Off": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Slot Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Pistol": { "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"] },
      "Gun": {
        "Ace": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Ace Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Box": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch Spread Nasty": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "MTN Spot", "Orbit Cross Screen"],
        "Bunch Wide": ["Corner Strike", "Inside Zone", "Mesh", "PA Crossers", "Spacing"],
        "Deuce Close": ["Counter", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Clamp Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "Levels"],
        "Empty Base Trio": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Stick", "Verticals"],
        "Empty Chips Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Empty Chips Tight": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Split U Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Spread Y-Slot Wk": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Flex Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Tight Y Off": ["Duo", "HB Slip Screen", "Inside Zone", "PA Go Slot Cross", "Read Option", "Zone Fake Jet"],
        "Tight Y Off Wk": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "Read Option"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick", "Verticals"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Strong": ["Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Trips Left Open": ["Inside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Weak Slot Open": ["Inside Zone", "PA Read", "Read Option"],
        "Y Off Trips": ["HB Draw", "Inside Zone", "PA Boot", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Quads": ["Corner Strike", "HB Screen", "Mesh", "Spacing", "Verticals"],
        "Cluster": ["Corner Strike", "HB Draw", "Levels", "Mesh", "Smash", "Stick"],
        "Double Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Open Flex": ["HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Slot Open": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen", "Spot N Go"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Trey Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick", "Verticals"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Wing Flex Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "PA Read", "Read Option"],
        "Trips Left Open": ["Inside Zone", "PA Read", "Read Option"],
        "Weak Slot Open": ["Inside Zone", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh"],
        "Cluster": ["Corner Strike", "HB Draw", "Levels", "Mesh", "Stick"],
        "Double Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "PA Read"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Spacing"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Verticals"],
        "Open Flex": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "Spot N Go"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "PA Seams"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Read", "Stick"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"]
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
        "Ace": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing", "Stick"],
        "Ace Overload": ["HB Dive", "Inside Zone", "PA Boot", "Power O", "Stretch"],
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Tight Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Slot": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Z": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Y Trips TE Slot": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "ISO", "Power O"]
      },
      "Strong": {
        "Pro": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Slot Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O"]
      },
      "Weak": {
        "H U Deep": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Slot Flex": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"]
      },
      "Full House": {
        "Normal Wide": ["Counter", "FB Dive", "HB Dive", "Power O", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Wing Flex": ["Inside Zone", "PA Boot", "Power Read", "Read Option"]
      },
      "Gun": {
        "Ace": ["Drag Over", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Quick Outs", "Slant Flat", "Stick"],
        "Ace Slot": ["HB Draw", "Inside Zone", "Levels", "Mills", "PA Read", "Quick Hitch", "Stick"],
        "Doubles Flex Wing": ["Deep Post", "HB Draw", "Inside Zone", "PA Boot", "PA Deep Outs", "PA Read", "Stick"],
        "Empty Trey": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Split Slot": ["Deep Crossers", "HB Draw", "Inside Zone", "Levels", "PA Read", "PA Slot Cross", "Stick"],
        "Spread": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "PA Zone Shot", "Spot N Go"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Play Action"],
        "Trey Y-Flex Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read", "Post Corner"],
        "Y Trips Wk": ["Corner Strike", "Double Post", "HB Draw", "Inside Zone", "Levels", "PA Read", "Skinny Post"]
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
        "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Quads": ["Corner Strike", "HB Screen", "Mesh", "Spacing", "Verticals"],
        "Cluster": ["Corner Strike", "HB Draw", "Levels", "Mesh", "Stick"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Quick Slants", "Verticals"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "MTN Drive", "PA Seams"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read", "Stick"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"]
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
        "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "RPO Alert"],
        "Ace Slot": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Bunch TE": ["Inside Zone", "Mesh", "PA Read", "Read Option", "Stick"],
        "Bunch X Nasty": ["Inside Zone", "Mesh", "MTN China Cross", "PA Read", "Read Option"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Flex Hip": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Full House": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O", "Read Option"],
        "Open Flex": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Open Flex Close": ["HB Stretch", "Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "Read Option", "RPO Peek"],
        "Strong": ["Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Strong Slot": ["Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Strong Slot Open": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Tight Slots": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Peek", "Stick"],
        "Trips Left Open": ["Inside Zone", "PA Read", "Read Option", "RPO Peek"],
        "U Off": ["HB Draw", "Inside Zone", "PA Boot", "Read Option"],
        "U Off Trips": ["HB Draw", "Inside Zone", "PA Boot", "Read Option"],
        "Weak I": ["Counter", "HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Weak I Wing": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Weak Slot": ["Inside Zone", "PA Read", "Read Option", "RPO Alert"],
        "Weak Slot Open": ["Inside Zone", "PA Read", "Read Option"],
        "Wing": ["Counter", "Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Wing Slot": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["HB Draw", "Inside Zone", "PA Boot", "Read Option"],
        "Y Trips": ["Inside Zone", "PA Read", "Read Option", "RPO Peek"]
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
        "Ace": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing"],
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Peek"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Strong": ["Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Wing Slot": ["Inside Zone", "PA Boot", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Quads": ["Corner Strike", "HB Screen", "Mesh", "Spacing", "Verticals"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"]
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
        "Ace": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Slot": ["HB Duo", "Inside Zone", "PA Boot", "Spacing"]
      },
      "Gun": {
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Cluster": ["Corner Strike", "HB Draw", "Levels", "Mesh", "Stick"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Quads": ["Curl Flats", "Mesh", "QB Draw", "Verticals"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"]
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
        "Ace": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing"],
        "Ace Dbl Wing": ["Counter", "HB Toss", "Inside Zone", "Power O", "Stretch"],
        "Ace Slot": ["HB Dive", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Slot": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Y Off Trio": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Y Trips": ["HB Draw", "Inside Zone", "PA Read", "Stick"]
      },
      "I Form": {
        "Hulk": ["Counter", "FB Dive", "HB Dive", "Power O", "Stretch"],
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Slot Open": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong": {
        "Pro": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"]
      },
      "Weak": {
        "Close Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Slot Open": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"]
      },
      "Full House": {
        "Normal": ["Counter", "FB Dive", "HB Dive", "Power O", "Stretch"]
      },
      "Wildcat": {
        "Normal": ["End Around", "HB Dive", "Jet Sweep", "Power O", "Read Option", "Speed Option"]
      },
      "Pistol": {
        "Bunch": ["Inside Zone", "Mesh", "PA Read", "Read Option", "RPO Bubble", "RPO Peek"],
        "Full House Base": ["Counter", "HB Blast", "HB Dive", "Inside Zone", "Power O", "Triple Option"],
        "Full House TE": ["Counter", "HB Dive", "Inside Zone", "Inverted Veer", "PA Boot", "Power O", "Split Zone"],
        "Wing Slot": ["Inside Zone", "PA Boot", "PA Read", "Read Option", "Speed Option"]
      },
      "Gun": {
        "Doubles Flex": ["Delayed Draw", "HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick", "Wide Zone"],
        "Flex Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "RPO Lookie", "Stick"],
        "Split Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Zone Peek", "Stick"],
        "Spread": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "Spot N Go"],
        "Spread Y-Slot": ["HB Draw", "Inside Zone", "Levels", "PA Seams"],
        "Trey Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"]
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
        "Ace": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing"],
        "Ace Slot": ["HB Dive", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Ace": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh"],
        "East": ["Counter", "HB Dive", "Inside Zone", "Power O", "Stretch"],
        "Trio": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips Y Slot": ["HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong I": {
        "Pro": ["Counter", "FB Dive", "HB Blast", "HB Dive", "HB Slam", "PA Boot", "Power O", "Wham"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "HB Pitch", "Power O", "Stretch", "Wide Zone"],
        "Twins Over": ["Counter", "HB Dive", "PA Boot", "Power O", "Split Zone"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch", "Sweep"],
        "Y Open Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O", "Wham"]
      },
      "Weak I": {
        "Slot": ["Delayed Draw", "HB Dive", "Inside Zone", "PA Boot", "Power O"]
      },
      "Power I": {
        "Strong": ["Counter", "FB Dive", "HB Blast", "HB Dive", "HB Slam", "ISO", "Power O", "Stretch", "Triple Option"]
      },
      "Full House": {
        "Wide": ["Counter", "FB Dive", "HB Dive", "Power O", "Stretch"]
      },
      "Gun": {
        "Ace": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Stick"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Split Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Split Y-Flex": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Y Off Trio Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "5WR Tight": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Quads Close": ["Corner Strike", "HB Screen", "Mesh", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Cross", "Stick"],
        "Bunch Str Offset": ["Corner Strike", "Inside Zone", "Mesh", "PA Cross"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers", "Verticals"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Doubles Hip": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Doubles Offset Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Empty Ace": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing"],
        "Empty Bunch Y Flex": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Gadget Backfield": ["End Around", "HB Dive", "Jet Sweep", "QB Scramble", "Read Option"],
        "Gadget Package": ["End Around", "HB Dive", "Jet Sweep", "QB Scramble", "Read Option", "Trick Play"],
        "Go Go Slot Open": ["HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone"],
        "Slot Left": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh", "PA Read"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick"],
        "Trio HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "U Off Trips": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Pair": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Wing Stack Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Y Off Trio Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Y Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Crossers"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Doubles Hip": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Empty Ace": ["Curl Flats", "Mesh", "QB Draw", "Spacing"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing"],
        "Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Normal Y Off Wk": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Split Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"]
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
        "Ace": ["Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "Read Option"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Str Nasty": ["Corner Strike", "Inside Zone", "Mesh", "PA Cross"],
        "Bunch Y-Flex": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Verticals"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Doubles Hip": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Doubles Y Off": ["HB Draw", "Inside Zone", "Levels", "PA Crossers"],
        "Empty Base": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Empty Bunch Wide": ["Curl Flats", "Mesh", "QB Draw", "Spacing"],
        "Flex Y Off Close": ["HB Draw", "Inside Zone", "Levels", "PA Crossers", "Stick"],
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread Y-Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "RPO Alert Screen"],
        "Tight Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Trey Open": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Stick"],
        "Trips HB Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Wing Stack": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Read Option"]
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
        "Ace Close": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing"],
        "Ace Dbl Wing": ["Counter", "HB Toss", "Inside Zone", "Power O", "Stretch"],
        "Ace Slot": ["HB Dive", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Bunch Ace": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch TE": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Stick"],
        "Deuce Close": ["Counter", "HB Toss", "Inside Zone", "Stretch", "Zone Split"],
        "Doubles": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Y Off Close": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Doubles Y-Slot Close": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "RPO Alert", "Stick"],
        "Tight Doubles": ["HB Duo", "Inside Zone", "PA Boot", "Spacing"],
        "Tight Y Off": ["HB Duo", "Inside Zone", "PA Boot", "PA TE Flood", "Spacing", "Stick"],
        "Tight Y Off Flex": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Trey": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Trio": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "U Off Trips": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Wing Flex Close": ["HB Duo", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Pair": ["HB Duo", "Inside Zone", "PA Boot", "PA Cross", "Spacing"],
        "Wing Stack": ["HB Duo", "Inside Zone", "PA Boot", "Spacing"],
        "Wing Tight": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Left": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Wing Tight Nasty": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Wing Tight U": ["Counter", "HB Toss", "PA Boot", "Power O"],
        "Wing Tight Z": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Y Trips": ["HB Draw", "Inside Zone", "PA Read", "Stick"]
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
        "Doubles": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "U Off": ["HB Draw", "Inside Zone", "PA Boot", "Read Option"]
      },
      "Gun": {
        "Ace Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Box Offset Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Open": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh"],
        "Bunch Open Offset": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "RPO Bubble", "Spacing"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross", "RPO Lookie", "Spot"],
        "Dbls Y-Flex Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "PA Shot Seams"],
        "Double Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw", "Skinny Post"],
        "Doubles Offset": ["Deep Post", "HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Doubles Offset Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read", "RPO Zone Peek"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Quick Outs", "Spacing", "Verticals"],
        "Monster": ["End Around", "HB Dive", "Inverted Veer", "Jet Sweep", "Read Option", "Speed Option"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw", "Inside Zone", "PA Slot Cross"],
        "Split Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Slant Flat", "Stick"],
        "Spread Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "PA Zone Shot", "RPO Alert Screen"],
        "Spread HB Wk": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "Play Action"],
        "Stack Y Off": ["Deep Crossers", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Tackle Over": ["HB Draw", "Inside Zone", "PA Boot", "Power O"],
        "Tackle Over Trips": ["HB Draw", "Inside Zone", "PA Boot", "Power O"],
        "Tight Doubles": ["HB Duo", "Inside Zone", "PA Boot", "Quick Hitch", "Spacing"],
        "Tight Slot Open": ["Drag Over", "HB Draw", "Inside Zone", "Mesh", "PA Boot"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mills", "PA Read"],
        "Trio Offset": ["Corner Strike", "Double Post", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Trio Offset Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Post Corner"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "Mesh"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Deep Outs", "PA Read", "Read Option"],
        "Wing Slot Wk": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Wing Tight": ["Counter", "Inside Zone", "PA Boot", "PA Read", "Read Option"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Y Off Trips Wk": ["Corner Strike", "HB Draw", "Inside Zone", "Levels"],
        "Y-Trips Offset": ["HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Y-Trips Offset Wk": ["HB Draw", "Inside Zone", "PA Read"]
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
        "Doubles": ["HB Draw", "Inside Zone", "PA Read", "Read Option"],
        "U Off": ["HB Draw", "Inside Zone", "PA Boot", "Read Option"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Bunch Open": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh"],
        "Bunch X Nasty": ["Corner Strike", "Inside Zone", "Mesh", "MTN China Cross"],
        "Double Stack": ["Corner Strike", "Double Slants", "Four Verticals", "HB Draw"],
        "Doubles Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Doubles Offset Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Empty Base Flex": ["Curl Flats", "Mesh", "QB Draw", "Spacing"],
        "Normal Y Off": ["Curl Combo", "Double Slants", "Four Verticals", "HB Draw"],
        "Spread Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams"],
        "Tight Slot Open": ["HB Draw", "Inside Zone", "Mesh", "PA Boot"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels"],
        "Trips TE": ["Corner Strike", "HB Draw", "Inside Zone", "Levels"],
        "Wing Slot Offset": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Wing Tight": ["Counter", "Inside Zone", "PA Boot", "Read Option"],
        "Y Off Trips": ["Corner Strike", "HB Draw", "Inside Zone", "Levels"]
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
        "Close": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "H Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Slot Close": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Slot Flex": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Slot Stack": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Tight": ["Counter", "FB Dive", "HB Dive", "ISO", "Power O"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Y Off Close": ["FB Dive", "HB Counter", "HB Duo", "ISO", "PA Boot", "Power O"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch"],
        "Close Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "H Close Off": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "H Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "H Tight Close": ["Counter", "FB Dive", "HB Dive", "Power O"],
        "Jumbo": ["Counter", "HB Dive", "Power O", "Stretch"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Slot Flex": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Wing": ["Counter", "HB Toss", "PA Boot", "Power O", "Stretch"],
        "Y Off Close": ["FB Dive", "HB Counter", "HB Duo", "Power O"],
        "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Weak": {
        "Close": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Close Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "H Wing": ["Counter", "HB Toss", "PA Boot", "Power O"],
        "Pro": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Slot Close": ["HB Dive", "Inside Zone", "PA Boot"],
        "Z Close": ["Counter", "HB Dive", "PA Boot", "Power O"]
      },
      "Split Backs": {
        "3WR": ["HB Draw", "Inside Zone", "PA Read", "Stick"],
        "Pro": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"]
      },
      "Near": {
        "Close Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"]
      },
      "Far": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Tight Slot": ["HB Dive", "Inside Zone", "PA Boot", "Power O"]
      },
      "Pistol": {
        "Strong": ["Inside Zone", "PA Boot", "Power Read", "Read Option"],
        "Weak Slot": ["Inside Zone", "PA Read", "Read Option"]
      },
      "Gun": {
        "Split Close": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Pro Offset Wk": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Split Slot": ["HB Draw", "Inside Zone", "Levels", "PA Read"],
        "Split Slot Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Split Twins": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"]
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
        "Ace": ["HB Dive", "Inside Zone", "PA Boot", "PA Crossers", "Spacing", "Stick"],
        "Bunch Ace": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "Spacing"],
        "Doubles Flex": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "Doubles North": ["HB Draw", "Inside Zone", "PA Boot", "PA Read", "Stick"],
        "Doubles Y Open": ["HB Draw", "Inside Zone", "PA Boot", "PA Read"],
        "East": ["Counter", "HB Dive", "Inside Zone", "Power O", "Stretch"],
        "Spread": ["HB Draw", "Inside Zone", "PA Read", "RPO Alert", "Stick"],
        "Wing Slot": ["HB Duo", "Inside Zone", "PA Boot", "Spacing", "Stick"],
        "Y Trips": ["HB Draw", "Inside Zone", "PA Read", "Stick"]
      },
      "I Form": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "HB Slam", "PA Boot", "Power O"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Wing": ["Counter", "HB Pitch", "HB Toss", "PA Boot", "Power O", "Stretch"]
      },
      "Strong": {
        "Close": ["Counter", "HB Dive", "PA Boot", "Power O", "Stretch", "Wham"],
        "Pro": ["Counter", "HB Dive", "PA Boot", "Power O"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"]
      },
      "Weak": {
        "Close": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Slot Flex": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"]
      },
      "Near": {
        "Close": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Close Flex": ["HB Dive", "Inside Zone", "PA Boot", "Power O"],
        "Jumbo": ["Counter", "HB Dive", "Power O", "Stretch"],
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Y Left Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"]
      },
      "Far": {
        "Pro": ["Counter", "FB Dive", "HB Dive", "PA Boot", "Power O"],
        "Slot": ["HB Dive", "Inside Zone", "PA Boot", "PA Read"],
        "Tight Slot": ["HB Dive", "Inside Zone", "PA Boot", "Power O"]
      },
      "Gun": {
        "Bunch": ["Corner Strike", "HB Screen", "Inside Zone", "Mesh", "PA Shot Seams", "Spacing"],
        "Doubles": ["Curl Combo", "Four Verticals", "HB Draw", "Inside Zone", "PA Read"],
        "Empty Trey": ["Curl Flats", "Mesh", "QB Draw", "Spacing", "Verticals"],
        "Split Offset": ["HB Draw", "Inside Zone", "Levels", "PA Read", "Stick"],
        "Spread Dbl Flex": ["HB Draw", "Inside Zone", "MTN Drive", "PA Seams", "Spot N Go"],
        "Tight Slots": ["HB Draw", "Inside Zone", "Mesh", "PA Boot", "PA Read"],
        "Trey Open Offset": ["Corner Strike", "HB Draw", "Inside Zone", "Levels", "PA Read"]
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
