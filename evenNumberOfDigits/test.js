const evenNumbersOfDigits = require('./index');

test('evenNumbersOfDigits function is defined', () => {
  expect(evenNumbersOfDigits).toBeDefined();
});

test('Calling evenNumbersOfDigits with [12,345,2,6,7896] prints out 2', () => {
  evenNumbersOfDigits([12, 345, 2, 6, 7896]);
});

test('Calling evenNumbersOfDigits with [555,901,482,1771] prints out 1', () => { evenNumbersOfDigits([555, 901, 482, 1771]); });