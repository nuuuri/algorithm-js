// [Level 3][연습문제] 연속 펄스 부분 수열의 합

function solution(sequence) {
  const dp = Array.from(new Array(sequence.length), () => new Array(2));

  dp[0][0] = sequence[0];
  dp[0][1] = -sequence[0];

  let answer = Math.max(dp[0][0], dp[0][1]);

  for (let i = 1; i < sequence.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], 0) + sequence[i]; // i번째를 더했을 때 값
    dp[i][1] = Math.max(dp[i - 1][0], 0) - sequence[i]; // i번째를 뺐을 때 값

    answer = Math.max(answer, dp[i][0], dp[i][1]);
  }

  return answer;
}
