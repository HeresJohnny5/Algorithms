// --- Directions
// Given an integer number n, return the difference between the product of its digits and the sum of its digits
// --- Examples:
//   subtractProductAndSum(234) === 15
//   subtractProductAndSum(4421) === 21

const subtractProductAndSum = (nums) => {
  let product = 0;
  let sum = 0;

  nums.toString().split('').forEach(num => {
    product *= num;
    sum += parseInt(num);
  });

  return product - sum;
}

module.exports = subtractProductAndSum;