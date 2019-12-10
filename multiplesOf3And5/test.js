const multiplesOf3And5 = require('./index');

test('multiplesOf3And5 function exists', () => {
  expect(typeof multiplesOf3And5).toEqual('function');
});

// test('Finds the most frequently used char', () => {
//   expect(maxChar('a')).toEqual('a');
//   expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
// });

// test('Works with numbers in the string', () => {
//   expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
// });