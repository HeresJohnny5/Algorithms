// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
  const lowerCaseStr = str.toLowerCase();
  let tempArr = [];
  let charTotal = 0;
  let tempTotal = 0;
  let mostUsedChar = '';

  for (let char of lowerCaseStr.split('')) {
    if (!tempArr.includes(char)) {
      tempArr.push(char);

      charTotal = lowerCaseStr.split(char).length - 1;

      if (charTotal > tempTotal) {
        tempTotal = charTotal;
        mostUsedChar = char;
      }
    }
  }

module.exports = maxChar;
