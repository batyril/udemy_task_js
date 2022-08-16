function calculateVolumeAndArea(number) {
  if (!Number.isInteger(number) || typeof number !== 'number' || Number.isNaN(number) || number < 0) {
    return 'При вычислении произошла ошибка';
  }
  let volumeBall = number;
  for (let i = 1; i < 3; i += 1) {
    volumeBall *= number;
  }
  let areaBall = number;
  for (let i = 1; i < 2; i += 1) {
    areaBall *= number;
  }

  return `Объем куба:${volumeBall} Площадь всей поверхности:${areaBall * 6}`;
}

console.log(calculateVolumeAndArea(15));

console.log(calculateVolumeAndArea('8--8=fsgdfg'));
console.log(calculateVolumeAndArea(-5));


console.log(Number.isNaN(15));
console.log(Number.isNaN(15.5));
