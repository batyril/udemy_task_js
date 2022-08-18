function fib(number) {
  let result = '';
  let first = 0;
  let second = 1;
  for (let i = 0; i < number; i += 1) {
    result += `${first}`;
    const third = first + second;
    first = second;
    second = third;
  }
  return result;
}

console.log(fib(4));
