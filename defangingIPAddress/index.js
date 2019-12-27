// --- Directions
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]"
// --- Examples:
//   defangedIPAddress("1.1.1.1") === "1[.]1[.]1[.]1"
//   defangedIPAddress("255.100.50.0") === "255[.]100[.]50[.]0"

const defangedIPAddress = (nums) => {
  newNums = [];

  nums.split('').forEach(char => {
    if (char === '.') {
      newNums.push('[.]');
    } else {
      newNums.push(char);
    }
  });

  return newNums.join('');
}

module.exports = defangedIPAddress;