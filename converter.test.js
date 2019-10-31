const converter = require('./converter.js')

test('return $0.00 when input is 0', () => {
    expect(converter(0)).toEqual('$0.00');
});
test('return $330.58 when input is 100', () => {
    expect(converter(100)).toEqual('$330.58');
});
test('return $-330.58 when input is -100', () => {
    expect(converter(-100)).toEqual('$-330.58');
});
test('return error when input is hey', () => {
    expect(converter('hey')).toEqual('error');
});