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
  "4 Verticals": {
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
  }
};

export default PLAY_TYPES;
