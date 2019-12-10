const multiplesOf3And5 = require('./index');

test('multiplesOf3And5 function exists', () => {
  expect(typeof multiplesOf3And5).toEqual('function');
});

test('Find the sum of all the multiples of 3 or 5 below 1000.', () => {
  expect(multiplesOf3And5([3, 5], 1000)).toEqual(233168);
});