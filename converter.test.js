const converter = require('./converter.js')

test('return $0 when input is 0', () => {
    expect(converter(0)).toEqual('$0');
});
test('return $1.66 when input is 50', () => {
    expect(converter(50)).toEqual('$1.66');
});
test('return $3.31 when input is 100', () => {
    expect(converter(100)).toEqual('$3.31');
});
test('return errorrrrrrrrr when input is welcome to Thailand', () => {
    expect(converter('welcome to Thailand')).toEqual('errorrrrrrrrr');
});