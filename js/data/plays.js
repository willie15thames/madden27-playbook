// Madden 27 - Play Type Data with matchup intelligence
// Comprehensive play concepts covering all run/pass schemes

const PLAY_TYPES = {
  // ===== ZONE RUN PLAYS =====
  "Inside Zone": {
    type: "Run", subtype: "Zone Run",
    description: "Zone blocking scheme where the RB reads the blocks and cuts inside. The bread and butter of most offenses.",
    beats: ["Cover 0", "Cover 1", "Dime", "Dollar", "Quarter", "Nickel Wide", "Spread defenses"],
    beatenBy: ["3-4 Bear", "46 Normal", "Stuff the box", "Cover 3 Sky", "Run commit", "4-3 Under"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "Cover 1", "Tampa 2"],
    tips: "Read the Mike LB. If he flows, cut back. If the box is light, this is money."
  },
  "Outside Zone": {
    type: "Run", subtype: "Zone Run",
    description: "Zone stretch play to the outside. RB aims for the edge and can cut back if defenders over-pursue.",
    beats: ["Cover 0", "Nickel", "Dime", "Dollar", "Quarter", "Aggressive defenses"],
    beatenBy: ["Cover 3 Sky", "46 Normal", "Contain", "Speed edge defenders", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "Cover 1", "46"],
    tips: "Need fast RB. Cut back if the edge is sealed — huge play potential."
  },
  "HB Stretch": {
    type: "Run", subtype: "Zone Run",
    description: "Wide zone stretch that gets the RB to the edge quickly. The meta run in most Madden games.",
    beats: ["Cover 0", "Cover 4", "Nickel", "Dime", "Undersized defenses"],
    beatenBy: ["Contain", "Spread the line", "Cover 3 Sky", "46 Bear", "Speed on edge"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "One of the best runs in the game. Use against light boxes."
  },
  "Wide Zone": {
    type: "Run", subtype: "Zone Run",
    description: "Wide zone blocking where the entire OL zones to the playside. RB reads the backside cutback lane.",
    beats: ["Cover 4", "Nickel", "Dime", "Dollar", "Light boxes"],
    beatenBy: ["Contain", "46 Bear", "Cover 3 Sky", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 0"],
    tips: "Similar to stretch but emphasizes cutback. Patient runners thrive here."
  },
  "Split Zone": {
    type: "Run", subtype: "Zone Run",
    description: "Inside zone with the TE or FB kicking out the backside end. Adds gap principles to zone blocking.",
    beats: ["Cover 1", "Cover 0", "Nickel", "Dime", "Aggressive ends"],
    beatenBy: ["46 Bear", "3-4 Bear", "Stuff the box", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "The kickout block on the backside end creates a cutback lane. Great against crashing DEs."
  },

  // ===== GAP RUN PLAYS =====
  "Power O": {
    type: "Run", subtype: "Gap Run",
    description: "Power run with a pulling guard leading through the hole. Physical, downhill running play.",
    beats: ["Nickel", "Dime", "Dollar", "Quarter", "Light boxes", "Zone coverage"],
    beatenBy: ["Stuff the box", "3-4 Bear", "Goal Line D", "46 Bear", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Follow the pulling guard. Great in short yardage and goal line."
  },
  "Counter": {
    type: "Run", subtype: "Gap Run",
    description: "Misdirection run play with the RB faking one way then taking the handoff the other direction with pulling linemen.",
    beats: ["Aggressive defenses", "User blitzes", "Man coverage", "Over-pursuit", "Cover 0"],
    beatenBy: ["Disciplined defenses", "Contain", "Zone defenses reading keys", "Spy"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 3", "Cover 4", "Zone coverages"],
    tips: "Great against aggressive defenses that over-commit to the initial fake."
  },
  "HB Dive": {
    type: "Run", subtype: "Gap Run",
    description: "Quick-hitting dive play straight up the middle. Gets 3-4 yards consistently.",
    beats: ["Nickel", "Dime", "Dollar", "Quarter", "Light boxes", "Spread defense"],
    beatenBy: ["Stuff the box", "3-4 Bear", "46", "Goal Line D", "DT with high block shed"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Reliable short yardage play. Use when you just need 2-3 yards."
  },
  "Duo": {
    type: "Run", subtype: "Gap Run",
    description: "Double-team at the point of attack with both guard and tackle combo blocking. Physical run that creates vertical push.",
    beats: ["Nickel", "Dime", "Light boxes", "Single-gap defenses"],
    beatenBy: ["Two-gap defenses", "46 Bear", "3-4 Bear", "Stuff the box"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "The double team creates vertical movement. RB reads the first LB off the combo block."
  },
  "Trap": {
    type: "Run", subtype: "Gap Run",
    description: "Guard pulls to trap the first defender past the center. Exploits aggressive DL penetration.",
    beats: ["Aggressive DL", "Penetrating defense", "Nickel", "Dime", "Dollar"],
    beatenBy: ["Disciplined DL", "Two-gap defense", "46 Bear", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Best against aggressive DL who like to penetrate. The pulling guard logs the crashing DT."
  },
  "Wham": {
    type: "Run", subtype: "Gap Run",
    description: "FB or TE kicks out the unblocked DT while OL zone blocks away. Quick-hitting interior run.",
    beats: ["Aggressive DT", "Penetrating interior", "Nickel", "Dime"],
    beatenBy: ["Disciplined DT", "Two-gap defense", "46 Bear", "Stuff the box"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "The kickout block on the DT opens a huge A-gap lane. Great change of pace."
  },
  "HB Blast": {
    type: "Run", subtype: "Gap Run",
    description: "Downhill run between the tackles with lead blockers. Physical ISO-style run.",
    beats: ["Nickel", "Dime", "Dollar", "Light boxes"],
    beatenBy: ["Stuff the box", "46 Bear", "3-4 Bear", "Goal Line D"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Follow the lead blocker through the hole. Physical, no-nonsense running."
  },
  "HB Slam": {
    type: "Run", subtype: "Gap Run",
    description: "Quick-hitting run up the A or B gap. Gets north-south in a hurry.",
    beats: ["Nickel", "Dime", "Dollar", "Light boxes", "Spread defense"],
    beatenBy: ["Stuff the box", "46 Bear", "Goal Line D"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Quick hitter that relies on OL creating a crease. Don't dance — hit the hole."
  },
  "ISO": {
    type: "Run", subtype: "Gap Run",
    description: "Isolation run where the FB leads through the hole and blocks the MLB while the RB follows.",
    beats: ["Nickel", "Dime", "Dollar", "Light boxes"],
    beatenBy: ["Stuff the box", "46 Bear", "3-4 Bear", "Goal Line D"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Classic I-Form run. FB takes the LB, you follow into the open lane."
  },

  // ===== OUTSIDE RUNS =====
  "HB Toss": {
    type: "Run", subtype: "Outside Run",
    description: "Quick pitch to the outside. Gets the RB in space with blockers ahead.",
    beats: ["Cover 0 blitz", "Interior pressure", "Nickel", "Dime", "Dollar"],
    beatenBy: ["Contain", "Speed on edge", "Cover 3 Sky", "Outside run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "Need speed at RB. Great against interior blitzes — gets outside quickly."
  },
  "Sweep": {
    type: "Run", subtype: "Outside Run",
    description: "RB sweeps around the edge with pulling OL leading the way. Gets to the perimeter with blockers.",
    beats: ["Cover 0", "Nickel", "Dime", "Interior-heavy defenses"],
    beatenBy: ["Contain", "Speed on edge", "Cover 3 Sky", "46 Speed"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "Follow your pulling linemen to the edge. Need speed to turn the corner."
  },
  "Jet Sweep": {
    type: "Run", subtype: "Outside Run",
    description: "Quick jet motion handoff to a WR running full speed across the formation. Speed play to the edge.",
    beats: ["Cover 3", "Cover 4", "Slow LBs", "Interior-focused defenses", "Late shifts"],
    beatenBy: ["Contain", "Speed on edge", "Man coverage on jet man", "Pre-snap adjustment"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Man coverage", "Cover 3 Sky"],
    tips: "Need a fast WR. Great change-of-pace play that attacks the edge with speed."
  },
  "HB Pitch": {
    type: "Run", subtype: "Outside Run",
    description: "Quick pitch to the RB heading to the sideline. Gets the ball to the edge fast.",
    beats: ["Interior blitzes", "Cover 0", "Nickel", "Dime"],
    beatenBy: ["Contain", "Speed on edge", "Cover 3 Sky"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "Speed run to the edge. Great against heavy interior pressure looks."
  },
  "End Around": {
    type: "Run", subtype: "Outside Run",
    description: "WR reverses around the backside end. Misdirection play that gets a fast WR the ball in space.",
    beats: ["Over-pursuit", "Aggressive defenses", "Man coverage flowing one way"],
    beatenBy: ["Contain", "Disciplined ends", "Spy", "Backside contain"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Zone coverages"],
    badVsCoverages: ["Cover 1", "Man coverage"],
    tips: "Misdirection is key. Only works if the defense flows hard to the initial fake."
  },

  // ===== DRAW PLAYS =====
  "HB Draw": {
    type: "Run", subtype: "Draw",
    description: "Delayed handoff disguised as a pass play. QB drops back then hands off to the RB.",
    beats: ["Pass rush heavy", "Cover 3", "Cover 4", "Aggressive pass rush", "Blitzes"],
    beatenBy: ["Disciplined defense", "Spy", "Zone drops that read draw", "Quick LBs"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 0", "Cover 1", "Man coverage"],
    tips: "Perfect call against aggressive pass rushers. The DE rush opens up lanes."
  },
  "QB Draw": {
    type: "Run", subtype: "Draw",
    description: "QB keeps the ball on a delayed draw run. Best with mobile QBs.",
    beats: ["Pass rush heavy", "Cover 3", "Cover 4", "DL rushing upfield"],
    beatenBy: ["Spy", "Contain", "Disciplined LBs", "QB Contain"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Spy", "QB Contain"],
    tips: "Mobile QB only. The rushing DL clear out lanes for the QB to run through."
  },
  "Delayed Draw": {
    type: "Run", subtype: "Draw",
    description: "Extra-delayed draw that lets the pass rush fully commit before the handoff.",
    beats: ["Heavy pass rush", "Blitz-heavy defense", "Cover 3", "Cover 4"],
    beatenBy: ["Spy", "Disciplined defense", "Zone drops"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Tampa 2"],
    badVsCoverages: ["Cover 0", "Cover 1"],
    tips: "Wait for it. The delayed timing exploits aggressive pass rushers even more than a regular draw."
  },

  // ===== OPTION PLAYS =====
  "Read Option": {
    type: "Run", subtype: "Option",
    description: "QB reads the unblocked DE — hands off to RB or keeps it himself based on the read.",
    beats: ["Man coverage", "Cover 0", "Cover 1", "Edge containment", "Traditional defenses"],
    beatenBy: ["Spy", "Option responsibility defense", "Scrape exchange", "QB Contain"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain"],
    tips: "Need a mobile QB. Read the unblocked end — if he crashes, keep it. If he stays home, hand off."
  },
  "Power Read": {
    type: "Run", subtype: "Option",
    description: "Read option with power blocking. QB reads the end and either gives to the back on a sweep or keeps inside.",
    beats: ["Man coverage", "Cover 0", "Cover 1", "Aggressive edges"],
    beatenBy: ["Spy", "QB Contain", "Disciplined ends", "Scrape exchange"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain", "Cover 3 Sky"],
    tips: "Similar to read option but with gap blocking. The pulling guard leads the way."
  },
  "Speed Option": {
    type: "Run", subtype: "Option",
    description: "Quick option pitch play. QB reads the end and pitches to the RB heading to the edge.",
    beats: ["Nickel", "Dime", "Cover 0", "Cover 1", "Slow edges"],
    beatenBy: ["Contain", "Speed on edge", "Cover 3 Sky", "QB Contain"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Dime", "Quarter"],
    badVsCoverages: ["Spy", "QB Contain", "Cover 3 Sky"],
    tips: "Fastest option play. Need speed at both QB and RB to execute properly."
  },
  "Triple Option": {
    type: "Run", subtype: "Option",
    description: "Three-phase option: give to the dive back, keep and run, or pitch to the trailing back.",
    beats: ["Man coverage", "Cover 0", "Cover 1", "Aggressive defense", "Blitz"],
    beatenBy: ["Spy", "QB Contain", "Option responsibility defense", "Scrape exchange"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain"],
    tips: "Three choices. Read the first key for give/keep, second key for keep/pitch."
  },
  "Inverted Veer": {
    type: "Run", subtype: "Option",
    description: "Inverted read option where the QB is the primary runner and the RB is the pitch/give option.",
    beats: ["Man coverage", "Cover 0", "Cover 1", "Aggressive ends"],
    beatenBy: ["Spy", "QB Contain", "Disciplined ends"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain"],
    tips: "QB-centric option play. Need a mobile QB who can take hits."
  },
  "QB Power": {
    type: "Run", subtype: "Option",
    description: "QB runs power with pulling linemen. Designed QB run to the strong side.",
    beats: ["Nickel", "Dime", "Dollar", "Light boxes"],
    beatenBy: ["Spy", "QB Contain", "Stuff the box"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Spy", "QB Contain", "46"],
    tips: "Designed QB run. Follow the pulling guard and get north-south."
  },
  "QB Scramble": {
    type: "Run", subtype: "Option",
    description: "Designed QB scramble play. QB rolls out with the option to run or throw.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Interior blitzes"],
    beatenBy: ["Contain", "Spy", "QB Contain", "Edge speed"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain"],
    tips: "Mobile QB special. If nothing's open downfield, tuck and run."
  },

  // ===== SHORT YARDAGE =====
  "QB Sneak": {
    type: "Run", subtype: "Short Yardage",
    description: "QB pushes forward behind the center for short yardage. Nearly unstoppable in short yardage situations.",
    beats: ["Everything in short yardage", "Goal Line", "Spread defense at goal line"],
    beatenBy: ["DT with high block shed (sometimes)", "Perfectly timed user nose tackle"],
    goodVsCoverages: ["All coverages in short yardage"],
    badVsCoverages: [],
    tips: "The best short yardage play in Madden. Almost always gets 1 yard."
  },
  "FB Dive": {
    type: "Run", subtype: "Short Yardage",
    description: "Fullback takes the handoff and dives up the middle. Physical short yardage play.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense at goal line"],
    beatenBy: ["Stuff the box", "Goal Line D", "46 Bear", "Heavy front"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Short yardage specialist play. Need a good blocking FB."
  },
  "Tush Push": {
    type: "Run", subtype: "Short Yardage",
    description: "QB sneak with offensive linemen pushing the QB forward. Eagles signature play.",
    beats: ["Everything in 1-yard situations", "Goal Line D", "All alignments"],
    beatenBy: ["Very rarely stopped", "User DT with perfect timing"],
    goodVsCoverages: ["All coverages"],
    badVsCoverages: [],
    tips: "The most overpowered short yardage play. Almost impossible to stop."
  },

  // ===== DEEP SHOT PASSES =====
  "Four Verticals": {
    type: "Pass", subtype: "Deep Shot",
    description: "All receivers run vertical routes, stretching the defense deep. The ultimate deep shot play.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Cover 6 (Cover 2 side)", "Man with slow CBs"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Cover 9", "Prevent", "Deep zones"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms", "Prevent"],
    tips: "Against Cover 2, hit the seam between the safeties. Against Cover 3, throw to the outside verticals."
  },
  "Corner Strike": {
    type: "Pass", subtype: "Deep Shot",
    description: "Deep corner route designed to attack the void between the CB and safety in Cover 2.",
    beats: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2", "Cover 6 (Cover 2 side)"],
    beatenBy: ["Cover 3", "Cover 4", "Cover 1", "Deep third corners"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2"],
    badVsCoverages: ["Cover 3", "Cover 4", "Cover 1"],
    tips: "Classic Cover 2 beater. The corner route sits in the void between the flat CB and deep safety."
  },
  "Deep Post": {
    type: "Pass", subtype: "Deep Shot",
    description: "Deep post route straight up the middle. Attacks the deep middle of the field.",
    beats: ["Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 6 (Cover 2 side)"],
    beatenBy: ["Cover 3", "Cover 4", "Deep middle safety", "Cover 1 with safety help"],
    goodVsCoverages: ["Cover 2 Zone", "Tampa 2", "Cover 6"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "The ultimate Cover 2 killer. Split the safeties and throw up the seam."
  },
  "Deep Crossers": {
    type: "Pass", subtype: "Deep Shot",
    description: "Deep crossing routes that attack the middle of the field at depth. Beats man with speed across.",
    beats: ["Cover 1", "Cover 0", "Man coverage", "Cover 3", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Pattern matching", "Quick pressure"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Deep crossers eat man coverage alive. The crosser creates natural picks at depth."
  },
  "Hail Mary": {
    type: "Pass", subtype: "Deep Shot",
    description: "All receivers sprint deep into the end zone. Last resort desperation play.",
    beats: ["Blown coverage", "Miscommunication", "Aggressive defense"],
    beatenBy: ["Prevent", "Cover 4", "Any deep coverage properly played"],
    goodVsCoverages: ["Cover 0", "Cover 1"],
    badVsCoverages: ["Prevent", "Cover 4", "Cover 3", "Quarter"],
    tips: "Only call in desperation. Throw it up and pray for a miracle."
  },
  "Skinny Post": {
    type: "Pass", subtype: "Deep Shot",
    description: "Skinny post route that splits between the numbers and hash. Attacks the seam between Cover 2 safeties.",
    beats: ["Cover 2 Zone", "Tampa 2", "Cover 1", "Cover 6"],
    beatenBy: ["Cover 3", "Cover 4", "Deep middle safety"],
    goodVsCoverages: ["Cover 2 Zone", "Tampa 2", "Cover 6"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "Skinnier angle than a regular post. Sits right in the Cover 2 hole between safeties."
  },
  "Double Post": {
    type: "Pass", subtype: "Deep Shot",
    description: "Two receivers running post routes to stretch the deep middle. Overloads the single high safety.",
    beats: ["Cover 1", "Cover 3", "Single high safety", "Man coverage"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Two-deep looks"],
    goodVsCoverages: ["Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone"],
    tips: "Two posts stretch a single deep safety. One is always open against Cover 1/3."
  },
  "Post Corner": {
    type: "Pass", subtype: "Deep Shot",
    description: "Double move — fake post inside then break to the corner. Beats aggressive safeties.",
    beats: ["Cover 1", "Cover 3", "Aggressive safeties", "Man coverage"],
    beatenBy: ["Cover 4 Palms", "Patient DBs", "Cover 2 Zone"],
    goodVsCoverages: ["Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone"],
    tips: "Double move route. The safety bites on the post fake, leaving the corner wide open."
  },

  // ===== PLAY ACTION =====
  "PA Crossers": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with multiple crossing routes at different levels. One of the best plays in Madden.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Run-focused defense", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 2 Zone with user", "Zone drops reading PA", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone"],
    tips: "The GOAT play. Crossers beat man coverage and find zone windows. Read high to low."
  },
  "PA Boot Over": {
    type: "Pass", subtype: "Play Action",
    description: "Play action bootleg with the QB rolling out. Routes include a deep cross, flat, and corner.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Run-heavy D alignment", "Aggressive LBs"],
    beatenBy: ["Contain", "QB spy", "DE staying home", "Cover 4 with contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4 with contain", "Spy"],
    tips: "Roll out and read high-to-low. Deep cross is usually open against Cover 3."
  },
  "PA Read": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a simple read progression. Fakes the run then hits receivers running against flow.",
    beats: ["Cover 3", "Cover 1", "Run-focused D", "Aggressive LBs", "Man coverage"],
    beatenBy: ["Cover 4", "Zone drops that don't bite on PA", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Only works if the defense respects the run. Useless if they don't bite on play action."
  },
  "PA Post Shot": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a deep post route. Big play shot down the middle.",
    beats: ["Cover 2 Zone", "Cover 1", "Cover 3 (middle third)", "Tampa 2", "Aggressive LBs"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Deep middle safety", "Quick pressure"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3", "Cover 6"],
    tips: "Deep middle shot. Best against Cover 2 when the safeties split wide."
  },
  "PA Deep Outs": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with deep out/comeback routes. Attacks the sideline after faking the run.",
    beats: ["Cover 3", "Cover 1", "Cover 4 (sideline)", "Man coverage"],
    beatenBy: ["Cover 2 Zone", "Cover 6 (Cover 2 side)", "Flat defenders reading PA"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Cover 6"],
    tips: "Attacks the sideline. Best thrown when the DB turns his hips inside."
  },
  "PA Scissors": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a scissors concept — post and corner routes crossing. Stretches the safety.",
    beats: ["Cover 2 Zone", "Cover 3", "Cover 1", "Single high safety"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Two-deep with pattern match"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms"],
    tips: "Read the safety — if he goes with the post, throw the corner. Vice versa."
  },
  "PA Shot Seams": {
    type: "Pass", subtype: "Play Action",
    description: "Play action deep shot targeting the seam routes between the safeties.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Aggressive LBs"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Deep help in seam"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms"],
    tips: "Target the seams between the safeties. Best against Cover 2 with safeties biting on run."
  },
  "PA Slot Cross": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with the slot receiver running a deep crossing route. Great against man coverage.",
    beats: ["Cover 1", "Cover 0", "Man coverage", "Cover 3"],
    beatenBy: ["Cover 4", "Pattern matching", "Quick pressure"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "The slot crosser gets a free release and runs away from man defenders."
  },
  "PA Power O": {
    type: "Pass", subtype: "Play Action",
    description: "Play action off the power O run look. Deep shot after faking the physical run.",
    beats: ["Cover 3", "Cover 1", "Run-focused D", "Man coverage", "Aggressive LBs"],
    beatenBy: ["Cover 4", "Quick pressure", "Zone drops"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Set up with the power run then strike deep on play action."
  },
  "PA Zone Shot": {
    type: "Pass", subtype: "Play Action",
    description: "Play action off zone run look with a deep shot downfield.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Aggressive front"],
    beatenBy: ["Cover 4", "Zones not biting on PA", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Establish the zone run first, then hit this for a big play."
  },

  // ===== CONCEPTS =====
  "Mesh": {
    type: "Pass", subtype: "Concept",
    description: "Two receivers run shallow crossing routes in opposite directions, creating natural picks against man coverage.",
    beats: ["Cover 1", "Cover 0", "Cover 2 Man Under", "Cover 9", "All man coverage"],
    beatenBy: ["Cover 3 Match", "Pattern matching", "Zone coverage with user", "Cover 2 Zone"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 2 Man Under", "Cover 9", "Man coverages"],
    badVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 3 Match"],
    tips: "THE man coverage killer. The crossers create natural picks. Read the mesh point."
  },
  "Levels": {
    type: "Pass", subtype: "Concept",
    description: "Multiple receivers run routes at different depths on the same side, creating high-low reads for the QB.",
    beats: ["Cover 3", "Cover 1", "Cover 2 Zone", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Pattern matching zones", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "High-low read. If the defender drops, throw underneath. If he stays low, throw over."
  },
  "Flood": {
    type: "Pass", subtype: "Concept",
    description: "Three receivers flood one side of the field at three different levels — flat, intermediate, and deep.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Any 2-defender side against 3 routes"],
    beatenBy: ["Cover 4", "Cover 6 (Cover 4 side)", "Pattern matching", "Brackets"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Overloads one side of the field. Someone is always open — read the flat defender."
  },
  "Smash": {
    type: "Pass", subtype: "Concept",
    description: "Two-route concept with a hitch underneath and a corner route over the top. Classic Cover 2 beater.",
    beats: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2", "Cover 6 (Cover 2 side)"],
    beatenBy: ["Cover 3", "Cover 4", "Cover 1 Robber", "Pattern matching"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2"],
    badVsCoverages: ["Cover 3", "Cover 4", "Cover 1"],
    tips: "If the corner drops (Cover 2), throw the hitch. If he stays flat, throw the corner route."
  },
  "Spot": {
    type: "Pass", subtype: "Concept",
    description: "Three-level concept with a flat, a sit/spot route, and a corner route. Creates a triangle read.",
    beats: ["Cover 3", "Cover 2 Zone", "Cover 1", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Quick pressure", "User LB"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Triangle read — read the flat defender. Flat opens if he drops, spot route opens if he stays."
  },
  "Spacing": {
    type: "Pass", subtype: "Concept",
    description: "Five receivers spread evenly across the field at the same depth. Creates easy windows in zone coverage.",
    beats: ["Cover 3", "Cover 4", "Zone coverage", "Soft zones"],
    beatenBy: ["Man coverage", "Cover 1 Robber", "Press man", "Blitz"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    tips: "Zone killer. Five across at the same level creates windows between every zone defender."
  },
  "Drive": {
    type: "Pass", subtype: "Concept",
    description: "Two receivers run in/dig routes at different depths, stacking the defense vertically.",
    beats: ["Cover 3", "Cover 2 Zone", "Zone coverage", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Two crossing routes at different levels — high-low the zone defenders."
  },
  "Snag": {
    type: "Pass", subtype: "Concept",
    description: "Three-route concept with a corner, snag/sit, and flat route. Triangle read against zone.",
    beats: ["Cover 3", "Cover 2 Zone", "Cover 1", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Similar to spot concept but with a corner route on top. Read the flat defender."
  },
  "Dagger": {
    type: "Pass", subtype: "Concept",
    description: "Dig route (deep in) paired with a seam route. Attacks the middle of the field at two levels.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "User safety in middle"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "High-low the hook/curl defender. Dig underneath if he drops, seam over if he stays."
  },
  "Mills": {
    type: "Pass", subtype: "Concept",
    description: "Post-dig combination. One receiver runs a post, the other a dig route on the same side.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Single high safety"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Cover 3 Match"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone"],
    tips: "Read the safety. If he comes down to the dig, throw the post. If he stays deep, throw the dig."
  },
  "Curl Flat": {
    type: "Pass", subtype: "Concept",
    description: "Curl route with a flat route underneath. Classic two-man concept to beat Cover 3.",
    beats: ["Cover 3", "Cover 3 Sky", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Cover 3 Match", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 3 Sky", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3 Match"],
    tips: "The original Cover 3 beater. Read the flat defender — curl if he goes flat, flat if he drops."
  },
  "Drag Over": {
    type: "Pass", subtype: "Concept",
    description: "Shallow drag routes across the field. Beats zone coverage by finding windows between defenders.",
    beats: ["Cover 4", "Cover 3", "Cover 6", "Zone coverage", "Soft zones"],
    beatenBy: ["Man coverage", "Cover 1 Robber", "User LB in middle", "Pattern matching"],
    goodVsCoverages: ["Cover 4", "Cover 3", "Cover 6", "Zone coverages"],
    badVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    tips: "Works great against Cover 4 and zone coverages. Find the window between zone defenders."
  },
  "Mesh Over": {
    type: "Pass", subtype: "Concept",
    description: "Mesh concept with an over route layered on top. Attacks both man and zone.",
    beats: ["Cover 1", "Cover 0", "Man coverage", "Cover 3", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Quick pressure", "User LB"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man coverages", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Mesh beats man, over route beats zone. Built-in answer for any coverage."
  },
  "HB Wheel": {
    type: "Pass", subtype: "Concept",
    description: "Running back runs a wheel route up the sideline. Creates a mismatch with LB covering RB deep.",
    beats: ["Cover 1", "Cover 3", "Man coverage", "LB man coverage on RB"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Pattern matching", "Safety help over RB"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 4 Palms"],
    tips: "If a LB is matched on your RB, the wheel route is a guaranteed mismatch deep."
  },
  "Y Trail": {
    type: "Pass", subtype: "Concept",
    description: "TE runs a trail/delay route behind the crossers, settling in zone windows.",
    beats: ["Cover 3", "Cover 2 Zone", "Zone coverage", "Tampa 2"],
    beatenBy: ["Man coverage", "Cover 1 Robber", "User LB sitting in trail window"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    tips: "The TE finds the soft spot behind the crossers. Great second read in zone coverage."
  },
  "Bench": {
    type: "Pass", subtype: "Concept",
    description: "Sideline concept with a deep out, comeback, and flat route attacking the boundary.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 2 Zone", "Cover 6", "Flat defenders"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 2 Zone", "Cover 6"],
    tips: "Three levels on the sideline. Read high to low and find the open man."
  },
  "Sail": {
    type: "Pass", subtype: "Concept",
    description: "Three-level concept with a deep out/corner, intermediate out, and flat route. Similar to flood but to the sideline.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Cover 6"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6"],
    tips: "Vertical stretch on the sideline. The flat defender can't cover three levels."
  },
  "Dig Under": {
    type: "Pass", subtype: "Concept",
    description: "Deep in/dig route with an underneath crossing route. Attacks the middle at two levels.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "User safety"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "High-low the zone defenders in the middle. Great against Cover 3."
  },
  "Mesh Traffic": {
    type: "Pass", subtype: "Concept",
    description: "Mesh concept with traffic routes — multiple crossers creating congestion for man defenders.",
    beats: ["Cover 1", "Cover 0", "Man coverage", "Cover 9"],
    beatenBy: ["Cover 3 Match", "Zone coverage", "Pattern matching"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 9", "Man coverages"],
    badVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 3 Match"],
    tips: "Maximum pick plays against man coverage. The crossers create chaos for man defenders."
  },
  "Bunch Trail": {
    type: "Pass", subtype: "Concept",
    description: "Bunch formation concept with a trail route behind the other bunch routes.",
    beats: ["Cover 1", "Cover 0", "Man coverage", "Cover 3"],
    beatenBy: ["Cover 4", "Zone blitz", "Cover 3 Match"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Bunch creates natural picks. The trail route sits behind for an easy throw."
  },

  // ===== QUICK GAME =====
  "Stick": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick-hitting concept with a stick route (6-yard out), flat route, and vertical route. Fast read.",
    beats: ["Cover 4", "Cover 3", "Blitzes", "Zone coverage", "Any coverage (quick throw)"],
    beatenBy: ["Cover 2 Zone with flat player", "Press man", "Pattern matching"],
    goodVsCoverages: ["Cover 4", "Cover 3", "Cover 6"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Quick throw beats pressure. Read the flat defender — same as spot concept but faster."
  },
  "Quick Slants": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick slant routes that get the ball out fast. Beats man coverage and blitzes.",
    beats: ["Cover 0", "Cover 1", "Blitzes", "Man coverage", "Press coverage (if beaten)"],
    beatenBy: ["Cover 1 Robber", "Cover 3 Match", "Inside shade man", "User MLB"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 4"],
    badVsCoverages: ["Cover 1 Robber", "Cover 3 Match", "Cover 2 Zone"],
    tips: "Quick hot route against blitzes. Gets the ball out in under 2 seconds."
  },
  "Quick Outs": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick out routes to the sideline. Gets the ball out fast with YAC potential.",
    beats: ["Cover 3", "Blitzes", "Off man coverage", "Zone with soft flats"],
    beatenBy: ["Cover 2 Zone", "Hard flat", "Press man", "Jump the route"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 1"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Quick throw to the sideline. Can get YAC if the flat defender is late."
  },
  "Comeback": {
    type: "Pass", subtype: "Quick Game",
    description: "Receiver runs 12-15 yards then comes back to the ball. Timing route that beats soft coverage.",
    beats: ["Cover 3", "Cover 4", "Off man coverage", "Soft zones"],
    beatenBy: ["Press man", "Cover 2 Zone", "Jump the route", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Timing is everything. Throw before the receiver turns — the ball should arrive on the break."
  },
  "Slant Flat": {
    type: "Pass", subtype: "Quick Game",
    description: "Slant route with a flat route underneath. Quick two-man game.",
    beats: ["Cover 3", "Cover 1", "Blitzes", "Zone coverage"],
    beatenBy: ["Cover 1 Robber", "Pattern matching", "User LB"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 4"],
    badVsCoverages: ["Cover 1 Robber", "Cover 3 Match"],
    tips: "Read the flat defender. If he drops, throw the flat. If he stays, throw the slant."
  },
  "Quick Hitch": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick hitch/curl routes. Receiver takes 3 steps and turns back to QB. Fastest throw in the game.",
    beats: ["Blitzes", "Cover 0", "Off coverage", "Any coverage (pre-throw)"],
    beatenBy: ["Press man", "Jump the route", "Flat defenders"],
    goodVsCoverages: ["Cover 0", "Cover 3", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Fastest throw in the game. Just turn and fire. Good for beating blitz pressure."
  },

  // ===== SCREEN PASSES =====
  "HB Screen": {
    type: "Pass", subtype: "Screen",
    description: "Screen pass to the running back with linemen releasing to block. Neutralizes pass rush.",
    beats: ["Blitzes", "Cover 0", "Aggressive pass rush", "Man coverage", "Cover 1"],
    beatenBy: ["Zone coverage reading screen", "Contain", "Disciplined DE", "Cover 2 Zone flat player"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz coverages"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    tips: "Perfect blitz beater. Let the rush come, then dump it to the RB with blockers ahead."
  },
  "WR Screen": {
    type: "Pass", subtype: "Screen",
    description: "Quick screen pass to a WR with blockers setting up on the perimeter.",
    beats: ["Blitzes", "Cover 0", "Aggressive defense", "Off coverage"],
    beatenBy: ["Press man", "Hard flat", "Cover 2 Zone"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Quick throw to the boundary. The WR blockers need to set up before the catch."
  },
  "Bubble Screen": {
    type: "Pass", subtype: "Screen",
    description: "Quick bubble pass to a slot receiver with WR blockers. Gets the ball to the perimeter fast.",
    beats: ["Blitzes", "Cover 0", "Off coverage", "Aggressive defense"],
    beatenBy: ["Hard flat", "Press man", "Cover 2 Zone", "Jam at line"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Quick throw to the slot. Need good blocking from outside WRs to spring the play."
  },
  "Tunnel Screen": {
    type: "Pass", subtype: "Screen",
    description: "Screen to an inside receiver who catches behind a wall of blockers. Sets up blockers in the middle.",
    beats: ["Blitzes", "Cover 0", "Aggressive pressure", "Man coverage"],
    beatenBy: ["Zone coverage", "Contain", "LBs reading screen"],
    goodVsCoverages: ["Cover 0", "Cover 1"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3"],
    tips: "The blocking wall sets up in the middle. The receiver catches and runs behind it."
  },
  "Middle Screen": {
    type: "Pass", subtype: "Screen",
    description: "Screen pass up the middle. RB catches behind releasing OL in the center of the field.",
    beats: ["Edge blitzes", "Aggressive pass rush", "Cover 0", "Cover 1"],
    beatenBy: ["Interior LBs reading screen", "Zone coverage", "Spy"],
    goodVsCoverages: ["Cover 0", "Cover 1"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3"],
    tips: "The OL releases up the middle. Great against edge rush but vulnerable to interior reads."
  },
  "Jailbreak Screen": {
    type: "Pass", subtype: "Screen",
    description: "All linemen release to block on the screen. Maximum blockers heading to one side.",
    beats: ["All blitzes", "Cover 0", "Cover 1", "Aggressive defense"],
    beatenBy: ["Zone coverage", "Contain", "Reading screen"],
    goodVsCoverages: ["Cover 0", "Cover 1"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    tips: "Maximum blockers on the screen. If the defense blitzes, this is a big play."
  },
  "Screens": {
    type: "Pass", subtype: "Screen",
    description: "Generic screen pass — WR screen, tunnel screen, or slip screen.",
    beats: ["Blitzes", "Cover 0", "Cover 1", "Aggressive pass rush", "Man coverage"],
    beatenBy: ["Zone coverage", "Contain", "Flat defenders", "Cover 2 Zone", "Cover 3"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz heavy"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    tips: "Call against blitzes. The rush lanes become blocking lanes for your linemen."
  },

  // ===== RPO =====
  "RPO Read": {
    type: "Pass", subtype: "RPO",
    description: "Run-pass option where the QB reads a defender post-snap to decide whether to hand off or throw.",
    beats: ["Cover 3", "Cover 1", "Aggressive LBs", "Run-focused defense", "Man coverage"],
    beatenBy: ["Cover 4", "Disciplined defense", "DE spy", "QB contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3 Match", "Spy"],
    tips: "Read the unblocked defender. If he bites on the run, throw. If he drops, hand off."
  },
  "RPO Alert": {
    type: "Pass", subtype: "RPO",
    description: "RPO with an alert route — quick throw if the read defender drops into coverage.",
    beats: ["Cover 3", "Zone coverage", "Aggressive LBs", "Drop defenses"],
    beatenBy: ["Cover 4", "Contain", "Spy", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match", "Spy"],
    tips: "Quick alert throw when the LB drops. If he stays put, hand off the ball."
  },
  "RPO Peek": {
    type: "Pass", subtype: "RPO",
    description: "RPO with a peek route — QB peeks at the LB to decide run or pass.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Aggressive front"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Spy", "Contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Peek at the LB — if he steps up, throw behind him. If he drops, hand off."
  },
  "RPO Bubble": {
    type: "Pass", subtype: "RPO",
    description: "RPO with a bubble screen option. Hand off or throw the quick bubble to the slot.",
    beats: ["Cover 3", "Cover 1", "Aggressive LBs", "Light boxes"],
    beatenBy: ["Cover 2 Zone", "Hard flat", "Press man"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Quick decision. If the box is heavy, throw the bubble. Light box, hand off."
  },
  "RPO Zone Peek": {
    type: "Pass", subtype: "RPO",
    description: "Inside zone run with a peek pass option off the read.",
    beats: ["Cover 3", "Cover 1", "Aggressive LBs", "Run-focused defense"],
    beatenBy: ["Cover 4", "Contain", "Spy"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Zone run with a built-in pass option. Read the LB and make the right choice."
  },
  "RPO Power Read": {
    type: "Pass", subtype: "RPO",
    description: "Power run with an RPO pass option. Read the unblocked end for give/keep/throw.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Aggressive defense"],
    beatenBy: ["Cover 4", "Contain", "Spy", "QB Contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Spy"],
    tips: "Three-way option. Give to the RB, keep and run, or throw the RPO route."
  },
  "RPO Lookie": {
    type: "Pass", subtype: "RPO",
    description: "RPO where the QB looks off the safety then decides to hand off or throw the alert route.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "Aggressive LBs"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Spy"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Look the safety one way, then throw back the other. Or just hand off if the box is light."
  },

  // ===== GENERIC / PLAY ACTION =====
  "Play Action": {
    type: "Pass", subtype: "Play Action",
    description: "Generic play action pass. Fakes the run to pull defenders up before throwing.",
    beats: ["Run-focused D", "Aggressive LBs", "Cover 3", "Cover 1", "Man coverage"],
    beatenBy: ["Cover 4", "Zones that don't bite", "Quick pressure before fake completes"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Only effective if you've established the run. Useless if the defense is sitting in zone."
  },

  // ===== MOTION / ORBIT / JET CONCEPTS =====
  "Orbit": {
    type: "Pass", subtype: "Concept",
    description: "Motion a player across the formation pre-snap with a potential handoff or pass after the snap.",
    beats: ["Man coverage", "Cover 1", "Cover 0", "Slow defensive adjustments"],
    beatenBy: ["Disciplined defense", "Adjusting pre-snap", "Cover 4"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "The motion reveals man vs zone pre-snap. Use it for information AND as a play."
  },
  "Orbit Screen": {
    type: "Pass", subtype: "Screen",
    description: "Motion receiver catches a quick pass behind the LOS heading across the formation.",
    beats: ["Man coverage", "Cover 1", "Cover 0", "Slow adjustments"],
    beatenBy: ["Hard flat", "Zone coverage reading orbit", "Contain"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3"],
    tips: "The orbit motion creates a numbers advantage on the edge. Quick throw with blockers."
  },

  // ===== PLAY ACTION VARIANTS =====
  "PA Boot": {
    type: "Pass", subtype: "Play Action",
    description: "Play action bootleg — QB fakes the run then rolls out to the opposite side with routes clearing out.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Aggressive LBs"],
    beatenBy: ["Contain", "QB spy", "Cover 4 with contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Spy"],
    tips: "Roll out and read the flat then deep cross. Great change of pace after running."
  },
  "PA Cross": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a deep crossing route as the primary read. Attacks the middle at depth.",
    beats: ["Cover 1", "Cover 3", "Man coverage", "Aggressive front"],
    beatenBy: ["Cover 4", "Pattern matching", "Quick pressure"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "The deep crosser gets open against man coverage. Let it develop — don't throw early."
  },
  "PA Seams": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with seam routes up the hash marks. Attacks the deep middle between safeties.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Cover 6"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Deep help in seams"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms"],
    tips: "Seam routes split the safeties. Best against two-deep looks where the middle is open."
  },
  "PA Slide": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with receivers running slide routes underneath. Quick PA with easy reads.",
    beats: ["Cover 3", "Cover 1", "Aggressive front", "Man coverage"],
    beatenBy: ["Cover 4", "Zone drops", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Quick play action with easy underneath reads. Good checkdown option."
  },

  // ===== ADDITIONAL CONCEPTS =====
  "Verticals": {
    type: "Pass", subtype: "Deep Shot",
    description: "Multiple receivers running vertical/streak routes. Stretches the defense deep.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Cover 6"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Prevent"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms", "Prevent"],
    tips: "Similar to Four Verticals. Read the safeties and throw to the open seam."
  },
  "Curl Combo": {
    type: "Pass", subtype: "Concept",
    description: "Combination of curl routes at different depths. Creates easy reads against zone coverage.",
    beats: ["Cover 3", "Cover 4", "Zone coverage", "Soft zones"],
    beatenBy: ["Man coverage", "Cover 1 Robber", "Press man"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Tampa 2"],
    badVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    tips: "Multiple curls create easy windows in zone. Read the intermediate defender."
  },
  "Double Slants": {
    type: "Pass", subtype: "Quick Game",
    description: "Two receivers running slant routes. Quick inside throws that beat man coverage.",
    beats: ["Cover 0", "Cover 1", "Man coverage", "Blitzes"],
    beatenBy: ["Cover 1 Robber", "Inside shade man", "User MLB"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 4"],
    badVsCoverages: ["Cover 1 Robber", "Cover 3 Match"],
    tips: "Two quick slants give you options on both sides. Beat blitzes with fast throws."
  },
  "Levels Switch": {
    type: "Pass", subtype: "Concept",
    description: "Levels concept with receivers switching depths — one goes deep, one comes short.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "The switch action confuses zone defenders tracking receivers through levels."
  },

  // ===== TRICK PLAYS =====
  "Trick Play": {
    type: "Pass", subtype: "Trick",
    description: "Trick play — flea flicker, WR pass, double reverse, or other misdirection play.",
    beats: ["Aggressive defense", "Man coverage", "Run-focused D"],
    beatenBy: ["Disciplined defense", "Zone coverage", "Contain"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3", "Zone coverages"],
    tips: "High risk, high reward. Only call when the defense isn't expecting it."
  },
  "Flea Flicker": {
    type: "Pass", subtype: "Trick",
    description: "QB hands off to RB who pitches it back to the QB for a deep throw downfield.",
    beats: ["Cover 1", "Cover 3", "Aggressive safeties", "Run-focused defense"],
    beatenBy: ["Cover 4", "Prevent", "Deep zones", "Spy"],
    goodVsCoverages: ["Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 4", "Prevent"],
    tips: "Set up with run plays first. The deep safety bites on the run fake."
  },
  "HB Pass": {
    type: "Pass", subtype: "Trick",
    description: "Halfback takes the handoff then throws a pass downfield. Surprise passing play.",
    beats: ["Aggressive defense", "Man coverage", "Run defense alignment"],
    beatenBy: ["Zone coverage", "Discipline", "User safety"],
    goodVsCoverages: ["Cover 1", "Cover 0"],
    badVsCoverages: ["Cover 4", "Cover 3", "Zone coverages"],
    tips: "Very risky. The HB usually can't throw accurately. Only use in desperation or for fun."
  },
  "Philly Special": {
    type: "Pass", subtype: "Trick",
    description: "Direct snap to RB who pitches to a WR/TE who throws to the QB. The famous Eagles play.",
    beats: ["Goal line defense", "Cover 0", "Man coverage", "Aggressive D"],
    beatenBy: ["Zone coverage", "Contain", "Discipline"],
    goodVsCoverages: ["Cover 0", "Cover 1"],
    badVsCoverages: ["Cover 3", "Cover 4", "Zone coverages"],
    tips: "Only works with the element of surprise. Best in goal line situations."
  },

  // ===== ADDITIONAL RUN PLAYS =====
  "Mid Zone": {
    type: "Run", subtype: "Zone Run",
    description: "Zone run between the tackles. RB reads the first down lineman and cuts accordingly.",
    beats: ["Nickel", "Dime", "Cover 4", "Light boxes"],
    beatenBy: ["Stuff the box", "46 Bear", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Read the first down lineman. Cut back if the play side is clogged."
  },
  "HB Stretch": {
    type: "Run", subtype: "Zone Run",
    description: "Same as Stretch — wide zone run getting the RB to the edge with zone blocking.",
    beats: ["Cover 0", "Cover 4", "Nickel", "Dime"],
    beatenBy: ["Contain", "Cover 3 Sky", "46 Bear"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "One of the best meta runs. Gets to the edge with zone blocking in front."
  },
  "Pin Pull Sweep": {
    type: "Run", subtype: "Outside Run",
    description: "Pin and pull sweep where the backside guard pulls to lead the RB outside.",
    beats: ["Nickel", "Dime", "Interior-focused defense"],
    beatenBy: ["Contain", "Edge speed", "Cover 3 Sky"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Follow the pulling guard to the edge. Cut upfield behind the lead block."
  },
  "HB Toss": {
    type: "Run", subtype: "Outside Run",
    description: "Toss play to the RB heading outside with lead blockers.",
    beats: ["Interior pressure", "Nickel", "Dime", "Dollar"],
    beatenBy: ["Contain", "Speed on edge", "Outside run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "Speed play to the outside. Great against heavy interior fronts."
  },

  // ===== MOTION / JET PLAYS =====
  "Jet Touch Pass": {
    type: "Pass", subtype: "Concept",
    description: "Jet motion WR receives a quick shovel/touch pass from the QB while running full speed.",
    beats: ["Cover 3", "Cover 4", "Slow adjustments", "Interior-focused D"],
    beatenBy: ["Contain", "Man on jet man", "Pre-snap read"],
    goodVsCoverages: ["Cover 3", "Cover 4"],
    badVsCoverages: ["Cover 1", "Man coverage"],
    tips: "Like a jet sweep but as a pass. Gets the WR the ball in space."
  },

  // ===== PLAY ACTION VARIANTS =====
  "PA Counter": {
    type: "Pass", subtype: "Play Action",
    description: "Play action off a counter run fake. The misdirection freezes linebackers and opens up deep routes.",
    beats: ["Cover 2 Zone", "Cover 3", "Aggressive LBs", "Run-heavy reads"],
    beatenBy: ["Cover 4 Drop", "Spy QB", "Quick pressure", "Disciplined LBs"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Sell the counter fake to freeze the second level. Look deep first, then check down."
  },
  "PA Draw": {
    type: "Pass", subtype: "Play Action",
    description: "Fake draw action before dropping back to pass. Draws linebackers up toward the line of scrimmage.",
    beats: ["Cover 2 Zone", "Cover 3", "Aggressive LBs", "Blitz"],
    beatenBy: ["Cover 4 Drop", "Zone drops", "Contain rush"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The delayed action gives your routes extra time to develop. Great on 2nd and short."
  },
  "PA Rollout Left": {
    type: "Pass", subtype: "Play Action",
    description: "Play action fake with the QB rolling left. Opens up the left side of the field for receivers.",
    beats: ["Cover 3", "Cover 2 Zone", "Right side pressure", "Man coverage"],
    beatenBy: ["Left contain", "Cover 4", "Spy", "Speed rush left"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Man"],
    badVsCoverages: ["Cover 4", "Cover 2 Man"],
    tips: "Roll to the left and look for the flat or corner route. Throw before you reach the sideline."
  },
  "PA Rollout Right": {
    type: "Pass", subtype: "Play Action",
    description: "Play action fake with the QB rolling right. Creates easy throws to the right side.",
    beats: ["Cover 3", "Cover 2 Zone", "Left side pressure", "Man coverage"],
    beatenBy: ["Right contain", "Cover 4", "Spy", "Speed rush right"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Man"],
    badVsCoverages: ["Cover 4", "Cover 2 Man"],
    tips: "Roll right and scan flat to deep. The corner route is money against Cover 3."
  },
  "PA Waggle": {
    type: "Pass", subtype: "Play Action",
    description: "Bootleg action off a play fake, with the QB rolling out opposite the run fake direction.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive LBs", "Man coverage"],
    beatenBy: ["Contain", "Spy QB", "Cover 4 Drop", "Backside pursuit"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2 Man"],
    tips: "Classic bootleg concept. Three levels of routes flood one side of the field."
  },
  "PA Counter Shot": {
    type: "Pass", subtype: "Play Action",
    description: "Play action counter fake into a deep shot downfield. Designed for chunk plays.",
    beats: ["Cover 2 Zone", "Cover 3", "Aggressive LBs", "Run commit"],
    beatenBy: ["Cover 4", "Two-high safety", "Disciplined coverage"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6", "Quarter"],
    tips: "This is a shot play. If the safety bites on the counter, throw the post or seam."
  },
  "PA Deep Cross": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a deep crossing route as the primary read. Attacks the middle of the field.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "LB drops"],
    beatenBy: ["Cover 4", "Pattern match", "Interior pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The deep cross needs time to develop. Make sure the fake holds the linebackers."
  },
  "PA Boot Left": {
    type: "Pass", subtype: "Play Action",
    description: "Bootleg action to the left off a run fake. QB rolls left with receivers flooding that side.",
    beats: ["Cover 3", "Cover 2 Zone", "Man coverage", "Right side overload"],
    beatenBy: ["Left contain", "Spy", "Cover 4", "Backside speed"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2 Man"],
    tips: "Three-level flood to the left. Flat, intermediate, deep. Read low to high."
  },
  "PA Y Cross": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with the TE or Y receiver running a deep crosser. Exploits vacated LB zones.",
    beats: ["Cover 3", "Cover 2 Zone", "LB drops", "Man on TE"],
    beatenBy: ["Cover 4", "Pattern match", "TE spy"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The TE cross is deadly when LBs bite on the run fake. Lead the throw."
  },
  "PA X Post": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with the X receiver running a deep post route. Attacks single-high safeties.",
    beats: ["Cover 1", "Cover 3", "Single high safety", "Run commit"],
    beatenBy: ["Cover 4", "Cover 2", "Two-high safety", "Deep help"],
    goodVsCoverages: ["Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 2", "Cover 4", "Cover 6"],
    tips: "This is a single-high beater. If you see two safeties deep, check out of it."
  },
  "PA Stretch": {
    type: "Pass", subtype: "Play Action",
    description: "Play action off a stretch run look. The wide zone fake pulls the defense laterally.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive LBs", "Run commit"],
    beatenBy: ["Cover 4", "Disciplined drops", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The stretch fake moves the defense laterally, opening up the backside. Check backside post."
  },
  "PA Inside Zone": {
    type: "Pass", subtype: "Play Action",
    description: "Play action off the inside zone run. The most common PA concept in football.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive LBs", "Run fit defense"],
    beatenBy: ["Cover 4", "Disciplined drops", "Interior pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Bread and butter PA. If they're running to stop the inside zone, hit them with this."
  },
  "PA Outside Zone": {
    type: "Pass", subtype: "Play Action",
    description: "Play action off an outside zone fake. Great for setting up bootleg passes.",
    beats: ["Cover 3", "Cover 2 Zone", "Run commit outside", "Aggressive edge"],
    beatenBy: ["Cover 4", "Contain", "Quick pressure backside"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Boot opposite the fake direction. The corner and flat combo is hard to cover."
  },

  // ===== MOTION / JET PLAYS =====
  "Jet Pass": {
    type: "Pass", subtype: "Motion",
    description: "Jet motion with a pass concept. The motion forces the defense to adjust pre-snap.",
    beats: ["Cover 3", "Cover 4", "Zone coverage", "Slow adjustments"],
    beatenBy: ["Man lock", "Contain", "Pre-snap discipline"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Man coverage"],
    tips: "Watch how the defense adjusts to the motion. If a defender follows, it's man coverage."
  },
  "Motion Crossers": {
    type: "Pass", subtype: "Motion",
    description: "Pre-snap motion into a crossing route concept. Creates natural picks and rubs.",
    beats: ["Man coverage", "Cover 1", "Tight coverage", "Press man"],
    beatenBy: ["Zone coverage", "Pattern match", "Switch calls"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "The motion creates traffic for man defenders. Look for the crosser coming open in the wash."
  },
  "Orbit Jet": {
    type: "Run", subtype: "Motion",
    description: "Orbit motion into a jet sweep handoff. The RB or WR comes around in orbit motion.",
    beats: ["Cover 3", "Cover 4", "Slow adjustments", "Interior-focused D"],
    beatenBy: ["Contain", "Crash outside", "Man on motion man"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Dime"],
    badVsCoverages: ["Cover 1", "46"],
    tips: "Get the ball to the edge quickly. Need blocks on the perimeter to break big."
  },
  "Motion Drive": {
    type: "Pass", subtype: "Motion",
    description: "Pre-snap motion into a drive concept. Motion helps identify coverage and creates leverage.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "Slow rotation"],
    beatenBy: ["Man lock", "Pattern match", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "Use the motion to diagnose the coverage, then attack the drive concept accordingly."
  },
  "Jet Motion Screen": {
    type: "Pass", subtype: "Screen",
    description: "Jet motion WR receives a screen pass with blockers in front. Combines speed with blocking.",
    beats: ["Blitz", "Man coverage", "Aggressive D-line", "Interior pressure"],
    beatenBy: ["Contain", "Screen recognition", "Speed on edge"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Blitz"],
    badVsCoverages: ["Cover 3 Sky", "Zone coverage"],
    tips: "Need the blockers to get set up. If the defense reads it, dump off to the RB."
  },
  "Motion Levels": {
    type: "Pass", subtype: "Motion",
    description: "Pre-snap motion into a levels concept. Three receivers at different depths on the same side.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "Pattern match"],
    beatenBy: ["Man lock", "Cover 4 Drop", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "Motion helps create a numbers advantage to one side. Read the LBs for your throw."
  },
  "Shift Flood": {
    type: "Pass", subtype: "Motion",
    description: "Pre-snap shift into a flood concept. The shift overloads one side of the defense.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "Slow adjustments"],
    beatenBy: ["Man coverage", "Quick adjustments", "Cover 4"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "The shift creates a trips or quads look. Flood the shifted side and read high to low."
  },

  // ===== WEST COAST / AIR RAID CONCEPTS =====
  "Shallow Cross": {
    type: "Pass", subtype: "Concept",
    description: "Shallow crossing route underneath combined with a deep dig or post over the top.",
    beats: ["Cover 3", "Zone coverage", "LB drops", "Soft coverage"],
    beatenBy: ["Pattern match", "Cover 4", "Aggressive underneath"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Tampa 2"],
    tips: "The shallow cross is your hot route. If the LBs drop, throw it quick underneath."
  },
  "Cross Dig": {
    type: "Pass", subtype: "Concept",
    description: "Combination of crossing routes at different depths. A dig route over a shallow cross.",
    beats: ["Cover 3", "Cover 2 Zone", "Zone coverage", "LB drops"],
    beatenBy: ["Cover 4", "Pattern match", "Interior pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Read the middle LB. If he drops under the dig, throw the shallow. If he stays low, throw the dig."
  },
  "Double Cross": {
    type: "Pass", subtype: "Concept",
    description: "Two crossing routes going opposite directions. Creates traffic for man defenders.",
    beats: ["Man coverage", "Cover 1", "Cover 0", "Press man"],
    beatenBy: ["Zone coverage", "Pattern match", "Switch calls"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "The two crossers create natural picks. Great man-beater concept."
  },
  "Mesh Spot": {
    type: "Pass", subtype: "Concept",
    description: "Mesh crossing routes with a spot route in the middle. Triangle read underneath.",
    beats: ["Man coverage", "Cover 1", "Zone coverage", "LB drops"],
    beatenBy: ["Pattern match", "Cover 4", "Aggressive underneath"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Tampa 2"],
    tips: "Read the mesh crossers first. If they're covered, check the spot route sitting in the zone."
  },
  "Texas": {
    type: "Pass", subtype: "Concept",
    description: "RB runs a wheel route while the TE runs a flat route underneath. Classic combination.",
    beats: ["Zone coverage", "Cover 3", "LBs in zone", "Soft coverage"],
    beatenBy: ["Man on RB", "Cover 4", "Safety help over top"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "If the LB follows the TE to the flat, the RB wheel is wide open. Big play potential."
  },
  "Whip": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick whip route where the receiver starts inside then plants and comes back outside.",
    beats: ["Man coverage", "Press coverage", "Cover 1", "Aggressive corners"],
    beatenBy: ["Zone coverage", "Pattern read", "Off coverage"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "Quick release throw. The whip route gets instant separation against man coverage."
  },
  "China": {
    type: "Pass", subtype: "Concept",
    description: "China concept with a deep corner route and a flat route. Two-man game to one side.",
    beats: ["Cover 2 Zone", "Cover 3", "Flat defenders", "Zone coverage"],
    beatenBy: ["Cover 4", "Pattern match", "Deep corner coverage"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 2 Man"],
    tips: "Read the flat defender. If he drops to the corner, throw the flat. If he stays flat, throw the corner."
  },
  "Scissors": {
    type: "Pass", subtype: "Deep Shot",
    description: "Post-corner combination. One receiver runs a post, the other runs a corner, creating a scissors look.",
    beats: ["Cover 2 Zone", "Cover 3", "Single high safety", "Zone coverage"],
    beatenBy: ["Cover 4", "Two-high safety", "Pattern match"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Read the safety. If he goes with the post, throw the corner. Classic high-low on the safety."
  },
  "Y Stick": {
    type: "Pass", subtype: "Quick Game",
    description: "TE or Y receiver runs a stick route — a quick out at 5-6 yards. Easy completion.",
    beats: ["Zone coverage", "Cover 3", "Soft coverage", "Off man"],
    beatenBy: ["Press man", "Aggressive underneath", "Pattern match"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "Quick and easy throw. The stick route sits in the soft spot of zone coverage."
  },
  "Hoss Y Juke": {
    type: "Pass", subtype: "Concept",
    description: "TE hitch-option route based on defensive leverage. TE reads the coverage and adjusts.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "LB drops"],
    beatenBy: ["Man coverage", "Pattern match", "Press on TE"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The TE reads the defender. If the defender is outside, juke inside. If inside, break outside."
  },
  "Stick Nod": {
    type: "Pass", subtype: "Quick Game",
    description: "Stick route with a nod release — receiver fakes inside then breaks out. Quick game concept.",
    beats: ["Zone coverage", "Cover 3", "Soft coverage", "Off man"],
    beatenBy: ["Press man", "Aggressive underneath", "Blitz"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The nod release gets the defender leaning. Quick throw to the stick route."
  },
  "Y Shallow Cross": {
    type: "Pass", subtype: "Concept",
    description: "TE runs a shallow crossing route underneath. A staple of West Coast offense.",
    beats: ["Cover 3", "Zone coverage", "LB drops", "Man on TE"],
    beatenBy: ["Pattern match", "Aggressive underneath", "Cover 4"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Tampa 2"],
    tips: "The TE shallow cross is high percentage. Throw it quick and let the TE run after the catch."
  },
  "Z Spot": {
    type: "Pass", subtype: "Concept",
    description: "Z receiver runs a spot route — sits in the open zone at about 8 yards. Triangle read.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "LB drops"],
    beatenBy: ["Man coverage", "Pattern match", "Aggressive underneath"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The Z sits between the LBs. If the zone opens up, it's an easy completion."
  },
  "Smash Corner": {
    type: "Pass", subtype: "Concept",
    description: "Smash concept with a hitch underneath and a corner route over the top. Cover 2 beater.",
    beats: ["Cover 2 Zone", "Cover 2 Man", "Flat defenders", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 3", "Deep corner coverage"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 2 Man", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3"],
    tips: "Classic Cover 2 beater. The hitch holds the corner, and the corner route goes over the top."
  },
  "Y Cross": {
    type: "Pass", subtype: "Concept",
    description: "TE or Y receiver runs a deep crossing route. Attacks the middle of the field at depth.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "LB drops"],
    beatenBy: ["Cover 4", "Pattern match", "Interior pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The TE cross takes time to develop. Need good protection to let it open up."
  },
  "Under Center Cross": {
    type: "Pass", subtype: "Concept",
    description: "Crossing route concept from under center. The play action sell is stronger from under center.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive LBs", "Run commit"],
    beatenBy: ["Cover 4", "Pattern match", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Under center gives a better run fake. The cross opens up when LBs bite."
  },
  "Deep Comeback": {
    type: "Pass", subtype: "Concept",
    description: "Deep comeback route at 15-18 yards. Requires a strong arm and precise timing.",
    beats: ["Cover 3", "Off coverage", "Zone coverage", "Soft corners"],
    beatenBy: ["Press man", "Cover 4", "Underneath defenders"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "Timing throw. The receiver has to snap off the comeback. Throw it before he breaks."
  },
  "Double Out": {
    type: "Pass", subtype: "Concept",
    description: "Two out routes to the same side at different depths. Stretches the defense horizontally.",
    beats: ["Cover 3", "Zone coverage", "Soft coverage", "LB drops"],
    beatenBy: ["Cover 2 Zone", "Flat defenders", "Pattern match"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 2 Zone", "Cover 4"],
    tips: "Read the flat defender. High out or low out depending on his depth."
  },
  "Seam Read": {
    type: "Pass", subtype: "Concept",
    description: "Seam route with a read on the safety. The QB and receiver read the safety together.",
    beats: ["Cover 3", "Cover 1", "Single high safety", "Zone coverage"],
    beatenBy: ["Cover 4", "Two-high safety", "Safety help"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Read the safety. If he moves to one seam, throw the other. Timing is crucial."
  },
  "Y Sail": {
    type: "Pass", subtype: "Concept",
    description: "TE runs a sail concept — corner route with a flat and streak as complementary routes.",
    beats: ["Cover 2 Zone", "Cover 3", "Flat defenders", "Zone coverage"],
    beatenBy: ["Cover 4", "Pattern match", "Deep corner coverage"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Three-level stretch on one side. Read the flat defender, then the corner player."
  },
  "Corner Post": {
    type: "Pass", subtype: "Deep Shot",
    description: "Double move — corner route faking outside then breaking back to the post. Big play shot.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive corners", "Jump the route"],
    beatenBy: ["Cover 4", "Patient corners", "Safety help"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Needs time to develop. The double move only works if the corner bites on the first cut."
  },
  "Post Wheel": {
    type: "Pass", subtype: "Deep Shot",
    description: "Post route combined with a wheel route. Attacks deep zones from different angles.",
    beats: ["Cover 3", "Cover 1", "Single high safety", "Zone coverage"],
    beatenBy: ["Cover 4", "Two-high safety", "Deep help"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Read the safety. Post or wheel based on safety rotation. Big play potential."
  },

  // ===== SCREEN PLAYS =====
  "TE Screen": {
    type: "Pass", subtype: "Screen",
    description: "Screen pass to the tight end with linemen releasing as blockers. Catches the defense off-guard.",
    beats: ["Blitz", "Aggressive D-line", "Man coverage", "Interior pressure"],
    beatenBy: ["Screen recognition", "Contain", "Zone drops"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Blitz"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "The TE screen works best against heavy pressure. Linemen need to get out in front."
  },
  "Slip Screen": {
    type: "Pass", subtype: "Screen",
    description: "Delayed screen where the RB slips out after pass blocking. The defense loses track of the back.",
    beats: ["Blitz", "Aggressive pass rush", "Man coverage", "Cover 0"],
    beatenBy: ["Screen read", "Contain", "Zone drops", "LB discipline"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "Patience is key. Let the rush commit before dumping to the RB."
  },
  "Slow Screen": {
    type: "Pass", subtype: "Screen",
    description: "Delayed screen that takes extra time to develop. OL releases late to set up a wall.",
    beats: ["Blitz", "Pass rush", "Aggressive coverage", "Cover 0"],
    beatenBy: ["Screen recognition", "LB awareness", "Delayed blitz"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz"],
    badVsCoverages: ["Cover 3", "Cover 4", "Zone"],
    tips: "Let the defense come to you. The longer they rush, the more room the screen has."
  },
  "Swing Screen": {
    type: "Pass", subtype: "Screen",
    description: "Quick screen to the RB swinging out of the backfield. Fast-hitting perimeter play.",
    beats: ["Blitz", "Interior pressure", "Aggressive LBs", "Man coverage"],
    beatenBy: ["Contain", "Edge defenders", "Screen recognition"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Blitz"],
    badVsCoverages: ["Cover 3 Sky", "Cover 2 Zone"],
    tips: "Quick throw to the swinging back. Need perimeter blocks to spring it."
  },
  "Flare Screen": {
    type: "Pass", subtype: "Screen",
    description: "Screen pass to the RB flaring out wide. OL releases to lead block on the perimeter.",
    beats: ["Blitz", "Interior pressure", "Man coverage", "LB blitz"],
    beatenBy: ["Contain", "Edge speed", "Screen recognition"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Blitz"],
    badVsCoverages: ["Cover 3", "Cover 2 Zone"],
    tips: "The flare gets the RB to the perimeter fast. Need the OL to get out and block."
  },
  "RB Screen": {
    type: "Pass", subtype: "Screen",
    description: "Traditional screen pass to the running back. Linemen release to create a blocking convoy.",
    beats: ["Blitz", "Aggressive pass rush", "Cover 0", "Interior pressure"],
    beatenBy: ["Screen recognition", "Contain", "Zone drops"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "Classic screen. Let the rush get upfield, then dump it to the RB behind the wall."
  },

  // ===== WILDCAT / SPECIAL =====
  "Wildcat Power": {
    type: "Run", subtype: "Trick",
    description: "Direct snap to the RB in Wildcat formation. Power blocking scheme with a lead blocker.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense", "Confusion"],
    beatenBy: ["Run commit", "46 Bear", "Goal line D", "Gap discipline"],
    goodVsCoverages: ["Dime", "Quarter", "Nickel"],
    badVsCoverages: ["46", "Goal Line", "Cover 0"],
    tips: "Extra blocker since QB is removed. Great for short yardage and confusing the defense."
  },
  "Wildcat Sweep": {
    type: "Run", subtype: "Trick",
    description: "Wildcat formation with a sweep run. Direct snap to the RB who sweeps to the outside.",
    beats: ["Light boxes", "Nickel", "Dime", "Interior-focused D"],
    beatenBy: ["Contain", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Dime", "Quarter", "Nickel"],
    badVsCoverages: ["46", "Cover 3 Sky"],
    tips: "Get to the edge quick. The Wildcat adds an extra blocker for the perimeter."
  },
  "Wildcat Counter": {
    type: "Run", subtype: "Trick",
    description: "Wildcat formation with a counter run. Misdirection from the direct snap look.",
    beats: ["Aggressive defense", "Over-pursuit", "Light boxes", "Nickel"],
    beatenBy: ["Disciplined D", "Run commit", "46 Bear"],
    goodVsCoverages: ["Dime", "Quarter", "Nickel"],
    badVsCoverages: ["46", "Goal Line", "3-4 Bear"],
    tips: "The counter step freezes the defense. Cut back against the grain for big plays."
  },
  "Wildcat Pass": {
    type: "Pass", subtype: "Trick",
    description: "Pass play from the Wildcat formation. Direct snap to the RB who throws a pass.",
    beats: ["Run commit", "Aggressive box", "Goal line D", "All-out blitz"],
    beatenBy: ["Coverage discipline", "Spy", "Man coverage on receivers"],
    goodVsCoverages: ["Cover 0", "Cover 1"],
    badVsCoverages: ["Cover 3", "Cover 4", "Cover 2"],
    tips: "Only throw if someone is wide open. The RB isn't an accurate passer."
  },
  "Wildcat Read": {
    type: "Run", subtype: "Option",
    description: "Wildcat formation with a read option component. Direct snap with a give/keep read.",
    beats: ["Light boxes", "Nickel", "Dime", "Confusion"],
    beatenBy: ["Disciplined D", "Run commit", "Spy on runner"],
    goodVsCoverages: ["Dime", "Quarter", "Nickel"],
    badVsCoverages: ["46", "Goal Line", "Cover 0"],
    tips: "Read the unblocked defender just like a normal read option. Keep or give."
  },
  "Direct Snap": {
    type: "Run", subtype: "Trick",
    description: "Direct snap to a non-QB player. Can be a run or the start of a trick play.",
    beats: ["Confusion", "Light boxes", "Nickel", "Dime"],
    beatenBy: ["Discipline", "Run commit", "Gap integrity"],
    goodVsCoverages: ["Dime", "Quarter", "Nickel"],
    badVsCoverages: ["46", "Goal Line"],
    tips: "Element of surprise. Use sparingly so the defense doesn't adjust."
  },

  // ===== DESIGNED QB RUNS =====
  "QB Counter": {
    type: "Run", subtype: "QB Run",
    description: "Designed QB counter run. QB takes the snap and runs a counter path with pulling blockers.",
    beats: ["Aggressive LBs", "Over-pursuit", "Nickel", "Dime", "Light boxes"],
    beatenBy: ["Spy", "Disciplined LBs", "Run commit", "Contain"],
    goodVsCoverages: ["Dime", "Nickel", "Cover 4"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Need a mobile QB. The counter step freezes the defense. Follow the pulling guard."
  },
  "QB Sweep": {
    type: "Run", subtype: "QB Run",
    description: "Designed QB sweep to the outside. QB takes off to the edge with blockers in front.",
    beats: ["Interior pressure", "Nickel", "Dime", "Light boxes"],
    beatenBy: ["Contain", "Edge speed", "Spy", "Run commit outside"],
    goodVsCoverages: ["Dime", "Nickel", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Cover 3 Sky"],
    tips: "Get to the edge and use your speed. Cut upfield once you turn the corner."
  },
  "QB Zone Read": {
    type: "Run", subtype: "QB Run",
    description: "Zone read where the QB keeps based on the read of the backside defender.",
    beats: ["Aggressive ends", "Over-pursuit", "Nickel", "Dime"],
    beatenBy: ["Spy", "Scrape exchange", "Disciplined ends"],
    goodVsCoverages: ["Dime", "Nickel", "Cover 4"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Read the backside end. If he crashes, keep it. If he stays, give it to the RB."
  },
  "QB Follow": {
    type: "Run", subtype: "QB Run",
    description: "QB follows the RB through the designed hole. A downhill QB run behind a lead blocker.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense"],
    beatenBy: ["Run commit", "46 Bear", "Spy", "Stacked box"],
    goodVsCoverages: ["Dime", "Nickel", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Follow the blockers downhill. Don't try to bounce it outside."
  },
  "QB Blast": {
    type: "Run", subtype: "QB Run",
    description: "QB takes the snap and blasts straight up the middle. Power run with the QB as the ball carrier.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense"],
    beatenBy: ["Run commit", "46 Bear", "Stacked box", "Spy"],
    goodVsCoverages: ["Dime", "Nickel", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Straight ahead power. Lower the shoulder and pick up the tough yards."
  },
  "QB Wrap": {
    type: "Run", subtype: "QB Run",
    description: "QB wraps around the line of scrimmage behind pulling blockers. A designed keeper with a wrap path.",
    beats: ["Aggressive ends", "Over-pursuit", "Nickel", "Dime"],
    beatenBy: ["Spy", "Contain", "Disciplined LBs"],
    goodVsCoverages: ["Dime", "Nickel", "Cover 4"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Follow the pulling blocker and look for the cutback lane."
  },
  "Designed Rollout": {
    type: "Pass", subtype: "QB Run",
    description: "Designed QB rollout with the option to run or throw. Run-pass option for mobile QBs.",
    beats: ["Interior pressure", "Zone coverage", "Cover 3", "Slow LBs"],
    beatenBy: ["Contain", "Edge speed", "Spy", "Man coverage"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "Read the edge defender. If he stays wide, throw. If he crashes, run."
  },
  "QB Option": {
    type: "Run", subtype: "Option",
    description: "Traditional option play where the QB reads a defender and decides to keep or pitch.",
    beats: ["Aggressive ends", "Over-pursuit", "Nickel", "Dime"],
    beatenBy: ["Spy", "Scrape exchange", "Disciplined defense"],
    goodVsCoverages: ["Dime", "Nickel", "Cover 4"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Read the pitch key. If he takes you, pitch it. If he takes the pitch man, keep it."
  },

  // ===== RUN & SHOOT CONCEPTS =====
  "Choice": {
    type: "Pass", subtype: "Concept",
    description: "Run and shoot concept where the receiver has a choice route based on coverage read.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "Soft coverage"],
    beatenBy: ["Pattern match", "Press man", "Aggressive underneath"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The receiver reads the coverage and picks his route. Need chemistry with the QB."
  },
  "Switch": {
    type: "Pass", subtype: "Concept",
    description: "Run and shoot concept where two receivers switch routes based on the defensive look.",
    beats: ["Man coverage", "Cover 1", "Zone coverage", "Confused defense"],
    beatenBy: ["Pattern match", "Switch calls", "Disciplined coverage"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Man"],
    badVsCoverages: ["Cover 4", "Pattern match"],
    tips: "Receivers read the same defender and react opposite. One goes vertical, one goes underneath."
  },
  "Go": {
    type: "Pass", subtype: "Deep Shot",
    description: "Simple go/streak route. Win with speed and track the ball over the shoulder.",
    beats: ["Off coverage", "Cover 3", "Single high", "Soft corners"],
    beatenBy: ["Press man", "Safety help", "Cover 2", "Cover 4"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 2", "Cover 4", "Cover 6"],
    tips: "Pure speed route. Need a fast receiver and good ball placement from the QB."
  },
  "Streak Right": {
    type: "Pass", subtype: "Deep Shot",
    description: "Streak route to the right side of the field. Vertical shot to beat the coverage deep.",
    beats: ["Cover 3", "Off coverage", "Single high", "Soft corners"],
    beatenBy: ["Cover 2", "Cover 4", "Safety help", "Press"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 2", "Cover 4"],
    tips: "Throw it up and let the receiver run under it. Need to win at the line."
  },
  "Streak Left": {
    type: "Pass", subtype: "Deep Shot",
    description: "Streak route to the left side of the field. Vertical shot to the boundary.",
    beats: ["Cover 3", "Off coverage", "Single high", "Soft corners"],
    beatenBy: ["Cover 2", "Cover 4", "Safety help", "Press"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 2", "Cover 4"],
    tips: "Boundary streak. Tighter window but less help for the defense."
  },

  // ===== ADDITIONAL RUN PLAYS =====
  "Inside Power": {
    type: "Run", subtype: "Gap Run",
    description: "Power run between the tackles with a pulling guard leading through the hole.",
    beats: ["Light boxes", "Nickel", "Dime", "Zone defense"],
    beatenBy: ["Run commit", "46 Bear", "Stacked box", "3-4 Bear"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Follow the pulling guard through the hole. Downhill and physical."
  },
  "Outside Power": {
    type: "Run", subtype: "Gap Run",
    description: "Power run to the outside with a pulling guard and fullback lead. Gets to the edge with force.",
    beats: ["Light boxes", "Nickel", "Dime", "Interior-focused D"],
    beatenBy: ["Contain", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Turn the corner behind the pulling guard. Cut upfield once you clear the edge."
  },
  "Lead Draw": {
    type: "Run", subtype: "Draw",
    description: "Draw play with a lead blocker. The FB or extra blocker leads through the hole.",
    beats: ["Aggressive pass rush", "Blitz", "Nickel", "Spread defense"],
    beatenBy: ["Run commit", "Disciplined D-line", "Spy"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Let the D-line rush upfield, then follow the lead blocker into the vacated space."
  },
  "Lead Sweep": {
    type: "Run", subtype: "Outside Run",
    description: "Sweep to the outside with a lead blocker in front. Gets numbers to the edge.",
    beats: ["Light boxes", "Nickel", "Dime", "Interior-focused D"],
    beatenBy: ["Contain", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Follow the lead blocker to the edge. Cut upfield when you see daylight."
  },
  "Guard Pull": {
    type: "Run", subtype: "Gap Run",
    description: "Run play with a pulling guard leading the way. The guard kicks out the end man.",
    beats: ["Zone defense", "Nickel", "Dime", "Light boxes"],
    beatenBy: ["Run commit", "Crashing ends", "46 Bear"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "The guard is your lead blocker. Follow him and read the block."
  },
  "Center Sweep": {
    type: "Run", subtype: "Outside Run",
    description: "Sweep with the center pulling as a lead blocker. Unusual look that catches defenses off guard.",
    beats: ["Interior-focused D", "Nickel", "Dime", "Predictable defense"],
    beatenBy: ["Contain", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "The center pulling is a unique look. The defense won't expect it."
  },
  "Buck Sweep": {
    type: "Run", subtype: "Outside Run",
    description: "Classic sweep with both guards pulling. Maximum power at the point of attack on the edge.",
    beats: ["Light boxes", "Nickel", "Dime", "Zone defense"],
    beatenBy: ["Contain", "Speed on edge", "Run commit outside", "46 Bear"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Two guards pulling creates a wall. Get behind them and turn upfield."
  },
  "Blast": {
    type: "Run", subtype: "Gap Run",
    description: "Straight-ahead blast run. Downhill power with everyone blocking straight ahead.",
    beats: ["Light boxes", "Nickel", "Dime", "Undersized defense"],
    beatenBy: ["Run commit", "46 Bear", "Stacked box", "3-4 Bear"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Pure power football. Lower the shoulder and get the tough yards."
  },
  "Stretch Right": {
    type: "Run", subtype: "Zone Run",
    description: "Zone stretch run to the right side. The RB aims for the edge and reads the blocks.",
    beats: ["Cover 0", "Nickel", "Dime", "Interior-focused D"],
    beatenBy: ["Contain right", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "Cover 1"],
    tips: "Read the blocks as they develop. Cut back if the edge is sealed."
  },
  "Stretch Left": {
    type: "Run", subtype: "Zone Run",
    description: "Zone stretch run to the left side. The RB aims for the left edge.",
    beats: ["Cover 0", "Nickel", "Dime", "Interior-focused D"],
    beatenBy: ["Contain left", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "Cover 1"],
    tips: "Same as stretch right but to the left. Read and cut back against the grain."
  },
  "Inside Trap": {
    type: "Run", subtype: "Gap Run",
    description: "Trap blocking scheme where a guard pulls to trap the defensive tackle. Quick-hitting inside run.",
    beats: ["Aggressive D-line", "Penetrating defense", "Light boxes"],
    beatenBy: ["Disciplined D-line", "Run commit", "Read the puller"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "The trap block catches the D-lineman by surprise. Hit the hole fast."
  },
  "Counter Trey": {
    type: "Run", subtype: "Gap Run",
    description: "Counter run with a guard and tackle pulling. Classic misdirection power scheme.",
    beats: ["Aggressive LBs", "Over-pursuit", "Zone defense", "Nickel"],
    beatenBy: ["Disciplined LBs", "Run commit", "3-4 Bear"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Sell the fake one way, then cut back behind the pullers. Patience wins."
  },
  "Weak Dive": {
    type: "Run", subtype: "Gap Run",
    description: "Dive play to the weak side of the formation. Quick-hitting between the tackles.",
    beats: ["Overshift defense", "Strong side overload", "Light weak side"],
    beatenBy: ["Run commit", "Backside pursuit", "Stacked box"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Hit the weak side fast before the defense can flow. Quick handoff."
  },
  "Strong Dive": {
    type: "Run", subtype: "Gap Run",
    description: "Dive play to the strong side of the formation. Power behind the TE and extra blockers.",
    beats: ["Light boxes", "Nickel", "Dime", "Undersized defense"],
    beatenBy: ["Run commit strong", "46 Bear", "Stacked box"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Get downhill behind the strength of the formation. Follow the TE's block."
  },
  "FB Counter": {
    type: "Run", subtype: "Gap Run",
    description: "Counter run with the fullback as the ball carrier. The FB takes a counter path.",
    beats: ["Aggressive LBs", "Over-pursuit", "Light boxes", "Confusion"],
    beatenBy: ["Disciplined LBs", "Run commit", "46 Bear"],
    goodVsCoverages: ["Cover 4", "Dime", "Nickel"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "FB counter is unusual and catches the defense off guard. Follow the blocks."
  },
  "FB Toss": {
    type: "Run", subtype: "Outside Run",
    description: "Toss play to the fullback headed to the outside. The FB catches the toss and heads to the edge.",
    beats: ["Interior-focused D", "Light edges", "Nickel", "Dime"],
    beatenBy: ["Contain", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Get the FB to the edge. He may not be the fastest, but he can run through tackles."
  },
  "Toss Strong": {
    type: "Run", subtype: "Outside Run",
    description: "Toss play to the strong side of the formation. RB catches the toss and runs to the strong edge.",
    beats: ["Light boxes", "Nickel", "Dime", "Interior-focused D"],
    beatenBy: ["Contain strong", "Edge speed", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Get outside quick behind the lead blocks. Extra blockers on the strong side."
  },
  "Toss Weak": {
    type: "Run", subtype: "Outside Run",
    description: "Toss play to the weak side. RB catches the toss and runs to the boundary.",
    beats: ["Overshift defense", "Strong side overload", "Light weak edge"],
    beatenBy: ["Contain weak", "Edge speed", "Backside pursuit"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46"],
    tips: "Attack the weak side edge. Less help for the defense on the boundary side."
  },
  "Zone Lead": {
    type: "Run", subtype: "Zone Run",
    description: "Zone blocking scheme with a lead blocker. Combines zone blocking with a fullback lead.",
    beats: ["Light boxes", "Nickel", "Dime", "Zone defense"],
    beatenBy: ["Run commit", "46 Bear", "Stacked box"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Read the zone blocks and follow the FB. The lead blocker takes on the first unblocked man."
  },
  "Zone Weak": {
    type: "Run", subtype: "Zone Run",
    description: "Zone run to the weak side. Quick-hitting zone scheme away from the formation strength.",
    beats: ["Overshift defense", "Strong side overload", "Light weak side"],
    beatenBy: ["Backside pursuit", "Run commit", "Stacked box"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Cut back against the grain if the weak side is sealed. Quick decision making."
  },
  "Zone Read": {
    type: "Run", subtype: "Option",
    description: "Zone read option where the QB reads the backside end. Give to the RB or keep and run.",
    beats: ["Aggressive ends", "Over-pursuit", "Nickel", "Dime"],
    beatenBy: ["Spy", "Scrape exchange", "Disciplined ends"],
    goodVsCoverages: ["Cover 4", "Dime", "Nickel"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Read the unblocked end. If he crashes, keep. If he stays home, give."
  },

  // ===== GOAL LINE / SHORT YARDAGE =====
  "Goal Line Power": {
    type: "Run", subtype: "Short Yardage",
    description: "Power run from goal line formation. Maximum blockers with a fullback lead.",
    beats: ["Light goal line", "Undersized defense", "Pass expect"],
    beatenBy: ["Goal line stuff", "Penetration", "Run commit"],
    goodVsCoverages: ["Goal Line", "Nickel", "Dime"],
    badVsCoverages: ["46", "3-4 Bear"],
    tips: "Lower the shoulder and drive forward. Get behind the FB and push the pile."
  },
  "Goal Line Dive": {
    type: "Run", subtype: "Short Yardage",
    description: "Quick dive from goal line formation. Straight ahead into the teeth of the defense.",
    beats: ["Spread goal line D", "Pass expect", "Light boxes"],
    beatenBy: ["Goal line stuff", "Penetration", "Stacked box"],
    goodVsCoverages: ["Goal Line", "Nickel", "Dime"],
    badVsCoverages: ["46", "3-4 Bear"],
    tips: "Fire off the ball quick. The quicker the handoff, the less time the D has to react."
  },
  "Sneak Left": {
    type: "Run", subtype: "Short Yardage",
    description: "QB sneak to the left side. QB follows the center's block and dives left.",
    beats: ["Right side overload", "Spread defense", "Pass expect"],
    beatenBy: ["Penetration left", "Run commit", "Nose tackle push"],
    goodVsCoverages: ["Goal Line", "Nickel", "Dime"],
    badVsCoverages: ["46", "3-4 Bear"],
    tips: "Follow the center and LG. Get low and push forward for the first down or TD."
  },
  "Sneak Right": {
    type: "Run", subtype: "Short Yardage",
    description: "QB sneak to the right side. QB follows the center's block and dives right.",
    beats: ["Left side overload", "Spread defense", "Pass expect"],
    beatenBy: ["Penetration right", "Run commit", "Nose tackle push"],
    goodVsCoverages: ["Goal Line", "Nickel", "Dime"],
    badVsCoverages: ["46", "3-4 Bear"],
    tips: "Follow the center and RG. Get low and fight for every inch."
  },
  "Wedge": {
    type: "Run", subtype: "Short Yardage",
    description: "Wedge blocking with the entire OL driving forward as a unit. RB runs behind the wedge.",
    beats: ["Spread defense", "Light boxes", "Pass expect"],
    beatenBy: ["Penetration", "Run commit", "Low pad level D"],
    goodVsCoverages: ["Goal Line", "Nickel", "Dime"],
    badVsCoverages: ["46", "3-4 Bear"],
    tips: "The whole line fires out together. RB just needs to stay behind the push."
  },
  "QB Wedge": {
    type: "Run", subtype: "Short Yardage",
    description: "QB runs behind the wedge block. Similar to QB sneak but with the entire line driving forward.",
    beats: ["Spread defense", "Pass expect", "Light boxes"],
    beatenBy: ["Penetration", "Run commit", "Low pad level D"],
    goodVsCoverages: ["Goal Line", "Nickel", "Dime"],
    badVsCoverages: ["46", "3-4 Bear"],
    tips: "Get behind the push and fight forward. Every inch counts in short yardage."
  },

  // ===== ADDITIONAL CONCEPTS =====
  "Dino": {
    type: "Pass", subtype: "Concept",
    description: "Deep in route from one side with a deep out from the other. Stretches the defense horizontally deep.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "Single high"],
    beatenBy: ["Cover 4", "Pattern match", "Two-high safety"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Read the deep middle. If the safety cheats to one side, throw to the other."
  },
  "Dragon": {
    type: "Pass", subtype: "Concept",
    description: "Drag route combined with a go route from the same side. Vertical stretch on the defender.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "LB drops"],
    beatenBy: ["Pattern match", "Man coverage", "Aggressive underneath"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "If the defender drops with the go, throw the drag. If he stays low, go deep."
  },
  "Whip Route": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick whip route concept. Receiver fakes in, plants, and comes back outside quickly.",
    beats: ["Man coverage", "Press man", "Cover 1", "Aggressive CBs"],
    beatenBy: ["Zone coverage", "Off coverage", "Pattern read"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "Quick throw. The whip creates instant separation against man defenders."
  },
  "China Route": {
    type: "Pass", subtype: "Concept",
    description: "China route concept — a deep corner route from the slot with a flat route underneath.",
    beats: ["Cover 2 Zone", "Cover 3", "Flat defenders", "Zone coverage"],
    beatenBy: ["Cover 4", "Pattern match", "Deep corner help"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 2 Man"],
    tips: "Read the flat defender just like the sail concept. Corner or flat based on his drop."
  },
  "Sail Concept": {
    type: "Pass", subtype: "Concept",
    description: "Three-level flood concept with a streak, corner, and flat route on the same side.",
    beats: ["Cover 2 Zone", "Cover 3", "Flat defenders", "Tampa 2"],
    beatenBy: ["Cover 4", "Pattern match", "Overload coverage"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Read top to bottom. Streak, corner, flat. Throw to whoever the defense leaves open."
  },
  "Double Move": {
    type: "Pass", subtype: "Deep Shot",
    description: "Any double move route — hitch and go, out and up, slant and go. Designed to beat aggressive DBs.",
    beats: ["Aggressive corners", "Jump routes", "Press man", "Cover 1"],
    beatenBy: ["Patient coverage", "Safety help", "Cover 4", "Off coverage"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Man"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Needs time to develop. Only works if the DB bites on the first move."
  },
  "Whip Screen": {
    type: "Pass", subtype: "Screen",
    description: "Quick screen off a whip route action. Receiver fakes the whip then catches a screen pass.",
    beats: ["Man coverage", "Blitz", "Aggressive corners", "Press man"],
    beatenBy: ["Screen recognition", "Zone coverage", "Contain"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "Quick throw. The fake whip action freezes the defender. Need blocks on the perimeter."
  },
  "TE Angle": {
    type: "Pass", subtype: "Concept",
    description: "TE runs an angle route — starts flat then cuts upfield at a 45-degree angle.",
    beats: ["Zone coverage", "LB drops", "Cover 3", "Soft coverage"],
    beatenBy: ["Man on TE", "Pattern match", "Aggressive LBs"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The angle route finds soft spots in zone. Easy throw for the QB."
  },
  "TE Seam": {
    type: "Pass", subtype: "Concept",
    description: "TE runs a seam route straight up the hash. Attacks the middle of the field deep.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "Single high"],
    beatenBy: ["Cover 4", "Safety help", "Bracket coverage"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "The seam is open against single-high looks. Put the ball on the TE's outside shoulder."
  },
  "TE Corner": {
    type: "Pass", subtype: "Concept",
    description: "TE runs a corner route. Attacks the deep sideline from the slot or inline position.",
    beats: ["Cover 2 Zone", "Cover 3", "LB in coverage", "Zone coverage"],
    beatenBy: ["Cover 4", "Man on TE", "Deep corner help"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "The TE corner is deadly against Cover 2. Throw it over the LB and under the safety."
  },
  "Slot Out": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick out route from the slot receiver. Fast throw to the sideline for an easy completion.",
    beats: ["Zone coverage", "Cover 3", "Off coverage", "Soft corners"],
    beatenBy: ["Press man", "Flat defenders", "Pattern match"],
    goodVsCoverages: ["Cover 3", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Cover 1"],
    tips: "Quick throw. Get the ball out fast before the defender can close."
  },
  "Slot Post": {
    type: "Pass", subtype: "Deep Shot",
    description: "Deep post route from the slot. Attacks the middle of the field from an inside position.",
    beats: ["Cover 3", "Cover 1", "Single high", "Zone coverage"],
    beatenBy: ["Cover 4", "Safety help", "Two-high"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "The slot post attacks the single-high safety. Big play potential over the middle."
  },
  "Slot Corner": {
    type: "Pass", subtype: "Concept",
    description: "Corner route from the slot receiver. Attacks the deep sideline from an inside alignment.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Man coverage", "Deep corner help"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "The slot corner beats Cover 2 by going over the LB. Need accuracy from the QB."
  },
  "Drag Route": {
    type: "Pass", subtype: "Quick Game",
    description: "Simple drag route across the formation. High-percentage throw underneath the coverage.",
    beats: ["Zone coverage", "Cover 3", "Cover 4", "Soft coverage"],
    beatenBy: ["Man coverage", "Aggressive underneath", "Pattern match"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The drag is your safety blanket. Always a high-percentage throw."
  },
  "Crosser": {
    type: "Pass", subtype: "Concept",
    description: "Deep crossing route at about 15 yards. Attacks the middle of the field with speed.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "LB drops"],
    beatenBy: ["Cover 4", "Pattern match", "Interior pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The crosser needs time. If you have protection, this is a high-value throw."
  },
  "Levels Y": {
    type: "Pass", subtype: "Concept",
    description: "Levels concept featuring the Y receiver. Two routes at different depths on the same side.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "LB drops"],
    beatenBy: ["Pattern match", "Man coverage", "Cover 4 Drop"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "Read the LB between the two levels. Throw behind him no matter which way he goes."
  },
  "Verticals Seam": {
    type: "Pass", subtype: "Deep Shot",
    description: "Vertical concept attacking the seams. All receivers run vertical routes to stretch the defense deep.",
    beats: ["Cover 3", "Cover 1", "Single high", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 2", "Two-high safety"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Read the safeties. Throw to the seam away from safety rotation."
  },
  "Curl Route": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick curl route concept. Receiver runs upfield then curls back toward the QB.",
    beats: ["Off coverage", "Zone coverage", "Cover 3", "Soft corners"],
    beatenBy: ["Press man", "Aggressive underneath", "Pattern match"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The curl sits in the soft spot of zone. Throw it as the receiver turns."
  },
  "Hitch Screen": {
    type: "Pass", subtype: "Screen",
    description: "Quick hitch route that functions like a screen. Receiver catches and runs with blockers.",
    beats: ["Off coverage", "Zone coverage", "Blitz", "Soft corners"],
    beatenBy: ["Press man", "Aggressive corners", "Screen recognition"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Blitz"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "Quick throw. Receiver needs to catch and get upfield behind the blocks."
  },
  "Out Route": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick out route to the sideline. Clean throw that gets the receiver to the boundary.",
    beats: ["Zone coverage", "Cover 3", "Off coverage", "Soft corners"],
    beatenBy: ["Press man", "Flat defenders", "Jump routes"],
    goodVsCoverages: ["Cover 3", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Cover 1"],
    tips: "Timing throw. Put it on the receiver's outside shoulder toward the sideline."
  },
  "In Route": {
    type: "Pass", subtype: "Concept",
    description: "Intermediate in route crossing the field. Attacks the middle of the field at 10-12 yards.",
    beats: ["Cover 3", "Zone coverage", "Off coverage", "LB drops"],
    beatenBy: ["Cover 4", "Interior pressure", "Man coverage"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "Throw it with anticipation. Lead the receiver across the middle."
  },
  "Flat Route": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick flat route — receiver or RB runs to the flat area near the sideline.",
    beats: ["Blitz", "Interior pressure", "Zone coverage", "Soft coverage"],
    beatenBy: ["Flat defenders", "Contain", "Cover 2 Zone"],
    goodVsCoverages: ["Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 2 Zone", "Cover 4"],
    tips: "Quick dump off to the flat. High percentage throw to move the chains."
  },
  "Angle Route": {
    type: "Pass", subtype: "Concept",
    description: "Receiver runs flat then cuts upfield at an angle. Finds soft spots in zone coverage.",
    beats: ["Zone coverage", "Cover 3", "LB drops", "Soft coverage"],
    beatenBy: ["Man coverage", "Pattern match", "Aggressive LBs"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The angle route exploits the space between LBs in zone. Easy catch and run."
  },
  "Wheel Route": {
    type: "Pass", subtype: "Concept",
    description: "Wheel route where the receiver or RB runs out of the backfield and up the sideline.",
    beats: ["Zone coverage", "Cover 3", "LBs in zone", "Soft coverage"],
    beatenBy: ["Man on RB", "Cover 4", "Safety help"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "The wheel route takes time but is a big play waiting to happen. LBs can't cover it."
  },
  "Seam Route": {
    type: "Pass", subtype: "Deep Shot",
    description: "Seam route up the hash marks. Attacks the soft spot between safeties in zone.",
    beats: ["Cover 3", "Cover 1", "Zone coverage", "Single high"],
    beatenBy: ["Cover 4", "Safety help", "Bracket coverage"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Put the ball on the outside shoulder away from the safety. Timing throw."
  },
  "Corner Route": {
    type: "Pass", subtype: "Deep Shot",
    description: "Corner route to the deep sideline. Attacks the soft spot between the corner and safety.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Deep help", "Man coverage"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "The corner route beats Cover 2 by splitting the corner and safety. Need a strong throw."
  },
  "Post Route": {
    type: "Pass", subtype: "Deep Shot",
    description: "Deep post route to the middle of the field. Attacks single-high safeties.",
    beats: ["Cover 1", "Cover 3", "Single high", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 2", "Two-high safety", "Safety help"],
    goodVsCoverages: ["Cover 1", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "The post is the premier route against single-high. Need to win at the break."
  },
  "Slant Route": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick slant inside. One of the most efficient routes in football — quick and high percentage.",
    beats: ["Off coverage", "Zone coverage", "Cover 3", "Cover 4"],
    beatenBy: ["Press man", "Aggressive underneath", "Jump routes"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "Throw it quick on the back hip. The slant is the hot route against most blitzes."
  },
  "PA Flood Right": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a flood concept to the right side. Three receivers at three depths.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive LBs", "Run commit"],
    beatenBy: ["Cover 4", "Right side overload D", "Contain"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Flood the right side after the PA fake. Read high to low — streak, corner, flat."
  },
  "PA Flood Left": {
    type: "Pass", subtype: "Play Action",
    description: "Play action with a flood concept to the left side. Three-level flood after a run fake.",
    beats: ["Cover 3", "Cover 2 Zone", "Aggressive LBs", "Run commit"],
    beatenBy: ["Cover 4", "Left side overload D", "Contain"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Boot left and flood. Read the flat defender to determine your throw."
  },
  "Stick Draw": {
    type: "Pass", subtype: "RPO",
    description: "RPO with a stick route and draw option. QB reads the LB for throw or handoff.",
    beats: ["Zone coverage", "Cover 3", "Aggressive LBs", "Blitz"],
    beatenBy: ["Pattern match", "Disciplined LBs", "Spy"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 1"],
    tips: "If the LB drops, hand off the draw. If he fills the run, throw the stick."
  },
  "Quick Out Flat": {
    type: "Pass", subtype: "Quick Game",
    description: "Quick out route with a flat route underneath. Two-man game to the short sideline.",
    beats: ["Zone coverage", "Cover 3", "Soft corners", "Off coverage"],
    beatenBy: ["Press man", "Flat defenders", "Jump routes"],
    goodVsCoverages: ["Cover 3", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Cover 1"],
    tips: "Read the flat defender. High or low based on his positioning."
  },
  "Deep Dig": {
    type: "Pass", subtype: "Concept",
    description: "Deep dig route at 15-18 yards across the middle. Attacks zone coverage at depth.",
    beats: ["Cover 3", "Cover 2 Zone", "Zone coverage", "LB drops"],
    beatenBy: ["Cover 4", "Pattern match", "Interior pressure"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "The deep dig needs time. If you have protection, it's a high-value completion."
  },
  "Slant Wheel": {
    type: "Pass", subtype: "Concept",
    description: "Slant route underneath with a wheel route over the top. Vertical stretch on the defender.",
    beats: ["Zone coverage", "Cover 3", "LBs in zone", "Soft coverage"],
    beatenBy: ["Man coverage", "Pattern match", "Safety help"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "If the defender drops with the wheel, throw the slant. If he stays short, hit the wheel."
  },
  "Out and Up": {
    type: "Pass", subtype: "Deep Shot",
    description: "Double move — out route faking to sideline then breaking deep. Burns aggressive corners.",
    beats: ["Aggressive corners", "Jump routes", "Press man", "Cover 1"],
    beatenBy: ["Patient coverage", "Safety help", "Cover 4"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Man"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Need the corner to bite on the out move. If he does, go deep for a big play."
  },
  "Hitch and Go": {
    type: "Pass", subtype: "Deep Shot",
    description: "Double move — hitch route fake then a go route deep. Catches corners jumping the hitch.",
    beats: ["Aggressive corners", "Jump hitch", "Press man", "Cover 1"],
    beatenBy: ["Patient coverage", "Safety help", "Cover 4", "Off coverage"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Man"],
    badVsCoverages: ["Cover 4", "Cover 2", "Cover 6"],
    tips: "Set up with hitches early in the game, then burn them with the hitch and go."
  },
  "Slot Fade": {
    type: "Pass", subtype: "Deep Shot",
    description: "Fade route from the slot position. Attacks the deep sideline from an inside alignment.",
    beats: ["Off coverage", "Zone coverage", "Cover 3", "Soft corners"],
    beatenBy: ["Press man", "Safety help", "Cover 4"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2"],
    tips: "Need a big, fast slot receiver. Throw it to the back shoulder near the sideline."
  },
  "HB Angle": {
    type: "Pass", subtype: "Concept",
    description: "RB runs an angle route out of the backfield. Starts flat then cuts upfield at 45 degrees.",
    beats: ["Zone coverage", "Cover 3", "LBs in zone", "Soft coverage"],
    beatenBy: ["Man on RB", "Pattern match", "Aggressive LBs"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 4"],
    badVsCoverages: ["Cover 1", "Cover 0"],
    tips: "The RB angle finds the soft spot between the LBs. Easy completion."
  },
  "Flat Wheel": {
    type: "Pass", subtype: "Concept",
    description: "Flat route underneath with a wheel route behind it. Classic two-man vertical stretch.",
    beats: ["Zone coverage", "Cover 3", "LBs in zone", "Soft coverage"],
    beatenBy: ["Man on RB", "Safety help", "Cover 4"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "Read the flat defender. If he sinks, throw flat. If he jumps the flat, hit the wheel."
  },
  "Spot Drop": {
    type: "Pass", subtype: "Concept",
    description: "Spot route concept with a QB drop back. Triangle read with a curl, flat, and spot route.",
    beats: ["Zone coverage", "Cover 3", "Cover 2 Zone", "LB drops"],
    beatenBy: ["Man coverage", "Pattern match", "Aggressive underneath"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Cover 4"],
    tips: "Read the triangle. Whoever the defense leaves uncovered, throw it there."
  },
  "Curl Seam": {
    type: "Pass", subtype: "Concept",
    description: "Curl route with a seam route behind it. Vertical stretch that attacks zones at two depths.",
    beats: ["Cover 3", "Zone coverage", "LB drops", "Soft coverage"],
    beatenBy: ["Cover 4", "Pattern match", "Safety help"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Read the safety. If he drops to the seam, throw the curl. If he stays high, hit the seam."
  },
  "Quick Fade": {
    type: "Pass", subtype: "Deep Shot",
    description: "Quick-release fade route. Fast throw to the sideline before the defense can react.",
    beats: ["Off coverage", "Zone coverage", "Cover 3", "Blitz"],
    beatenBy: ["Press man", "Safety help", "Cover 4"],
    goodVsCoverages: ["Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 2"],
    tips: "Throw it before the DB can turn. Back-shoulder if the DB is trailing."
  },
  "Iso Power": {
    type: "Run", subtype: "Gap Run",
    description: "Isolation play with power blocking. The FB leads through the hole and takes on the LB.",
    beats: ["Light boxes", "Nickel", "Dime", "Zone defense"],
    beatenBy: ["Run commit", "46 Bear", "Stacked box", "Blitzing LB"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "The FB takes the LB, you take the open lane. Downhill and physical."
  },
  "Mid Draw": {
    type: "Run", subtype: "Draw",
    description: "Draw play up the middle. The QB drops back as if to pass then hands off to the RB.",
    beats: ["Pass rush", "Blitz", "Aggressive D-line", "Nickel"],
    beatenBy: ["Run commit", "Disciplined D-line", "Spy"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Let the D-line rush upfield then run where they vacated. Patience and vision."
  },
  "Off Tackle": {
    type: "Run", subtype: "Gap Run",
    description: "Run play off the tackle position. The RB hits the gap between the tackle and end.",
    beats: ["Light boxes", "Nickel", "Dime", "Zone defense"],
    beatenBy: ["Run commit", "46 Bear", "Contain"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Hit the gap between the tackle and end. Quick feet through the hole."
  },
  "Reverse": {
    type: "Run", subtype: "Trick",
    description: "Reverse play where the WR takes a handoff going the opposite direction. Misdirection run.",
    beats: ["Over-pursuit", "Aggressive defense", "Interior-focused D", "Flow to the ball"],
    beatenBy: ["Contain", "Disciplined defense", "Backside pursuit"],
    goodVsCoverages: ["Cover 4", "Dime", "Nickel"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Need the defense to over-pursue the initial action. The reverse hits the backside."
  },
  "HB Counter": {
    type: "Run", subtype: "Gap Run",
    description: "HB counter with misdirection. The RB takes a counter step before running behind pulling blockers.",
    beats: ["Aggressive LBs", "Over-pursuit", "Zone defense", "Nickel"],
    beatenBy: ["Disciplined LBs", "Run commit", "3-4 Bear"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "The counter step freezes the defense. Be patient and follow the pullers."
  },
  "Zone Stretch": {
    type: "Run", subtype: "Zone Run",
    description: "Wide zone stretch concept. The entire OL zones one direction while the RB reads the cutback.",
    beats: ["Cover 0", "Nickel", "Dime", "Dollar", "Quarter"],
    beatenBy: ["Contain", "Cover 3 Sky", "46 Bear", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 3 Sky", "Cover 1"],
    tips: "Run to the edge but always be ready to cut back. Read the defensive flow."
  },
  "Power Left": {
    type: "Run", subtype: "Gap Run",
    description: "Power run to the left side with a pulling guard. Forces the ball to the left edge.",
    beats: ["Light left side", "Nickel", "Dime", "Right side overload D"],
    beatenBy: ["Run commit left", "Contain left", "46 Bear"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Follow the pulling guard to the left. Hit the hole with authority."
  },
  "Power Right": {
    type: "Run", subtype: "Gap Run",
    description: "Power run to the right side with a pulling guard. Forces the ball to the right side.",
    beats: ["Light right side", "Nickel", "Dime", "Left side overload D"],
    beatenBy: ["Run commit right", "Contain right", "46 Bear"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Follow the pulling guard to the right. Downhill power football."
  },
  "Dive Left": {
    type: "Run", subtype: "Gap Run",
    description: "Quick dive to the left A gap. Fast-hitting run inside the left guard.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense"],
    beatenBy: ["Run commit", "46 Bear", "Penetration"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Hit the hole fast. No hesitation on the dive play."
  },
  "Dive Right": {
    type: "Run", subtype: "Gap Run",
    description: "Quick dive to the right A gap. Fast-hitting run inside the right guard.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense"],
    beatenBy: ["Run commit", "46 Bear", "Penetration"],
    goodVsCoverages: ["Cover 4", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46"],
    tips: "Quick handoff and hit the hole. Low pad level wins."
  }
};

export default PLAY_TYPES;
