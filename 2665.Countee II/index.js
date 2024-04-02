/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {

  let sum = init;
  return {
    increment: () => {
      sum = sum + 1;
      return sum
    },
    decrement: () => {
      sum = sum - 1
      return sum;
    },
    reset: () => {
      sum = init
      return sum;
    }
  }

};



