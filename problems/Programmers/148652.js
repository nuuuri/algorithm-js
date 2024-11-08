// [Level 2][연습문제] 유사 칸토어 비트열

function solution(n, l, r) {
  return countBit(r) - countBit(l - 1);
}

function countBit(num) {
  if (num <= 5) return [0, 1, 2, 2, 3, 4][num];

  let base = 1;

  while (5 ** (base + 1) < num) base++;

  const quotient = ~~(num / 5 ** base);
  const remainder = num % 5 ** base;

  const answer = 4 ** base * (quotient >= 3 ? quotient - 1 : quotient);

  if (quotient === 2) return answer; // 나머지 부분이 전부 0
  else return answer + countBit(remainder);
}

// 0(1) : 1
// 1(5) : 1 1 0 1 1
// 2(25) : 4 4 0 4 4
// 3(125) : 16 16 0 16 16
