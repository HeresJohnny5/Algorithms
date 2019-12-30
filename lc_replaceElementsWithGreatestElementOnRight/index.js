// --- Directions
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.
// --- Examples:
// replaceElementsWithGreatestElementOnRight([17,18,5,4,6,1])
// Output = [18,6,6,6,1,-1]

const replaceElementsWithGreatestElementOnRight = (array) => {
  let newArray = [];
  let maxValue = 0;

  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] > maxValue) {
      maxValue = array[i];

      newArray.unshift(maxValue);
    } else {
      newArray.unshift(maxValue);
    }
  }

  newArray.push(-1);
  return newArray;
}

module.exports = replaceElementsWithGreatestElementOnRight;