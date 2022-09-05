const someString = 'This is some strange string';
function reverse(str) {
  if (typeof str !== 'string') {
    return 'Ошибка!';
  }
  const arr = [];
  for (const i of str) {
    arr.push(i);
  }
  const arrReverse = arr.reverse();
  return arrReverse.join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    return 'Нет доступных валют';
  }
  let result = 'Доступные валюты:\n';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== missingCurr) {
      result += `${arr[i]}\n`;
    }
  }
  return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
