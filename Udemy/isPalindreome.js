// 풀이

function isPalindreome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindreome(str.slice(1, -1));
  return false;
}

isPalindreome("ddcocdd");
