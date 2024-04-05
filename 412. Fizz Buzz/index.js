/**
 * @param {number} n
 * @return {string[]}

 // need 3 conditionals
 // 1.  n % 3  = 0 > Fizz
 // 2. n % 5 = 0  > Buzz
 // 3. n % 5 && n% 3 = 0  > FizzBuzz
 // 4. return n ;
 
 
  */

var fizzBuzz = function (n) {

  //test cases : 
  console.log('test divisible by 3', 3 % 3) // if  divisible by 3 has to return 0  ;
  console.log('test divisible by 5', 5 % 5) // if  divisible by 5 has to return 0  ;
  let fizz = 'Fizz'
  let buzz = 'Buzz'
  let fizzBuzz = 'FizzBuzz'
  let result = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(fizzBuzz)
    } else if (i % 3 === 0) {
      result.push(fizz)
    } else if (i % 5 === 0) {
      result.push(buzz)
    } else {
      result.push(i.toString())
    }
  };

  return result;
};