var space = (" ")
var hash = ("#")
var size = 8
for (var lineCount = 8; lineCount > 0; lineCount--) {
  if (lineCount % 2 != 0) {
    var stringOdd = (hash + space)
    for (var loopCount = 2; loopCount > 0; loopCount--) {
    	stringOdd += stringOdd
    }
    console.log(stringOdd)
  } else if (lineCount % 2 == 0) {
    var stringEven = (space + hash)
    for (var loopCount = 2; loopCount > 0; loopCount--) {
    	stringEven += stringEven
      }
    }
  	console.log(stringEven)
}
