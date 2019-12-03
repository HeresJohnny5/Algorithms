// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// modular helper
const reverseStrHelper = str => {
  return str.split('').reduce((acc, val) => {
    return val + acc;
  });
}

// Solution 1
// const palindrome = str => {
//   const strReverse = str.split('').reverse().join('');

//   return str === strReverse ? true : false;
// }

// Solution 2
const palindrome = str => {
  const reverseStr = reverseStrHelper(str);

  return str === reverseStr ? true : false;
}

module.exports = palindrome;
