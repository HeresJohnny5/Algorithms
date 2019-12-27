const defangedIPAddress = require('./index');

test('defangedIPAddress function is defined', () => {
  expect(defangedIPAddress).toBeDefined();
});

test('Calling defangedIPAddress with "1.1.1.1" prints out "1[.]1[.]1[.]1"', () => {
  expect(defangedIPAddress([12, 345, 2, 6, 7896])).toEqual("1[.]1[.]1[.]1");
});

test('Calling defangedIPAddress with "255.100.50.0" prints out "255[.]100[.]50[.]0"', () => {
  expect(defangedIPAddress('255.100.50.0')).toEqual('255[.]100[.]50[.]0');
});