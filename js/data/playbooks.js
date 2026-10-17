// Madden 27 - ALL Offensive & Defensive Playbooks
// Scraped from huddle.gg Madden 27 playbook database on 2026-10-16
// 49 offensive books (32 team + 17 alternate)
// 37 defensive books (32 team + 5 alternate)

// ========== OFFENSIVE PLAYBOOKS ==========
const OFFENSIVE_PLAYBOOKS = [
  {
    id: "49ers",
    name: "San Francisco 49ers",
    style: "West Coast / Run Heavy",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Cheat HB Slash","Counter Y","Crack Toss","FK Flat Trail","Flat Y Leak","Flat Y Seam","HB Dive","HB Slash","Inside Zone Wk","Jet Sweep Wk","MTN HB Dive","MTN PA Deepx Over","MTN X Whip","PA Boot","PA Boot Cheat Slide Levels","PA Boot Corner Post","PA Boot Slide","PA Cheat Wheel Post","PA Counter","PA Cross","PA Deep Out","PA Jet Sweep","PA Post Curl Shot","Spacing","Verticals","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["Bench","Cntr Wk","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","PA Boot Corner Post","PA Boot Slide","PA Deep Cross","PA Drag Wheel","PA Slidey Screen","Spacing Switch","Stick","TE Angle","Zone Split Wk"],
        "Deuce Close Tilt": ["Bench","HB Dive","HB Stretch","HB Zone Wk","MTN Crossers HB Choice","MTN HB Misdirection Lt","MTN Jet Sweep","MTN PA Flood","MTN PA Jet Sweep","MTN PA Misdirection","MTN Zone Fake Jet","MTN Zone Split","MTN Zone Toss","PA Boot Slide","PA Deep Read","PA Sprint HB Flat","Spacing Switch","Stick"],
        "Doubles Y Off Flex": ["Choice Z-curl","Curls Y-seam","Dbl MTN HB Dive","Dbl MTN HB Wk Toss","Dbl MTN PA Cross H-flat","HB Pump Draw","HB Slip Screen","PA Boot Slide","PA Dig Deep Out","PA Draw Shot","PA Y-corner","RPO Alert Bubble","Salem Whip Under","Salem X Kitty","Shallow Y-hook","Smash Fork H-choice","Stick Spacing","Wide Zone"],
        "East Tight": ["HB Counter Wk","HB Plunge","HB Smash","HB Toss","PA Boot","PA Fl Stretch","TE Corners","TE Option","Trail"],
        "Tight Y Off": ["Bench Switch","Drive Flood","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Jet Sweep","Stick","Zone Fake Jet"],
        "U Off": ["HB Stretch","MTN HB Toss","MTN Inside Zone Split","MTN PA Deep Cross","PA Flood","Quick Slants"],
        "U Off Close": ["Curl Flats","Escort PA Crossers","Escort Power","Escort Zone Toss","HB Dive","Inside Zone Split","PA Deep Cross","PA Deep Read","PA Z Swirl"],
        "U Off Trips Cluster": ["HB Slip Screen","HB Stretch","HB Toss Lt","Inside Zone","MTN HB Draw","MTN HB Power","MTN Mesh HB Rail","MTN PA Draw","MTN PA Y Corner","MTN Zone Toss","PA Boot","PA Boot Slide","PA Dagger U Cross","PA Flood","Stick"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Mid Zone","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Rz PA Crossers","Wide Zone"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Duo","HB Stretch","HB Toss Weak","HB Zone Wk","MTN Corner Y-choice","MTN HB Stretch","MTN HB Stretch Wk","MTN Jet Sweep","MTN PA Boot Corner","MTN PA Boot Cross Y-corner","MTN PA Jet Sweep","MTN Slot Option","MTN Zone Fake Jet","PA Cross Country","Smash","Stick"],
        "Wing Pair": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","PA Boot Lt","PA Boot Rt","PA Sprint HB Flat","PA TE Seam","TE Drive","Verticals","Wide Zone Wk"],
        "Wing Slot": ["Counter U","Dragon Spacing","HB Dive","HB Duo","HB Power O","HB Stretch","HB Zone Wk","PA Boot Y Sail","PA Power O","PA Sprint HB Flat","PA TE Scissors","PA Y Screen"],
        "Wing Tight Nasty": ["Dig Y-wheel","Duo","HB Counter Str","HB Stretch","MTN HB Smash","MTN PA Boot Lt","MTN PA Y-copo","PA U-drag Wheel","Stick Spacing"]
      },
      "I Form": {
        "Close": ["95 Mike","Dbl Outs","HB Iso","HB Stretch","PA Boot Flow","PA Deep Cross Go","PA Deep Read","PA Spider Mesh","PA TE Leak","Power O","Stutter Gos","Zone Toss"],
        "Wing": ["HB Lead","HB Stretch","HB Zone Toss","MTN PA U Slide","MTN Power","MTN Zone","PA Boot Flow","Stretch Alert Lookie","X Slant"],
        "Y Off Close": ["Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Y-fork","Dbl MTN Zone Wk","HB Blast","HB Blunt Dive","HB Stretch","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Scissors","TE Option","Zone Split Lead"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","RPO Read Cheat Wheel Flat","Y Lead Read Option"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Read Option","Spot Lead Swing","Trail Speed Out","Y Cross"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Corner Divide","Drive Y Corner","HB Slip Screen","Inside Zone","Mesh Slot Out","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Speed Dig Out","Z Swirl Choice","Z Swirl In"],
        "Bunch X Nasty": ["Choice Shallow Dig","Counter Y","Dig Return","Double Outs","Drive Y Corner","Empty Flat Stick","Empty Spot Wheel","Empty Stick Spacing Switch","Inside Zone","Mesh Spot","MTN China Cross","MTN HB Shovel","MTN Mesh HB Sneak","MTN Return Spot","MTN Return Switch","MTN Return Trail Corner","MTN Slot Middle","MTN Smash Sluggo","MTN Speed Dig Under","RPO Zone Alert","Smash Return"],
        "Bunch Y  Flex": ["Branch Return","Choice Shallow Dig","Curls Y Swirl","Dagger","Flood","HB Choice","HB Power","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","MTN Crossers Y-whip","MTN Dagger Sit","MTN Dbl Post Reverse Dragon","MTN Drive Zig","MTN Inside Post","MTN Spacing Switch","RPO Alert Out","Spacing","Spacing Switch","Speed Dig Out","Swirl Hookn Go","Switch Mills","Verticals"],
        "Deuce Close": ["Bench Dig Curl","Inside Zone","Mesh Spot","MTN Return H-trail","MTN Return HB Toss","MTN Return Y-shake","MTN WR Corner","MTN Y Corner","MTN Y Option","Outside Zone","PA Deep Curls","PA Deep Over","RPO Peek Stick","Spacing Switch","Stick Switch"],
        "Doubles Flex Y Off Close": ["Counter Y","Escape","Flood H Post","HB Pump Draw","HB Scissors","Inside Zone","Jet Pass FK Zone","Mid Zone","MTN Angle Y Wheel","MTN Dagger Y In","MTN Dig Under","MTN HB Angle","MTN HB Out","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Empty Base Flex": ["Choice Stick Nod","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Redzone Up","Shockwr Option","Stick","Trail Shake","Verticals Under","WR Screen"],
        "Empty Bunch Tight": ["Bunch Trail","Clear Deep","In And Under","Mesh Cross","Mesh Spot","QB Draw","Quad Curls","Quick Slants","Shallow Drags","Spacing","Spot Stick","Wide Corners"],
        "Empty Strong Slots": ["Corner Pivot In","Hoss Juke","Jailbreak Slot Screen","Ohio Ernie","Option Stick Nod","Out Cross","QB Draw","Shock Slot Option","Verticals Under"],
        "Flex Y Off Close": ["Counter Y","Curl Ohio","Escape","Flood","HB Circle","HB Slip Screen","Hitch HB Rail","Inside Zone","Levels Mills","PA Post Shot","RPO Alert Out","TE Wheel"],
        "Split Close": ["Dbl Ins","Dig HB Rail","Double Swirl","FB Inside","HB Choice","HB Power O","HB Slip Screen","HB Wheel","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","Pivot Dig","Read Option","WR Corner"],
        "Split Twins Stack": ["Inside Zone","PA Spot","Power O","Read Option","Slot Cross","Smash Y Dig"],
        "Spread Dbl Flex": ["Corner Strike","Flanker Dig","HB Mid Draw","HB Slip Screen","HB Sweep","Inside Cross","Inside Zone","L Spot","MTN Curls H-sluggo","MTN Dbl Dig Swing","MTN Dbl Slants Wheel","MTN Fades H-choice","MTN FK Swing Mid Screen","MTN Flood H-wheel","PA Comebacks","PA Dig","Quick Slants","Read Option","RPO Alert Z Screen","Slot Outs","Y Shallow Cross"],
        "Tight Base Flex": ["Dragon Spacing","F Choice Spot","HB Off Tackle","HB Quick Base","HB Slip Screen","Inside Zone","MTN FK H-angle","MTN H-angle","MTN H-choice"],
        "Tight Slot Flip": ["HB Draw","HB Slip Screen","HB Sweep","Inside Zone","MTN HB Angle","MTN Smash Slot Choice","MTN Z Choice","PA Read","Sail"],
        "Tight Y Off": ["0 1 Trap","Duo","Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","MTN Mesh Spot","MTN Outside Zone","MTN Slash Wheel Cross","MTN Slot Choice","MTN Spot Y Quick","MTN Y-corner","PA Go Slot Cross","PA Slot Cross","Read Option","RPO Peek Slant","Stick","TE Corner","Zone Fake Jet"],
        "Trey Y  Flex": ["Dagger","HB Pump Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","MTN Empty Flood Switch","MTN Empty Slot Under","MTN Empty Vertical","Outside Zone","PA Crossers","PA Draw Choice","Read Option","RPO Alert Screen","Se Corner","Shockh Option","Verticals","WR Screen"],
        "Trips X Nasty": ["HB Mid Draw","HB Off Tackle","HB Slip Screen","Hi Lo Cross","Hi Lo Dig","Inside Zone","MTN Drag Sluggo","MTN HB Swing","MTN Slot Fades","MTN Slot Stick Nod","MTN Spot Y Corner","MTN Stick Wheel","PA X Cross Shot","Quick Fork Zig","Quick Short Post","Quick Unders","Slot Fade H Wheel","Snag Slot Digs","Switch HB Wheel","Verticals X Shallow","WR Smash"],
        "U Off Stack": ["Empty Hitch N Go","Empty Slot Under","Empty Y-choice Under","Inside Zone","MTN Double Under","MTN HB Punch","MTN PA Crossers","MTN PA Switch Flood","MTN PA Y-leak","MTN Read Option","Outside Zone","RPO Alert Out"],
        "Y Off Trio Close": ["0 1 Trap","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Bounce Dash Crosser","Bounce Inside Zone","Bounce PA Deep Out","Counter Y","Dash Flood","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","HB Pump Draw","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","RPO Zone Peek","Smash Return"],
        "Y Off Trips": ["Bounce Outside Zone","Bounce PA Deep Out","Bounce Shallow Smash","Curls","Duo","HB Draw","HB Slip Screen","Inside Zone","MTN Counter Y","MTN Curl N Go","MTN PA Smash","MTN Stick","MTN Stick N Nod","MTN Y Screen","Return Curls","Return PA Corner Strike","Return RPO Alert Flat","RPO Glance Post","RPO Read Y Flat","Slot 2 Buc","Verticals Y Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "bears",
    name: "Chicago Bears",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Ace Double Wing": ["Bench","Fake HB Zone QB Boot Lt","HB Counter Wk","HB Dive","HB Power O","HB Stretch","HB Zone Wk","MTN Duo","MTN PA F-flat","MTN Zone Toss","PA Boot Lt","PA Ctr Waggle","PA HB Wheel","PA TE Cross","Stick","TE Corners","TE Shake","Weak Toss"],
        "Bunch X Nasty": ["Counter Y","Jet Sweep Wk","MTN HB Dive","MTN PA Deepx Over","MTN X Whip","PA Counter HB Leak","PA Drag Wheel","PA Jet Sweep","PA X Out Cross","Spacing","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["0 1 Trap","Bench","Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","MTN Duo","MTN Zone Split","PA Boot Slide","PA Drag Wheel","PA Jet Sweep","PA Misdirection","PA MTN Spider Y Leak","PA X Post Cross","Spacing Switch","Stick","Zone Fake Jet","Zone Split Wk"],
        "East Tight": ["HB Counter Wk","HB Plunge","HB Smash","HB Toss","PA Boot","PA Fl Stretch","TE Corners","TE Option","Trail"],
        "Tight Doubles": ["Bingo Cross","HB Dive","HB Inside Zone","Jet Sweep Wk","MTN HB Duo","MTN HB Split Zone","MTN PA Boot Slide","PA Sprint HB Flat","PA Switch Replace","Shallow Cross","Under","Zone Fake Jet Wk"],
        "Tight Y Off Flex": ["0 1 Trap","Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "U Off Stack": ["Duo Wrap","HB Stretch","HB Wk Toss","HB Zone Alert Smoke","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","Smash"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","MTN PA Y Corner","MTN Power","MTN Zone Toss","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Duo","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Y Stick"],
        "Wing Tight Left": ["26 Duo","HB Dive","HB Power","Inside Zone","PA Boot Slide","PA Scissors","PA Sprint HB Flat","Stick","Wide Zone"]
      },
      "I Form": {
        "Wing": ["FB Dive","FB Fake HB Toss","HB Counter Wk","HB Power G","HB Power O","PA Power O","PA X Burst Cross","Post Shot","Zone Wk"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "I H Wing": ["Curls","F Trail","Fade","HB Cntr Wk","HB Dive","HB Duo","Inside Zone Wk","PA Power O","PA Sprint HB Flat","Power O","X Slant","Zone Wk"]
      },
      "Weak": {
        "Close": ["94 Will","Bench Switch","FB Power","HB Zone Wk","Mesh","PA Boot Lt","PA Boot Slide","PA Post Shot","Stick"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Strong Power","Verticals"],
        "Deuce Close": ["Bench","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","RPO Read Cheat Wheel Flat","Y Lead Read Option"]
      },
      "Gun": {
        "Bunch Open TE": ["Clearout Z Option","Dig Return","Fake Screen Verticals","Flood","HB Draw","HB Slip Screen","L Spot","MTN Mesh Spot","MTN RPO Read Snag","MTN Sprint Z Spot","RPO Alert Bubble","RPO Alert WR Screen","Same Side Zone","Sprint Double Out","Y Trail"],
        "Bunch Spread": ["Dig Return","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","Levels Dig","MTN Curl Flat Corner","MTN Slot Hitch","MTN Slot Out","MTN Slot Under","MTN Snag Under","MTN Y-shake","Outside Zone","PA Post"],
        "Bunch X Nasty": ["Corner Out Dig","Counter Y","Drive Y Corner","HB Base","Inside Zone","Mesh HB Sneak","Mesh Spot","MTN Clear HB Seam","MTN Corner Under","MTN HB Choice","MTN Outside Zone","MTN Return Mesh Flat","MTN Return Spot X-post","MTN Return Trail Corner","MTN Spot HB Under","MTN Y Corner Under","Smash Return","Spacing Switch","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Deuce Close": ["Bench Dig Curl","Chip Dig 7 Stop","Counter Y","Inside Zone","Mesh Spot","PA Post Cross","Poco X Dig","RPO Read Flat Wheel","Stick Switch"],
        "Double Stack": ["Curl Flat","Fake Screen Shot","HB Draw","HB Slip Screen","MTN Drive Slot Out","MTN Shallow Cross","MTN Slot Cross","RPO Alert Screen","RPO Alert Trap","RPO Read Fl Screen","Smash","Stack Out"],
        "Doubles HB Wk": ["Boomerang 0 1 Trap","Boomerang Slot Swing","Boomerang Y Delay","Curl Combo","Double Post","HB Base","HB Slip Screen","Inside Zone","PA Cross","PA Jailbreak Screen","PA Seams","Read Option","RPO Peek Slant","RPO Read Bubble","Sail Dig","Salem Y Corner","Shake HB Corner","X Dagger"],
        "Empty Base Trio": ["Curl Combo","Deep Attack","Divide Double In","Drag Slot Fade","Drive Switch Seams","Hoss Juke","QB Draw","Salem Smash","Shock Slot Option","Slants","Slot Fade Cross","Slot Shake","Stick Nod","Verticals H Option","X Mid Screen"],
        "Empty Chips Nasty": ["Dagger","Dagger Deep Curl","Deep Post Out","Dig Stick","Double 7 Stop","Double Swirl","Out X Dig","Post Cross","QB Zone","Slot Sail","X Cross","X Whip In"],
        "Empty Chips Quads": ["Cheat FK Screen Cross","Cheat Jailbreak WR Screen","Cheat Texas X Sluggo","Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Inside Zone","Cheat Slash Wheel In","Double Slant","Escape","HB Scissors","Inside Zone","Jet Touch Pass","Mesh Spot","PA Jet Sweep","PA Snag","Read Option","RPO Alert Out","RPO Peek Spot","RPO Zone Peek","Wheel Switch","Y-sail","Zone Fake Jet"],
        "Slot Right": ["Counter Y","Fake Screen Wheel","HB Iso","HB Slip Screen","MTN PA Slide","MTN Y Lead Read Opt","MTN Zone Split","PA Bubble","PA Deep Choice","PA Se Screen","PA Switch Choice","PA Wheel","QB Slot Option","Read Option","RPO Alert Bubble","RPO Glance Post","RPO Read WR Screen","RPO Read Y Flat","Slants","Speed Option","Verticals"],
        "Spread": ["Gt Read Option","H Wheel","HB Draw","HB Slip Screen","Inside Zone","L Spot","Mesh Post","PA Gt Z Tunnel","PA H Cross","PA Slot Cross","PA Slot Slide","RPO Read Slot Slide","Smash HB Seam","Whip HB Rail","Y Shallow Cross"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","Drive Stutter Flat","Empty MTN Mesh Rail","Empty MTN Whip Flood","Empty MTN Z Spot","FK Drive Stutter","HB Draw","HB Slip Screen","Inside Zone","Mesh Clearout","Mesh Spot","Verticals HB Burst"],
        "Tight Y Off Wk": ["Dagger H-swing","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","Mesh Whips","Outside Zone","PA Corner","Pivot Return","RPO Zone Alert Omaha","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Smash Hammer","Smash Y Double","Spot Y Middle","Tackle Trap","Y Lead Read Option"],
        "Trips": ["Curls","Fade Stops","Four Verticals","HB Slip Screen","Inside Zone","RPO Alert Bubble","RPO Peek Stick","Slant Smash","Stick Wheel"],
        "Trips HB Wk": ["Curls","Deep Stick","Drive","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Switch","Inside Zone","Mesh Spot","Middle Slam","Ohio Sail","PA WR In","Quick Slants","Read Option","RPO Alert Bubble","Scissors","Shockh Option","Wrmid Screen"],
        "Trips TE Flex": ["Dagger","Double In Sail","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","MTN Forkh Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","PA Fork","PA Shot Crossers","Stick","TE In","Verticals","Wheel","Y Out N Up"],
        "Trips TE Offset Wk": ["Bounce PA Bubble Flood","Bounce Read Option","Bounce Shallow Cross","Fake Screen Wheel","Flood Divide","HB Power","HB Slip Screen","Inside Zone","Middle Slant","Outside Zone","PA Flood","PA Verts Shot","Return Sprint Comeback","Return Sprint Spot","Return Sprint TE Screen","RPO Peek Slant","RPO Read Bubble","RPO Read WR Screen","Rz Rub Slot Wheel","Switch Dagger","Verticals"],
        "Wing Flex Offset Wk": ["Four Verticals","HB Power","HB Scissors","HB Slip Screen","Hitch Corners","Inside Zone","Inside Zone Split","MTN PA FK Screen Scissors","MTN RPO Alert Bubble","MTN RPO Buck Peek Slant","PA Dagger","PA Jailbreak Screen","Posts","Read Option","RPO Peek Slant","Seams Z-under","Slant Stick","Smash Drive"],
        "Wing Slot Offset": ["Dragon Spacing","Drive","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Mesh Spot","Outside Zone","PA Double Post","Read Option","Sft MTN Counter Y","Sft MTN Gt Counter","Sft MTN HB Toss","Sft MTN Inside Zone Split","Sft MTN PA Slide","Sft MTN PA Slot Corner","Smash"],
        "Wing Tight Nasty": ["Bench","Bench Swap","HB Punch","Inside Zone","Mesh Spot","Read Option"],
        "Y Off Trio Wk": ["Corner Strike","Cross","Dbl MTN Stack Poco","Dbl MTN Stack Salem Y-out","Dbl MTN Stack Shaken Up","Deep Out","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","In Go","Inside Zone","MTN Outside Zone","MTN PA Deep Over","MTN Smash Go","Outs","PA Post Dig Shot","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Shockh Option","Stick","Stick N Up"],
        "Y Off Trips": ["Curls","Four Verticals","HB Direct Snap","HB Powerrt","HB Slip Screen","Inside Zone","MTN Stick","MTN Stick N Nod","MTN Y Screen","PA Y Flood","Read Option","RPO Counter Peek","RPO Read Y Flat","Sprint Flood","Stick"],
        "Y Off Trips Wk": ["22 Z In","Boomerang Cross Post","Boomerang PA Portland","Boomerang Y Lead Option","Dig Cross","Fade Stops","Four Verticals","HB Slip Screen","Inside Zone","Inside Zone Split","PA Slide","Quick Fork Zig","Quick Short Post","Quick Unders","Shallow Sail","Shockh Option","Slants","Slot 2 Buc","Stick","Strong Flood","Tackle Trap"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "bengals",
    name: "Cincinnati Bengals",
    style: "West Coast / Spread",
    formations: {
      "Singleback": {
        "Deuce Close": ["Bench","Corner Stops","Flood Trail","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","PA Boot Slide","PA Post Dig","PA Short Crossers","PA Slidey Screen","Spacing Switch"],
        "Tight Y Off": ["Drive Flood","HB Stretch","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Deep Out","PA Jet Sweep","PA Leak","PA Post Dig","Stick","Zone Fake Jet"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Dive","HB Stretch","HB Zone Wk","MTN Jet Sweep","MTN PA Jet Sweep","MTN Zone Fake Jet","PA Cross Country","PA Cross Switch","Smash","Stick"],
        "Wing Pair": ["0 1 Trap","Dragon Spacing","HB Counter Wk","HB Dive Alert Smoke","HB Duo","HB Sweep","MTN Counter Str","MTN HB Plunge","MTN Spot Heavy","PA Sprint HB Flat","PA X Burst Heavy","Power O","Stretch Alert Lookie","Verticals","Y Stick Heavy"],
        "Wing Tight Z": ["Curl Flat Seam","Drive","HB Dive","HB Duo","HB Mid Zone","HB Smash","Inside Zone","PA Boot Lt","PA Sprint HB Flat","PA Y-drag Wheel","TE Attack","Y Stick"]
      },
      "I Form": {
        "Wing": ["FB Dive","FB Fake HB Toss","HB Lead","HB Stretch","HB Zone Toss","MTN PA U Slide","MTN Power","MTN Zone","PA Boot Flow","Stretch Alert Lookie","X Fade","X Slant"]
      },
      "Gun": {
        "Box": ["Deep Curls","Deep Fork","Fl Drive","HB Screen","Inside Zone","PA Read","Quads Jailbreak Screen","Quads RPO Alert QB Draw","Quads Switch Seam","Slants Flat","Slot Trail","WR Cross"],
        "Bunch Offset": ["Bench Pivot","Bunch Drive","Choice Shallow Dig","Corner Out Dig","Counter Y","Dig Return","Flood","Inside Zone Split","L Spot","PA Dig Fork","Smash Return","Spacing Switch","Speed Dig","Verts HB Under","Z Spot N Go"],
        "Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","MTN Spot","MTN Verticals","MTN WR Swing","QB Draw","Spacing","Spot"],
        "Bunch Str Nasty": ["Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","MTN China Wheel","MTN Curls","MTN Trail Fork","PA Cross","PA Double Post","Pin Pull Toss","RPO Zone Peek","Y Flat Quick","Y Trail","Z Mesh Quick","Z Spot Quick"],
        "Bunch Trio Open": ["Dagger Swap X-slant","Drive","Fake Screen Verticals","Flood Swap","Four Verticals","HB Cross Screen","Inside Zone","L Spot","PA Choice Vert Comebacks","PA Fake Screen Verts","RPO Alert WR Screen","Y Trail"],
        "Bunch Y  Trips": ["HB Base","HB Draw","HB Slip Screen","MTN China X-post","MTN Fly HB Go","MTN Return Corner Portland","MTN Return Mesh Spot Rail","MTN Return Whip Crossers","MTN Smash Slot Dig","PA Mills X-corner","Slot Slant","Stick Spacing Switch"],
        "Deuce Close": ["0 1 Trap","Bench","Bench Dig Curl","Corner Gos Flat","Inside Zone","Mesh Spot","MTN PA Slide","MTN Return HB Toss","MTN Return Trail","MTN Return Y-shake","MTN RPO Read Stick","MTN Stick","MTN WR Corner","MTN Y Option","MTN Zone Split","PA Deep Curls","PA Post Cross","RPO Alert Omaha"],
        "Doubles": ["Corner Strike","Curl Combo","Dbl Outs","Four Verticals","HB Mid Draw","HB Scissors","HB Slip Screen","Inside Seams","Inside Zone","Mid Zone","PA Comebacks","PA Dagger","PA Zone Read","Read Option","RPO Peek Slant","Salem Z-fade","Same Side Zone","Shark HB Wheel","Skinny Posts","Slant Flat","Smash Post","Spot N Go","Y Shallow Cross","Y-sail"],
        "Doubles Clamp Stack": ["Counter Y","Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Same Side Zone","Spot Choice","Texas Smash","Texas Y-stutter Wheel","Y Ohio Return"],
        "Doubles HB Wk": ["Boomerang 0 1 Trap","Boomerang Slot Swing","Boomerang Y Delay","Corner Strike","Curl Combo","Double Slants","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Inside Zone","MTN Buck Sweep","MTN HB Base","MTN PA Cross","PA Y-cross","Pin Pull Sweep","Read Option","RPO Peek Slant","Salem Z-fade","Sprint Slot Out","X Dagger"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Empty Bunch Wide": ["Deep Flood","Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","Post Corner Read","QB Draw","RPO Q Screen Draw","Spacing Switch","Stutter Wheel","Z Spot N Go","Zl Spot Smash"],
        "Empty Chips": ["Corner Strike","Dagger","Deep Post Out","Post Cross","Slot Sail","TE Screen"],
        "Empty HB Wide": ["Curl Combo","Dbl Dig","Double Ins","Hoss Y Juke","Jailbreak Slot Screen","Quick Slants","Redzone Up","Seams Y Corner","Shockwr Option","Stick","Stick N Nod","Under Seams"],
        "Empty Trips Speed": ["Deep Cross","Double In","Flanker Under","Hoss Y Juke","Jailbreak Slot Screen","Levels","MTN FK Screen","MTN WR Screen","MTN Wrangle","QB Draw","Redzone Up","Shockwr Option","Trail Shake","Whip Unders","Y Corner"],
        "Normal Y Off Wk": ["Close MTN PA Slide","Close MTN Z Under","Close Mtny Read Option","Counter Bash","Curl Combo","Fork H-choice","HB Slip Screen","Inside Zone","Mid Zone","MTN Inside Zone","MTN PA Flood HB Leak","MTN Slot Fade","MTN Y Slot Cross","MTN Y Switch Slants","MTN Ywr Screen","PA Slide","PA Slot Cross","X Dagger"],
        "Split Slot": ["46 Y Cross","689 Hook","Double Ins","Flood","HB Gut","HB Slip Screen","Mesh Post Wheel","PA HB Wheel","Power Read","RPO Peek Slant","Shovel Option","Slants"],
        "Split Y Off": ["Backs Cross","Corner Strike","H Choice","HB Inside","HB Slip Screen","MTN H Angle","MTN H Angle N Out","MTN H Sneak","Outside Zone","PA HB Sneak","Wheel Trail","Y Curl"],
        "Spread Y  Flex": ["Corner Strike","Curl Flats","Double Slants","Drive","Four Verticals","HB Draw","HB Quick Base","HB Slip Screen","Hitch Seam","RPO Peek Slant","Slot Outs","Stick Double Slant","WR Under","X Follow","Y-sail"],
        "Spread Y  Slot Wk": ["HB Base","HB Mid Draw","HB Scissors","HB Slip Screen","Hitch Seam","Inside Zone","MTN Dbl Pass HB Screen","MTN FK Dbl Pass","MTN In N Up","PA Dagger","Read Option","RPO Peek Slant","Smash Corners","WR Under","X Dagger"],
        "Tight Slots": ["Bench","Drive Switch","Drive Trail","HB Quick Base","Mesh","MTN Bench Swap","MTN Inside Zone","MTN PA Slide","Out N Ups","PA Shot Post","Stick","WR Corners"],
        "Tight Slots HB Wk": ["Bench","Bench Swirl","Flood","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mesh Spot","Post Wheel Drag","Read Option","RPO Peek Slant","Scissors","Stick Switch","X Dig","X Out"],
        "Tight Y Off": ["Cheat Outside Zone","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","MTN Mesh Spot","MTN Slot Choice","MTN Y-corner","PA Go Slot Cross","PA Jailbreak Screen","PA Slot Cross","RPO Alert Out","RPO Peek Slant Bubble"],
        "Tight Y Off Wk": ["0 1 Trap","Bench Dagger","Bench Hammer","Corner Strike","Duo","Fork Z-dig","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","Pivot Dig","RPO Zone Alert Omaha","Smash Y Pivot","Spot Y Middle","WR Under"],
        "Trey Open": ["Dagger Deep Curl","Dbl Ins","Dig N Go","Four Verticals","Gl Rub Under","HB Slip Screen","Inside Zone","Levels Switch","Mesh","Mesh Rewind","Mid Zone","PA Read","PA WR In","Salem","Shockh Option","Slot Drive","Sluggo Seam","Stick","Strong Flood","Under","Y Corner"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Stick","Empty Vertical","Fake Screen Wheel","HB Draw","HB Slip Screen","Inside Zone","Levels Y Corner","Outside Zone","PA Crossers","PA Deep Over","Post Y Dig","RPO Alert Screen","Se Corner","Shockh Option","Verticals","WR Cross"],
        "U Off Trips Wk": ["Dagger Sit","HB Power","HB Pump Draw","Inside Zone","Levels Out","MTN Fade Smash","MTN Stick","MTN Verticals","PA Crossers","Read Option","RPO Alert Bubble","Same Side Zone","Smash","Spot Quads","Sprint Smash"],
        "Wing HB Wk Close": ["Curl Combo","Dash Flood","HB Base","HB Counter U","Mesh Spot","Outside Zone","PA Cross","PA Y Over","Spacing"],
        "Wing Slot Offset": ["Dragon Spacing","Drive","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","L Close PA Flood","L Close Toss","Mesh Spot","Ohio Spacing","Outside Zone","PA Dig","PA Double Post","Read Option","Same Side Zone","Sft MTN Gt Counter","Sft MTN Inside Zone Split","Sft MTN PA Slide","Smash","Z Close Duo"],
        "Wing Trips Wk Nasty": ["All Go HB Choice","HB Base","Inside Zone Split","Outside Zone","PA Crossers","PA Slide","Shallow Cross Smash","Shuffle Shock HB Choice Go","Shuffle Smash Y Shake","Shuffle Wheely Drag","Stick","Stick N Nod","Y MTN Bench Ins","Y MTN Drive","Y MTN Flood"],
        "Wing Trips Wk Nasty Goose": ["All Curls","Cross X Burst","Curl Flat","Dash Corner Up","Dash Flood","Dash Switch Curls","Drive Slot Wheel","Flood","Four Verticals","Mesh Y Wheel","Quick Fork Zig","Quick Short Post","Quick Unders","Slants X-go","Slot Cross","Stick","WR Mid Screen","X Iso Poco"],
        "Y Off Trio Close Wk": ["Dash Flood","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Sprint Stick","Flood","HB Power O","HB Slip Screen","MTN Duo","MTN Fork Dagger","MTN Inside Zone Split","MTN Mesh Flood","MTN Mesh Z Rail","MTN Out Deep Corner","MTN PA Cross Switch","MTN PA X Over","MTN RPO Alert Swing","MTN Slot Choice","MTN X-dig Slot Corner","MTN Y-corner Z-choice","Smash Return","Snag HB Flat"],
        "Y Trips Wk": ["Clearout","Deep In","Four Verticals","Goalline Fade","HB Mid Draw","HB Mid Zone","HB Slip Screen","Inside Zone","MTN PA Smash Fork","MTN RPO Base Alert Smash","MTN Smash HB Angle","PA Read","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Base Alert Lookie","Rz Mesh Crossers","Shockh Option","Slants","Slot 2 Buc","Slot Cross","Stick N Nod","Under","Y Corner"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "bills",
    name: "Buffalo Bills",
    style: "Spread / Pass Heavy",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","PA Draw Shot","PA Jet Sweep","Spacing","Stretch Alert Bubble","Zone Fake Jet"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Dive","HB Slam","Inside Zone Split","PA Boot Slide","Stick","Switch","Switch X Comeback"],
        "Toad X Nasty": ["HB Counter","HB Dive","HB Power O","MTN Double Outs","MTN HB Zone Wk","MTN PA Boot Insert Cross","MTN PA Z Slide","MTN Y Z-choice","MTN Zone Alert","PA Counter","PA Post Dig","PA Sprint HB Flat","Spacing","Verticals","Y-trail X-cross"],
        "U Off Stack": ["Duo Wrap","HB Counter Str","HB Stretch","HB Wk Toss","HB Zone Alert Smoke","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","Smash"],
        "Wing": ["Close PA Cross","Close PA Post","Close Zone Strg","Curl Combo","HB Duo","HB Mid Zone","HB Stretch Alert Smoke","MTN H Zone Wk","MTN HB Toss Crack","MTN PA FK Slide","MTN PA Poco Slide","MTN Spacing","MTN Z Spot","PA Boot Lt","PA TE Flood","TE Attack","Y Stick","Zone Split Alert Lookie"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Toss FK Reverse","MTN Corndog Mesh","MTN Corndog Toss","MTN Corndog Trail","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA FK Toss Wheel","PA TE Flood","PA Y-drag Wheel","Pitch WR Reverse","Rz PA Crossers","Stick X-dig","Wide Zone"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","MTN Counter Str","MTN HB Plunge","MTN Spacing","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","Spacing","TE Attack","TE Drive","Wide Zone Wk","Y Stick"],
        "Wing Slot": ["Dragon Spacing","Four Verticals","HB Dive","HB Duo","HB Misdirection","Inside Cross","Inside Zone Split","Jet 6 Drive Wheel","MTN Duo Wrap","MTN PA Z Slide","MTN Wide Zone Wk","PA Boot Lt","PA Boot TE Leak","PA Fl Dive","PA Fork Y-dig","X Curl","Y Stick","Zone Alert Bubble"]
      },
      "I Form": {
        "Pro": ["94 Will","Alert Z Lookie","Curls","FB Dive Fake HB","FB Fake HB Flip","HB Counter Str","HB Duo","Iso","PA Boot","PA Comeback Slide","PA Power O","PA WR In","PA X Dig","Power O","Quick Slants","Stretch Alert X Smoke","Texas","X Post"],
        "Y Off Close": ["Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"],
        "Z Close": ["Counter Weak","End Around","Fake End Around","Flanker Drive","HB Dive","HB Duo Alert X Lookie","PA Post Dig","PA Power O","PA Sail","PA Sprint HB Flat","PA WR In","Slant Spacing"]
      },
      "Pistol": {
        "Open Flex Close": ["HB Dive","Inside Zone Wk","L Spot","MTN Counter Y","MTN PA Portland Wheel","MTN Zone Split","PA Boot","PA Pin Deep","X Seam"],
        "Strong Slot Close": ["F Lead Read Option","HB Counter","HB Dive","HB Stretch Alert Dragon","Mills","PA Deep In","Re"]
      },
      "Gun": {
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Bunch Levels","HB Draw","HB Slip Screen","Inside Cross","Inside Zone","Mesh","Mills Slot Option","QB Wrap","Read Option","RPO Alert Bubble","Spacing","TE Corner"],
        "Bunch Y Nasty": ["Choice Shallow Dig","Counter Y","Inside Zone","Mesh HB Sneak","MTN China Cross","MTN HB Choice","MTN Outside Zone","MTN Smash Sluggo","MTN Speed Dig Under","MTN Spot HB Under","PA Cross X Whip","RPO Zone Alert","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Bunch Y  Trips": ["HB Base","HB Draw","HB Slip Screen","MTN China X-post","MTN Fly HB Go","MTN Return Corner Portland","MTN Return Mesh Spot Rail","MTN Return Whip Crossers","MTN Smash Slot Dig","PA Mills X-corner","Slot Slant","Stick Spacing Switch"],
        "Cluster HB Str": ["45 Quick Base","Flanker Drive","HB Slip Screen","L Spot","Mesh Spot","MTN Cross Switch","MTN HB Draw","MTN Mesh","MTN Mesh Post","MTN Mesh Rewind","MTN Slot Screen","PA Read","Post Curls","Post Dig","Read Option","Spacing","Spot Lead Swing","Verticals"],
        "Doubles HB Wk": ["Boomerang 0 1 Trap","Boomerang Slot Swing","Boomerang Y Delay","Corner Strike","Curl Combo","Double Slants","Four Verticals","HB Base","HB Cross Screen","HB Mid Draw","HB Slip Screen","Inside Zone","PA Y-cross","Pin Pull Sweep","Re","Read Option"],
        "Doubles Z Close Wk": ["Dagger Z Comeback","Deep Post Switch","Double Post","HB Base","HB Slip Screen","Inside Zone","MTN Curl Combo","MTN FK Screen Wheel","MTN Inside Zone","MTN PA X Spot","MTN Switch Wheel","MTN Z Spot","PA Jailbreak Screen","Redzone Fork","RPO Read Bubble"],
        "Empty Bunch": ["Curl Flats","Divide Wheel","L Spot","QB Draw","Spacing","Trail","Verticals","Y Curl","Z Spot N Go"],
        "Empty Chips": ["Corner Strike","Curl Flat","Dagger","Deep Post Out","Flood","Post Cross","QB Zone","Slot Sail","TE Screen"],
        "Empty Y Slot": ["Bubble Screen","Curl Flats","Double Pivot","Flood Switch","Four Verticals","Hitches","Inside Smash","QB Blast","QB Draw","Shallow Cross","Smash","Stick","Stick N Nod","WR Dbl Screen","Wrmid Screen"],
        "Normal Y Off": ["Curl Combo","Dbl Dig","Double Slants","Exit RPO Alert Screen","Exit Slot Option","Exit Switch Out","Fake Jet HB Seam","Fake Jet Pass Power","Four Verticals","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","MTN Curls","MTN HB Off Tackle","MTN PA Read","MTN PA Verticals","MTN Scissors","MTN Y Lead Read Option","Orbit PA Curls","Orbit PA Y Screen","Orbit RPO Alert Swing","RPO Peek Slant","Stick Slot Option"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Slash Wheel In","Cheat TE Angle","Double Slant","Escape","FK Jet Y Wheel","Inside Zone","Jet Touch Pass","Mesh Spot","MTN HB Swing","MTN Snag Curls","MTN TE Middle Screen","Power Read","Read Option","RPO Alert Out","RPO Glance Post","Y-sail","Zone Fake Jet"],
        "Split WR Backfield": ["Dig WR Option","HB Power O","Inside Zone","Option Y Out","PA Slide","Redzone Corner","Slip Screen Lt","Snag Z Spot","Verts WR Seam"],
        "Split Y Off": ["Backs Cross","Corner Strike","H Choice","HB Inside","HB Slip Screen","MTN H Angle","MTN H Angle N Out","MTN H Sneak","MTN Lead Swing","MTN Lead Swing Spacing","MTN Mesh Rail","MTN PA HB Seam","MTN Split Lead Zone","MTN Triple Option Lt","Outside Zone","PA HB Sneak","PA Snag HB Wheel","Read Option","RPO Zone Peek","Wheel Trail","Y Curl"],
        "Spread Y  Flex": ["Angle Y Sail","HB Draw","HB Slip Screen","Inside Zone","MTN Drive","MTN FK Screen Wheel","MTN Fl Screen","MTN HB Cross Screen","MTN Out H-angle","MTN Replace","MTN Shallow HB Angle","MTN Slot Flags","MTN Sluggo Replace","PA Seams","QB Zone","RPO Alert Screen","Spot N Go","Y-option"],
        "Tight": ["Bench","Drive Corner","HB Draw","HB Quick Base","Mesh","Mesh Spot","MTN Drive Sluggo","MTN Slant Whip In","MTN Smash Y-shake","PA Deep Post","Read Option","Slot Corners","Slot Stick","Verticals HB Burst","Wheel Inside Curl"],
        "Trey Open HB Str": ["Dbl Ins","Drive Post","Four Verticals","H MTN Mesh","H MTN Mesh Post","H MTN Mesh Wheel","HB Mid Draw","HB Slip Screen","Inside Zone","Levels Switch","MTN PA HB Slide","MTN Slot Mid Screen","MTN Spot Y Corner","MTN Stick Wheel","MTN WR Choice","MTN WR Off Tackle","QB Blast","QB Sweep","Read Option","RPO Peek Bubble","RPO Peek Hitch","Scissors","Scissors Z Spot","Shock Y Cross","Short Cross","Slot Fade","Slot Screen","Spot Seam","Stick","Zl Under Seams"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Slot Under","Empty Stick","HB Draw","HB Slip Screen","Inside Zone","Levels Y Corner","Outside Zone","PA Crossers","Post Y Dig","Read Option","RPO Alert Screen","RPO Zoney Peek","Se Corner","Shockh Option","Verticals","Whips HB Wheel"],
        "Trips HB Wk": ["Choice Zig","Close Stick Flat","Close X Cross","Closex Fade","Flood Switch","HB Base","HB Mid Draw","HB Slip Screen","Middle Clear","MTN Shock HB Option","MTN Slot Cross","MTN Slot Curls","PA WR In","Quick Slants","Read Option","Stick","Verticals","Wrdiag"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Y Off Trio Wk": ["Comebacks","Dbl MTN Stack Poco","Dbl MTN Stack Salem Y-out","Dbl MTN Stack Shaken Up","Flood Post","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mills","MTN Outside Zone","MTN PA Deep Over","MTN Smash Go","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Shockh Option","Slants","Slot 2 Buc","Slot Cross"],
        "Y Off Trips Wk": ["Bounce Inside Zone","Bounce PA Post Curls","Bounce Slot Cross","Counter Y","Four Verticals","HB Draw","HB Slip Screen","Inside Zone Split","MTN Curls","MTN Fade Dagger","MTN Slot Whip In","PA Slide","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Alert Split Bubble","Slants","Slot 2 Buc","Slot Fade","Stick","Strong Flood","Tackle Trap","Y Lead Read Option","Z Under"],
        "Y Off X Close": ["5 6 Trap","Cross Slot Post","Curl Flat","Drag Wheel","Go Dbl Post","HB Mid Draw","HB Power","HB Screen","Inside Zone","Mesh Y Out","MTN Corners","MTN HB Corner","MTN Y Poco","PA Cross","PA Fork","Scat","Slot Out","TE Whip","Wheel Mesh","Whip Dig","Y-option Wheel"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "broncos",
    name: "Denver Broncos",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","PA Draw Shot","PA Jet Sweep","Shift Duo","Shift HB Sweep","Shift PA Duo Crossers","Spacing","Stretch Alert Bubble","Zone Fake Jet"],
        "Bunch X Nasty": ["Counter Y","Jet Sweep Wk","MTN HB Dive","MTN PA Deepx Over","MTN X Whip","PA Counter HB Leak","PA Drag Wheel","PA Jet Sweep","PA X Out Cross","Spacing","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["0 1 Trap","HB Dive","Inside Zone Split","Motion Power","MTN HB Stretch","PA Boot Slide","PA Motion Flood","PA Rz Crossers","PA Sprint Slide"],
        "Doubles Y Off": ["Counter Y","HB Dive","HB Slip Screen","Jet HB Trap","Jet PA Y Screen","Jet Paboot","Jet Sweep","PA Jet Sweep Scissors","PA Jet Sweep X Out"],
        "U Off Trio": ["HB Counter Str","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","PA Flood"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Pitch WR Reverse"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Dive","HB Duo","HB Stretch","HB Zone Wk","MTN Jet Sweep","MTN PA Jet Sweep","MTN Zone Fake Jet","PA Cross Country","Smash","Stick"],
        "Wing Pair": ["HB Dive","HB Duo","HB Inside Zone","HB Stretch","Jet 6 Drive","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","Y Stick"],
        "Wing Tight Nasty": ["Counter Strong","Duo","HB Inside Zone","HB Smash","PA U-drag Wheel","Stick Spacing"]
      },
      "I Form": {
        "Close": ["Dbl Outs","End Around Power","HB Iso","HB Stretch","HB Zone Toss","PA Deep Cross Go","PA Deep Read","PA Spider Mesh","PA TE Leak","Power O","Stutter Gos","Zone Wk"],
        "Slot": ["94 Will","Dagger","Double Slant","HB Blast","HB Iso","HB Toss","PA Boot Comeback","PA Post Shot","PA Sprint HB Flat","PA Switch Curl","PA Y Throwback","Stretch Alert Bubble"]
      },
      "Strong": {
        "Close Flex": ["Counter Weak","Drive","FB Dive","HB Slip Screen","HB Stretch","Mills","PA Boot Slide","PA Lead Draw Shot","PA Sprint HB Flat"],
        "Jumbo": ["FB Dive","HB Dive","Inside Zone Wk","PA Spot","PA Sprint HB Flat","Power O"],
        "Y Off Close": ["HB Blast","HB Blunt Dive","HB Stretch","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Scissors","TE Option","Zone Split Lead"]
      },
      "Weak": {
        "Close Flex": ["94 Will","Bench Flat","Drive","HB Dive","Inside Zone","Mesh","PA Boot Shot","PA Spot","Spacing"]
      },
      "Other": {
        "Full House Tight": ["Counter Lead","Curly Corner","HB Slam","HB Sweep","PA Ctr Waggle","PA Dig Wheels","PA Post","PA Power O","Power O"]
      },
      "Pistol": {
        "Doubles Y Off": ["Fade Smash","HB Dive","Jet PA Cross","Jet Touch Pass","MTN HB Wide Zone Wk","MTN PA Cross","MTN PA Slide","Orbit PA Cross","Orbit PA Y Corner","Orbit Triple Option","PA Cross","Read Option","RPO Read Flat Wheel","Slants","Zone Fake Jet"],
        "Y Off Trips": ["All Go","Dash Flood","HB Dive","HB Stretch","Inside Zone Split","MTN HB Wide Zone Wk","MTN PA Boot Rt","MTN Wide Zone","PA Boot Slide","PA Double Post","PA Slot Cross","PA Stretch Shot","Posts Ywheel","Rollout Flood","RPO Glance Post","Slants","Vertical TE Cross","Y Lead Read Option"]
      },
      "Gun": {
        "Box": ["Deep Curls","Deep Fork","Fl Drive","HB Screen","Inside Zone","PA Read","Quads Jailbreak Screen","Quads RPO Alert QB Draw","Quads Switch Seam","Slants Flat","Slot Trail","WR Cross"],
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Spacing","Speed Dig"],
        "Bunch Str Nasty": ["Cheat Inside Zone","Crack Toss","Dagger","Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","PA Bunch Shot","PA Cheat Double Post","PA Cheat Verticals Y Slide","RPO Read Bubble","Y Flat Quick","Y Trail","Z Mesh Quick","Z Spot Quick"],
        "Bunch Wide Nasty": ["Branch Return","Flood Switch","HB Slip Screen","Inside Zone","Jet Pull Shallow","Jet Shallow Swirl","L Spot","Mesh Drive","Speed Dig Out"],
        "Doubels Flex Y Off Close": ["Escape","Flood H Post","HB Scissors","Inside Zone","Jet Pass FK Zone","MTN Angle Y Wheel","MTN Dagger Y In","MTN Dig Under","MTN HB Angle","MTN HB Fade","MTN HB Out","MTN HB Slot Screen","MTN Slot Post","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Empty Base Flex": ["Choice Stick Nod","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","Omaha Fade Under","QB Draw","Redzone Up","Reload HB Wheel","Reload Inside Zone","Reload PA Flood","RPO Alert Draw Stick","Shockwr Option","Stick","Strong Curl","Trail Shake","Verticals","Y Corner"],
        "Empty Chips Quads": ["Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Flex Y Off Wk": ["Curls","Double Post","Double Slants","Flanker Spot","Four Verticals","HB Draw","HB Slip Screen","Inside Zone Split","Outside Zone","PA Go Slot Cross","PA Read","PA Slide","RPO Peek Slant","Sluggo Seam","Smash","X Dagger","Y Lead Read Option","Z Dagger"],
        "Split Flanker Close": ["Dbl Ins","Drag HB Wheel","HB Draw","HB Power O","Inside Zone Lt","Pivot Dig","Read Option","WR Corner","X Dig"],
        "Spread Dbl Flex": ["Deep Curl","Fl Cross","Four Verticals","HB Mid Draw","HB Quick Base","HB Slip Screen","Inside Cross","Inside Zone","L Spot","Mesh","MTN FK Swing Wheel","MTN HB Swing","MTN Mesh Spot","MTN Whips","MTN WR Slip Screen","MTN Z Cross","PA Comebacks","PA Read","QB Wrap","Read Option","RPO Peek Slant","Slants Middle","Slot Outs","Y Shallow Cross"],
        "Spread Y  Slot": ["All Go","Curl Wheel","Double Slant","Fake Jet HB Seam","H Shallow Cross","HB Draw","Inside Zone","Jet Inside Zone","Jet Touch Pass","Mid Zone","MTN Curl Flat Corner","MTN Dagger","MTN Orbit Cross Screen","MTN Orbit FK Screen Wheel","MTN Orbit RPO Alert Swing","MTN Slot Out","PA Comebacks","PA Read","PA TE Wheel","Post X Curl","Read Option","RPO Peek Slant","Same Side Zone","Slot Outs","Smash","Y Cross","Y Stick"],
        "Tight": ["Bench","Bench Switch","Drive Corner","Flanker Drive","Frisco","HB Quick Base","L Spot","Mesh Spot","MTN Drive Sluggo","MTN Slant Whip In","MTN Smash Y-shake","PA Slot Cross","Read Option","Slot Post","Stick"],
        "Tight Y Off Wk": ["Bench Dagger","Bench Hammer","Corner Strike","Dig HB Option","Duo","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","Pivot Dig","RPO Zone Alert Omaha","Shallow Cross","Smash Y Pivot","Spot Y Middle","Tackle Trap","WR Under","Y Lead Read Option","Zldagger"],
        "Tight Slots": ["Bench","Drive Trail","HB Quick Base","HB Sweep","Jet Pass FK Zone","Mesh","Mid Zone","MTN Bench Snag N Go","MTN HB Draw","MTN Inside Zone","MTN PA Flood Under","MTN PA Slide","MTN Salem Slot Option","Out N Ups","PA Shot Portland","PA Slide","PA Zone FK Jet","Spot Salem","Stick","WR Corners","Zone Fake Jet"],
        "Trey Open Offset": ["5 6 Trap","Curls Dig","Dig Y Cross","Four Verticals","HB Slip Screen","Inside Zone","Levels Switch","Re","Redzone Under","RPO Peek Slant","Shockh Option","Slot Drive","Stick N Nod","Trail Shake","Y Corner","Y Stick"],
        "Trey Open Str": ["Dbl Ins","Fade Stop","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Levels Switch","QB Power","Read Option","RPO Peek Bubble","RPO Peek Slant","RPO QB Alert Draw","Scissors","Slot Fade","Stick"],
        "Trey Y  Flex": ["Dagger","Flood Swap","HB Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Out","Levels Y Corner","Outside Zone","PA Crossers","Read Option","RPO Alert Screen","Se Corner","Shockh Option","Verticals"],
        "Trio HB Wk": ["Dagger Sit","Flood HB Flat","HB Slip Screen","Inside Zone","Jet Chip Wasp","PA Cross Sit","PA Y Cross","RPO Alert Bubble","RPO Pin Alert Bubble","Speed Option","Sprint Rub Flat","Verticals"],
        "Wing Flex Offset": ["0 1 Trap","Four Verticals","Inside Zone","Inside Zone Split","Mesh Spot","MTN Empty Jailbreak Screen","MTN Empty Mesh Gos","MTN Empty Slants Stick","Ohio Spacing","PA Double Post","PA Slide","Power O","Stick Nod Vertical","Wheel Post Drag","Y Lead Read Opt"],
        "Y Off Trio Close": ["0 1 Trap","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Bounce Dash Crosser","Bounce Inside Zone","Bounce PA Deep Out","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"],
        "Y Off Trips Nasty": ["Counter Y","Dagger Whip","Double Cross","Flood HB Swing","HB Slip Screen","Inside Zone","MTN Curls Y-wheel","MTN HB Choice","MTN HB Out","PA Double Post","RPO Read Y Flat","Slot 2 Buc"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "browns",
    name: "Cleveland Browns",
    style: "West Coast / Run Heavy",
    formations: {
      "Singleback": {
        "Ace Close": ["Bench","HB Stretch","HB Zone Wk","Jet Sweep","PA Cross","PA Jet Sweep","Stick","Y Seam","Zone Fake Jet"],
        "Ace Double Wing": ["Bench","Fake HB Zone QB Boot Lt","HB Counter Wk","HB Dive","HB Power O","HB Stretch","HB Zone Wk","MTN Duo","MTN PA F-flat","MTN Zone Toss","PA Boot Lt","PA Ctr Waggle","PA HB Wheel","PA TE Cross","Stick","TE Corners","TE Shake","Weak Toss"],
        "Ace Slot": ["Dbl Post","HB Counter","HB Dive","HB Power O","HB Stretch","HB Zone Alert Bubble","Inside Zone","MTN HB Slash","MTN PA Z Slide","MTN Wide Zone","PA Boot Switch","PA Fl Stretch","PA Scissors Flood","Shallow Cross","Wide Zone"],
        "Bunch": ["Counter Y","Crack Toss","Dig Return","End Around Lead","Flanker Drive","HB Slam","HB Slash FK End Arnd","Inside Zone Split","L Spot","PA Boot Slide","PA End Around Sift","Pitch WR Reverse","Spacing","TE Hook","Verticals"],
        "Tight Y Off Flex": ["Counter Y","HB Dive","HB Toss","Inside Zone Split","PA Boot Slide","PA Deep Out","PA Y Middle Screen","Pivot Dig","Re","Shallow Cross","Smash Hammer","Stick Spacing","Under Z Curl"],
        "Wing": ["HB Stretch","MTN H Zone Wk","MTN HB Counter","MTN HB Dive","MTN HB Slam","MTN PA Boot","MTN PA Cross","MTN PA FK Slide","MTN PA Poco Slide","PA Boot Lt","PA Y-drag Wheel","Rz MTN PA Crossers","TE Attack","Y Stick","Zone Weak"],
        "Wing Slot": ["Four Verticals","HB Dive","HB Stretch","HB Zone Wk","MTN Duo Wrap","MTN PA Z Slide","MTN Wide Zone Wk","PA Cross Shot","PA Sail X Post","PA Y Screen","Y Stick","Zone Alert Bubble"],
        "Wing Tight": ["Fake HB Zone QB Boot","HB Duo","HB Power O","HB Stretch","HB Zone Wk","PA Boot Flood","PA Boot Slide","PA Power O","PA Wheel Slide","PA Y-drag Wheel","Stick Nod Vertical","Y Stick"],
        "Wing Tight Z": ["HB Counter U","HB Dive","HB Duo","HB Inside Zone","HB Power O","HB Stretch","PA Boot Lt","PA Counter","PA Y-drag Wheel","TE Attack","Wide Zone Wk","Y Stick"]
      },
      "I Form": {
        "H Tight": ["95 Mike","Fake HB Zone QB Boot Lt","HB Iso","HB Power O","HB Stretch","MTN HB Toss Crack","MTN Mesh","MTN Z Spot","PA FB Slide","PA HB Wheel","PA Power O","PA Scissors"],
        "Wing": ["Curls","FB Dive","HB Counter Wk","HB Lead Dive","HB Power G","HB Power O","HB Stretch","HB Toss","MTN PA Power O","MTN Power O","MTN Zone Weak","PA Boot Flow","PA Scissors","PA Sprint HB Flat","PA Waggle","Post Shot","X Slant"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "H Tight Close": ["Counter Weak","HB Blunt Dive","HB Misdirection","PA Power O","PA Slide","Power O","Stutter Gos","Y Trail","Zone Wk"],
        "Y Off Close": ["Counter Weak","Dbl MTN PA Double Cross","Dbl MTN PA Y-fork","Dbl MTN Zone Wk","HB Blast","HB Stretch","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Boot X Shot","PA Scissors","TE Option"]
      },
      "Weak": {
        "Z Close": ["Counter F","FB Dive","Flanker Drive","HB Gut","PA Cntr Shot Post","PA Sprint HB Flat","RPO Alert X Lookie","Slant Spacing","Z Curl"]
      },
      "Other": {
        "Split Backs Offset Wing Close": ["Bench H-angle","FB Dive","HB Off Tackle","Mesh Rail","Mills Backs Cross","PA Slide"]
      },
      "Pistol": {
        "Tight Y Off Flex": ["Cheat HB Zone","Cheat TE Double Pass","Counter Y","Deep Post Switch","HB Zone","HB Zone Wk","PA Cheat Post Comeback","RPO Read Flat Wheel","Wheel Switch"],
        "U Off Trips": ["Dbl Post","HB Counter","HB Dive","HB Slam","HB Stretch","HB Zone Wk","Jet Lead Read Option","Jet Paboot","Jet Touch Pass","Orbit HB Split Zone","Orbit PA Cross","Orbit PA Dbl Cross","PA Boot","PA Boot Over","PA Fl Clown","PA Slot Out","Quick Slants","Read Option","Shock","Strong Power","TE Cross"],
        "Weak Slot": ["Counter Str","HB Dive","Lead Read Option","MTN HB Zone Wk","MTN Jet PA Cross","MTN Jet Pass FK Zone","MTN PA Post","MTN Triple Option","MTN Zone Fake Jet","PA Dagger","RPO Alert X Smoke","Smash Y-corner"],
        "Wing Tight Z": ["Drive","HB Counter","HB Power O","HB Zone Wk","PA Power O","Read Option"]
      },
      "Gun": {
        "Bunch": ["Bunch Trail","Corner Out Dig","Curl","Dig Return","End Around","Flanker Drive","Flood","HB Base","HB Slip Screen","L Spot","Smash Return","Spacing Switch","Speed Dig","Verticals","Z Spot N Go"],
        "Bunch X Nasty": ["Bounce Mesh Drive","Bounce PA Double Post","Bounce Zone Wk","Corner Out Dig","Counter Y","Dbl Outs","Dbl Post HB Corner","Drive HB Under","Flanker Drive","HB Base","Inside Zone","Mesh Spot","PA X Whip","Post Wheel Shallow","Spacing Switch","Speed Dig","X Cross","Y Corner Pivot","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Bunch Y  Flex": ["Bench Pivot","Branch Return","Dagger","HB Power","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","MTN Cross Out","MTN Cross Stop Post","MTN Dagger Sit","RPO Alert Out","Spacing","Speed Dig Out","Verticals"],
        "Deuce Close": ["Inside Zone Split","Lead Read Option","Mesh Spot","PA Slide","Spacing Switch","Stick"],
        "Doubles HB Wk": ["Boomerang 0 1 Trap","Boomerang Slot Swing","Boomerang Y Delay","Corner Strike","Curl Combo","Double Slants","Four Verticals","HB Base","HB Cross Screen","HB Mid Draw","HB Slip Screen","Inside Zone","MTN Buck Sweep","MTN HB Base","MTN PA Cross","PA Y-cross","Pin Pull Sweep","Read Option"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Doubles Y  Flex": ["Corner Strike","Curl Combo","Double Slants","Four Verticals","HB Quick Base","HB Slip Screen","Inside Zone","PA Deep Outs","Read Option","RPO Zone Peek","Shark HB Wheel","Slot Cross","Under Y-option","X Dagger","Y-sail"],
        "Empty Chips Quads": ["Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Empty Chips Tight": ["Dagger","Deep Post Out","Double 7 Stop","MTN Mesh Y-corner","MTN Outs Y-post","MTN Salem X-swirl","Out","Outs","Post Cross"],
        "Empty HB Wide": ["Curl Flats","Dbl Dig","Hoss Y Juke","Jailbreak Slot Screen","Quick Slants","Redzone Up","RPO Q Stick Draw","Seams Y Corner","Shock WR Option","Stick","Stick N Nod","Under Seams"],
        "Normal Y Off Close": ["Empty MTN Jailbreak Screen","Empty MTN Smash Salem","Empty MTN Snag HB Swing","HB Scissors","Inside Zone","Jet Pass FK Zone","PA Jet Sweep","PA Snag","Read Option","Sft HB Sweep","Sft Mesh Rail","Sft PA Cross","Y-sail","Y-stick Dig","Zone Fake Jet"],
        "Tight Y Off Wk": ["0 1 Trap","Dagger H-swing","Duo","Hammer Dagger","HB Slip Screen","In Quick Outs","Inside Zone","Levels","Mesh Whips","Outside Zone","PA Corner","Pivot Return","RPO Zone Alert Omaha","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Smash Hammer","Smash Y Double","Spot Y Middle","Tackle Trap","Y Lead Read Option"],
        "Trey Open": ["Deep Post","Double Ins","Drag Verticals","Four Verticals","HB Off Tackle","HB Slip Screen","Inside Zone","Jet New Orleans","PA Slot Under","Read Option","Shockh Option","Stick","Stick N Nod","Y Corner","Y-drag"],
        "Trio Y  Flex": ["Curl Flat","Dagger","Flood Y-post","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Dagger","Mesh Whips","Mills","MTN Corner Slot Choice","MTN Mills","MTN Out H-angle","MTN Out N Up","MTN Shock Slot Dig","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shockh Option","Slot Out","Verticals"],
        "Trips TE": ["45 Quick Base","Curl Flat","Double In Sail","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","PA Counter Go","PA Shot Wheel","PA Slot Corner","Reload PA Unders","Reload RPO Zone Alert Bubble","Reload Shock HB Choice","RPO Alert Bubble","Slants","Switch Y In","Verticals"],
        "Trips TE Flex": ["Double In Sail","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","MTN Forkh Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","Over Pivot","PA Crossers","RPO Zone Alert Omaha","Stick","Verticals"],
        "U Off Trips": ["HB Sweep","MTN Jet Sweep","MTN PA Jet Cross","MTN PA Jet Sweep","MTN QB Blast","MTN QB Counter","MTN QB Power","PA U Corner Flood","PA Y Screen","Read Option","RPO Alert Bubble","Shock"],
        "Wing Flex Offset": ["0 1 Trap","Four Verticals","Inside Zone","Mesh Spot","MTN Flood Y-in","MTN Salem Y-wheel","MTN Smash Dbl Cross","Ohio Spacing","PA Double Post","Power O","Stick Nod Vertical","Wheel Post Drag"],
        "Wing Slot Offset": ["Dragon Spacing","Drive","Duo","HB Punch","Mesh Spot","MTN Choice Wheels","MTN Jet HB Duo","MTN Jet PA Cross","MTN Jet Touch Pass","MTN QB Sweep","MTN Wrangle Post","PA Read","QB Zone","Read Option","RPO Alert Bubble","Scissors Smash","Spot Option","Stick Nod Vertical"],
        "Y Off Trips Wk": ["22 Z In","Bounce Inside Zone","Bounce PA Post Curls","Bounce Slot Cross","Dig Cross","Fade Stops","Four Verticals","HB Flip Counter","HB Slip Screen","Inside Zone","Inside Zone Split","MTN Curls","MTN Fade Dagger","MTN HB Swing","MTN PA WR Zone Flood","MTN Slot Whip In","MTN WR Counter Rt","MTN WR Zone","MTN X Slant Spot","MTN Z Spot","PA Flip Counter","PA Slide","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Alert Flip Counter","Shallow Sail","Shockh Option","Slants","Slot 2 Buc","Sluggo Verts","Stick","Strong Flood"],
        "Y Trips Wk": ["66 Dixie","China Smash","Curls X Go","Drive Gos","Four Verticals","HB Base","HB Draw","HB Mid Zone","HB Slip Screen","Inside Zone","Levels Switch","MTN Mesh Spot Sneak","MTN Same Side Zone","MTN Smash Choice","Outside Zone","PA Post Shot","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Read Option","Reverse","Slants","Y Stick HB Angle"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "buccaneers",
    name: "Tampa Bay Buccaneers",
    style: "Spread / Pass Heavy",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","PA Draw Shot","PA Jet Sweep","Shift Duo","Shift HB Sweep","Shift PA Duo Crossers","Spacing","Stretch Alert Bubble","Zone Fake Jet"],
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slam","Inside Zone Split","MTN HB Dive","MTN PA Deepx Over","MTN X Whip","PA Boot","PA Boot Slide","PA Counter","PA Cross","PA Drag Wheel","Spacing","Verticals"],
        "Deuce Close": ["Bench","Corner Stops","Flood","HB Dive","HB Stretch","HB Wham","HB Zone Wk","Jet Sweep","MTN Duo","MTN Zone Split","PA Boot Slide","PA Deep Read","PA Jet Sweep","PA MTN Spider Y Leak","PA Slidey Screen","PA Sprint HB Flat","PA X Post Cross","Spacing Switch","Stick","Zone Fake Jet","Zone Split Wk"],
        "Tight Y Off": ["Bench Switch","HB Dive","Inside Zone Split","Jet Sweep","PA Deep Cross","PA Jet Y Leak","PA Pump Go","Stick Switch","Zone Fake Jet"],
        "Tight Y Off Flex": ["0 1 Trap","Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Wide Zone Wk","Y Stick"]
      },
      "I Form": {
        "Close Flex": ["94 Will","Flanker Drive","HB Iso","HB Power O","HB Wk Toss","Mesh","PA Level","PA Power O","PA Spot","PA TE Corner","S5 Mike","Stretch"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Stick","Strong Power","Verticals"],
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","MTN Counter Lt","MTN PA Flood","MTN Zone Split","PA Boot Y Leak","PA Z Over","Y Lead Read Option"],
        "Doubles Y Off Stack": ["Flanker Spot","Four Verticals","HB Dive","HB Draw","HB Slip Screen","HB Split Zone","MTN Jet HB Zone","MTN Jet PA HB Wheel","MTN Jet PA Y Leak","MTN Jet QB Boot","MTN Jet Touch Pass","MTN Jet Wide Zone Wk","PA Boot Slide","PA Cross","PA Post Shot","Read Option","RPO Zone Alert Bubble","Wide Zone"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Spot Lead Swing","Trail Speed Out","Y Cross","Z Slant Y Corner"],
        "Trips": ["HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Stretch","HB Zone Wk","Inside Cross","PA Boot","PA Boot Lt","PA HB Flat","Pin Pull Sweep","Read Option","RPO Alert Bubble","Slants","Smash","Strong Power","Verticals","X Spot"]
      },
      "Gun": {
        "5wr Tight": ["Clear Deep","Cluster Bunch","L Spot","Mesh","Mesh Post","Mills Double Out","MTN Double Post","MTN Fork Salem","MTN Post Swirl","QB Draw","Salem Smash Under","Slot Dig Wide Corner","Smash Dagger","Spacing","Zl Spot Shake"],
        "Bunch Str Nasty": ["Crack Toss","Dagger","Flanker Drive","Inside Zone","Mesh Flat Spot","MTN Double Pass","MTN HB Angle","MTN HB Seam","MTN HB Slip Screen","MTN Mesh Trail","MTN Smash Angle","PA Bunch Shot","RPO Read Bubble","RPO Zone Peek","Y Flat Quick","Y Trail","Z Mesh Quick","Z Spot Quick"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Cheat H Out","Cheat TE Hitch HB Seam","Cheat TE Hitch N Go","Deep Smash","HB Off Tackle","HB Slip Screen","Inside Cross","Inside Zone","Mesh","MTN Divide","MTN Return Cross Up","MTN Return Drive Flat","MTN Return Flood Stick","MTN Slot Flood","MTN Snag Under","PA Boot Over","Read Option","Same Side Zone","Spacing","Triple Out","Whips"],
        "Bunch Y  Flex": ["Flood","HB Slip Screen","Inside Zone","L Spot","MTN Dagger Sit","MTN Drive Zig","MTN Inside Post","Smash Return","Spacing","Speed Dig","Swirl Hookn Go","Verticals"],
        "Cluster HB Str": ["45 Quick Base","Flanker Drive","HB Slip Screen","L Spot","Mesh Spot","MTN Cross Switch","MTN HB Draw","MTN Mesh","MTN Mesh Post","MTN Mesh Rewind","MTN Slot Screen","PA Read","Post Curls","Post Dig","Read Option","Spacing","Spot Lead Swing","Verticals"],
        "Deuce Close": ["0 1 Trap","Bench","Bench Dig Curl","Corner Gos Flat","Inside Zone","Mesh Spot","MTN PA Slide","MTN Stick","MTN WR Corner","MTN Y Option","MTN Zone Split","PA Deep Curls","PA Post Cross","RPO Alert Omaha","RPO Peek MTN Stick"],
        "Doubles Clamp Stack": ["Counter Y","Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Same Side Zone","Spot Choice","Texas Smash","Texas Y-stutter Wheel","Y Ohio Return"],
        "Empty Base Trio": ["All Curl","All Hitch","Curl Combo","Double In","Double Slant Stick","Hoss Juke","QB Draw","Shock Slot Option","Slant Flat","Slot Shake","Stick Nod","Wheel Cross"],
        "Empty Quads": ["Cross Z Post","Curl Pivot Dig","Four Verticals","Out Double Under","QB Blast","QB Draw","RPO Alert QB Draw","Vert Double Under","WR Screen"],
        "Normal Y Off Close": ["Double Slant","Escape","HB Scissors","Inside Zone","Mesh Spot","MTN Angle Y Wheel","MTN HB Angle","MTN Switch Corner","PA Snag","Read Option","RPO Alert Out","RPO Peek Stick","RPO Zone Peek","Wheel Switch","Y-sail"],
        "Spread Y  Slot": ["Corner Strike","Cross Dig","Curls","Double Slant","Four Verticals","HB Slip Screen","Inside Zone","MTN Mesh Dig","MTN X Post","Ohio Double In","Out Seams","PA Read","Return Curls Texas","Slot Outs","Slot Stick","Wrmid Screen","X Dagger","Y-seam"],
        "Tight Doubles": ["Cross Wheels","Curl","Dbl Stick","Flood","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","L Spot","Mesh Spot","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross"],
        "Tight Open": ["Bench Z Spot","Curl Y-option","Dig Z Spot","Drive Stutter Flat","FK Drive Stutter","HB Draw","HB Mid Zone","HB Scissors","HB Slip Screen","Hitch N Go","Inside Zone","Mesh Crossers","Mesh Spot","MTN Flood H-choice","MTN Jet Pull Shallow","MTN Spot Y-post","PA Scissors","Read Option","Same Side Zone","Slot Post","Spacing","Spot X Option","Stick","Verticals HB Burst"],
        "Tight Y Off Wk": ["0 1 Trap","Cheat Outside Zone","Duo","Fork Z-dig","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","PA Cheat Comeback Go","PA Cheat Wheel Post","PA Corner","Pivot Return","RPO Zone Alert Omaha","Smash Hammer","Tackle Trap"],
        "Trio Y  Flex": ["Curl Flat","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Whips","MTN Corner Slot Choice","MTN Empty Slot Shake","MTN Empty Slot Wheel","MTN Empty TE Mid Screen","MTN Mills","MTN Out H-angle","MTN Out N Up","MTN Shock Slot Dig","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shockh Option","Slot Out","Slot Seam","Slot Under H-angle"],
        "Trips": ["Curls","Fade Stops","Four Verticals","HB Slip Screen","Inside Zone","RPO Alert Screen","RPO Peek Stick","RPO Read Bubble","Slant Smash","Slot Drive","Stick Wheel","Wrmid Screen"],
        "Trips HB Wk": ["All Curl","Curls","Deep Stick","Drive","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Switch","Inside Zone","Middle Slam","Ohio Sail","Post Slot Hitch","Quick Slants","RPO Alert Bubble","Same Side Zone","Shock H Option","Smash","WR Mid Screen"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Trips X Nasty": ["HB Mid Draw","HB Off Tackle","HB Slip Screen","Hi Lo Cross","Hi Lo Dig","Inside Zone","Mid Zone","MTN Drag Sluggo","MTN HB Swing","MTN Slot Fades","MTN Spot Y Corner","MTN Stick Wheel","MTN Triple Slants","PA X Cross Shot","Quick Fork Zig","Quick Short Post","Quick Unders","Slot Fade H Wheel","Switch HB Wheel","Verticals X Shallow","WR Smash"],
        "Y Off Trio Wk": ["Daggerx Out","Four Verticals","HB Base","HB Slip Screen","Inside Zone","MTN PA Deep Over","MTN Smash Go","MTN Split Zone","Orbit PA Cross","Orbit PA Scissors","PA WR In","PA Y Wheel","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Alert Orbit","Shockh Option","Y Lead Read Option"],
        "Y Off Trips": ["Bounce Inside Zone Split","Bounce PA Deep Out","Bouncey Stick","Curls","Duo","HB Draw","HB Slip Screen","Inside Zone","MTN Counter Y","MTN Curl N Go","MTN Inside Zone Split","MTN PA Slide","MTN PA Smash","MTN Stick","MTN Stick N Nod","MTN Y Lead Read Opt","MTN Y Screen","PA Slot Cross","RPO Glance Post","RPO Read Y Flat","Same Side Zone","Slot 2 Buc","Verticals Y Option","Whip Smash"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "cardinals",
    name: "Arizona Cardinals",
    style: "Spread / Air Raid",
    formations: {
      "Singleback": {
        "Bunch": ["Counter Y","Crack Toss","Dig Return","End Around Lead","Flanker Drive","HB Slam","HB Slash FK End Arnd","Inside Zone Split","L Spot","PA Boot Slide","PA End Around Sift","Pitch WR Reverse","Spacing","TE Hook","Verticals"],
        "Deuce Close": ["Bench","Bench Z-dig","Corner Stops","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","PA Boot Corner Post","PA Boot Slide","PA Deep Cross","PA Drag Wheel","PA Slidey Screen","PA X Post Cross","Stick","Zone Split Wk"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Post Dig"],
        "Tight Y Off Flex": ["Counter Y","HB Dive","HB Zone Wk","Jet HB Power","Jet HB Split Zone","Jet Sweep","PA Boot Slide","PA Deep Out","PA Jet Sweep","PA Y Middle Screen","Shallow Cross","Smash Hammer","Stick Spacing","Wide Zone","Zone Fake Jet"],
        "Wing": ["Close PA Cross","Close PA Sail","Close Zone Strg","HB Stretch","PA Boot Lt","PA Y-drag Wheel","TE Attack","Y Stick","Zone Weak"],
        "Wing Close": ["Dbl Outs","HB Dive","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Y Stick"],
        "Wing Slot": ["Four Verticals","HB Dive","HB Stretch","HB Zone Wk","MTN Jet HB Slash","MTN Jet PA Boot Y Leak","MTN Jet Sweep","PA Cross Shot","PA Sail X Post","PA Y Screen","Y Stick","Zone Alert Bubble"]
      },
      "I Form": {
        "Wing": ["Curls","FB Dive","FB Fake HB Flip","Goal Line Fade","HB Power G","HB Stretch","Iso","PA Boot Flow","PA Spot"]
      },
      "Strong": {
        "Close": ["Counter Weak","End Around","Fl Drive","HB Dive","HB Off Tackle","HB Slash FK End Arnd","Inside Post","Mesh Post","PA Deep","PA Post Dig","PA Scissors","WR Out"]
      },
      "Pistol": {
        "Bunch": ["Curl Flat","Dash Flood","Dash Slot Corner","Dash WR Leak","Dbl MTN Duo Wrap","Dbl MTN HB Stretch","Dbl MTN PA Stretch","Flanker Drive","HB Dive","HB Duo","Hop PA Boot Slide","Hop Split Zone","Hop Zone Wk","Mesh","MTN PA Slide","MTN RPO Ready Slide","MTN Wide Zone","PA Boot Slide","PA Cross","RPO Alert Zone Hitch","Seattle","Slant Spacing","Spacing","TE Angle"],
        "Deuce": ["Bench","HB Counter","HB Split Dive","HB Stretch","Hitch Corners","Inside Cross","PA TE Wheel","RPO Alert TE Flat","Short Post"],
        "Deuce Close": ["Bench","Cheat Counter Y","Counter Y","HB Dive","HB Split Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","RPO Read Cheat Wheel Flat","Y Lead Read Option"],
        "Doubles Y Off": ["Fade Smash","HB Dive","Jet PA Cross","Jet Touch Pass","MTN HB Wide Zone Wk","MTN PA Cross","MTN PA Slide","Orbit PA Cross","Orbit PA Y Corner","Orbit RPO Peeky Pop","PA Cross","PA Deep In","Pin Pull Sweep","Read Option","RPO Read Flat Wheel","Slants","Zone Fake Jet","Zone Split"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Read Option","Spot Lead Swing","Trail Speed Out","Y Cross"],
        "Wing Slot": ["Bench Corner Strike","Dagger","Four Verticals","HB Counter","HB Dive","HB Power O","HB Slam","HB Slip Screen","HB Stretch","MTN HB Zone Wk","MTN Jet Dash Wk","MTN Jet Touch Pass","MTN PA Slide","MTN PA Verts","MTN Zone FK Jet","Orbit PA Boot Lt","Orbit PA TE Cross","Orbit RPO Read TE Slide","PA Ctr Waggle","PA Deep Out","PA Power O","PA Slot Cross","RPO Alert Bubble","Y Stick"]
      },
      "Gun": {
        "Box": ["Deep Curls","Deep Fork","Fl Drive","HB Screen","Inside Zone","PA Read","Slants Flat","Slot Trail","WR Cross"],
        "Bunch Str Offset": ["Crack Toss","Duo","FK Toss Slide","Flood","HB MTN Dig Spot","HB MTN QB Sweep","HB MTN Trail Dbl Post","HB Slip Screen","Inside Zone","Lead Swing Spot","MTN FK Toss Verticals","MTN Lead Toss","MTN PA Spinner","MTN RPO Alert Swing","MTN Spinner HB Inside","MTN WR Outside Zone","Read Option","Seattle","Slant Spacing","Verts Dig","Y Trail"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Curl Flat Corner","HB Slip Screen","Inside Zone","Mesh","PA Boot Over","QB Wrap","RPO Alert Bubble","Same Side Zone","Spacing","TE Corner","Triple Out","X Spot"],
        "Bunch X Nasty": ["Bounce Mesh Drive","Bounce PA Double Post","Bounce Zone Wk","Choice Shallow Dig","Drive Y Corner","HB Base","Inside Zone","L Spot","Mesh HB Sneak Dig","MTN China Cross","MTN Dagger","MTN Drive","MTN Mesh Cross","MTN Smash Sluggo","MTN Speed Dig Under","PA X Whip","Smash Return","Speed Dig"],
        "Deuce Close": ["Bench Dig Curl","Both Stick","Inside Zone Split","Lead Read Option","Mesh Spot","MTN Exit Dagger","MTN Exit Drive","MTN Exit X Over","MTN WR Corner","MTN Y Corner","MTN Y Option","Out N Ups","Post Wheel","RPO Peek Stick","RPO Read Flat Wheel"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles HB Wk": ["0 1 Trap","Curl Combo","Double Cross","Double Slants","Four Verticals","HB Slip Screen","Inside Zone","PA Read","Pin Pull Sweep","RPO Peek Slant","RPO Read Bubble","X Dagger"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Empty Base Flex": ["All Hitch","Choice Stick Nod","Corner Up","Deep Flood","Hoss Y Juke","Jailbreak Slot Screen","Middle Hi Lo","MTN Switch Comeback","MTN Switch Flood","MTN Switch Verts","QB Draw","Redzone Up","RPO Alert Draw Stick","Shockwr Option","Stick N Nod","Trail Shake","WR Screen","Y Corner"],
        "Empty Bunch Wide": ["Deep Flood","Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","L Spot N Go","MTN Orbit FK Swing Screen","MTN Orbit Swing Screen","MTN Spacing Dig","Post Corner Read","QB Draw","RPO Q Screen Draw","Spacing Switch","Stutter Wheel","Z Spot Smash"],
        "Empty Chips Nasty": ["Deep Post Out","Double Swirl","Out X Dig","Post Cross","Slot Sail","X Cross"],
        "Split Close": ["Close Corner","Dbl Ins","Dig Slot Out","Double Swirl","Drive HB Wheel","FB Inside","HB Power O","HB Rail","HB Slip Screen","Mesh","Mesh Spot","PA F Slide","Pivot Dig","Read Option","Scat"],
        "Split Y Off Close": ["Dig Slot Out","Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone"],
        "Spread Y  Flex Wk": ["Corner Strike","Double Slants","Four Verticals","HB Mid Draw","HB Slip Screen","Hitch Seam","Inside Zone","Orbit Stick N Nod","Orbit Y Sail","Orbit Y Stick","PA Cross","PA Dagger","RPO Read Bubble","Slot Outs","Vert Comebacks"],
        "Spread Y  Slot": ["Corner Strike","Curl Seams","Digs H Option","Double Slant","Four Verticals","HB Slip Screen","In N Up","Inside Zone","Levels Divide","PA TE Wheel","Read Option","Return Inside Zone Split","Return PA Post Curls","Return RPO Alert Slant","RPO Peek Slant","Rz Cross HB Rail","Same Side Zone","Slot Outs","Stick Nod","Y Cross","Y-seam"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","HB Draw","HB Mid Zone","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","MTN HB Slip Screen","MTN Mesh Spot","MTN X Spot","Orbit Mesh Rail","Orbit Whip Flood","Orbit Z Spot","PA Scissors","Read Option","Same Side Zone","Spot X Option","Verticals HB Burst"],
        "Tight Y Off Wk": ["0 1 Trap","Curls","Drive","Duo","Flanker Spot","HB Slip Screen","In Quick Outs","Outside Zone","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Shallow Cross","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out"],
        "Trey Y  Flex": ["Dagger","HB Pump Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","MTN Empty Flood Switch","MTN Empty Slot Under","MTN Empty Vertical","Outside Zone","PA Crossers","PA Draw Choice","Read Option","RPO Alert Screen","Same Side Zone","Se Corner","Shockh Option","Verticals"],
        "Trips Y Slot": ["Curls","Dagger Poco","Four Verticals","Go Dbl Post","HB Mid Draw","HB Off Tackle","HB Slip Screen","Hi Lo Dig","Inside Zone","Mid Zone","PA Switch Dig","PA WR In","Read Option","Slot 2 Buc","Slot Fork","Stick","Strong Flood","WR Smash"],
        "Wing Slot Offset": ["0 1 Trap","Dbl MTN Counter Y","Dbl MTN PA Slot Corner","Dbl MTN Split Zone","Drive","Duo","Fake Jet HB Wheel","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet HB Angle","Jet HB Cross Screen","Jet HB Duo","Jet PA Cross","Jet Pass FK Zone","Jet Sprint HB Slide","Mesh Spot","Outside Zone","PA Double Post","PA Jet Sweep","QB Zone","Read Option","Scissors Smash","Smash","Smash Y-post","Zone Fake Jet"],
        "Wing Slot Offset Wk": ["Bounce Inside Zone Lt","Bounce PA Corner","Bounce Spot Curl","Cross Corner Strike","Double Post","Double Smash","Drive Whip Smash","FK Slant Out","HB Draw","HB Slip Screen","Inside Zone","Mesh HB Corner","MTN HB Base","MTN Mesh Traffic","MTN PA Cross","Outside Zone","PA Dagger","PA Slot Fade","RPO Peek Post","Slant Stick","Smash"],
        "Wing Stack": ["Four Verticals","Inside Zone","Mesh Spot","PA Jailbreak Screen","PA Read","Power O","Read Option","Smash Drive","Stick"],
        "Y Trio Offset Wk": ["Curls Combo","Flood","Four Verticals","HB Power O","HB Slip Screen","Hi Lo Dig","Inside Zone Split","MTN Outside Zone","MTN Z Spot","PA MTN Zig Cross","RPO Peek Post","Slot Fade","Smash Out Y-cross","Stick","Y Lead Read Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","MTN HB Zone Wk","MTN PA Mesh","MTN PA Sprint HB Flat","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "chargers",
    name: "Los Angeles Chargers",
    style: "Spread / Pass Heavy",
    formations: {
      "Singleback": {
        "Ace Slot": ["HB Dive","HB Power O","Inside Zone","MTN HB Slash","MTN PA Z Slide","MTN Wide Zone","PA Scissors Flood","Shallow Cross","Wide Zone"],
        "Bunch X Nasty": ["Cheat HB Slash","Counter Y","Crack Toss","HB Dive","HB Slash","Inside Zone Wk","Jet Sweep Wk","PA Boot","PA Boot Cheat Slide Levels","PA Boot Corner Post","PA Cheat Wheel Post","PA Cross","PA Deep Out","PA Jet Sweep","PA Post Curl Shot","Spacing","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["0 1 Trap","Bench","Flood Trail","HB Stretch","MTN Duo","MTN PA Boot Fork","MTN PA Boot Screen","MTN Power","MTN Zone Split","MTN Zone Toss","PA Boot Slide","PA Drag Wheel","PA Slidey Screen","PA Stretch Shot","Spacing Switch"],
        "Tight Y Off": ["Cheat HB Dive Wk","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Stretch","HB Zone Wk","Inside Zone Split","Jet Sweep","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Jet Y Leak","PA Leak","PA Post Dig","Zone Fake Jet"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Toss FK Reverse","HB Zone Toss","HB Zone Wk","PA Cross","PA FK Toss Wheel","PA TE Flood","PA Y-drag Wheel","Pitch WR Reverse","Wide Zone"],
        "Wing Slot": ["Counter U","Dragon Spacing","Four Verticals","HB Dive","HB Duo","HB Power O","HB Stretch","HB Zone Wk","MTN Duo Wrap","MTN PA Z Slide","MTN Wide Zone Wk","PA Boot Y Sail","PA Power O","PA Sprint HB Flat","PA TE Scissors"]
      },
      "I Form": {
        "Close": ["Double Post","End Around Power","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","PA Boot Flow","PA Ctr Waggle","PA Deep Cross Go","PA Deep Read","PA Post Dig Shot","PA Spider Mesh","PA TE Leak","Power O","Zone Wk"],
        "Slot": ["94 Will","Double Slant","FK Jet HB Shovel","HB Blast","HB Dive Alert Bubble","Jet FK Shovel","PA Boot","PA FB Flat","PA Post Shot","PA Xdagger","Pafk Jet FK Shovel","Stretch Alert Bubble"],
        "Wing": ["Curls","FB Dive","FB Fake HB Flip","HB Power G","HB Power O","HB Toss","Iso","MTN HB Power O","MTN PA Power O","MTN Power Weak","PA Spot","PA X Burst Cross","Post Shot","TE Post","Zone Weak"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Weak": {
        "Z Close": ["Counter F","FB Dive","HB Gut","PA Cntr Shot Post","Slant Spacing","Z Curl"]
      },
      "Other": {
        "Split T Tight": ["FB Dive","FB Toss","FK FB Toss Rollout Lt","HB Inside","HB Lead","PA Boot","Sft HB Lead Dive","Sft HB Toss","Sft PA Dive"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Strong Power","Verticals"],
        "Deuce Close": ["Bench","Cheat Counter Y","HB Dive","HB Stretch","MTN Counter Lt","MTN PA Flood","MTN Zone Split","PA Boot Y Leak","RPO Read Cheat Wheel Flat"],
        "Tight Y Off Flex": ["Cheat FK Swing Wheel","Cheat HB Double Pass","Cheat HB Zone","Cheat Swing Flat","Cheat TE Double Pass","Counter Y","Deep Post Switch","HB Zone","HB Zone Wk","MTN HB Zone Wk","MTN PA Boot","MTN Pin Pull Sweep","PA Cheat Post Comeback","RPO Read Flat Wheel","Wheel Switch"],
        "Y Off Trips": ["Counter Y","Four Verticals","Inside Zone Split","Lead Swing Dbl Spot","MTN HB Power","MTN PA Boot Rt","MTN PA Boot Slide Switch","MTN PA Divide Comebacks","MTN Seam Y Z-choice","MTN Wide Zone","PA Boot Slide","PA Scissors","Slants","Stretch Alert X Lookie","Y Lead Read Option"]
      },
      "Gun": {
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Spacing","Speed Dig"],
        "Bunch Str Offset": ["Corner Strike","Dagger","Duo","FK Toss Slide","Flood","HB Slip Screen","Inside Zone","MTN Deep Post","MTN Inside Zone","MTN Stick","Pin Pull Toss","Read Option","RPO Duo Alert Post","Rz PA Corner","Slant Spacing"],
        "Bunch TE Wk": ["HB Dive","Mesh Mills","Mesh X-post","MTN Divide X-under","MTN Escort HB Base","MTN Escort Insert X-out","MTN Escort PA Slide","MTN Flood H-sneak","MTN Snag Under","PA Wheel Z-curl","Shallow H-corner","Spacing X-wheel"],
        "Bunch Wide Nasty": ["Branch Return","Cheat Drag Rub Crosser","Cheat Wheel Post","Choice Shallow Dig","Corner Out Dig","HB Angle Screen","HB Slip Screen","Inside Zone","Jet Shallow Swirl","L Spot","Spacing Switch","Verticals"],
        "Bunch X Nasty": ["Bounce Mesh Drive","Bounce PA Double Post","Bounce Zone Wk","Counter Y","Deep Flood","Drive HB Under","HB Base","Inside Zone","Mesh Corner","Mesh Traffic","MTN Cross Post","MTN RPO Zone Alert","MTN Y Corner Under","Return Mesh Spot","Return Spot","Return Whip Trail","Rz PA X Whip","Whip Double Spot","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Deuce Close": ["Bench Dig Curl","Inside Zone","Mesh Spot","MTN Return H-trail","MTN Return HB Toss","MTN Return Y-shake","MTN WR Corner","MTN Y Corner","MTN Y Option","Outside Zone","PA Deep Curls","PA Deep Over","RPO Peek Stick","Spacing Switch","Stick Switch"],
        "Empty Base Flex": ["Corner Up","Deep Flood","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","Redzone Up","RPO Alert Draw Stick","Shock Wroption","Stick","Strong Curl","Verticals","Verticals Under","WR Screen","Y Corner","Y Shallow Cross"],
        "Empty Chips": ["Corner Strike","Dagger","Deep Post Out","Post Cross","Slot Sail","TE Screen"],
        "Empty Chips Quads": ["Cheat FK Screen Cross","Cheat Jailbreak WR Screen","Cheat Texas X Sluggo","Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Flex Y Off Wk": ["0 1 Trap","Counter Y","Double Post","Double Slants","Flanker Spot","Four Verticals","HB Slip Screen","MTN Sprint Bench","MTN Sprint Slot Over","MTN Sprint TE Screen","PA Read","PA Slide","RPO Peek Slant","Z Dagger","Zone Alert Glance"],
        "Go Go Twins Flex": ["HB Base","HB Counter","HB Lead Draw","HB Slip Screen","Inside Zone Split","Mesh Switch Rail","Mesh Traffic","PA Flood H-corner","Texas X-choice"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Inside Zone","Cheat Slash Wheel In","Cheat TE Angle","Cheat TE Screen","FK Jet Y Wheel","HB Scissors","Jet Touch Pass","PA Jet Sweep","RPO Alert Cheat Bubble","RPO Glance Post","Zone Fake Jet"],
        "Split Close Pro": ["Cheat FB Power O","HB Angle","HB Option","HB Power O","Inside Zone Split","PA Cheat Double Crossers","PA Cheat Wheel Post","PA Cheat Wrap Cross","PA Y Cross","RPO Peek Cheat Wrap Go","RPO Zone Peek","Y Curl Post"],
        "Spread Y  Flex Wk": ["Double Cross","Double Post","HB Base","HB Slip Screen","Inside Zone","MTN Bench","MTN Bench Curls","MTN Double Post","MTN HB Slip Screen","MTN Whip Cross","MTN X Replace","PA Cross","PA Dagger","PA Y Cross","RPO Peek Slant"],
        "Tight Offset TE": ["0 1 Trap","Bench","Drive Out","HB Slip Screen","Inside Zone","Mesh Spot","PA Seams","Slot Outs","Spot","Stick","Stickn Out","Y Out"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","HB Draw","HB Slip Screen","Inside Zone","Mesh Spot","Verticals HB Burst"],
        "Tight Y Off": ["0 1 Trap","Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","PA Go Slot Cross","PA Jailbreak Screen","RPO Alert Bubble","RPO Peek Slant Bubble","Stick","Switch WR Drag","Wheel Spot"],
        "Tight Y Off Wk": ["0 1 Trap","Cheat Outside Zone","Curls","Dig HB Option","Duo","FK Cheat HB Stretch","Fork Z-dig","Hammer Dagger","HB Power O","Inside Zone","Levels Dbl Outs","PA Cheat Comeback Go","PA Cheat Wheel Post","PA Corner","PA FK Cheat Post Cross","PA FK Cheat Quick Out","Pivot Return","RPO Zone Alert Snag","Slot Cross","Smash Dagger","Smash Drag","Spot Y Middle","Y Lead Read Option","Z Dagger"],
        "Trey Open": ["Corner Strike","Curl HB Burst","Dagger Deep Curl","Four Verticals","H MTN Flood H-sneak","H MTN Mesh","H MTN X Shallow Cross","HB Angle Screen","HB Base","HB Draw","HB Slip Screen","Inside Zone","Jet New Orleans","Levels Switch","Mid Zone","Shockh Option","Slants","Y-drag"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Wing Pair": ["All Go","Duo","FK Toss Verti Cals","FK Toss WR Screen","HB Stretch","HB Toss","Inside Zone","MTN HB Trap","MTN Inside Zone","MTN Spacing","PA TE Attack","Power O","Read Option","RPO Duo Alert Post","TE Drive"],
        "Wing Slot Offset": ["0 1 Trap","Cheat HB Jailbreak Screen","Cheat Inside Zone","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Dragon Spacing","Four Verticals","PA Cheat Comeback","PA Cheat Dagger"],
        "Wing Tight Z": ["Duo","HB Punch","Inside Zone","Mesh Spot","MTN Inside Zone","MTN PA Flood","MTN Power Wk","PA Flanker Curl","RPO Glance Post"],
        "Y Off Trips Close": ["Deep Slot Curl","Double Ins","Drag Wheel","HB Mid Draw","HB Power","HB Slip Screen","Inside Zone","MTN Corners","MTN Empty Dbl Unders","MTN Empty HB Sluggo","MTN Empty Smash Y-post","MTN HB Corner","MTN Y Poco","PA Copo Cross Dig","PA Cross","PA Fork","Scat","Slot Out","TE Whip","Wheel Mesh","Whip Dig","WR Screen","X Curl","Y-option Wheel"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "chiefs",
    name: "Kansas City Chiefs",
    style: "Spread / West Coast",
    formations: {
      "Singleback": {
        "Ace Slot": ["HB Counter","HB Dive","HB Power O","Inside Zone","MTN HB Slash","MTN PA Z Slide","MTN Wide Zone","PA Boot","PA Scissors Flood","RPO Zone Alert Bubble","Shallow Cross","Smash"],
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","MTN Inside Zone","MTN PA Deep Over","MTN PA Switch Replace","PA Draw Shot","PA Jet Sweep","Shift Duo","Shift HB Sweep","Shift PA Duo Crossers","Spacing","Stretch Alert Bubble","Zone Fake Jet"],
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","Inside Zone Split","MTN FK Flat Trail","MTN Flat Y Leak","MTN Flat Y Under","PA Boot Slide","PA Counter","PA Cross","Spacing","Verticals"],
        "Deuce Close": ["0 1 Trap","Bench","Corner Stops","Counter Y","HB Stretch","HB Zone Wk","PA Boot Slide","PA Deep Read","PA Misdirection","PA X Post Cross","Spacing Switch","Zone Split Wk"],
        "Tight Y Off Flex": ["0 1 Trap","Counter Y","HB Toss","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Deep Out","PA Jet Sweep","Shallow Cross","Smash Hammer","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Wing Tight Left": ["Duo","HB Dive","HB Power","Inside Zone","PA Boot Slide","PA Scissors","PA Sprint HB Flat","Stick","Wide Zone"],
        "Wing Tight Nasty": ["Duo","HB Counter Str","HB Inside Zone","HB Smash","MTN HB Smash","MTN PA Boot Lt","MTN PA Y-copo","PA U-drag Wheel","Stick Spacing"]
      },
      "I Form": {
        "Close": ["Dbl Outs","HB Iso","HB Lead Dive","HB Stretch","HB Zone Toss","PA Deep Cross Go","PA Deep Read","PA TE Leak","Stutter Gos"]
      },
      "Strong": {
        "Jumbo": ["FB Dive","HB Dive","Inside Zone Wk","PA Spot","PA Sprint HB Flat","Power O"],
        "Wing": ["FB Dive","HB Dive","MTN Power O","MTN Zone Wk","PA MTN Power","PA Sprint HB Flat"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","HB Counter","HB Dive","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Verticals"],
        "Full House Over Close": ["Counter Y-lead","Deep Choice Y-option","HB Dive","HB Stretch","PA Boot Lt","PA Flood X-post Stop"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Drive Y Corner","Inside Zone","Mesh Slot Out","MTN Deep Over","MTN Drive HB Trail","MTN HB Corner","MTN HB Seam Y-whip","MTN Mesh Drive","MTN Mesh Swing","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Z Swirl Choice","Z Swirl In"],
        "Bunch Str Nasty": ["Bunch Smash","Dagger","Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","MTN Corndog","MTN Corndog Toss","MTN Corndog Trail","PA Corner","PA Cross","PA Double Post","Pin Pull Toss","RPO Zone Read Bubble","Y Trail"],
        "Bunch X Nasty": ["Bounce Mesh Drive","Bounce PA Double Post","Bounce Zone Wk","Corner Out Dig","Counter Y","Dbl Outs","Drive HB Under","Flanker Drive","HB Base","Inside Zone","Mesh Spot","Post Wheel Shallow","Slot Middle","Spacing Switch","Speed Dig","X Cross","Y Corner Pivot","Y Flat Goalline","Y Option Pivot","Z Mesh Goalline","Z Spot Goalline"],
        "Bunch Y  Flex": ["83 HB Choice","Curls Y Swirl","Dagger","Dig Return","Flood","HB Power","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","PA Post Y-corner","RPO Alert Out","Smash Return","Spacing","Spacing Switch","Speed Dig Out","Switch Mills","Verticals"],
        "Deuce Close": ["0 1 Trap","Bench","Both Stick","Chip Dig 7 Stop","Corner Gos Flat","Exit Dagger","Exit Drive","Exit Xover","Inside Zone","Lead Read Option","Mesh Spot","MTN Y Corner","MTN Y Option","Outside Zone","PA Deep Out","PA Post Cross","PA Slide","PA Y Leak","RPO Alert Omaha","RPO Peek MTN Stick","RPO Read Flat Wheel"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Y Off Nasty": ["Counter Y","Cross Y Trail","Dbl Cross H-choice","Double Post","Fake Jet HB Seam","Fork H Traffic","HB Slip Screen","Inside Zone","Jet Pass FK Zone","MTN HB Cross Screen","MTN Slot Fades","MTN Smash","Outside Zone","PA Y Cross","Pivot In Seams","RPO Zone Read Bubble","Same Side Zone","Snag HB Wheel","Tackle Trap","X Dagger","Zone Fake Jet"],
        "Empty Bunch Y Flex": ["Branch Return","Dagger","Flood","Jailbreak Slot Screen","L Spot","QB Draw","Spacing Switch","Speed Dig Out","Swirl Hookn Go"],
        "Empty Chips Nasty": ["Dagger","Deep Post Out","Double 7 Stop","Out X Dig","Post Cross","Slot Sail"],
        "Empty Trips Speed": ["Double In","Flanker Under","Hoss Y Juke","In N Up","Jailbreak Slot Screen","QB Draw","Shockwr Option","Trail Shake","Y Corner"],
        "Flex Y Off Close": ["Counter Y","Curl Ohio","Escape","Flood","HB Circle","HB Slip Screen","Hitch HB Rail","Inside Zone","Levels Mills","MTN Counter Y","MTN FK Rub","MTN Rub Smash","PA Post Shot","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","TE Wheel"],
        "Normal Off Close Wk": ["0 1 Trap","Chip WR Corner","Counter Y","Double Post","Flood Z Drive","HB Scissors","HB Slip Screen","Inside Zone Split","Levels Mills","MTN Outside Zone","MTN PA Y Sit","MTN Zdig","PA Y Cross","Pivot In Seams","RPO Alert Bubble","RPO Peek Slant","RPO Zone Alert","Slants"],
        "Spread Dbl Flex Wk": ["Corner Strike","Flanker Dig","Four Verticals","HB Slip Screen","Hitch Seam","Inside Zone","MTN Corner","MTN Drive","MTN Smash","PA Read","Slants Middle","Vert Comebacks"],
        "Stack Y  Flex": ["Corner Strike","Curl Combo","Double Corner","Drive H Wheel","Fade Out","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","L Spot","Levels","PA Jailbreak Screen","PA Read","Salem Pivot","Y-sail"],
        "Tight Open": ["Bench Dig Pivot","Bench Z Spot","Dig Z Spot","Drive Stutter Flat","FK Drive Stutter","HB Draw","HB Slip Screen","Inside Zone","Mesh Spot","Post Corner Drive","Read Option","Shallow Corner Stop","Slot Post","Speed Option","Spot X Option","Stick","Verticals HB Burst","Z Spot Dig"],
        "Tight Y Off": ["0 1 Trap","Cheat Outside Zone","Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Duo","Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Jet Touch Pass","MTN Mesh Spot","MTN PA Spinner","MTN Slot Choice","MTN Spinner HB Inside","MTN WR Outside Zone","MTN Y-corner","PA Go Slot Cross","Read Option","TE Corner","Wheel Spot","Zone Fake Jet"],
        "Tight Y Off Wk": ["Curls","Drive","Flanker Spot","HB Slip Screen","Outside Zone","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Shallow Cross"],
        "Trey Open Offset": ["5 6 Trap","Curls Dig","Dig Y Cross","Four Verticals","HB Draw","HB Slip Screen","Inside Shock","Inside Zone","Outside Zone","Read Option","Redzone Post Fade","Redzone Under","Redzone Up","RPO Peek Slant","Rz Short Posts","Shockh Option","Slot Drive","Trail Shake","Triple Slant","Y Corner","Y Stick"],
        "Trey Y  Flex": ["Dagger","Empty Slot Under","Empty Vertical","Empty Y Cross","HB Draw","HB Option","HB Pump Draw","HB Slip Screen","Inside Post","Inside Zone","Levels Y Corner","MTN Dbl Outs Swirl","MTN Wheels Slot Choice","MTN Whip Y-shake","PA Crossers","PA Draw Choice","Post Y Dig","Read Option","RPO Alert Omaha","Same Side Zone","Scat","Se Corner","Shockh Option","Verticals"],
        "Trey Y  Flex Str": ["0 1 Trap","Dagger Sit","Double Spot","Flood Sit","Inside Zone","Jet Chip Wasp","MTN Fade Smash","MTN Slot Screen","MTN Stick","Outside Zone","PA Cross Sit","PA Slot Cross","PA Verts","RPO Peek Slant","Verticals Y Cross"],
        "Trio Y  Flex": ["Curl Flat","HB MTN Slot Shake","HB MTN Slot Wheel","HB MTN TE Mid Screen","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Whips","MTN Corner Slot Choice","MTN Mills","MTN Out H-angle","MTN Out N Up","MTN Shock Slot Dig","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shockh Option","Slot Out","Slot Seam","Slot Under H-angle"],
        "Wing Close Offset": ["HB Angle","Inside Zone","PA Fork","RPO Glance Slant","Same Side Zone","Spacing","Spot TE Seam","Stick","TE Attack"],
        "Wing Stack": ["Four Verticals","Inside Zone","Mesh Spot","PA Jailbreak Screen","PA Read","Power O","Read Option","Smash Drive","Stick"],
        "Wing Tight": ["0 1 Trap","Escort Inside Zone Split","Escort PA Crossers","Escort PA Slide","HB Punch","Inside Zone","Mesh Spot","Ohio Spacing","PA Double Post","PA X Curl","QB Zone","Read Option","Same Side Zone","Sluggo Seam","Stick Nod Vertical"],
        "Y Off Trio Close": ["0 1 Trap","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Bounce Dash Crosser","Bounce Inside Zone","Bounce PA Deep Out","Counter Y","Dash Flood","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","HB Pump Draw","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","RPO Zone Peek","Smash Return"],
        "Y Off Trips Nasty": ["Dagger Whip","Flood HB Swing","HB Slip Screen","Inside Zone","MTN X Drag","MTN Y Corner","MTN Y Pivot","PA Double Post","RPO Read Y Flat"],
        "Y Off Trips Wk": ["Chip Corner Strike","Counter Y","Curls Combo","Four Verticals","HB Power O","MTN HB Swing","MTN Pump And Go","MTN Shockh Opt","MTN X Slant Spot","MTN Y Corner","RPO Alert MTN Dive","RPO Alert Split Bubble","Slot 2 Buc","TE Screen","Verticals Y Out"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "colts",
    name: "Indianapolis Colts",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Bunch": ["Duo","HB Dive","HB Slash","Inside Zone Split","PA Boot","PA Boot Slide","PA Sprint HB Flat","Quick Pitch","Spacing","Spot Dig","TE Angle","Y Flat Goalline","Y Trail","Z Mesh Goalline","Z Spot Goalline"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Slam","HB Wham","Inside Zone Split","PA Boot Slide","RPO Alert X Screen","Stick","Switch X Comeback"],
        "Wing Close": ["Dbl Outs","Duo","HB Toss FK Reverse","MTN Out N Up","MTN PA Z Slide","MTN Zone Alert","PA Cross","PA FK Toss Wheel","PA TE Flood","PA Y-drag Wheel","Pitch WR Reverse","Wide Zone"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Duo","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Y Stick"],
        "Wing Stack": ["Flanker Spot","HB Dive","HB Stretch","HB Zone Wk","Jet Sweep","PA Double In Shot","PA Fork","PA Jet Sweep","Zone Fake Jet"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet 6 Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN PA Boot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Slot": ["95 Willie","Dagger","FB Dive Strong","FB Flare","HB Blast","HB Counter","HB Lead Dive","HB Power O","HB Stretch Alert Bubble","HB Toss","PA Boot Comeback","PA Ctr Waggle","PA Flood","PA Power O","PA Shot Post"],
        "Y Off Close": ["Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "I Pro": ["Asa F Flat","Counter Weak","Curls","FB Dive","FB Screen","Go S","HB Iso","MTN Drag F-trail","MTN Fl Drive","MTN HB Stretch","MTN HB Toss","MTN Inside Zone Split","MTN PA Slide","MTN Z Close Ctr Wk","MTN Z Close F-flat","MTN Z Close F-trail","PA F-corner","PA FB Fake","PA Power O","PA Scissors","Powero Alert X Smoke"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","Y Lead Read Option"],
        "Doubles Y Off": ["Fade Smash","HB Dive","Jet PA Cross","Jet Touch Pass","MTN HB Wide Zone Wk","MTN PA Cross","MTN PA Slide","Orbit PA Cross","Orbit PA Y Corner","Orbit Triple Option","PA Cross","PA Deep In","Pin Pull Sweep","Read Option","RPO Read Flat Wheel","Slants","Zone Fake Jet","Zone Split"],
        "East Tight": ["Bench","HB Power O","HB Stretch","HB Zone Wk","Read Option","TE Option"],
        "Strong": ["Asa F Flat","F Lead Read Option","HB Counter","HB Off Tackle","HB Power O","HB Slip Screen","HB Stretch","Inside Zone Split","MTN HB Zone","MTN PA Y Corner","PA Boot Lt","PA Corner HB Slip","PA Flood","Rz MTN PA Crossers","Slants","Tr Opt Switch","Tr Option Slip","X Post"],
        "Wing Close": ["Cheat HB Counter","Cheat TE Screen","Flanker Dig","HB Slam","HB Stretch","HB Zone","L Spot","PA Boot Levels","PA Boot Lt","PA Cheat Deep Post Stop","PA Stretch Shot","TE Attack"]
      },
      "Gun": {
        "Bunch Offset": ["Bench Pivot","Bunch Drive","Corner Out Dig","Curl Flat","Dig Return","Double Post","Flood","HB Cross Screen","L Spot","L Spot N Go","Re","Read Option","Smash Return","Spacing","Speed Dig","Verts HB Under"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Dbl MTN Outside Zone","Dbl MTN Sail Sit","Dbl MTN Shallow Trail","Inside Zone","Mesh Slot Out","Mesh Traffic","MTN Cross HB Choice","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","MTN Spacing","MTN Spot Y Return","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Speed Dig","Speed Dig Out","Z Swirl Choice","Z Swirl In"],
        "Bunch Str Nasty": ["Crack Toss","Dagger","Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","MTN China Wheel","MTN Curls","MTN HB Slip Screen","MTN Mesh Trail","MTN Smash Angle","MTN Trail Fork","PA Bunch Shot","RPO Read Bubble","Y Trail"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Bunch Levels","Inside Zone","MTN Divide","MTN Fork Y-corner","MTN HB Slip Screen","MTN Mesh","MTN Slot Flood","MTN Snag Under","PA Boot Over","PA Slide","QB Wrap","Read Option","Same Side Zone","Spacing","Stick"],
        "Deuce Close": ["Bench Dig Curl","Bench X Dig","Empty MTN Mesh Rail","Empty MTN Spacing","Empty MTN TE Mid Screen","Exit Dagger","Exit Drive","Exit Xover","Inside Zone Split","Lead Read Option","Mesh Spot","MTN PA Slide","MTN Stick","MTN Zone Split","Out N Ups","Return PA Slide","Return RPO Read Flat Wheel","Return Rz Trail","RPO Peek Stick","RPO Read Flat Wheel","Spacing Switch"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Off Close Wk": ["Counter Y","Double Post","HB Slip Screen","Inside Zone","MTN Mesh Rail","MTN Stickx Replace","MTN TE Mid Screen","PA Y Cross","Pivot Inseams","RPO Read Bubble","X Dagger","Y Lead Read Option"],
        "Empty Base Flex": ["All Hitch","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","Redzone Up","RPO Alert Draw Stick","Shockwr Option","Stick","Stick N Nod","Trail Shake","Y Corner"],
        "Empty Bunch": ["Curl Flats","Divide Wheel","L Spot","L Spot N Go","QB Draw","Spacing","Trail","Verticals","Y Curl"],
        "Empty Bunch Wide": ["Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","Post Corner Read","QB Draw","Spacing Switch","Z Spot N Go","Zl Spot Smash"],
        "Flanker Close": ["Bench","Dragon Spacing","Escape","F Choice Spot","HB Counter","HB Sweep","Inside Zone","Mesh Spot","Weak Flood"],
        "Normal Y Off": ["45 Quick Base","Corner Strike","Curl Combo","Double Dig","Four Verticals","HB Slip Screen","Inside Zone","PA Same Side Boot","PA Zone Cross","Read Counter Bash","Read Option","RPO Peek Slant","Same Side Zone","Slant Flat","Stick Slot Option"],
        "Split Close": ["Dbl Ins","Dig Slot Out","Double Swirl","FB Inside","HB Choice","HB Power O","HB Rail","HB Slip Screen","HB Wheel","L Spot","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","PA F Slide","Read Option","Scat","Swirl Curls","Triple Option Lt","WR Corner","WR Corners"],
        "Spread Flex Wk": ["Corner Strike","Double Cross","Double Slants","Four Verticals","HB Base","HB Scissors","HB Slip Screen","Hitch Seam","Inside Zone","PA Read","RPO Peek Slant","RPO Read Bubble","Slot Outs","Spot Y Cross","Under"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","Empty MTN Mesh Rail","Empty MTN Whip Flood","Empty MTN Z Spot","HB Draw","HB Slip Screen","Inside Zone","Mesh Spot","MTN Gl X Spot","MTN HB Slip Screen","MTN Mesh Spot","Read Option","Speed Option","Spot X Option","Verticals HB Burst"],
        "Tight Y Off Wk": ["0 1 Trap","Clearout Sideline Outs","Curls","Dig HB Option","Duo","Flanker Spot","HB Slip Screen","In Quick Outs","Inside Zone","Mesh Spot","Outside Zone","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Shallow Cross","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Smash Hammer","Spot Y Middle","Tackle Trap","WR Under","Y Lead Read Option","Z Dagger"],
        "Trey Open": ["Corner Strike","Dagger Deep Curl","Double Ins","Four Verticals","HB Slip Screen","Inside Zone","Jet New Orleans","Levels Switch","PA Read","Read Option","Shockh Option","Slants","Stick","Y Corner","Y-drag"],
        "Trips TE Flex": ["China Post Rail","Dagger","HB Angle","HB Slip Screen","Levels Sail","MTN Fork H Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","PA Fork","PA Shot Crossers","Read Option","RPO Zone Alert Omaha","Verticals","Y Out N Up"],
        "Trips TE Flex Close Wk": ["Bounce Inside Zone","Bounce Read Option","Bounce Shallow Cross","China Y-shake","HB Power","HB Slip Screen","Inside Zone","Mid Zone","MTN Dagger","MTN Fake Screen Wheel","MTN HB Swing","MTN Mesh Gos","MTN Mesh Rail","MTN Smash Slot Choice","Outside Zone","PA Deep Sail","PA Flood","Read Y Corner","Return PA Deep Sail","Return Post Curl","Return RPO Alert Swing","Return Sprint Comeback","Return Sprint Spot","Return Sprint TE Screen","RPO Read Bubble","Same Side Zone","Shallow Slot Fade","Stick","Switch Dagger","Verticals"],
        "Wing HB Wk Close": ["Curl Combo","Dash Flood","HB Base","HB Counter U","Mesh Spot","Outside Zone","PA Cross","PA Y Over","Spacing"],
        "Wing Slot Offset": ["Dragon Spacing","Drive","Duo","Fake Jet HB Wheel","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet Pass FK Zone","Jet Power Read","Jet QB Counter","Mesh Spot","Outside Zone","PA Double Post","PA Jet Sweep","PA Read","QB Zone","Read Option","Same Side Zone","Sft MTN Counter Y","Sft MTN Gt Counter","Sft MTN HB Toss","Sft MTN Inside Zone Split","Sft MTN PA Slide","Sft MTN PA Slot Corner","Smash","Zone Fake Jet"],
        "Wing Stack": ["Four Verticals","Inside Zone","Levels","Mesh Spot","Ohio Spacing","PA Read","PA Slide","Power O","Read Option","Smash Drive","Stick","Y Lead Read Opt"],
        "Y Off Trips": ["Counter Y","Deep Stick","Duo","Four Verticals","HB Slip Screen","Inside Zone","MTN Counter Y","MTN Curl N Go","MTN PA Smash","MTN Stick","MTN Stick N Nod","MTN Y Screen","PA Double Post","Read Option","Return Curls","Return PA Corner Strike","Return RPO Alert Flat","RPO Bubble Y Pop","RPO Glance Post","RPO Read Screen","RPO Read Y Flat","Same Side Zone","Sprint Flood","Verticals Dig"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "commanders",
    name: "Washington Commanders",
    style: "West Coast / Run Balanced",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","MTN HB Zone Wk","MTN PA Boot Over","MTN PA Switch Replace","PA Draw Shot","PA Jet Sweep","Power Alert Bubble","Spacing","Stick","Switch Snag","Verticals","WR Power Fake Jet","Zone Fake Jet"],
        "Deuce Close": ["0 1 Trap","Bench","Counter Y","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","PA Boot Slide","PA Drag Wheel","PA Misdirection","PA MTN Spider Y Leak","PA X Post Cross","Spacing Switch","Stick","Zone Split Wk"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Slam","Inside Zone Split","Jet Sweep","PA Boot Screen","PA Boot Slide","PA Fly Sweep","RPO Alert X Screen","Stick","Switch X Comeback","Zone Fake Jet"],
        "Doubles Y Off": ["Counter Y","HB Dive","HB Slip Screen","Jet HB Trap","Jet PA Y Screen","Jet Paboot","Jet Sweep","PA Jet Sweep Scissors","PA Jet Sweep X Out"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Post Dig"],
        "U Off Trips Cluster": ["HB Slip Screen","HB Stretch","HB Toss Lt","Inside Zone","MTN HB Draw","MTN HB Power","MTN Mesh HB Rail","MTN PA Draw","MTN PA Y Corner","MTN Zone Toss","PA Boot","PA Boot Slide","PA Dagger U Cross","PA Flood","Stick"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Duo","HB Zone Wk","MTN Drive Shake","MTN HB Stretch","MTN HB Stretch Lt","MTN Jet Sweep","MTN PA Boot Corner","MTN PA Boot Drive Corner","MTN PA Jet Sweep","MTN Slot Option","MTN Zone Fake Jet","PA Cross Country","Stick"],
        "Wing Pair": ["HB Dive","HB Duo","HB Inside Zone","PA Sprint HB Flat","TE Attack","Y Stick"],
        "Wing Tight U": ["Dragon Spacing","Fake HB Zone QB Boot","HB Counter Str","HB Dive","HB Duo","HB Inside Zone","Inside Zone Split","Jet Sweep","MTN HB Power O","MTN HB Stretch","MTN PA Power O","PA Boot Slide","PA Dive","PA Jet Sweep","PA Sprint HB Flat","PA U-drag Wheel","TE Attack","Zone Fake Jet"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet 6 Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN PA Boot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Wing": ["FB Dive","FB Fake HB Toss","HB Counter Wk","HB Power G","HB Power O","HB Stretch","PA Boot Flow","PA Power O","PA Sprint HB Flat","PA X Burst Cross","Post Shot","Zone Wk"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Pistol": {
        "Double Hip": ["FK Jet Divide","HB Zone Wk","Jet PA Cross","Jet PA Cross HB Leak","Jet Touch Pass","Mesh Rail","MTN HB Slip Screen","MTN PA Boot Fork","MTN Pin Pull Sweep","PA Post Swirl","Read Option","RPO Alert Jet Slant","Tech Out","Z Shake Crosser","Zone Fake Jet"],
        "Full House": ["Counter Lead","HB Off Tackle","HB Slam","PA Boot","PA Comebacks","PA Flood FB Slip","PA HB Wheel","PA X Post","Read Option Wk","Slants","Tr Opt Switch","Triple Option"],
        "Strong Slot Open": ["Boomerang HB Off Tackle","Boomerang PA Wheel","Boomerang Slot Triple Option","F Lead Read Option","Inside Zone Split","Mesh","Mesh Dig","Mid Slants","PA Slide","RPO Alert Bubble","RPO Alert X Lookie","Scat","Shakes","Y Corner","Y Cross"],
        "Trips Left Open": ["Close HB Dive","Counter Alert Flat","Flood Post","Mesh Dig","Out N Under","RPO Read Bubble","Scat","Y Stick","Zone Alert Bubble"],
        "Wing Flex Close": ["HB Zone Wk","Jet Pass FK Zone","MTN Dig Gos","MTN Fork H-choice","MTN Slot Comeback","PA Boot Lt","PA Flood","RPO Alert WR Screen","RPO Read Jet Slide","Spacing","Speed Option","Stick","Wide Zone","WR Under","Zone Fake Jet"]
      },
      "Gun": {
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Drive Y Corner","Inside Zone","Mesh Slot Out","MTN Deep Over","MTN Mesh Drive","MTN Mesh Swing","MTN Slot Hitch","MTN Snag Under","MTN Y-option","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Z Swirl Choice","Z Swirl In"],
        "Bunch Str Offset": ["Corner Strike","Dagger","Duo","Flood","Inside Zone","Lead Swing Spot","MTN Diamond Fake Mesh Rail","MTN Diamond Mesh","MTN Diamond X-cross Trail","MTN Empty Dig Spot","MTN Empty Posts Y-trail","MTN Emptyqb Sweep","MTN FK Toss Verticals","MTN HB Base","MTN Lead Toss","MTN PA Flood Y-delay","MTN PA Spinner","MTN PA Switch Cross","MTN RPO Alert Swing","MTN Spinner HB Inside","MTN WR Outside Zone","Read Option","Return PA Flood","Return RPO Alert Flat","Return Spacing","Rz PA Corner","Seattle","Slant Spacing","Speed Option Wk","Y Trail"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","HB Counter Lead","Inside Cross","Mesh Z-option","MTN Fork Y-corner","MTN HB Slip Screen","MTN HB Stretch","MTN HB Swing","MTN Jailbreak Screen","MTN PA Cross Switch","MTN PA Slide","MTN Power Read Toss","MTN Read Option","MTN Slot Skinny","MTN Snag Under","MTN Split Zone"],
        "Deuce Close": ["Bench Dig Curl","Inside Zone","Mesh Spot","MTN Return H-trail","MTN Return HB Toss","MTN Return Y-shake","MTN WR Corner","MTN Y Corner","MTN Y Option","Outside Zone","PA Deep Curls","PA Deep Over","RPO Peek Stick","Spacing Switch","Stick Switch"],
        "Double Stack": ["Fake Screen Go","Four Verticals","RPO Alert Screen","RPO Alert Trap","RPO Read Fl Screen","Smash"],
        "Doubles Clamp Stack": ["Counter Y","Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Same Side Zone","Spot Choice","Texas Smash","Texas Y-stutter Wheel","Y Ohio Return"],
        "Doubles Y Off": ["Bounce HB Power","Bounce RPO Read Bubble","Bouncex Spot","Counter Y","Curl Combo","Four Verticals","HB Scissors","HB Slip Screen","Inside Zone","Jet Pass FK Zone","Mid Zone","MTN Empty FK Screen Wheel","MTN Empty Wrscreen","MTN Emptyqb Blast","MTN PA Sweep H-angle","MTN PA Sweep Seams","MTN WR Load Option","MTN WR PA Spot","MTN WR Sweep","MTN WR Triple Option","PA Go Slot Cross","PA Jet Sweep","Read Option","RPO Alert Counter Bubble","Rz Scissors Salem","Shark HB Wheel","Zone Fake Jet"],
        "Empty Base": ["686","Curl Flats","Dig Curl Read","Inside Cross","Jet Touch Pass","Mesh","QB Draw","Shock","Slot Drive","Spot N Go","Stick","Stickn Nod","Verticals Shake","Wrmid Screen","Y Corner"],
        "Empty Bunch": ["Curl Flats","Divide Wheel","L Spot","QB Draw","Spacing","Trail","Verticals","Y Curl","Z Spot N Go"],
        "Empty Chips Tight": ["Dagger","Deep Post Out","Double 7 Stop","Out","Outs","Post Cross"],
        "Empty Quads": ["Curl Pivot Dig","Four Verticals","Out Double Under","QB Draw","Vert Double Under","WR Screen"],
        "Go Go Slot Open": ["HB Swing","Inside Zone","Levels","PA Fin","PA Flood","RPO Read HB Flat","Spot Lead Swing","Sprint Out Flood","Triple Option Rt"],
        "Heavy": ["Mesh Sit","MTN Counter","MTN HB Dive","MTN Inside Zone","MTN Inside Zone Split","MTN PA Slide","MTN Spot","QB Blast","QB Power"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Slash Wheel In","Cheat TE Angle","Double Slant","Escape","FK Jet Y Wheel","Flood H Post","HB Scissors","Inside Zone","Jet Touch Pass","Mesh Spot","MTN HB Swing","MTN Snag Curls","MTN TE Middle Screen","Power Read","Read Option","RPO Alert Out","RPO Glance Post","Same Side Zone","Y-sail","Zone Fake Jet"],
        "Split Slot Offset": ["HB Slip Screen","HB Sweep","Inside Zone Lt","MTN Double Pass","MTN Inside Zone","MTN PA Counter","MTN PA HB Swing","MTN RPO Peek Swing","MTN Slot Cross","MTN Spot","MTN Y Stick","PA Deep Cross","PA Sneak Corner","RPO Read Cntr","Shakes","Slants Middle","Speed Option","Triple Option Lt"],
        "Spread": ["95 Y Cross","Four Verticals","Gt Read Option","H Wheel","HB Draw","HB Slip Screen","Inside Zone","Mesh","PA Gt Z Tunnel","PA Slot Cross","PA Slot Slide","Read Option","RPO Read Slot Slide","Slot Fades","Smash HB Seam","Whip HB Rail","Y Shallow Cross","Y Stick"],
        "Tight": ["Bench","Bench Swirl-return","HB Draw","HB Quick Base","HB Sweep","L Spot","Mesh Pyramid","Mesh Spot","PA Deep Post","PA Slot Options","Read Option","Slot Stick"],
        "Tight Offset TE": ["0 1 Trap","Bench","Drive Out","HB Slip Screen","Inside Zone","Mesh Spot","PA Seams","Slot Outs","Spot","Stick","Stick N Out","Y Out"],
        "Trey Open Offset": ["Drive Under","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","Mesh Wheel","MTN Four Verticals","MTN HB Swing","MTN Spot Y Corner","PA Read","Read Option","Redzone Up","RPO Peek Slant","Shockh Option","Y Corner"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "U Off Trips": ["Counter Y","Deep Post Corner","Duo Wrap","Inside Zone","Lead Read Option","Mesh Wheel","MTN Curls Y Corner","MTN Duo","MTN Jet Sweep","MTN PA Jet Cross","MTN PA TE Leak","MTN QB Blast","PA U Corner Flood","Post Wheel Shallow","QB Power G","Read Option","RPO Alert Bubble","RPO Alert X Gift","RPO Read Flat","Shock","Z Short Cross"],
        "Wing Slot Offset": ["0 1 Trap","Dragon Spacing","Duo","HB Slip Screen","Inside Zone","Jet Pass FK Zone","L Close Toss","Mesh Spot","MTN Counter","MTN Inside Zone Split","MTN PA Slide","Ohio Spacing","PA Double Post","PA Jet Sweep","PA Read","Power O","QB Power","QB Zone","Read Option","RPO Alert Bubble","Same Side Zone","Smash","TE Spot Ohio","Verts Choice","Z Close Duo","Zl Close PA Flood","Zone Fake Jet"],
        "Y Trio Offset Wk": ["Curls Combo","Flood","Four Verticals","HB Power O","HB Slip Screen","Hi Lo Dig","Inside Zone Split","MTN Outside Zone","MTN Z Spot","PA MTN Zig Cross","RPO Peek Post","Slot Fade","Smash Out Y-cross","Stick","Y Lead Read Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "cowboys",
    name: "Dallas Cowboys",
    style: "Spread / Balanced",
    formations: {
      "Singleback": {
        "Ace Close": ["Bench","HB Stretch","HB Zone Wk","Jet Sweep","PA Cross","PA Jet Sweep","Stick","Y Seam","Zone Fake Jet"],
        "Bunch": ["Counter Y","Crack Toss","Dig Return","Duo","End Around Lead","Flanker Drive","HB Draw","HB Fake End Around","HB Zone Wk","Inside Zone Split","L Spot","PA Boot","PA Boot Slide","PA Draw Pass","PA End Around Sift","PA Sprint HB Flat","Spacing","Spot Dig","TE Hook","Verticals","Y Flat Goalline","Y Trail","Z Mesh Goalline","Z Spot Goalline"],
        "Deuce Close": ["0 1 Trap","Bench","Counter Y","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","PA Boot Slide","PA Drag Wheel","PA Misdirection","PA MTN Spider Y Leak","PA X Post Cross","Spacing Switch","Stick","Zone Split Wk"],
        "Doubles": ["Bubble Screen","Curl Flats","Dagger","Flanker Dig","Four Verticals","Goalline Fade","HB Cutback","HB Iso","HB Power O","HB Pump Draw","HB Slip Screen","HB Stretch","Inside Zone","Levels Divide","PA Boot Rt","PA Stretch","PA Y-sail","Slants"],
        "Wing": ["Close PA Cross","Close PA Sail","Close Zone Strg","Curl Combo","HB Duo","HB Inside Zone","HB Stretch Alert Lookie","HB Zone Toss","MTN HB Counter","MTN PA Boot","MTN PA Cross","PA Boot Lt","PA Y-drag Wheel","TE Attack","Y Stick"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Sprint HB Flat","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Pair": ["Duo","HB Counter Wk","HB Dive","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Y Stick"],
        "Wing Stack": ["Flanker Spot","Four Verticals","HB Dive","HB Duo","HB Stretch","HB Zone Wk","Jet Sweep","PA Dig","PA Double In Shot","PA Fork","PA Jet Sweep","Zone Fake Jet"],
        "Wing Tight Left": ["26 Duo","HB Dive","HB Power","Inside Zone","Jet Sweep Wk","PA Boot Slide","PA Jet Sweep","PA Scissors","PA Sprint HB Flat","Stick","Wide Zone","Zone Fake Jet Wk"],
        "Y Off Trio Close": ["0 1 Trap","HB Duo","HB Outside Zone","HB Zone Wk","Mesh","MTN Shuffle Smash","MTN Shuffle Y-trail","MTN Shuffle Z-post","PA Cross Dig","PA Slide Cross","PA TE Screen","Read X-choice","Spacing X-choice","Stick","Y Shallow Cross"]
      },
      "I Form": {
        "Slot": ["94 Will","Dagger","Double Slant","HB Blast","HB Counter","HB Draw","HB Stretch","PA Boot Comeback","PA Flood","PA Sprint HB Flat","PA Y Throwback","Y Cop Smash"],
        "Wing": ["Counter Wk","Curls","FB Dive","FB Fake HB Flip","HB Lead Dive","HB Toss","Iso","PA Boot Flow","PA Clearout","PA Spot","Stretch Alert X Lookie","TE Option","TE Post","WR Corner","X Slant"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Close": ["Angle Out","Counter Weak","Dbl Outs","End Around","HB Dive","HB Slash FK End Arnd","HB Stretch","HB Zone Toss","HB Zone Wk","Mesh","PA Deep","PA End Around","PA Scissors","PA Sprint HB Flat","Y Trail"],
        "Z Close": ["Counter Weak","End Around","Fake End Around","Flanker Drive","HB Dive","HB Duo Alert X Lookie","HB Stretch","PA Cross","PA Post Dig","PA Power O","PA Sail","PA Slide","PA Sprint HB Flat","PA WR In","Slant Spacing"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","HB Counter","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Spot Option","Stick","Verticals","WR Screen"],
        "Strong Y Off Close": ["HB Dive","HB Slip Screen","HB Zone","PA Slide","Read Option","Spot Lead Swing","Trail Speed Out","Y Cross","Z Slant Y Corner"],
        "Trips": ["Curl Flat","Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Stretch","Inside Cross","Inside Smash","PA Boot Lt","PA Ctr Waggle","PA HB Flat","Read Option","Slants","Smash","Stick","Strong Power","Verticals"]
      },
      "Gun": {
        "Bunch Open TE": ["Dig Return","Fake Screen Verticals","Flood","HB Draw","HB Slip Screen","L Spot","MTN Mesh Flat","MTN RPO Read Snag Wheel","MTN Sprint Flat Z Spot","RPO Alert Bubble","RPO Alert WR Screen","Y Trail"],
        "Bunch Quads Close": ["Drag Under","Inside Post","QB Draw","Slant Spacing Dig","Spot","TE Angle"],
        "Bunch Spread Nasty": ["Corner Divide","Drive Y Corner","HB Slip Screen","Inside Zone","Mesh Slot Out","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Speed Dig Out","Z Swirl Choice","Z Swirl In"],
        "Bunch Wide": ["Branch Return","Cross Screen","Curl Flat","Dig Return","Drive Y Corner","Inside Zone","Jet Pull Shallow","L Spot","MTN Inside Zone Split","MTN PA Crossers","MTN PA Slide","PA Post","Seam Divide","Slot Hook","Spacing","Speed Dig Out","Verticals","Y Trail"],
        "Doubles Clamp Stack": ["Counter Y","Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Same Side Zone","Spot Choice","Texas Smash","Texas Y-stutter Wheel","Y Ohio Return"],
        "Doubles HB Wk": ["Boomerang 0 1 Trap","Boomerang Slot Swing","Boomerang Y Delay","Corner Strike","Curl Combo","Double Slants","Four Verticals","HB Base","HB Slip Screen","Inside Zone","MTN Buck Sweep","MTN HB Base","MTN PA Cross","PA Y-cross","Pin Pull Sweep"],
        "Doubles Y Off Nasty": ["Counter Y","Cross Y Trail","Double Post","HB Slip Screen","Inside Zone","MTN HB Cross Screen","MTN Slot Fades","MTN Smash","Outside Zone","PA Y Cross","Pivot In Seams","RPO Zone Read Bubble","Snag HB Wheel","Tackle Trap","X Dagger"],
        "Doubles Z Close": ["Double Slant Spot","Escape","HB Draw","Inside Zone","L Cross Out","Mesh Spot","MTN HB Sluggo","MTN Shock Y-option","MTN Smash Y-zig","Read Option","RPO Glance Post","Y-sail"],
        "Empty Base Flex": ["All Hitch","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Redzone Up","Shockwr Option","Stick","Strong Curl","Trail Shake","Verticals Under","Y Corner"],
        "Empty Bunch Wide": ["Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","L Spot N Go","Post Corner Read","QB Draw","Spacing Switch","Z Spot Smash"],
        "Normal Y Off Wk": ["Close MTN PA Slide","Close MTN Z Under","Close Mtny Read Option","Counter Bash","Curl Combo","HB Draw","HB Slip Screen","Inside Zone","MTN Inside Zone","MTN PA Flood HB Leak","MTN Slot Fade","MTN Y Slot Cross","MTN Y Switch Slants","MTN Ywr Screen","PA Slide","PA Slot Cross","QB Power","X Dagger"],
        "Split Close": ["Dbl Ins","Dig Slot Out","Double Swirl","FB Inside","HB Choice","HB Power O","HB Rail","HB Slip Screen","HB Wheel","L Spot","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","PA F Slide","Read Option","Scat","Swirl Curls","Triple Option Lt","WR Corner","WR Corners"],
        "Spread Y  Flex Wk": ["Corner Strike","Double Cross","Double Slants","Four Verticals","HB Slip Screen","Hitch Seam","Inside Zone","MTN Curls Divide","MTN Curls Y-seam","MTN Slants Y-stick","MTN Spot Dig Ohio","MTN Verts H-choice","MTN Z Spot","PA Read","RPO Peek Slant","RPO Read Bubble","Slot Outs","Spot Y Cross"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","Drive Stutter Flat","FK Drive Stutter","HB Draw","HB Scissors","HB Slip Screen","Inside Zone","Mesh Crossers","Mesh Spot","Read Option","Spot X Option","Verticals HB Burst"],
        "Tight Slots": ["Bench","Drive Trail","HB Draw","HB Quick Base","HB Sweep","Jet Pass FK Zone","Mesh","Mid Zone","MTN Bench Snag N Go","MTN HB Draw","MTN Inside Zone","MTN PA Flood Under","MTN PA Slide","MTN Salem Slot Option","Out N Ups","PA Flood Shot","PA Shot Portland","PA Slide","PA Zone FK Jet","Stick","Zone Fake Jet"],
        "Trey Open": ["Corner Strike","Curl HB Burst","Dagger Deep Curl","Four Verticals","HB Angle Screen","HB Base","HB Cross Screen","HB Draw","HB Off Tackle","HB Slip Screen","Inside Zone","Levels Switch","Mesh","PA WR In","Read Option","RPO Alert Draw Stick","Same Side Zone","Shockh Option","Slants","Strong Flood","Y-drag"],
        "Trey Open Str": ["Dbl Ins","Fade Stop","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Levels Switch","Mid Zone","Read Option","RPO Peek Bubble","RPO Peek Slant","RPO QB Alert Draw","Scissors","Slot Fade","Stick"],
        "Trio Y  Flex": ["Dagger","Dash Flood Switch","Deep Flood","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Dagger","Mesh Whips","Mills","MTN Corner Slot Choice","MTN Out H-angle","MTN Out N Up","MTN Shock Slot Dig","MTN Slot In","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Same Side Zone","Shockh Option","Verticals"],
        "Trips TE Offset": ["Curl Combo","Fake Screen Wheel","Flip QB Wrap","Flood","HB Flip Counter","HB Slip Screen","Levels Sail","PA Crossers","Read Option","RPO Alert Bubble","RPO Alert WR Screen","Scat","Shockh Option","Speed Option","Stick","TE In","Verticals"],
        "Wing Slot Offset": ["0 1 Trap","Double Stick","Dragon Spacing","Drive","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet HB Duo","Jet PA Cross","Jet Pass FK Zone","L Close Toss","Mesh Spot","Outside Zone","PA Double Post","Read Option","Same Side Zone","Sft MTN Counter Y","Sft MTN HB Toss","Sft MTN PA Slot Corner","Smash","Z Close Duo","Zl Close PA Flood"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "dolphins",
    name: "Miami Dolphins",
    style: "Spread / Run N Gun",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Cheat HB Slash","Counter Y","Crack Toss","HB Dive","HB Slash","Inside Zone Wk","Jet Sweep Wk","PA Boot","PA Boot Cheat Slide Levels","PA Boot Corner Post","PA Cheat Wheel Post","PA Cross","PA Deep Out","PA Jet Sweep","PA Post Curl Shot","Spacing","Wide Zone Wk","Zone Fake Jet Wk"],
        "Tight Y Off": ["Cheat HB Dive Wk","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Stretch","HB Zone Wk","Inside Zone Split","Jet Sweep","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Jet Y Leak","PA Leak","PA Post Dig","Zone Fake Jet"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Toss FK Reverse","HB Zone Toss","HB Zone Wk","PA Cross","PA FK Toss Wheel","PA TE Flood","PA Y-drag Wheel","Pitch WR Reverse","Wide Zone"],
        "Wing Pair": ["24 Zone Open","HB Counter Wk","HB Duo","HB Inside Zone","HB Stretch","PA Boot Lt","PA Sprint HB Flat","PA WR Screen","PA X Burst Cross","TE Drive","Vertical HB Out","Y Stick"],
        "Wing Tight Nasty": ["26 Duo","HB Counter Str","HB Inside Zone","HB Smash","MTN HB Smash","MTN PA Boot Lt","MTN PA Y-copo","PA U-drag Wheel","Stick Spacing"]
      },
      "I Form": {
        "Close": ["95 Mike","Dbl Outs","HB Iso","HB Stretch","HB Zone Toss","PA Boot Flow","PA Deep Cross Go","PA Deep Read","PA Spider Mesh","PA TE Leak","Power O","Stutter Gos"],
        "Slot": ["94 Will","Double Slant","FK Jet HB Shovel","HB Blast","HB Dive Alert Bubble","Jet FK Shovel","PA Boot","PA FB Flat","PA FK Jet FK Shovel","PA Post Shot","PA X Dagger","Stretch Alert Bubble"],
        "Slot Close": ["94 Will","HB Blast","HB Stretch","Jet Sweep","PA Jet Sweep","PA Spot","PA Sprint HB Flat","Spacing","Zone Fake Jet"],
        "Tight": ["95 Mike","FB Dive","Goal Line Fade","HB Duo","HB Iso","HB Power O","HB Stretch","PA Boot","PA Sprint HB Flat","PA TE Corner","Stretch Alert U Pop","Z Slant"],
        "Y Off Close": ["Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Weak": {
        "Slot Close": ["94 Will","HB Dive","Inside Zone Split","Mesh","PA Boot Slide","PA Flood"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Strong Power","Verticals"],
        "Deuce Close": ["Bench","Cheat Counter Y","HB Dive","HB Stretch","PA Boot Y Leak","RPO Read Cheat Wheel Flat"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Z Slant Y Corner"],
        "Tight Y Off Flex": ["Bench Switch","Cheat FK Swing Wheel","Cheat HB Double Pass","Cheat HB Zone","Cheat Swing Flat","Cheat TE Double Pass","Counter Y","Deep Post Switch","HB Zone Wk","PA Cheat Post Comeback","RPO Read Flat Wheel","Wheel Switch"],
        "Wing Close": ["Cheat HB Counter","Cheat TE Screen","HB Slam","HB Stretch","L Spot","PA Boot Levels","PA Boot Lt","PA Cheat Deep Post Stop","RPO Power Alert Outs"],
        "Wing Flex Close": ["Jet Pass FK Zone","MTN Dig Gos","MTN Fork H-choice","MTN Slot Comeback","PA Boot Lt","RPO Read Jet Slide","Spacing","Wide Zone","Zone Fake Jet"],
        "Wing Slot": ["Dagger","Four Verticals","HB Slam","Jet Pass FK Zone","Jet Touch Pass","PA Corner Post","Y Stick","Zone Alert Bubble","Zone Fake Jet"]
      },
      "Gun": {
        "Bunch": ["Bunch Trail","Cheat Inside Zone","Fake Reverse","HB Base","HB Mid Draw","L Spot","Mesh Spot","PA Cheat Divide Wheels","PA Post","Reverse","RPO Zone Alert Cheat","Spacing Switch","Verticals","Y Curl","Zl Spot N Go"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Dbl MTN Outside Zone","Dbl MTN Sail Sit","Dbl MTN Shallow Trail","Drive Y Corner","Inside Zone","Mesh Traffic","PA Post","Shock HB Wheel","Speed Dig"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Curl Flat Corner","HB Slip Screen","Inside Zone","Mesh","MTN Divide","MTN Fork Y-corner","MTN HB Slip Screen","MTN HB Stretch","MTN HB Swing","MTN Jailbreak Screen","MTN Mid Zone","MTN PA Cross Switch","MTN Read Option","MTN Return Cross Up","MTN Return Drive Flat","MTN Return Flood Stick","MTN Slot Flood","MTN Snag Under","MTN Spacing","PA Boot Over","RPO Alert Bubble","Spacing","Triple Out","X Spot"],
        "Bunch Wide Nasty": ["Branch Return","Cheat Drag Rub Crosser","Cheat Wheel Post","Choice Shallow Dig","Corner Out Dig","HB Angle Screen","HB Slip Screen","Inside Zone","Jet Shallow Swirl","L Spot","Spacing Switch","Verticals"],
        "Cluster HB Str": ["45 Quick Base","Flanker Drive","HB Slip Screen","L Spot","Mesh Spot","MTN Cross Switch","MTN HB Draw","MTN Mesh","MTN Mesh Post","MTN Mesh Rewind","MTN Slot Screen","PA Read","Post Curls","Post Dig","Read Option","Spacing","Spot Lead Swing","Verticals"],
        "Deuce Close": ["Bench Dig Curl","Chip Dig 7 Stop","Counter Y","Inside Zone","Mesh Spot","PA Post Cross","Poco X Dig","RPO Read Flat Wheel","Stick Switch"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Y  Flex": ["Combo HB Option","Corner Strike","Four Verticals","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","L Spot","Mid Zone","Ohio Triple Cross","Out Levels","PA Read","Read Option","RPO Zone Peek","Slants","Slot Cross","Stick","Y-sail"],
        "Empty Bunch Wide": ["Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","L Spot N Go","Post Corner Read","QB Draw","Spacing Switch","Zl Spot Smash"],
        "Empty Chips Quads": ["Cheat FK Screen Cross","Cheat Jailbreak WR Screen","Cheat Texas X Sluggo","Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Flex Trey": ["Curl Flats","Deep Curls","Double Switch","Drive Smash","Empty Stick","Four Verticals","Hitch Corners","Jailbreak Slot Screen","Middle Slant","Shallow Cross","Slot Corner","Stick N Nod","Strong Flood","Verticals Y Shake","WR Comebacks"],
        "Go Go Twins Flex": ["HB Base","HB Counter","HB Lead Draw","HB Slip Screen","Inside Zone Split","Mesh Switch Rail","Mesh Traffic","PA Flood H-corner","Texas X-choice"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Inside Zone","Cheat Slash Wheel In","Cheat TE Angle","Cheat TE Screen","Exit HB Cross Screen","Exit PA Smash","Exit RPO Zone Hitches","FK Jet Y Wheel","HB Scissors","Jet Touch Pass","MTN Angle Y Wheel","MTN Dash Flood","MTN Inside Zone","MTN PA Boot","MTN Slot Shallow Cross","MTN Switch Corner","PA Jet Sweep","Read Option","Reload HB Sweep","Reload Mesh Spot","Reload PA Cross","Reload PA Deep Sail","Reload Quick HB Trail","Reload RPO Zone Snag","RPO Alert Cheat Bubble","RPO Glance Post","Rz Cross HB Choice","Y-sail","Zone Fake Jet"],
        "Split Close": ["Clearout Crosser","Close FB Trail","Closex Drag","Dbl Ins","Dig HB Rail","Dig Slot Out","Double Swirl","Drive HB Wheel","FB Inside","HB Gut","HB Option","HB Power O","HB Slip Screen","HB Wheel","Mesh","PA F Slide","Pivot Dig","Read Option","Scat","Swirl Curls","WR Corners"],
        "Split Close Pro": ["Cheat FB Power O","HB Angle","HB Option","HB Power O","Inside Zone Split","PA Cheat Double Crossers","PA Cheat Wheel Post","PA Cheat Wrap Cross","PA Y Cross","RPO Peek Cheat Wrap Go","RPO Zone Peek","Y Curl Post"],
        "Tight": ["Bench","Bench Spray","Bench Swirl-return","Cross H Divide","Deep Read","Drive","HB Draw","HB Quick Base","HB Sweep","Mesh Spot","MTN Drive Sluggo","MTN Slant Whip In","MTN Smash Y-shake","PA Clear Cross","Stick"],
        "Tight Slots HB Wk": ["Bench","Bench Swirl","Flood","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mesh Spot","Post Wheel Drag","Read Option","Scissors","Stick Switch"],
        "Tight Y Off": ["0 1 Trap","Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","PA Go Slot Cross","PA Jailbreak Screen","RPO Alert Bubble","RPO Peek Slant Bubble","Stick","Switch WR Drag","Wheel Spot"],
        "Tight Y Off Wk": ["0 1 Trap","Cheat Outside Zone","Curls","Duo","FK Cheat HB Stretch","HB Power O","In Quick Outs","PA Cheat Comeback Go","PA Cheat Wheel Post","PA Corner","PA FK Cheat Post Cross","PA FK Cheat Quick Out","PA FK Cheat WR Screen","RPO Zone Alert Glance","RPO Zone Alert Omaha"],
        "Trey Open": ["Double Ins","Drag Verticals","Four Verticals","HB Angle Screen","HB Off Tackle","Inside Zone","Jet New Orleans","Levels Switch","Mid Zone","PA Read","PA Slot Under","PA WR In","Read Option","Shockh Option","Stick","X Cheat H Post","Y Corner","Y-drag"],
        "Wing Slot Offset": ["0 1 Trap","Cheat HB Jailbreak Screen","Cheat Inside Zone","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Dragon Spacing","Duo","Four Verticals","HB Slip Screen","Outside Zone","PA Cheat Comeback","PA Cheat Dagger","PA Read","QB Zone","Read Option"],
        "Wing Slot Offset Wk": ["Bounce Inside Zone Lt","Bounce PA Corner","Bounce Spot Curl","Cross Corner Strike","Double Post","Double Smash","Drive Whip Smash","FK Slant Out","HB Draw","HB Slip Screen","Inside Zone","Mesh HB Corner","MTN HB Base","MTN Mesh Traffic","MTN PA Cross","Outside Zone","PA Dagger","PA Slot Fade","RPO Peek Post","Slant Stick","Smash"],
        "Y Trips Wk": ["Cheat Comebacks In","Cheat Crossers","Cheat HB Draw","Cheat Slot Cross","Cheat Strong Flood","Clearout","Curls X Go","Divide Y Hitch","Four Verticals","Goalline Fade","HB Base","HB Mid Zone","HB Slip Screen","Inside Attack","Inside Zone","Levels Y Corner","Outside Zone","PA WR In","RPO Peek Slant","Shockh Option","Slants","Slot Seam","Under","Y Stick HB Angle"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "eagles",
    name: "Philadelphia Eagles",
    style: "Spread / RPO Heavy",
    formations: {
      "Singleback": {
        "Ace Dbl Wing": ["Fake HB Zone QB Boot Lt","HB Counter Wk","HB Dive","HB Power O","HB Smash","HB Stretch","PA Boot Lt","PA Ctr Waggle","PA TE Cross","TE Corners","TE Shake","Wide Zone Lt"],
        "Deuce": ["Ace Posts","Counter Y","Curl Flats","HB Blunt Dive","HB Dive","Inside Zone Split","MTN HB Toss","MTN PA Power O","MTN Power O","PA Boot Roll","PA Dig","Quick Slants"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA FK Cheat Flood Crossers","PA Flood","Re"],
        "Wing": ["Close PA Cross","Close PA Post","Close Zone Strg","Counter U","Curl Combo","Drive","HB Blunt Dive","HB Duo","HB Duo Alert X Smoke","HB Mid Zone","HB Stretch Alert Smoke","MTN H Zone Wk","MTN HB Toss Crack","MTN PA FK Slide","MTN PA Poco Slide","MTN Spacing","MTN Z Spot","PA Boot Lt","TE Attack","Y Stick","Zone Split Alert Lookie"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Y Stick"],
        "Wing Tight": ["Fake HB Zone QB Boot","HB Dive","HB Duo","HB Inside Zone","HB Stretch","Jet Sweep","Mesh Spot","PA Boot Flood","PA Boot Slide","PA Fl Stretch","PA Jet Sweep","PA Y-drag Wheel","Sluggo Seam","Y Stick","Zone Fake Jet"]
      },
      "I Form": {
        "Pro": ["Bench","Corner Strike","Cross In","Curls","FB Dive","FB Fake HB Flip","Goal Line Fade","HB Counter Wk","HB Slip Screen","HB Stretch Alert X Smoke","Inside Zone","Iso","Iso Weak","L Spot","Mesh","PA Boot","PA Comeback Slide","PA Scissors","PA Weak Flood","Quick Slants","Texas"],
        "Tight": ["Goal Line Fade","HB Blast","HB Duo","Iso","PA Boot","PA Power O","PA TE Corner","Power O","Z Slant"],
        "Wing": ["HB Counter Wk","HB Lead","HB Power G","HB Stretch","MTN PA Power","MTN Power","MTN Zone","PA Boot Flow","PA Scissors","PA Sprint HB Flat","PA Waggle","X Slant"]
      },
      "Strong": {
        "I Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"]
      },
      "Wildcat": {
        "Trips Over": ["Blast Rt","Counter","Jet Sweep","PA Jet Cross","PA Jet Sweep","Power"]
      },
      "Pistol": {
        "Bunch": ["Curl Flat","Dash Flood","Dash Slot Corner","Dash WR Leak","Dbl MTN Duo Wrap","Dbl MTN HB Stretch","Dbl MTN PA Stretch","Flanker Drive","HB Dive","HB Duo","Hop PA Boot Slide","Hop Split Zone","Hop Zone Wk","Mesh","MTN PA Slide","MTN RPO Read Y Slide","MTN Wide Zone","PA Boot Slide","PA Cross","RPO Alert Zone Hitch","Seattle","Slant Spacing","Spacing","TE Angle"],
        "Deuce": ["Bench","HB Counter","HB Split Dive","HB Stretch","Hitch Corners","Inside Cross","PA TE Wheel","RPO Alert TE Flat","Short Post"],
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","Y Lead Read Option"],
        "Full House TE": ["Cntr Lead","HB Dive","MTN O 1 Trap","MTN Power O","PA Comeback","PA Cross","PA TE Corner","Read Option","X Slant"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Read Option","Spot Lead Swing","Trail Speed Out","Y Cross"],
        "Wing Flex Close": ["HB Zone Wk","MTN Dig Gos","MTN Fork H-choice","MTN Slot Comeback","PA Boot Lt","PA Boot Y Sail","Wide Zone","WR Under","Zone Alert WR Screen"]
      },
      "Gun": {
        "Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","QB Draw","Spacing","Spot"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Curl Flat Corner","HB Slip Screen","Inside Zone","Mesh","MTN Divide","MTN Fork Y-corner","MTN HB Slip Screen","MTN HB Stretch","MTN HB Swing","MTN Jailbreak Screen","MTN Mid Zone","MTN PA Cross Switch","MTN Read Option","MTN Return Cross Up","MTN Return Drive Flat","MTN Return Flood Stick","MTN Slot Flood","MTN Snag Under","MTN Spacing","PA Boot Over","RPO Alert Bubble","Spacing","Triple Out","X Spot"],
        "Bunch X Nasty": ["Choice Shallow Dig","Corner Out Dig","Counter Y","Double Outs","Drive Y Corner","Inside Zone","L Spot","Mesh Corner","Mesh HB Sneak","Mesh Spot","MTN China Cross","MTN Smash Sluggo","MTN Speed Dig Under","Smash Return","Spacing Switch","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Deuce Close": ["Bench Dig Curl","Bench X Dig","Inside Zone Split","Lead Read Option","Mesh Spot","MTN WR Corner","MTN Y Corner","MTN Y Option","Out N Ups","RPO Peek Stick","RPO Read Flat Wheel","Spacing Switch"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Ywheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Off Close": ["Counter Y","Double Post","HB Slip Screen","Inside Zone","MTN Mesh Rail","MTN Stickx Replace","MTN TE Mid Screen","PA Y Cross","Pivot In Seams","RPO Read Bubble","X Dagger","Y Lead Read Option"],
        "Empty Base Flex": ["All Hitch","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","Redzone Up","RPO Alert Draw Stick","Shockwr Option","Stick","Stick N Nod","Trail Shake","Y Corner"],
        "Empty Trey Stack": ["Bench Corner","Curl Flat Salem","Curl Switch","Fade Out","Jailbreak Screen","Levels","Post Wheel","QB Draw","Smash Seam","Stick N Nod","Y Stick","Zl Under"],
        "Normal Y Off": ["45 Quick Base","Corner Strike","Curl Combo","Double Dig","Four Verticals","HB Slip Screen","Inside Zone","Read Counter Bash","Read Option","RPO Peek Slant","Slant Flat","Stick Slot Option"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Inside Zone","Cheat Slot Fade","Cheat TE Angle","Cheat TE Screen","FK Jet Y Wheel","Inside Zone","Jet Touch Pass","MTN Angle Y Wheel","MTN HB Angle","MTN HB Swing","MTN Snag Curls","MTN Switch Corner","MTN TE Middle Screen","PA Snag","Read Counter Bash","Read Option","RPO Alert Cheat Bubble","RPO Glance Post","Y-sail","Zone Fake Jet"],
        "Slot Right": ["Counter Y","Fake Screen Wheel","HB Iso","HB Slip Screen","MTN Inside Zone Split","MTN PA Slide","MTN Y Lead Read Opt","PA Bubble","PA Deep Choice","PA Se Screen","PA Wheel","QB Slot Option","Read Option","RPO Alert Bubble","RPO Glance Post","RPO Read WR Screen","RPO Read Y Flat","Slants","Speed Option","Verticals","Y Lead Read Opt"],
        "Spread Flex Wk": ["Corner Strike","Double Cross","Double Slants","Four Verticals","HB Base","HB Scissors","HB Slip Screen","Hitch Seam","Inside Zone","Orbit Stick N Nod","Orbit Y Sail","Orbit Y Stick","PA Read","RPO Peek Slant","RPO Read Bubble","Slot Outs","Spot Y Cross","Under"],
        "Stack Y Off": ["Corner Strike","Curl Flats","Fake Jet HB Seam","Fake Jet Pass Power","HB Scissors","HB Slip Screen","Inside Zone","Jet Pass FK Zone","Jet Touch Pass","Levels","PA Jet Sweep","Switch WR Drag","Trap Alert Omaha","Zone Alert Omaha","Zone Fake Jet"],
        "Tight Y Off": ["0 1 Trap","Choice Pivot Return","Double Ins Stack Out","Duo","Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","MTN Mesh Spot","MTN Outside Zone","MTN PA Spinner","MTN Slash Wheel Cross","MTN Slot Choice","MTN Spinner HB Inside","MTN Spot Y Quick","MTN WR Outside Zone","MTN Y-corner","PA Go Slot Cross","Read Option","RPO Peek Slant","TE Corner","Zone Fake Jet"],
        "Tight Y Off Wk": ["0 1 Trap","Curls","Dig HB Option","Flanker Spot","Hammer Dagger","HB Slip Screen","Outside Zone","PA Jailbreak Screen","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Shallow Cross","Tackle Trap","WR Under","Y Lead Read Option"],
        "Trey Open": ["Corner Strike","Dagger Deep Curl","Double Ins","Four Verticals","H MTN Flood H-sneak","H MTN Mesh","H Mtnx Shallow Cross","HB Slip Screen","Inside Zone","Jet New Orleans","Levels Switch","PA Read","Read Option","RPO Alert Draw Stick","Shockh Option","Slants","Slot Drive","Stick","Wrmid Screen","Y Corner","Y-drag"],
        "Trips TE": ["Cheat Clearout Seam","Cheat Flood Divide","Cheat Inside Zone","Cross Under","Curl Flat","Flood","HB Counter","HB Mid Draw","HB Slip Screen","MTN FK Screen Wheel","MTN HB Swing","MTN Levels Y-corner","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Slot Corner","Read Option","Slot Quick Flat","Speed Option","TE Screen","Verticals"],
        "Trips TE Flex": ["Dagger","HB Angle","HB Draw","HB Slip Screen","Levels Sail","MTN Fork H Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","PA Fork","PA Shot Crossers","Post Rail","Read Option","RPO Zone Alert Omaha","Same Side Zone","TE In","Verticals","Y Out N Up"],
        "Wing": ["HB Angle","Inside Zone","MTN HB Scissors","MTN QB G Down","MTN QB Zone","PA Boot","PA Fork","QB Zone","Read Option","Slot 2 Buc","Speed Option","Spot TE Seam","Stick","TE Attack","Y Drive Clown"],
        "Wing Slot Offset Wk": ["Bounce Inside Zone Lt","Bounce PA Corner","Bounce Spot Curl","Cross Corner Strike","Double Post","Double Smash","Drive Whip Smash","FK Slant Out","HB Draw","HB Slip Screen","Inside Zone","Mesh HB Corner","MTN HB Base","MTN Mesh Traffic","MTN PA Cross","Outside Zone","PA Dagger","PA Slot Fade","RPO Peek Post","Slant Stick","Smash"],
        "Wing Slot Wk": ["Four Verticals","HB Base","Inside Zone","MTN HB Wheel","MTN Inside Zone","MTN PA Slot Option","MTN PA Verticals","MTN Read Option","MTN TE Lead Read Opt","PA Bubble Y Over","PA Dagger","RPO Alert Bubble","RPO Peek Post","RPO Peek Slant","Slants"],
        "Wing Stack": ["Four Verticals","Inside Zone","Mesh Spot","Ohio Spacing","PA Read","Power O","Read Option","Smash Drive","Stick"],
        "Y Off Trio Close": ["0 1 Trap","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Bounce Dash Crosser","Bounce Inside Zone","Bounce PA Deep Out","Counter Y","Dash Flood","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","HB Pump Draw","Inside Zone","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "falcons",
    name: "Atlanta Falcons",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Post Dig"],
        "Tight Y Off Flex": ["0 1 Trap","Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Wing Pair": ["HB Dive","HB Duo","HB Inside Zone","HB Stretch","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","Y Stick"],
        "Wing Slot": ["Four Verticals","HB Dive","HB Stretch","HB Zone Wk","MTN Duo Wrap","MTN PA Z Slide","MTN Wide Zone Wk","PA Cross Shot","PA Sail X Post","PA Y Screen","Y Stick","Zone Alert Bubble"],
        "Wing Tight": ["Fake HB Zone QB Boot","HB Duo","HB Power O","HB Stretch","HB Zone Wk","PA Boot Flood","PA Boot Slide","PA Power O","PA Wheel Slide","PA Y-drag Wheel","Stick Nod Vertical","Y Stick"],
        "Wing Tight Z": ["Curl Flat Seam","Drive","HB Dive","HB Duo","HB Smash","Inside Zone","PA Y-drag Wheel","TE Attack","Y Stick"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet 6 Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN PA Boot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Close": ["Dbl Outs","Double Post","HB Counter Wk","HB Iso","HB Stretch","HB Toss","HB Zone Toss","Mesh","PA Boot Flow","PA Deep Cross Go","PA Deep Read","S95 Mike"],
        "Slot Stack": ["94 Will","HB Blast","HB Iso","Jet Sweep","PA Dagger","PA Jet Sweep","Spacing","Stretch","Zone Fake Jet"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Weak": {
        "H Close Off": ["94 Will","Bench Switch","Counter F","Flanker Drive","HB Gut","PA Power O","Power O","Stick","Verticals"]
      },
      "Other": {
        "Split Backs Offset Wing Close": ["Bench H-angle","FB Dive","HB Off Tackle","Mesh Rail","Mills Backs Cross","PA Slide"]
      },
      "Pistol": {
        "Bunch": ["Flanker Drive","Four Verticals","HB Dive","MTN Duo Wrap","MTN HB Stretch","MTN PA Stretch","PA Deep In","Read Option Wk","Spacing"],
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Stick","Strong Power","Verticals"],
        "Doubles Hip": ["FK Jet Divide","HB Zone Wk","Jet PA Cross","Jet PA Cross HB Leak","Jet Touch Pass","Mesh Rail","MTN HB Slip Screen","MTN PA Boot Fork","MTN Pin Pull Sweep","PA Post Swirl","Read Option","RPO Alert Jet Slant","Tech Out","Z Shake Crosser","Zone Fake Jet"],
        "Doubles Y Off Stack": ["Flanker Spot","Four Verticals","HB Dive","HB Draw","HB Slip Screen","HB Split Zone","MTN Jet HB Zone","MTN Jet PA HB Wheel","MTN Jet PA Y Leak","MTN Jet QB Boot","MTN Jet Touch Pass","MTN Jet Wide Zone Wk","PA Boot Slide","PA Cross","PA Post Shot","Read Option","RPO Zone Alert Bubble","Wide Zone"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Z Slant Y Corner"],
        "U Off Trips": ["HB Counter","HB Dive","HB Stretch","HB Zone Wk","PA Boot","PA Y Corner","Read Option","Shock","TE Cross"],
        "Wing Slot": ["Dagger","Four Verticals","HB Slam","Jet Pass FK Zone","Jet Touch Pass","PA Corner Post","Y Stick","Zone Alert Bubble","Zone Fake Jet"]
      },
      "Gun": {
        "Bunch": ["Bench Pivot","Bis Hook","Deep Corner","Dig Return","HB Base","HB Slip Screen","Inside Cross","Jet Pull Shallow","L Spot","Mesh Spot","Mid Zone","Smash Return","Spacing","Speed Dig","Verticals","Y Curl","Y Lead Read Option","Z Spot N Go"],
        "Bunch Offset": ["Bench Pivot","Bunch Drive","Cheat Outside Zone","Choice Shallow Dig","Corner Out Dig","Dig Return","Flood","HB Cross Screen","Inside Zone Split","Jet Pull Shallow","L Spot","PA Cheat Switch Comeback","PA Cheat Switch Dig","Smash Return","Spacing Switch","Speed Dig","Tight Cheat HB Screen","Tight Cheat TE Flood","Tight Cheat TE Qut","Verts HB Under","Y Trail"],
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","MTN Curl Flat Corner","MTN Slot Hitch","MTN Slot Out","MTN Slot Under","MTN Snag Under","MTN Y-shake","Outside Zone","PA Post","Spacing","Speed Dig"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Bunch Levels","Crosser Poco","HB Draw","HB Slip Screen","Inside Cross","Inside Zone","Mesh","Mesh Dig","Mills Slot Option","MTN Return Cross Up","MTN Return Drive Flat","MTN Return Flood Stick","QB Wrap","Read Option","RPO Alert Bubble","Same Side Zone","Spacing","TE Corner"],
        "Bunch Wide Nasty": ["Branch Return","Cheat Drag Rub Crosser","Cheat Wheel Post","Choice Shallow Dig","Corner Out Dig","Flood Switch","HB Slip Screen","Inside Zone","Jet Shallow Swirl","L Spot","Spacing Switch","Verticals"],
        "Deuce Close": ["Bench Dig Curl","Inside Zone","Mesh Spot","MTN Return H-trail","MTN Return HB Toss","MTN Return Y-shake","MTN WR Corner","MTN Y Corner","MTN Y Option","Outside Zone","PA Deep Curls","PA Deep Over","RPO Peek Stick","Spacing Switch","Stick Switch"],
        "Empty Base Flex": ["All Hitch","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Redzone Up","Shockwr Option","Stick","Strong Curl","Trail Shake","Verticals Under","Y Corner"],
        "Empty Bunch Open": ["Bunch Arches","Choice Shallow Cross","Crossers","Dagger","Dagger Ohio","Drive Y Corner","Middle Cross","QB Draw","Slot Choice Spacing","Slot Choice Spot","Speed Dig","Z Spot N Go"],
        "Empty Bunch Wide": ["Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","Post Corner Read","QB Draw","Spacing Switch","Z Spot N Go","Z Spot Smash"],
        "Empty Chips Quads": ["Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Normal Off Close Wk": ["Comeback Z Post","Counter Y","Double Post","HB Base","HB Scissors","HB Slip Screen","Inside Zone","MTN Outside Zone","MTN PA Ysit","MTN Zdig","PA Slide","PA Y Cross","Pivot In Seams","RPO Peek Slant","Slants"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Inside Zone","Cheat Slash Wheel In","Cheat TE Angle","Cheat TE Screen","Exit HB Cross Screen","Exit PA Smash","Exit RPO Zone Hitches","FK Jet Y Wheel","HB Scissors","Jet Touch Pass","MTN Angle Y Wheel","MTN Dash Flood","MTN Inside Zone","MTN PA Boot","MTN Slot Shallow Cross","MTN Switch Corner","PA Jet Sweep","Read Option","Reload HB Sweep","Reload Mesh Spot","Reload PA Cross","Reload PA Deep Sail","Reload Quick HB Trail","Reload RPO Zone Snag","RPO Alert Cheat Bubble","RPO Glance Post","Rz Cross HB Choice","Y-sail","Zone Fake Jet"],
        "Spread Y Slot Wk": ["Corner Strike","Curl Outs","Double Cross","Double Slants","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Hitch Seam","Inside Cross","Inside Zone","RPO Peek Slant","Slot Outs","Vert Outside Stop","X Dagger"],
        "Tight Flex": ["Bench","Bench Switch","Cheat Bunch Drive Corner","Cheat Bunch HB Draw","Cheat Bunch Switch Flood","Cross","Double Spot","Empty MTN Mesh Rail","Empty MTN Y-cross Ohio","Empty Smash Z Post","HB Counter","HB Draw","HB Option","Inside Hi Lo","Mesh Spot","PA Cross Dig","PA Post Shot","Read Option","Slot Curl","Stick","Wheel"],
        "Tight Open": ["Bench Z Spot","Curl Y-option","Dig Z Spot","Drive Stutter Flat","FK Drive Stutter","HB Draw","HB Mid Zone","HB Scissors","HB Slip Screen","Hitch N Go","Inside Zone","Mesh Crossers","Mesh Spot","MTN Flood H-choice","MTN Jet Pull Shallow","MTN Spot Y-post","PA Scissors","Read Option","Same Side Zone","Slot Post","Spacing","Spot X Option","Stick","Verticals HB Burst"],
        "Tight Y Off": ["0 1 Trap","Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","MTN Mesh Spot","MTN PA Spinner","MTN Slot Choice","MTN Spinner HB Inside","MTN WR Outside Zone","MTN Y-corner","PA Go Slot Cross","PA Slot Cross","RPO Peek Slant Bubble","TE Corner","Wheel Spot"],
        "Trey Y  Flex": ["Cross Flood","Dagger","Empty Flood Switch","Empty Stick","Empty Y Cross","HB Draw","HB Pump Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","PA Crossers","PA Draw Choice","RPO Alert Omaha","Same Side Zone","Se Corner","Shockh Option","Verticals"],
        "Trips TE Flex": ["Double In Sail","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","MTN Fork H Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","Over Pivot","PA Crossers","RPO Zone Alert Omaha","Stick","Verticals"],
        "Trips Y Slot": ["Curls","Four Verticals","Go Dbl Post","HB Mid Draw","HB Off Tackle","HB Slip Screen","Hi Lo Dig","Inside Attack","Inside Zone","PA WR In","Slot 2 Buc","Slot Fork","Stick","Strong Flood","WR Smash"],
        "Wing Slot Offset": ["Cheat HB Jailbreak Screen","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Dragon Spacing","Drive","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","L Close PA Flood","L Close Toss","Mesh Spot","MTN Choice Wheels","MTN Jet HB Duo","MTN Jet PA Cross","MTN Jet Touch Pass","MTN QB Sweep","MTN Wrangle Post","PA Read","Read Option","RPO Alert Bubble","Spot Option","Stick Nod Vertical","Z Close Duo"],
        "Y Off Trio Close": ["0 1 Trap","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Duo","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","MTN X-dig Slot Corner","MTN Y-corner Z-choice","Outside Zone","PA Power Shallow Cross","Power O","Smash Return"],
        "Y Off Trips Close": ["Deep Slot Curl","Double Ins","Drag Wheel","HB Mid Draw","HB Power","HB Slip Screen","MTN Corners","MTN Empty Dbl Unders","MTN Empty HB Sluggo","MTN Empty Smash Y-post","MTN HB Corner","MTN Y Poco","PA Cross","PA Fork","Scat","Slot Out","TE Whip","Wheel Mesh","WR Screen","X Curl","Y-option Wheel"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "giants",
    name: "New York Giants",
    style: "West Coast / Run Heavy",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","MTN Inside Zone","MTN PA Deep Over","MTN PA Switch Replace","PA Draw Shot","PA Jet Sweep","Shift Duo","Shift HB Sweep","Shift PA Duo Crossers","Spacing","Stretch Alert Bubble","Zone Fake Jet"],
        "Doubles Off Close": ["HB Zone Wk","Inside Zone Split","Jet Sweep","PA Deep Out","PA Fly Sweep","PA Weak Flood","Stick","Switch X Comeback","Zone Fake Jet"],
        "Tight Y Off": ["Bench Switch","Drive Flood","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Jet Sweep","Stick","Zone Fake Jet"],
        "Trio": ["Bubble Screen","Drive Wheel","HB Delay","HB Dive","HB Stretch","HB Toss","PA Boot","PA Boot Lt","PA Solid Corner","Slants","Slot Chase","Smash Texas","Spot","Verticals","Zone Weak"],
        "Wing": ["HB Delay","HB Dive","HB Duo","MTN HB Slam","MTN HB Toss Crack","MTN PA Boot","MTN PA Crossers","MTN WR Drive","MTN Z Spot","PA TE Flood","PA Y-drag Wheel","TE Attack"],
        "Wing Pair": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","PA Sprint HB Flat","PA TE Seam","TE Drive","Verticals"],
        "Wing Stack": ["Curl Post Drag","Double Corner","Fade Out","HB Belly Weak","HB Dive","HB Power O","HB Zone Wk","Jet Sweep","Levels","PA Dig","PA Fork","PA Jet Sweep","PA Power O","Smash Drive","Zone Fake Jet"]
      },
      "I Form": {
        "Y Off Close": ["Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Stretch","Inside Zone Split","PA Boot Y Leak"],
        "Full House": ["Counter Lead","Deep Curl","HB Off Tackle","HB Slam","PA Boot","PA Comebacks","PA Flood Comeback","PA Flood FB Slip","PA HB Wheel","PA X Post","Read Option Wk","Slants","Tr Opt Switch","Triple Option","Zone Read"],
        "Full House Over Close": ["Counter Y-lead","Deep Choice Y-option","HB Dive","HB Stretch","PA Boot Lt","PA Flood X-post Stop"],
        "Open Flex Close": ["HB Dive","Inside Zone Wk","L Spot","MTN Counter Y","MTN PA Portland Wheel","MTN Zone Split","PA Boot","PA Pin Deep","X Seam"]
      },
      "Gun": {
        "Bunch Wide Nasty": ["Cheat Flood Switch","Cheat HB Slip Screen","Cheat Inside Zone","Cheat Post Slot Cross","Cheat Spot","Cheat Wheel Post","Choice Shallow Dig","Corner Out Dig","HB Slip Screen","Inside Zone","Jet Shallow Swirl","L Spot","Spacing Switch","Speed Dig Out","Verticals"],
        "Bunch Y  Flex": ["Branch Return","Dagger","Flood","HB Slip Screen","Inside Zone","Jet Pull Shallow","L Spot","MTN Dagger Sit","MTN Drive Zig","MTN Inside Post","RPO Alert Out","Spacing","Speed Dig","Speed Dig Out","Verticals"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Doubles Off Close Wk": ["Counter Y","Double Post","HB Slip Screen","Inside Zone","MTN Mesh Rail","MTN Stick X Replace","MTN TE Mid Screen","PA Y Cross","Pivot In Seams","RPO Read Bubble","X Dagger","Y Lead Read Option"],
        "Doubles Offset Wk": ["0 1 Trap","Curl Combo","Double Cross","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","MTN Curl Combo","MTN HB Base","MTN PA Z Over","MTN QB Blast","MTN RPO Alert Bubble","MTN Z Spot","Orbit Fake Screen Wheel","Orbit Inside Zone","Orbit PA X Spot","Outside Zone","PA Digs","PA Read","Redzone HB Corner","Return FK Screen HB Wheel","Return HB Cross Screen","Return Slot Screen","RPO Alert Glance","RPO Peek Slant","Sail","Slants"],
        "Doubles Z Close Wk": ["Dagger Z Comeback","Double Post","HB Base","HB Slip Screen","Inside Zone","MTN Curl Combo","MTN FK Screen Wheel","MTN Inside Zone","MTN PA X Spot","MTN Switch Wheel","MTN Z Spot","RPO Read Bubble"],
        "Empty HB Wide": ["Curl Combo","Dbl Dig","Double Ins","Hoss Y Juke","Jailbreak Slot Screen","Quick Slants","Redzone Up","Seams Y Corner","Shockwr Option","Stick","Stick N Nod","Under Seams"],
        "Empty Trey Stack": ["Bench Corner","Curl Flat Salem","Curl Switch","Double Stick","Fade Out","Jailbreak Screen","Levels","Post Wheel","QB Draw","Shock Slot Option","Slot Middle Screen","Smash Seam","Stick N Nod","Y Stick","Z Under"],
        "Split Y Off Close": ["Dig Slot Out","Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone"],
        "Spread": ["Gt Read Option","H Wheel","HB Draw","HB Slip Screen","Inside Zone","L Spot","Mesh Post","MTN RPO Q Draw Base","MTN X Spot","MTN Z Spot N Go","PA Gt Z Tunnel","PA H Cross","PA Slot Cross","PA Slot Slide","RPO Read Slot Slide","Smash HB Seam","Whip HB Rail","Y Shallow Cross"],
        "Spread Dbl Flex": ["Corner Strike","Flanker Dig","HB Mid Draw","HB Slip Screen","HB Sweep","Inside Cross","Inside Zone","L Spot","MTN Curls H-sluggo","MTN Dbl Dig Swing","MTN Dbl Slants Wheel","MTN Fades H-choice","MTN FK Swing Mid Screen","MTN Flood H-wheel","PA Comebacks","PA Dig","Quick Slants","Read Option","RPO Alert Z Screen","Slot Outs","Y Shallow Cross"],
        "Stack Y  Flex": ["Corner Strike","Curl Combo","Drive H Wheel","Fade Out","HB Quick Base","HB Slip Screen","Inside Zone","L Spot","PA Jailbreak Screen","PA Read","Salem Pivot","Y-sail"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","Drive Stutter Flat","HB Draw","HB Slip Screen","Inside Zone","Mesh Spot","MTN Curls Out N Up","MTN Drive Wheel","MTN Flood H-choice","MTN HB Draw","MTN HB Slip Screen","MTN Jet Pull Shallow","MTN Mesh Deep Cross","MTN PA Cross","MTN RPO Read Flat","MTN Smash H-angle","MTN Spacing Flat","MTN Spot N Go","MTN Spot Zig In","MTN X Spot","MTN Z Spot Poco","Read Option","Same Side Zone","Verticals HB Burst"],
        "Tight Slots": ["Drive Trail","HB Quick Base","HB Sweep","Jet Pass FK Zone","Mesh","MTN Bench Snag N Go","MTN HB Draw","MTN Inside Zone","MTN PA Flood Under","MTN PA Slide","MTN Salem Slot Option","Out N Ups","PA Shot Portland","PA Zone FK Jet","Zone Fake Jet"],
        "Tight Y Off": ["Cheat Outside Zone","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Fake Jet HB Seam","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","MTN Mesh Spot","MTN PA Spinner","MTN Slot Choice","MTN Spinner HB Inside","MTN WR Outside Zone","MTN Y-corner","PA Go Slot Cross","Read Option","RPO Peek Slant","Zone Fake Jet"],
        "Tight Y Off Wk": ["Bench Dagger","Bench Hammer","Cheat Outside Zone","Corner Strike","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","PA Cheat Comeback Go","PA Cheat Wheel Post","RPO Zone Alert Omaha","Shallow Cross","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Smash Y Pivot","Spot Y Middle","WR Under"],
        "Trey Open Offset": ["5 6 Trap","Curls Dig","Dig Y Cross","Four Verticals","HB Draw","HB Slip Screen","Inside Shock","Inside Zone","Outside Zone","Read Option","Redzone Post Fade","Redzone Under","Redzone Up","RPO Peek Slant","Rz Short Posts","Shockh Option","Slot Drive","Trail Shake","Triple Slant","Y Corner","Y Stick"],
        "Trey Y  Flex": ["Dagger","Empty Slot Under","Empty Vertical","Empty Y Cross","HB Draw","HB Option","HB Pump Draw","HB Slip Screen","Inside Post","Inside Zone","Levels Y Corner","MTN Dbl Outs Swirl","MTN Wheels Slot Choice","MTN Whip Y-shake","PA Crossers","PA Draw Choice","Post Y Dig","Read Option","RPO Alert Omaha","Same Side Zone","Scat","Se Corner","Shock H Option","Verticals"],
        "Trips HB Wk": ["All Curl","Curl Flat Corner","Curl Slot Dig","Dbl Comeback","Deep Flood","Deep Stick","Double Screen","Drive","Flood Switch Fade","Four Verticals","HB Base","HB Off Tackle","HB Slip Screen","Inside Zone","Mesh Spot","Mesh Wheel","PA QB Choice","Read Option","RPO Alert Bubble","Stick","Wrmid Screen"],
        "Trips TE Offset Wk": ["HB Power","HB Slip Screen","Outside Zone","PA Flood","RPO Pin Alert Bubble","RPO Read Bubble","Sft Fork Bubble","Sft Inside Zone","Sft Read Option","Sprint Curl Flat","Switch Dagger","Verticals"],
        "U Off Trips": ["Counter Y","Duo Wrap","HB Power","Inside Zone","Mesh Wheel","PA Post Shot","Post Wheel Shallow","QB Power G","Read Option","RPO Alert X Gift","RPO Zone Alert Bubble","Shock"],
        "Wing Close Offset": ["HB Angle","Inside Zone","PA Fork","RPO Glance Slant","Same Side Zone","Spacing","Spot TE Seam","Stick","TE Attack"],
        "Wing Slot Offset": ["Dragon Spacing","Drive","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","L Close Toss","Mesh Spot","PA Double Post","PA Read","QB Zone","Read Option","RPO Alert Bubble","Spot Option","Stick Nod Vertical","Z Close Duo","Zl Close PA Flood"],
        "Y Off Trio Close": ["0 1 Trap","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Bounce Dash Crosser","Bounce Inside Zone","Bounce PA Deep Out","Counter Y","Dash Flood","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","HB Pump Draw","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","RPO Zone Peek","Smash Return"],
        "Y Off Trio Wk": ["Comebacks","Dbl MTN Stack Poco","Dbl MTN Stack Salem Y-out","Dbl MTN Stack Shaken Up","Flood Post","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mills","MTN Outside Zone","MTN PA Deep Over","MTN Smash Go","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Shockh Option","Slants","Slot 2 Buc","Slot Cross"],
        "Y Off Trips": ["0 1 Trap","Counter Y","Curls","Duo","Fake Screen Wheel","Four Verticals","HB Draw","Inside Zone","MTN Inside Zone Split","MTN PA Slide","MTN Stick","MTN Stick N Nod","MTN Y Lead Read Opt","MTN Y Screen","Outside Zone","PA Zone Shot","Read Option","RPO Bubble Y Pop","RPO Glance Post","RPO Read WR Screen","RPO Read Y Flat","Slant 2 Buc","Slants","Strong Flood"],
        "Y Off Trips Nasty": ["Counter Y","Dagger Whip","Double Cross","Flood HB Swing","HB Slip Screen","Inside Zone","MTN Curls Y-wheel","MTN HB Choice","MTN HB Out","MTN X Drag","MTN Y Corner","MTN Y Pivot","PA Double Post","RPO Read Y Flat","Slot 2 Buc"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split 0","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "jaguars",
    name: "Jacksonville Jaguars",
    style: "Spread / Versatile",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slam","Inside Zone Split","MTN HB Dive","MTN PA Deep X Over","MTN Xwhip","PA Boot","PA Boot Slide","PA Counter","PA Cross","PA Drag Wheel","Spacing","Verticals"],
        "Deuce Close": ["Bench","Counter Y","HB Stretch","HB Zone Wk","Jet Sweep","PA Boot Slide","PA Deep Read","PA Jet Sweep","PA X Post Cross","Stick","Zone Fake Jet","Zone Split Wk"],
        "Tight Y Off": ["Bench Switch","HB Dive","Inside Zone Split","Jet Sweep","PA Deep Cross","PA Jet Y Leak","PA Pump Go","Stick Switch","Zone Fake Jet"],
        "Tight Y Off Flex": ["Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","O 1 Trap","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Trips Close": ["Corner Double In","HB Draw","HB Duo","HB Stretch","Inside Cross","MTN Insert Zone Wk","MTN PA Boot Insert","MTN Slot Option","PA Boot Lt","PA Flood","Slants","Stick"],
        "Wing": ["HB Delay","HB Dive","HB Duo","MTN HB Slam","MTN HB Toss Crack","MTN PA Boot","MTN PA Crossers","MTN Wrodrive","MTN Z Spot","PA TE Flood","PA Y-drag Wheel","TE Attack"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Wide Zone Wk","Y Stick"],
        "Wing Slot": ["Dragon Spacing","HB Dive","HB Duo","HB Mid Zone","HB Power","HB Stretch","HB Zone Wk","Jet 6 Drive Wheel","Jet Sweep","PA Boot Slide","PA Boot Y Sail","PA Jet Sweep","PA Sprint HB Flat","PA TE Scissors","Zone Fake Jet"],
        "Wing Stack": ["Double Corner","HB Dive","HB Duo","HB Power O","HB Stretch","HB Zone Wk","Jet Sweep","Levels","PA Dig","PA Fork","PA Jet Sweep","PA Power O","Smash Drive","Ystick","Zone Fake Jet"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet G Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN PA Boot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "Strong": {
        "Close": ["Counter Weak","Dbl Outs","Dbl Stutter Go","FB Dive","HB Dive","HB Dive Weak","HB Off Tackle","HB Stretch","HB Zone Toss","PA Deep","PA Scissors","WR Out"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Split Dive","HB Stretch","Inside Zone Split","Mesh Spot","MTN Counter Lt","MTN PA Flood","MTN Zone Split","PA Boot Y Leak","PA Z Over"],
        "Doubles Y Off Stack": ["Flanker Spot","Four Verticals","HB Dive","HB Draw","HB Slip Screen","HB Split Zone","MTN Jet HB Zone","MTN Jet PA HB Wheel","MTN Jet PA Y Leak","MTN Jet QB Boot","MTN Jet Touch Pass","MTN Jet Wide Zone Wk","PA Boot Slide","PA Cross","PA Post Shot","Read Option","RPO Zone Alert Bubble","Wide Zone"],
        "U Off Trips": ["Dbl Post","HB Counter","HB Dive","HB Stretch","HB Zone Wk","Jet Lead Read Option","Jet PA Boot","Jet Touch Pass","Orbit HB Split Zone","Orbit PA Cross","Orbit PA Dbl Cross","PA Boot","PA Y Corner","Read Option","Shock","Strong Power","Switch Flood","TE Cross"]
      },
      "Gun": {
        "5wr Tight": ["Clear Deep","Cluster Bunch","Mesh","Mesh Post","Mills Double Out","MTN Double Post","MTN Fork Salem","MTN Post Swirl","QB Draw","Salem Smash Under","Slot Dig Wide Corner","Smash Dagger","Spacing","Z Spot","Z Spot Shake"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Drive Y Corner","HB Slip Screen","Inside Zone","Mesh Slot Out","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Speed Dig","Z Swirl Choice","Z Swirl In"],
        "Bunch TE": ["Cheat H Out","Cheat TE Hitch HB Seam","Cheat TE Hitch N Go","Deep Smash","HB Off Tackle","HB Slip Screen","Inside Cross","Inside Zone","Mesh","MTN Divide","MTN Slot Flood","MTN Snag Under","PA Boot Over","Read Option","Whips"],
        "Bunch TE Wk": ["HB Dive","HB Draw","HB Slip Screen","Mesh Slot Deep","Mesh X-post","MTN Divide X-under","MTN Escort HB Base","MTN Escort Insert X-out","MTN Escort PA Slide","MTN Flood H-sneak","MTN Snag Under","PA Wheel Z-curl","RPO Read Bubble","Shallow H-corner","Spacing X-wheel"],
        "Bunch Wide Nasty": ["Branch Return","Choice Shallow Dig","Corner Out Dig","Drive Crosser","Flood Switch","HB Slip Screen","Inside Zone","Jet Shallow Swirl","Spacing Switch","Speed Dig Out","Verticals","Z Spot"],
        "Bunch X Nasty": ["Corner Out Dig","Counter Y","Drive Y Corner","HB Base","Inside Zone","Mesh Spot","MTN Cross Post","MTN HB Choice","MTN Outside Zone","MTN RPO Zone Alert","MTN Spot HB Under","MTN Y Corner Under","Smash Return","Spacing Switch","Y Flat Goalline","Y Option Pivot","Z Mesh Goalline","Z Spot Goalline"],
        "Cluster HB Str": ["45 Quick Base","Flanker Drive","HB Slip Screen","Mesh Spot","MTN Cross Switch","MTN HB Draw","MTN Mesh","MTN Mesh Post","MTN Mesh Rewind","MTN Slot Screen","PA Read","Post Curls","Post Dig","Read Option","Spacing","Spot Lead Swing","Verticals","Z Spot"],
        "Double Stack": ["Curl Flat","HB Draw","HB Slip Screen","PA Jailbreak Screen","RPO Alert Screen","RPO Alert Trap","RPO Read Fl Screen","Smash","Stack Out"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Flex Y Off Close": ["Escape","Flood H Post","HB Scissors","Inside Zone","Jet Pass FK Zone","MTN Angle Y Wheel","MTN Daggery In","MTN Dig Under","MTN HB Angle","MTN HB Out","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles Offset": ["Buck Sweep","Curl Combo","Double Slants","Fade Smash","Flanker Drive","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet Pass FK Zone","PA Jet Sweep","PA Rollout","Rpox Smoke","Se Dig","Slot Outs","Spot Dbl Slant","Texas Double Post","Zone Fake Jet"],
        "Empty Base": ["Corner Strike","Curl Flats","Hitches","Jet Sweep","QB Draw","Slot Drive","Stick","Stick N Nod","Verticals","WR Screen","Y Corner","Y Post"],
        "Empty Quads": ["Cross Z Post","Curl Pivot Dig","Four Verticals","Out Double Under","QB Blast","QB Draw","RPO Alert QB Draw","Vert Double Under","WR Screen"],
        "Spread Y Slot Wk": ["Corner Strike","Curl Combo","Double Post","Double Slants","Four Verticals","H Shallow Cross","HB Base","HB Counter","HB Mid Draw","HB Slip Screen","Hitch Seam","Inside Zone","PA Bubble Y Over","PA Dagger","PA Read","RPO Peek Slant","RPO Read Bubble","Smash Corners"],
        "Tight Doubles": ["Cross Wheels","Curl","Dbl Stick","Flood","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Spot","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross","Z Spot"],
        "Tight Slots": ["Bench Swap","Drive Trail","HB Mid Draw","HB Quick Base","HB Sweep","Mesh","MTN Bench Swap","MTN Inside Zone","MTN PA Slide","PA Clow N Shot","PA Seams","PA Stop","Stick","Wheel Poco","Wheel Switch"],
        "Tight Y Off Wk": ["Curls","Flanker Spot","Fork Z-dig","Hammer Dagger","HB Slip Screen","Inside Zone","Outside Zone","PA Corner","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Tackle Trap"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Stick","Emptyy Cross","HB Draw","HB Pump Draw","HB Slip Screen","Inside Zone","PA Crossers","PA Draw Choice","Post Y Dig","Read Option","Same Side Zone","Shock HB Angle","Stick Nod H-angle"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Wing HB Wk Close": ["Curl Combo","Dash Flood","HB Base","HB Counter U","Mesh Spot","Outside Zone","PA Cross","PA Y Over","Spacing"],
        "Wing Slot Wk": ["Four Verticals","HB Slip Screen","MTN HB Base","MTN Mesh Traffic","MTN PA Cross","PA Bubble Y Over","PA Dagger","Power Alert Bubble","RPO Alert Bubble","RPO Peek Post","RPO Sweep Peek","Slants"],
        "Wing Tight": ["Escort Inside Zone Split","Escort PA Crossers","Escort PA Slide","HB Punch","Inside Zone","Mesh Spot","O 1 Trap","Ohio Spacing","PA Double Post","PA X Curl","QB Zone","Read Option","Same Side Zone","Sluggo Seam","Stick Nod Vertical"],
        "Y Off Trio Close": ["Boomerang Cross Rail","Boomerang HB Slip Screen","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Boomerang Same Side Zone","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"],
        "Y Off Trio Wk": ["Comebacks","Curls Combo","Dagger X Out","Dbl Ins","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Inside Zone","MTN PA Deep Over","MTN Smash Go","MTN Split Zone","Orbit PA Cross","Orbit PA Scissors","PA WR In","PA Y Wheel","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Alert Orbit","Shockh Option","Slot Deep Corner","Spot Slot Out","Y Lead Read Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "jets",
    name: "New York Jets",
    style: "West Coast / Run Power",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter Y","FK Flat Trail","Flaty Leak","Flaty Seam","HB Slash","Jet Sweep Wk","MTN HB Dive","MTN PA Deep X Over","MTN X Whip","PA Boot Slide","PA Counter HB Leak","PA Drag Wheel","PA Jet Sweep","PA X Out Cross","Spacing","Verticals","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["Bench","Counter Y","HB Stretch","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","O 1 Trap","PA Boot Slide","PA Drag Wheel","PA Misdirection","PA MTN Spider Y Leak","PA X Post Cross","Spacing Switch","Stick"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Slam","HB Wham","Inside Zone Split","PA Boot Slide","RPO Alert X Screen","Stick","Switch X Comeback"],
        "Tight Y Off Flex": ["Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","O 1 Trap","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Wing": ["Close PA Cross","Close PA Post","Close Zone Strg","Curl Combo","HB Dive","HB Misdirection","MTN H Zone Wk","MTN PA FK Slide","MTN PA Poco Slide","PA Misdirection Shot","PA TE Flood","PA Y-drag Wheel","TE Attack","Y Stick","Zone Weak"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Tight": ["Counter Wk","Dragon Spacing","Fake HB Zone QB Boot","HB Dive","HB Duo","HB Inside Zone","HB Smash","HB Stretch","Inside Cross","Mesh","PA Boot Slide","PA Ctr Waggle","PA Dive","PA Flood","PA Roll Lt","Quick Slant","Sluggo Seam","Stick Nod Vertical"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet G Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN Paboot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Wing": ["HB Lead","HB Power G","HB Stretch","MTN PA Power","MTN Power","MTN Zone","PA Boot Flow","PA Scissors","X Slant"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Close": ["Angle Out","Counter Weak","End Around","FB Dive","Fl Drive","HB Dive","HB Off Tackle","HB Slash FK End Arnd","HB Stretch","HB Zone Wk","Mesh Post","PA Deep Cross","PA End Around","PA Scissors","PA Sprint HB Flat","Quick Toss","WR Out","Y Trail"],
        "Pro": ["Asa F Flat","Counter Weak","Curls","FB Dive","FB Screen","Gos","HB Iso","MTN Drag F-trail","MTN Fl Drive","MTN HB Stretch","MTN HB Toss","MTN Inside Zone Split","MTN PA Slide","MTN Z Close Ctr Wk","MTN Z Close F-flat","MTN Z Close F-trail","PA F-corner","PA FB Fake","PA Power O","PA Scissors","Power O Alert X Smoke"]
      },
      "Weak": {
        "Close Flex": ["94 Will","Bench Flat","Drive","HB Dive","Inside Zone","Mesh","PA Boot Shot","PA Spot","Spacing"],
        "Wing": ["94 Will","FB Power","HB Gut","Middle Hooks","MTN Counter Weak","MTN HB Power O","MTN PA Power O","PA Boot Slide","PA TE Slide","Post Shot","TE Drag","X Slant"]
      },
      "Pistol": {
        "Deuce": ["Bench","Corner Post","HB Dive","HB Stretch","HB Zone Wk","Hitch Corners","Inside Cross","PA Deep In","PA TE Wheel","RPO Read TE Flat","Short Post","Strong Power"],
        "Doubles Y Off": ["Fade Smash","HB Dive","Jet PA Cross","Jet Touch Pass","MTN HB Wide Zone Wk","MTN PA Cross","MTN PA Slide","Orbit PA Cross","Orbit PA Y Corner","Orbit Triple Option","PA Cross","PA Deep In","Pin Pull Sweep","Read Option","RPO Read Flat Wheel","Slants","Zone Fake Jet","Zone Split"],
        "East Tight": ["Bench","HB Power O","HB Stretch","HB Zone Wk","Read Option","TE Option"],
        "Wing Close": ["Cheat HB Counter","Cheat TE Screen","Flanker Dig","HB Slam","HB Stretch","HB Zone","PA Boot Levels","PA Boot Lt","PA Cheat Deep Post Stop","PA Stretch Shot","TE Attack","Z Spot"]
      },
      "Gun": {
        "4wr Trips Strong": ["Curls","Double Ins","Double Slants","Drive X-post","Four Verticals","HB Angle","HB Base","HB Draw","HB Slip Screen","Inside Zone","PA WR In","Scat","Seam X-comeback","Slot Fade Shot","Slot Out","Smash X-dig","Stick Nod","Stick X-slant"],
        "Ace Slot": ["Flood","HB Quick Base","HB Slip Screen","Inside Zone","PA Read","Posts","QB Power","Read Option","RPO Alert Bubble","Smash","Stick","X Spot"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Y Wheel","Curl Flat Corner","HB Slip Screen","Inside Zone","Mesh","PA Boot Over","QB Wrap","Read Option","RPO Alert Bubble","Spacing","TE Corner","Triple Out","X Spot"],
        "Bunch X Nasty": ["Corner Out Dig","Counter Y","Drive Y Corner","HB Base","Inside Zone","Mesh HB Sneak","Mesh Spot","MTN Clear HB Seam","MTN Corner Under","MTN Cross Post","MTN HB Choice","MTN Outside Zone","MTN Return Mesh Flat","MTN Return Spot X-post","MTN Return Trail Corner","MTN RPO Zone Alert","MTN Spot HB Under","MTN Y Corner Under","Smash Return","Spacing Switch","Y Flat Goalline","Y Option Pivot","Z Mesh Goalline","Z Spot Goalline"],
        "Deuce Close": ["Bench Dig Curl","Bench X Dig","Empty MTN Mesh Rail","Empty MTN Spacing","Empty MTN TE Mid Screen","Inside Zone Split","Lead Read Option","Mesh Spot","MTN PA Slide","MTN Stick","MTN Zone Split","Out N Ups","Return PA Slide","Return RPO Read Flat Wheel","Return Rz Trail","RPO Peek Stick","RPO Read Flat Wheel","Spacing Switch"],
        "Doubles Flex Y Off Close": ["Escape","Flood H Post","HB Scissors","Inside Zone","Jet Pass FK Zone","MTN Angle Y Wheel","MTN Daggery In","MTN Dig Under","MTN HB Angle","MTN HB Fade","MTN HB Out","MTN HB Slot Screen","MTN Slot Post","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles Y Off Nasty": ["Cross Y Trail","Dbl Cross H-choice","Double Post","Fork H Traffic","HB Slip Screen","Inside Zone","MTN HB Cross Screen","MTN Slot Fades","MTN Smash","Outside Zone","PA Y Cross","RPO Zone Read Bubble","Snag HB Wheel","Tackle Trap","X Dagger"],
        "Empty Ace": ["All Go","Curl Flats","Curls HB Post","Fake Jet Pass Power","Flood","Jet QB Counter","Jet QB Zone","Jet QB Zone Wk","Jet Touch Pass","PA Jet Sweep","Post Wheel Shallow","QB Zone","Return Trail Go","Stick","U Cross"],
        "Empty Chips Tight": ["Dagger","Deep Post Out","Double 7 Stop","MTN Mesh Y-corner","MTN Outs Y-post","MTN Salem X-swirl","Out","Outs","Post Cross"],
        "Flex Trey": ["Corner","Curl Flats","Curls","Drive","Empty Stick","Four Verticals","Hitch Corners","Jailbreak Slot Screen","Middle Slant","QB Zone","Shallow Cross","Stick N Nod","Strong Flood","Verticals Y Shake","WR Comebacks"],
        "Split Close": ["Dbl Ins","Double Swirl","FB Inside","HB Choice","HB Power O","HB Rail","HB Slip Screen","HB Wheel","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","PA F Slide","Read Option","Triple Option Lt"],
        "Split Slot Offset": ["Flood","HB Cross Buck","HB Off Tackle","HB Slip Screen","Inside Zone Lt","MTN FB Cross Screen","MTN RPO Peek Stick","MTN RPO Peek Swing","MTN RPO Swing QB Draw","MTN Slot Cross","MTN Spot","MTN Triple Option Rt","MTN Y Cross","MTN Y Stick","Shakes"],
        "Spread Dbl Flex Wk": ["Dbl MTN H-trail","Dbl MTN Inside Zone","Dbl MTN PA Flood","Empty MTN HB Swing","Empty MTN WR Mid Screen","Empty MTN Y Cross","Flanker Dig","Inside Zone","MTN Corner","MTN Drive","MTN Out N Up Seam","MTN Outside Zone","MTN PA Cross Choice","MTN Smash","PA Read"],
        "Tight Open": ["Bench Dig Pivot","Bench Swirl-return","Bench Z Spot","Dig Z Spot","Drive Stutter Flat","FK Drive Stutter","HB Draw","HB Scissors","HB Slip Screen","Inside Zone","Mesh Crossers","Mesh Spot","MTN Flood H-choice","MTN Jet Pull Shallow","MTN Spot Y-post","Post Corner Drive","Read Option","Shallow Corner Stop","Slot Post","Spacing","Speed Option","Spot X Option","Stick","Tight Seams","Verticals HB Burst","Y-spot Salem","Z Spot Dig"],
        "Trey Y  Flex": ["Dagger","HB Pump Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","MTN Empty Flood Switch","MTN Empty Slot Under","MTN Empty Vertical","Outside Zone","PA Crossers","PA Draw Choice","Read Option","RPO Alert Omaha","RPO Alert Screen","Same Side Zone","Se Corner","Shock HB Angle","Shockh Option","Verticals","WR Screen"],
        "Trips TE Offset": ["Curl Combo","Flood","HB Counter","HB Slip Screen","Inside Zone","Levels Sail","PA Crossers","Read Option","RPO Alert Bubble","Shockh Option","Speed Option","Stick","TE In","Verticals","X Under"],
        "Wing Slot Offset": ["Drive","Fake Jet HB Wheel","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet Pass FK Zone","Jet Power Read","Jet QB Counter","Mesh Spot","Outside Zone","PA Double Post","PA Jet Sweep","PA Read","QB Zone","Read Option","Sft MTN Counter Y","Sft MTN Gt Counter","Sft MTN HB Toss","Sft MTN Inside Zone Split","Sft MTN PA Slide","Sft MTN PA Slot Corner","Smash","Zone Fake Jet"],
        "Wing Slot Wk": ["Buck Sweep Read Opt","Double Post","Four Verticals","HB Counter U","Inside Zone","Mesh HB Corner","Midline Read Option","MTN Buck Sweep","MTN HB Base","MTN PA Cross","PA Bubble Y Over","PA Inverted Veer","Power Read","QB Wrap","Read Option","RPO Peek Buck Slant","RPO Read Bubble","RPO Sweep Alert Bubble","Smash","Speed Option","TE Lead Read Opt"],
        "Wing Tight Flip": ["Flood Trail","Inside Zone","Mesh Post Rail","MTN Escort Inside Zone Split","MTN Escort PA Crossers","MTN Escort PA Slide","Ohio Spacing","PA Post Cross","QB Blast","QB Zone","Read Option","Y-spot"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "lions",
    name: "Detroit Lions",
    style: "Spread / Pass Heavy",
    formations: {
      "Singleback": {
        "Bunch": ["Crack Toss","Dig Return","End Around","HB Dive","HB Slash","PA Boot Over","PA End A Round Sift","Seattle","Slash FK End Arnd","Spacing","Stick","Z Spot"],
        "Bunch X Nasty": ["Counter Y","Jet Sweep Wk","MTN HB Dive","MTN PA Deep X Over","MTN X Whip","PA Counter HB Leak","PA Drag Wheel","PA Jet Sweep","PA X Out Cross","Spacing","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["Bench","Counter Y","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","O 1 Trap","PA Boot Slide","PA Drag Wheel","PA Misdirection","PA MTN Spider Y Leak","PA X Post Cross","Spacing Switch","Stick","Zone Split Wk"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Slam","Inside Zone Split","Jet Sweep","PA Boot Screen","PA Boot Slide","PA Fly Sweep","RPO Alert X Screen","Stick","Switchx Comeback","Zone Fake Jet"],
        "Doubles South": ["Bench","Dign Up","Flanker Spot","HB Dive","HB Draw","HB Zone Wk","Jet Sweep","PA Dbl Cross","PA Jet Sweep","PA Rollout","PA Y Drag Wheel","Stick","Stick Spacing","Wide Zone Wk","Zone Fake Jet"],
        "U Off Stack": ["HB Counter Str","HB Zone Alert Smoke","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross"],
        "Wing": ["Close PA Cross","Close PA Post","Close Zone Strg","Curl Combo","HB Dive","HB Misdirection","MTN H Zone Wk","MTN PA Fkslide","MTN PA Poco Slide","PA Misdirection Shot","PA TE Flood","PA Y-drag Wheel","TE Attack","Y Stick","Zone Weak"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Duo","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Y Stick"],
        "Wing Stack": ["Double Corner","HB Dive","HB Stretch","HB Zone Wk","Jet Sweep","Levels","PA Dig","PA Fork","PA Jet Sweep","Smash Drive","Ystick","Zone Fake Jet"]
      },
      "I Form": {
        "Close": ["HB Lead Dive","HB Stretch","HB Zone Toss","Inside Zone","Mesh","PA Boot Flow","PA Deep Cross Go","PA Deep Read","PA HB Wheel","PA Spider Mesh","Stutter Gos","Y-post"],
        "Slot Close": ["94 Will","HB Blast","HB Lead Dive","HB Stretch","Jet Sweep","PA Jet Sweep","PA Shot Post","PA Spot","PA Sprint HB Flat","PA Switch Dig","Spacing","Zone Fake Jet"],
        "Wing": ["FB Dive","FB Fake HB Toss","HB Counter Wk","HB Power G","HB Power O","PA Power O","PA X Burst Cross","Post Shot","Zone Wk"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Y Off Close": ["Counter Weak","HB Blast","HB Stretch","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Boot X Shot","PA Scissors","TE Option"]
      },
      "Other": {
        "Maryland I Close": ["Dbl Outs","Duo","HB Lead Dive","HB Toss","Mesh HB Rail","MTN HB Zone Wk","MTN PA Double Cross","MTN PA Sprint HB Flat","PA Boot","PA FB Sail","PA Power O","Power O"],
        "Maryland I Tight Close": ["FB Dive","FB Fake HB Toss","HB Blast","Mesh HB Rail","PA Boot Slide","PA FB Sail","PA Power O","Power O","Puuo"]
      },
      "Gun": {
        "Box Y Split": ["Comebacks","Curls","Dash Flood","Drive","Flood","HB Slip Screen","HB Sweep","Inside Zone","Levels Switch","MTN Crossers","MTN HB Draw","MTN Slot Cross","PA Mills Crosser","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Sail Dbl Post","Same Side Zone","Seam Slot Under","Shockh Option","Spacing HB Wheel","Y Corner H Option","Y Trail"],
        "Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","MTN Spot","MTN Verticals","MTN WR Swing","QB Draw","Spacing","Spot"],
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Spacing","Speed Dig","Z Spot"],
        "Bunch X Nasty": ["Corner Out Dig","Counter Y","Drive Y Corner","HB Base","Inside Zone","Mesh HB Sneak","Mesh Spot","MTN Clear HB Seam","MTN Corner Under","MTN Cross Post","MTN HB Choice","MTN Outside Zone","MTN Return Mesh Flat","MTN Return Spot X-post","MTN Return Trail Corner","MTN RPO Zone Alert","MTN Spot HB Under","MTN Y Corner Under","Smash Return","Spacing Switch","Y Flat Goalline","Y Option Pivot","Z Mesh Goalline","Z Spot Goalline"],
        "Bunch Y  Trips": ["HB Base","HB Draw","HB Slip Screen","MTN China X-post","MTN Fly HB Go","MTN Return Corner Portland","MTN Return Mesh Spot Rail","MTN Return Whip Crossers","MTN Smash Slot Dig","PA Mills X-corner","Slot Slant","Stick Spacing Switch"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Draw","HB Scissors","HB Slip Screen","Inside Zone","Levels","PA Go Slot Cross","Switch WR Drag"],
        "Doubles Y Off Nasty": ["Counter Y","Cross Y Trail","Dbl Cross H-choice","Double Post","Fork H Traffic","HB Slip Screen","Inside Zone","MTN HB Cross Screen","MTN Slot Fades","MTN Smash","Outside Zone","PA Y Cross","RPO Zone Read Bubble","Snag HB Wheel","Tackle Trap"],
        "Empty Bunch Open": ["Choice Shallow Cross","Crossers","Dagger Ohio","Daggery Cross","Drive Y Corner","Mesh Cross","Mesh Spot","Middle Cross","Slot Choice Spacing","Slot Choice Spot","Speed Dig","Z Spot N Go"],
        "Empty Chips Nasty": ["Dagger","Dagger Deep Curl","Deep Post Out","Dig Stick","Double Swirl","Out X Dig","Post Cross","Slot Sail","X Cross"],
        "Normal Off Close Wk": ["Chip WR Corner","Counter Y","Double Post","Flood Z Drive","HB Scissors","HB Slip Screen","Inside Zone Split","Levels Mills","O 1 Trap","PA Y Cross","Pivot In Seams","RPO Alert Bubble","RPO Peek Slant","RPO Zone Alert","Slants"],
        "Split Close": ["Dbl Ins","Dig HB Rail","Double Swirl","Drive HB Wheel","FB Inside","HB Choice","HB Gut","HB Power O","HB Slip Screen","HB Wheel","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","PA F Slide","Pivot Dig","Read Option","WR Corner"],
        "Spread Dbl Flex Wk": ["Dbl MTN H-trail","Dbl MTN Inside Zone","Dbl MTN PA Flood","Empty MTN HB Swing","Empty MTN WR Mid Screen","Empty MTN Y Cross","Flanker Dig","Inside Zone","MTN Corner","MTN Drive","MTN Out N Up Seam","MTN Outside Zone","MTN PA Cross Choice","MTN Smash","PA Read"],
        "Spread Y  Slot Wk": ["Corner Strike","Double Cross","Double Slants","HB Base","HB Off Tackle","HB Scissors","HB Slip Screen","Inside Zone","MTN All Curl","MTN Buck Sweep","MTN G Down","MTN H Option","MTN HB Counter","MTN Inside Zone Split","MTN PA Cross","MTN RPO Zone Peek","MTN Switch Seam","PA Read","Slot Outs","Spot Y Cross","Vert Comebacks"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","Drive Stutter Flat","Empty MTN Mesh Rail","Empty MTN Whip Flood","Empty MTN Z Spot","FK Drive Stutter","HB Draw","HB Slip Screen","Inside Zone","Mesh Clearout","Mesh Spot","Verticals HB Burst"],
        "Tight Slots": ["Bench","Drive Trail","HB Quick Base","HB Sweep","Jet Pass FK Zone","Mesh","Mesh Corner","Mid Zone","MTN Bench Snag N Go","MTN HB Draw","MTN Inside Zone","MTN PA Flood Under","MTN Paslide","MTN Salem Slot Option","Out N Ups","PA Shot Portland","PA Slide","PA Zone FK Jet","Spot Salem","Stick","Stick Switch","Switch Dig","WR Corners","Zone Fake Jet"],
        "Tight Y Off Wk": ["Curls","Flanker Spot","Fork Z-dig","Hammer Dagger","HB Slip Screen","Inside Zone","Outside Zone","PA Corner","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Tackle Trap"],
        "Trio Y  Flex": ["Curl Flat","HB MTN Slot Shake","HB MTN Slot Wheel","HB MTN TE Mid Screen","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Whips","MTN Corner Slot Choice","MTN Mills","MTN Out H-angle","MTN Out N Up","MTN Shock Slot Dig","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shockh Option","Slot Out","Slot Seam","Slot Under H-angle"],
        "Trips Y Slot": ["Curls","Four Verticals","Go Dbl Post","HB Mid Draw","HB Off Tackle","HB Slip Screen","Hi Lo Dig","Inside Zone","PA Switch Dig","PA WR In","Read Option","Slot 2 Buc","Slot Fork","Stick","Strong Flood","Strong Flood X-cross","WR Smash","Wrdig"],
        "Wing Flex Offset": ["Four Verticals","Inside Zone","Inside Zone Split","Mesh Spot","MTN Bench Spacing","MTN Drive HB Trail","MTN Empty Jailbreak Screen","MTN Empty Mesh Gos","MTN Empty Slants Stick","MTN Inside Zone","MTN Jailbreak Screen","MTN Mesh Spot","MTN PA Jailbreak Screen","O 1 Trap","Ohio Spacing","PA Double Post","PA Slide","Power O","Stick Nod Vertical","Wheel Post Drag","Y Lead Read Opt"],
        "Wing Slot Offset": ["Drive","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Mesh Spot","Outside Zone","PA Double Post","Sft MTN Counter Y","Sft MTN Gt Counter","Sft MTN HB Toss","Sft MTN Inside Zone Split","Sft MTN PA Slide","Sft MTN PA Slot Corner","Smash","Z Close Duo","Z Close PA Flood","Z Close Toss"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","MTN HB Zone Wk","MTN PA Mesh","MTN PA Y-corner","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "packers",
    name: "Green Bay Packers",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slam","Inside Zone Split","PA Boot","PA Boot Slide","PA Counter","PA Cross","PA Deep Cross Go","PA Drag Wheel","PA X Out Cross","Spacing","Verticals","Wide Zone Wk"],
        "Deuce Close": ["Bench","Bench Z-dig","Corner Stops","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","PA Boot Corner Post","PA Boot Slide","PA Deep Cross","PA Drag Wheel","PA Slidey Screen","PA X Post Cross","Stick","Zone Split Wk"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Post Dig"],
        "Tight Y Off Flex": ["Counter Y","HB Dive","HB Zone Wk","Inside Zone Split","Jet Sweep","O 1 Trap","PA Boot Slide","PA Deep Out","PA Jet Sweep","Shallow Cross","Smash Hammer","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Mid Zone","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","RPO Alert Lookie","Rz PA Crossers","Wide Zone"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Ystick"],
        "Wing Tight Nasty": ["26 Duo","HB Counter Str","HB Inside Zone","HB Smash","MTN HB Smash","MTN PA Boot Lt","MTN PA Y-copo","PA U-drag Wheel","Stick Spacing"]
      },
      "I Form": {
        "Close Flex": ["94 Will","95 Mike","Flanker Drive","HB Iso","Mesh","PA Spot","PA TE Corner","Spacing","Stretch"],
        "Wing": ["HB Counter Wk","HB Lead","HB Power G","HB Stretch","MTN PA Power","MTN Power","MTN Zone","PA Boot Flow","PA Scissors","PA Sprint HB Flat","PA Waggle","X Slant"]
      },
      "Strong": {
        "Close": ["Counter Weak","End Around","Fl Drive","HB Dive","HB Off Tackle","HB Slash FK End Arnd","Inside Post","Mesh Post","PA Deep","PA Post Dig","PA Scissors","WR Out"]
      },
      "Pistol": {
        "Bunch": ["Curl Flat","Dash Flood","Dash Slot Corner","Dash WR Leak","Dbl MTN Duo Wrap","Dbl MTN HB Stretch","Dbl MTN PA Stretch","Flanker Drive","HB Dive","HB Duo","Hop PA Boot Slide","Hop Split Zone","Hop Zone Wk","Mesh","MTN PA Slide","MTN RPO Ready Slide","MTN Wide Zone","PA Boot Slide","PA Cross","RPO Alert Zone Hitch","Seattle","Slant Spacing","Spacing","TE Angle"],
        "Strong Y Off Close": ["HB Counter","HB Dive","HB Slip Screen","HB Zone","PA Slide","Read Option","Spot Lead Swing","Trail Speed Out","Y Cross"],
        "Wing Slot": ["Bench Corner Strike","Dagger","Four Verticals","HB Counter","HB Dive","HB Power O","HB Slam","HB Slip Screen","HB Stretch","MTN HB Zone Wk","MTN Jet Dash Wk","MTN Jet Touch Pass","MTN PA Slide","MTN PA Verts","MTN Zone FK Jet","Orbit PA Boot Lt","Orbit PA TE Cross","Orbit RPO Read TE Slide","PA Ctr Waggle","PA Deep Out","PA Power O","PA Slot Cross","RPO Alert Bubble","Ystick"]
      },
      "Gun": {
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Curl Flat Corner","MTN Slot Hitch","MTN Slot Out","MTN Slot Under","MTN Snag Under","MTN Y-shake","Outside Zone","PA Post","Spacing","Speed Dig","Z Spot"],
        "Bunch Str Nasty": ["Cheat Inside Zone","Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","PA Cheat Double Post","PA Cheat Verticals Y Slide","PA Corner","PA Cross","PA Double Post","Pin Pull Toss","RPO Zone Read Bubble"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Y Wheel","Curl Flat Corner","HB Slip Screen","Inside Zone","Mesh","MTN Divide","MTN Fork Y-corner","MTN HB Slip Screen","MTN HB Stretch","MTN HB Swing","MTN Jailbreak Screen","MTN Mid Zone","MTN PA Cross Switch","MTN Read Option","MTN Return Cross Up","MTN Return Drive Flat","MTN Return Flood Stick","MTN Slot Flood","MTN Snag Under","MTN Spacing","PA Boot Over","RPO Alert Bubble","Spacing","Triple Out","X Spot"],
        "Bunch Wide": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Cross Screen","Curl Flat","Dig Return","Inside Zone","Jet Pull Shallow","PA Post","Seam Divide","Slot Hook","Spacing","Speed Dig Out","Verticals","Y Trail","Z Spot"],
        "Cluster": ["Cluster Bunch","HB Counter","HB Mid Draw","HB Slip Screen","Mesh","Mesh Post","Outside Zone","PA Read","Spacing","Verticals","Z Spot","Z Spot Shake"],
        "Cluster HB Str": ["45 Quick Base","Flanker Drive","HB Slip Screen","Mesh Spot","MTN Cross Switch","MTN HB Draw","MTN Mesh","MTN Mesh Post","MTN Mesh Rewind","MTN Slot Screen","PA Read","Post Curls","Post Dig","Read Option","Spacing","Spot Lead Swing","Verticals","Z Spot"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Empty Bunch Wide": ["Deep Flood","Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","MTN Orbit FK Swing Screen","MTN Orbit Swing Screen","MTN Spacing Dig","Post Corner Read","QB Draw","RPO Q Screen Draw","Spacing Switch","Stutter Wheel","Z Spot N Go","Z Spot Smash"],
        "Empty Chips Tight": ["Dagger","Deep Post Out","Double 7 Stop","Out","Outs","Post Cross"],
        "Flex Trey": ["Curl Flats","Deep Curls","Double Switch","Drive Smash","Empty Stick","Four Verticals","Hitch Corners","Jailbreak Slot Screen","Middle Slant","Shallow Cross","Slot Corner","Stick N Nod","Strong Flood","Verticals Y Shake","WR Comebacks"],
        "Normal Y Off": ["45 Quick Base","Corner Strike","Curl Combo","Double Dig","Four Verticals","HB Slip Screen","Inside Zone","MTN Flood Salem","MTN RPO Alert Screen","MTN Switch Slot Choice","Read Counter Bash","Read Option","RPO Peek Slant","Slant Flat","Stick Slot Option"],
        "Pack Trips": ["Curls","Double Ins","Double Slants","Drive X-post","Four Verticals","HB Angle","HB Base","HB Draw","HB Slip Screen","Inside Zone","PA WR In","Scat","Seam X-comeback","Slot Fade Shot","Slot Out","Smash X-dig","Stick Nod","Stick X-slant"],
        "Split Y Off": ["Corner Strike","H Choice","Inside Zone Split","Outside Zone","Read Option","Y Curl"],
        "Split Y Off Close": ["Dig Slot Out","Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone"],
        "Spread Y  Flex": ["Deep Attack","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","RPO Peek Slant","Slant Flat","Slot Outs","Stick Double Slant"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","HB Draw","HB Mid Zone","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","Same Side Zone","Verticals HB Burst"],
        "Tight Y Off": ["Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","Inside Zone","Mesh Spot","Mesh Whips","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","O 1 Trap","PA Go Slot Cross","PA Jailbreak Screen","PA Slot Cross","RPO Alert Bubble","RPO Peek Slant Bubble","Stick","Switch WR Drag"],
        "Tight Y Off Wk": ["Bench Dagger","Bench Hammer","Corner Strike","Duo","FK Cheat Outside Zone","Hammer Dagger","HB Slip Screen","In Quick Outs","Inside Zone","Levels","O 1 Trap","PA FK Cheat Post Cross","PA FK Cheat WR Screen","Pivot Dig","RPO Zone Alert Omaha","Smash Y Pivot","Spot Y Middle","WR Under"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Slot Under","Empty Smash","Empty Stick","Empty Vertical","Empty Y Cross","Flood Switch","HB Draw","HB Pump Draw","HB Slip Screen","Inside Zone","Levels Y Corner","PA Cross Shot","PA Draw Choice","Read Option","RPO Alert Screen","Shockh Option","Slot Post","Stick","Verticals"],
        "Trio": ["Curl Flat","Flanker Dig","Flood","HB Counter","HB Draw","HB Off Tackle","HB Slip Screen","Inside Slot Wheel","Inside Smash","Inside Zone","Mesh","Millsy Corner","MTN Jet HB Zone","MTN Jet PA HB Wheel","MTN Jet Touch Pass","PA Deep Attack","PA Slot Corner","Read Option","RPO Alert Bubble","Scat","Slants","Snag Slot Out","Stick","TE In Slot Fade","Trips Flood","Verticals","X Spot"],
        "Trips TE Offset Wk": ["Flood Divide","HB Power","HB Slip Screen","Inside Zone","Middle Slant","Outside Zone","PA Flood","Ready Corner","RPO Read Bubble"],
        "Wing Slot Offset Wk": ["Bounce Inside Zone Lt","Bounce PA Corner","Bounce Spot Curl","Cross Corner Strike","Double Post","Double Smash","Drive Whip Smash","FK Slant Out","HB Draw","HB Slip Screen","Inside Zone","Mesh HB Corner","MTN HB Base","MTN Mesh Traffic","MTN PA Cross","Outside Zone","PA Dagger","PA Slot Fade","RPO Peek Post","Slant Stick","Smash"],
        "Wing Stack": ["Four Verticals","Inside Zone","Mesh Spot","PA Jailbreak Screen","PA Read","Power O","Read Option","Smash Drive","Stick"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"],
        "Y Trips Wk": ["Cheat Crossers","Cheat HB Draw","Cheat Slot Cross","Curls Combo","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Inside Zone","PA Post Cross Shot","PA Read","PA Y-out","Packer Slants","Packer Slot Seam","Packer Smash","Packer Unders","Stick","Stick N Nod","Strong Flood","WR Screen","Y Corner"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "panthers",
    name: "Carolina Panthers",
    style: "Run Heavy / West Coast",
    formations: {
      "Singleback": {
        "Ace": ["Curl Flats","Flanker Drive","HB Dive","HB Duo","HB Pump Draw","HB Slam MTN","Jet Sweep","PA Boot Left","PA Jet Sweep","Skinny Posts","Z Spot","Zone Fake Jet"],
        "Deuce Close": ["Bench","Counter Y","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","O 1 Trap","PA Boot Slide","PA Drag Wheel","PA Misdirection","PA MTN Spider Y Leak","PA X Post Cross","Spacing Switch","Stick","Zone Split Wk"],
        "Tight Y Off Flex": ["Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","O 1 Trap","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Trio": ["Bubble Screen","Drive Wheel","HB Delay","HB Dive","HB Stretch","HB Toss","PA Boot","PA Boot Lt","PA Solid Corner","Slants","Slot Chase","Smash Texas","Spot","Verticals","Zone Weak"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Wide Zone Wk","Y Stick"],
        "Wing Tight Nasty": ["26 Duo","HB Counter Str","HB Inside Zone","HB Smash","PA U-drag Wheel","Stick Spacing"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet G Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN PA Boot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Close Flex": ["94 Will","95 Mike","Flanker Drive","HB Power O","HB Wk Toss","PA Level","PA Power O","PA Spot","Stretch"]
      },
      "Strong": {
        "H Close Off": ["HB Blunt Dive","HB Stretch","PA Slide","TE Option","Wrgos","X-corner"],
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN PA Power","MTN Power O","MTN Zone Wk","PA Slide","PA Sprint HB Flat"]
      },
      "Weak": {
        "Close Flex": ["94 Will","Bench Flat","Drive","HB Dive","Inside Zone","Mesh","PA Boot Shot","PA Spot","Spacing"]
      },
      "Pistol": {
        "Bunch X Nasty": ["Corner Out Dig","HB Counter","HB Zone","HB Zone Wk","Slant Spacing","Smash Return"],
        "Doubles": ["Curl Flats","Flanker Dig","Four Verticals","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","Middle Hook","PA Boot","PA Comebacks","PA Ctr Waggle","PA Wrslip","Read Option","Read Option Wk","Slants","Weak Flood","Y Shallow Cross"],
        "Tight Y Off Flex": ["Cheat HB Zone","Cheat TE Double Pass","Counter Y","Deep Post Switch","HB Zone","HB Zone Wk","PA Cheat Post Comeback","RPO Read Flat Wheel","Wheel Switch"],
        "Trips": ["Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Stretch","HB Zone Wk","Inside Cross","PA Boot","PA Boot Lt","PA Deep In","PA HB Flat","Pin Pull Sweep","Read Option","RPO Alert Bubble","Slants","Smash","Stick"],
        "U Off Trips": ["Dbl Post","HB Stretch","Inside Zone Split","Jet Lead Read Option","Jet PA Boot","Jet Touch Pass","Orbit HB Split Zone","Orbit PA Cross","Orbit PA Dbl Cross","PA Corner Dig","RPO Alert TE Flat","Shock"]
      },
      "Gun": {
        "Bunch Str Nasty": ["Crack Toss","Dagger","Flanker Drive","Inside Zone","Mesh Flat Spot","MTN Double Pass","MTN HB Angle","MTN HB Seam","MTN HB Slip Screen","MTN Mesh Trail","MTN Smash Angle","PA Bunch Shot","RPO Read Bubble","RPO Zone Peek","Y Flat Quick","Y Trail","Z Mesh Quick","Z Spot Quick"],
        "Bunch Y  Flex": ["Flood","HB Slip Screen","Inside Zone","MTN Dagger Sit","MTN Drive Zig","MTN Inside Post","Smash Return","Spacing","Speed Dig","Swirl Hook N Go","Verticals","Z Spot"],
        "Deuce Close": ["Bench","Bench Dig Curl","Corner Gos Flat","Inside Zone","Mesh Spot","MTN PA Slide","MTN Stick","MTN WR Corner","MTN Y Option","MTN Zone Split","O 1 Trap","PA Deep Curls","PA Post Cross","RPO Alert Omaha","RPO Peek MTN Stick"],
        "Doubles Clamp Stack": ["Counter Y","Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Same Side Zone","Spot Choice","Texas Smash","Texas Y-stutter Wheel","Y Ohio Return"],
        "Empty Base Trio": ["All Hitch","Curl Combo","Double In","Double Slant Stick","Hoss Juke","QB Draw","Shock Slot Option","Slant Flat","Stick Nod"],
        "Empty Bunch": ["Curl Flats","Divide Wheel","QB Draw","Spacing","Trail","Verticals","Y Curl","Z Spot","Z Spot N Go"],
        "Normal Y Off Close": ["Double Slant","Escape","HB Scissors","Inside Zone","Mesh Spot","MTN Angle Y Wheel","MTN HB Angle","MTN Switch Corner","PA Snag","Read Option","RPO Alert Out","RPO Peek Stick","RPO Zone Peek","Wheel Switch","Y-sail"],
        "Normal Y Off Wk": ["Curl Combo","Double Slants","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","Pivot In Seams","RPO Alert Bubble","WR Under"],
        "Split Slot Offset": ["Fl Drag","Flood","HB Cross Buck","HB Off Tackle","HB Slip Screen","Inside Zone Lt","MTN FB Cross Screen","MTN RPO Peek Stick","MTN RPO Peek Swing","MTN RPO Swing QB Draw","MTN Slot Cross","MTN Spot","MTN Triple Option Rt","MTN Y Cross","MTN Y Stick","PA Deep Cross","Shakes","Triple Option Lt"],
        "Spread Y  Slot": ["Corner Strike","Cross Dig","Curls","Double Slant","Four Verticals","HB Slip Screen","Inside Zone","MTN Mesh Dig","MTN X Post","Ohio Double In","Out Seams","PA Read","Return Curls Texas","Slot Outs","Slot Stick","Wrmid Screen","X Dagger","Y-seam"],
        "Tight Doubles": ["Cross Wheels","Curl","Dbl Stick","Flood","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Spot","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross","Z Spot"],
        "Tight Slot Open": ["Bench","Bench Switch","Dbl Hook Wheel","HB Draw","HB Quick Base","PA Read","RPO Peek Slant","Stick Spacing","Wheel Switch"],
        "Tight Y Off": ["Cheat Outside Zone","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Double Ins Stack Out","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","Mesh Whips","MTN Mesh Spot","MTN Slot Choice","MTN Y-corner","PA Go Slot Cross","PA Jailbreak Screen","PA Slot Cross","Read Option","RPO Peek Slant Bubble","Switch WR Drag","TE Corner"],
        "Trey Open Offset": ["Counter","Fl Dig","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","MTN HB Swing","MTN Inside Cross","MTN Z Spot","Outside Zone","PA Read","Redzone Under","Redzone Up","RPO Peek Slant","Shockh Option","Strong Curl","Trail Shake","Y Stick"],
        "Trey Y  Flex": ["Cross Flood","Dagger","Empty Flood Switch","Empty Stick","Emptyy Cross","HB Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","PA Crossers","RPO Alert Omaha","Se Corner","Shock H Option","Verticals"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","Reload PA Unders","Reload RPO Zone Alert Bubble","Reload Shock HB Choice","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Trips X Nasty": ["HB Mid Draw","HB Off Tackle","Hi Lo Cross","Hi Lo Dig","Inside Zone","PA X Cross Shot","Quick Fork Zig","Quick Short Post","Quick Unders","Slot Fade H Wheel","Verticals X Shallow","WR Smash"],
        "Wing Stack": ["Four Verticals","Inside Zone","Mesh Spot","Ohio Spacing","PA Read","Power O","Read Option","Smash Drive","Stick"],
        "Wing Trips Wk Nasty Goose": ["All Curls","Cross X Burst","Curl Flat","Dash Corner Up","Dash Flood","Dash Switch Curls","Drive Slot Wheel","Flood","Four Verticals","Meshy Wheel","Quick Fork Zig","Quick Short Post","Quick Unders","Slants X-go","Slot Cross","Stick","WR Mid Screen","X 1so Poco"],
        "Y Off Trio Close": ["Boomerang Cross Rail","Boomerang HB Slip Screen","Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Boomerang Same Side Zone","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"],
        "Y Off Trips": ["Curls","Duo","HB Slip Screen","Inside Zone","MTN Counter Y","MTN Curl N Go","MTN Pasmash","MTN Stick","MTN Stick N Nod","MTN Y Screen","PA Double Post","PA Zone Shot","Read Option","RPO Glance Post","RPO Read Y Flat","Sft Inside Zone Split","Sft Outside Zone","Sft PA Ohio H-choice","Shot Slot Poco","Slot 2 Buc","Sprint Flood"],
        "Y Off Trips Wk": ["22 Z In","Dig Cross","Fade Stops","Four Verticals","HB Slip Screen","Inside Zone","Inside Zone Split","MTN X Slant Spot","MTN Y Angle","MTN Z Spot","Outside Zone","PA Slide","Shallow Sail","Shock H Option","Slants","Slot 2 Buc","Sluggo Verts","Stick","Strong Flood","Tackle Trap","Y Lead Read Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "patriots",
    name: "New England Patriots",
    style: "Erhardt-Perkins / Balanced",
    formations: {
      "Singleback": {
        "Ace Close": ["Bench","HB Stretch","HB Zone Wk","Jet Sweep","PA Cross","PA Jet Sweep","Stick","Y Seam","Zone Fake Jet"],
        "Ace Slot": ["Dbl Post","HB Counter","HB Dive","HB Power O","HB Stretch","HB Zone Alert Bubble","Inside Zone","MTN HB Slash","MTN PA Zslide","MTN Wide Zone","PA Boot","PA Boot Switch","PA Fl Stretch","PA Scissors Flood","Shallow Cross","Slot Under","Smash","Wide Zone"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Slam","HB Stretch","Inside Zone Split","Jet Sweep","PA Boot Screen","PA Boot Slide","PA Fly Sweep","PA Slide","RPO Alert X Screen","Stick","Switch","Switchx Comeback","Zone Fake Jet"],
        "Tight Y Off": ["Drive Flood","HB Stretch","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Deep Out","PA Jet Sweep","PA Leak","PA Post Dig","Stick","Zone Fake Jet"],
        "Trips": ["Curl Combo","HB Dive","HB Power O","HB Stretch","HB Zone Wk","Inside Cross","PA Boot","PA Boot Lt","PA Solid Corner","PA Y Glance","Slants","WR Option"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","MTN Cheat WR Comeback","MTN Cheat WR Out","MTN Cheat WR Wheel","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross Y Delay","PA FK Toss Wheel","PA Y-drag Wheel","Rz PA Crossers","Wide Zone"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","HB Stretch","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","Spacing","TE Attack","TE Drive","Y Stick"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Duo","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Y Stick"]
      },
      "I Form": {
        "Pro": ["94 Will","95 Mike","Curls","HB Duo","HB Lead Dive","HB Stretch","Iso","PA Comeback Slide","PA Scissors","PA Sprint HB Flat","PA TE Screen","PA X Curl","PA X Dig","Post","Quick Slants"],
        "Slot Close": ["94 Will","HB Blast","HB Lead Dive","HB Stretch","Jet Sweep","PA Jet Sweep","PA Shot Post","PA Spot","PA Sprint HB Flat","PA Switch Dig","Spacing","Zone Fake Jet"],
        "Wing": ["95 Mike","Curls","FB Dive","FB Fake HB Toss","HB Counter Wk","HB Power G","HB Power O","HB Stretch","HB Zone Toss","Iso","MTN PA Power O","MTN Power","MTN Zone","PA Power O","PA Scissors","PA Sprint HB Flat","PA X Burst Cross","X Slant"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "H Tight Close": ["Counter Weak","HB Blunt Dive","HB Misdirection","PA Power O","PA Slide","Power O","Stutter Gos","Y Trail","Zone Wk"],
        "Jumbo": ["FB Dive","HB Dive","Inside Zone Wk","PA Spot","PA Sprint HB Flat","Power O"]
      },
      "Weak": {
        "Z Close": ["Counter F","FB Dive","HB Gut","PA Cntr Shot Post","Slant Spacing","Z Curl"]
      },
      "Pistol": {
        "Ace": ["HB Power O","HB Slam","HB Stretch","PA Boot","PA Deep In","PA Power O","Quick Slants","Read Option","Skinny Posts"],
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Strong Power","Verticals"]
      },
      "Gun": {
        "Ace Slot Offset": ["64 X Slice U Cross","HB Slip Screen","Inside Zone","Levels Y Sail","O 1 Trap","PA Post Shot","PA Scissors","PA Verts","PA Y Corner","Post Wheel Shallow","Posts","RPO Alert Bubble","Same Side Zone","Smash","Stick"],
        "Bunch Offset Close": ["Bounce Mesh Drive","Bounce PA Double Post","Bounce Zone Wk","HB Base","Mesh Rebound","PA X Whip Crosser","Read Option","Y Trail X-go","Z Spot"],
        "Bunch Open Offset": ["Dig Return","Duo","Fake Screen Wheel","Flood","HB Draw","Inside Zone","Lead Swing Spot","Mesh Corner","Mesh Spot","Reload Flood X-choice","Reload Inside Zone","Reload Spacing Switch","RPO Alert Out","RPO Peek WR Screen","RPO Read Bubble","Sprint Z Spot","Wheel Mills","Y Trail"],
        "Doubles Flex Wk": ["MTN Drag","MTN Drive","MTN Fl Screen","MTN HB Counter","MTN HB Cross Screen","MTN HB Sweep","MTN Mesh Y Corner","MTN PA Y Choice","MTN RPO Alert Power","MTN Slot Cross","MTN Slot Post","MTN Spot"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Doubles Y  Flex": ["Corner Strike","Curl Combo","Double Slants","Flood","Four Verticals","HB Quick Base","HB Slip Screen","Inside Zone","PA Deep Outs","RPO Zone Peek","Shark HB Wheel","Slot Cross","Under Y-option","X Dagger","Y-sail"],
        "Doubles Z Close": ["Double Slant Spot","Escape","HB Draw","Inside Zone","Mesh Spot","MTN HB Sluggo","MTN Shock Y-option","MTN Smash Y-zig","RPO Glance Post","Y-sail","Z Cross Out","Z Crosser"],
        "Empty Base Flex": ["All Hitch","Corner Up","Four Verticals","Hoss Y Juke","Jailbreak Slot Screen","Middle Hi Lo","Reload HB Wheel","Reload Inside Zone","Reload PA Flood","Stick","Stick N Nod","Strong Curl","Trail Shake","Y Corner","Y Shallow Cross"],
        "Empty Chips Quads": ["Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Split Close": ["Dbl Ins","Dig HB Rail","Double Swirl","FB Inside","HB Choice","HB Power O","HB Slip Screen","HB Wheel","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","Read Option"],
        "Split Twins Offset Close": ["Flood","HB Toss Lt","Inside Zone","Mid Zonelt","MTN FK Screen Wheel","MTN HB Swing","MTN Lead Swing Spot","MTN PA Switch Sail","MTN RPO Alert Swing","MTN Slot Cross","PA HB Seam","PA Slide Y Cross","Redzone HB Corner","Spacing Switch Stick","Stick Rb Angle"],
        "Tight Offset TE": ["Bench","Drive Out","HB Counter","HB Draw","HB Slip Screen","Inside Zone","Mesh HB Wheel","Mesh Spot","Mills Slot Out","O 1 Trap","PA Seams","Slot Outs","Slot Wheel","Spot","Stick","Stick N Out","Wheel Spot","Y Out"],
        "Tight Open": ["Bench Swirl-return","Bench Z Spot","Drive","Drive Stutter Flat","FK Drive Stutter","Inside Zone","Mesh Clearout","Mesh Crossers","Mesh Spot","Post Corner Drive","Read Option","Shallow Corner Stop","Stick","Y Cross","Z Spot Dig"],
        "Tight Slots HB Wk": ["Bench","Bench Swirl","Flood","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mesh Spot","MTN Dig X-corner","MTN Mesh Traffic","MTN Outs Z-post","Post Wheel Drag","Read Option","RPO Peek Slant","Scissors","Stick Switch","X Dig","X Out"],
        "Tight Y Off": ["Double Ins Stack Out","Duo","Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","MTN Mesh Spot","MTN Outside Zone","MTN PA Spinner","MTN Slash Wheel Cross","MTN Slot Choice","MTN Spinner HB Inside","MTN Spot Y Quick","MTN WR Outside Zone","MTN Y-corner","O 1 Trap","PA Go Slot Cross","Read Option","RPO Peek Slant","Stick","TE Corner","Zone Fake Jet"],
        "Tight Y Off Wk": ["Curls","Drive","Duo","Flanker Spot","Fork Z-dig","HB Slip Screen","In Quick Outs","Inside Zone","Mesh Whips","O 1 Trap","Outside Zone","PA Corner","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Shallow Cross","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Smash Dagger","Tackle Trap"],
        "Trey Open": ["Deep Post","Double Ins","Drag Verticals","Four Verticals","HB Off Tackle","HB Slip Screen","Inside Zone","Jet New Orleans","PA Slot Under","Read Option","Shockh Option","Stick","Stick N Nod","Y Corner","Y-drag"],
        "Trio Offset": ["Buck Sweep","Fake Screen Wheel","Flanker Dig","Flood","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","Outside Zone","PA Post Shot","Power O","Read Option","RPO Alert Bubble","RPO Alert WR Screen","Scat","Stick","TE In","Verticals"],
        "Trips TE": ["Cross Under","Curl Flat","Curls Go","Flood","HB Angle","HB Counter","HB Mid Draw","HB Slip Screen","Inside Zone","MTN Bench","MTN PA Y Corner","MTN RPO Read Flat","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Crosses","PA Slot Corner","Read Option","Reload PA Unders","Reload RPO Zone Alert","Reload Shock HB Choice","Slot Quick Flat","Speed Option","TE Corner","TE Screen","Verticals","WR Screen"],
        "Trips TE Flex": ["Double In Sail","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","PA Crossers","Stick","Verticals"],
        "U Off Trips Wk": ["Dagger Sit","HB Corner","HB Power","HB Pump Draw","Inside Zone","Levels Out","MTN Fade Smash","MTN Stick","MTN Verticals","Outside Zone","PA Boot","PA Crossers","Read Option","RPO Alert Bubble","Same Side Zone","Smash","Spot Quads","Sprint Smash"],
        "Wing Trips Wk Nasty Goose": ["All Curls","Cross X Burst","Curl Flat","Dash Corner Up","Dash Flood","Dash Switch Curls","Drive Slot Wheel","Flood","Four Verticals","Gos Slot Cross","Meshy Wheel","Quick Fork Zig","Quick Short Post","Quick Unders","Slants X-go","Slot Cross","Stick","X 1so Poco"],
        "Y Off Trips Close": ["Deep Slot Curl","Double Ins","Drag Wheel","HB Mid Draw","HB Power","HB Slip Screen","Inside Zone","MTN Corners","MTN Empty Dbl Unders","MTN Empty HB Sluggo","MTN Empty Smash Y-post","MTN HB Corner","MTN Y Poco","PA Cross","PA Fork","Pats Cross","Patsy Out","Scat","Slot Out","TE Whip","Wheel Mesh","WR Screen","X Curl","Y-option Wheel"],
        "Y Off Trips Wk": ["22 Z In","Dig Cross","Fade Stops","Four Verticals","HB Slip Screen","Inside Zone","Inside Zone Split","MTN Curls","MTN Fade Dagger","MTN HB Swing","MTN Pump And Go","MTN Slot Whip In","MTN X Slant Spot","PA Slide","Shallow Sail","Shock H Option","Slants","Slot 2 Buc","Sluggo Verts","Stick","Strong Flood"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "raiders",
    name: "Las Vegas Raiders",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Misdirection Lead","Inside Zone","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Jet Sweep","Spacing","Stick","Stretch Alert Bubble","Verticals","Zone Fake Jet"],
        "Deuce Close": ["Bench","Flood Trail","HB Stretch","MTN Duo","MTN PA Boot Fork","MTN PA Boot Screen","MTN Power","MTN Shuffle H-choice","MTN Shuffle H-shake","MTN Shuffle Y-wheel","MTN Zone Split","MTN Zone Toss","O 1 Trap","PA Boot Slide","PA Drag Wheel","PA Slidey Screen","PA Stretch Shot","Spacing Switch"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Mid Zone","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Rz PA Crossers","Stick X-dig","Wide Zone"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","MTN Counter Str","MTN HB Plunge","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","Rz PA Crossers","Spacing","Stretch Alert Lookie","TE Attack","TE Drive","Y Stick"],
        "Wing Slot": ["Bubble Screen","Dagger","Four Verticals","HB Duo","HB Zone Wk","Inside Zone Split","Jet Sweep","MTN Duo Wrap","MTN PA Zslide","MTN Wide Zone Wk","PA Boot Slide","PA Boot TE Leak","PA Jet Sweep","PA Sailx Post","Zone Fake Jet"],
        "Y Off Trio Close": ["HB Duo","HB Outside Zone","HB Zone Wk","Mesh","MTN Shuffle Smash","MTN Shuffle Y-trail","MTN Shuffle Z-post","O 1 Trap","PA Cross Dig","PA Slide Cross","PA TE Screen","Read X-choice","Spacing X-choice","Stick","Y Shallow Cross"],
        "Y Trips Close Wing": ["Curls X-choice","HB Dive","HB Slip Screen","HB Stretch","Jet PA Sprint Rt","Jet PA Wide Zone","Jet Wide Zone","Mesh","MTN HB Zone Wk","MTN Paboot Rt","MTN X-go Dig","PA Switch WR In","Shallow X-dig","Slot Drive","Smash"]
      },
      "I Form": {
        "Pro": ["94 Will","95 Mike","Curls","HB Duo","HB Lead Dive","HB Stretch","Iso","PA Comeback Slide","PA Scissors","PA Sprint HB Flat","PA TE Screen","PA X Curl","PA X Dig","Post","Quick Slants"],
        "Slot Close": ["94 Will","HB Blast","HB Lead Dive","HB Stretch","Jet Sweep","PA Jet Sweep","PA Shot Post","PA Spot","PA Sprint HB Flat","PA Switch Dig","Spacing","Zone Fake Jet"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Weak": {
        "3wr Flex": ["Dagger X-corner","HB Gut","HB Stretch","Mesh Z-dig","PA Boot Lt","PA Power O","PA X-dig","Power O","Slot Fade X-choice"],
        "Wing": ["94 Will","FB Power","HB Gut","Middle Hooks","MTN Counter Weak","MTN HB Power O","MTN PA Power O","PA Boot Slide","PA TE Slide","Post Shot","TE Drag","X Slant"]
      },
      "Other": {
        "Split T Tight": ["FB Dive","FB Dive Weak","HB Inside","HB Lead","PA Boot","TE Corner"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","RPO Read Cheat Wheel Flat","Y Lead Read Option"],
        "Doubles": ["Curl Flats","Four Verticals","HB Draw","HB Slip Screen","HB Zone","Jet Inside Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Boot","PA Comebacks","PA Deep In","Read Option","RPO Alert Bubble","Slants","Y Shallow Cross"],
        "Tight Y Off Flex": ["Bench Switch","Counter Y","Deep Post Switch","HB Zone","Wheel Switch","Wrstick N Out"],
        "Wing Close": ["HB Slam","HB Zone","PA Boot Levels","PA Boot Lt","PA Stretch Shot","TE Attack"]
      },
      "Gun": {
        "5wr Trio": ["Curl Flats","Double Pivot","Flood Switch","Four Verticals","Hitch Corners","Inverted Mesh","Jet Sweep","Mesh Spot","MTN Mesh Fork","MTN Mesh Y-post","MTN Y Shallow Cross","QB Draw","Shallow Cross","Shock Slot Option","Shock Y Option","Stick","Strong Flood","Verticals Slot Out","Whips","Whips Curls","WR Screens"],
        "Ace Slot Offset": ["64 X Slice U Cross","China Doublein","Flood","HB Punch","HB Slip Screen","Inside Zone","Levels Y Sail","O 1 Trap","Outside Zone","PA Post Shot","PA Scissors","PA Verts","PA Y Corner","Post Wheel Shallow","Posts","Read Option","RPO Alert Bubble","RPO X Smoke","Same Side Zone","Smash","Stick"],
        "Box HB Strong": ["HB Draw","Inside Zone","Mesh Rail","PA Scissors","Sit Zdrag","Whipy Cross"],
        "Box Offset Wk": ["Curl Flat","HB Angle","HB Slip Screen","Inside Zone","Middle Hi Lo","MTN Curls HB Angle","MTN Verts HB Angle","MTN Y Cross","Outside Zone","PA Verticals","Read Option","Slot Trail","Verticals","Wide Trap","Y Cross Post"],
        "Bunch Str Offset": ["Dagger","Duo","FK Toss Lead Swing Dig","FK Toss Slide","HB Slip Screen","Inside Zone","Lead Swing Spot","MTN Deep Post","MTN Inside Zone","MTN Stick","Pin Pull Toss","Read Option","RPO Alert Screen","Slant Spacing","Y Trail"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Y Wheel","Bunch Levels","HB Draw","HB Slip Screen","Inside Cross","Inside Zone","Mesh","Mills Slot Option","QB Wrap","Read Option","RPO Alert Bubble","Spacing","TE Corner"],
        "Bunch Wide Nasty": ["Branch Return","Cheat Clearout Drag","Cheat Flood Switch","Cheat HB Slip Screen","Cheat Inside Zone","Cheat Post Slot Cross","Cheat Spot","Flood Switch","HB Slip Screen","Inside Zone","Jet Pull Shallow","Jet Shallow Swirl","Mesh Drive","Speed Dig Out","Z Spot"],
        "Doubles Flex Wk": ["MTN Drag","MTN Drive","MTN Fl Screen","MTN HB Counter","MTN HB Cross Screen","MTN HB Sweep","MTN Mesh Y Corner","MTN PA Y Choice","MTN RPO Alert Power","MTN Slot Cross","MTN Slot Post","MTN Spot"],
        "Empty Base Flex": ["Choice Stick Nod","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Redzone Up","RPO Alert Draw Stick","Shock WR Option","Stick","Stick N Nod","Trail Shake","Verticals Under","WR Screen","Y Corner"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Slash Wheel In","Cheat TE Angle","Double Slant","Escape","FK Jet Y Wheel","Inside Zone","Jet Touch Pass","Mesh Spot","MTN HB Swing","MTN Snag Curls","MTN TE Middle Screen","Power Read","Read Option","Reload HB Sweep","Reload Mesh Spot","Reload PA Cross","RPO Alert Out","RPO Glance Post","Y-sail","Zone Fake Jet"],
        "Spread Y  Flex": ["Curl Flats","Empty MTN Dagger","Empty MTN Drive","Empty MTN Fl Screen","HB Quick Base","HB Slip Screen","Inside Zone","Mesh","MTN Drive","MTN FK Screen Wheel","MTN Fl Screen","MTN HB Cross Screen","MTN Replace","MTN Shallow HB Angle","PA Curls","QB Zone","Read Option","RPO Alert Screen","Spot N Go","Y Cross","Z Spot"],
        "Tight Doubles": ["Bench","Cross Wheels","Curl","Dbl Stick","Flood","HB Angle","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Spot","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross","Shot Fade Cross","Z Spot"],
        "Tight Flex Offset": ["Dragon Spacing","HB Draw","HB Slip Screen","Inside Zone","Mesh Spot","MTN Choice","MTN Dagger H-choice","MTN FK H-angle","MTN Fork Y-corner","MTN H-texas","MTN Spot Dig","O 1 Trap","PA Switch Verts","Slot Outs H-angle","Spot Shake"],
        "Tight Flex Wk": ["Bench","Go Y-choice","HB Slip Screen","Inside Hi Lo","Inside Zone","Mesh Spot Rail","Mid Zone","MTN Bunch Cross Dig","MTN Bunch Cross Screen","MTN Bunch Drive","MTN Bunch HB Draw","MTN Bunch Switch Flood","MTN Bunch Whip Smash","MTN Mesh Spot","MTN Stick Z Post","MTN Y Cross","PA Dagger","PA Same Side Flood","Quick Looks","Same Side Zone","Stick"],
        "Trio HB Wk": ["Buck Sweep Read Opt","Dagger Sit","Flood HB Flat","HB Slip Screen","Inside Zone","PA Cross Sit","PA Y Cross","RPO Alert Bubble","RPO Alert Buck","RPO Buck Peek","RPO Read Buck Bubble","Speed Option","Verticals","Wide Zone","Wide Zone Read"],
        "Trio Y  Flex": ["Curl Flat","Dagger","Flood Y-post","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Dagger","Mesh Whips","Mills","MTN Mills","MTN Shock Slot Dig","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shockh Option","Slot Out","Verticals"],
        "Trips HB Wk": ["All Curl","Curl Flat Corner","Curl Slot Dig","Dbl Comeback","Deep Flood","Deep Stick","Double Screen","Drive","Flood Switch Fade","Four Verticals","HB Base","HB Off Tackle","HB Slip Screen","Inside Zone","Mesh Spot","Mesh Wheel","PA QB Choice","Read Option","RPO Alert Bubble","Stick","Wrmid Screen"],
        "U Off Trips Flex": ["China Double In","Dagger H-choice","Flood Y-dig","HB Dive","HB Slip Screen","Inside Zone","Levels Y Sail","MTN Slot Fade Y-cross","MTN Stick Y-nod","MTN Verticals Y-cross","PA Scissors Crossers","Post Wheel Texas","Read Option","Slot Shot Y-swirl","Smash Y-shake"],
        "U Off Trips Wk": ["Dagger Sit","HB Power","Inside Zone","Levels Out","MTN Fade Smash","MTN Stick","MTN Verticals","Outside Zone","PA Boot","PA Boot Corner-post","PA Crossers","Read Option","RPO Peek Corner","Smash","Spot Quads"],
        "Wing Slot Wk": ["Buck Sweep Read Opt","Double Post","Four Verticals","HB Counter U","Inside Zone","Mesh HB Corner","Midline Read Option","MTN Buck Sweep","MTN HB Base","MTN PA Cross","PA Bubble Y Over","PA Inverted Veer","Power Read","QB Wrap","Read Option","RPO Peek Buck Slant","RPO Read Bubble","RPO Sweep Alert Bubble","Smash","Speed Option","TE Lead Read Opt"],
        "Wing Trio": ["Dash Curl Flat","Gt Read Option","HB Mid Zone","Inside Zone","Mesh Spot","MTN Drive","MTN HB Screen","MTN RPO Peek Flat","MTN Rz Crossers","MTN Whip Deep Flood","Orbit Mesh HB Rail","PA All Curl","PA Slot Corner-post","PA X Corner","RPO Peeky Pop","RPO Zone Peek","Stick","Y Flood"],
        "Y Trips Wk": ["China Smash","Comebacks","Corner Strike","Curls","Dagger Y Whip","Dbl Ins","Four Verticals","HB Base","HB Draw","HB Mid Zone","HB Slip Screen","Inside Zone","MTN Mesh","MTN Seam Swirl","MTN Y Shallow Cross","PA Under","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Read Option","RPO Peek Slant","Shockh Option","Slants","Slot 2 Buc","WR Mid Screen","Y Corner H Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "rams",
    name: "Los Angeles Rams",
    style: "West Coast / Spread",
    formations: {
      "Singleback": {
        "Ace Close": ["Bench","HB Toss","HB Zone Wk","Jet Sweep","PA Cross","PA Jet Sweep","Stick","Y Seam","Zone Fake Jet"],
        "Bunch TE": ["Cross Drag","HB Misdirection Lead","HB Pump Draw","Inside Zone","Inside Zone Split","Jet Sweep","PA Boot","PA Boot Slide","PA Jet Deep Out","Shift Duo","Shift HB Sweep","Shift PA Duo Crossers","Spacing","Switch Snag","Zone Fake Jet"],
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slam","HB Slash","Inside Zone Split","Inside Zone Wk","PA Boot","PA Boot Corner Post","PA Boot Slide","PA Counter","PA Cross","PA Deep Cross Go","PA Deep Out","PA Drag Wheel","PA Post Curl Shot","PA Post Dig","PA X Out Cross","Spacing","Verticals","Wide Zone Wk"],
        "Deuce Close": ["Flood Trail","HB Stretch","HB Zone Wk","MTN Duo","MTN Zone Split","PA Boot Corner Post","PA Boot Slide","PA MTN Spider Y Leak","PA Slidey Screen","PA X Deep Out","Stick","Zone Split Wk"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Post Dig"],
        "Tight Y Off Flex": ["Counter Y","HB Zone Wk","Jet Sweep","O 1 Trap","PA Deep Out","PA Jet Sweep","Rams Pivot Dig","Shallow Cross","Smash Hammer","Stick Spacing","Wide Zone","Zone Fake Jet"],
        "Trips": ["Cheat Deep Hitch Over","Cheat HB Stretch","Cheat Paboot Lt Flat","Corner Double In","Dbl MTN Inside Zone","Dbl MTN PA Copo","Dbl MTN PA Dagger Cross","HB Zone Wk","PA Flood","RPO Alert Lookie","Slants","WR Option"],
        "Trips Close": ["Corner Double In","HB Draw","HB Duo","HB Stretch","Inside Cross","MTN Insert Zone Wk","MTN PA Boot Insert","MTN Slot Option","PA Boot Lt","PA Flood","Slants","Stick"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Duo","HB Zone Wk","MTN Drive Shake","MTN HB Stretch","MTN HB Stretch Lt","MTN Jet Sweep","MTN PA Boot Corner","MTN PA Boot Drive Corner","MTN PA Jet Sweep","MTN Slot Option","MTN Zone Fake Jet","PA Cross Country","Stick"],
        "Wing Pair": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","PA Boot Lt","PA Boot Rt","PA Sprint HB Flat","PA TE Seam","TE Drive","Verticals","Wide Zone Wk"],
        "Wing Tight": ["Counter Wk","Dragon Spacing","HB Dive","HB Duo","HB Inside Zone","HB Smash","Mesh","PA Boot Slide","PA Ctr Waggle","PA Dive","PA Flood","PA Roll Lt","Quick Slant","Sluggo Seam","Stick Nod Vertical"],
        "Wing Tight Nasty": ["26 Duo","HB Counter Str","HB Inside Zone","HB Smash","MTN HB Smash","MTN PA Y-copo","MTN Paboot Lt","PA U-drag Wheel","Stick Spacing"],
        "Wing Tight Z": ["Curl Flat Seam","Drive","HB Dive","HB Duo","HB Smash","Inside Zone","PA Boot Lt","PA Sprint HB Flat","PA Y-drag Wheel","TE Attack","Wide Zone Wk","Y Stick"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet G Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN Paboot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Close": ["95 Mike","Double Post","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","PA Boot Flow","PA Deep Cross Go","PA Deep Read"],
        "Slot Stack": ["94 Will","HB Blast","HB Iso","Jet Sweep","PA Dagger","PA Jet Sweep","Spacing","Stretch","Zone Fake Jet"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","Flood","HB Counter","HB Dive","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Speed Option","Spot Y Option","Stick","Strong Power","Verticals"],
        "Tight Slots": ["Bench","Bench Switch","HB Dive","HB Draw","HB Zone","Mesh","PA Post Shot","Stick Spacing","Wheel Switch"]
      },
      "Gun": {
        "Bunch Offset": ["Bench Pivot","Bunch Drive","Cheat Outside Zone","Choice Shallow Dig","Corner Out Dig","Flood","Inside Zone Split","Jet Pull Shallow","PA Cheat Switch Comeback","PA Cheat Switch Dig","Smash Return","Spacing Switch","Speed Dig","Verts HB Under","Y Trail"],
        "Bunch Spread": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Drive Y Corner","Inside Zone","MTN Curl Flat Corner","MTN Slot Hitch","MTN Slot Out","MTN Slot Under","MTN Snag Under","MTN Y-shake","Outside Zone","PA Post","Z Spot"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Drive Y Corner","Inside Zone","Mesh Slot Out","MTN Deep Over","MTN Mesh Drive","MTN Mesh Swing","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Z Swirl Choice","Z Swirl In"],
        "Bunch TE": ["Crosser Poco","Curl Flat Corner","HB Draw","HB Slip Screen","Inside Switch","Inside Zone","Mesh","MTN Divide","MTN HB Slip Screen","MTN Mesh","MTN Mid Zone","MTN Return Cross Up","MTN Return Drive Flat","MTN Return Flood Stick","MTN Slot Flood","MTN Snag Under","PA Boot Over","PA Slide","RPO Alert Bubble","Same Side Zone","Slot Option","Spacing","Stick","Switch Z Out","TE Corner","Whips","X Spot"],
        "Bunch Wide Nasty": ["Cheat Clearout Drag","Cheat Drag Rub Crosser","Cheat Flood Switch","Cheat HB Slip Screen","Cheat Inside Zone","Cheat Post Slot Cross","Cheat Spot","Cheat Wheel Post","HB Slip Screen","Inside Zone","Mesh Drive","Spacing Switch"],
        "Doubles Y Off": ["Curl Ohio","Fade Stop","Four Verticals","HB Slip Screen","Inside Zone","Jet Inside Zone","Jet Touch Pass","PA Jet Sweep","RPO Peek Slant","Slants","Slot Option","Vert Comebacks"],
        "Empty Bunch Open": ["Bunch Arches","Cheat Flood Divide","Cheat Mesh","Cheat Slot Cross","Choice Shallow Cross","Crossers","Dagger","Drive Y Corner","Middle Cross","Slot Choice Spacing","Slot Choice Spot","Z Spot N Go"],
        "Empty Chips Nasty": ["Dagger Deep Curl","Deep Post Out","Dig Stick","Double 7 Stop","Double Swirl","Out X Dig","Post Cross","Slot Sail","X Cross"],
        "Empty Strong Slots": ["Corner Pivot In","Hoss Juke","Jailbreak Slot Screen","Ohio Ernie","Option Stick Nod","Out Cross","QB Draw","Shock Slot Option","Verticals Under"],
        "Flanker Close": ["Bench","Dragon Spacing","Escape","F Choice Spot","HB Counter","HB Sweep","Inside Zone","Mesh Spot","Weak Flood"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Slash Wheel In","Cheat TE Angle","Cheat TE Screen","Escape","FK Jet Y Wheel","HB Scissors","Inside Zone","Jet Touch Pass","PA Jet Sweep","RPO Alert Cheat Bubble","RPO Alert Out","RPO Glance Post","Y-sail","Zone Fake Jet"],
        "Split WR Backfield": ["Dig WR Option","HB Power O","Inside Zone","Option Y Out","PA Slide","Redzone Corner","Slip Screen Lt","Snag Z Spot","Verts WR Seam"],
        "Spread Y Slot Wk": ["Corner Strike","Curl Outs","Double Cross","Double Slants","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Hitch Seam","Inside Cross","Inside Zone","RPO Peek Slant","Slot Outs","Vert Outside Stop","X Dagger"],
        "Tight Flex": ["Bench","Bench Switch","Cheat Bunch Drive Corner","Cheat Bunch HB Draw","Cheat Bunch Switch Flood","Cross","HB Counter","Inside Hi Lo","PA Post Shot","Slot Curl","Stick","Wheel"],
        "Tight Flex Wk": ["Bench","Inside Hi Lo","Inside Zone","Mesh Spot Rail","MTN Bunch Cross Dig","MTN Bunch Cross Screen","MTN Bunch Drive","MTN Bunch HB Draw","MTN Bunch Switch Flood","MTN Bunch Whip Smash","MTN Mesh Spot","MTN Stick Z Post","MTN Y Cross","PA Dagger","Stick"],
        "Tight Y Off": ["Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","MTN Mesh Spot","MTN Slot Choice","MTN Y-corner","O 1 Trap","PA Go Slot Cross","PA Slot Cross","RPO Peek Slant Bubble","TE Corner","Wheel Spot"],
        "Trio Y  Flex": ["Curl Flat","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Whips","MTN Corner Slot Choice","MTN Mills","MTN Out H-angle","MTN Out N Up","MTN Shock Slot Dig","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shockh Option","Slot Out","Slot Seam","Slot Under H-angle"],
        "Trips HB Wk": ["Four Verticals","HB Slip Screen","Inside Switch","Inside Zone","Middle Slam","MTN Slot Cross","MTN Slot Curls","MTN Wheel Levels Switch","Ohio Sail","Quick Slants","RPO Alert Bubble","Shock H Option"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Alert Screen","Orbit Cross Screen","Orbit PA HB Wheel","PA Boot Shot","PA Counter Go","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Wing Slot Offset": ["Cheat HB Jailbreak Screen","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Dragon Spacing","Drive","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Mesh Spot","MTN Jet HB Duo","MTN Jet PA Cross","MTN Jet Touch Pass","O 1 Trap","PA Dig","PA Read","Read Option","RPO Alert Bubble","Spot Option","Stick Nod Vertical","Z Close Duo","Z Close PA Flood","Z Close Toss"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Duo","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","MTN X-dig Slot Corner","MTN Y-corner Z-choice","O 1 Trap","Outside Zone","PA Power Shallow Cross","Power O","Smash Return"],
        "Y Off Trio Wk": ["Comebacks","Dbl MTN Stack Poco","Dbl MTN Stack Salem Y-out","Dbl MTN Stack Shake N Up","Flood Post","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mills","MTN Outside Zone","MTN PA Deep Over","MTN Smash Go","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Shock H Option","Slants","Slot 2 Buc","Slot Cross"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "ravens",
    name: "Baltimore Ravens",
    style: "Run Heavy / Spread Option",
    formations: {
      "Singleback": {
        "Ace Double Wing": ["Bench","Fake HB Zone QB Boot Lt","HB Counter Wk","HB Dive","HB Power O","HB Stretch","HB Zone Wk","MTN Duo","MTN PAF-flat","MTN Zone Toss","PA Boot Lt","PA Ctr Waggle","PA HB Wheel","PA TE Cross","Stick","TE Corners","TE Shake","Weak Toss"],
        "Bunch Ace": ["Crack Toss","Drive","Drive Y Trail","End Around Lead","HB Slash","HB Slash FK End Arnd","HB Zone Wk","PA Boot","PA End Around","PA Fork Shot","Spacing Switch","Z Spot"],
        "Deuce Close": ["HB Dive","HB Zone Wk","PA Boot Slide","PA Sprint HB Flat","Spacing Switch","Stick"],
        "Tight Doubles": ["Bingo Cross","HB Dive","HB Inside Zone","Jet Sweep Wk","MTN HB Duo","MTN HB Split Zone","MTN PA Boot Slide","PA Sprint HB Flat","PA Switch Replace","Shallow Cross","Under","Zone Fake Jet Wk"],
        "U Off Stack": ["Duo Wrap","HB Stretch","HB Wk Toss","HB Zone Alert Smoke","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","Smash"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Tight Z": ["Curl Flat Seam","Fake HB Zone QB Boot Lt","HB Dive","HB Duo","HB Pitch","HB Stretch","Inside Zone","PA Boot Lt","PA Sprint HB Flat","PA Y-drag Wheel","TE Attack","Ystick"]
      },
      "I Form": {
        "H Tight": ["95 Mike","Fake HB Zone QB Boot Lt","HB Iso","HB Power O","HB Stretch","MTN HB Toss Crack","MTN Mesh","MTN Z Spot","PA FB Slide","PA HB Wheel","PA Power O","PA Scissors"],
        "Wing": ["Curls","FB Dive","HB Counter Wk","HB Lead Dive","HB Power G","HB Power O","HB Stretch","HB Toss","MTN PA Power O","MTN Power O","MTN Zone Weak","PA Boot Flow","PA Scissors","PA Sprint HB Flat","PA Waggle","Post Shot","X Slant"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"],
        "Y Off Close": ["Counter Weak","Dbl MTN PA Double Cross","Dbl MTN PA Y-fork","Dbl MTN Zone Wk","HB Blast","HB Stretch","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Boot X Shot","PA Scissors","TE Option"]
      },
      "Pistol": {
        "Ace Double Wing": ["HB Counter","HB Dive","HB Stretch","Mesh Spot","MTN Duo","MTN HB Power O","MTN PA Power Spot","PA Boot","PA Ctr Waggle","Read Option","Read Option Wk","Speed Option","Split Zone","Strong Power","Wide Zone Wk"],
        "Full House TE": ["Cntr Lead","HB Dive","MTN 0 1 Trap","MTN PA Cross","MTN Power O","PA Comeback","PA TE Corner","Read Option","X Slant"],
        "Strong": ["Asa F Flat","F Lead Read Option","HB Counter","HB Dive Wk","HB Power","HB Slip Screen","Inside Zone Split","MTN HB Zone","MTN PA Crossers","MTN PA Y Corner","PA Boot Lt","PA Corner HB Slip","PA Flood","Power Option","Slants","Stretch Alert X Lookie","Tr Opt Switch","Tr Option Slip","Triple Option","X Post","Zone Alert X Smoke"],
        "U Off Trips": ["Dbl Post","HB Counter","HB Dive","HB Slam","HB Stretch","MTN Lead Read Option","MTN Over PA Dbl Cross","MTN Over Split Zone","MTN Over Triple Option","MTN PA Boot Lt","MTN Touch Pass","PA Boot Over","PA Fl Clown","PA Slot Out","Read Option","RPO Alert Flat","Shock","Strong Power"],
        "Wing Tight Z": ["Drive","HB Counter","HB Power O","HB Zone Wk","PA Power O","Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Dig Return","Duo","Fake Screen Wheel","Flood","HB Draw","Inside Zone","Mesh Spot","Reload Flood X-choice","Reload Inside Zone","Reload Spacing Switch","RPO Alert Out","RPO Peek WR Screen","RPO Read Bubble","Sprint Z Spot","Y Trail"],
        "Bunch Y  Flex": ["83 HB Choice","Dagger","Dig Return","Flood","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Cross Out","MTN Cross Stop Post","MTN Dagger Sit","MTN Double Cross","MTN Drive Zig","MTN Inside Post","RPO Alert Out","Smash Return","Spacing","Verticals","Z Spot"],
        "Deuce Close": ["Bench Swap","Counter Y","Inside Zone Split","Lead Read Option","Mesh Spot","MTN PA Slide","MTN Stick","MTN WR Corner","MTN Y Corner","MTN Y Option","MTN Zone Split","Out N Ups","PA Deep Over","RPO Read Counter Stick","Stick Switch"],
        "Doubles HB Wk": ["Boomerang 0 1 Trap","Boomerang Slot Swing","Boomerang Y Delay","Curl Combo","Double Post","HB Base","HB Slip Screen","Inside Zone","PA Cross","PA Jailbreak Screen","PA Seams","Read Option","RPO Peek Slant","RPO Read Bubble","Sail Dig","Salem Y Corner","Shake HB Corner","X Dagger"],
        "Empty Quads": ["Curl Pivot Dig","Four Verticals","Out Double Under","QB Blast","Vert Double Under","WR Screen"],
        "Heavy Raven": ["Mesh Sit","MTN Counter","MTN HB Dive","MTN Inside Zone","MTN Inside Zone Split","MTN PA Slide","MTN Spot","QB Blast","QB Power"],
        "Normal Y Off Close": ["Double Slant","Escape","FK Jet Y Wheel","HB Scissors","Inside Zone","Jet Touch Pass","Mesh Spot","MTN HB Swing","MTN Snag Curls","MTN TE Middle Screen","Power Read","Read Counter Bash","Read Option","Reload HB Sweep","Reload Mesh Spot","Reload PA Cross","Reload PA Deep Sail","Reload Quick HB Trail","Reload RPO Zone Snag","RPO Peek Stick","RPO Zone Peek","Y-stick Dig","Ystick","Zone Fake Jet"],
        "Split Wing Nasty": ["Motion PA Mesh","Motion Power O","Motion Read Option","MTN PA Slide","MTN PA Y-cross","MTN Read Lead Option"],
        "Spread Dbl Flex": ["Deep Curl","Fl Cross","Four Verticals","HB Slip Screen","Hitch Corners","Inside Zone","MTN Dbl Dig Swing","MTN Dbl Slants Wheel","MTN FK Swing Mid Screen","PA Read","QB Wrap","Read Option","RPO Peek Slant","Slants Middle","Slot Out"],
        "Tight Slot Flip": ["HB Draw","HB Slip Screen","HB Sweep","Inside Zone","MTN HB Angle","MTN Smash Slot Choice","MTN Z Choice","PA Read","Sail"],
        "Tight Slots": ["Bench","Drive Trail","HB Quick Base","HB Sweep","Inside Zone","Jet Pass FK Zone","Mesh","Mid Zone","MTN Bench Snag N Go","MTN HB Draw","MTN Inside Zone","MTN PA Flood Under","MTN PA Slide","MTN Salem Slot Option","Out N Ups","PA Shot Portland","PA Slide","PA Zone FK Jet","Paseam","Stick","Zone Fake Jet"],
        "Tight Y Off Wk": ["Dagger H-swing","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","Mesh Whips","Outside Zone","PA Corner","Pivot Return","RPO Zone Alert Omaha","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Smash Hammer","Smash Y Double","Spot Y Middle","Tackle Trap","Y Lead Read Option"],
        "Trey Open": ["Curlsx Go","Drag Verticals","Four Verticals","HB Base","HB Draw","HB Slip Screen","Inside Zone","Levels Switch","Mesh","Mesh Rewind","Mid Zone","PA Read","PA WR In","Power Read","QB Zone","Read Dig","Read Option","RPO Alert Draw Stick","Salem","Slot Drive","Speed Option","Stick","Strong Flood","Wrmid Screen","Y Corner","Ysail","Z Under"],
        "Trey Open Str": ["Dbl Ins","Deep Stick","Drive Post","Fade Stop","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Levels Switch","Mid Zone","QB Blast","QB Sweep","Read Option","RPO Peek Bubble","RPO Peek Slant","Same Side Zone","Slot Fade","Stick"],
        "Trips TE Offset": ["Flipqb Wrap","HB Counter","HB Flip Counter","HB Slip Screen","Inside Zone","Levels Sail","PA Crossers","Read Option","RPO Alert Bubble","Scat","Shock H Option","Speed Option","TE In","Verticals","X Under"],
        "Trips TE Offset Wk": ["Bounce PA Bubble Flood","Bounce Read Option","Bounce Shallow Cross","Fake Screen Wheel","Flood Divide","HB Power","HB Slip Screen","Inside Zone","Middle Slant","Outside Zone","PA Flood","PA Verts Shot","Return Sprint Comeback","Return Sprint Spot","Return Sprint TE Screen","RPO Peek Slant","RPO Read Bubble","RPO Read WR Screen","Rz Rub Slot Wheel","Switch Dagger","Verticals"],
        "Trips X Nasty Off Wk": ["Bounce Inside Zone","Bounce PA Curl Seam","Bounce QB Wrap","HB Power","Hi Lo Dig","MTN Drag Sluggo","MTN Slot Fades","MTN Triple Slants","Quick Fork Zig","Quick Short Post","Quick Unders","Snag Slot Digs"],
        "U Off Trips": ["HB Sweep","MTN Jet Sweep","MTN PA Jet Cross","MTN PA Jet Sweep","MTN QB Blast","MTN QB Counter","MTN QB Power","PA Ucorner Flood","PA Y Screen","Read Option","RPO Alert Bubble","Shock"],
        "Wing Slot Offset": ["Dragon Spacing","Drive","Duo","HB Punch","Mesh Spot","MTN Choice Wheels","MTN Jet HB Duo","MTN Jet PA Cross","MTN Jet Touch Pass","MTN QB Sweep","MTN WR Angle Post","PA Read","QB Zone","Read Option","RPO Alert Bubble","Scissors Smash","Spot Option","Stick Nod Vertical"],
        "Wing Slot Wk": ["Buck Sweep Read Opt","Double Post","MTN FK Screen Wheel","MTN HB Wheel","MTN Inside Zone","MTN PA Slot Option","MTN PA Verticals","MTN Read Option","MTN RPO Alert Screen","MTN RPO Buck Alert","MTN TE Lead Read Opt","PA Bubble Y Over","Power Read","RPO Peek Post","Slant Stick"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Duo","MTN HB Slip Screen","MTN Inside Zone","MTN Mesh Rail","MTN Out Deep Corner","MTN PA Cross Switch","MTN Slot Choice","MTN X-dig Slot Corner","MTN Y-corner Z-choice","O 1 Trap","Outside Zone","PA Power Shallow Cross","Power O","Smash Return"],
        "Y Off Trio Wk": ["Corner Strike","Cross","Dbl MTN Stack Poco","Dbl MTN Stack Salem Y-out","Dbl MTN Stack Shake N Up","Deep Out","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","In Go","Inside Zone","MTN Outside Zone","MTN PA Deep Over","MTN Smash Go","Outs","PA Post Dig Shot","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Shockh Option","Stick","Stick N Up"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "saints",
    name: "New Orleans Saints",
    style: "West Coast / Balanced",
    formations: {
      "Singleback": {
        "Tight Y Off": ["Bench Switch","Drive Flood","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Jet Sweep","Stick","Zone Fake Jet"],
        "Wing": ["Close PA Cross","Close PA Sail","Close Zone Strg","Curl Combo","HB Blunt Dive","HB Dive","HB Duo","HB Stretch","PA Boot Lt","PA Vertsy Dig","TE Attack","Y Stick"],
        "Wing Slot": ["Four Verticals","HB Dive","HB Duo","HB Slip Screen","HB Stretch","HB Zone Wk","PA Cross Shot","PA Sail Dig","PA Sail X Post","PA Slot N Go","PA Y Screen","Y Stick"],
        "Wing Tight Nasty": ["Dig Y-wheel","Duo","HB Counter Str","HB Stretch","MTN HB Smash","MTN PA Y-copo","MTN Paboot Lt","PA U-drag Wheel","Stick Spacing"],
        "Y Trips Close": ["Curls X-choice","HB Dive","HB Pump Draw","HB Stretch","Jet G Soar","Mesh","MTN HB Zone Wk","MTN Jet PA Slot Screen","MTN Jet PA Sprint Rt","MTN Jet PA Sprint Y Leak","MTN Jet PA Wide Zone","MTN Jet Slot Choice","MTN Jet Wide Zone","MTN Paboot Rt","MTN X-go Dig","PA Switch WR In","Smash","WR Screen"]
      },
      "I Form": {
        "Pro": ["Bench","Corner Strike","Cross In","Curls","FB Dive","FB Fake HB Flip","Goal Line Fade","HB Counter Wk","HB Duo","HB Slip Screen","HB Stretch Alert X Smoke","Inside Zone","Iso","Iso Weak","Mesh","PA Boot","PA Comeback Slide","PA Scissors","PA Sprint HB Flat","PA Weak Flood","Quick Slants","Slant And Go&#x27;s","Texas","Z Spot"],
        "Y Off Close": ["Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"],
        "Wing Close": ["FB Dive","HB Stretch","Inside Zone Split","MTN Double Slant","MTN Power O","MTN Power Shot","PA FB Flat","PA Sprint HB Flat","Spacing HB Wheel"]
      },
      "Wildcat": {
        "Pro": ["Counter","Jet Sweep","Power"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Stretch","Inside Zone Split","Mesh Spot","PA Boot Y Leak","PA Z Over","Y Lead Read Option"],
        "U Off Stack": ["Dash Flood","Dbl Post","HB Slip Screen","HB Stretch","HB Zone","Inside Zone Split","PA Boot","PA Corner Dig","PA Flood Out"],
        "Wing Flex Close": ["HB Zone Wk","MTN Dig Gos","MTN Fork H-choice","MTN Slot Comeback","PA Boot Lt","PA Boot Y Sail","Wide Zone","WR Under","Zone Alertwr Screen"],
        "Y Trips": ["Curls","HB Dive","HB Zone Wk","MTN Corner Strike","MTN HB Draw","MTN HB Slip Screen","PA Read","Pin Pull Sweep","Y Stick"]
      },
      "Gun": {
        "Box Y Off": ["Counter Y","Drive","Flood","HB Slip Screen","Inside Zone","Mid Zone","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Shock H Option","Y Trail"],
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Spacing","Speed Dig","Z Spot"],
        "Bunch TE Wk": ["HB Dive","HB Draw","HB Slip Screen","Mesh Mills","Mesh X-post","MTN Divide X-under","MTN Escort HB Base","MTN Escort Insert X-out","MTN Escort PA Slide","MTN Flood H-sneak","MTN Snag Under","PA Wheel Z-curl","RPO Read Bubble","Shallow H-corner","Spacing X-wheel"],
        "Bunch X Nasty": ["Choice Shallow Dig","Counter Y","Dig Return","Double Outs","Drive Y Corner","Empty Flat Stick","Empty Spot Wheel","Empty Stick Spacing Switch","Inside Zone","Mesh Spot","MTN China Cross","MTN HB Shovel","MTN Mesh HB Sneak","MTN Slot Middle","MTN Smash Sluggo","MTN Speed Dig Under","RPO Zone Alert","Smash Return"],
        "Cluster HB Str": ["45 Quick Base","Flanker Drive","HB Slip Screen","Mesh Spot","MTN Cross Switch","MTN HB Draw","MTN Mesh","MTN Mesh Post","MTN Mesh Rewind","MTN Slot Screen","PA Read","Post Curls","Post Dig","Read Option","Spacing","Spot Lead Swing","Verticals","Z Spot"],
        "Deuce Close": ["Bench Dig Curl","Bench X Dig","Inside Zone Split","Lead Read Option","Mesh Spot","MTN WR Corner","MTN Y Option","MTN Ycorner","Out N Ups","RPO Peek Stick","RPO Read Flat Wheel","Spacing Switch"],
        "Doubles Clamp Stack": ["Counter Y","Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Choice Gos Y-shake","MTN Counter Y","MTN FK Rub","MTN Flood HB Sneak","MTN Rub Smash","MTN Salem Drag","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Same Side Zone","Spot Choice","Texas Smash","Texas Y-stutter Wheel","Y Ohio Return"],
        "Doubles Flex Y Off Close": ["Escape","Flood H Post","HB Scissors","Inside Zone","Jet Pass FK Zone","MTN Angle Y Wheel","MTN Daggery In","MTN Dig Under","MTN HB Angle","MTN HB Fade","MTN HB Out","MTN HB Slot Screen","MTN Slot Post","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles Off Close Wk": ["Counter Y","Double Post","HB Slip Screen","Inside Zone","MTN Buck Sweep","MTN Mesh Rail","MTN PA Wave","MTN PA Y Cross","MTN Stickx Replace","MTN TE Mid Screen","PA Y Cross","Pivot In Seams","RPO Read Bubble","Snag HB Wheel","Sprint Flood","X Cross","X Dagger","Y Lead Read Option"],
        "Empty Base Flex": ["Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Redzone Up","Stick","Verticals","Y Corner"],
        "Empty Triple Stack": ["Power RPO","QB Zone Lt","Verticals"],
        "Heavy Saint": ["Mesh Sit","QB Blast","QB Power"],
        "Normal Y Off": ["45 Quick Base","Corner Strike","Counter Y","Curl Combo","Curls Lead Swing","Double Dig","Exit RPO Alert Screen","Exit Slot Option","Exit Switch Out","Four Verticals","HB Slip Screen","Inside Zone","Mid Zone","PA Same Side Boot","Read Counter Bash","Read Option","Return Double Slants","Return HB Scissors","Return Inside Zone Split","Return PA Slide","Return Same Side Zone","Return Whip Z Dig","RPO Peek Slant","Same Side Zone","Shuffle Strong Flood","Shuffle TE Mid Screen","Shuffle Z Short Cross","Slant Flat","Stick Slot Option","Y Shallow Cross"],
        "Spread Dbl Flex": ["Corner Strike","Flanker Dig","HB Mid Draw","HB Slip Screen","HB Sweep","Inside Cross","Inside Zone","MTN Curls H-sluggo","MTN Dbl Dig Swing","MTN Dbl Slants Wheel","MTN Fades H-choice","MTN FK Swing Mid Screen","MTN Flood H-wheel","PA Comebacks","PA Dig","Quick Slants","Read Option","RPO Alertz Screen","Slot Outs","Y Shallow Cross","Z Spot"],
        "Spread Y  Slot": ["617","All Go","Cross Dig","Curl Wheel","H Shallow Cross","HB Draw","Inside Zone","Mesh","MTN Double Post","MTN Double Screen","MTN Hstick","MTN Slot Screen","MTN Y Cross","MTN Z Shallow Cross","Orbit Cross Screen","Orbit PA Cross","PA Read","RPO Alert Orbit Swing","RPO Peek Slant","RPO Read Screen","Rz Cross HB Rail","Y Cross","Y Shallow Cross","Y Stick"],
        "Stack Y  Flex": ["Corner Strike","Curl Combo","Double Corner","Drive H Wheel","Fade Qut","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","Levels","PA Jailbreak Screen","PA Read","Salem Pivot","Y-sail","Z Spot"],
        "Tight Base Flex": ["Dragon Spacing","F Choice Spot","HB Off Tackle","HB Quick Base","HB Slip Screen","Inside Zone","MTN FK H-angle","MTN H-angle","MTN H-choice"],
        "Tight Y Off": ["Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","Mesh Whips","MTN Mesh Spot","MTN Outside Zone","MTN PA Spinner","MTN Slash Wheel Cross","MTN Slot Choice","MTN Spinner HB Inside","MTN Spot Y Quick","MTN WR Outside Zone","MTN Y-corner","O 1 Trap","PA Go Slot Cross","PA Slot Cross","Puuo","Read Option","RPO Peek Slant","TE Corner","Zone Fake Jet"],
        "Trey Open": ["Corner Strike","Dagger Deep Curl","Double Ins","Four Verticals","H MTN Flood H-sneak","H MTN Mesh","H MTN X Shallow Cross","HB Angle Screen","HB Slip Screen","Inside Zone","Jet New Orleans","Levels Switch","Mid Zone","PA Read","Read Option","RPO Alert Draw Stick","Same Side Zone","Shock H Option","Slants","Slot Drive","Stick","WR Mid Screen","Y Corner","Y-drag"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Trips TE Flex": ["Dagger","Double In Sail","HB Angle","HB Slip Screen","Levels Sail","MTN Fork H Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","PA Fork","PA Shot Crossers","Post Rail","Read Option","RPO Zone Alert Omaha","Same Side Zone","Stick","Verticals","Y Out N Up"],
        "U Off Stack": ["Empty Hitch N Go","Empty Slot Under","Empty Y-choice Under","Inside Zone","MTN Double Under","MTN HB Punch","MTN PA Crossers","MTN PA Switch Flood","MTN PA Y-leak","MTN Read Option","Outside Zone","RPO Alert Out"],
        "Wing Slot Offset": ["Dbl MTN Counter Y","Dbl MTN Gt Counter","Dbl MTN HB Toss","Dbl MTN PA Slide","Dbl MTN PA Slot Corner","Dbl MTN Split Zone","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet Pass FK Zone","Mesh Spot","O 1 Trap","Ohio Spacing","PA Jet Sweep","PA Read","QB Zone","RPO Alert Bubble","Wheel Post Drag","Zone Fake Jet"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"],
        "Y Off Trips Nasty": ["Counter Y","Dagger Whip","Double Cross","Flood HB Swing","HB Slip Screen","Inside Zone","MTN Curls Y-wheel","MTN HB Choice","MTN HB Out","PA Double Post","RPO Read Y Flat","Slot2buc"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "seahawks",
    name: "Seattle Seahawks",
    style: "West Coast / Run Balanced",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slam","HB Slash","Inside Zone Split","Inside Zone Wk","PA Boot","PA Boot Corner Post","PA Boot Slide","PA Counter","PA Cross","PA Deep Cross Go","PA Deep Out","PA Drag Wheel","PA Post Curl Shot","PA Post Dig","PA X Out Cross","Spacing","Verticals","Wide Zone Wk"],
        "Deuce Close": ["Bench","Corner Stops","Flood","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","Motion Zone Toss","MTN Shuffle H-choice","MTN Shuffle H-shake","MTN Shuffle Y-wheel","MTN Zone Split","PA Boot Slide","PA Motion Flood","PA Rz Crossers","PA Slidey Screen","PA Sprint HB Flat","PA X Post Cross","Spacing Switch","Stick","Zone Split Wk"],
        "Tight Y Off Flex": ["Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","O 1 Trap","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Toss FK Reverse","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA FK Toss Wheel","PA TE Flood","PA Y-drag Wheel","Pitch WR Reverse","Rz PA Crossers","Stick X-dig","Wide Zone"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Duo","HB Stretch","HB Toss Weak","HB Zone Wk","MTN Jet Sweep","MTN PA Jet Sweep","MTN Zone Fake Jet","PA Shot Post","Smash","Stick"],
        "Wing Stack": ["Flanker Spot","HB Dive","HB Duo","HB Stretch","HB Zone Wk","Jet Sweep","PA Dig","PA Double In Shot","PA Fork","PA Jet Sweep","Y Stick","Zone Fake Jet"],
        "Wing Tight Left": ["26 Duo","HB Dive","HB Power","Inside Zone","Jet Sweep Wk","PA Boot Slide","PA Jet Sweep","PA Scissors","PA Sprint HB Flat","Stick","Wide Zone","Zone Fake Jet Wk"],
        "Y Off Trio Close": ["HB Duo","HB Outside Zone","HB Zone Wk","Mesh","MTN Shuffle Smash","MTN Shuffle Y-trail","MTN Shuffle Z-post","O 1 Trap","PA Cross Dig","PA Slide Cross","PA TE Screen","Read X-choice","Spacing X-choice","Stick","Y Shallow Cross"],
        "Y Trips Close Wing": ["Curls X-choice","HB Dive","HB Slip Screen","HB Stretch","Jet PA Sprint Rt","Jet PA Wide Zone","Jet Wide Zone","Mesh","MTN HB Zone Wk","MTN Paboot Rt","MTN X-go Dig","PA Switch WR In","Shallow X-dig","Slot Drive","Smash"]
      },
      "I Form": {
        "Pro": ["94 Will","95 Mike","Curls","HB Duo","HB Lead Dive","HB Stretch","Iso","PA Comeback Slide","PA Scissors","PA Sprint HB Flat","PA TE Screen","PA X Curl","PA X Dig","Post","Quick Slants"],
        "Slot Close": ["94 Will","HB Blast","HB Lead Dive","HB Stretch","Jet Sweep","PA Jet Sweep","PA Shot Post","PA Spot","PA Sprint HB Flat","PA Switch Dig","Spacing","Zone Fake Jet"],
        "Wing": ["HB Lead","HB Stretch","MTN Power","MTN Zone","PA Boot Flow","PA Scissors","Pau Slide","X Slant","Zone Toss"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Weak": {
        "3wr Flex": ["Dagger X-corner","HB Gut","HB Stretch","Mesh Z-dig","PA Boot Lt","PA Power O","PA X-dig","Power O","Slot Fade X-choice"],
        "Close Flex": ["94 Will","Bench Flat","Drive","HB Dive","Inside Zone","Mesh","PA Boot Shot","PA Spot","Spacing"],
        "Wing": ["94 Will","FB Power","HB Gut","Middle Hooks","MTN Counter Weak","MTN HB Power O","MTN PA Power O","PA Boot Slide","PA TE Slide","Post Shot","TE Drag","X Slant"]
      },
      "Gun": {
        "Box Y Off": ["Counter Y","Drive","Flood","HB Slip Screen","Inside Zone","Y Trail"],
        "Bunch Open Offset": ["Fake Screen Wheel","Flood","Inside Zone","Reload Flood X-choice","Reload Inside Zone","Reload Spacing Switch","RPO Peek WR Screen","RPO Read Bubble","Y Trail"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Inside Zone","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Speed Dig","Z Swirl Choice","Z Swirl In"],
        "Bunch X Nasty": ["Choice Shallow Dig","Counter Y","Dig Return","Double Outs","Drive Y Corner","Empty Flat Stick","Empty Spot Wheel","Empty Stick Spacing Switch","Inside Zone","Mesh Spot","MTN China Cross","MTN HB Shovel","MTN Mesh HB Sneak","MTN Slot Middle","MTN Smash Sluggo","MTN Speed Dig Under","RPO Zone Alert","Smash Return"],
        "Deuce": ["Bench Swap","Bounce Inside Zone Split","Bounce Outside Zone","Bounce PA TE Cross","Chip Poco X Dig","Corner Gos Flat","Counter Y","Double Go","Exit Alert Zone Screen","Exit PA Wheel","Exit RPO Peek Snag","Inside Zone","Inside Zone Split","Lead Read Option","Mesh Spot","PA Slide","PA Y Leak","Shallow Cross"],
        "Doubles Flex Y Off Close": ["Escape","Flood H Post","HB Scissors","Inside Zone","Jet Pass FK Zone","MTN Angle Y Wheel","MTN Daggery In","MTN Dig Under","MTN HB Angle","MTN HB Out","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles Z Close Wk": ["Daggerz Comeback","Deep Post Switch","Double Post","HB Base","HB Slip Screen","Inside Zone","Mesh HB Sneak","Mid Zone","MTN Curl Combo","MTN FK Screen Wheel","MTN Inside Zone","MTN PA X Spot","MTN Switch Wheel","MTN Z Spot","PA Jailbreak Screen","Redzone Fork","RPO Read Bubble","Slants"],
        "Empty Base Flex": ["Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Redzone Up","Stick","Verticals","Y Corner"],
        "Empty Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","MTN Spot","MTN Verticals","MTN WR Swing","QB Draw","Spacing","Spot"],
        "Empty Trey Stack": ["Bench Corner","Curl Flat Salem","Curl Switch","Double Stick","Fade Out","Jailbreak Screen","Levels","Post Wheel","QB Draw","Shock Slot Option","Slot Middle Screen","Smash Seam","Stick N Nod","Y Stick","Z Under"],
        "Normal Flex Snug": ["45 Quick Base","All Curl","HB Draw","Inside Zone","PA All In","PA FK Screen Cross","PA Whips Curls","RPO Alert WR Screens","RPO Read Gt Screen","Switch Seams","Whips Curls","X Option","Z Option","Z Replace","Z Spot"],
        "Split Twins Offset": ["HB Cross Buck","Inside Zone Lt","MTN FK Screen Wheel","MTN PA Switch Sail","MTN Read Bubble","MTN RPO Zone Bubble","MTN Slot Cross","MTN X Spot","PA F Slide","PA HB Seam","Speed Option","Triple Option Lt"],
        "Spread Dbl Flex": ["Corner Strike","Flanker Dig","HB Mid Draw","HB Slip Screen","HB Sweep","Inside Cross","Inside Zone","MTN Curls H-sluggo","MTN Dbl Digswing","MTN Dbl Slants Wheel","MTN Fades H-choice","MTN FK Swing Mid Screen","MTN Flood H-wheel","PA Comebacks","PA Dig","Quick Slants","Read Option","RPO Alertz Screen","Slot Outs","Y Shallow Cross","Z Spot"],
        "Tight Base Flex": ["Dragon Spacing","F Choice Spot","HB Off Tackle","HB Quick Base","HB Slip Screen","Inside Zone","MTN FK H-angle","MTN H-angle","MTN H-choice"],
        "Tight Flex Offset": ["Dragon Spacing","HB Draw","HB Slip Screen","Inside Zone","Mesh Spot","MTN Choice","MTN Dagger H-choice","MTN FK H-angle","MTN Fork Y-corner","MTN H-texas","MTN Spot Dig","O 1 Trap","PA Switch Verts","Slot Outs H-angle","Spot Shake"],
        "Tight Flex Wk": ["Bench","Go Y-choice","HB Slip Screen","Inside Hi Lo","Inside Zone","Mesh Spot Rail","Mid Zone","MTN Bunch Cross Dig","MTN Bunch Cross Screen","MTN Bunch Drive","MTN Bunch HB Draw","MTN Bunch Switch Flood","MTN Bunch Whip Smash","MTN Mesh Spot","MTN Stick Z Post","MTN Y Cross","PA Dagger","PA Same Side Flood","Quick Looks","Same Side Zone","Stick"],
        "Tight Slot Flip": ["HB Draw","HB Slip Screen","HB Sweep","Inside Zone","MTN HB Angle","MTN Smash Slot Choice","MTN Z Choice","PA Read","Sail"],
        "Tight Y Off": ["Duo","Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Jet Touch Pass","Mesh Whips","MTN Mesh Spot","MTN Outside Zone","MTN PA Spinner","MTN Slash Wheel Cross","MTN Slot Choice","MTN Spinner HB Inside","MTN Spot Y Quick","MTN WR Outside Zone","MTN Y-corner","O 1 Trap","PA Go Slot Cross","PA Slot Cross","Read Option","RPO Peek Slant","TE Corner","Zone Fake Jet"],
        "Trips TE": ["45 Quick Base","All Curl","China Y Post","Curl Flat","Dagger Texas","Double In Sail","Drive Post","Flood","HB Counter","HB Mid Draw","HB Slip Screen","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","PA Shot Wheel","PA Slot Corner","QB Strong Power","QB Zone","Read Option Bubble","RPO Alert Bubble","Speed Option","TE Middle Screen","TE Swirl","Verticals","Verts Y Delay","WR Short Post","Z Cross"],
        "Wing Tight Nasty": ["Bench","Bench Swap","HB Punch","Inside Zone","Mesh Spot","Read Option"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Counter Y","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","Smash Return"],
        "Y Trips Wk": ["China Smash","Comebacks","Corner Strike","Curls","Dagger Ywhip","Dbl Ins","Four Verticals","HB Base","HB Draw","HB Mid Zone","HB Slip Screen","Inside Zone","MTN Mesh","MTN Mesh Spot Sneak","MTN Same Side Zone","MTN Seam Swirl","MTN Smash Choice","MTN Y Shallow Cross","PA Under","PA WR In","Quick Fork Zig","Quick Short Post","Quick Unders","Read Option","RPO Peek Slant","Shockh Option","Slants","Slot 2 Buc","WR Mid Screen","Y Corner H Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "steelers",
    name: "Pittsburgh Steelers",
    style: "West Coast / Run Power",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Cheat HB Slash","Counter Y","Crack Toss","HB Dive","HB Slam","Inside Zone Split","PA Boot","PA Boot Cheat Slide Levels","PA Cheat Wheel Post","PA Counter","PA Cross","PA Deep Cross Go","PA Post Curl Shot","PA Sprint HB Flat","PA X Out Cross","Spacing","Verticals","Wide Zone Wk"],
        "Deuce Close": ["Bench","Bench Z-dig","Corner Stops","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","PA Boot Corner Post","PA Boot Slide","PA Deep Cross","PA Drag Wheel","PA MTN Spider Y Leak","PA Slidey Screen","PA X Post Cross","Stick","Zone Split Wk"],
        "Doubles Off Close": ["Bench Corner Stop","Dragon Spacing","HB Dive","HB Stretch","HB Zone Wk","Jet Sweep","PA Boot Slide","PA Jet Sweep","Zone Fake Jet"],
        "Tight Y Off": ["Bench Switch","Cheat HB Dive Wk","Drive Flood","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Cheat Cross","PA Jet Sweep","Rz MTN PA Crossers","Stick","Zone Fake Jet"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Out N Up","MTN PA Zslide","MTN Zone Alert","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Pair": ["Duo","HB Counter Wk","HB Dive","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Y Stick"],
        "Wing Pair Heavy": ["HB Counter Wk","HB Dive","HB Duo","HB Inside Zone","HB Stretch","MTN HB Plunge","MTN Mesh Drive","MTN PA Deep Flood","MTN PA X Zig Flood","MTN Power O","MTN Spot","PA Ctr Shot","PA Sprint HB Flat","RPO Stretch Alert Lookie","Ystick"]
      },
      "I Form": {
        "Wing": ["95 Mike","FB Dive","HB Counter Wk","HB Power G","HB Power O","HB Stretch","HB Zone Toss","Iso","PA Power O","PA Scissors","PA X Burst Cross","X Slant"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Dbl Outs","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Pylon Sail","PA X Deep Out"]
      },
      "Strong": {
        "Close": ["Counter Weak","End Around","Fl Drive","HB Dive","HB Off Tackle","HB Slash FK End Arnd","Inside Post","Mesh Post","PA Deep","PA Post Dig","PA Scissors","WR Out"]
      },
      "Weak": {
        "I Slot": ["Bubble Screen","HB Blast","HB Lead","HB Option","HB Slip Screen","PA Boot Slide","PA Deep Threats","PA Flood","PA Slot In","Read FB Flat","Slants","X Dig"]
      },
      "Gun": {
        "4wr Trips Strong": ["Curls","Double Ins","Double Slants","Drive X-post","Four Verticals","HB Angle","HB Base","HB Draw","HB Slip Screen","Inside Zone","PA WR In","Scat","Seam X-comeback","Slot Fade Shot","Slot Out","Smash X-dig","Stick Nod","Stick X-slant"],
        "Bunch Open": ["Flood","HB Draw","HB Slip Screen","Inside Zone","Levels","PA Slots Over","Read Option","Spacing","X Spot"],
        "Bunch Open TE": ["Clearout Z Option","Dig Return","Fake Screen Verticals","Flood","HB Draw","HB Slip Screen","MTN Mesh Spot","MTN RPO Read Snag","MTN Sprint Z Spot","RPO Alert Bubble","RPO Alert WR Screen","Same Side Zone","Sprint Double Out","Y Trail","Z Spot"],
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Curl Flat","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Outside Zone","PA Post","Spacing","Speed Dig","Z Spot"],
        "Bunch X Nasty": ["Counter Y","Deep Flood","Drive HB Under","HB Base","Inside Zone","Mesh Corner","Mesh Traffic","MTN Cross Post","MTN RPO Zone Alert","MTN Y Corner Under","Return Mesh Spot","Return Spot","Return Whip Trail","Rz PA X Whip","Whip Double Spot","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Cluster": ["518 Hook","Cluster Bunch","HB Counter","HB Mid Draw","HB Slip Screen","Inside Zone","Mesh","Mesh Post","Mesh Whip","Outside Zone","PA Read","Spacing","Verticals","Z Spot","Z Spot Shake"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Y Off Nasty": ["Counter Y","Cross Y Trail","Double Post","Fake Jet HB Seam","Fork H Traffic","HB Slip Screen","Inside Zone","Jet Pass FK Zone","MTN HB Cross Screen","MTN Slot Fades","MTN Smash","Outside Zone","PA Y Cross","RPO Zone Read Bubble","Snag HB Wheel","Tackle Trap","X Dagger","Zone Fake Jet"],
        "Empty Base Trio": ["All Hitch","Curl Combo","Double In","Double Slant Stick","Hoss Juke","QB Draw","Shock Slot Option","Slant Flat","Stick Nod"],
        "Empty Strong Slot": ["Corner Strike","Double Salem","FK Screen Sluggo","FK Screen Verts","MTN HB Screen","Seam Double Unders","Slots Cross","Stutter Hook","Verticals","WR Screens","WR Shake","Y-stick"],
        "Flex Trey": ["Corner","Curl Flats","Curls","Drive","Empty Stick","Four Verticals","Hitch Corners","Jailbreak Slot Screen","Middle Slant","QB Zone","Shallow Cross","Stick N Nod","Strong Flood","Verticals Y Shake","WR Comebacks"],
        "Normal Y Off": ["45 Quick Base","Curl Combo","Dbl Dig","Exit RPO Alert Screen","Exit Slot Option","Exit Switch Out","Four Verticals","HB Scissors","HB Slip Screen","Inside Zone","Mid Zone","MTN Fork Z-corner","MTN PA Switch Z-cross","MTN Split Inside Zone","PA QB Choice","PA Same Side Boot","RPO Peek Slant","Same Side Zone","Shuffle Strong Flood","Shuffle TE Mid Screen","Shuffle Z Short Cross","Slant Flat","Stick","Y Shallow Cross"],
        "Split Close": ["Dbl Ins","Double Swirl","HB Choice","HB Power O","HB Rail","HB Slip Screen","HB Wheel","Pivot Dig","Read Option"],
        "Spread Y  Slot Wk": ["Corner Strike","Double Cross","Double Slants","HB Base","HB Off Tackle","HB Scissors","HB Slip Screen","Inside Zone","MTN All Curl","MTN Buck Sweep","MTN G Down","MTN H Option","MTN HB Counter","MTN Inside Zone Split","MTN PA Cross","MTN RPO Zone Peek","MTN Switch Seam","PA Read","Slot Outs","Spot Y Cross","Vert Comebacks"],
        "Tight Doubles": ["Bench","Cross Wheels","Dbl Stick","Flood Drive","HB Angle","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Spot","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross","Shot Fade Cross","Tight Curl","Z Spot"],
        "Tight Flex Wk": ["Bench","Inside Hi Lo","Inside Zone","Mesh Spot Rail","Mid Zone","MTN Bunch Cross Dig","MTN Bunch Cross Screen","MTN Bunch Drive","MTN Bunch HB Draw","MTN Bunch Switch Flood","MTN Bunch Whip Smash","MTN Mesh Spot","MTN Stick Z Post","MTN Y Cross","PA Dagger","PA Same Side Flood","Same Side Zone","Stick"],
        "Tight Y Off": ["Cheat Outside Zone","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Deep Crossers","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","Mesh Whips","MTN Mesh Spot","MTN PA Spinner","MTN Slot Choice","MTN Spinner HB Inside","MTN WR Outside Zone","MTN Y-corner","O 1 Trap","PA Go Slot Cross","PA Jailbreak Screen","PA Slot Cross","Read Option","RPO Peek Slant","RPO Peek Slant Bubble","Switch WR Drag","TE Corner","Wheel Spot"],
        "Trips TE": ["Cheat Clearout Seam","Cheat Flood Divide","Cheat Inside Zone","Deep In","Drive Post","HB Angle","HB Counter","HB Slip Screen","Inside Zone","MTN FK Screen Wheel","MTN HB Swing","MTN Levels Y-corner","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","Reload PA Unders","Reload RPO Zone Alert Bubble","Reload Shock HB Choice","RPO Alert Bubble","Shallowx Dig","Texas","Verticals","WR Short Post"],
        "Trips TE Flex": ["Dagger","Double In Sail","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","MTN Fork H Choice","MTN Hitch N Go","MTN Y Post","PA Crossers","RPO Zone Alert Omaha","Scat","Stick","Verticals"],
        "Trips X Nasty": ["HB Mid Draw","HB Off Tackle","HB Slip Screen","Hi Lo Cross","Hi Lo Dig","Inside Zone","Mid Zone","MTN HB Swing","MTN Slot Fades","MTN Slot Stick Nod","MTN Spot Y Corner","MTN Stick Wheel","MTN Triple Slants","PA X Cross Shot","Quick Fork Zig","Quick Short Post","Quick Unders","Slot Fade H Wheel","Snag Slot Digs","Verticals X Shallow","WR Smash"],
        "Wing Slot Offset": ["Cheat Choice Wheels","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Duo","Fake Jet HB Wheel","Fake Jet Scissors","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Jet HB Duo","Jet Pass FK Zone","Mesh Spot","MTN Counter","MTN PA Slide","MTN Switch Wheels","O 1 Trap","Ohio Spacing","PA Dig","PA Double Post","PA Jet Sweep","RPO Alert Bubble","Scissors Smash","Smash","Spacing","Spot Option","Zone Fake Jet"],
        "Wing Trips Wk Nasty": ["All Go HB Choice","HB Base","Inside Zone Split","Outside Zone","PA Crossers","RPO Buck Alert Out","Shallow Cross Smash","Shuffle Shock HB Choice Go","Shuffle Smash Y Shake","Shuffle Wheely Drag","Stick","Stick N Nod","Y MTN Bench Ins","Y MTN Drive","Y MTN Flood"],
        "Y Off Trips Wk": ["Counter Y","Curls Combo","Dig Cross","Four Verticals","HB Draw","HB Flip Counter","HB Slip Screen","Hi Lo Dig","Inside Zone Split","Mid Zone","Outside Zone","PA Flip Counter","PA Slide","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Glance Bubble","Same Side Zone","Sft Inside Zone","Sft PA Read Slot Post","Sft Slot Cross","Shockh Option","Slot 2 Buc","Slot Fade","Sluggo Seam","Stick","Z Under"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"],
        "Sneak": ["Tush Push"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "texans",
    name: "Houston Texans",
    style: "Spread / Balanced",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slash","Inside Zone Wk","Jet Sweep Wk","MTN HB Dive","MTN PA Deep X Over","MTN X Whip","PA Boot","PA Boot Corner Post","PA Cross","PA Deep Out","PA Jet Sweep","PA Post Curl Shot","Spacing","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["Bench","Cntir Wk","HB Wham","Inside Zone Split","MTN HB Stretch","MTN PA Boot Scissors","MTN Papost Cross","PA Boot Corner Post","PA Deep Cross","PA Drag Wheel","PA Slidey Screen","Spacing Switch","Stick","TE Angle","Zone Split Wk"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Double Move Cross","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Stretch","HB Zone Wk","Inside Zone Split","Omaha","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Flood","PA Leak","PA Post Dig"],
        "Trips Close": ["Corner Double In","HB Draw","HB Duo","HB Stretch","Inside Cross","MTN Insert Zone Wk","MTN PA Boot Insert","MTN Slot Option","PA Boot Lt","PA Flood","Slants","Stick"],
        "U Off Trips Cluster": ["HB Slip Screen","HB Stretch","HB Toss Lt","Inside Zone","MTN HB Draw","MTN HB Power","MTN Mesh HB Rail","MTN PA Draw","MTN PA Y Corner","MTN Zone Toss","PA Boot","PA Boot Slide","PA Dagger U Cross","PA Flood","Stick"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Flex Close": ["Drive Y Corner","HB Stretch","HB Zone Wk","MTN HB Stretch","MTN Jet Sweep","MTN PA Boot Corner","MTN PA Jet Sweep","MTN Slot Option","MTN Zone Fake Jet","PA Shot Post","Smash","Stick"],
        "Wing Pair": ["24 Zone Open","HB Inside Zone","HB Stretch","PA Sprint HB Flat","PA WR Screen","PA X Burst Cross","TE Drive","Vertical HB Out","Y Stick"],
        "Wing Tight Nasty": ["26 Duo","HB Counter Str","HB Inside Zone","HB Smash","PA U-drag Wheel","Stick Spacing"]
      },
      "I Form": {
        "Tight": ["FB Dive Strong","FB Fake HB Flip","Flea Flicker","Goal Line Fade","HB Blast","HB Iso","HB Off Tackle","HB Toss Crack","Mesh","PA FB Flat","PA Power O","PA Sprint HB Flat","Power O","Z Slant","Z Spot"],
        "Wing": ["HB Lead","HB Stretch","MTN Power","MTN Zone","PA Boot Flow","PA U Slide","Stretch Alert Lookie","Texans Zone Toss","X Slant"],
        "Y Off Close": ["Dbl MTN Counter F","Dbl MTN PA Double Cross","Dbl MTN PA Flood","Dbl MTN PA Sprint HB Flat","Dbl MTN PA WR Options","Dbl MTN Zone Wk","Dbl Outs","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Close": ["Counter Weak","Dbl Outs","Double Post","FB Dive","HB Dive","HB Off Tackle","HB Zone Toss","PA Scissors","PA Slide"],
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"]
      },
      "Gun": {
        "Box": ["Choice H-sneak","Deep Curls","Inside Zone","MTN Cross Dagger","MTN Deep Fork","MTN Fl Drive","MTN HB Slip Screen","MTN Slot Trail","MTN Switch Comeback","PA Read","Quads Jailbreak Screen","Quads RPO Alert QB Draw","Quads Switch Seam","Slants Flat","WR Cross"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Corner Divide","Drive Y Corner","HB Slip Screen","Inside Zone","Mesh Traffic","MTN Deep Over","MTN Mesh Drive","MTN Mesh Swing","MTN Slot Cross","MTN Slot Hitch","MTN Snag Under","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Speed Dig Out","Z Swirl Choice","Z Swirl In"],
        "Bunch TE Str": ["Boomerang Flood H-sneak","Boomerang HB Angle","Boomerang Spacing","Inside Zone","MTN Lead Outside Zone","MTN PA Cross X-choice","MTN RPO Peek Flats","MTN Salem Z-shake","MTN Smash H-trail","MTN Verts Shallow Cross","PA Double Post","Spot Zig Slot Corner"],
        "Bunch Wide Nasty": ["Branch Return","Cheat Clearout Drag","Cheat Flood Switch","Cheat HB Slip Screen","Cheat Inside Zone","Cheat Post Slot Cross","Cheat Spot","Flood Switch","HB Slip Screen","Inside Zone","Jet Pull Shallow","Jet Shallow Swirl","Mesh Drive","Speed Dig Out","Z Spot"],
        "Bunch X Nasty": ["Bounce Mesh Drive","Bounce PA Double Post","Bounce Zone Wk","Choice Shallow Dig","Corner Out Dig","Counter Y","Dig Return","Double Outs","Drive Y Corner","Mesh Spot","RPO Zone Alert","Smash Return","Spacing Switch","Speed Dig","Y Flat Goalline","Z Mesh Goalline","Z Spot","Z Spot Goalline"],
        "Bunch Y  Flex": ["Branch Return","Curlsy Swirl","Dagger","Flood","HB Power","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Dagger Sit","MTN Dbl Post Reverse Dragon","MTN Drive Zig","MTN Inside Post","MTN Spacing Switch","Redzone Crossers","RPO Alert Out","Spacing","Speed Dig Out","Switch Mills","Texan HB Choice","Verticals","Z Spot"],
        "Deuce Close": ["Bench Dig Curl","Inside Zone","Mesh Spot","Outside Zone","PA Deep Over","Poco X Dig","RPO Peek Stick","Spacing Switch","Stick Switch"],
        "Doubles Flex Y Off Close": ["Counter Y","Escape","Flood H Post","HB Pump Draw","HB Scissors","Inside Zone","Jet Pass FK Zone","Mid Zone","MTN Angle Y Wheel","MTN Daggery In","MTN Dig Under","MTN HB Angle","MTN HB Fade","MTN HB Out","MTN HB Slot Screen","MTN Slot Post","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles HB Wk": ["Boomerang 01 Trap","Boomerang Slot Swing","Boomerang Y Delay","Corner Strike","Curl Combo","Double Slants","Four Verticals","HB Base","HB Cross Screen","HB Mid Draw","HB Slip Screen","Inside Zone","MTN Buck Sweep","MTN HB Base","MTN PA Cross","PA Y-cross","Pin Pull Sweep","Read Option"],
        "Empty Base Flex": ["Choice Stick Nod","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Redzone Up","Shock WR Option","Stick","Trail Shake","Verticals Under"],
        "Empty Sketch Stack": ["Double Post HB Zig","FK Cheat HB Screen","FK Screen Cheat Wheel","Flood X-swirl","Post Cross Unders","Post In Angle Slant","QB Zone","Verticals TE Option","Y Slot Choice"],
        "Normal Y Off Close": ["Cheat Flat X Post","Cheat Inside Zone","Cheat Slash Wheel In","Cheat TE Angle","Cheat TE Screen","Exit HB Cross Screen","Exit PA Smash","Exit RPO Zone Hitches","FK Jet Y Wheel","HB Scissors","Inside Zone","Jet Touch Pass","Mesh Spot","PA Jet Sweep","RPO Alert Cheat Bubble","RPO Glance Post","Same Side Zone","Zone Fake Jet"],
        "Split Close": ["Dbl Ins","Double Swirl","FB Inside","HB Choice","HB Power O","HB Rail","HB Slip Screen","HB Wheel","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","PA F Slide","Pivot Dig","Read Option"],
        "Spread Y  Slot": ["Corner Strike","Curl Seams","Digs H Option","Double Slant","Four Verticals","HB Draw","HB Slip Screen","In N Up","Inside Zone","Levels Divide","Mid Zone","PA All Curl","PA Comebacks","PA Read","Quick Slants","Read Option","Return Curls Texas","Return Inside Zone Split","Return PA Post Curls","RPO Peek Slant","Slot Outs","Stick Nod","Y-seam","Z Shallow Cross"],
        "Tight": ["Bench","Corners","Deep Read","Drive Corner","HB Draw","HB Quick Base","Mesh Spot","MTN Drive Sluggo","MTN Slant Whip In","MTN Smash Y-shake","PA Clear Cross","PA Deep Post","Post Zreturn","Slot Post","Slot Stick","Stick","Tight Crosses","Verticals HB Burst"],
        "Tight Y Off": ["Cheat Outside Zone","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Fake Jet HB Seam","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Jet HB Trap","Jet Touch Pass","Mesh Spot","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","O 1 Trap","PA Go Slot Cross","PA Slot Cross","Read Option","TE Corner"],
        "Tight Y Off Wk": ["Bench Dagger","Bench Hammer","Clearout Sideline Outs","Curls","Duo","Hammer Dagger","HB Slip Screen","Inside Zone","Mesh Spot","O 1 Trap","Outside Zone","Pivot Dig","Shallow Cross","Shuffle HB Choice","Shuffle HB Corner","Shuffle HB Out","Slot Cross","Smash Y Pivot","Spot Y Middle","WR Under","Y Lead Read Option"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Slot Under","Empty Vertical","HB Pump Draw","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","Outside Zone","PA Crossers","PA Draw Choice","Read Option","RPO Alert Screen","Same Side Zone","Se Corner","Shockh Option","Verticals"],
        "Trips TE": ["45 Quick Base","Curl Flat","Double In Sail","Drive Post","Flood","HB Angle","HB Counter","HB Mid Draw","HB Slip Screen","Inside Cross","Inside Zone","PA Counter Go","PA Slot Corner","Reload PA Unders","Reload RPO Zone Alert Bubble","Reload Shock HB Choice","RPO Alert Bubble","Slants","Slot Swing","Verticals","Y-screen"],
        "Wing Slot Offset": ["Cheat HB Jailbreak Screen","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Double Cross","Double Pivot","Dragon Spacing","HB Punch","Jet Pass FK Zone","Mesh Spot","PA Jet Sweep","PA Read","RPO Alert Bubble","Slants Y Stick","Stick Nod Vertical","Zone Fake Jet"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Bounce Dash Crosser","Bounce Inside Zone","Bounce PA Deep Out","Counter Y","Dash Flood","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","HB Pump Draw","MTN Duo","MTN Inside Zone","MTN Mesh Rail","MTN PA Cross Switch","MTN X-dig Slot Corner","MTN Y-corner Z-choice","O 1 Trap","Outside Zone","PA Power Shallow Cross","PA Toss Lead Swing Crosser","Pin Pull Toss","Power O","RPO Zone Peek","Smash Return"],
        "Y Trips Wk": ["Clearout","Divide Y Hitch","Empty Post Cross Wheel","Empty Post Dagger","Four Verticals","HB Base","HB Mid Draw","HB Mid Zone","HB Slip Screen","Inside Attack","Outside Zone","Quick Fork Zig","Quick Short Post","Quick Unders","Read Option","RPO Peek Slant","Same Side Zone","Seam Comebacks","Shockh Option","Slants","Slot Seam","Spacing Snag","Under","Undersy Viper","WR Screen","Wrmid Screen","Y Stick HB Angle"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "titans",
    name: "Tennessee Titans",
    style: "West Coast / Run Heavy",
    formations: {
      "Singleback": {
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slash","Inside Zone Wk","Jet Sweep Wk","PA Boot","PA Boot Corner Post","PA Counter","PA Cross","PA Drag Wheel","PA Jet Sweep","PA Post Curl Shot","PA Post Dig","Spacing","Verticals","Wide Zone Wk","Zone Fake Jet Wk"],
        "Deuce Close": ["Bench","Corner Stops","Flood Trail","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","MTN Duo","MTN Zone Split","PA Boot Slide","PA MTN Spider Y Leak","PA Post Dig","PA Short Crossers","PA Slidey Screen","Spacing Switch"],
        "Tight Y Off": ["Bench Switch","Cheat HB Dive Wk","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Dive","HB Stretch","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Cheat Cross","PA Cheat Post Cross","PA Deep Curls","PA FK Cheat Flood Crossers","PA Jet Sweep","PA Post Dig","Stick","Zone Fake Jet"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","MTN PA Y Corner","MTN Power","MTN Zone Toss","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Pair": ["HB Counter Wk","HB Dive Alert Smoke","HB Duo","MTN Counter Str","MTN HB Plunge","MTN Spot Heavy","O 1 Trap","PA Sprint HB Flat","PA X Burst Heavy","Power O","Spacing","Y Stick Heavy"],
        "Wing Stack": ["Flanker Spot","Four Verticals","HB Dive","HB Duo","HB Stretch","HB Zone Wk","Jet Sweep","PA Dig","PA Double In Shot","PA Fork","PA Jet Sweep","Zone Fake Jet"]
      },
      "I Form": {
        "Close": ["94 Will","Dbl Outs","HB Iso","HB Lead Dive","HB Stretch","HB Zone Toss","Out N Up","PA Deep Cross Go","PA Deep Read","PA TE Leak","Stutter Gos","Y-post"],
        "Y Off Close": ["Dbl MTN PA Double Cross","Dbl MTN PA Sprint HB Flat","Dbl MTN Zone Wk","Dbl Outs","Double Dig","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Other": {
        "Split T Tight": ["FB Dive","FB Toss","FK FB Toss Rollout Lt","HB Inside","HB Lead","PA Boot","Sft HB Lead Dive","Sft HB Toss","Sft PA Dive"]
      },
      "Wildcat": {
        "Slot Flex": ["Counter","Jet Touch Pass","Power"]
      },
      "Pistol": {
        "Deuce Close": ["Bench","Counter Y","HB Dive","HB Split Dive","HB Stretch","Inside Zone Split","Mesh Spot","MTN Counter Lt","MTN PA Flood","MTN Zone Split","PA Boot Y Leak","PA Z Over"],
        "Full House": ["Counter Lead","Deep Curl","HB Off Tackle","HB Slam","PA Boot","PA Comebacks","PA Flood Comeback","PA Flood FB Slip","PA HB Wheel","PA X Post","Read Option Wk","Slants","Tr Opt Switch","Triple Option","Zone Read"],
        "Open Flex Close": ["HB Dive","Inside Zone Wk","MTN Counter Y","MTN PA Portland Wheel","MTN Zone Split","PA Boot","PA Pin Deep","X Seam","Z Spot"]
      },
      "Gun": {
        "Box Offset Wk": ["Curl Flat","HB Angle","HB Slip Screen","Inside Zone","Middle Hi Lo","MTN Curls HB Angle","MTN Verts HB Angle","MTN Y Cross","Outside Zone","PA Verticals","Read Option","Slot Trail","Verticals","Wide Trap","Y Cross Post"],
        "Bunch": ["518 Hook","Bench Pivot","Deep Corner","Dig Return","HB Base","HB Slip Screen","Inside Cross","Jet Pull Shallow","Mesh Spot","Mid Zone","Smash Return","Spacing","Speed Dig","Verticals","Y Curl","Y Lead Read Option","Z Spot","Z Spot N Go"],
        "Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","MTN Spot","MTN Verticals","MTN Wrswing","QB Draw","Spacing","Spot"],
        "Bunch Spread": ["Branch Return","Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Curl Flat","Dagger X-go","Drive Y Corner","HB Slip Screen","Inside Zone","Jet Pull Shallow","MTN Curl Flat Corner","MTN Slot Hitch","MTN Slot Out","MTN Slot Under","MTN Snag Under","MTN Y-shake","Outside Zone","PA Post","Spacing","Speed Dig","Z Spot"],
        "Bunch Str Nasty": ["Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","MTN China Wheel","MTN Curls","MTN Trail Fork","PA Cross","PA Double Post","Pin Pull Toss","RPO Zone Peek","Y Flat Quick","Y Trail","Z Mesh Quick","Z Spot Quick"],
        "Bunch Y  Trips": ["HB Base","HB Draw","HB Slip Screen","MTN Drive Double Outs","MTN Fly HB Go","MTN Return Corner Portland","MTN Return Mesh Spot Rail","MTN Return Zig Fork","MTN Smash Slot Dig","PA Post","Slot Slant","Stick Spacing Switch"],
        "Deuce Close": ["Bench Dig Curl","Inside Zone","Mesh Spot","MTN Return H-trail","MTN Return HB Toss","MTN Return Y-shake","MTN WR Corner","MTN Y Corner","MTN Y Option","Outside Zone","PA Deep Curls","PA Deep Over","RPO Peek Stick","Spacing Switch","Stick Switch"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Y Off Nasty": ["Cross Y Trail","Dbl Cross H-choice","Double Post","Fake Jet HB Seam","Fork H Traffic","HB Slip Screen","Inside Zone","Jet Pass FK Zone","MTN HB Cross Screen","MTN Slot Fades","MTN Smash","Outside Zone","PA Y Cross","RPO Zone Read Bubble","Snag HB Wheel","Tackle Trap","X Dagger","Zone Fake Jet"],
        "Empty Base Flex": ["Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","MTN Switch Comeback","MTN Switch Flood","MTN Switch Verts","QB Draw","Stick","Strong Curl","Verticals","Y Corner","Y Shallow Cross"],
        "Empty Bunch Wide": ["Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","Post Corner Read","QB Draw","Spacing Switch","Z Spot N Go","Z Spot Smash"],
        "Empty Trips Speed": ["Deep Cross","Double In","Flanker Under","Hoss Y Juke","Jailbreak Slot Screen","Levels","MTN FK Screen","MTN WR Screen","MTN Wrangle","QB Draw","Redzone Up","Shock WR Option","Trail Shake","Whip Unders","Y Corner"],
        "Normal Y Off Close": ["Empty MTN Jailbreak Screen","Empty MTN Smash Salem","Empty MTN Snag HB Swing","HB Scissors","Inside Zone","Jet Pass FK Zone","PA Jet Sweep","PA Snag","Read Option","Sft HB Sweep","Sft Mesh Rail","Sft PA Cross","Y-sail","Y-stick Dig","Zone Fake Jet"],
        "Split Y Off Close": ["Dig Slot Out","Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone"],
        "Spread Dbl Flex": ["Corner Strike","Flanker Dig","HB Mid Draw","HB Slip Screen","HB Sweep","Inside Cross","Inside Zone","MTN Curls H-sluggo","MTN Dbl Dig Swing","MTN Dbl Slants Wheel","MTN Fades H-choice","MTN FK Swing Mid Screen","MTN Flood H-wheel","PA Comebacks","PA Dig","Quick Slants","Read Option","RPO Alert Z Screen","Slot Outs","Y Shallow Cross","Z Spot"],
        "Spread Y  Slot Wk": ["HB Base","HB Mid Draw","HB Scissors","HB Slip Screen","Hitch Seam","Inside Zone","MTN Dbl Pass HB Screen","MTN FK Dbl Pass","MTN In N Up","PA Dagger","Read Option","RPO Peek Slant","Smash Corners","WR Under","X Dagger"],
        "Stack HB Wk": ["Bench Switch","Curl Flat","Curl Switch","Double Corner","Fade Out","FK Toss Cross","FK Toss Post Sit","HB Slip Screen","MTN Divide","MTN Outside Zone","MTN Pashot","PA Jailbreak Screen","RPO Alert Power","RPO Alert Screen","Toss Wk"],
        "Tight Flex": ["Bench","Bench Switch","Cross","Double Spot","Empty MTN Mesh Rail","Empty MTN Y-cross Ohio","Empty Smash Z Post","Frisco","HB Counter","HB Draw","Inside Hi Lo","Mesh Spot","PA Post Shot","Slot Curl","Stick"],
        "Tight Slots": ["Bench","Drive Switch","Drive Trail","HB Quick Base","Mesh","MTN Bench Swap","MTN Inside Zone","MTN PA Slide","Out N Ups","PA Shot Post","Stick","WR Corners"],
        "Tight Y Off Wk": ["Cheat Outside Zone","Duo","Fork Z-dig","HB Slip Screen","Inside Zone","Levels","O 1 Trap","PA Cheat Comeback Go","PA Cheat Wheel Post","PA Corner","Pivot Return","RPO Zone Alert Omaha","Smash Hammer","Tackle Trap","Z Dagger"],
        "Trey Open": ["Dbl Ins","Dig N Go","Four Verticals","HB Slip Screen","Inside Zone","Levels Switch","PA Read","Salem","Shock H Option","Slot Drive","Sluggo Seam","Stick","Strong Flood","Under","Y Corner"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Stick","Empty Vertical","Fake Screen Wheel","HB Draw","HB Pump Draw","HB Slip Screen","Inside Zone","Levels Y Corner","Outside Zone","PA Crossers","PA Deep Over","PA Draw Choice","Posty Dig","RPO Alert Screen","Same Side Zone","Se Corner","Shockh Option","Verticals","WR Cross"],
        "Trips TE Flex": ["Dagger","Double In Sail","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","MTN Fork H Choice","MTN Hitch N Go","MTN Y Post","Outside Zone","Over Pivot","PA Crossers","PA Fork","Post Rail","Read Option","RPO Zone Alert Omaha","Same Side Zone","Scat","Stick","TE In","Verticals","Y Corner Stop","Y Fade"],
        "Trips X Nasty": ["HB Mid Draw","HB Off Tackle","Hi Lo Cross","Hi Lo Dig","Inside Zone","MTN Slot Fades","MTN Slot Stick Nod","PA X Cross Shot","Quick Fork Zig","Quick Short Post","Quick Unders","Slot Fade H Wheel","Ss","Verticals X Shallow","WR Smash"],
        "U Off Trips Wk": ["Dagger Sit","HB Power","Inside Zone","Levels Out","MTN Fade Smash","MTN Stick","MTN Verticals","PA Crossers","Read Option","RPO Alert Bubble","Smash","Spot Quads"],
        "Wing Slot Offset": ["Cheat HB Jailbreak Screen","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Dragon Spacing","Drive","Duo","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Mesh Spot","MTN Choice Wheels","MTN Jet HB Duo","MTN Jet PA Cross","MTN Jet Touch Pass","MTN QB Sweep","MTN WR Angle Post","PA Double Post","PA Read","QB Zone","Read Option","RPO Alert Bubble","Spot Option","Stick Nod Vertical","Z Close Duo","Z Close PA Flood","Z Close Toss"],
        "Y Off Trio Wk": ["Dagger X Out","Four Verticals","HB Base","HB Slip Screen","Inside Zone","MTN PA Deep Over","MTN Smash Go","MTN Split Zone","PA WR In","PA Y Wheel","Quick Fork Zig","Quick Short Post","Quick Unders","Shockh Option","Y Lead Read Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "vikings",
    name: "Minnesota Vikings",
    style: "West Coast / Spread",
    formations: {
      "Singleback": {
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","PA Boot","PA Draw Shot","PA Jet Sweep","Shift Duo","Shift HB Sweep","Shift PA Duo Crossers","Spacing","Stick","Stretch Alert Bubble","Switch Snag","Zone Fake Jet"],
        "Bunch X Nasty": ["Cheat HB Slash","Cheat HB Zone Wk","Counter Y","Crack Toss","HB Dive","HB Slam","Inside Zone Split","PA Boot","PA Boot Cheat Slide Levels","PA Cheat Deep Corner","PA Cheat Wheel Post","PA Counter","PA Cross","PA Deep Cross Go","PA Post Curl Shot","PA Post Dig","PA WR Cheat Screen","PA X Out Cross","Spacing","Verticals","Wide Zone Wk"],
        "Deuce Close": ["Bench","Flood","HB Dive","HB Stretch","HB Zone Wk","PA Boot Corner Post","PA Boot Slide","PA Slidey Screen","PA Sprint HB Flat","PA X Deep Out","Stick","Zone Split Wk"],
        "Doubles Y Off Flex": ["Choice Z-curl","Curls Y-seam","Dbl MTN HB Dive","Dbl MTN HB Wk Toss","Dbl MTN PA Cross H-flat","HB Pump Draw","HB Slip Screen","PA Boot Slide","PA Dig Deep Out","PA Draw Shot","PA Y-corner","RPO Alert Bubble","Salem Whip Under","Salem X Kitty","Shallow Y-hook","Smash Fork H-choice","Stick Spacing","Wide Zone"],
        "Tight Doubles": ["Bingo Cross","HB Dive","HB Inside Zone","Jet Sweep Wk","MTN HB Duo","MTN HB Split Zone","MTN PA Boot Slide","PA Sprint HB Flat","PA Switch Replace","Shallow Cross","Under","Zone Fake Jet Wk"],
        "Tight Y Off": ["Cheat HB Dive Wk","Deep In","Drive Flood","FK Cheat HB Counter","FK Cheat HB Stretch Wk","HB Stretch","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Cheat Cross","PA Cheat Post Cross","PA Deep Out","PA FK Cheat Flood Crossers","PA Jet Sweep","PA Leak","Stick","Zone Fake Jet"],
        "Trips": ["Corner Double In","HB Stretch","HB Zone Wk","PA Flood","Slants","WR Option"],
        "Wing Close": ["Dbl Outs","Duo","HB Dive","HB Zone Toss","HB Zone Wk","MTN Cheat WR Comeback","MTN Cheat WR Out","MTN Cheat WR Wheel","PA Cross","PA TE Flood","PA Y-drag Wheel","Wide Zone"],
        "Wing Flex Close": ["Drive Y Corner","HB Duo","HB Stretch","HB Toss Weak","HB Zone Wk","MTN Jet Sweep","MTN PA Jet Sweep","MTN Zone Fake Jet","PA Cross Country","PA Shot Post","Smash","Stick"],
        "Wing Tight": ["Fake HB Zone QB Boot","HB Counter","HB Duo","HB Inside Zone","HB Stretch","Jet Sweep","PA Boot Left","PA Dig Cross","PA Jet Sweep","PA Y Throwback","Stick Spacing","Zone Fake Jet"]
      },
      "I Form": {
        "Close": ["Dbl Outs","HB Iso","HB Lead Dive","HB Stretch","HB Zone Toss","Inside Zone","Mesh","PA Boot Rt","PA Deep Cross Go","PA Deep Read","PA TE Leak","Stutter Gos"],
        "Slot Close": ["94 Will","HB Blast","HB Lead Dive","HB Stretch","PA Shot Post","PA Spot","PA Sprint HB Flat","PA Y Throwback","Spacing"],
        "Wing": ["Curls","FB Dive","FB Fake HB Flip","Goal Line Fade","HB Power G","HB Stretch","Iso","PA Boot Flow","PA Spot"]
      },
      "Strong": {
        "Close": ["Counter Weak","Dbl Outs","Dbl Stutter Go","End Around","FB Dive","HB Dive","HB Dive Weak","HB Off Tackle","HB Slash FK End Arnd","HB Stretch","HB Zone Toss","PA Deep","PA End Around","PA Scissors","WR Out"]
      },
      "Weak": {
        "Close": ["94 Will","Bench Switch","Counter F","FB Dive","HB Zone Wk","Mesh","PA Boot Lt","PA Boot Slide","Stick"],
        "H Close Off": ["94 Will","Bench Switch","Counter F","Flanker Drive","HB Gut","PA Power O","Power O","Stick","Verticals"],
        "Slot Close": ["94 Will","HB Dive","Inside Zone Split","Mesh","PA Boot Slide","PA Flood"]
      },
      "Pistol": {
        "Ace": ["Corner Post","Fl Cross","HB Counter","HB Dive","HB Slam","HB Stretch","PA Boot","PA Ctr Waggle","PA Deep In","PA Power O","Power O","Quick Slants","Read Option","Skinny Posts","Strong Power"]
      },
      "Gun": {
        "Ace": ["Flood Post","HB Quick Base","HB Slip Screen","Hitch Corners","Inside Cross","Inside Zone","MTN PA Slide","MTN RPO Alerty Flat","MTN RPO Read Slide","PA Fl Screen","PA Read","QB Zone","Read Option","RPO Peek Slant","TE Under"],
        "Ace Slot": ["Flood","HB Quick Base","HB Slip Screen","Inside Zone","MTN Bench","MTN HB Cross Screen","MTN Z Spot","PA Read","Posts","QB Power","Read Option","RPO Alert Bubble","Smash","Stick","X Spot"],
        "Box": ["Choice H-sneak","Deep Curls","Inside Zone","MTN Cross Dagger","MTN Deep Fork","MTN Fl Drive","MTN HB Slip Screen","MTN Slot Trail","MTN Switch Post","PA QB Choice","Quads Jailbreak Screen","Quads RPO Alert QB Draw","Quads Switch Seam","Slants Flat","WR Cross"],
        "Bunch Open Offset": ["Duo","Fake Screen Wheel","Flood","HB Draw","Inside Zone","Lead Swing Spot","Reload Flood X-choice","Reload Inside Zone","Reload Spacing Switch","RPO Peek WR Screen","RPO Read Bubble","Y Trail"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Drive Y Corner","Inside Zone","Mesh Slot Out","MTN Deep Over","MTN Mesh Drive","MTN Mesh Swing","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Z Swirl Choice","Z Swirl In"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Y Wheel","Cheat H Out","Cheat TE Hitch HB Seam","Cheat TE Hitch N Go","Crosser Poco","Curl Flat Corner","HB Draw","HB Off Tackle","HB Slip Screen","Inside Cross","Inside Zone","Mesh","PA Boot Over","PA Slide","PA Verticals","QB Wrap","Read Option","RPO Alert Bubble","Same Side Zone","Spacing","Stick","TE Corner","Triple Out","Whips","X Spot"],
        "Bunch Wide": ["Dig Return","Inside Zone","Levels Dig","PA Post","Post Spacing","QB Blast","Rz Rub Under","Scissors","Seam Divide","Slant Spacing Dig","Spacing","Speed Dig","Verticals","Y Trail","Z Spot"],
        "Deuce Close": ["Bench Dig Curl","Bench X Dig","Empty MTN Mesh Rail","Empty MTN Spacing","Empty MTN TE Mid Screen","Inside Zone Split","Lead Read Option","Mesh Spot","MTN PA Slide","MTN Stick","MTN Zone Split","Out N Ups","Return PA Slide","Return RPO Read Flat Wheel","Return Rz Trail","RPO Peek Stick","RPO Read Flat Wheel","Spacing Switch"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Empty Base Trio": ["All Hitch","Curl Combo","Double In","Double Slant Stick","Hoss Juke","QB Draw","Shock Slot Option","Slant Flat","Stick Nod"],
        "Empty Bunch Wide": ["Drag Curl","Drive Wheel","Drive Y Corner","Jailbreak Screen","Post Corner Read","QB Draw","Spacing Switch","Z Spot N Go","Z Spot Smash"],
        "Empty Chips Quads": ["Cheat FK Screen Cross","Cheat Jailbreak WR Screen","Cheat Texasx Sluggo","Crossers","Dagger","HB Screen","Post Corner Up","Slot Sail","TE Screen"],
        "Empty Chips Tight": ["Dagger","Deep Post Out","Double 7 Stop","MTN Mesh Y-corner","MTN Outs Y-post","MTN Salem X-swirl","Out","Outs","Post Cross"],
        "Normal Y Off Wk": ["Curl Combo","Double Nod Verticals","Double Slants","Escort Curl Combo","Escort QB Blast","Escort Speed Option","FK Leak Outside Zone","Fork H-choice","Four Verticals","HB Draw","HB Slip Screen","Hook Z Post","Mid Zone","PA FK Leak Divide Shot","PA Slide","PA WR Leak","Power Read","RPO Alert Bubble","Slot Fade","WR Under","X Dagger"],
        "Split U Off Close": ["Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone","Texas U-out"],
        "Spread Y  Slot Wk": ["Dagger","HB Base","HB Mid Draw","HB Scissors","HB Slip Screen","Hitch Seam","Inside Zone","MTN Dbl Pass HB Screen","MTN FK Dbl Pass","MTN In N Up","PA Comebacks","PA Dagger","Quick Slants","Read Option","RPO Peek Slant","Smash Corners","WR Under","X Dagger"],
        "Tight Flex Wk": ["Bench","Inside Hi Lo","Inside Zone","Mesh Spot Rail","Mid Zone","MTN Bunch Cross Dig","MTN Bunch Cross Screen","MTN Bunch Drive","MTN Bunch HB Draw","MTN Bunch Switch Flood","MTN Bunch Whip Smash","MTN Mesh Spot","MTN Stick Z Post","MTN Y Cross","PA Dagger","PA Same Side Flood","Same Side Zone","Stick"],
        "Tight Y Off": ["Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Deep Crossers","Doubles Shot","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","MTN Mesh Spot","MTN Slot Choice","MTN Y-corner","O 1 Trap","PA Go Slot Cross","Read Option","RPO Alert Bubble","RPO Peek Slant Bubble","TE Corner"],
        "Tight Y Off Wk": ["Bench Hammer","Clearout Sideline Outs","Duo","Hammer Dagger","HB Slip Screen","Inside Zone","Levels","Pivot Dig","RPO Zone Alert Omaha","Slot Cross","Smash Y Pivot","Spot Y Middle","Tackle Trap","WR Under","Y Lead Read Option"],
        "Trey Open": ["Clearout Rub Return","Curls","Double Ins","Drag Verticals","Four Verticals","HB Draw","HB Off Tackle","HB Slip Screen","Inside Zone","Jet New Orleans","Mid Zone","PA Slot Under","Read Option","Shockh Option","Stick","Stick N Nod","Y Corner","Y-drag"],
        "Wing Slot Offset": ["Cheat HB Jailbreak Screen","Cheat Ohio TE Attack","Cheat Post Dagger Wheel","Dragon Spacing","Drive","Four Verticals","HB Punch","HB Slip Screen","Inside Zone","Mesh Spot","MTN Choice Wheels","MTN Jet HB Duo","MTN Jet PA Cross","MTN Jet Touch Pass","MTN QB Sweep","MTN WR Angle Post","PA Read","Read Option","RPO Alert Bubble","Spot Option","Stick Nod Vertical","Z Close Duo","Z Close PA Flood","Z Close Toss"],
        "Wing Stack Wk": ["Exit All Go","Exit Double Screen","Exit Spot Replace","Four Verticals","HB Power","HB Slip Screen","Inside Zone","MTN Dagger","MTN Inside Zone","MTN Outside Zone","MTN PA Flood","MTN PA Verticals","MTN Spot","PA Slide","RPO Peek Slant","RPO Read Bubble","Same Side Zone","Stick"],
        "Y Off Trio Wk": ["Flood Post","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mills","PA WR In","Shock H Option","Slants","Slot 2 Buc","Speed Dig","Y Lead Read Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Power G","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_air_raid",
    name: "Air Raid (Alt)",
    style: "Air Raid",
    formations: {
      "Pistol": {
        "Ace": ["Corner Post","HB Counter","HB Dive","HB Stretch","HB Zone Wk","PA Boot","PA Deep In","Quick Slants","Skinny Posts"],
        "Doubles Y Off": ["Fade Smash","Four Verticals","HB Dive","HB Draw","HB Slip Screen","Jet Pass FK Zone","Jet Touch Pass","PA Cross","Slants","Stretch Alert Bubble","Tech Out","Zone Fake Jet"],
        "Full House": ["HB Dive Wk","Lead Read Option","PA Boot Rt","PA Flood FB Slip","Read Option","Slants"],
        "Spread": ["Four Verticals","HB Stretch","Jet Pass FK Zone","Jet Touch Pass","PA Deep In","Quick Slants","Slot Outside","Y Corner","Y Cross","Y Shallow Cross","Y Stick","Z Under","Zone Alert Bubble","Zone Alert X Smoke","Zone Fake Jet"],
        "Strong": ["Asa F Flat","HB Slip Screen","Inside Zone Split","PA Boot Lt","PA Flood","Read Option","Slants","Stretch Alert X Lookie","X Post"],
        "Strong Slot Open": ["F Lead Read Option","Inside Zone Split","Mesh","Mesh Dig","Mid Slants","PA Slide","Scat","Shakes","Stretch Alert X Lookie","Y Corner","Y Cross","Zone Alert Bubble"],
        "Trips Left Open": ["Close HB Dive","Counter Alert Flat","Flood Post","Four Verticals","HB Draw","HB Slip Screen","Mesh Dig","Out N Under","RPO Read Bubble","Scat","Y Stick","Zone Alert Bubble"],
        "Weak Slot Open": ["Counter Alert Smoke","Deep Curls","HB Dive","HB Stretch","Inside Zone Split","Jet Pass FK Zone","Jet Touch Pass","PA Boot Slide","PA Short Post","Slants","Y Cross","Zl Under","Zone Alert Bubble","Zone Alert Smoke","Zone Fake Jet"],
        "Y Off Trips": ["Counter Alert Smoke","Curls","Dive Alert Smoke","Fake Screen Wheel","Four Verticals","HB Slip Screen","Inside Zone Split","PA Boot Slide","Slants","Stretch Alert X Lookie","Strong Flood","Y Lead Read Option"]
      },
      "Gun": {
        "Bunch Open Offset": ["Dig Return","Flood","Inside Zone","L Spot","RPO Peek WR Screen","RPO Read Bubble"],
        "Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","QB Draw","Spacing","Spot"],
        "Cluster": ["Cluster Bunch","HB Counter","HB Mid Draw","HB Slip Screen","L Spot","Mesh","Mesh Post","Outside Zone","PA Read","Spacing","Verticals","Zl Spot Shake"],
        "Double Stack": ["Fake Screen Go","Four Verticals","RPO Alert Screen","RPO Alert Trap","RPO Read Fl Screen","Smash"],
        "Doubles": ["45 Quick Base","617","Angle Smash","Curl Combo","Drag Under","Four Verticals","HB Slip Screen","Jet Touch Pass","L In","Mesh","PA Dagger","Read Option","RPO Peek Slant","RPO Read Fl Screen","Sa Y","Slants","Weak Flood","Y Shallow Cross"],
        "Doubles Y Off": ["Curl Ohio","Fake Jet HB Seam","Four Verticals","Inside Zone","Jet Touch Pass","PA Go Slot Cross","Read Option","RPO Glance Slant","Slants"],
        "Empty Base": ["Curl Flats","Dig Curl Read","Double In","FK Screen Sluggo","FK Screen Verts","Inside Cross","Jet Touch Pass","MTN HB Screen","QB Draw","Stick","Stickn Nod","Verticals Shake","Y Corner","Y Cross Flood","Y Post"],
        "Empty Quads": ["Curl Pivot Dig","Four Verticals","Out Double Under","QB Draw","Vert Double Under","WR Screen"],
        "Open Flex": ["Dagger","Deep Outs","Double Post","HB Dive","RPO Alert Cntr Screen","RPO Read WR Screen","RPO Read Y Flat","Vertical TE Out","X Seam"],
        "Slot Offset": ["Flood","HB Draw","HB Off Tackle","HB Slip Screen","Inside Zone Lt","MTN PA Y Cross","MTN RPO Peek Swing Wk","MTN Spot","MTN Y Stick","MTN Zone Wk","PA Deep Cross","RPO Read Cntr","Shakes","Slants Middle","Triple Option Lt"],
        "Split Slot Open": ["Corner Strike","HB Slip Screen","Inside Zone Split","Mesh","Mesh Post Wheel","PA Pop","RPO Peek Slant","Slants","Y Cross"],
        "Spread Y  Flex": ["617","Corner Strike","Drive","Four Verticals","H Shallow Cross","HB Slip Screen","Inside Zone","Jet Touch Pass","Mesh","Power Read","Read Option","RPO Peek Slant","Smash HB Check","Y Corner","Y Cross","Y Sail","Y Shallow Cross","Y Stick"],
        "Spread Y  Slot": ["617","Curl Wheel","Double Slant","Four Verticals","H Shallow Cross","HB Draw","Hitch Seam","Inside Zone","Jet Touch Pass","Mesh","PA Read","RPO Peek Slant","RPO Read Screen","Smash","Y Cross","Y Shallow Cross","Y Stick","Z Shallow"],
        "Tight": ["Bench","HB Quick Base","Mesh Pyramid","Mesh Spot","Read Option","Slot Stick"],
        "Trey Offset": ["China Y Cop","Dagger","HB Slip Screen","Inside Zone","PA Cross Switch","Read Option","RPO Stick","Verticals Y Drag","Y Pivot"],
        "Trey Open": ["Curls Combo","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","Mesh","Outside Zone","PA Read","Shakes","Spacing HB Wheel","Stick","X Drag","Y Corner","Y Cross","Ysail"],
        "Trips": ["Fade Stops","Fake Screen Wheel","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Middle Slant","RPO Alert Bubble","RPO Read Screen","RPO Zone Stick","Sail","Slot Corner","Slot Drive","Stick","Stick Wheel"],
        "Wing Flex Wk": ["Four Verticals","Inside Zone Split","PA Jailbreak Screen","PA Verts Comeback","Read Option","RPO Peek Slant","RPO Read X Smoke","Slant Stick","Smash Drive"],
        "Wing Slot Offset": ["Cardinals Verts","Jet Pass FK Zone","Mesh Spot","MTN Counter","MTN Inside Zone Split","MTN PA Slide","PA Jet Sweep","PA Read","Power O","Read Option","TE Spot Ohio","Zone Fake Jet"],
        "Y Trips Wk": ["Curls Combo","Dbl Ins","Four Verticals","HB Slip Screen","Inside Zone","Outside Zone","PA Read","RPO Base Alert Lookie","Slot Fade","Stick","Y Corner","Y Cross"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_air_raid_classic",
    name: "Air Raid Classic (Alt)",
    style: "Air Raid Classic",
    formations: {
      "Other": {
        "Split Backs Blue": ["23","24","24 Power","94","96","96 X Post","FK 23 Slide","Hitches","L Fly 8","Lion","Quick Outs"],
        "Split Backs Blue Rip": ["23","94","96","FK 23 Slide","Lion","Shakes","Z Short 91f Whl","Zl Short 92 H Whl"]
      },
      "Gun": {
        "Ace": ["617","618","66","92","94","94 F-angle","95","95 H-divide","98","98 Z-sluggo","All Hitch","Base","Bbl Wk 6i18 H","Bbl Wk Rocket","Bbl Wk Swing","FK H-qk 618 Pst Whl","FK H-qk 92 Pst Whl","H-quick","HB Draw","Inside Zone","QB Zone","Randy","Read Option","Rhino","RPO Peek Slant","RPO Read Randy","RPO Zone Randy","Y Pop"],
        "Ace Double Tight": ["618","92","95","96","98 F Angle","HB Draw","HB Quick Base","HB Sweep","S5 H Divide"],
        "Ace Flip": ["618 H","92","92 Whl","94 27 Post","95","HB Base","HB Draw","Inside Zone","Rhino","RPO Zone Arc","Snake"],
        "Ace Rip": ["45 Quick Base","617","618","66","85","91 2","92","95","96","98","98 F Seam","Double Slant","F Swing","H-quick","HB Draw","Inside Zone","RPO Peek Slant","RPO Read Screen","Si H","Y-fly 91 H","Y-fly 95","Y-fly 95 Y-swt Z-pst"],
        "Ace Rip 4wr": ["617","618","66 Shock","85","91 2","91 X","92","92 Z Post","93","95","96","98","98 Angle","98 F Seam","98 Y Post","98 Z Sluggo","F Push 8","F Push 98 Z-sluggo","F Push Q Draw RPO","F Swing","F-5","Inside Zone","Randy","Rhino","Rita","RPO Alert Randy","Si H"],
        "Ace Rip Wk": ["85","95 H","Double Screen","F Push 8","F Push Stops","F Push Swing","Inside Zone","Lion","Outside Zone","Read Option","RPO Read Bubble"],
        "Ace Tite": ["618","92 Spot","95","95 Y-swt Z-pst","98","HB Counter","HB Sweep","Inside Zone"],
        "Ace Tite Wk": ["85","92 X Post F Wheel","95 H","95 H-divide","H-move 8","H-move 92","H-move Lion","Inside Zone"],
        "Ace Wk": ["618 H","66","66 Shock","85 X Fox","95 H","98","98 F Angle","F Push 618","F Push 8","F Push Swing","H Move 6","H Move 618","H Move 8","HB Base","HB Mid Draw","Inside Zone","Lion","RPO Alert Screen","RPO Peek Slant","Shakes","Si H"],
        "Early": ["6 X-shallow","618","618 F-angle","92","92 Pst Dbl Whl","93","94","95","95 Wheel","95 Z Post","96","H Move 91 X","H Move 92","H Move 92 Z Pst","HB Base","HB Draw","Inside Zone","Lion","Outside Zone","Randy","Rhino","Rita","Shakes","Snake"],
        "Early HB Str": ["618","618 Pst Whl","66","66 Shock","Bbl Wk 618 Pst Whl","Bbl Wk 8","Bbl Wk H-rita","F-5","H Move 92","H Move 92 Pst Dbl Whl","H Move 92 Z Post","H Rocket","HB Mid Draw","Inside Zone","Rhino","RPO Peek Slant","RPO Zone 618","Scissors","Scissors Under","Shock"],
        "Early Offset": ["618 H","6is H Snag","92 Post Wheel","95 Z Post","All Slant","F Push 8","F Push Scissors","F Push Swing","Four Verticals","HB Draw","HB Off Tackle","Inside Zone","Lion","Read Option","Rita","Shock","Snake"],
        "Early Rip HB Str": ["6 Z-fox","618","618 Pst Whl","Arc","F Swing","H Move 618","H Move HB Draw","H Moveram","HB Mid Draw","HB Sweep","Inside Zone","Ram","Rita","RPO Peek 618","RPO Zone Arc","RPO Zone Randy"],
        "Empty Base": ["6 Shake","618","618 Z Post","92","95","95 Z Post","96","98z Sluggo","All Hitch","F-quick","QB Draw","Randy","Rita","Shakes"],
        "Green": ["6 F-angle","617","85","92 Pst Dbl Whl","94","95","95 X-divide","96","98 Z-sluggo","F Gut","FK Sweepf Slide","FK Z-qk 85","FK Z-qk Sweep","H Push 95 Z Post","H Push FK Gut 94","H Push RPO Peek Swing","HB Base","HB Draw","HB Off Tackle","L Fly 91 F-whl","L Fly 95x-divide","Lion","Read Option","Rhino","Split Zone","Z-quick"],
        "Green Rip": ["617","85","92","92 Pst Dbl Whl","94","95","95 F-5","95 X Corner-post","96","F Push 8 H Choice","F Push 94","F Push Lion","FB Inside","FK Sweepf Slide","H Push 8","H Push RPO Peek Swing","H Push RPO Q Counter","HB Draw","HB Gut","HB Off Tackle","HB Power O","HB Sweep Wk","Inside Zone Split","Lion","Randy","Rb Sweep","RPO Peek Slant","Shakes","Y-fly 95","Y-fly 95 Y-swt Z-pst"],
        "Green Rip Offset": ["94","F Push 85","F Push RPO Peek Swing","F Push RPO Read Swing","H Push 618","H Push 618 Pst Whl","H Push 8","H Push 95","H Push 95 Z Dig","H Push Double Pass","H Push Inside Zone","H Push Lion","H Push RPO 0 Draw","H Push RPO Peek 618","H Push RPO Read Swing","H Push RPO Zone Swing","HB Draw","HB Off Tackle","Lion","Rhino","RPO Split Alert Randy","Shakes","Speed Option","Split Zone"],
        "Ninja": ["FK WR Screen","PA Wheels","RPO Zone Randy"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_balanced",
    name: "Balanced (Alt)",
    style: "Balanced",
    formations: {
      "Singleback": {
        "Ace": ["Ace TE Drag","Counter Wk","Curl Flats","Flanker Drive","HB Dive","L Spot","PA Ctr Waggle","PA Deep In","PA Stretch","Quick Slants","Stretch Alert X Smoke","Y Shallow Cross"],
        "Ace Overload": ["0 1 Trap","HB Belly Weak","HB Misdirection","HB Smash","HB Stretch","PA Belly Shot","PA Lt Sneak","PA Misdirection","PA TE Seam"],
        "Bunch": ["Clearout Se Opt","End Around","HB Ace Power","HB Dive","HB Draw","HB Slash FK End Arnd","PA Draw Pass","PA End Around Sift","PA Pin Deep","Seattle","Spacing","Spot Dig","Stick","TE Angle","Y Trail"],
        "Doubles": ["Corner Strike","Curl Flats","Deep Attack","Fl Dagger","Flanker Drive","Four Verticals","Goal Line Fade","HB Cutback","HB Dive","HB Draw","Inside Cross","L Spot","PA Ctr Waggle","PA HB Look","PA Power O","Power Alert Bubble","Slants","TE Post","Whip Unders","Y Shallow Cross","Zl Under"],
        "Tight Flex": ["Bench","HB Dive","HB Draw","HB Slam","HB Slip Screen","Mesh","Off Tackle","PA Draw Cross","PA Waggle","Pack Out N Ups","Shallow Cross","Slot Corner"],
        "Trips": ["Bubble Screen","Corner Double In","Curl Combo","HB Dive","HB Draw","HB Power O","HB Zone Wk","PA Boot","PA Solid Corner","PA Y Glance","Stick","WR Option"],
        "Wing Slot": ["Four Verticals","HB Slam","Inside Cross","Outside Zone","PA Boot Lt","PA Power O","PA WR Dig","Power O","Quick Slant","U Drive","X Curl","Y Stick"],
        "Wing Tight": ["HB Ace Power","HB Counter Wk","HB Dive","HB Sweep","Inside Cross","Mesh","PA Ctr Waggle","PA Power O","PA Sail","PA TE Cross","Power Alert X Lookie","Quick Slant"],
        "Wing Tight Z": ["Curl Flat","Flanker Dig","H Misdirection Wk","H Power Toss","H Zone Str","HB Counter Wk","HB Dive","HB Power O","PA Middle","PA Misdirection","PA Power O","PA Y Corner"],
        "Y Trips TE Slot": ["Curl Combo","Four Verticals","HB Counter","HB Dive","HB Draw","HB Stretch","HB Zone Wk","Levels Switch","Middle Hi Lo","PA Slot Cross Shot","PA Slot Wheel","Power O","Slot Drive","Sluggo Seam","Smash","Stick","WR Screen","Y-trail"]
      },
      "I Form": {
        "Pro": ["Curls","FB Dive Strong","FB Fake HB Flip","HB Misdirection","HB Slip Screen","Inside Zone","Iso","L Spot","Mesh","PA Comeback Slide","PA FB Screen","PA Fl Hitch","PA Misdirection Shot","PA Scissors","PA WR In","Quick Slants","Stretch Alert X Smoke","Texas"],
        "Tight": ["FB Dive Strong","FB Fake HB Flip","Flea Flicker","Goal Line Fade","HB Blast","HB Iso","HB Lead Toss","HB Off Tackle","L Spot","Mesh","PA FB Flat","PA Power O","PA Sprint HB Flat","Power O","Zlslant"]
      },
      "Strong": {
        "Pro": ["Asa F Flat","Blast Alert X Smoke","Double Gos","F Angle","HB Dive","L Close Ctr Wk","L Close F-flat","L Spot","PA Power O","PA Scissors","PA WR In","Power Alert X Smoke","Slants","Spacing","Zl Close F-trail"],
        "Slot Flex": ["China Special","Counter Weak","Curl Flat","Double Slant","Flanker Dig","HB Dive","HB Lead Draw","HB Slip Screen","HB Toss","Inside Zone Split","PA Boot Slide","PA Post Shot","PA Power O","Power O","Stretch Alert Smoke"]
      },
      "Weak": {
        "H U Deep": ["94 Will","95 Willie","Counter F","HB Gut","PA Waggle","TE Drag"],
        "Slot Flex": ["Counter F","HB Gut","HB Slip Screen","HB Stretch","PA Flood","PA Power O","Power O","Slants","TE Corner"]
      },
      "Other": {
        "Full House Normal Wide": ["Counter Lead","Curls","Dbl Stop N Gos","HB Draw","HB Slam","HB Smash","HB Sweep","PA Middle","WR Dbl Shake"]
      },
      "Pistol": {
        "Bunch": ["Corner Strike","Flanker Drive","Four Verticals","HB Counter","HB Dive","HB Slip Screen","PA Pin Deep","Spacing","TE Angle"],
        "Wing Flex": ["Buck Alert Screen","Counter Wk","Dagger","Flood","HB Draw","HB Power O","HB Slam","HB Slip Screen","PA Post Shot","PA Power O","Smash Spot","Y Stick"]
      },
      "Gun": {
        "Ace": ["Corner Strike","Curl Flats","Flanker Curl","HB Quick Base","Inside Zone","PA Power Read","PA Read","Power Read","Quick Slants","Read Option","RPO Peek Slant","TE Under"],
        "Ace Slot": ["Flood","HB Quick Base","HB Slip Screen","Inside Zone","PA Read","Posts","QB Power","Read Option","RPO Alert Bubble","Smash","Stick","X Spot"],
        "Doubles Flex Wing": ["Curl Flats","Dig Post","Drive","HB Dive","HB Power","HB Slip Screen","PA China Go","PA Dig","PA Seams Shot","Slants","Slot Cross","Slot Out"],
        "Empty Trey": ["Corner Strike","Curls","Dbl Ins","Dbl Slot Cross","Gos Y Shake","Quick Slants","Slot Drive","Stick","Strong Flood","TE Slot Cross","WR Screen","WR Smash"],
        "Split Slot": ["46 Y Cross","689 Hook","Backs Cross","Corner Strike","Curl Combo","Dbl Ins","FB Inside","Flood","HB Draw","HB Off Tackle","HB Slip Screen","PA F Slide","PA Wheel Switch","Power O","Slants","Slot Flood","WR Screen","Y Cross"],
        "Spread": ["Curl Flats","Deep Attack","Fl Cross","Flanker Dig","HB Draw","HB Option","HB Slip Screen","PA Comebacks","Post Flags","RPO Peek Slant","Slants Middle","Slot Outs","Smash Corners","X Follow","Z Shallow Cross"],
        "Tight Slots": ["Bench","Bench Swap","Bench Switch","Curl Outs","HB Draw","HB Sweep","Mesh","Mesh Switch","PA X Clown","Stick","Stick Switch","WR Corners"],
        "Trey Y  Flex Wk": ["0 1 Trap","HB Draw","Inside Zone","MTN Fade Smash","MTN Stick","MTN Verticals","PA Cross Shot","RPO Peek Slant","RPO Read Fl Screen"],
        "Y Trips Wk": ["Comebacks Dig","Curls","Four Verticals","HB Mid Draw","HB Off Tackle","HB Slip Screen","PA WR In","PA Y-out","RPO Base Alert Lookie","Slants","Slot Drive","Sluggo Seam","Stick","Stick N Nod","Y Trail"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_benkerts_dimes",
    name: "Benkert's Dimes (Alt)",
    style: "Benkert's Dimes",
    formations: {
      "Singleback": {
        "Deuce Close": ["Bench","Corner Stops","Flood","HB Dive","HB Stretch","HB Wham","HB Zone Wk","Jet Sweep","PA Boot Slide","PA Deep Read","PA Jet Sweep","PA Slidey Screen","PA Sprint HB Flat","PA X Post Cross","Spacing Switch","Stick","Zone Fake Jet","Zone Split Wk"],
        "Tight Y Off": ["Bench Switch","HB Dive","Inside Zone Split","Jet Sweep","PA Deep Cross","PA Jet Y Leak","PA Pump Go","Stick Switch","Zone Fake Jet"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Duo","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Boot Lt","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Wide Zone Wk","Y Stick"]
      },
      "I Form": {
        "Close": ["HB Toss Crack","PA Boot Rt","PA Spider Mesh","PA Throwback","Power O","Zone Wk"],
        "Pro": ["Bench","Corner Strike","Cross In","Curls","FB Dive","FB Fake HB Flip","Goal Line Fade","HB Counter Wk","HB Slip Screen","HB Stretch Alert X Smoke","Inside Zone","Iso","Iso Weak","L Spot","Mesh","PA Boot","PA Comeback Slide","PA Scissors","PA Weak Flood","Quick Slants","Texas"]
      },
      "Strong": {
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","HB Toss","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat","Spacing","X Slant"]
      },
      "Gun": {
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Ywheel","Cheat H Out","Cheat TE Hitch HB Seam","Cheat TE Hitch N Go","Curl Flat Corner","Escort HB Split Zone","Escort PA Slide","Escort Power Read Toss","HB Counter Lead","HB Draw","HB Off Tackle","HB Slip Screen","Inside Cross","Inside Switch","Inside Zone","Mesh","Mesh Dig","MTN HB Stretch","MTN HB Swing","MTN Jailbreak Screen","MTN PA Cross Switch","MTN Read Option","MTN Spacing","PA Boot Over","PA Slide","PA Verticals","QB Wrap","Read Option","RPO Alert Bubble","Spacing","TE Corner","Triple Out","Whips","X Spot"],
        "Bunch TE Wk": ["HB Dive","HB Draw","HB Slip Screen","Mesh Slot Deep","Mesh X-post","MTN Divide X-under","MTN Escort HB Base","MTN Escort Insert X-out","MTN Escort PA Slide","MTN Flood H-sneak","MTN Snag Under","PA Wheel Z-curl","RPO Read Bubble","Shallow H-corner","Spacing X-wheel"],
        "Doubles Flex": ["Curl Flats","Four Verticals","HB Mid Draw","HB Scissors","HB Slip Screen","Inside Zone","MTN Drag H-choice","MTN Flanker Drive","MTN Z Spot","Orbit PA HB Wheel","Orbit PA Y Cross","Orbit RPO Alert Swing","Outside Zone","PA Dagger","Read Option","RPO Peek Slant","Shark HB Wheel","Slants"],
        "Doubles Y Off": ["Crossers","Inside Zone","Rz Scissors Salem","Stick Knife","TE Scissors Texas","Verts Out"],
        "Empty Base Flex": ["Divide Slot Fade","MTN Smash Y-whip","Omaha Fade Under","Redzone Up","Reload HB Sweep","Reload PA Shake Bubble","RPO 0 Draw Bubble","Scissors Drive","Stick"],
        "Normal Y Off Wk": ["Curl Combo","Double Nod Verticals","Double Slants","FK Leak Outside Zone","Fork H-choice","Four Verticals","HB Draw","HB Slip Screen","Hookz Post","Inside Cross","Inside Zone","PA FK Leak Divide Shot","PA Slot Cross","PA WR Leak","RPO Alert Bubble","Slot Fade","WR Under","X Dagger"],
        "Trey Open Str": ["Drive Post","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Levels Switch","MTN PA Flood","Read Option","RPO Alert Smoke","Scissors","Slot Fade","Stick"],
        "Trio HB Wk": ["Dagger Sit","Flood Pylon Shot","HB Slip Screen","Inside Zone","Jet Chip Wasp","MTN Spot Smash","MTN Stick Nod Swirl","MTN Trail HB Sneak","PA Cross Sit","PA Y Cross","QB Blast","Reload Inside Zone","Reload PA Flood","Reload RPO Alert Buck","RPO Alert Bubble","Sprint Rub Flat","Sprint Smash","Sprint Spot","Sticks","Verticals","Wide Zone"],
        "Y Trips Wk": ["China Smash","Comebacks","Corner Strike","Curls","Dagger Ywhip","Dbl Ins","Four Verticals","HB Base","HB Draw","HB Slip Screen","Inside Zone","MTN Mesh","MTN Seam Swirl","MTN Y Shallow Cross","PA Under","PA WR In","QB Wrap","Quick Fork Zig","Quick Short Post","Quick Unders","Read Option","RPO Peek Slant","Shockh Option","Slants","Slot 2 Buc","Wrmid Screen","Y Corner H Option"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Counter Wk","HB Dive","HB Split O","HB Sting","PA Power O","PA Spot","PA Sprint HB Flat","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_pistol",
    name: "Pistol (Alt)",
    style: "Pistol",
    formations: {
      "Pistol": {
        "Ace": ["Corner Post","Fl Cross","HB Counter","HB Dive","HB Slam","PA Boot","PA Ctr Waggle","PA Deep In","PA Power O","Power O","Quick Slants","Strong Power"],
        "Ace Slot": ["Flood","Freeze Counter Opt Rt","Freeze Option Rt","HB Counter","HB Dive","HB Power O","HB Slam","HB Slip Screen","PA Boot","PA Ctr Waggle","PA Fl Stretch","Read Option","Slot Under","Smash","Stick","Strong Power","WR Screen"],
        "Bunch": ["Corner Strike","Curl Flat","Flanker Drive","HB Counter","HB Dive","HB Draw","HB Slam","PA Deep In","PA Pin Deep","Read Option Wk","Seattle","Spacing"],
        "Bunch TE": ["Cross Drag","FK Screen","Flood","HB Counter","HB Draw","HB Slip Screen","HB Zone","PA Curls","PA WR Screen","Spot Option","Stick","Strong Power"],
        "Bunch X Nasty": ["Corner Out Dig","HB Counter","HB Zone","HB Zone Wk","Slant Spacing","Smash Return"],
        "Doubles": ["Curl Flats","Flanker Dig","Four Verticals","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","Middle Hook","PA Boot","PA Comebacks","PA Ctr Waggle","PA Wrslip","Read Option","Read Option Wk","Slants","Weak Flood","Y Shallow Cross"],
        "Doubles Flex Hip": ["Counter Y","Curls","F Lead Read Option","HB Draw","HB Slip Screen","Inside Zone Split","PA Boot Slide","Slants","Vertical TE Cross"],
        "Doubles Y Off": ["Counter Y","Four Verticals","HB Dive","HB Draw","HB Slip Screen","Inside Zone Split","PA Deep In","PA Post Shot","Slants"],
        "Full House": ["Counter Lead","Deep Curl","HB Off Tackle","HB Slam","PA Boot","PA Comebacks","PA Flood Comeback","PA Flood FB Slip","PA X Post","Slants","Tr Opt Switch","Zone Read"],
        "Open Flex": ["Counter F","HB Zone Wk","Inside Zone Split","PA Boot","PA Boot Rt","PA Post Shot","Read Option","Slants","Verticals"],
        "Open Flex Close": ["HB Dive","Inside Zone Wk","L Spot","MTN Counter Y","MTN RPO Read Wheel","MTN Zone Split","PA Boot","PA Pin Deep","X Seam"],
        "Spread": ["Fade Smash","Four Verticals","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","HB Stretch","PA Boot","PA Deep In","Quick Slants","Quick Slot Out","Read Option","Slant Bubble","Y Shallow Cross"],
        "Strong": ["Asa F Flat","F Lead Read Option","HB Counter","HB Off Tackle","HB Power O","HB Slip Screen","HB Stretch","Inside Zone Split","PA Boot Lt","PA Corner HB Slip","PA Flood","Slants","Tr Opt Switch","Tr Option Slip","X Post"],
        "Strong Slot": ["Double Flares","F Lead Read Option","Fade Smash","HB Counter","HB Power O","HB Zone","Inside Zone Split","PA Boot Lt","PA Deep In","PA Power O","Tr Option Lt","WR Smash"],
        "Strong Slot Open": ["F Lead Read Option","FB Belly","FB Cross Screen","Flat Combo","HB Dive","HB Draw","HB Slip Screen","HB Zone","Inside Zone Split","Mid Slants","MTN Spot","PA Boot Lt","PA Flood","Shakes","Under"],
        "Tight Slots": ["Bench","Bench Switch","Counter Y","HB Draw","HB Slip Screen","HB Zone","Inside Zone Split","Mesh","PA Post Shot","Stick Spacing","Wheel Switch","Wrstick N Out"],
        "Trips": ["Bubble Screen","HB Counter","HB Draw","HB Slam","HB Slip Screen","Inside Smash","PA Boot","PA Comeback","PA Ctr Waggle","PA WR Screen","Read Option","Smash","Stick","Strong Power","Verticals"],
        "Trips Left Open": ["Air Raid Under","Flood","Flood Post","Four Verticals","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","Inside Smash","Mesh Dig","PA Boot","PA Ctr Waggle","PA Deep In","PA Verticals","Read Option","Scat","Stick"],
        "U Off": ["Curl Flats","HB Dive","HB Slam","HB Stretch","HB Zone Wk","L Spot","PA Boot Y Drag","PA Deep Cross","PA Shot Gos","Read Option","Slants","TE Cross"],
        "U Off Trips": ["Dbl Post","HB Counter","HB Dive","HB Slam","HB Slip Screen","HB Stretch","PA Boot","PA Boot Over","PA Fl Clown","PA Slot Out","Quick Slants","Read Option","Stick","Strong Power","TE Cross"],
        "Weak I": ["Curls","F Lead Read Option","HB Slip Screen","HB Zone Wk","PA Comebacks","PA Crossers","Slants","Triple Option","Y Corner"],
        "Weak I Wing": ["94 Will","Counter Weak","HB Gut","HB Power O","PA Boot Slide","PA Power O","PA TE Slide","Post Shot","X Slant"],
        "Weak Slot": ["Counter Str","Dig Wheel","HB Dive","HB Slam","Lead Read Option","PA Boot","PA Seams","Read Option","Roll Out Smash","Slants","Smash Y-corner","X Dig"],
        "Weak Slot Open": ["Corner Strike","Deep Curls","HB Dive","HB Draw","Lead Read Option","MTN Flood","MTN Y Stick","MTN Z Under","PA Short Post","Shallow Cross","Slants","Y Cross Flood"],
        "Wing": ["Curl Combo","Drive","HB Counter","HB Slam","HB Slip Screen","HB Stretch","PA Boot","PA Boot Lt","PA Ctr Waggle","PA Deep Out","PA Power O","PA WR Screen","Power O","Read Option","Read Option Wk","Strong Power","TE Attack","TE Stick"],
        "Wing Slot": ["Dagger","HB Counter","HB Dive","HB Stretch","Hitch Corners","PA Boot Lt","PA Ctr Waggle","PA Deep Out","PA Jailbreak Screen","PA Power O","Posts","Power O","Read Option Wk","Strong Power","Y Stick"],
        "Y Off Trips": ["Counter Y","Curls","Fake Screen Wheel","HB Dive","HB Draw","HB Slam","HB Slip Screen","Inside Zone Split","PA Boot Slide","PA Double Post","Slants","Stretch Alert X Lookie","Strong Flood","Vertical TE Cross","Y Lead Read Option"],
        "Y Trips": ["Curls","Four Verticals","HB Counter","HB Draw","HB Slam","HB Slip Screen","HB Stretch","PA Comebacks","PA Ctr Waggle","Read Option","Smash","Strong Power","TE Stick","WR Screen","Y Trail"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_run_n_gun",
    name: "Run 'N' Gun (Alt)",
    style: "Run 'N' Gun",
    formations: {
      "Singleback": {
        "Ace": ["Ace Posts","Ace TE Drag","Corner Strike","Counter Wk","Curl Flats","Double Sluggo","Flanker Curl","Flanker Drive","HB Dive","HB Stretch","HB Zone Wk","Inside Cross","L Spot","PA Ctr Waggle","PA Dbl Go","PA Deep In","PA Roll Rt","PA Stretch","Quick Slants","X Post","Y Shallow Cross"],
        "Ace Slot": ["Curl Flat","Curl Flat Corner","Dbl Post","Flood","HB Counter","HB Dive","HB Slip Screen","HB Stretch","MTN HB Slash","MTN PA Z Slide","MTN Wide Zone","PA Boot","PA Ctr Waggle","PA Fl Stretch","Slants","Slot Under","Smash","Verts Mesh"],
        "Bunch": ["Crack Toss","End Around Lead","Flanker Drive","HB Counter","HB Slash FK End Arnd","HB Zone Wk","Inside Zone Split","L Spot","PA Boot","PA Boot Slide","PA End Around Sift","Pitch WR Reverse","Spacing","TE Angle","Verticals","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Bunch X Nasty": ["Counter Y","Crack Toss","HB Dive","HB Slash","Inside Zone Split","MTN FK Flat Trail","MTN Flat Y Leak","MTN Flat Y Under","PA Boot Slide","PA Counter","PA Cross","PA Deep Out","PA Post Dig","Spacing","Verticals"],
        "Doubles": ["Bubble Screen","Curl Flats","Flanker Dig","Flanker Drag","Four Verticals","Goalline Fade","HB Cutback","HB Iso","HB Power O","HB Pump Draw","HB Slip Screen","HB Zone Wk","Inside Zone","Levels Divide","PA Boot Rt","PA Slot Stop","PA Stretch","PA Y-sail","Slants","Stretch Alert Bubble","WR Fork","Z-close Corner","Z-close Cross","Z-close Curl"],
        "Wing Pair": ["HB Dive Alert Smoke","HB Inside Zone","HB Stretch","MTN Counter Str","MTN HB Plunge","MTN Spot","PA Sprint HB Flat","PA TE Seam","PA X Burst Cross","TE Attack","TE Drive","Y Stick"]
      },
      "I Form": {
        "Pro": ["20 Iso","20 Lead Draw","22 Zone FK Z Around","23 Zone","26 Counter","50 Curls","50 Mesh","51 Bench","51 HB Slip Screen","51 Z Spot","91 Quick Slants","Fake 20 Iso Pass Fork","FK 20 Iso WR In","FK 22 Z Around","FK 22 Z Around Pass","FK 23 Zone Boot Rt","FK 23 Zone Pass Gos","FK 24 Power Pass","HB Stretch","Power Alert X Smoke","Stretch Alert X Smoke"]
      },
      "Weak": {
        "Close Flex": ["Drive","HB Counter","HB Dive","HB Draw","Mesh","Ok Slants","PA Boot Slide","PA Slot Corner","Spacing"]
      },
      "Wildcat": {
        "Trips Over": ["Blast Rt","Counter","Jet Sweep","PA Jet Cross","PA Jet Sweep","Power"]
      },
      "Pistol": {
        "Bunch TE": ["Cross Drag","FK Jet Inside Zone","HB Counter","HB Slip Screen","HB Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Curls","Spot Option","Stick","Verticals","WR Screen"],
        "Trips": ["Curl Flat","Flood","HB Counter","HB Dive","HB Draw","HB Slip Screen","HB Stretch","Inside Cross","Inside Smash","PA Boot Lt","PA Ctr Waggle","PA HB Flat","Read Option","Slants","Smash","Stick","Strong Power","Verticals"]
      },
      "Gun": {
        "5wr Trio": ["Curl Flats","Double Pivot","Four Verticals","Hitch Corners","Jet Sweep","MTN Mesh Y-post","MTN Y Shallow Cross","QB Draw","Shallow Cross","Slants","Spacing","Stick","Strong Flood","WR Option","WR Screens"],
        "Bunch Quads": ["Bunch Trail","Drag Under","Inside Post","MTN Spot","MTN Verticals","MTN WR Swing","QB Draw","Spacing","Spot"],
        "Bunch X Nasty": ["Choice Shallow Dig","Counter Y","Dig Return","Double Outs","Drive Y Corner","Empty Flat Stick","Empty Spot Wheel","Empty Stick Spacing Switch","Inside Zone","Mesh Spot","MTN China Cross","MTN HB Shovel","MTN Mesh HB Sneak","MTN Slot Middle","MTN Smash Sluggo","MTN Speed Dig Under","RPO Zone Alert","Smash Return","Y Flat Goalline","Z Mesh Goalline","Z Spot Goalline"],
        "Doubles": ["Angle Smash","Corner Strike","Curl Flats","Dbl Outs","Fake Jet Pass Power","Flanker Drive","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Seams","Inside Zone","Inside Zone Read Opt","Jet Pass FK Zone","Jet Touch Pass","PA Dagger","PA Read","PA Zone Read","Read Option","RPO Peek Slant","Slants","Slants Middle","Y Shallow Cross","Y-sail","Zl Spot"],
        "Doubles Flex Y Off Close": ["Escape","Flood H Post","HB Scissors","Inside Zone","Jet Pass FK Zone","MTN Angle Y Wheel","MTN Dagger Y In","MTN Dig Under","MTN HB Angle","MTN HB Out","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Empty Trey": ["Corner Strike","Curls Y-shake","Dbl Unders","Gos Y Shake","Quick Slants","Smash","Stick","Stick N Nod","Strong Flood","TE Slot Cross","WR Screen","Y Corner"],
        "Spread": ["Corner Strike","Curl Flats","Deep Attack","Flanker Dig","Four Verticals","HB Counter","HB Draw","HB Option","HB Slip Screen","Hitch Seam","Inside Cross","Inside Zone","PA Comebacks","Quick Slants","RPO Peek Slant","Slot Outs","Smash Corners","Smash Digs"],
        "Tight Flex": ["Bench","Bench Switch","Frisco","HB Draw","HB Option","Mesh","PA Post Shot","PA Read","Quick Looks","Read Option","WR Corners","WR Cross"],
        "Tight Open": ["Bench","Bench Dig Pivot","Bench Return","Dig Z Spot","Drive Stutter Flat","FK Drive Stutter","HB Draw","HB Slip Screen","Inside Zone","Mesh Clearout","Mesh Spot","Verticals HB Burst"],
        "Trey Open": ["Clearout","Corner Strike","Curls","Deep Post","Four Verticals","HB Base","HB Counter","HB Cross Screen","HB Draw","HB Slip Screen","Inside Zone","Mesh Wheel","PA Slot Under","PA WR In","Quick Slants","Read Option","Shock H Option","Slot Drive","Spacing HB Wheel","Speed Option","Stick HB Circle","Stick N Nod","Strong Flood","Trail Shake","WR Screen","X Drag","Y-sail"],
        "Trips TE": ["Cross Under","Curl Flat","Curls Go","Flood","HB Angle","HB Counter","HB Mid Draw","HB Slip Screen","Inside Zone","PA Crosses","PA Slot Corner","Read Option","Slot Quick Flat","Speed Option","TE Corner","TE Screen","Verticals","WR Screen"],
        "Wing Flex Offset": ["0 1 Trap","Double Cross","Four Verticals","Inside Zone","Inside Zone Split","Jailbreak Screen","Ohio Spacing","PA Double Post","PA Jailbreak Screen","PA Slide","Power O","Slants Y Stick","Stick Nod Vertical","Wheel Post Drag","Y Lead Read Opt"],
        "Y Off Trips Nasty": ["Dagger Whip","Flood HB Swing","HB Slip Screen","Inside Zone","MTN X Drag","MTN Y Corner","MTN Y Pivot","PA Double Post","RPO Read Y Flat"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_run_and_shoot",
    name: "Run and Shoot (Alt)",
    style: "Run and Shoot",
    formations: {
      "Singleback": {
        "Spread": ["0 1 Trap","60 60","61 X Choice","All Go","Bubble Screen","Comebacks","Flanker Dig","HB Draw","HB Slip Screen","MTN HB Draw","PA Slot Crosses","Seam Option","Slant Flats","Slants Middle","Switch Smash","Wide Zone","Wide Zone Wk","Zone Alert Bubble"],
        "Trips Open": ["0 1 Trap","60 60","60 Slide","61 X Choice","All Go","Bubble Screen","Curl Flat Corner","Curl Flat Wheel","HB Draw","HB Slip Screen","Inside Zone","Levels","Middle Slant","PA Fl Stretch","Stick","Strong Flood","Wide Zone","Wide Zone Wk"]
      },
      "Pistol": {
        "Spread": ["Curl Flat","Fade Smash","Four Verticals","H Y Option","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","Hitches","PA Boot","PA Deep In","Quick Slants","Rns Hook","Speed Option","Speed Out","Streak","Switch Smash","Switch Streak","Wide Zone","Wide Zone Wk","X Option","Y Cross","Y Stick"],
        "Trips Open": ["All Go","Double Out","Go","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","HB Zone","Hitches","Houston","Houston Mesh","L Spot","Levels","Levels Switch","Middle Slant","PA Deep In","PA Pin Deep","Return Go","Return Go Swap","Return X Choice Special","Slide","Smash","Speed Option Wk","Streak X Shallow","Troop","Troop Mesh","Wide Zone","Wide Zone Wk","X Choice"]
      },
      "Gun": {
        "5wr Trips": ["All Go","Curl Flat Corner","Curl Flats","Flood","Gt Field Options","Hitches","Inside Cross","Inside Switch","Jet Touch Sweep","Levels","Middle Slant","Pivot Z In","QB Blast","QB Draw","Slants","Smash","Stick","WR Screen"],
        "Flanker Close": ["Bench","HB Counter","HB Sweep","PA Drag","Stick","Switch Curl","Switch Curl Flat","Switch Dig","Weak Flood"],
        "Spread": ["45 Quick Base","90 Cube","All Go","Bubble Slants","Curl Flat","HB Draw","HB Slip Screen","Hitches","Hook","Inside Cross","Inside Zone","PA Comebacks","PA Read","Read Option","RPO Alert Bubble","RPO Alert WR Screens","RPO Peek Slant","Streak","Switch Smash","Switch Streak","Y Stick"],
        "Spread Slots Close": ["0 1 Trap","14","45 Quick Base","590 Nebraska","590 Texas","590 Z Replace","90 Replacey Stick","90 Y Shallow","90 Z Shallow","HB Draw","HB Middle Screen","Inside Zone","Read Option","Rns Rip 60 Go Swap","Rns Rip 60 Z Slide","Rns Rip 61 Choice","Streak","Switch Smash","Switch Streak","Y Stick","Z Read"],
        "Trips": ["14","45 Quick Base","All Go","Blast","Bubble Screen","Georgia","Georgia Mesh","Go","HB Counter","HB Mid Draw","HB Slip Screen","HB Sweep","Inside Zone","Levels","PA Read","PA WR In","RPO Alert Bubble","Slide","Speed Option","Streak X Shallow","X Choice"],
        "Trips HB Wk": ["Bubble Screen","Go","HB Base","HB Mid Draw","HB Off Tackle","HB Slip Screen","Inside Zone","Levels","Levels Switch","PA Read","PA WR In","Slide","Stick","Verticals","X Choice"],
        "Trips Slots Close": ["45 Quick Base","Blast","Choice Special","Divide","Divide Special","Divide Swap","Double Out","Georgia","Georgia Mesh","Go","H Replace","HB Mid Draw","HB Slip Screen","HB Sweep","Hook","Inside Zone","Levels Switch","PA Read","Return Go","Return Go Swap","Return X Choice Special","Rns Hitches","Slide","Speed Option","Streak","Streak X Shallow","X Choice"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_run_balanced",
    name: "Run Balanced (Alt)",
    style: "Run Balanced",
    formations: {
      "Singleback": {
        "Ace": ["Ace Posts","Ace TE Drag","Counter Wk","Curl Flats","Double Sluggo","Fl Under","Flanker Drive","HB Dive","HB Slip Screen","Inside Cross","L Spot","PA All Go","PA Ctr Waggle","PA Deep In","PA Roll Rt","PA Stretch","Pump HB Draw","Quick Slants","Stretch Alert X Smoke","TE Under","X Follow","X Post","Y Shallow Cross","Zone Wk Alert Z Smoke"],
        "Ace Dbl Wing": ["HB Counter Wk","HB Dive","HB Smash","HB Stretch","PA Ctr Waggle","PA TE Cross","TE Corners","TE Shake","Wide Zone Lt"],
        "Ace Slot": ["Curl Flat","Flood","HB Counter","HB Dive","HB Power O","HB Slip Screen","PA Boot Over","PA Ctr Waggle","PA Fl Stretch","Slants","Slot Under","Smash","Stick","Stretch Alert Bubble"],
        "Doubles": ["Curl Flats","Four Verticals","HB Blunt Dive","HB Dive","HB Draw","HB Pump Draw","HB Slash","L Spot","PA Boot Comeback","PA Draw Shot","PA Y Glance","PA Y-sail","PA Zone Shot","Power Alert Bubble","Slants","Sluggo Seam","X Dagger","Z Post Y Out"],
        "Doubles Flex": ["Blunt Dive","Curl Flats","Flanker Dig","Flanker Drive","Four Verticals","HB Dive","HB Draw","HB Slip Screen","HB Stretch","Inside Cross","L Spot","PA Dbl Posts","PA Deep In","PA HB Curl","PA Power O","Power O","Slants","Slot Cross","TE Post","Whip Ins","Y Shallow Cross"],
        "Trips": ["93 Up Y Option","Bubble Screen","Corner Double In","Curl Combo","HB Dive","HB Draw","HB Power O","HB Stretch","HB Zone Wk","PA Boot","PA Boot Lt","PA Solid Corner","PA Y Glance","Slants","Stick","TE In","WR Option","X Corner Post"],
        "Wing Slot": ["Bubble Screen","Four Verticals","H Counter Str","HB Dive","HB Slip Screen","Inside Cross","PA Counter Str","PA Power O","PA Zona Sail","Power O","Slot Post","Smash","X Curl","Y Stick","Zone Alert Bubble"],
        "Y Off Trio": ["Curl Flat","Four Verticals","HB Stretch","Inside Cross","Mesh","MTN Lead Dive","PA Power O","PA Slide","PA Slot Cross","Power O","Slants","Y Shallow Cross"],
        "Y Trips": ["Comebacks","Curls","Four Verticals","HB Counter","HB Plunge","Levels Switch","Mesh","PA Ctr Waggle","PA Power O","PA Read","PA Stretch","PA WR In","Pump HB Draw","Se Cross","Slot Drive","Smash","Stick","Stretch Alert X Lookie","WR Screen","Y Shallow Cross","Zone Wk Alert Bubble"]
      },
      "I Form": {
        "Hulk": ["FB Dive","HB Counter Wk","HB Iso","HB Power O","PA Cross","PA FB Flat"],
        "Pro": ["Bench","Corner Strike","Cross In","Curls","FB Dive","FB Fake HB Flip","Goal Line Fade","HB Counter Wk","HB Slip Screen","HB Stretch Alert X Smoke","Inside Zone","Iso","Iso Weak","L Spot","Mesh","PA Boot","PA Comeback Slide","PA Scissors","PA Weak Flood","Quick Slants","Texas"],
        "Slot Open": ["Dagger","HB Blast","HB Draw","HB Iso","PA Scissors","Quick Slants","Rollout Smash","RPO Alert X Lookie","Slot Choice"],
        "Wing": ["Counter Wk","Curls","FB Dive","FB Fake HB Flip","HB Lead Dive","HB Toss","Iso","PA Boot Flow","PA Clearout","PA Spot","Stretch Alert X Lookie","TE Option","TE Post","WR Corner","X Slant"]
      },
      "Strong": {
        "Pro": ["Asa F Flat","Blast Alert X Smoke","Counter Alert Smoke","F Angle","FB Dive","Fl Drive","HB Dive","HB Iso","Mesh","PA FB Fake","PA Power O","PA Scissors","PA Slide","PA WR In","Power Alert X Smoke","Slants","Stretch Alert X Lookie","X Post"]
      },
      "Weak": {
        "Close Flex": ["As","Drive","HB Counter","HB Dive","HB Draw","Mesh","PA Boot Slide","PA Slot Corner","Spacing"],
        "Slot Open": ["Corner Flat","Corners","Curls","HB Draw","HB Lead","HB Slip Screen","Off Tackle","PA Boot Slide","PA Power O","Power O","Quick Slants","WR In"]
      },
      "Other": {
        "Full House Normal": ["Close Cntr Lt","Close Z Clown","Close Z Corner","Corner Strike","Curls","HB Draw","HB Misdirection","HB Slam","HB Smash","PA Comebacks","PA Middle","Slants"]
      },
      "Wildcat": {
        "Normal": ["Jet Sweep","PA Jet Sweep","Power"]
      },
      "Pistol": {
        "Bunch": ["Corner Strike","Flanker Drive","HB Counter","HB Dive","HB Draw","HB Slam","HB Slip Screen","Inside Zone Split","PA Boot Slide","Seattle","Spacing","TE Angle"],
        "Full House Base": ["Cntr Lead","Curl Wheel","HB Double Iso","HB Slam","PA Boot","PA Comeback Flood","PA Cross Shot","PA Flood","Post Wheel","Read Option","Slants","Wing HB Dive","Wing PA Cross","Wing Power O"],
        "Full House TE": ["Cntr Lead","HB Dive","MTN O 1 Trap","MTN Power O","PA Comeback","PA Cross","PA TE Corner","Read Option","X Slant"],
        "Wing Slot": ["Dagger","Four Verticals","HB Slam","HB Slip Screen","HB Stretch","PA Deep Out","Posts","Strong Power","Y Stick"]
      },
      "Gun": {
        "Doubles Flex": ["45 Quick Base","Corner Strike","Curl Flats","Drag Unders","Fl Screen","Fl Spot","Flanker Drive","Four Verticals","HB Mid Draw","HB Slip Screen","PA Dagger","PA Fl Fly","RPO Peek Slant","Slants","Smash Under"],
        "Flex Y Off": ["0 1 Trap","Counter Y","Curl Ohio","Double Slants","Flood","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","MTN Counter","MTN Inside Zone Split","MTN PA Slide","PA Jailbreak Screen","PA Seam Digs","Read Option","RPO Alert HB Zone","Texas","X Dagger"],
        "Split Offset": ["Deep Comeback","Deep Cross","Deep Curls","FB Inside","HB Draw","HB Slip Screen","Mesh","PA Poco","PA Skinny Post","PA Slide","Power O","Shakes","Slants Middle","Slot Cross","Slot Seam","WR Spot","X Dig","Y Shallow Cross"],
        "Spread": ["Corner Strike","Curl Flats","Deep Attack","Flanker Dig","HB Option","HB Slip Screen","Hitch Seam","Inside Cross","PA Comebacks","Quick Slants","RPO Peek Slant","Slot Outs","Smash Corners","Smash Digs","Z Shallow Cross"],
        "Spread Y  Slot": ["All Curls","Bubble Screens","Corner Strike","Deep Attack","Flood","Four Verticals","HB Draw","HB Quick Base","Levels Divide","PA TE Wheel","Post Trail","Quick Slants","Slot Outs","Smash","Under Y-out","WR Post","X Follow","Y-under"],
        "Trey Offset": ["Dagger","Double In Y Cop","Fade Smash","HB Counter","HB Slip Screen","Inside Zone","Levels Sail","MTN HB Screen","MTN Y Screen","Outside Zone","PA Post Shot","Read Option","RPO Alert WR Screen","RPO Buck Alert Screen","Spot Wheel","Stick","TE In","Verticals Y Drag"],
        "Wing Stack": ["0 1 Trap","Double Corner","Double Cross","Fade Out","Inside Zone","Inside Zone Split","Jailbreak Screen","Levels","MTN Stick","Ohio Spacing","PA Curl Post","PA Jailbreak Screen","PA Slide","Power O","Y Lead Read Opt"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_run_heavy",
    name: "Run Heavy (Alt)",
    style: "Run Heavy",
    formations: {
      "Singleback": {
        "Ace": ["Ace WR Stretch","Curl Flats","Double Hitch","Dual TE Flat","HB Counter","HB Draw","HB Pitch","HB Slam","HB Smash","Jet Sweep","PA Boot","PA Deep In","PA Jet Sweep","PA Stretch","Stretch Alert X Lookie","TE Cross","TE Option In","TE Seam Option","X Option","Zone Fake Jet","Zone Weak"],
        "Ace Slot": ["Curl Flat","Flood Y Dig","HB Dive","HB Power O","HB Slip Screen","PA Crosses","PA Fl Stretch","PA Verts","PA Y-corner","Slants","Slot Under","Smash","Stick","Stretch Alert Bubble","Zone Alert Bubble"],
        "Bunch": ["Crack Toss","Dig Return","End Around","HB Dive","HB Slash","L Spot","PA Boot Over","PA End Around Sift","Seattle","Slash FK End Arnd","Spacing","Stick"],
        "Bunch Ace": ["Crack Toss","Drive","Drive Y Trail","End Around Lead","HB Slash","HB Slash FK End Arnd","HB Zone Wk","L Spot","PA Boot","PA End Around","PA Fork Shot","Spacing Switch"],
        "East": ["Counter U","Dig Hi Lo","HB Dive","HB Draw","HB Wham","Inside Zone Split","L Spot","PA Boot Slide","PA Flood","Stick","TE Angle","Verticals X Cross"],
        "Trio": ["Bubble Screen","Drive Wheel","HB Delay","HB Dive","HB Stretch","HB Toss","PA Boot","PA Boot Lt","PA Solid Corner","Slants","Slot Chase","Smash Texas","Spot","Verticals","Zone Weak"],
        "Trips Y Slot": ["Curl Combo","Four Verticals","HB Dive","HB Draw","HB Stretch","HB Zone Wk","Levels Switch","PA Slot Cross Shot","PA Slot Wheel","Slot Drive","Sluggo Seam","Smash","Stick","WR Screen","Y-trail"],
        "Wing Slot": ["Four Verticals","H Zone Str","HB Dive","HB Sprint","Inside Cross","PA Boot Lt","PA Fork Y-dig","PA Power O","PA Rollout","PA Y Corner","PA Y Drag","Power O","Smash","X Curl","Y Stick"],
        "Wing Tight": ["HB Counter","HB Counter Wk","HB Dive","HB Draw","HB Plunge","HB Power","PA Boot","PA Fl Stretch","PA Flood","PA Power O","Power Alert X Lookie","TE Corners","TE Option","TE Shake","X Option"]
      },
      "I Form": {
        "Pro": ["Bench","Curls","End Around","FB Dive","HB Angle","HB Draw","Iso","PA End Around","PA Power O","PA Scissors","PA WR In","Power Alert X Smoke","Quick Slants","Slam FK End Arnd","Stretch Alert X Smoke"],
        "Wing": ["Curls","FB Dive","FB Fake HB Flip","HB Toss","Iso","MTN Power O","MTN Zone Wk","PA Boot Flow","PA Clearout","PA MTN Power O","PA Spot","Strong Stretch","TE Post","X Slant","Zone Weak"]
      },
      "Strong": {
        "I Pro": ["Blast Alert X Smoke","Counter Alert Smoke","F Angle","Gos Y-post","HB Lead Draw","HB Slip Screen","HB Stretch","L Spot","PA Draw Pass","PA Power O","PA Scissors","PA Slide","PA WR In","Power Alert X Smoke","Slants","Spacing","Stretch Alert X Lookie","WR Curls"],
        "I Tight": ["Counter Weak","Curls","FB Angle","FB Dive","HB Blunt Dive","HB Dive","HB Stretch","PA Power O","PA Slide","PA TE Cross","Power O","Slants"],
        "I Twins Over": ["Inside Zone Lead","Inside Zone Split","PA Power O","PA Verti Cals Shot","Power O","Rollout Smash"],
        "I Wing": ["Blast Alert X Smoke","Counter Weak","Curls","HB Dive","Inside Zone Wk","MTN Power O","MTN Zone Wk","PA FB Flat","PA MTN Power","PA Power O","PA Slide","PA Spot","Power Alert X Smoke","WR Fade","X Slant"],
        "I Y Open Flex": ["Fork Angle","HB Dive","HB Draw","Inside Zone Lead","Inside Zone Split","MTN Zone Weak","PA Shot","PA Slide","PA WR In","Slants","Tight Fl Drive","Tight HB Screen","Tight Mesh","WR Curls","X-corner"]
      },
      "Weak": {
        "I Slot": ["Bubble Screen","HB Blast","HB Lead","HB Option","HB Slip Screen","PA Boot Slide","PA Deep Threats","PA Flood","PA Slot In","Read FB Flat","Slants","X Dig"]
      },
      "Other": {
        "Power I Strong": ["Dbl Lead","FB Dive","HB Blast","HB Misdirection","HB Zone","PA Boot Slide","PA FB Flat","PA HB Wheel","PA Looch Special","PA Power O","Power O","X Slant"],
        "Full House Wide": ["Angle Swing","Corner Strike","Counter Lead","Curls","HB Slam","HB Sweep","PA Comebacks","PA Middle","PA Power O","Power O","Weak Zone","WR Dbl Shake"]
      },
      "Gun": {
        "Ace": ["0 1 Trap","Corner Strike","Curl Flats","HB Mid Draw","HB Quick Base","HB Slip Screen","Hitch Corners","Inside Cross","Inside Zone","PA Comebacks","PA Deep Shot","PA Fl Screen","Quick Slants","TE Attack","TE Under"],
        "Bunch TE": ["Curl Flat Corner","Follow","HB Draw","HB Off Tackle","HB Slip Screen","Inside Cross","Inside Switch","Mesh","Paall Cross","Stick","TE Corner","X Spot"],
        "Doubles": ["Curl Flats","Deep In","Double Sluggo","Four Verticals","HB Mid Draw","PA Comebacks","PA Read","PA Slot Post","Read Option","RPO Peek Slant","Slants","TE Stick","Whip Unders","WR Drag","X Under Seams"],
        "Split Slot": ["Deep Curls","HB Gut","HB Slip Screen","HB Sweep Wk","PA F Slide","PA Wheel","Shovel Option","Slants","Slot Post Angle"],
        "Split Y  Flex": ["689 Hook","Backs Cross","Corner Strike","Flat Combo","Flood","Gos Y-post","HB Base","HB Draw","HB Off Tackle","HB Slip Screen","Inside Zone Split","Mesh","PA F Slide","Y Poco","Y Shallow Cross"],
        "Y Off Trio Wk": ["Comebacks","Corner Strike","Deep In","Double Drags","Four Verticals","HB Base","HB Circle","HB Mid Draw","HB Slip Screen","HB Sweep","PA WR In","Slants","Slot Option","Strong Flood","Vertical TE Cross"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_shotgun",
    name: "Shotgun (Alt)",
    style: "Shotgun",
    formations: {
      "Gun": {
        "5wr Tight": ["Clear Deep","Cluster Bunch","Mesh","Mesh Post","QB Draw","Smash Dagger","Spacing","Z Spot","Z Spot Shake"],
        "Bunch": ["Bunch Trail","Corner Out Dig","Curl","Dig Return","End Around","Flanker Drive","Flood","HB Base","HB Slip Screen","Smash Return","Spacing Switch","Speed Dig","Verticals","Z Spot","Z Spot N Go"],
        "Bunch Quads Close": ["Drag Under","Inside Post","QB Draw","Slant Spacing Dig","Spot","TE Angle"],
        "Bunch Str Nasty": ["Crack Toss","Dagger","Flanker Drive","HB Slip Screen","Inside Zone","Mesh Flat Spot","PA Bunch Shot","RPO Read Bubble","Y Flat Quick","Y Trail","Z Mesh Quick","Z Spot Quick"],
        "Bunch Str Offset": ["Bears QB Sweep","Corner Strike","Crack Toss","Dagger","Flood","HB Slip Screen","Inside Zone","Read Option","RPO Alert Screen","Slant Spacing","Verts Dig","Y Trail"],
        "Bunch Y  Flex": ["83 HB Choice","Dagger","Dig Return","Flood","HB Slip Screen","Inside Zone","Jet Pull Shallow","RPO Alert Out","Smash Return","Spacing","Verticals","Z Spot"],
        "Doubles": ["45 Quick Base","Curl Combo","Deep Outs","Double Outs","Double Slants","Four Verticals","HB Scissors","HB Slip Screen","Inside Zone","PA Post Cross","Read Option","RPO Peek Slant","Shark HB Wheel","Spot Dbl Slants","X Dig"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Doubles Offset Wk": ["Curl Combo","Double Cross","Four Verticals","HB Slip Screen","O 1 Trap","Outside Zone","PA Bubble Y Over","PA Read","RPO Alert Bubble","RPO Peek Slant","Sail","Slants"],
        "Doubles Stack": ["Curl Flat","Fake Screen Shot","HB Draw","HB Slip Screen","RPO Alert Screen","RPO Alert Trap","RPO Read Fl Screen","Smash","Stack Out"],
        "Doubles Y Off": ["Curl Ohio","Fade Stop","Four Verticals","HB Slip Screen","Inside Zone","Jet Inside Zone","Jet Touch Pass","PA Jet Sweep","RPO Peek Slant","Slants","Slot Option","Vert Comebacks"],
        "Empty Ace": ["All Go","Curl Flats","Fake Jet Pass Power","Flood","Jet QB Counter","Jet QB Zone","Jet QB Zone Wk","Jet Touch Pass","PA Jet Sweep","Post Wheel Shallow","Stick","U Cross"],
        "Empty Bunch Wide": ["Deep Flood","Drive Wheel","Drive Y Corner","Jailbreak Screen","QB Draw","Spacing Switch","Stutter Wheel","Z Spot N Go","Z Spot Smash"],
        "Empty Bunch Y Flex": ["Branch Return","Dagger","Flood","Jailbreak Slot Screen","QB Draw","Spacing Switch","Speed Dig Out","Swirl Hook N Go","Z Spot"],
        "Flex Y Off Close": ["Counter Y","Curl Ohio","Escape","Flood","HB Circle","HB Slip Screen","Hitch HB Rail","Inside Zone","Levels Mills","PA Post Shot","RPO Alert Out","TE Wheel"],
        "Gadget Backfield": ["Dragon Spacing","F Choice Spot","HB Off Tackle","HB Quick Base","HB Slip Screen","Inside Zone"],
        "Gadget Package": ["Mesh Spot","Read Option","Wide Zone","Wrwheel","Y-off Power O","Y-off Power Read"],
        "Go Go Slot Open": ["HB Swing","Inside Zone","Levels","PA Fin","PA Flood","RPO Read HB Flat","Spot Lead Swing","Sprint Out Flood","Triple Option Rt"],
        "Normal Y Off Wk": ["Curl Combo","Double Slants","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","Pivot In Seams","RPO Alert Bubble","WR Under"],
        "Slot Left": ["HB Dive","HB Slip Screen","Inside Zone Split","PA Comeback Seam","PA MTN Slide","Read Option","Speed Option","X Dig","Y Lead Read Opt Rt"],
        "Split Close": ["Dbl Ins","Dig Slot Out","Double Swirl","FB Inside","HB Rail","Mesh","Mesh Spot","PA F Slide","Pivot Dig","Read Option","Triple Option Lt","Z Spot"],
        "Split Slot": ["46 Y Cross","689 Hook","Double Ins","FB Inside","Flood","HB Gut","HB Off Tackle","HB Slip Screen","Mesh","Mesh Post Wheel","PA F Slide","PA Flood","PA HB Wheel","Power Read","RPO Peek Slant","Shovel Option","Slants","Triple Option Lt"],
        "Tight Open": ["Bench Swirl-return","Bench Z Spot","Drive","Inside Zone","Mesh Clearout","Mesh Spot","Post Corner Drive","Read Option","Shallow Corner Stop","Stick","Y Cross","Z Spot Dig"],
        "Trey Open": ["China N Go","Dbl Corner Switch","Dig","Double Post","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Inside Dig","Inside Seam","Inside Zone","PA WR In","Read Option","Smash","Stick","Strong Flood","Switch Verts","Switch Z Curl","WR Screen","Y Corner","Y Cross Flood"],
        "Trio HB Wk": ["Dagger Sit","Flood HB Flat","HB Slip Screen","Inside Zone","Jet Chip Wasp","PA Cross Sit","PA Y Cross","RPO Alert Bubble","RPO Pin Alert Bubble","Speed Option","Sprint Rub Flat","Verticals"],
        "Trips HB Wk": ["Curls","Deep Stick","Drive","Four Verticals","HB Slip Screen","Inside Switch","Inside Zone","Middle Slam","Ohio Sail","Quick Slants","RPO Alert Bubble","Shock H Option"],
        "U Off Trips": ["Counter Y","Deep Post Corner","HB Power","Inside Zone","PA Tequt","Post Wheel Shallow","RPO Alert Hitch","RPO Read Flat","Shock"],
        "Wing Pair": ["Duo","FK Toss Verticals","Four Verticals","HB Toss","MTN HB Trap","MTN Inside Zone","MTN Spacing","PA TE Attack","Snag Spacing"],
        "Wing Slot Offset": ["All Go","Dragon Spacing","Inside Zone","Jet Pass FK Zone","Mesh Spot","PA Double Post","PA Jailbreak Screen","PA Jet Sweep","PA Read","Read Option","Scissors Smash","Shallow Mills","Stick Nod Vertical","TE Spot Ohio","Z Close Duo","Z Close PA Flood","Z Close Toss","Zone Fake Jet"],
        "Wing Stack": ["Four Verticals","Inside Zone","Mesh Spot","Ohio Spacing","PA Read","Power O","Read Option","Smash Drive","Stick"],
        "Wing Stack Wk": ["Four Verticals","PA Slide","RPO Alert Bubble","RPO Peek Slant","RPO Read Bubble","RPO Read Cntr","RPO Read Slant Bubble","Stick"],
        "Y Off Trio Wk": ["Flood Post","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","Mills","MTN Outside Zone","MTN PA Deep Over","MTN Split Zone","Quick Fork Zig","Quick Short Post","Quick Unders","Shock H Option","Slants","Slot 2 Buc","Speed Dig","Stick","Y Lead Read Option"],
        "Y Trips Wk": ["Arches","Clearout","Four Verticals","HB Base","HB Mid Draw","HB Slip Screen","Inside Attack","Outside Zone","Quick Fork Zig","Quick Short Post","Quick Unders","RPO Peek Slant","Shock H Option","Slants","Slot Seam","Under","Y Fork Dig","Y Stick HB Angle"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_shotgun_classic",
    name: "Shotgun Classic (Alt)",
    style: "Shotgun Classic",
    formations: {
      "Gun": {
        "5wr Trio": ["Curl Flats","Double Pivot","Flood Switch","Four Verticals","Hitch Corners","Inverted Mesh","Jet Sweep","Mesh Spot","MTN Mesh Fork","MTN Mesh Y-post","MTN Y Shallow Cross","QB Draw","Shallow Cross","Shock Slot Option","Shock Y Option","Stick","Strong Flood","Verticals Slot Out","Whips","Whips Curls","WR Screens"],
        "Bunch Spread Nasty": ["Cheat Flood","Cheat HB Slip Screen","Cheat Slot Cross","Drive Y Corner","Inside Zone","Mesh Slot Out","MTN Deep Over","MTN Mesh Drive","MTN Mesh Swing","MTN Slot Hitch","MTN Slot Under","MTN Snag Under","Orbit Bunch Salem","Orbit Shallow Cross","Orbit Smash Whip","Outside Zone","PA Post","Seam Divide","Shock HB Wheel","Z Swirl Choice","Z Swirl In"],
        "Bunch Str Offset": ["Corner Strike","Inside Zone","Lead Swing Spot","MTN Diamond Fake Mesh Rail","MTN Diamond Mesh","MTN Diamond X-cross Trail","MTN Empty Dig Spot","MTN Empty Posts Y-trail","MTN Empty QB Sweep","MTN FK Toss Verticals","MTN HB Base","MTN Lead Toss","MTN PA Flood Y-delay","MTN PA Spinner","MTN PA Switch Cross","MTN RPO Alert Swing","MTN Spinner HB Inside","MTN WR Outside Zone","Read Option","Return PA Flood","Return RPO Alert Flat","Return Spacing","Rz PA Corner","Seattle","Slant Spacing","Speed Option Wk","Y Trail"],
        "Bunch TE": ["Boomerang HB Off Tackle","Boomerang Mesh Traffic","Boomerang PA Y Wheel","Bunch Levels","HB Draw","HB Slip Screen","Inside Cross","Inside Zone","Mesh","Mills Slot Option","QB Wrap","Read Option","RPO Alert Bubble","Spacing","TE Corner"],
        "Doubles Clamp Stack": ["Curl Ohio","Flood Seam","HB Mid Zone","HB Slip Screen","Hitch HB Rail","Inside Zone","MTN Counter Y","MTN FK Rub","MTN Rub Smash","MTN Shuffle Drive Choice","MTN Shuffle Mesh Rail","MTN Shuffle Verts Smash","PA Post Shot Choice","Portland Y Wheel","Return Bench","Return PA Z Over","Return RPO Zone Alert","RPO Alert Out","Spot Choice","Texas Smash","Y Ohio Return"],
        "Doubles Flex Y Off Close": ["Counter Y","Escape","Flood H Post","HB Pump Draw","HB Scissors","Inside Zone","Jet Pass FK Zone","Mid Zone","MTN Angle Y Wheel","MTN Daggery In","MTN Dig Under","MTN HB Angle","MTN HB Out","MTN Switch Corner","PA Snag","PA Zone FK Jet","Read Option","RPO Zone Peex Glance","Y Stick","Y-sail","Zone Fake Jet"],
        "Doubles Hip": ["Bench HB Angle","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Levels","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","PA Go Slot Cross","Read Option","Switch WR Drag"],
        "Empty Bunch Open": ["Bunch Arches","Cheat Flood Divide","Cheat Mesh","Cheat Slot Cross","Choice Shallow Cross","Crossers","Dagger","Drive Y Corner","Middle Cross","Slot Choice Spacing","Slot Choice Spot","Z Spot N Go"],
        "Empty Bunch Tight": ["Bunch Trail","Clear Deep","In And Under","Mesh Cross","Mesh Spot","QB Draw","Quad Curls","Quick Slants","Shallow Drags","Spacing","Spot Stick","Wide Corners"],
        "Split Pro Near": ["Corner Strike","HB Slip Screen","Inside Zone","Mesh Dig Wheels","MTN Counter","MTN HB Toss","MTN PA FK Toss","O 1 Trap","Outside Zone","PA Flood","PA Y Leak","Read Option","RPO Readf Slide","Same Side Zone","Slant Switch","Slants","Smash FB Angle","Y Cross"],
        "Split U Off Close": ["Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone","Texas U-out"],
        "Split Y Off Close": ["Dig Slot Out","Mesh Spot Rails","MTN Cross Screen","MTN Inside Zone","MTN PA HB Swing","Outside Zone Lt","PA Spinner Post Flood","Smash Spot","Spinner HB Zone"],
        "Spread Y  Flex": ["Angle Y Sail","HB Draw","HB Slip Screen","Inside Zone","MTN Drive","MTN FK Screen Wheel","MTN Fl Screen","MTN HB Cross Screen","MTN Out H-angle","MTN Replace","MTN Shallow HB Angle","MTN Slot Flags","MTN Sluggo Replace","PA Seams","QB Zone","RPO Alert Screen","Spot N Go","Y-option"],
        "Tight Doubles": ["Bench","Cross Wheels","Dbl Stick","Flood Drive","HB Draw","HB Quick Base","HB Slip Screen","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross","Shot Fade Cross","Tight Curl","Z Spot"],
        "Tight Y Off": ["Cheat RPO Zone Alert Bubble","Cheat Slash Wheel Cross","Cheat Spot Y Quick","Choice Pivot Return","Duo","Flood Drive","HB Scissors","HB Slip Screen","Inside Zone","Mesh Spot","MTN PA Spinner","MTN Spinner HB Inside","MTN WR Outside Zone","O 1 Trap","PA Go Slot Cross","PA Jailbreak Screen","PA Slot Cross","Read Option","RPO Alert Bubble","RPO Peek Slant Bubble","Stick","Switch WR Drag","TE Corner","Wheel Spot"],
        "Tight Y Off Wk": ["Curls","Dig HB Option","Flanker Spot","Hammer Dagger","HB Slip Screen","O 1 Trap","Outside Zone","PA Jailbreak Screen","Post Wheel Drag","RPO Zone Alert Glance","RPO Zone Alert Omaha","Shallow Cross","Tackle Trap","WR Under","Y Lead Read Option"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallowx Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","Wrshort Post"],
        "U Off Trips": ["HB Sweep","MTN Jet Sweep","MTN PA Jet Cross","MTN PA Jet Sweep","MTN QB Blast","MTN QB Counter","MTN QB Power","PA U Corner Flood","PA Y Screen","Read Option","RPO Alert Bubble","Shock"],
        "Wing Slot Wk": ["Buck Sweep Read Opt","Double Post","MTN FK Screen Wheel","MTN HB Wheel","MTN Inside Zone","MTN PA Slot Option","MTN PA Verticals","MTN Read Option","MTN RPO Alert Screen","MTN RPO Buck Alert","MTN TE Lead Read Opt","PA Bubble Y Over","Power Read","RPO Peek Post","Slant Stick"],
        "Y Off Trio Close": ["Boomerang Mesh Z Rail","Boomerang PA X Over","Boomerang RPO Alert Swing","Empty MTN Flood H-trail","Empty MTN Mesh Flat","Empty MTN Salem","Flood","MTN Duo","MTN HB Slip Screen","MTN Inside Zone","MTN Mesh Rail","MTN Out Deep Corner","MTN PA Cross Switch","MTN Slot Choice","MTN X-dig Slot Corner","MTN Y-corner Z-choice","O 1 Trap","Outside Zone","PA Power Shallow Cross","Power O","Smash Return"],
        "Y Off X Close": ["5 6 Trap","Cross Slot Post","Curl Flat","Drag Wheel","Go Dbl Post","HB Mid Draw","HB Power","HB Screen","Inside Zone","Mesh Y Out","MTN Corners","MTN HB Corner","MTN Y Poco","PA Cross","PA Fork","Scat","Slot Out","TE Whip","Wheel Mesh","Whip Dig","Y-option Wheel"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_shotgun_mix",
    name: "Shotgun Mix (Alt)",
    style: "Shotgun Mix",
    formations: {
      "Gun": {
        "4 WR Trips Strong": ["Curls","Double Ins","Double Slants","Drive X-post","Four Verticals","HB Angle","HB Base","HB Draw","HB Slip Screen","Inside Zone","PA WR In","Scat","Seam X-comeback","Slot Fade Shot","Slot Out","Smash X-dig","Stick Nod","Stick X-slant"],
        "Ace Slot Offset": ["HB Slip Screen","Inside Zone","Levels Y Sail","PA Post Shot","PA Scissors","PA Verts","PA Y Corner","RPO Alert Bubble","Stick"],
        "Bunch Open TE": ["Dig Return","Fake Screen Verticals","Flood","HB Draw","HB Slip Screen","RPO Alert Bubble","RPO Alert WR Screen","Y Trail","Z Spot"],
        "Bunch Wide": ["Dig Return","Inside Zone","Levels Dig","PA Post","Post Spacing","Seam Divide","Slant Spacing Dig","Spacing","Speed Dig","Verticals","Y Trail","Z Spot"],
        "Deuce Close": ["Bench Dig Curl","Chip Dig 7 Stop","Counter Y","Inside Zone","Mesh Spot","PA Post Cross","Poco X Dig","RPO Read Flat Wheel","Stick Switch"],
        "Doubles": ["45 Quick Base","Curl Combo","Deep Outs","Double Outs","Double Slants","Four Verticals","HB Scissors","HB Slip Screen","Inside Zone","PA Post Cross","Read Option","RPO Peek Slant","Shark HB Wheel","Spot Dbl Slants","X Dig"],
        "Doubles Offset": ["Curl Combo","Double Slant Spot","Fake Jet HB Seam","Four Verticals","HB Punch","HB Scissors","HB Slip Screen","Inside Zone","Jet Pass FK Zone","PA Go Dig Post","PA Go Slot Cross","Read Option","RPO Alert Bus","RPO Peek Waggle","Seam HB Angle","Slant Flat","Y-sail","Zone Fake Jet"],
        "Doubles Z Close": ["Double Slant Spot","Escape","Inside Zone","Mesh Spot","RPO Glance Post","Y-sail"],
        "Doubles Z Close Wk": ["Daggerz Comeback","Deep Post Switch","Double Post","HB Base","HB Slip Screen","RPO Read Bubble"],
        "Empty Base Flex": ["Choice Stick Nod","Hoss Y Juke","Jailbreak Slot Screen","Levels Switch","Redzone Up","Shock WR Option","Stick","Trail Shake","Verticals Under"],
        "Empty Base Trio": ["All Hitch","Curl Combo","Double In","Double Slant Stick","Hoss Juke","QB Draw","Shock Slot Option","Slant Flat","Stick Nod"],
        "Empty Chips": ["Corner Strike","Dagger","Deep Post Out","Post Cross","Slot Sail","TE Screen"],
        "Empty Trey Stack": ["Bench Corner","Curl Flat Salem","Curl Switch","Fade Out","Jailbreak Screen","Levels","Post Wheel","QB Draw","Smash Seam","Stick N Nod","Y Stick","Z Under"],
        "Flanker Close": ["Bench","Dragon Spacing","Escape","F Choice Spot","HB Counter","HB Sweep","Inside Zone","Mesh Spot","Weak Flood"],
        "Flex Y Off Wk": ["Counter Y","Curls","Double Post","Double Slants","Flanker Spot","Four Verticals","HB Slip Screen","PA Jailbreak Screen","PA Read","PA Slide","RPO Peek Slant","RPO Read Screen","Sluggo Seam","Smash","X Dagger","Y Lead Read Option","Zone Alert Glance"],
        "Normal Flex Snug": ["45 Quick Base","All Curl","HB Draw","Inside Zone","PA All In","PA FK Screen Cross","PA Whips Curls","RPO Alert WR Screens","RPO Read Gt Screen","Switch Seams","Whips Curls","X Option","Z Option","Z Replace","Z Spot"],
        "Slot Right": ["Counter Y","Fake Screen Wheel","HB Iso","HB Slip Screen","Inside Zone Split","PA Bubble","PA Deep Choice","PA MTN Slide","PA Se Screen","PA Wheel","QB Slot Option","Read Option","RPO Alert Bubble","RPO Glance Post","RPO Read WR Screen","RPO Read Y Flat","Slants","Speed Option","Verticals","Y Lead Read Opt"],
        "Split Flanker Close": ["Dbl Ins","Drag HB Wheel","HB Draw","HB Power O","Inside Zone Lt","Pivot Dig","Read Option","WR Corner","X Dig"],
        "Split Offset": ["Deep Comeback","Deep Cross","Deep Curls","FB Inside","HB Draw","HB Slip Screen","Mesh","PA Poco","PA Skinny Post","PA Slide","Power O","Shakes","Slants Middle","Slot Cross","Slot Seam","Wrspot","X Dig","Y Shallow Cross"],
        "Tight Slot Flip": ["HB Draw","HB Slip Screen","HB Sweep","Inside Zone","MTN HB Angle","MTN Smash Slot Choice","MTN Z Choice","PA Read","Sail"],
        "Tight Slots HB Wk": ["Bench","Bench Swirl","Four Verticals","HB Slip Screen","Inside Zone","Mesh Spot","Post Wheel Drag","Read Option","Stick Switch"],
        "Tight Y Off Wk": ["Cheat Outside Zone","Fork Z-dig","HB Slip Screen","Inside Zone","Levels","PA Cheat Comeback Go","PA Cheat Wheel Post","PA Corner","Pivot Return","RPO Zone Alert Omaha","Smash Hammer","Tackle Trap"],
        "Trey Offset": ["Dagger","Double In Y Cop","Fade Smash","HB Counter","HB Slip Screen","Inside Zone","Levels Sail","MTN HB Screen","MTN Spot Wheel","MTN Y Screen","Outside Zone","PA Post Shot","Read Option","RPO Alert WR Screen","RPO Buck Alert Screen","Stick","TE In","Verticals Y Drag"],
        "Trey Y  Flex": ["Dagger","Empty Flood Switch","Empty Slot Under","Empty Vertical","HB Slip Screen","Inside Post Out","Inside Zone","Levels Y Corner","Outside Zone","PA Crossers","RPO Alert Screen","RPO Zoney Peek","Se Corner","Shock H Option","Verticals"],
        "Trio Y  Flex": ["Dagger","Deep Flood","HB Quick Base","HB Slip Screen","Inside Zone","Mesh Dagger","Mesh Whips","MTN Shock Slot Dig","MTN Slot In","MTN Stick","PA Crossers","PA Dagger","RPO Alert Bubble","Shock H Option","Verticals"],
        "Trips": ["Curls","Fade Stops","Four Verticals","HB Slip Screen","Inside Zone","RPO Alert Bubble","RPO Alert Screen","RPO Peek Stick","Slant Smash","Slot Drive","Stick Wheel","WR Mid Screen"],
        "Trips TE Offset": ["HB Slip Screen","Inside Zone","Levels Sail","PA Crossers","Read Option","RPO Alert Bubble","RPO Alert WR Screen","Scat","Shockh Option","TE In","Verticals","X Under"],
        "Trips Y Slot Str": ["Dagger","HB Mid Draw","HB Sweep","Inside Zone","Quick Slants","Slot 2 Buc"],
        "Wing Tight Nasty": ["Bench","Bench Swap","HB Punch","Inside Zone","Mesh Spot","Read Option"],
        "Y Off Trips": ["All Go","Counter Y","Curls","Deep Stick Out","Flood HB Swing","HB Dive","Inside Zone","PA Double Post","PA Y Flood","Return Curls","Return PA Corner Strike","Return RPO Alert Flat","RPO Counter Alert Shock","RPO Counter Glance Post","RPO Read Y Flat","RPO X Close Duo Bubble","Shot Slot Poco","Verticals Y Option","X Close HB Dive","X Close PA Slants"],
        "Y Off Trips Wk": ["22 Z In","Counter Y","Dig Cross","Four Verticals","HB Slip Screen","Inside Zone Split","PA Slide","RPO Alert Bubble Dive","RPO Glance Bubble","Shallow Sail","Slants","Slot 2 Buc","Strong Flood","Y Lead Read Option","Z Under"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_singleback",
    name: "Singleback (Alt)",
    style: "Singleback",
    formations: {
      "Singleback": {
        "Ace Close": ["Bench","HB Stretch","HB Zone Wk","Jet Sweep","PA Cross","PA Jet Sweep","Stick","Y Seam","Zone Fake Jet"],
        "Ace Dbl Wing": ["Fake HB Zone QB Boot Lt","HB Counter Wk","HB Dive","HB Power O","HB Smash","HB Stretch","PA Boot Lt","PA Ctr Waggle","PA TE Cross","TE Corners","TE Shake","Wide Zone Lt"],
        "Ace Slot": ["HB Counter","HB Dive","HB Power O","HB Zone Alert Bubble","Inside Zone","PA Boot Switch","PA Scissors Flood","Shallow Cross","Wide Zone"],
        "Bunch Ace": ["Counter Y","Crack Toss","Drive","Duo","End Around Lead","HB Slam","HB Slash","HB Slash FK End Arnd","HB Zone Wk","Inside Zone Split","PA Boot Rt","PA Boot Slide","PA Cross Switch","PA End Around","PA Fork Shot","Spacing Switch","TE Angle","Z Spot"],
        "Bunch TE": ["Cross Drag","HB Pump Draw","Inside Zone","Jet Sweep","MTN Dbl Swing","MTN FK Swing","MTN HB Screen","PA Draw Shot","PA Jet Sweep","Spacing","Stretch Alert Bubble","Zone Fake Jet"],
        "Deuce Close": ["Bench","Cntr Wk","HB Stretch","HB Wham","HB Zone Wk","Inside Zone Split","PA Boot Corner Post","PA Boot Slide","PA Deep Cross","PA Drag Wheel","PA Slide Y Screen","Spacing Switch","Stick","TE Angle","Zone Split Wk"],
        "Doubles": ["Curl Flats","Double Slants","HB Dive","Inside Zone","PA Boot Comeback","PA Y Glance","Power Alert Bubble","Sluggo Seam","Z Post Y Out","Z-close Corner","Z-close Cross","Z-close Curl"],
        "Doubles Y Off Close": ["Bench Corner Stop","Counter Y","Dragon Spacing","HB Slam","HB Stretch","Inside Zone Split","PA Boot Corner Post","PA Deep Out","RPO Alert X Screen","Stick","Switch","Switch X Comeback"],
        "Doubles Y  Slot Close": ["Bench Corner Stop","Four Verticals","HB Draw","HB Zone Wk","O 1 Trap","Switchx Comeback"],
        "Spread": ["All Go","Bubble Screen","Comebacks","Curl Flats","Flanker Dig","HB Dive","HB Draw","HB Slip Screen","Hitch Corners","Inside Cross","MTN 60 Go","MTN 61x Choice","MTN HB Draw","O 1 Trap","PA HB Out","PA Slot Crosses","Seam Option","Slant Flats","Slants Middle","Smash Posts","Switch Smash","Wide Zone","Wide Zone Wk","Zone Alert Bubble"],
        "Tight Doubles": ["Bingo Cross","HB Dive","HB Inside Zone","PA Boot","Shallow Cross","Under"],
        "Tight Y Off": ["Bench Switch","HB Dive","HB Zone Wk","Inside Zone Split","Jet Sweep","PA Boot Slide","PA Deep Cross","PA Deep Curls","PA Jet Sweep","PA Post Dig","Stick","Zone Fake Jet"],
        "Tight Y Off Flex": ["Counter Y","HB Zone Wk","Inside Zone Split","Jet Sweep","O 1 Trap","PA Deep Out","PA Jet Sweep","Shallow Cross","Stick Spacing","Under Z Curl","Wide Zone","Zone Fake Jet"],
        "Trey": ["Corner Double In","Curl Combo","HB Dive","HB Stretch","HB Zone Wk","PA Boot","PA Solid Corner","RPO Power Alert Screen","Stick"],
        "Trio": ["Bubble Screen","Drive Wheel","HB Delay","HB Dive","HB Stretch","HB Toss","PA Boot","PA Boot Lt","PA Solid Corner","Slants","Slot Chase","Smash Texas","Spot","Verticals","Zone Weak"],
        "Trips": ["Curl Combo","HB Dive","HB Power O","HB Stretch","HB Zone Wk","Inside Cross","PA Boot","PA Boot Lt","PA Solid Corner","PA Y Glance","Slants","Wroption"],
        "U Off Trips": ["HB Counter Str","HB Misdirection","HB Slam","Inside Zone","Inside Zone Split","PA Boot Slide","PA Dagger U Cross","PA Flood","Slants"],
        "Wing Flex Close": ["Drive Y Corner","Four Verticals","HB Dive","HB Stretch","HB Zone Wk","MTN Jet Sweep","MTN PA Jet Sweep","MTN Zone Fake Jet","PA Cross Country","PA Cross Switch","Smash","Stick"],
        "Wing Pair": ["24 Zone Open","HB Inside Zone","HB Stretch","PA Sprint HB Flat","PA WR Screen","PA X Burst Cross","TE Drive","Vertical HB Out","Y Stick"],
        "Wing Stack": ["Flanker Spot","HB Dive","HB Stretch","HB Zone Wk","Jet Sweep","PA Double In Shot","PA Fork","PA Jet Sweep","Zone Fake Jet"],
        "Wing Tight": ["Counter Wk","HB Dive","HB Inside Zone","HB Smash","Mesh","PA Ctr Waggle","PA Dive","PA Flood","PA Roll Lt","Quick Slant","Sluggo Seam","Stick Nod Vertical"],
        "Wing Tight Left": ["26 Duo","HB Dive","HB Power","Inside Zone","Jet Sweep Wk","PA Boot Slide","PA Jet Sweep","PA Scissors","PA Sprint HB Flat","Stick","Wide Zone","Zone Fake Jet Wk"],
        "Wing Tight Nasty": ["26 Duo","HB Counter Str","HB Inside Zone","HB Smash","PA U-drag Wheel","Stick Spacing"],
        "Wing Tight U": ["Dragon Spacing","HB Counter Str","HB Dive","HB Duo","HB Power O","HB Stretch","Inside Zone Split","MTN HB Power O","MTN HB Stretch","MTN PA Power O","PA Boot Slide","PA Dive","PA Sprint HB Flat","PA U-drag Wheel","Sluggo Spacing","Split Zone Strong","Stick Nod Vertical","TE Attack"],
        "Wing Tight Z": ["Curl Flat Seam","HB Counter U","HB Dive","HB Duo","HB Inside Zone","HB Stretch","PA Counter","PA Y-drag Wheel","Y Stick"],
        "Y Trips": ["Curls","Deep Comebacks","Four Verticals","HB Dive","HB Power O","HB Pump Draw","HB Stretch","HB Zone Wk","O 1 Trap","PA Corner Post","PA Draw Shot","PA Stretch","PA WR In","Salem","Slot Drive","Sluggo Seam","Smash","Stick","X Pivot","Y Trail","Y-seam Curl"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_spread",
    name: "Spread (Alt)",
    style: "Spread",
    formations: {
      "Pistol": {
        "Doubles": ["Four Verticals","HB Slam","HB Zone","Jet Inside Zone","Jet Touch Pass","Jet Touch Pass FK HB","PA Boot","PA Post Shot","Slants"],
        "U Off": ["Curl Flats","HB Dive","HB Slam","HB Stretch","HB Zone Wk","PA Boot Y Drag","PA Deep Cross","PA Shot Gos","Read Option","Slants","TE Cross","Z Spot"]
      },
      "Gun": {
        "Ace Offset": ["Buck Sweep","Corner Strike","Curl Flats","Dagger","Flanker Drive","HB Punch","Inside Zone","Jet Touch Pass","MTN HB Screen","Outside Zone","PA Comeback Seam","PA Read","Quick Slants","Read Option","Z Spot"],
        "Box Offset Wk": ["Curl Flat","HB Angle","HB Draw","HB Slip Screen","Inside Zone","Middle Hi Lo","Outside Zone","PA Read","Read Option","Scat","Slot Trail","Strong Flood","Verticals","Wide Trap","Y Cross Post"],
        "Bunch": ["Bench Pivot","Bunch Trail","Counter Y","Dig Return","Flanker Drive","Flood","HB Base","HB Mid Draw","HB Slip Screen","Mesh Spot","Spacing Switch","Verticals","Y Curl","Z Spot","Z Spot N Go"],
        "Bunch Open": ["Flood","HB Draw","HB Slip Screen","Inside Zone","Levels","PA Slots Over","Read Option","Spacing","X Spot"],
        "Bunch Open Offset": ["Fake Screen Wheel","Flood","HB Draw","Inside Zone","RPO Alert Out","RPO Peek WR Screen","RPO Read Bubble","Sprint Z Spot","Y Trail"],
        "Bunch X Nasty": ["Corner Out Dig","Counter Y","Dbl Post HB Corner","Drive Y Corner","HB Base","Inside Zone","Mesh HB Sneak","Mesh Spot","Mesh Traffic","MTN Clear HB Seam","MTN Corner Under","MTN Cross Post","MTN HB Choice","MTN Outside Zone","MTN Return Mesh Flat","MTN Return Spot X-post","MTN Return Trail Corner","MTN RPO Zone Alert","MTN Spot HB Under","MTN Y Corner Under","Smash Return","Spacing Switch","Y Flat Goalline","Y Option Pivot","Z Mesh Goalline","Z Spot","Z Spot Goalline"],
        "Dbls Y  Flex Offset": ["Angle Smash","Curl Combo","Fork Wheel","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","O 1 Trap","Outside Zone","PA Read","Read Option","RPO Read Dbl Screen","Weak Flood","Y Shallow Cross","Z Spot"],
        "Double Stack": ["Curl Flat","Four Verticals","HB Slip Screen","PA Jailbreak Screen","RPO Alert Screen","RPO Alert Trap","RPO Read Fl Screen","Smash","Stack Out"],
        "Doubles Offset": ["Angle Smash","Buck Sweep","Counter Trey","Curl Combo","Double Slants","Drag Under","Fake Screen Wheel","Fl Spot","Flanker Drive","Four Verticals","HB Draw","HB Punch","HB Slip Screen","Inside Zone","Jet Pass FK Zone","Outside Zone","PA Comeback Seam","PA Jet Sweep","PA Read","Read Option","RPO X Smoke","Shark HB Wheel","Slot Outs","Smash Pivot","Spot Dbl Slant","X Dagger","Zone Fake Jet"],
        "Doubles Offset Wk": ["Curl Combo","Fake Screen Wheel","Four Verticals","H Shallow Cross","HB Draw","HB Slip Screen","MTN Y Curl Combo","MTN Y Shovel","MTN Z Spot","O 1 Trap","Orbit Inside Zone","Orbit PA X Spot","PA Bubble Y Over","PA Dagger","PA Jailbreak Screen","RPO Alert Bubble","RPO Peek Orbit Bubble","RPO Peek Slant","RPO Power Peek Slant","RPO Read Bubble","Sail","Se","Slants","Switch"],
        "Empty Base Flex": ["Jailbreak Slot Screen","Levels Switch","Middle Hi Lo","QB Draw","Stick","Strong Curl","Verticals","Y Corner","Y Shallow Cross"],
        "Monster": ["FK WR Screen","Pawheels","RPO Zone Alert"],
        "Normal Y Off": ["45 Quick Base","Corner Strike","Curl Flats","Dbl Dig","Four Verticals","HB Slip Screen","Jet Pass FK Zone","Jet Touch Pass","Midline Read Opt","MTN HB Swing","MTN Spot Wheel","MTN Y Screen","PA Jet Sweep","PA Read","Read Option","RPO Alert Fl Screen","RPO Peek Slant","Slants","Strong Flood","Y Shallow Cross","Zone Fake Jet"],
        "Split Slot Offset": ["Fl Drag","HB Cross Screen","HB Off Tackle","MTN Inside Zone Wk","MTN PA Double Posts","MTN PA Stutter Go","MTN RPO Peek Swing Wk","MTN Slot Cross","MTN Spot","MTN Tr Opt","RPO Peek Zone Bubble","Shakes","Slants Middle","Speed Option","Under"],
        "Spread Flex": ["617","Four Verticals","HB Slip Screen","Jet Touch Pass","Mesh","Outside Zone","PA Deep Outs","RPO Read Screen","Slot Flags","Smash Corners","Y Corner","Y Cross","Y Shallow Cross","Y Stick","Z Shallow Cross"],
        "Spread HB Wk": ["Cake Read Option","Corner Strike","Flanker Dig","Four Verticals","H Shallow Cross","HB Base","HB Counter","HB Mid Draw","HB Slip Screen","Hitch Seam","Inside Zone","Outside Zone","PA Bubble Y Over","PA Dagger","PA Read","Quick Slants","Read Option","RPO Peek Slant","RPO Read Bubble","RPO Read WR Screen","Smash Corners"],
        "Stack Y Off": ["Corner Strike","Curl Flats","Fake Jet HB Seam","Fake Jet Pass Power","HB Slip Screen","Jet Pass FK Zone","Jet Touch Pass","Levels","PA Jet Sweep","Trap Alert Omaha","Zone Alert Omaha","Zone Fake Jet"],
        "Tackle Over": ["Fake Screen Wheel","HB Punch","HB Slip Screen","Inside Zone","O 1 Trap","Read Option","RPO Alert Bubble","RPO Alert X Z Smoke","Sprint Out Smash"],
        "Tackle Over Trips": ["Fake Screen Wheel","HB Power O","HB Slip Screen","Inside Zone","Outside Zone","PA Read","Read Option","RPO Peeky Pop","RPO Read X Smoke"],
        "Tight Doubles": ["Bench","Cross Wheels","Dbl Stick","Flood Drive","HB Draw","HB Quick Base","HB Slip Screen","MTN Bunch Option","MTN Cross HB Sneak","MTN FK Cross","PA Deep Curls","PA WR Cross","Shot Fade Cross","Tight Curl","Z Spot"],
        "Tight Slot Open": ["Bench","Bench Switch","Dbl Hook Wheel","HB Draw","HB Quick Base","PA Read","RPO Peek Slant","Stick Spacing","Wheel Switch"],
        "Trey Open Offset": ["5 6 Trap","Counter","Fl Dig","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","Levels Switch","MTN HB Swing","MTN Inside Cross","MTN Z Spot","Outside Zone","PA Read","Read Option","RPO Peek Slant","Strong Curl","Strong Flood","Trail Shake","Y Corner","Y Cross Flood","Y Stick"],
        "Trio Offset": ["Buck Sweep","Fake Screen Wheel","Flanker Dig","Flood","HB Draw","HB Slip Screen","Inside Zone","Levels Sail","Outside Zone","PA Post Shot","Power O","Read Option","RPO Alert Bubble","RPO Alert WR Screen","Scat","Stick","TE In","Verticals"],
        "Trio Offset Wk": ["Curl Flat","Fake Screen Wheel","HB Draw","Inside Zone","Middle Slant","Outside Zone","PA Flanker Spot","PA Flood","Read Option","RPO Read Bubble","RPO Read WR Screen","Verticals"],
        "Trips TE": ["China Y Post","Curl Flat","Deep In","Drive Post","HB Counter","HB Slip Screen","Inside Cross","Inside Zone","MTN Bench","MTN Return Levels","MTN Z Spot","Orbit Cross Screen","Orbit PA HB Wheel","Orbit RPO Alert Screen","PA Boot Shot","PA Counter Go","QB Strong Power","QB Zone","Read Option","RPO Alert Bubble","Shallow X Dig","Shuffle MTN FK Screen Wheel","Shuffle MTN HB Swing","Shuffle MTN Levels","Slot Quick Flat","Verticals","WR Short Post"],
        "Wing Slot Offset": ["Double Cross","Double Pivot","Four Verticals","HB Punch","Inside Zone","Jet Pass FK Zone","Mesh Sit","O 1 Trap","Ohio Spacing","PA Double Post","PA Jailbreak Screen","PA Jet Sweep","Slants Y Stick","Stick Nod Vertical","Zone Fake Jet"],
        "Wing Slot Wk": ["Four Verticals","HB Slip Screen","Inside Zone","PA Dagger","Power Alert Bubble","Power Alert Glance","RPO Alert Bubble","RPO Peek Post","RPO Power Peek Slant","RPO Read Bubble","RPO Sweep Peek","Slants"],
        "Wing Tight": ["HB Punch","Inside Zone","Jet Touch Pass","Mesh Sit","O 1 Trap","Ohio Spacing","PA Double Post","Sluggo Seam","Stick Nod Vertical"],
        "Y Off Trips": ["Counter Y","Curls","Fake Screen Wheel","Four Verticals","HB Draw","Inside Zone","MTN Inside Zone Split","MTN PA Slide","MTN Stick","MTN Stick N Nod","MTN Y Lead Read Opt","MTN Y Screen","O 1 Trap","Outside Zone","PA Zone Shot","Puuo","Read Option","RPO Bubble Y Pop","RPO Glance Post","RPO Read WR Screen","RPO Read Y Flat","Slant 2 Buc","Slants","Strong Flood"],
        "Y Off Trips Wk": ["Counter Y","Curls","Four Verticals","HB Slip Screen","Hi Lo Dig","Inside Zone Split","MTN HB Swing","MTN Pump And Go","MTN Z Spot","Outside Zone","PA Slide","Post N Cross","Stick","Strong Flood","Y Lead Read Option"],
        "Y  Trips Offset": ["Comebacks","Counter Trey","Curls","Duo","Fake Bubble Go","Fake Screen Wheel","Four Verticals","HB Dive","HB Slip Screen","Inside Zone","Levels Switch","Outside Zone","PA Read Smash","PA Zone Shot","Power O","RPO Bubble Y Pop","RPO Glance Post","RPO Read WR Screen","RPO Read Y Flat","Slant 2 Buc","Slot Drive","Speed Option","Stick","Y Corner"],
        "Y  Trips Offset Wk": ["Comebacks","Four Verticals","HB Angle","HB Draw","HB Slip Screen","Inside Zone","MTN HB Swing","MTN Pump And Go","MTN Z Spot","Outside Zone","PA Read","PA Shot","Read Option","Sluggo Seam","Stick"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_spread_classic",
    name: "Spread Classic (Alt)",
    style: "Spread Classic",
    formations: {
      "Pistol": {
        "Spread": ["All Go","Fade Smash","HB Dive","HB Stretch","PA Boot","PA Wheelie Curls","PA Wheelies","Quick Slants","Quick Slot Out","Read Option","RPO Alert Dive Hitches","RPO Alert Dive Out","Slot Outside","Zone Alert Bubble","Zone Alert X Smoke"],
        "Y Off Trips": ["Counter Y","Curls","HB Split Dive","HB Wide Zone Wk","HB Zone","Inside Zone Split","PA Boot Rt","PA Boot Slide","PA Counter Y Screen","PA Scissors","PA Slot Seam","Rollout Flood","RPO Alert Bubble","RPO Alert Slant","Wide Zone"]
      },
      "Gun": {
        "Bunch Quads Open": ["All Curl","All Go","HB Screen","MTN Drag Under","MTN Slot Mid Screen","MTN Swing Screen"],
        "Deuce": ["Counter Y","Double Go","Exit PA Wheel","Exit RPO Peek Snag","Exit RPO Ready Flat","Inside Zone","Inside Zone Split","Mesh Spot","PA Slide","PA Y Leak","RPO Read Snag","Shallow Cross"],
        "Deuce Close": ["Bench Swap","Both Stick","Counter Y","Inside Zone Split","Mesh Spot","Outside Zone","PA Deep Cross","PA Deep Curls","PA Deep Out","PA Over Whip Out","PA Slide","PA Y Leak","Post Wheel","RPO Alert Omaha","RPO Peek Stick","RPO Read Flat Wheel","RPO Ready Jab Flat","RPO Split Peek Stick"],
        "Double Stack": ["All Go","Fake Screen Go","PA Jailbreak Screen","RPO Alert Screen","RPO Alert Trap","Smoke N Go"],
        "Doubles Offset Wk": ["Four Verticals Option","Orbit Fake Screen Wheel","Orbit Inside Zone","Orbit PA X Spot","Outside Zone","PA Bubble Y Over","PA Dagger","PA Jailbreak Screen","PA Read","RPO Alert Bubble","RPO Alert Power Bubble","RPO Glance Bubble","RPO Glance Post","RPO Peek Buck Slant","RPO Peek Orbit Bubble","RPO Peek Orbit Slant","RPO Peek Orbit Swing","RPO Power Peek Slant","Sail","Ss","Switch"],
        "Doubles Y Off": ["All Go","Angle Curls","Counter Y","Crossers","Curl Combo","Fake Jet HB Wheel","HB Slip Screen","Inside Zone","Jet Touch Pass","MTN HB Base","MTN HB Swing","MTN PA Wheel","MTN PA Y Screen","MTN Sail","MTN Stick","O 1 Trap","PA Go Slot Cross","PA Z Cross","Read Option","RPO Bubble","RPO Peek Slant","Slants","Vert Comebacks","Zone Fake Jet"],
        "Doubles Y Off Wk": ["All Go","Counter Y","Curl Flat","Double Post","Double Slants","HB Draw","HB Slip Screen","Inside Zone Split","Lead Read Option","MTN HB Angle Screen","MTN HB Swing","MTN Lead Swing Spot","Orbit Inside Zone Split","Orbit PA Shot","Orbit RPO Read Y Flat","PA Jailbreak Screen","PA Read","PA Slide","RPO Alert Bubble","RPO Glance Post","RPO Glance Slant","RPO Peek Slant","Slants","X Dagger"],
        "Duo": ["Double Snag","HB Punch","HB Slip Screen","Inside Zone","Jet HB Punch","Jet PA HB Seam","Jet Touch Pass","Levels HB Wheel","PA Rollout","PA Scissors","PA Wheelies","RPO Alert Bubble","RPO Alert HB Flat","RPO Alert Slant","Slot Cross","Slot Post","Speed Option","X Dig"],
        "Duo Slot Open": ["HB Swing","Inside Zone","Levels","Load Option","PA Comebacks","PA Fin","PA Flood","PA Rollout","PA Rollout Out-n-up","PA Rollout Smash","PA Slot Post","RPO Alert Bubble","RPO Alert Hitches","RPO Alert Spot Wheel","RPO Read HB Flat","Spot Lead Swing","Sprint Out Flood","Triple Option Rt"],
        "Empty Base Trio": ["Bubble Screen","Curl Combo","Deep Attack","Divide Double In","Double Slant Stick","Drag Slot Fade","Hitches Slot In","Hoss Juke","QB Draw","Shock Levels","Shock Slot Option","Slants","Slot Fade Cross","Stick Nod","Verticals H Option"],
        "Normal Flex Close": ["MTN HB Cross Screen","MTN PA Cross","MTN Slot Corner","RPO Alert Bubble","RPO Alert MTN Bubble","RPO Buck Alert Bubble"],
        "Spread Flex": ["All Go","Deep Attack","HB Draw","HB Slip Screen","Inside Cross","Inside Zone","Jet Pass FK Zone","Jet Touch Pass","Outside Zone","PA Deep Outs","PA Dig","PA Jet Sweep","PA Read","Quick Slants","Slot Flags","Smash Corners","Speed Option","WR Mid Screen"],
        "Spread HB Wk": ["All Go","Cake Read Option","Corner Strike","Flanker Dig","H Shallow Cross","HB Base","HB Counter","HB Mid Draw","HB Slip Screen","Inside Zone","Outside Zone","PA Bubble Y Over","PA Dagger","PA Read","Quick Slants","Read Option","RPO Peek Slant","RPO Power Peek","RPO Read Bubble","RPO Read WR Screen","Wheelies"],
        "Spread Y  Flex": ["All Go","All Hitch","Drive","HB Quick Base","Inside Zone","MTN FK Swing Wheel","MTN HB Swing","MTN TE Mid Screen","RPO Peek Slant","WR Screen","Y Cross","Y Sail"],
        "Stack HB Wk": ["Bench Switch","Curl Flat","Curl Switch","Fade Out","HB Slip Screen","PA Jailbreak Screen","RPO Alert Power","RPO Alert Screen","Toss Wk"],
        "Stack Y  Flex": ["Corner Strike","Curl Combo","Double Corner","HB Draw","HB Quick Base","HB Slip Screen","Inside Zone","Levels","Outside Zone","PA Jailbreak Screen","Salem Pivot","Y-sail"],
        "Trio 4wr Str": ["All Go","China N Go","Dagger","Dbl Corner Switch","Fake Screen Wheel","Flood Delay","HB Draw","HB Slip Screen","Inside Zone","Read Option","RPO Alert Screen","RPO Read Bubble","Short Posts","Slants","Sprint Z Spot"],
        "Trio Offset Wk": ["Curl Flat","Fake Screen Wheel","Flood","HB Draw","HB Slip Screen","Inside Zone","Middle Slant","Outside Zone","PA Flanker Spot","PA Flood","QB Slot Option","RPO Peek Post","RPO Read Bubble","RPO Read WR Screen","Verticals"],
        "Trips": ["All Go","Bubble Screen","Curl Post Wheel","Fake Screen Wheel","Fl Dig","HB Mid Draw","HB Slip Screen","HB Sweep","HB Swing","Inside Zone","Levels","PA Middle","PA WR In","RPO Alert Screen","RPO Base Alert Bubble","RPO Read Screen","RPO Zone Stick","Sail","Slot Drive","Stick","Z Spot"],
        "Trips HB Wk": ["HB Direct","HB Off Tackle","HB Slip Screen","Inside Zone","PA WR In","QB Blast","Quick Slants","Read Option","RPO Alert Bubble","Shock H Option","Slot Hitch","Smash","Spacing","Stick","Strong Flood","Trips Cross","Verticals","WR Mid Screen"],
        "Wing": ["HB Angle","Inside Zone","PA Fork","Read Option","Slot 2 Buc","Speed Option","Stick","TE Attack","Y Drive Clown"],
        "Wing Slot Offset": ["All Go","Dragon Spacing","Drive","Inside Zone","Mesh Spot","MTN Counter","MTN Inside Zone Split","MTN PA Slide","PA Double Post","PA Read","Power O","QB Power","QB Zone","Read Option","RPO Alert Bubble","RPO Zone Alert Hitches","Spot Option","Stick Nod Vertical"],
        "Wing Trips Wk": ["619 Sail","All Go","Counter Y","HB Base","HB Slip Screen","Inside Zone Split","MTN Cross Z Poco","MTN Dash Hitch Over","MTN HB Off Tackle","PA Read","PA Y Wheel","Quads Cross Y Delay","Quads Drive","Quads Sprint Spot","RPO Alert Out","Slot Cross","Stick","Switch Comeback","Switch Z Curl","Y Lead Read Option","Z Spot"],
        "Y Off Trips": ["All Curl","All Go","Counter Y","Curls","Duo","HB Dive","HB Slip Screen","HB Swing Screen","HB Zone Toss","Inside Zone","Lead Swing All Curl","MTN Inside Zone Split","MTN PA Slide","MTN Y Lead Read Opt","O 1 Trap","Outside Zone","PA Double Post","PA Read Smash","Slants","Sprint Flood","Stick"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_two_back",
    name: "Two Back (Alt)",
    style: "Two Back",
    formations: {
      "I Form": {
        "Close": ["95 Mike","Dbl Outs","HB Iso","HB Stretch","PA Boot Flow","PA Deep Cross Go","PA Deep Read","PA Spider Mesh","PA TE Leak","Power O","Stutter Gos","Zone Toss"],
        "H Pro": ["Curls","HB Counter Wk","HB Stretch","Inside Zone","PA Scissors","Slants"],
        "Pro": ["Alert Zlookie","Curls","FB Dive Fake HB","FB Fake HB Flip","HB Counter Str","Iso","PA Comeback Slide","PA Power O","PA WR In","PA X Dig","Power O","Quick Slants","Stretch Alert X Smoke","Texas","X Post"],
        "Slot": ["95 Willie","Dagger","FB Dive Strong","FB Flare","HB Blast","HB Counter","HB Lead Dive","HB Power O","HB Stretch Alert Bubble","HB Toss","PA Boot Comeback","PA Ctr Waggle","PA Flood","PA Power O","PA Shot Post"],
        "Slot Close": ["94 Will","HB Blast","HB Lead Dive","HB Stretch","Jet Sweep","PA Jet Sweep","PA Shot Post","PA Spot","PA Sprint HB Flat","PA Switch Dig","Spacing","Zone Fake Jet"],
        "Slot Flex": ["94 Will","95 Mike","Dive Alert Smoke","PA Dagger","PA FB Flat","Slants"],
        "Slot Stack": ["94 Will","HB Blast","HB Iso","PA Dagger","Spacing","Stretch"],
        "Tight": ["Goal Line Fade","HB Blast","HB Counter","HB Duo","HB Stretch","Iso","PA Boot","PA Power O","PA Sprint HB Flat","PA TE Corner","Power O","Z Slant"],
        "Wing": ["FB Dive","FB Fake HB Toss","HB Lead","HB Power O","HB Stretch","HB Zone Toss","MTN Power","MTN Zone","PA Boot Flow","Pau Slide","Stretch Alert Lookie","X Slant"],
        "Y Off": ["95 Mike","95 Willie","Double Dig","HB Stretch","Inside Zone","PA Cross","PA Fl Hitch","PA X Dig","Quick Slants"],
        "Y Off Close": ["Double Dig","HB Counter Wk","HB Iso","HB Stretch","HB Zone Toss","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Deep Read","PA Pylon Sail","PA X Deep Out","Zone Wk"]
      },
      "Strong": {
        "Close": ["Double Post","FB Dive","HB Off Tackle","HB Zone Toss","PA Scissors","PA Slide"],
        "Close Flex": ["Counter Weak","Drive","FB Dive","HB Slip Screen","HB Stretch","Mills","PA Boot Slide","PA Lead Draw Shot","PA Sprint HB Flat"],
        "H Close Off": ["HB Blunt Dive","HB Stretch","PA Slide","TE Option","Wrgos","X-corner"],
        "H Slot": ["Counter Weak","Dagger","HB Dive","HB Stretch","Inside Zone Wk","PA Boot Slide","PA FB Flat","PA Post Shot","Power O"],
        "H Tight Close": ["Counter Weak","HB Blunt Dive","HB Misdirection","PA Power O","PA Slide","Power O","Stutter Gos","Y Trail","Zone Wk"],
        "Jumbo": ["FB Dive","HB Dive","Inside Zone Wk","PA Spot","PA Sprint HB Flat","Power O"],
        "Slot": ["Counter Weak","Double Slant","HB Power O","HB Stretch","Inside Zone Wk","Lead Draw","Mills","PA Boot Slide","PA Power O"],
        "Slot Flex": ["China Special","Counter Weak","Curl Flat","Double Slant","Flanker Dig","HB Dive","HB Lead Draw","HB Slip Screen","HB Toss","Inside Zone Split","PA Boot Slide","PA Post Shot","PA Power O","Power O","Stretch Alert Smoke"],
        "Wing": ["FB Dive","HB Counter Wk","HB Dive","HB Stretch","MTN Power O","MTN Zone Wk","PA MTN Power","PA Slide","PA Sprint HB Flat"],
        "Y Off Close": ["Counter Weak","HB Blast","HB Stretch","MTN Counter Solid","MTN Flood","MTN PA Counter","PA Boot X Shot","PA Scissors","TE Option"],
        "Z Close": ["Counter Weak","End Around","Fake End Around","Flanker Drive","HB Dive","HB Duo Alert X Lookie","PA Post Dig","PA Power O","PA Sail","PA Sprint HB Flat","PA WR In","Slant Spacing"]
      },
      "Weak": {
        "Close": ["94 Will","Bench Switch","FB Power","HB Zone Wk","Mesh","PA Boot Lt","PA Boot Slide","PA Post Shot","Stick"],
        "Close Flex": ["94 Will","Bench Flat","Drive","HB Dive","Inside Zone","Mesh","PA Boot Shot","PA Spot","Spacing"],
        "H Wing": ["HB Gut","HB Power O","PA Boot","PA Power O","Strong Stretch","X Slant"],
        "Pro": ["94 Will","Counter F","Curl Combo","HB Gut","PA Boot","PA Boot Lt","PA F Slide","Skinny Posts","Slants"],
        "Slot": ["Bubble Screen","HB Blast","HB Lead","HB Option","HB Slip Screen","PA Boot Slide","PA Deep Threats","PA Flood","PA Slot In","Read FB Flat","Slants","X Dig"],
        "Slot Close": ["94 Will","HB Dive","Inside Zone Split","Mesh","PA Boot Slide","PA Flood"],
        "Z Close": ["Counter F","FB Dive","HB Gut","PA Cntr Shot Post","Slant Spacing","Z Curl"]
      },
      "Other": {
        "Split Backs 3wr": ["Curls Read Special","FB Belly","Off Tackle","PA Slide","Portland X-option","Slants","Slot Zout","WR Corners","WR Hook Outs"],
        "Split Backs Pro": ["Backs Cross","Curl Flat","Double Comeback","FB Belly","Fl Drive","HB Draw","HB Mid Zone","HB Off Tackle","HB Slip Screen","PA Post Dig","PA Slide","Power O","Quick Outs","Slants","Spacing","Tesail F Flat","Texas","Z Spot"],
        "Split Backs Slot": ["China Special","Curl Flat","Dagger","Deep Comeback","Double Slant","FB Belly","FB Dive HB Motion","HB Inside","HB Slip Screen","PA Slide","Shallow Cross","Smash Swing","Sprint Out","Texas","Y Stick Lion"],
        "Near Close Flex": ["FB Dive","FB Dive Weak","Flanker Drive","HB Inside","MTN Stick","MTN Stick N Nod","PA Read Special","Post Drag","Smash","Spacing","Texas"],
        "Near Pro": ["Double Comeback","FB Dive Strong","Fl Drive","Hank","HB Inside","O 1 Trap","Omaha","PA Strong Flow","Slants","Spacing","Texas","Z Spot"],
        "Far Pro": ["Double Comeback","FB Dive","Hank","HB Dive","HB Slip Screen","Inside Cross","Omaha","Slants","Y Post"],
        "Far Tight Slot": ["Bench Switch","Curl Drag","Curls","FB Dive","Flats","HB Dive","Mesh","X Spot","Z Cornerx Cross"]
      },
      "Pistol": {
        "Strong": ["Asa F Flat","F Lead Read Option","HB Counter","HB Off Tackle","HB Power O","HB Slip Screen","HB Stretch","Inside Zone Split","PA Boot Lt","PA Corner HB Slip","PA Flood","Slants","Tr Opt Switch","Tr Option Slip","X Post"],
        "Weak Slot": ["Counter Str","Dig Wheel","HB Dive","HB Slam","Lead Read Option","PA Boot","PA Seams","Read Option","Roll Out Smash","Slants","Smash Y-corner","X Dig"]
      },
      "Gun": {
        "Split Close": ["Dbl Ins","Dig Slot Out","Double Swirl","FB Inside","HB Choice","HB Power O","HB Rail","HB Slip Screen","HB Wheel","Mesh","MTN FB Cross Screen","MTN HB Swing","MTN Y-flood","PA F Slide","Read Option","Scat","Swirl Curls","Triple Option Lt","WR Corner","WR Corners","Z Spot"],
        "Split Pro Offset Wk": ["HB Power O","HB Slip Screen","PA F Slide","Read Option","Slot Cross","X Dig"],
        "Split Slot": ["689 Hook","Backs Cross","Corner Strike","Curl Combo","Dbl Ins","FB Inside","Flood","HB Draw","HB Off Tackle","HB Slip Screen","PA F Slide","PA Wheel Switch","Power O","Slants","Slot Flood"],
        "Split Slot Offset": ["Fl Drag","Flood","HB Cross Buck","HB Off Tackle","HB Slip Screen","Inside Zone Lt","MTN FB Cross Screen","MTN RPO Peek Stick","MTN RPO Peek Swing","MTN RPO Swing QB Draw","MTN Slot Cross","MTN Spot","MTN Triple Option Rt","MTN Y Cross","MTN Y Stick","PA Deep Cross","Shakes","Triple Option Lt"],
        "Split Twins": ["Corners","HB Off Tackle","Inside Zone Split","PA F Slide","Post HB Corner","Texas"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      }
    }
  },
  {
    id: "alt_west_coast",
    name: "West Coast (Alt)",
    style: "West Coast",
    formations: {
      "Singleback": {
        "Ace": ["Ace TE Drag","Counter Wk","Curl Flats","Flanker Drive","HB Dive","HB Off Tackle","HB Smash","Inside Cross","PA Ctr Waggle","PA Deep In","PA Rollrt","PA Stretch","Quick Slants","Stretch Alert X Smoke","X Post","Y Shallow Cross","Z Spot","Zone Wk Alert Z Smoke"],
        "Bunch Ace": ["Crack Toss","Divide","Drive","End Around Lead","Fl Drive","Four Verticals","HB Slash FK End Arnd","Inside Zone","Inside Zone Split","PA Boot Slide","PA End Around","PA Fork Shot","Spacing","Stick","Z Spot"],
        "Doubles Flex": ["Curl Flats","Double Outs","Flanker Drive","Four Verticals","HB Dive","HB Draw","HB Slam","HB Slip Screen","PA Dbl Posts","PA Deep In","PA HB Curl","Power O","Slants","Slot Post","Stretch","TE Post","Y Shallow Cross","Z Spot"],
        "Doubles North": ["Bench Switch","Curl Drag","HB Ace Power","HB Pitch","Jet Sweep","PA Jet Sweep","PA Rollout","Slot Corner","Stick","WR Corner","X Option","Zone Fake Jet"],
        "Doubles Y Open": ["Bubble Screen","Four Verticals","HB Dive","HB Draw","HB Slip Screen","Inside Cross","MTN Stick N Nod","MTN Ystick","PA Slot Crosses","QB Draw","Slants","Y Cross Flood"],
        "East": ["Counter U","Dig Hi Lo","HB Dive","HB Wham","Inside Zone Split","PA Boot Slide","PA Flood","Quick Pitch","Stick","TE Angle","Verticals X Cross","Z Spot"],
        "Spread": ["949 Yara","Curl Flats","Deep Outs","Double Post","Four Verticals","HB Cutback","HB Draw","HB Slip Screen","Inside Cross","PA Slot Crosses","Slant Flats","Slot Options","Slot Pivot","Smash Corners","Zone Alert Bubble"],
        "Wing Slot": ["Dagger","HB Duo","PA Boot Lt","PA WR Fork","PA Y-drag Wheel","U Drive Check","X Return","Y Stick","Zone Weak"],
        "Y Trips": ["Curls","Double China","Four Verticals","HB Counter","HB Draw","HB Plunge","HB Slip Screen","Inside Zone","Levels Switch","PA Ctr Waggle","PA Read","PA WR In","Slot Drive","Sluggo Seam","Smash","Square Out","Stick","Zone Wk Alert Bubble"]
      },
      "I Form": {
        "Pro": ["Bench","Curls","FB Dive Strong","FB Fake HB Flip","HB Blast","HB Counter Wk","HB Slip Screen","Inside Zone","Iso","Mesh","PA Boot","PA Scissors","PA WR In","Quick Slants","Sluggos","Stretch Alert X Smoke","Texas","Z Spot"],
        "Slot": ["Dagger","Double Slant","HB Blast","HB Dive Alert Bubble","HB Lead Draw","HB Slip Screen","HB Stretch","PA Boot Comeback","PA Cross F Wheel","PA Post Shot","PA Y Throwback","Post Wheel","Saily Shake","Stretch Alert Bubble","Weak Flood"],
        "Wing": ["HB Power O","Iso","PA Boot Flow","PA Clearout","PA Power O","PA TE Leak","Stretch Alert X Lookie","TE Post","Weak Iso","WR Corner","X Slant","X Sluggo"]
      },
      "Strong": {
        "Close": ["Counter Weak","End Around","Fl Drive","HB Dive","HB Off Tackle","HB Slash FK End Arnd","HB Zone Wk","Inside Post","Mesh","PA Deep Cross","PA End Around","PA Scissors","PA Shot","PA WR Curls","Quick Toss","Stutter Gos","WR Out","Y Trail"],
        "Pro": ["Asa F Flat","Blast Alert X Smoke","Dbl Pump N Gos","Double Gos","HB Lead Draw","HB Slip Screen","L MTN Cir Wk","PA Pound Draw Pass","PA Slide","PA WR In","Slants","Spacing","Stick","Stretch Alert X Lookie","Y-post","Z MTN F-flat","Z MTN F-trail","Z Spot"],
        "Slot": ["Bubble Screen","China Special","Counter Weak","Curl Flat","Dagger","Double Slant","HB Dive","HB Draw","HB Slip Screen","Inside Zone Split","Mills","PA FB Slide","PA Lead Draw Shot","PA Post Shot","Stretch Alert Bubble"]
      },
      "Weak": {
        "Close": ["Bench Switch","FB Dive","HB Gut","Inside Zone","Mesh","PA Boot Lt","PA Boot Slide","PA Post Shot","Stick"],
        "Slot Flex": ["Dagger","HB Gut","HB Slip Screen","PA Boot Lt","PA X Curl","Slants","Slot Drag","Slot TE Cross","Stretch","TE Corner","WR In","X Curl FB Flat"]
      },
      "Gun": {
        "Bunch": ["Corner Strike","Counter Y","Deep Attack","Deep Corner","HB Mid Draw","HB Sweep","Inside Cross","Mesh Post","Mesh Spot","PA Slot Post","Spacing","Stick","Verticals","WR Post","Z Spot"],
        "Doubles": ["45 Quick Base","Curl Combo","Deep Outs","Double Outs","Fade HB Wheel","Fl Slant","Four Verticals","HB Mid Draw","HB Slip Screen","Inside Zone","PA Read Boot","PA Shot","Skinny Posts","Spot Smash","Y Cross"],
        "Empty Trey": ["Corner Strike","Curl Flats","Dbl Slot Cross","Four Verticals","Slot Drive","Smash","Stick","Strong Flood","WR Screen"],
        "Split Offset": ["689 Hook","FB Inside","HB Screen","Hitch Corner","Mesh","PA Deep Cross","PA F Slide","PA Poco","Power O","Read Option","Shakes","Slants Middle","Slot Cross","WR Curls","Y Shallow Cross"],
        "Spread Dbl Flex": ["Corner Strike","Curl Flats","Four Verticals","HB Mid Draw","HB Quick Base","HB Slip Screen","Hitch Corners","Inside Cross","PA Comebacks","Quick Slants","Slot Outs","Y Shallow Cross"],
        "Tight Slots": ["Bench Swap","Bench Switch","Fl Switch","HB Mid Draw","HB Sweep","Mesh","PA Dbl Stop","PA WR Seam","PA X Clown","Stick","Stick Switch","WR Corners"],
        "Trey Open Offset": ["5 6 Trap","Counter","Fl Dig","Four Verticals","HB Draw","HB Slip Screen","Inside Zone","Levels Switch","Outside Zone","PA Read","Read Option","RPO Peek Slant","Stick","Strong Curl","Strong Flood","Trail Shake","Y Corner","Y Cross Flood"]
      },
      "Goal Line": {
        "Normal": ["FB Dive Weak","HB Dive","HB Sting","PA Power O","PA Spot","PA Waggle","Power O","QB Sneak","Strong Toss"]
      },
      "Hail Mary": {
        "Hail Mary": ["Goal Post","Hail Mary","Shot Save Clock"]
      },
      "Other": {
        "Near Close": ["FB Dive","HB Inside","PA Strong Flow","Post Drag","Spacing","Z Spot"],
        "Near Close Flex": ["FB Dive","FB Dive Weak","Flanker Drive","HB Inside","MTN Stick","MTN Stick N Nod","PA Read Special","Post Drag","Smash","Spacing","Texas"],
        "Near Jumbo": ["FB Dive","FB Dive Weak","HB Inside","PA Strong Flow","TE Corner","TE Hitch Out"],
        "Near Pro": ["Double Comeback","FB Dive Strong","Fl Drive","Hank","HB Inside","O 1 Trap","Omaha","PA Strong Flow","Slants","Spacing","Texas","Z Spot"],
        "Near Y Left Slot": ["Curl Flat","FB Dive","FB Dive Weak","Flanker Drive","HB Inside","O 1 Trap","PA Read Special","Post Drag","Rollout Smash","Slants","Smash","Texas"],
        "Far Pro": ["Double Comeback","FB Dive","Hank","HB Dive","HB Slip Screen","Inside Cross","Omaha","Slants","Y Post"],
        "Far Slot": ["China Special","Curl Drag","Curls","Dagger H Spot","Double Slant","FB Dive","HB Dive","HB Slip Screen","Smash Swing"],
        "Far Tight Slot": ["Bench Switch","Curl Drag","Curls","FB Dive","Flats","HB Dive","Mesh","X Spot","Z Corner X Cross"]
      }
    }
  }
];

const DEFENSIVE_PLAYBOOKS = [
  {
    id: "49ers_def",
    name: "San Francisco 49ers",
    formations: {
      "Nickel": {
        "2  4 Load Dbl Mug": ["Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","I Dt Lb Loop","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Load": ["1 Double Wr1","1 Double Wr2","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Over": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","1 Robber Press","Bracket Switch Willie","Cov 3 Buzz Match","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "3  2 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Db Fire 2","Dbl Safety Go","Double Bracket","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Hot Blitz 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Ss Zone Blitz","Tampa 2","Tampa 2 Drop","Zero Blitz"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover Spy","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Pinch","Re"],
        "Pinch": ["Pinch"]
      },
      "3-4": {
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Fs Blitz","Hammer Oblast","Saw Oblast","Tampa 2"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting 1","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammer Oblast","Sam I Sting","Saw Oblast","Ss Blitz 1"],
        "Over Walk": ["Cover 1 Hole","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Mike Will Blitz","Sam Will Blitz","Ss Blitz 1","Ss Blitz 3"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Spy","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fire Man","Sam Blitz 3","Tampa 2"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 1","Fs Fire 3","Hammer 0 Blast","Sam Crash 1","Sam Crash 3","Will Go Fire 3"]
      },
      "5-2": {
        "Normal": ["Cover 1","Cover 3","Dt Loop","Fire Zone 2","Pinch","Trio Sky Zone"]
      },
      "4-2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover Sting","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mike Sam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"],
        "Under": ["1 Fs Fire","1 Slant Crash","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire","Hammer 0 Blast","Mike Sam Crash Press","Safety Blitz","Sam Blitz 2","Tampa 2","Will Go Fire 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "bears_def",
    name: "Chicago Bears",
    formations: {
      "46": {
        "Bear Under": ["Cover 1","Cover 3","Engage Eight","Gap Press","Lb Dogs","Lb Dogs 3"]
      },
      "Nickel": {
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Sammie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2","Z Invert Lurk"],
        "Swap Dbl Mug": ["Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","I Dt Lb Loop","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Sammie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dt Mike Loop 0","Dt Mike Loop 1","Overload 3 Seam","Overload Blitz","Tampa 2","Zero Blitz"]
      },
      "4-3": {
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Pinch Buck 0","Pinch Dog 2 Press","Re","Saw Blitz 1","Ss 2 Trap","Tampa 2"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Cover Contain","Dbl Safety Blitz","Free Fire","Lb Sting 1","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammer 0 Blast","Sam I Sting","Saw Oblast","Ss Blitz 1"],
        "Under": ["1 Contain Press","1 Hole Press","1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Dbl Safety Blitz","Free Fire O","Fs Fire 1","Fs Fire 3","Hammer 0 Blast","Sam Crash 1","Sam Crash 3","Will Go Fire 3"]
      },
      "3-3-5": {
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Re","Sam Mikes Press","Saw Blitz 1","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "bengals_def",
    name: "Cincinnati Bengals",
    formations: {
      "Nickel": {
        "2  4 Swap Dbl Mug": ["Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","I Dt Lb Loop","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Cover 1 Robber","Cover 3 Buzz","Cover 4 Show 2","Lb Blitz 1","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Dbl Mug": ["Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","I Dt Lb Loop","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Sammie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dbl Safety Go","Overload 3 Seam","Overload Blitz","Ss Zone Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck 0","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting 1","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammer 0 Blast","Sam I Sting","Saw Oblast","Ss Blitz 1"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "bills_def",
    name: "Buffalo Bills",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Sammie","Cover 9 Show 2","Cover Contain","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","I Dt Lb Loop","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","I Dt Lb Loop","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Load": ["1 Double Wr1","1 Double Wr2","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Texsim 2","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Invert Hard Flat","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Grizzly": ["1tedge Pinch","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3","Z Invert Strong"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 2 Invert","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Cover Sting","Fs Blitz","Hammer Oblast","Saw Oblast","Tampa 2"],
        "Under": ["1 Robber Press","Al","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck 0","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 1","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck 0","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 1","Fs Fire 3","Hammer Oblast","Sam Crash 1","Sam Crash 3","Will Go Fire 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "broncos_def",
    name: "Denver Broncos",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Load": ["1 Double Wr1","1 Double Wr2","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Invert Hard Flat","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire I","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 1","Fs Fire 3","Hammero Blast","Sam Crash 3","Sam Crashi","Will Go Fire 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "browns_def",
    name: "Cleveland Browns",
    formations: {
      "46": {
        "Bear": ["Ag Mid Blitz","Cover 1","Cover 3","Gap Press O","Lb Blitz 3","Slant Weak O"]
      },
      "Nickel": {
        "3  3 Cub": ["1 Sam Ss Blitz","Cover 1 Robber","Cover 3 Buzz","Cover 4 Show 2","Lb Blitz 1","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dbl Safety Go","Overload 3 Seam","Overload Blitz","Ss Zone Blitz","Tampa 2","Zero Blitz"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 2 Man","Cover 3 Buzz","Cover 4 Quarters","Mike Will Blitz","Sam Blitz 3","Sam Will Blitz","Tampa 2"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Sawo Blast","Ss Blitz"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Spy","Fire Man","Sam Blitz 3","Tampa 2"]
      },
      "5-2": {
        "Normal": ["Cover 1","Cover 3","Dt Loop","Fire Zone 2","Pinch","Trio Sky Zone"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "buccaneers_def",
    name: "Tampa Bay Buccaneers",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Wide Jack": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover I Lb Blitz","Dbl Safety Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss 1 Dog","Mike Ss3 Seam","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Strg Corner 2 Fire","Tampa 2"],
        "2  3 Odd": ["Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 3 Seam","Cover 4 Drop","Cover 6","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 2","Edge Blitz 3","Fs Zone Blitz","Max Sting 3","Okie Eagle 3","Okieroll 2","Overload 3 Seam Press","Ss Zone Blitz","Strg Corner 2 Fire","Tampa 2","Zero Blitz"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Bear": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Hard Flat","Lb Blitz 0","Sam Mike 1","Trio Sky Zone","Will Sam I"],
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Sting","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      },
      "2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Lb Sting I","Mikesam Cross 3","Sim Pressure 3","Tampa 2","Thunder Smoke"]
      }
    }
  },
  {
    id: "cardinals_def",
    name: "Arizona Cardinals",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "3  3 Wide Jack": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover I Lb Blitz","Dbl Safety Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mikess 3 Seam","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "Load Weak": ["Cov 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Seam","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Db Blitz 1","Db Blitz 3","Pinch Blitz","Pinch Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "3-3-5": {
        "3 High Over": ["3 Double Cloud","3 Double Sky","Blitz Dt Pop","Cover 2 Lurk","Cover 2 Match","Cover 3 Match","Cover 4 Quarters","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Lb Blitz 0","Tampa 2"],
        "3 High Penny": ["3 Double Buzz","3 Double Cloud","Cover 2 Lurk","Cover 3 Sky","Cover 4 Drop","Cover 6 Invert","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Mike Blitz 0","Mike Sim 2","Tampa 2"],
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole 1","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "chargers_def",
    name: "Los Angeles Chargers",
    formations: {
      "46": {
        "Normal": ["Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Match","Engage Eight","Fire Zone 3","Inside Blitz","Rush Outside"]
      },
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","I Sam Ss Blitz","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mikess 3 Seam","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "chiefs_def",
    name: "Kansas City Chiefs",
    formations: {
      "46": {
        "Normal": ["Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Match","Engage Eight","Fire Zone 3","Inside Blitz","Rush Outside"]
      },
      "Nickel": {
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Load": ["1 Double Wr1","1 Double Wr2","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Over": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","1 Robber Press","Bracket Switch Willie","Cov 3 Buzz Match","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dt Mike Loop 1","Dt Mike Loop O","Overload 3 Seam","Overload Blitz","Tampa 2","Zero Blitz"]
      },
      "4-3": {
        "Odd": ["Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 6","Lb Dogs","Pinch Zone 4","Strong Slant 3","Tampa 2"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloudstr","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz 1"],
        "Over Walk": ["Cover 1 Hole","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Mike Will Blitz","Sam Will Blitz","Ss Blitz","Ss Blitz 3"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Spy","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fire Man","Sam Blitz 3","Tampa 2"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "3-3-5": {
        "Over Flex": ["Cb Bench Blitz","Cover 1 Lb Blitz","Cover 1 Ss Blitz","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Edge Blitz 0","Hot Blitz 3","Nickel Sim 3","Over 3 Sting","Tampa 2"],
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole 1","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "4-2-5": {
        "Over G": ["Casino Blitz","Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Mike Ss 3","Pinch Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 2","Ws Blitz 3"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mike Sam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "colts_def",
    name: "Indianapolis Colts",
    formations: {
      "Nickel": {
        "3  3 Cub": ["1 Sam Ss Blitz","Cover 1 Robber","Cover 3 Buzz","Cover 4 Show 2","Lb Blitz 1","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Over": ["1 Double Wr1","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cover I Lb Blitz","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Safety Strong 3","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dbl Safety Go","Overload 3 Seam","Overload Blitz","Ss Zone Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 Qqb Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Sawo Blast","Ss Blitz"]
      },
      "4-2-5": {
        "Over G": ["Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Sting","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "commanders_def",
    name: "Washington Commanders",
    formations: {
      "Nickel": {
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "3  3 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 3 Match","Cover 3 Sky","Cover I Lb Blitz","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Hot Blitz 3","Hot Blitz Bail","Lb Cross 3 Show 2","Lb Cross O","Nickel 2 Trap","Overload 3 Press","Pinch 0","Sam Mike 1","Sam Mike 3 Press","Tampa 2","Tampa 2 Drop","Tampa Sim Pressure"],
        "3  3 Over Jack": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Buck Slant 3","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cover I Lb Blitz","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Hot Blitz 3","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "3  3 Wide Jack": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover I Lb Blitz","Dbl Safety Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mike Ss3 Seam","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Show 2","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Covers Sammie","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Even": ["Cov 1 Robber Press","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cross Fire 3","Mike Scrape 3 Press","Pinch Buck O","Tampa 2","Will Fire 3 Seam"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Ed": ["1 Pirate Spy","1 Sting Tex","2 Sim Tex","3 Sim Tex","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Sky","Cover 4 Quarters","Cover 6","Hot Blitz 3","Olb Fire Man","Tampa 2"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite 5 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Fs Fire","Cover 1 Hole Wk","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Tampa 2","Weak Blitz 1","Weak Blitz 3"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 2 Man","Cover 3 Buzz","Cover 4 Quarters","Mike Will Blitz","Sam Blitz 3","Sam Will Blitz","Tampa 2"],
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cross 3 Fire","Pinch Buck O","Pinch Dog 2 Press","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"]
      },
      "3-3-5": {
        "3 High Penny": ["3 Double Buzz","3 Double Cloud","Cover 2 Lurk","Cover 3 Sky","Cover 4 Drop","Cover 6 Invert","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Mike Blitz 0","Mike Sim 2","Tampa 2"]
      },
      "4-2-5": {
        "3 High": ["3 Double Cloud","3 Double Sky","Blitz Dt Pop","Cover 2 Lurk","Cover 2 Match","Cover 3 Match","Cover 4 Quarters","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Lb Blitz 0","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "cowboys_def",
    name: "Dallas Cowboys",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load": ["1 Double Wr1","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Covereg Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","I Sam Ss Blitz","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dbl Safety Go","Overload 3 Seam","Overload Blitz","Ss Zone Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire I","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "3-3-5": {
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole 1","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Lb Sting I","Mike Sam Cross 3","Sim Pressure 3","Tampa 2","Thunder Smoke"]
      }
    }
  },
  {
    id: "dolphins_def",
    name: "Miami Dolphins",
    formations: {
      "Nickel": {
        "3  3 Cub": ["1 Sam Ss Blitz","A","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "3  2 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Db Fire 2","Dbl Safety Go","Double Bracket","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Hot Blitz 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Ss Zone Blitz","Tampa 2","Tampa 2 Drop","Zero Blitz"],
        "Load Weak": ["Cov 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Seam","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Db Blitz 1","Db Blitz 3","Pinch Blitz","Pinch Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 2 Man","Cover 3 Buzz","Cover 4 Quarters","Mike Will Blitz","Sam Blitz 3","Sam Will Blitz","Tampa 2"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloudstr","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz 1"]
      },
      "3-3-5": {
        "Over Flex": ["Cb Bench Blitz","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Cover I Ss Blitz","Double Bracket","Edge Blitz 0","Hot Blitz 3","Nickel Sim 3","Over 3 Sting","Tampa 2"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover Isting","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      },
      "4-2-5": {
        "Over G": ["Casino Blitz","Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Mike Ss 3","Pinch Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 2","Ws Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Lb Sting I","Mikesam Cross 3","Sim Pressure 3","Tampa 2","Thunder Smoke"]
      }
    }
  },
  {
    id: "eagles_def",
    name: "Philadelphia Eagles",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load": ["1 Double Wr1","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["1 Sam Ss Blitz","A","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dbl Safety Go","Overload 3 Seam","Overload Blitz","Ss Zone Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 1","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "3-3-5": {
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole 1","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Lb Sting I","Mikesam Cross 3","Sim Pressure 3","Tampa 2","Thunder Smoke"]
      }
    }
  },
  {
    id: "falcons_def",
    name: "Atlanta Falcons",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover I Lb Blitz","Covereg Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "Normal": ["3 Dbl Mable Cloud","3 Double Buzz","3 Double Mable","Cover 1 Thief","Cover 2 Man Spy","Cover 2 Spy","Cover 3 Mable","Cover 3 Spy","Cover 4 Drop","Db Strike","Fz 2 Deep","Fz 3 Sky","Man Up 3 Deep","Overload 3","Under Smoke"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire I","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "3-3-5": {
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "giants_def",
    name: "New York Giants",
    formations: {
      "46": {
        "Normal": ["Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Match","Engage Eight","Fire Zone 3","Inside Blitz","Rush Outside"]
      },
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load": ["1 Double Wr1","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss 3 Seam","Mike Ss1 Dog","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Odd": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 3 Seam","Cover 4 Drop","Cover 6","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 2","Edge Blitz 3","Fs Zone Blitz","Okie Eagle 3","Okie Roll 2","Overload 3 Seam Press","Ss Zone Blitz","Strg Corner 2 Fire","Tampa 2","Zero Blitz"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dt Mike Loop 1","Dt Mike Loop O","Overload 3 Seam","Overload Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Ed": ["1 Pirate Spy","1 Sting Tex","2 Sim Tex","3 Sim Tex","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Sky","Cover 4 Quarters","Cover 6","Hot Blitz 3","Olb Fire Man","Tampa 2"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Lb Sting I","Mikesam Cross 3","Sim Pressure 3","Tampa 2","Thunder Smoke"]
      }
    }
  },
  {
    id: "jaguars_def",
    name: "Jacksonville Jaguars",
    formations: {
      "46": {
        "Bear Under": ["Cover 1","Cover 3","Engage Eight","Gap Press","Lb Dogs","Lb Dogs 3"]
      },
      "Nickel": {
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "3  3 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "3  2 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Db Fire 2","Dbl Safety Go","Double Bracket","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Hot Blitz 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Ss Zone Blitz","Tampa 2","Tampa 2 Drop","Zero Blitz"],
        "Load Weak": ["Cov 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Seam","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Db Blitz 1","Db Blitz 3","Pinch Blitz","Pinch Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz 1"]
      },
      "3-3-5": {
        "Over Flex": ["Cb Bench Blitz","Cover 1 Lb Blitz","Cover 1 Ss Blitz","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Edge Blitz 0","Hot Blitz 3","Nickel Sim 3","Over 3 Sting","Tampa 2"]
      },
      "4-2-5": {
        "Over G": ["Casino Blitz","Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Mike Ss 3","Pinch Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 2","Ws Blitz 3"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover Isting","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "jets_def",
    name: "New York Jets",
    formations: {
      "Nickel": {
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Sam Ss Blitz 3","Sam Will Blitz 3","Ss","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Over": ["1 Double TE","1 Double Wr1","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Lb Blitz","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Safety Strong 3","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mikess 3 Seam","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Will": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 3 Seam","Cover 4 Drop","Cover 6","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 2","Edge Blitz 3","Fs Zone Blitz","Okie Eagle 3","Okie Roll 2","Overload 3 Seam Press","Ss Zone Blitz","Strg Corner 2 Fire","Tampa 2","Zero Blitz"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dt Mike Loop 1","Dt Mike Loop O","Overload 3 Seam","Overload Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz","Sting Pinch","Trio Sky Zone"],
        "Over Ed": ["1 Pirate Spy","1 Sting Tex","2 Sim Tex","3 Sim Tex","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Sky","Cover 4 Quarters","Cover 6","Hot Blitz 3","Olb Fire Man","Tampa 2"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting 1","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "lions_def",
    name: "Detroit Lions",
    formations: {
      "Nickel": {
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Sam Ss Blitz 3","Sam Will Blitz 3","Ss","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Over": ["1 Double Wr1","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Lb Blitz","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Safety Strong 3","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "3  3 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dt Mike Loop 1","Dt Mike Loop O","Overload 3 Seam","Overload Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Bear": ["Cover 1 Hole","Cover 2 Invert","Covers","Lb Blitz 0","Sam Mike 1","Will Sam I"],
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 3 Buzz","Cover 4 Quarters","Cover Mlb Blitz","Sam Blitz 3","Sam Will Blitz"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Walk": ["Cover 1 Hole","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Mike Will Blitz","Sam Will Blitz","Ss Blitz","Ss Blitz 3"],
        "Tite Leo": ["Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2"],
        "Under": ["1 Contain Press","1 Hole Press","1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Dbl Safety Blitz","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crashi","Will Go Fire 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "packers_def",
    name: "Green Bay Packers",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "3  3 Wide Jack": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Cover I Lb Blitz","Dbl Safety Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mikess 3 Seam","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "Load Weak": ["Cov 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Seam","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Db Blitz 1","Db Blitz 3","Pinch Blitz","Pinch Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Sawo Blast","Tampa 2"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "3-3-5": {
        "3 High Over": ["3 Double Cloud","3 Double Sky","Blitz Dt Pop","Cover 2 Lurk","Cover 2 Match","Cover 3 Match","Cover 4 Quarters","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Lb Blitz 0","Tampa 2"],
        "3 High Penny": ["3 Double Buzz","3 Double Cloud","Cover 2 Lurk","Cover 3 Sky","Cover 4 Drop","Cover 6 Invert","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Mike Blitz 0","Mike Sim 2","Tampa 2"],
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "panthers_def",
    name: "Carolina Panthers",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Hot Blitz 3","Hot Blitz Bail","Lb Cross 3 Show 2","Lb Cross O","Nickel 2 Trap","Overload 3 Press","Pinch 0","Sam Mike 1","Sam Mike 3 Press","Tampa 2","Tampa 2 Drop","Tampa Sim Pressure"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mike Ss3 Seam","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Bear": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Hard Flat","Lb Blitz 0","Sam Mike 1","Trio Sky Zone","Will Sam I"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite Grizzly": ["1 Edge Pinch","2 Invert Strong","Cover 2 Invert","Cover 3","Cover 3 Drop","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire I","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"],
        "Under": ["1 Contain Press","1 Hole Press","1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Dbl Safety Blitz","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "3-3-5": {
        "Over Flex": ["Cb Bench Blitz","Cover 1 Ss Blitz","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Double Bracket","Edge Blitz 0","Hot Blitz 3","Nickel Sim 3","Over 3 Sting","Tampa 2"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "patriots_def",
    name: "New England Patriots",
    formations: {
      "Nickel": {
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Odd Dbl Mug": ["3 Seam Show 2","Bench Blitz 3","Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 4 Drop","Cover 6","Hot Blitz 3","Lb Cross 3 Show 2","Pinch 0","Pinch 2","Sam Mike Loop 1","Sam Mike Loop 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Over": ["1 Double TE","1 Double Wr1","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Lb Blitz","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Safety Strong 3","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "Load Weak": ["Cov 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Seam","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Db Blitz 1","Db Blitz 3","Pinch Blitz","Pinch Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Grizzly": ["1 Edge Pinch","2 Invert Strong","3 Edge Pinch","Cover 2 Invert","Cover 3","Mike Blitz 0","Mike Hot Blitz 3","Mike Sim 2","Tampa 2 Show 3"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Ed": ["1 Pirate Spy","1 Sting Tex","2 Sim Tex","3 Sim Tex","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Sky","Cover 4 Quarters","Cover 6","Hot Blitz 3","Olb Fire Man","Tampa 2"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 2 Man","Cover 3 Buzz","Cover 4 Quarters","Mike Will Blitz","Sam Blitz 3","Sam Will Blitz","Tampa 2"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "5-2": {
        "Normal": ["Cover","Cover 3","Dt Loop","Fire Zone 2","Pinch","Trio Sky Zone"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "raiders_def",
    name: "Las Vegas Raiders",
    formations: {
      "Nickel": {
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "3  3 Wide Jack": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover I Lb Blitz","Dbl Safety Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Odd": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 3 Seam","Cover 4 Drop","Cover 6","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 2","Edge Blitz 3","Fs Zone Blitz","Okie Eagle 3","Okieroll 2","Overload 3 Seam Press","Ss Zone Blitz","Strg Corner 2 Fire","Tampa 2","Zero Blitz"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz","Sting Pinch","Trio Sky Zone"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 2 Man","Cover 3 Buzz","Cover 4 Quarters","Mike Will Blitz","Sam Blitz 3","Sam Will Blitz","Tampa 2"],
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cross 3 Fire","Pinch Buck O","Pinch Dog 2 Press","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over Walk": ["Cover 1 Hole","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Mike Will Blitz","Sam Will Blitz","Ss Blitz","Ss Blitz 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "rams_def",
    name: "Los Angeles Rams",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Show 2","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "Normal": ["3 Dbl Mable Cloud","3 Double Buzz","3 Double Mable","Cover 1 Thief","Cover 2 Man Spy","Cover 2 Spy","Cover 3 Mable","Cover 3 Spy","Cover 4 Drop","Db Strike","Fz 2 Deep","Fz 3 Sky","Man Up 3 Deep","Overload 3","Under Smoke"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Even": ["Cov 1 Robber Press","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cross Fire 3","Mike Scrape 3 Press","Pinch Buck O","Tampa 2","Will Fire 3 Seam"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Under 4 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire I","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "3-3-5": {
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Sting","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "ravens_def",
    name: "Baltimore Ravens",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mikess 3 Seam","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Odd": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 3 Seam","Cover 4 Drop","Cover 6","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 2","Edge Blitz 3","Fs Zone Blitz","Okie Eagle 3","Okie Roll 2","Overload 3 Seam Press","Ss Zone Blitz","Strg Corner 2 Fire","Tampa 2","Zero Blitz"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "Over Load": ["Cover O Blitz","Edge Blitz 2","Heavy 2 Trap","Heavy 3 Zone","Heavy1 Rat","Hot Zone 3"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Sawo Blast","Tampa 2"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cross 3 Fire","Pinch Buck O","Pinch Dog 2 Press","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Under": ["1 Contain Press","1 Hole Press","1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Dbl Safety Blitz","Free Fire O","Fs Fire 1","Fs Fire 3","Hammero Blast","Sam Crash 3","Sam Crashi","Will Go Fire 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "saints_def",
    name: "New Orleans Saints",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load": ["1 Double Wr1","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "2  4 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 3 Match","Cover 3 Sky","Cover I Lb Blitz","Guard Key Sim 2","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mikess 3 Seam","Okie Eagle 3","Okieroll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Sink","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Pounder","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Roll King","Roll Ring","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Dollar": {
        "3  2 Mug": ["Cover 1 Robber Press","Cover 2 Drop","Cover 2 Man","Cover 3 Sky","Cover 4 Drop","Db Fire 2","Dbl Safety Go","Overload 3 Seam","Overload Blitz","Ss Zone Blitz","Tampa 2","Zero Blitz"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz","Sting Pinch","Trio Sky Zone"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "3-3-5": {
        "Penny": ["Corner Blitz 2","Corner Blitz 3","Cover 1 Robber","Cover 3","Cover 3 Buzz","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover Hole 1","Double Bracket","Hot Blitz 3","Mike Blitz 1","Pinch Blitz 0","Sam Mike 3 Press","Saw Blitz 1","Saw Blitz 3","Slot Blitz 3","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "seahawks_def",
    name: "Seattle Seahawks",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Mug": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Cub": ["Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","I Sam Ss Blitz","Mike Blitz 0","Nickel Blitz 3","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2","Wt"],
        "3  3 Odd": ["1 Double Wr1","1 Double Wr2","3 Buzz Mable","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Hot Blitz 3","Hot Blitz Bail","Lb Cross 3 Show 2","Lb Cross O","Nickel 2 Trap","Overload 3 Press","Pinch 0","Sam Mike 1","Sam Mike 3 Press","Tampa 2","Tampa 2 Drop","Tampa Sim Pressure"]
      },
      "Dime": {
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Invert Hard Flat","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Tampa 2"],
        "3  2 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "Over Load": ["Cover Oblitz","Edge Blitz 2","Heavy 1rat","Heavy 2 Trap","Heavy 3 Zone","Hot Zone 3"]
      },
      "3-4": {
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Ed": ["1 Pirate Spy","1 Sting Tex","2 Sim Tex","3 Sim Tex","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Sky","Cover 4 Quarters","Cover 6","Hot Blitz 3","Olb Fire Man","Tampa 2"],
        "Tite 5 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Fs Fire","Cover 1 Hole Wk","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Tampa 2","Weak Blitz 1","Weak Blitz 3"],
        "Under": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 1 QB Spy","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cross 3 Fire","Pinch Buck O","Pinch Dog 2 Press","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Sawo Blast","Ss Blitz"],
        "Under": ["1 Contain Press","1 Hole Press","1 Robber Press","2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Dbl Safety Blitz","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "3-3-5": {
        "Over Flex": ["Cb Bench Blitz","Cover 1 Lb Blitz","Cover 1 Ss Blitz","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Edge Blitz 0","Hot Blitz 3","Nickel Sim 3","Over 3 Sting","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      },
      "2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Lb Sting I","Mikesam Cross 3","Sim Pressure 3","Tampa 2","Thunder Smoke"]
      }
    }
  },
  {
    id: "steelers_def",
    name: "Pittsburgh Steelers",
    formations: {
      "Nickel": {
        "2  4 Dbl Mug": ["2 Invert Hard Flat","Blitz Loop 3","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover I Lb Blitz","Covereg Willie","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "3  3 Over": ["1 Double TE","1 Double Wr1","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Lb Blitz","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Covers Sammie","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Safety Strong","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Triple": ["Cover 1 Lb Blitz","Cover 2 Man","Cover 3 Cloud","Cover 3 Seam","Cover 3 Sky","Cover 6","Hot Blitz 3","Nickel Blitz","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"]
      },
      "Dime": {
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Show 2","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Covers Sammie","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Odd": ["Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 3 Seam","Cover 4 Drop","Cover 6","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 2","Edge Blitz 3","Fs Zone Blitz","Max Sting 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam Press","Ss Zone Blitz","Strg Corner 2 Fire","Tampa 2","Zero Blitz"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Even": ["Cov 1 Robber Press","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cross Fire 3","Mike Scrape 3 Press","Pinch Buck O","Tampa 2","Will Fire 3 Seam"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Tite": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2","Trio Sky Zone"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cross 3 Fire","Pinch Buck O","Pinch Dog 2 Press","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "texans_def",
    name: "Houston Texans",
    formations: {
      "Nickel": {
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Load": ["1 Double Wr1","1 Double Wr2","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Guard Key Sim 2","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "Over": ["1 Double TE","1 Double Wr1","1 Robber Press","2 Invert Lurk","3 Buzz Match Wk","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Tampa 2"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "4-3": {
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Spy","Fire Man","Sam Blitz 3","Tampa 2"],
        "Tite Leo": ["Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 6","Field Blitz 3","Hot Blitz 3","Saw Blitz 0","Saw Blitz 1","Saw Blitz 2","Saw Blitz 3","Ss 2 Trap","Tampa 2"]
      },
      "5-2": {
        "Normal": ["Cover 1","Cover 3","Dt Loop","Fire Zone 2","Pinch","Trio Sky Zone"]
      },
      "4-2-5": {
        "Over G": ["Casino Blitz","Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Mike Ss 3","Pinch Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 2","Ws Blitz 3"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"],
        "Under": ["1 Fs Fire","1 Slant Crash","2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire","Hammero Blast","Mike Sam Crash Press","Safety Blitz","Sam Blitz 2","Ss Sam Crash Press","Tampa 2","Will Go Fire 3","Wk Corner Blitz"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "titans_def",
    name: "Tennessee Titans",
    formations: {
      "46": {
        "Bear": ["Ag Mid Blitz","Cover 1","Cover 3","Engage Eight","Gap Press","Safety Fire","Slant Weak","Slant Weak 3","Wall Stunt"]
      },
      "Nickel": {
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "3  3 Cub": ["Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","I Sam Ss Blitz","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Load": ["1 Double Wr1","1 Double Wr2","1 Lb Cross Games","Cover 1 Robber","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Lb 3 Seam Games","O Lb Cross Games","Overload 3 Seam","Tampa 2"],
        "Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "Over": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","1 Robber Press","Bracket Switch Willie","Cov 3 Buzz Match","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "3  2 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Db Fire 2","Dbl Safety Go","Double Bracket","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Hot Blitz 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Ss Zone Blitz","Tampa 2","Tampa 2 Drop","Zero Blitz"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 3 Buzz","Cover 4 Quarters","Sam Blitz 3","Sam Will Blitz"],
        "Over": ["1 Hole Press","1 Robber Press","Cover 1 Contain","Cover 1 Hole","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Stir","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky Wk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz"],
        "Over Walk": ["Cover 1 Hole","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Mike Will Blitz","Sam Will Blitz","Ss Blitz","Ss Blitz 3"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Spy","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fire Man","Sam Blitz 3","Tampa 2"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "4-2-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"],
        "Under": ["1 Fs Fire","1 Slant Crash","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire","Hammero Blast","Mike Sam Crash Press","Safety Blitz","Sam Blitz 2","Tampa 2","Will Go Fire 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "vikings_def",
    name: "Minnesota Vikings",
    formations: {
      "Nickel": {
        "2  4": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "2  4 Load Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cover 1 Lb Blitz","Cover 3 Match","Cover 3 Sky","Lb Blitz 6","Nickel Sim 2","Redzone Dt Drop","Side Blitz","Tampa 2"],
        "2  4 Load Mug": ["Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 6","Cover 6 Willie","Cover I Lb Blitz","Hot Blitz 3","Lb Blitz 0","Lb De Twist 3","Nickel Blitz 0","Nickel Blitz 1","Nickel Blitz 2","Nickel Blitz 3","Tampa 2"],
        "2  4 Single Mug": ["1 Lb Dog","Blitz Tex 3 Sim 3","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Buzz Match","Cover 4 Quarters","Db Blitz Tex 3","Dt Mike Loop 3","Nickel 2 Trap","Nickel Blitz 3","Tampa 2"],
        "2  4 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "2  4 Wide": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 3 Zone","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"],
        "3  3 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Double Bracket","Hot Blitz 3","Hot Blitz Bail","Lb Cross 3 Show 2","Lb Cross O","Nickel 2 Trap","Overload 3 Press","Pinch 0","Sam Mike 1","Sam Mike 3 Press","Tampa 2","Tampa 2 Drop","Tampa Sim Pressure"]
      },
      "Dime": {
        "1  4": ["Cover 1 Robber","Cover 2 Man","Cover 2 Match","Cover 3 Sky","Cover 4 Drop","Cover 6 Press","Cross 3 Fire","Db Sting","Db Sting 2 Buzz","Dbl Safety Go","Fs Zone Blitz","Mike Ss1 Dog","Mike Ss3 Seam","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Overload Blitz","Spinner Dog 3","Str Eagle Slant 3","Strg Corner 2 Fire","Tampa 2"],
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "2  3": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"],
        "3  2 Rush": ["Cover 1 Contain Spy","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz","Dbl Safety Blitz","Dime Blitz 2","Fox Fire Zone Press","Fs Middle Blitz 3","Mug Blitz Tex 3","Mug Dt Loop 1","Mug Sim Pressure","Ss Overload 3","Ss Sim Pressure 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Even": ["Cov 1 Robber Press","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cross Fire 3","Mike Scrape 3 Press","Pinch Buck O","Tampa 2","Will Fire 3 Seam"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Over Ed": ["1 Pirate Spy","1 Sting Tex","2 Sim Tex","3 Sim Tex","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 3","Cover 3 Cloud","Cover 3 Sky","Cover 4 Quarters","Cover 6","Hot Blitz 3","Olb Fire Man","Tampa 2"],
        "Over Solid": ["Cover 1 Sting","Cover 2 Invert","Cover 3 Match","Cover 3 Sky Wk","Cover 4 Quarters","Fs Blitz","Hammero Blast","Saw 0 Blast","Tampa 2"],
        "Tite 5 Tech": ["1 Robber Press","2 Invert Hard Flat","Cover 1 Fs Fire","Cover 1 Hole Wk","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Dbl Safety Blitz","Fs Slant 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Tampa 2","Weak Blitz 1","Weak Blitz 3"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 3","Fs Fire I","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "4-3": {
        "Even 6-1": ["Cover 1 Hole","Cover 1 Mlb Blitz","Cover 2 Man","Cover 3 Buzz","Cover 4 Quarters","Mike Will Blitz","Sam Blitz 3","Sam Will Blitz","Tampa 2"],
        "Odd Leo": ["Cover 1 Hole","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cross 3 Fire","Pinch Buck O","Pinch Dog 2 Press","Saw Blitz 1","Ss 2 Trap","Storm Bravei","Tampa 2","Will Buck 3 Press"]
      },
      "3-3-5": {
        "3 High Penny": ["3 Double Buzz","3 Double Cloud","Cover 2 Lurk","Cover 3 Sky","Cover 4 Drop","Cover 6 Invert","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Mike Blitz 0","Mike Sim 2","Tampa 2"]
      },
      "4-2-5": {
        "3 High": ["3 Double Cloud","3 Double Sky","Blitz Dt Pop","Cover 2 Lurk","Cover 2 Match","Cover 3 Match","Cover 4 Quarters","Edge Blitz 2","Edge Blitz 3","Hot Blitz 3","Lb Blitz 0","Tampa 2"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  },
  {
    id: "alt_46_def",
    name: "46 (Alt)",
    formations: {
      "46": {
        "Bear": ["Ag Mid Blitz","Cover 1","Cover 3","Engage Eight","Gap Press","Safety Fire","Slant Weak","Slant Weak 3","Wall Stunt"],
        "Bear Under": ["Cover 1","Cover 3","Engage Eight","Gap Press","Lb Dogs","Lb Dogs 3"],
        "Normal": ["Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Match","Engage Eight","Fire Zone 3","Inside Blitz","Rush Outside"]
      },
      "Nickel": {
        "3  3": ["2 Invert Hard Flat","3 Double Buzz","Cover 1 Robber Press","Cover 2 Drop","Cover 2 Invert","Cover 2 Man","Cover 3 Drop","Cover 4 Drop","Lb Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 0","Nickel Blitz 3","Ss Mike Blitz","Tampa 2"],
        "3  3 Cub": ["Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","I Sam Ss Blitz","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Over": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","1 Robber Press","Bracket Switch Willie","Cov 3 Buzz Match","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"]
      },
      "Dime": {
        "3  2 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Db Fire 2","Dbl Safety Go","Double Bracket","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Hot Blitz 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Ss Zone Blitz","Tampa 2","Tampa 2 Drop","Zero Blitz"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "3-4": {
        "Bear": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Hard Flat","Lb Blitz 0","Sam Mike 1","Trio Sky Zone","Will Sam I"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green","Zone Blitz"]
      },
      "4-2-5": {
        "Over G": ["Casino Blitz","Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Mike Ss 3","Pinch Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 2","Ws Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "alt_3_4_def",
    name: "3-4 (Alt)",
    formations: {
      "Nickel": {
        "2  4": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","2 Invert Lurk","Bracket Switch Willie","Buck Slant 3","Cover 1 Contain","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "2  4 Dbl Mug": ["Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Seam","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Dog 3 Buzz","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "3  3": ["2 Invert Hard Flat","3 Double Buzz","Cover 1 Robber Press","Cover 2 Drop","Cover 2 Invert","Cover 2 Man","Cover 3 Drop","Cover 4 Drop","Lb Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 0","Nickel Blitz 3","Ss Mike Blitz","Tampa 2"]
      },
      "Dime": {
        "2  3": ["1 Double Slot","1 Double Wr1","1 Double Wr2","Bracket 9 Switch","Bracket Switch Willie","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6 Show 2","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Press","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Sim Pressure 3","Tampa 2"],
        "2  3 Odd Jack": ["Cover 1 Contain","Cover 1 Robber Press","Cover 2 Hard Flat","Cover 2 Man","Cover 2 Match","Cover 3 Lock","Cover 4 Drop","Cover 6 Press","Db Fire 2","Dbl Safety Go","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Overload 3 Seam Press","Ss Zone Blitz","Str Eagle Slant 3","Tampa 2 Spy","Zero Blitz"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "1  3  7": ["3 Dbl Mable Cloud","3 Double Buzz","3 Double Mable","Cover 1 Thief","Cover 2 Man Spy","Cover 2 Spy","Cover 3 Mable","Cover 3 Spy","Cover 4 Drop","Db Strike 1","Fz 2 Deep","Fz 3 Sky","Man Up 3 Deep","Overload 3 Seam","Under Smoke"]
      },
      "3-4": {
        "Bear": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3","Cover 3 Hard Flat","Lb Blitz 0","Sam Mike 1","Trio Sky Zone","Will Sam 1"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"],
        "Over": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Buzz Mike","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Olb Fire 2","Saw Blitz 1","Ss 2 Trap","Ss Blitz 1","Sting Pinch","Trio Sky Zone"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Quarters","Cover 6","Fs Fire 1","Fs Fire 3","Mlb Cross Fire 3","Pinch Buck O","Saw Blitz 1","Weak Blitz 1","Weak Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "alt_4_3_def",
    name: "4-3 (Alt)",
    formations: {
      "Nickel": {
        "3  3": ["2 Invert Hard Flat","3 Double Buzz","Cover 1 Robber Press","Cover 2 Drop","Cover 2 Invert","Cover 2 Man","Cover 3 Drop","Cover 4 Drop","Lb Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 0","Nickel Blitz 3","Ss Mike Blitz","Tampa 2"],
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Over": ["1 Double Slot","1 Double Wr1","1 Double Wr2","1 Robber Press","Bracket Switch Willie","Cov 3 Buzz Match","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Double TE","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"],
        "Wide": ["Cb Zone Blitz","Cov 2 Invert Hard Flat","Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky Press","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 9 Show 2","Dbl Safety Blitz","I Lb Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"],
        "Single Mug": ["1 Lb Dog","Blitz Tex 3","Bracket Switch Willie","Cov 3 Buzz Show 1","Cover 1 Games","Cover 1 Hole","Cover 1 Robber Press","Cover 2 Man","Cover 4 Palms","Db Blitz","Db Blitz Tex 3","Dbl Safety Blitz","Dime Blitz 2","Double Bracket","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "4-3": {
        "Over": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Solid": ["2 Invert Hard Flat","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Hammero Blast","Sam Isting","Saw 0 Blast","Ss Blitz 1"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Spy","Fire Man","Sam Blitz 3","Tampa 2"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "4-4": {
        "Split": ["Cover 1","Cover 2 Invert","Cover 3","Cover 3 Match","Crash 3","Engage Eight","Fs Blitz","Lb Fire","Monster Green"]
      },
      "4-2-5": {
        "Over G": ["Casino Blitz","Corner Blitz 3","Cover 1 Hole","Cover 2","Cover 2 Contain","Cover 2 Man","Cover 3","Cover 3 Buzz Match Wk","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Invert","Cover 6 Trap","Lb Blitz","Mike Ss 3","Pinch Blitz","Ss Blitz 2","Ss Blitz 3","Ss Lb Blitz","Ws Blitz 1","Ws Blitz 2","Ws Blitz 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "alt_cover_2_def",
    name: "Cover 2 (Alt)",
    formations: {
      "Nickel": {
        "3  3": ["2 Invert Hard Flat","3 Double Buzz","Cover 1 Robber Press","Cover 2 Drop","Cover 2 Invert","Cover 2 Man","Cover 3 Drop","Cover 4 Drop","Lb Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 0","Nickel Blitz 3","Ss Mike Blitz","Tampa 2"],
        "Double Mug": ["2 Invert Hard Flat","Blitz Loop 3","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Lb Blitz 3","Mid Blitz 0","Nickel 2 Trap","Nickel Overload 3","Nickel Sim 2","Ss Blitz 3","Tampa 2"],
        "Over": ["1 Double Slot","1 Double TE","1 Double Wr1","1 Double Wr2","1 Robber Press","Bracket Switch Willie","Cov 3 Buzz Match","Cover 1 Contain","Cover 1 Hole","Cover 2 Invert","Cover 2 Man","Cover 2 Roll","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Drop Field","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 3","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Overload Blitz","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Sim Pressure 3","Tampa 2"]
      },
      "Dime": {
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps Ab","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "Normal": ["3 Dbl Mable Cloud","3 Double Buzz","3 Double Mable","Cover 1 Thief","Cover 2 Man Spy","Cover 2 Spy","Cover 3 Mable","Cover 3 Spy","Cover 4 Drop","Db Strike","Fz 2 Deep","Fz 3 Sky","Man Up 3 Deep","Overload 3","Under Smoke"]
      },
      "4-3": {
        "Over": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloud Str","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 3 Sky","Cover 4 Quarters","Cover 6","Cover I Spy","Fire Man","Sam Blitz 3","Tampa 2"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      }
    }
  },
  {
    id: "alt_multiple_d_def",
    name: "Multiple D (Alt)",
    formations: {
      "Nickel": {
        "3  3": ["2 Invert Hard Flat","3 Double Buzz","Cover 1 Robber Press","Cover 2 Drop","Cover 2 Invert","Cover 2 Man","Cover 3 Drop","Cover 4 Drop","Lb Blitz 0","Lb Blitz 1","Nickel 2 Trap","Nickel Blitz 0","Nickel Blitz 3","Ss Mike Blitz","Tampa 2"],
        "3  3 Cub": ["1 Sam Ss Blitz","Blitz Lb Lurk 1","Boca Blitz 2","Cover 3 Buzz","Cover 4 Show 2","Mike Blitz 0","Nickel Blitz 3","Olb Blitz 1","Sam Ss Blitz 3","Sam Will Blitz 3","Ss Blitz 0","Tampa 2"],
        "3  3 Dbl Mug": ["Blitz Loop 3","Buck Zone Blitz","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Field Sim 3","Mid Blitz","Nickel 2 Trap","Nickel Dog Meg","Nickel Overload 3","Nickel Sim 2","Ss Dog 3","Tampa 2"],
        "3  3 Over Jack": ["1 Double TE","1 Double Wr1","2 Invert Lurk","Bracket 9 Switch","Buck Slant 3","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sammie","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Cover 9 Show 2","Cover I Lb Blitz","Cross Sim 2","Dbl Safety Blitz","Double Bracket","Double Bracket Switch","Edge Blitz 0","Edge Blitz 3","Field Sim 3","Fs Will Blitz 0","Hot Blitz 3","Nickel 2 Trap","Nickel Sim 2","Over Storm Brave","Overload 3 Seam","Roll 23 Cloud","Roll Cover 2 Invert","Roll Cover 3 Cloud","Show Ss Sim 2","Silver Shoot Pinch","Sim Pressure 3","Tampa 2"],
        "3  3 Swap Dbl Mug": ["1 Dt Lb Loop","Blitz Loop 0","Blitz Loop 3","Blitz Loop Sim 3","Cb Bench Sim 2","Cover 1 Games","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Lb Pop O","Mid Blitz","Nickel 2 Trap","Nickel Sim 2","Redzone Dt Drop","Ss 2 Trap","Ss Dog 3","Ss Sim 2","Tampa 2"],
        "3  3 Wide Jack": ["Cov 3 Buzz Match Wk","Cover 1 Hole","Cover 1 Lb Blitz","Cover 1 Robber Press","Cover 2 Invert","Cover 2 Man","Cover 2 Match","Cover 3 Buzz Match","Cover 3 Cloud","Cover 3 Match","Cover 3 Sky","Cover 4 Palms","Cover 4 Quarters","Cover 4 Zone","Cover 6","Cover 6 Zone","Cover 9 Show 2","Cover 9 Zone","Dbl Safety Blitz","Nickel 2 Trap","Nickel Blitz 3","Over Storm Brave","Silver Shoot Pinch","Tampa 2 Contain"]
      },
      "Dime": {
        "1  4 Dbl Mug": ["Buck Zone Blitz","Cb Tex Sim 2","Coffee House 3 Seam","Cover 1 Hole","Cover 2 Invert","Cover 3 Match","Cover 3 Sky","Hot Blitz 3","Mid Blitz","Nickel 2 Trap","Nickel Overload 3","Ss Dog 3","Ss Mid Blitz 0","Ss Mid Blitz 3","Ss Tex Sim 2"],
        "3  2 Odd": ["1 Double Wr1","1 Double Wr2","Cover 1 Robber Press","Cover 2 Man","Cover 3 Buzz Match Wk","Cover 3 Cloud","Cover 3 Hard Flat","Cover 3 Lock","Cover 4 Drop","Cover 4 Palms","Cover 4 Quarters","Cover 6","Cover 6 Willie","Db Fire 2","Dbl Safety Go","Double Bracket","Edge Blitz 1","Edge Blitz 3","Fs Zone Blitz","Hot Blitz 3","Okie Eagle 3","Okie Roll 2","Overload 3 Seam","Ss Zone Blitz","Tampa 2","Tampa 2 Drop","Zero Blitz"],
        "Normal": ["3 Double Buzz","Cover 1 Robber Press","Cover 1 Spy","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Buzz Press","Cover 3 Buzz Seam","Cover 3 Cloud","Cover 4 Palms","Cover 4 Quarters","Cover 6","Db Blitz 0","Dbl Safety Blitz","Dime Blitz 3","Lb Blitz 1","Overload 3 Show 2","Ss Blitz 3","Tampa 2"]
      },
      "Goal Line": {
        "5  3": ["Gaps A B","Gaps All","Gaps All Lb","Gaps B","Gl Man","Mlb Gap A"],
        "6  2": ["60 Base","60 Half Out","60 Out","60 Out Jacks","60 Pinch","Guts"],
        "Pinch": ["Base"]
      },
      "Quarter": {
        "Normal": ["3 Dbl Mable Cloud","3 Double Buzz","3 Double Mable","Cover 1 Thief","Cover 2 Man Spy","Cover 2 Spy","Cover 3 Mable","Cover 3 Spy","Cover 4 Drop","Db Strike","Fz 2 Deep","Fz 3 Sky","Man Up 3 Deep","Overload 3","Under Smoke"]
      },
      "3-4": {
        "Cub": ["Cover 1 Hole","Cover 3 Sky","Gap Press","Olb Blitz","Sting Pinch","Trio Sky Zone"],
        "Odd": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 3 Match","Cover 3 Sky","Cover 4 Drop","Cover 4 Quarters","Cover 6","Cross 3 Fire","Pinch Buck O","Saw Blitz 1","Ss 2 Trap","Storm Brave 1","Tampa 2","Will Buck 3 Press"]
      },
      "4-3": {
        "Odd": ["Cover 1 Robber Press","Cover 2 Man","Cover 3 Cloud","Cover 3 Sky","Cover 6","Lb Dogs","Pinch Zone 4","Strong Slant 3","Tampa 2"],
        "Over": ["Cover 1 Hole","Cover 1 Robber","Cover 2 Hard Flat","Cover 2 Man","Cover 3 Cloudstr","Cover 3 Sky","Cover 4 Press","Cover 4 Quarters","Cover 6","Free Fire","Lb Sting I","Olb Fire Man","Sam Edge 3","Tampa 2","Thunder Smoke"],
        "Under": ["2 Invert Hard Flat","Cover 1 Hole","Cover 1 Robber","Cover 2 Invert","Cover 3 Hard Flat","Cover 3 Match","Cover 3 Skywk","Cover 4 Quarters","Free Fire O","Fs Fire 3","Fs Fire I","Hammero Blast","Sam Crash 3","Sam Crash I","Will Go Fire 3"]
      },
      "5-2": {
        "Normal": ["Cover 1","Cover 3","Dt Loop","Fire Zone 2","Pinch","Trio Sky Zone"]
      },
      "Prevent": {
        "3 Deep": ["1 Double Buzz","3 Deep Blitz","Cover 2 Drop","Cover 3","Man 3 Deep","Prevent"]
      },
      "2-4-5": {
        "Over Wide": ["Cover 1 Hole","Cover 1 Robber","Cover 1 Sting","Cover 2 Man","Cover 3 Cloud Show 2","Cover 3 Sim Pressure","Cover 3 Sky","Cover 4 Quarters","Cover 6","Double Cb Blitz","Fire Man","Free Fire 3","Invert 2 Sim","Mikesam Cross 3","Sam Blitz 3","Tampa 2","Thunder Smoke","Will Blitz 3"]
      }
    }
  }
];

export { OFFENSIVE_PLAYBOOKS, DEFENSIVE_PLAYBOOKS };