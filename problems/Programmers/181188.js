// [Level 2][연습문제] 요격 시스템

function solution(targets) {
  let result = 0;
  let prev = -1;

  const sorted = targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < sorted.length; i++) {
    if (prev <= sorted[i][0]) {
      result++;
      prev = sorted[i][1];
    }
  }

  return result;
}
