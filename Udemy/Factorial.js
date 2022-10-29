//내가 한 풀이

function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

factorial(4);

// => 음수와0일때를 생각하지 못함!

//풀이

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}
