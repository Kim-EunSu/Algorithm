//내가 한 풀이

function power(a, b) {
  let result = Math.pow(a, b);
  return result;
}

power(a, b);

//풀이

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

power(base, exponent);
