function calculateVolumeAndArea(number) {
  if (Number.isNaN(number) || number < 0) {
    return 'При вычислении произошла ошибка';
  }
  const volumeBall = number ** 3;
  const areaBall = 6 * (number ** 2);
  return `Объем куба:${volumeBall} Площадь всей поверхности:${areaBall}`;
}

console.log(calculateVolumeAndArea(5));

console.log(calculateVolumeAndArea('52fsgdfg'));
console.log(calculateVolumeAndArea(-5));
