// [Level 2][2022 KAKAO BLIND RECRUITMENT] k진수에서 소수 개수 구하기

function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .filter((v) => v && isPrime(+v)).length;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
