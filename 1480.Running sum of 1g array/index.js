/**
 * @param {number[]} nums
 * @return {number[]}

// indexes 

 let i = 0  // this has to stay at index 0 
 let j = 1 this has to increse by one 
 let j = 2. 

 let result =  i + j 
 */

var runningSum = function (nums) {
  let result = []
  // loops over nums one by one 
  for (let i = 0; i < nums.length; i++) {

    if (result == '') {
      result.push(parseInt(nums[0]))
    } else {
      result.push(parseInt(result[i - 1] + nums[i]))
    }

  }
  return result

};