// [Level 3][연습문제] 최고의 집합

function solution(n, s) {
  const quotient = Math.floor(s / n);
  const remainder = s % n;

  if (quotient === 0) return [-1];

  const subset = new Array(n).fill(quotient);

  for (let i = 0; i < remainder; i++) subset[i]++;

  return subset.sort((a, b) => a - b);
}
