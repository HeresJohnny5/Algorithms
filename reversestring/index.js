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
// const reverse = str => {
//   const strArray = str.split('');
//   let reverseStr = '';

//   while (strArray.length > 0) {
//     reverseStr += strArray.pop();
//   }

//   return reverseStr;
// }

// Solution 3
// Solution 3
const reverse = str => {
  let counter = 1;
  let reverseStr = '';

  while (counter <= str.length) {
    reverseStr += str[str.length - counter];
    counter++;
  }

  return reverseStr;
}

module.exports = reverse;
