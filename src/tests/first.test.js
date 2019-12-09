import typeChecking from '../js/function';

test('Проверка на число', () => {
  const testQuantity = 5;
  const received = typeChecking(testQuantity);
  const expected = 5;
  expect(received).toBe(expected);
});

test('Проверка на ошибку', () => {
  const testQuantity = '123';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом');
  expect(received).toEqual(expected);
});
