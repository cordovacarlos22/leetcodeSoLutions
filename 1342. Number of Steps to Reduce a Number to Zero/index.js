/**
 * @param {number} num
 * @return {number}

 // find how many steps it takes to bring num to 0
 // if number is even divided by 2
 // if numer is odd subtract 1 
// if number is 0 return total steps



 */
var numberOfSteps = function (num) {
  let steps = 0;
  do {
    if (num != 0) {
      if (num % 2 == 0) {
        num = num / 2
        // console.log('even',num)
        steps++
        // console.log('steps',steps)
      } else if (num % 1 == 0) {
        num = num - 1
        // console.log('odd',num)
        steps++
        // console.log('steps',steps)
      }
    } else {
      return steps
    }
  } while (num >= 0)


};