// Madden 27 - Personnel Groupings & Formations Reference

const PERSONNEL_OFFENSE = {
  "10": { label: "10 Personnel", description: "1 RB, 0 TE, 4 WR", style: "Spread / Pass Heavy", strengths: ["Maximum receivers", "Light box for runs", "Speed mismatches"], weaknesses: ["No TE blocking", "Weak pass protection", "Can't run power"] },
  "11": { label: "11 Personnel", description: "1 RB, 1 TE, 3 WR", style: "Balanced / Most Common", strengths: ["Versatile", "Run and pass", "TE as blocker or receiver"], weaknesses: ["Predictable in some formations", "Limited power run"] },
  "12": { label: "12 Personnel", description: "1 RB, 2 TE, 2 WR", style: "Run Heavy / Play Action", strengths: ["Strong run blocking", "Play action effectiveness", "Mismatches with athletic TEs"], weaknesses: ["Fewer receivers", "Predictable run tendency"] },
  "13": { label: "13 Personnel", description: "1 RB, 3 TE, 1 WR", style: "Heavy Run / Goal Line", strengths: ["Maximum run blocking", "Short yardage dominance"], weaknesses: ["Very predictable", "Limited passing options"] },
  "21": { label: "21 Personnel", description: "2 RB (1 FB), 1 TE, 2 WR", style: "Power Run / I-Form", strengths: ["FB lead blocking", "Power run game", "PA effectiveness"], weaknesses: ["Less speed", "Fewer receivers"] },
  "22": { label: "22 Personnel", description: "2 RB (1 FB), 2 TE, 1 WR", style: "Heavy / Short Yardage", strengths: ["Maximum blockers", "Short yardage", "Goal line"], weaknesses: ["Minimal passing threat", "Very predictable"] },
  "20": { label: "20 Personnel", description: "2 RB, 0 TE, 3 WR", style: "Spread Run", strengths: ["Two back versatility", "Spread look with run threat"], weaknesses: ["No TE blocking"] },
  "00": { label: "00 Personnel (Empty)", description: "0 RB, 0-1 TE, 4-5 WR", style: "Maximum Pass", strengths: ["5 routes out", "Maximum receivers"], weaknesses: ["No run threat", "No pass protection help"] }
};

const PERSONNEL_DEFENSE = {
  "base_34": { label: "3-4 Base", description: "3 DL, 4 LB, 2 CB, 2 S", style: "Odd Front / Versatile", strengths: ["LB blitz versatility", "Disguise", "Run/Pass balance"], weaknesses: ["Only 3 DL rushing", "Slow vs spread"] },
  "base_43": { label: "4-3 Base", description: "4 DL, 3 LB, 2 CB, 2 S", style: "Even Front / Zone Heavy", strengths: ["4-man rush", "Strong vs run", "Zone coverage"], weaknesses: ["Less blitz versatility", "Only 3 LBs in coverage"] },
  "nickel": { label: "Nickel", description: "4 DL, 2 LB, 1 Nickel CB, 2 CB, 2 S", style: "Pass Defense / Sub Package", strengths: ["Extra DB vs spread", "Pass coverage", "Slot coverage"], weaknesses: ["Weaker vs run", "Only 2 LBs"] },
  "nickel_335": { label: "3-3-5 Nickel", description: "3 DL, 3 LB, 2 Nickel CB, 2 CB, 1 S", style: "Hybrid / Multiple", strengths: ["5 DBs", "LB blitz options", "Versatile"], weaknesses: ["Only 3 DL", "Run defense"] },
  "dime": { label: "Dime", description: "4 DL, 1 LB, 2 Nickel CB, 2 CB, 2 S", style: "Heavy Pass Defense", strengths: ["6 DBs", "Best pass coverage", "Multiple DB looks"], weaknesses: ["1 LB = no run defense", "3rd and long only"] },
  "dollar": { label: "Dollar", description: "4 DL, 0 LB, 3 Nickel CB, 2 CB, 2 S", style: "Maximum Pass Defense", strengths: ["7 DBs", "Ultimate pass coverage"], weaknesses: ["0 LBs = zero run defense", "Hail Mary only"] },
  "quarter": { label: "Quarter", description: "3 DL, 1 LB, 3 Nickel CB, 2 CB, 2 S", style: "Prevent / Deep Defense", strengths: ["7 DBs", "Maximum deep coverage"], weaknesses: ["3 DL, 1 LB = no run defense at all"] },
  "46": { label: "46", description: "4 DL, 3 LB, 2 CB, 2 S (SS up)", style: "Aggressive / Blitz", strengths: ["SS in box", "Run stopping", "Pressure"], weaknesses: ["Less coverage", "Weak to outside"] },
  "goalline_d": { label: "Goal Line D", description: "6 DL, 3 LB, 1 CB, 1 S", style: "Run Stuffing", strengths: ["Maximum run defense"], weaknesses: ["No pass coverage", "Inside 5-yard line only"] }
};

const FORMATIONS_OFFENSE = [
  "Singleback", "I Form", "Strong", "Strong I", "Weak", "Maryland I", "Split T",
  "Pistol", "Gun", "Wildcat", "Goal Line", "Hail Mary"
];

const FORMATIONS_DEFENSE = [
  "3-4 Odd", "3-4 Even", "4-3 Over", "4-3 Under", "4-3 Wide",
  "Nickel Normal", "Nickel 3-3-5", "Nickel 2-4-5", "Nickel Double A Gap", "Nickel Wide",
  "Dime Normal", "Dime 2-3-6", "Dime Flat",
  "Dollar Normal",
  "Quarter Normal", "Quarter 3-3-5",
  "46 Normal", "46 Bear", "46 Speed",
  "Big Nickel Over G",
  "Goal Line"
];

export { PERSONNEL_OFFENSE, PERSONNEL_DEFENSE, FORMATIONS_OFFENSE, FORMATIONS_DEFENSE };
