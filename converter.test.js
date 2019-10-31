const converter = require('./converter.js')

test('input is 0', () => {
    expect(converter(0)).toEqual('$0');
});
test('input is 50', () => {
    expect(converter(50)).toEqual('$1.66');
});
test('input is 100', () => {
    expect(converter(100)).toEqual('$3.31');
});
test('welcome to Thailand', () => {
    expect(converter('welcome to Thailand')).toEqual('error');
});