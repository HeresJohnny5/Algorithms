// --- Directions
// Given an array nums of integers, return how many of them contain an even number of digits
// --- Examples:
//   evenNumberOfDigits([12,345,2,6,7896]) === 2
//   evenNumberOfDigits([555,901,482,1771]) === 1

const evenNumberOfDigits = (nums) => {
  count = 0;

  nums.forEach(num => {
    if (num.toString().length % 2 === 0) {
      count++;
    }
  });

  return count;
}

module.exports = evenNumberOfDigits;
