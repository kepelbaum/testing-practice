const index = require('./index.js');

let calc = index.calculator();

test ('capitalizes first character of a string', () => {
    expect(index.capitalize('cats are better than dogs')).toBe('Cats are better than dogs');
})

test('reverses string', () => {
    expect(index.reverseString('abcde fgh')).toBe('hgf edcba');
})

test('calculator with working add function', () => {
    expect(calc.add(2, 3)).toBe(5);
})

test('calculator with working subtract function', () => {
    expect(calc.subtract(5, 4)).toBe(1);
})

test('calculator with working divide function', () => {
    expect(calc.divide(6, 2)).toBe(3);
})

test('calculator with working multiply function', () => {
    expect(calc.multiply(2, 3)).toBe(6);
})

test('caesar cypher shifting ciphertext letters by 13', () => {
    expect(index.caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('NOPQRSTUVWXYZABCDEFGHIJKLM');
})

test('analyze array and give object including its average, min, max and length', () =>
    expect(index.analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
);



