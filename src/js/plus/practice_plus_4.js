function findMaxNumber(...args) {
  if (args.length < 4) return 0;
  let maxArgs = args[0];

  const isNull = args.some((item) => typeof (item) !== 'number');

  if (!isNull) {
    args.forEach((item) => {
      if (item > maxArgs) {
        maxArgs = item;
      }
    });
    return maxArgs;
  }

  return 0;
}

findMaxNumber(1, 5, '3454', 6.6);
