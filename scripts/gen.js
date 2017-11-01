var totalGen = 19;
var totalMW = 0;

for (var genNum = 1; genNum <= totalGen; genNum++) {
  if (genNum%2 != 0) {
    console.log("Generator #" + genNum + " is off.")
  } 
  else if (genNum%2 == 0 && genNum <= 4) {
    totalMW += 62;
    console.log("Generator #" + genNum + " is on, adding 62 MW, for a total of " + totalMW + " MW!")
  }
  else if (genNum%2 == 0 && genNum > 4 && genNum <= totalGen) {
    totalMW += 124;
    console.log("Generator #" + genNum + " is on, adding 124 MW, for a total of " + totalMW + " MW!")
  }
}