const getInfo = require('./get-path');

test('Value must be defined', () => {
    expect(() => getInfo()).toThrow('Value must be defined');
})

test('Value must be HTMLElement', () => {
    expect(() => getInfo('test')).toThrow('Value must be HTMLElement');
})