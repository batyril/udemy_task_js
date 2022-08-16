function getTimeFromMinutes(minutes) {
  if (!Number.isInteger(minutes)) return 'Ошибка, проверьте данные';
  let hour = 0;
  while (minutes >= 60) {
    minutes -= 60;
    hour += 1;
  }
  if (hour < 10 && hour > 1) {
    return `Это ${hour} часа и ${minutes} минут`;
  } else if (hour === 0 && minutes >= 0) {
    return `Это 0 часов и ${minutes} минут`;
  } else if (hour === 1) {
    return `Это ${hour} час и ${minutes} минут`;
  }
  else {
    return 'Ошибка, проверьте данные';
  }
}

console.log(getTimeFromMinutes(60.5));
