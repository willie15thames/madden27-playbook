// Madden 27 - Play Type Data with matchup intelligence
// Every play knows what it beats and what beats it

const PLAY_TYPES = {
  // ===== RUN PLAYS =====
  "Inside Zone": {
    type: "Run",
    subtype: "Zone Run",
    description: "Zone blocking scheme where the RB reads the blocks and cuts inside. The bread and butter of most offenses.",
    beats: ["Cover 0", "Cover 1", "Dime", "Dollar", "Quarter", "Nickel Wide", "Spread defenses"],
    beatenBy: ["3-4 Bear", "46 Normal", "Stuff the box", "Cover 3 Sky", "Run commit", "4-3 Under"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "Cover 1", "Tampa 2"],
    tips: "Read the Mike LB. If he flows, cut back. If the box is light, this is money."
  },
  "Outside Zone": {
    type: "Run",
    subtype: "Zone Run",
    description: "Zone stretch play to the outside. RB aims for the edge and can cut back if defenders over-pursue.",
    beats: ["Cover 0", "Nickel", "Dime", "Dollar", "Quarter", "Aggressive defenses"],
    beatenBy: ["Cover 3 Sky", "46 Normal", "Contain", "Speed edge defenders", "Run commit outside"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "Cover 1", "46"],
    tips: "Need fast RB. Cut back if the edge is sealed — huge play potential."
  },
  "HB Stretch": {
    type: "Run",
    subtype: "Zone Run",
    description: "Wide zone stretch that gets the RB to the edge quickly. The meta run in most Madden games.",
    beats: ["Cover 0", "Cover 4", "Nickel", "Dime", "Undersized defenses"],
    beatenBy: ["Contain", "Spread the line", "Cover 3 Sky", "46 Bear", "Speed on edge"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 6", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "One of the best runs in the game. Use against light boxes."
  },
  "Power O": {
    type: "Run",
    subtype: "Gap Run",
    description: "Power run with a pulling guard leading through the hole. Physical, downhill running play.",
    beats: ["Nickel", "Dime", "Dollar", "Quarter", "Light boxes", "Zone coverage"],
    beatenBy: ["Stuff the box", "3-4 Bear", "Goal Line D", "46 Bear", "Run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Follow the pulling guard. Great in short yardage and goal line."
  },
  "Counter": {
    type: "Run",
    subtype: "Gap Run",
    description: "Misdirection run play with the RB faking one way then taking the handoff the other direction with pulling linemen.",
    beats: ["Aggressive defenses", "User blitzes", "Man coverage", "Over-pursuit", "Cover 0"],
    beatenBy: ["Disciplined defenses", "Contain", "Zone defenses reading keys", "Spy"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 3", "Cover 4", "Zone coverages"],
    tips: "Great against aggressive defenses that over-commit to the initial fake."
  },
  "HB Dive": {
    type: "Run",
    subtype: "Gap Run",
    description: "Quick-hitting dive play straight up the middle. Gets 3-4 yards consistently.",
    beats: ["Nickel", "Dime", "Dollar", "Quarter", "Light boxes", "Spread defense"],
    beatenBy: ["Stuff the box", "3-4 Bear", "46", "Goal Line D", "DT with high block shed"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Reliable short yardage play. Use when you just need 2-3 yards."
  },
  "HB Toss": {
    type: "Run",
    subtype: "Outside Run",
    description: "Quick pitch to the outside. Gets the RB in space with blockers ahead.",
    beats: ["Cover 0 blitz", "Interior pressure", "Nickel", "Dime", "Dollar"],
    beatenBy: ["Contain", "Speed on edge", "Cover 3 Sky", "Outside run commit"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime", "Quarter"],
    badVsCoverages: ["Cover 3 Sky", "46", "Cover 1"],
    tips: "Need speed at RB. Great against interior blitzes — gets outside quickly."
  },
  "HB Draw": {
    type: "Run",
    subtype: "Draw",
    description: "Delayed handoff disguised as a pass play. QB drops back then hands off to the RB.",
    beats: ["Pass rush heavy", "Cover 3", "Cover 4", "Aggressive pass rush", "Blitzes"],
    beatenBy: ["Disciplined defense", "Spy", "Zone drops that read draw", "Quick LBs"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 0", "Cover 1", "Man coverage"],
    tips: "Perfect call against aggressive pass rushers. The DE rush opens up lanes."
  },
  "Read Option": {
    type: "Run",
    subtype: "Option",
    description: "QB reads the unblocked DE — hands off to RB or keeps it himself based on the read.",
    beats: ["Man coverage", "Cover 0", "Cover 1", "Edge containment", "Traditional defenses"],
    beatenBy: ["Spy", "Option responsibility defense", "Scrape exchange", "QB Contain"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain"],
    tips: "Need a mobile QB. Read the unblocked end — if he crashes, keep it. If he stays home, hand off."
  },
  "Power Read": {
    type: "Run",
    subtype: "Option",
    description: "Read option with power blocking. QB reads the end and either gives to the back on a sweep or keeps inside.",
    beats: ["Man coverage", "Cover 0", "Cover 1", "Aggressive edges"],
    beatenBy: ["Spy", "QB Contain", "Disciplined ends", "Scrape exchange"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Man coverages"],
    badVsCoverages: ["Spy", "QB Contain", "Cover 3 Sky"],
    tips: "Similar to read option but with gap blocking. The pulling guard leads the way."
  },
  "Jet Sweep": {
    type: "Run",
    subtype: "Outside Run",
    description: "Quick jet motion handoff to a WR running full speed across the formation. Speed play to the edge.",
    beats: ["Cover 3", "Cover 4", "Slow LBs", "Interior-focused defenses", "Late shifts"],
    beatenBy: ["Contain", "Speed on edge", "Man coverage on jet man", "Pre-snap adjustment"],
    goodVsCoverages: ["Cover 3", "Cover 4", "Cover 2 Zone"],
    badVsCoverages: ["Cover 1", "Man coverage", "Cover 3 Sky"],
    tips: "Need a fast WR. Great change-of-pace play that attacks the edge with speed."
  },
  "QB Sneak": {
    type: "Run",
    subtype: "Short Yardage",
    description: "QB pushes forward behind the center for short yardage. Nearly unstoppable in short yardage situations.",
    beats: ["Everything in short yardage", "Goal Line", "Spread defense at goal line"],
    beatenBy: ["DT with high block shed (sometimes)", "Perfectly timed user nose tackle"],
    goodVsCoverages: ["All coverages in short yardage"],
    badVsCoverages: [],
    tips: "The best short yardage play in Madden. Almost always gets 1 yard."
  },
  "FB Dive": {
    type: "Run",
    subtype: "Short Yardage",
    description: "Fullback takes the handoff and dives up the middle. Physical short yardage play.",
    beats: ["Light boxes", "Nickel", "Dime", "Spread defense at goal line"],
    beatenBy: ["Stuff the box", "Goal Line D", "46 Bear", "Heavy front"],
    goodVsCoverages: ["Cover 4", "Cover 2 Zone", "Dime"],
    badVsCoverages: ["Cover 0", "46", "Goal Line"],
    tips: "Short yardage specialist play. Need a good blocking FB."
  },
  "Tush Push": {
    type: "Run",
    subtype: "Short Yardage",
    description: "QB sneak with offensive linemen pushing the QB forward. Eagles signature play.",
    beats: ["Everything in 1-yard situations", "Goal Line D", "All alignments"],
    beatenBy: ["Very rarely stopped", "User DT with perfect timing"],
    goodVsCoverages: ["All coverages"],
    badVsCoverages: [],
    tips: "The most overpowered short yardage play. Almost impossible to stop."
  },

  // ===== PASS PLAYS =====
  "4 Verticals": {
    type: "Pass",
    subtype: "Deep Shot",
    description: "All receivers run vertical routes, stretching the defense deep. The ultimate deep shot play.",
    beats: ["Cover 2 Zone", "Cover 3", "Tampa 2", "Cover 6 (Cover 2 side)", "Man with slow CBs"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Cover 9", "Prevent", "Deep zones"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms", "Prevent"],
    tips: "Against Cover 2, hit the seam between the safeties. Against Cover 3, throw to the outside verticals."
  },
  "PA Crossers": {
    type: "Pass",
    subtype: "Play Action",
    description: "Play action with multiple crossing routes at different levels. One of the best plays in Madden.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Run-focused defense", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 2 Zone with user", "Zone drops reading PA", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone"],
    tips: "The GOAT play. Crossers beat man coverage and find zone windows. Read high to low."
  },
  "Mesh": {
    type: "Pass",
    subtype: "Concept",
    description: "Two receivers run shallow crossing routes in opposite directions, creating natural picks against man coverage.",
    beats: ["Cover 1", "Cover 0", "Cover 2 Man Under", "Cover 9", "All man coverage"],
    beatenBy: ["Cover 3 Match", "Pattern matching", "Zone coverage with user", "Cover 2 Zone"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 2 Man Under", "Cover 9", "Man coverages"],
    badVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 3 Match"],
    tips: "THE man coverage killer. The crossers create natural picks. Read the mesh point."
  },
  "Levels": {
    type: "Pass",
    subtype: "Concept",
    description: "Multiple receivers run routes at different depths on the same side, creating high-low reads for the QB.",
    beats: ["Cover 3", "Cover 1", "Cover 2 Zone", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Pattern matching zones", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "High-low read. If the defender drops, throw underneath. If he stays low, throw over."
  },
  "Flood": {
    type: "Pass",
    subtype: "Concept",
    description: "Three receivers flood one side of the field at three different levels — flat, intermediate, and deep.",
    beats: ["Cover 3", "Cover 1", "Tampa 2", "Any 2-defender side against 3 routes"],
    beatenBy: ["Cover 4", "Cover 6 (Cover 4 side)", "Pattern matching", "Brackets"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 6"],
    tips: "Overloads one side of the field. Someone is always open — read the flat defender."
  },
  "Smash": {
    type: "Pass",
    subtype: "Concept",
    description: "Two-route concept with a hitch underneath and a corner route over the top. Classic Cover 2 beater.",
    beats: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2", "Cover 6 (Cover 2 side)"],
    beatenBy: ["Cover 3", "Cover 4", "Cover 1 Robber", "Pattern matching"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2"],
    badVsCoverages: ["Cover 3", "Cover 4", "Cover 1"],
    tips: "If the corner drops (Cover 2), throw the hitch. If he stays flat, throw the corner route."
  },
  "Spot": {
    type: "Pass",
    subtype: "Concept",
    description: "Three-level concept with a flat, a sit/spot route, and a corner route. Creates a triangle read.",
    beats: ["Cover 3", "Cover 2 Zone", "Cover 1", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Quick pressure", "User LB"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Triangle read — read the flat defender. Flat opens if he drops, spot route opens if he stays."
  },
  "Stick": {
    type: "Pass",
    subtype: "Quick Game",
    description: "Quick-hitting concept with a stick route (6-yard out), flat route, and vertical route. Fast read.",
    beats: ["Cover 4", "Cover 3", "Blitzes", "Zone coverage", "Any coverage (quick throw)"],
    beatenBy: ["Cover 2 Zone with flat player", "Press man", "Pattern matching"],
    goodVsCoverages: ["Cover 4", "Cover 3", "Cover 6"],
    badVsCoverages: ["Cover 2 Zone", "Tampa 2"],
    tips: "Quick throw beats pressure. Read the flat defender — same as spot concept but faster."
  },
  "Curl Flat": {
    type: "Pass",
    subtype: "Concept",
    description: "Curl route with a flat route underneath. Classic two-man concept to beat Cover 3.",
    beats: ["Cover 3", "Cover 3 Sky", "Tampa 2", "Zone coverage"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Cover 3 Match", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 3 Sky", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 3 Match"],
    tips: "The original Cover 3 beater. Read the flat defender — curl if he goes flat, flat if he drops."
  },
  "Quick Slants": {
    type: "Pass",
    subtype: "Quick Game",
    description: "Quick slant routes that get the ball out fast. Beats man coverage and blitzes.",
    beats: ["Cover 0", "Cover 1", "Blitzes", "Man coverage", "Press coverage (if beaten)"],
    beatenBy: ["Cover 1 Robber", "Cover 3 Match", "Inside shade man", "User MLB"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Cover 4"],
    badVsCoverages: ["Cover 1 Robber", "Cover 3 Match", "Cover 2 Zone"],
    tips: "Quick hot route against blitzes. Gets the ball out in under 2 seconds."
  },
  "Drag Over": {
    type: "Pass",
    subtype: "Concept",
    description: "Shallow drag routes across the field. Beats zone coverage by finding windows between defenders.",
    beats: ["Cover 4", "Cover 3", "Cover 6", "Zone coverage", "Soft zones"],
    beatenBy: ["Man coverage", "Cover 1 Robber", "User LB in middle", "Pattern matching"],
    goodVsCoverages: ["Cover 4", "Cover 3", "Cover 6", "Zone coverages"],
    badVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    tips: "Works great against Cover 4 and zone coverages. Find the window between zone defenders."
  },
  "PA Boot Over": {
    type: "Pass",
    subtype: "Play Action",
    description: "Play action bootleg with the QB rolling out. Routes include a deep cross, flat, and corner.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Run-heavy D alignment", "Aggressive LBs"],
    beatenBy: ["Contain", "QB spy", "DE staying home", "Cover 4 with contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4 with contain", "Spy"],
    tips: "Roll out and read high-to-low. Deep cross is usually open against Cover 3."
  },
  "PA Read": {
    type: "Pass",
    subtype: "Play Action",
    description: "Play action with a simple read progression. Fakes the run then hits receivers running against flow.",
    beats: ["Cover 3", "Cover 1", "Run-focused D", "Aggressive LBs", "Man coverage"],
    beatenBy: ["Cover 4", "Zone drops that don't bite on PA", "Quick pressure"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Only works if the defense respects the run. Useless if they don't bite on play action."
  },
  "PA Post Shot": {
    type: "Pass",
    subtype: "Play Action",
    description: "Play action with a deep post route. Big play shot down the middle.",
    beats: ["Cover 2 Zone", "Cover 1", "Cover 3 (middle third)", "Tampa 2", "Aggressive LBs"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Deep middle safety", "Quick pressure"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 1", "Tampa 2"],
    badVsCoverages: ["Cover 4", "Cover 3", "Cover 6"],
    tips: "Deep middle shot. Best against Cover 2 when the safeties split wide."
  },
  "PA Deep Outs": {
    type: "Pass",
    subtype: "Play Action",
    description: "Play action with deep out/comeback routes. Attacks the sideline after faking the run.",
    beats: ["Cover 3", "Cover 1", "Cover 4 (sideline)", "Man coverage"],
    beatenBy: ["Cover 2 Zone", "Cover 6 (Cover 2 side)", "Flat defenders reading PA"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 4"],
    badVsCoverages: ["Cover 2 Zone", "Cover 6"],
    tips: "Attacks the sideline. Best thrown when the DB turns his hips inside."
  },
  "PA Scissors": {
    type: "Pass",
    subtype: "Play Action",
    description: "Play action with a scissors concept — post and corner routes crossing. Stretches the safety.",
    beats: ["Cover 2 Zone", "Cover 3", "Cover 1", "Single high safety"],
    beatenBy: ["Cover 4", "Cover 4 Palms", "Two-deep with pattern match"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 3", "Cover 1"],
    badVsCoverages: ["Cover 4", "Cover 4 Palms"],
    tips: "Read the safety — if he goes with the post, throw the corner. Vice versa."
  },
  "Corner Strike": {
    type: "Pass",
    subtype: "Deep Shot",
    description: "Deep corner route designed to attack the void between the CB and safety in Cover 2.",
    beats: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2", "Cover 6 (Cover 2 side)"],
    beatenBy: ["Cover 3", "Cover 4", "Cover 1", "Deep third corners"],
    goodVsCoverages: ["Cover 2 Zone", "Cover 2 Man Under", "Tampa 2"],
    badVsCoverages: ["Cover 3", "Cover 4", "Cover 1"],
    tips: "Classic Cover 2 beater. The corner route sits in the void between the flat CB and deep safety."
  },
  "HB Screen": {
    type: "Pass",
    subtype: "Screen",
    description: "Screen pass to the running back with linemen releasing to block. Neutralizes pass rush.",
    beats: ["Blitzes", "Cover 0", "Aggressive pass rush", "Man coverage", "Cover 1"],
    beatenBy: ["Zone coverage reading screen", "Contain", "Disciplined DE", "Cover 2 Zone flat player"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz coverages"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    tips: "Perfect blitz beater. Let the rush come, then dump it to the RB with blockers ahead."
  },
  "HB Wheel": {
    type: "Pass",
    subtype: "Concept",
    description: "Running back runs a wheel route up the sideline. Creates a mismatch with LB covering RB deep.",
    beats: ["Cover 1", "Cover 3", "Man coverage", "LB man coverage on RB"],
    beatenBy: ["Cover 4", "Cover 2 Zone", "Pattern matching", "Safety help over RB"],
    goodVsCoverages: ["Cover 1", "Cover 3", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 2 Zone", "Cover 4 Palms"],
    tips: "If a LB is matched on your RB, the wheel route is a guaranteed mismatch deep."
  },
  "Y Trail": {
    type: "Pass",
    subtype: "Concept",
    description: "TE runs a trail/delay route behind the crossers, settling in zone windows.",
    beats: ["Cover 3", "Cover 2 Zone", "Zone coverage", "Tampa 2"],
    beatenBy: ["Man coverage", "Cover 1 Robber", "User LB sitting in trail window"],
    goodVsCoverages: ["Cover 3", "Cover 2 Zone", "Tampa 2"],
    badVsCoverages: ["Cover 1", "Cover 0", "Man coverages"],
    tips: "The TE finds the soft spot behind the crossers. Great second read in zone coverage."
  },
  "RPO Read": {
    type: "Pass",
    subtype: "RPO",
    description: "Run-pass option where the QB reads a defender post-snap to decide whether to hand off or throw.",
    beats: ["Cover 3", "Cover 1", "Aggressive LBs", "Run-focused defense", "Man coverage"],
    beatenBy: ["Cover 4", "Disciplined defense", "DE spy", "QB contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3 Match", "Spy"],
    tips: "Read the unblocked defender. If he bites on the run, throw. If he drops, hand off."
  },
  "RPO Alert": {
    type: "Pass",
    subtype: "RPO",
    description: "RPO with an alert route — quick throw if the read defender drops into coverage.",
    beats: ["Cover 3", "Zone coverage", "Aggressive LBs", "Drop defenses"],
    beatenBy: ["Cover 4", "Contain", "Spy", "Pattern matching"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match", "Spy"],
    tips: "Quick alert throw when the LB drops. If he stays put, hand off the ball."
  },
  "RPO Peek": {
    type: "Pass",
    subtype: "RPO",
    description: "RPO with a peek route — QB peeks at the LB to decide run or pass.",
    beats: ["Cover 3", "Cover 1", "Man coverage", "Aggressive front"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Spy", "Contain"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Man coverages"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Peek at the LB — if he steps up, throw behind him. If he drops, hand off."
  },
  "Mesh Over": {
    type: "Pass",
    subtype: "Concept",
    description: "Mesh concept with an over route layered on top. Attacks both man and zone.",
    beats: ["Cover 1", "Cover 0", "Man coverage", "Cover 3", "Tampa 2"],
    beatenBy: ["Cover 4", "Cover 3 Match", "Quick pressure", "User LB"],
    goodVsCoverages: ["Cover 1", "Cover 0", "Man coverages", "Cover 3"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Mesh beats man, over route beats zone. Built-in answer for any coverage."
  },
  "Deep Post": {
    type: "Pass",
    subtype: "Deep Shot",
    description: "Deep post route straight up the middle. Attacks the deep middle of the field.",
    beats: ["Cover 2 Zone", "Cover 1", "Tampa 2", "Cover 6 (Cover 2 side)"],
    beatenBy: ["Cover 3", "Cover 4", "Deep middle safety", "Cover 1 with safety help"],
    goodVsCoverages: ["Cover 2 Zone", "Tampa 2", "Cover 6"],
    badVsCoverages: ["Cover 3", "Cover 4"],
    tips: "The ultimate Cover 2 killer. Split the safeties and throw up the seam."
  },
  "Screens": {
    type: "Pass",
    subtype: "Screen",
    description: "Generic screen pass — WR screen, tunnel screen, or slip screen.",
    beats: ["Blitzes", "Cover 0", "Cover 1", "Aggressive pass rush", "Man coverage"],
    beatenBy: ["Zone coverage", "Contain", "Flat defenders", "Cover 2 Zone", "Cover 3"],
    goodVsCoverages: ["Cover 0", "Cover 1", "Blitz heavy"],
    badVsCoverages: ["Cover 2 Zone", "Cover 3", "Tampa 2"],
    tips: "Call against blitzes. The rush lanes become blocking lanes for your linemen."
  },
  "Play Action": {
    type: "Pass",
    subtype: "Play Action",
    description: "Generic play action pass. Fakes the run to pull defenders up before throwing.",
    beats: ["Run-focused D", "Aggressive LBs", "Cover 3", "Cover 1", "Man coverage"],
    beatenBy: ["Cover 4", "Zones that don't bite", "Quick pressure before fake completes"],
    goodVsCoverages: ["Cover 3", "Cover 1", "Cover 2 Zone"],
    badVsCoverages: ["Cover 4", "Cover 3 Match"],
    tips: "Only effective if you've established the run. Useless if the defense is sitting in zone."
  }
};

export default PLAY_TYPES;
