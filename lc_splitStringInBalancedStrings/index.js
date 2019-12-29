// --- Directions
// Balanced strings are those who have equal quantity of 'L' and 'R' characters. 
// Given a balanced string, split it in the maximum amount of balanced strings. Return the maximum amount of splitted balanced strings.
// --- Examples:
// splitStringInBalancedStrings('RLRRLLRLRL') === 4
// string can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// splitStringInBalancedStrings('RLLLLRRRLR') === 3
// string can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

const splitStringInBalancedStrings = (string) => {
  let balancedVar = 0;
  let total = 0;

  string.split('').forEach(char => {
    char === 'L' ? balancedVar++ : balancedVar--;

    if (balancedVar === 0) {
      total++;
    }
  });

  return total;
}

module.exports = splitStringInBalancedStrings;