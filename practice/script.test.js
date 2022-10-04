'use strict';

import * as script from './script';

test('capitalize first letter', () => {
    expect(script.capitalize('TEST')).toBe('Test');
});

test('reverse string', () => {
    expect(script.reverseString('abcde')).toBe('edcba');
});

test('calculator ', () => {
    expect(script.calculator.add(1, 2)).toBe(3);
    expect(script.calculator.subtract(1, 2)).toBe(-1);
    expect(script.calculator.divide(4, 2)).toBe(2);
    expect(script.calculator.multiply(2, 2)).toBe(4);
});

test('caesarCipher', () => {
    expect(script.caesarCipher('defend the east wall of the castle')).toBe(
        'efgfoe uif fbtu xbmm pg uif dbtumf'
    );
    expect(script.caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
    expect(script.caesarCipher('xYz', 3)).toBe('aBc');
    expect(script.caesarCipher('!@#$a%s^&*()_+', 3)).toBe('!@#$d%v^&*()_+');
    expect(script.caesarCipher('abc', 26)).toBe('abc');
});

test('analyzeArray', () => {
    expect(script.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
