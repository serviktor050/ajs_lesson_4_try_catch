import typeChecking from '../js/typeChecking.js';

test('Проверка на число', () => {
  const testQuantity = 5;
  const received = typeChecking(testQuantity);
  const expected = 5;
  expect(received).toBe(expected);
});

test('Проверка на строку', () => {
  const testQuantity = 'Привет, Мир!';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Проверка на двоичные числа', () => {
  const testQuantity = '0b10000';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Проверка на восмеричные числа', () => {
  const testQuantity = '0755';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Проверка на шеснадцатиричные числа', () => {
  const testQuantity = '0xFFF';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Проверка на случайные символы', () => {
  const testQuantity = '1!@gpF';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});
