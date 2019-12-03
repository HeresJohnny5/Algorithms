// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  let returnInt = [];
  const intArray = n.toString().split('');

  while (0 !== intArray.length) {
    returnInt.push(intArray.pop());
  }

  if (returnInt.includes('-')) {
    returnInt.unshift(returnInt.pop());
  }

  return parseInt(returnInt.join(''));
}

module.exports = reverseInt;
