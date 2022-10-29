//풀이

function recursive(x) {
  if (x === 0) return 0;
  return x + recursive(x - 1);
}

recursive(4);
