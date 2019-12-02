// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// const reverse = str => {
//   return str.split('').reverse().join('');
// }

// Solution 2
const reverse = str => {
  const strArray = str.split('');
  let reverseStr = '';

  while (strArray.length > 0) {
    reverseStr += strArray.pop();
  }

  return reverseStr;
}

module.exports = reverse;
