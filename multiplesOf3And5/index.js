// --- Directions
// Project Euler: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000 = 233168.

// Solution 1
const multiplesOf3And5 = ([num1, num2], total) => {
  [num1, num2] = [num1, num2];
  let counter = 1;
  let tempArr = [];

  while (counter < total) {
    if ((counter % num1 === 0 && counter % num2 === 0) || counter % num1 === 0 || counter % num2 === 0) {
      tempArr.push(counter);
    }

    counter++;
  }

  return tempArr.reduce((total, num) => {
    return total += num;
  });
}

module.exports = multiplesOf3And5;