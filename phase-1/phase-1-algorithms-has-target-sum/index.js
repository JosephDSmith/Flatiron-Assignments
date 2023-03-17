function hasTargetSum(array, target) {
  // look through each item in the array
  for (let i = 0; i < array.length; i++) {
    // look through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      // check if it matches the target number
      if (array[i] + array[j] === target) {
        return true; // return true if match found
      }
    }
  }
  return false; // return false if no match found
}

/* 
  Quadratic (O(n^))
*/

/* 
  I added comments as I went above. 
*/

/*
  This function loops over an array twice, saving the values in the variables i and j. 
  It then adds all pairs together, and compares it to the target value. If there are 
  two numbers that meet this criteria, the function returns true. Otherwise it returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
