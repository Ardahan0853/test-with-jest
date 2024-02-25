const {sum, reverse, calculator, arrayCal} = require('./main.js');


test('first letter upper', () => {
    expect(sum('ardahan')).toBe('A');
})
test('Reverse string',() => {
    expect(reverse('ardahan')).toBe('nahadra')
})
test('Calculator object', () => {
    const {add, sub, mul, div} = calculator
    expect(add(1, 2)).toBe(3),
    expect(sub(3, 1)).toBe(2),
    expect(mul(3, 2)).toBe(6),
    expect(div(6, 2)).toBe(3);
})

test('object arr', () => {
    expect(arrayCal([1,8,3,4,2,6])).toEqual({
        avarage:4,
        min:1,
        max:8,
        length:6
    })
})