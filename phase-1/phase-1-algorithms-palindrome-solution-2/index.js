function isPalindrome(word) {
  const reverseWord = word.split('').reverse().join('')
 return word === reverseWord
 }

/* 
  split the letters of the word (string) into an array of letters, 
  reverse the letters, join the letters,
  compare the reversed word with the orginal word 
*/

/*
  I've taken the orginal word, split it into an array(using.split) of letters,
  used the array method reverse, the used the array method join to turn it back 
  into a string. I then compared the orignal word to the reversed word. If the 
  two words are the same (===) then the word is indeed a palindrome and it prints 
  a "true" to the console; if not, it prints a "false"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
console.log("Expecting: true");
console.log("=>", isPalindrome("madam"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("level"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

