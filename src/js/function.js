import quantity from './quantity';

export default function typeChecking(argument) {
  try {
    if (Number.isInteger(argument)) {
      return argument;
    }
    throw new Error('Полученные данные не являются числом');
  } catch (e) {
    return (e);
  }
}

typeChecking(quantity);
