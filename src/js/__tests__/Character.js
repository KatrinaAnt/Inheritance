import Character from '../class/Character';

test.each([
    [
        'Long Name', 'Индивидуалист', 'Невалидное значение'
    ],
    [
        'Short Name', 'Я', 'Невалидное значение'
    ],
    [
        'Not String', 228, 'Невалидное значение'
    ],
])('throw error %s', (_, value, expected) => {
    expect(() => {
        new Character(value, 'Magician', 25, 30);
    }).toThrow(new Error(expected));
});

test('throw error invalid type', () => {
    expect(() => {
        new Character('Flash', 'King', 25, 30);
    }).toThrow(new Error('Невалидное значение'));
});

