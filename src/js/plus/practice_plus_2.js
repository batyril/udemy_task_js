function getCoupeNumber(number) {
  const checkNumber = number < 0 || !Number.isInteger(number) || typeof number !== 'number' || Number.isNaN(number);
  if (checkNumber) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }
  const checkRangeNumber = number > 36 || number === 0;
  if (checkRangeNumber) {
    return 'Таких мест в вагоне не существует';
  }
  let summ = 0;
  for (let i = 0; i <= 36; i += 4) {
    summ += 1;
    if (number > i && number <= (i + 4)) {
      return summ;
    }
  }

  return 'все хорошо';
}

getCoupeNumber(2);
