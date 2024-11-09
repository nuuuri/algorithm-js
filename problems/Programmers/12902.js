// [Level 2][연습문제] 3 x n 타일링

function solution(n) {
  if (n % 2 > 0) return 0;

  const answer = [1, 3];
  let cnt = 2;

  while (cnt <= n / 2) {
    answer.push(
      (((4 * answer[cnt - 1]) % 1000000007) -
        (answer[cnt - 2] % 1000000007) +
        1000000007) %
        1000000007
    );
    cnt++;
  }

  return answer[n / 2];
}

// fn(n) = 4*fn(n-2) - fn(n-4);
