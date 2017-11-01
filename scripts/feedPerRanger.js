/* The Park Rangers in Death Valley National Park divide up the feed
responsibilities daily for the Bighorn Sheep population. Each sheep needs 2
lbs of ranger-provided food per day.

Build a function called feedPerRanger that takes in:

The current population of sheep. The number of Park Rangers available during
the day. The function should alert the amount of feed that each Park Ranger
should be responsible for on that day. The output should match the following
format:

Each Park Ranger should load <number> lbs of feed today.

*/
function feedPerRanger(sheepPop, rangerNum ) {
  var feed = sheepPop * 2 / rangerNum
  alert("Each Park Ranger should load " + feed + " lbs of feed today.")
}