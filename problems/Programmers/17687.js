// [Level 2][2018 KAKAO BLIND RECRUITMENT][3차] n진수 게임

function solution(n, t, m, p) {
  let answer = "";

  let numStr = "";
  let num = 0;

  while (numStr.length < t * m) {
    numStr += (num++).toString(n).toUpperCase();
  }

  let idx = p - 1;
  while (answer.length < t) {
    answer += numStr[idx];
    idx += m;
  }

  return answer;
}
