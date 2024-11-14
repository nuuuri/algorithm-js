// [Level 2][2018 KAKAO BLIND RECRUITMENT][3차] 압축

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(msg) {
  const dic = {};
  const answer = [];

  [...ALPHA].forEach((c, i) => (dic[c] = i + 1));

  let i = 0;
  let index = 27;
  while (i < msg.length) {
    let w = msg[i];
    let c = i + 1 < msg.length ? msg[i + 1] : "";

    while (dic[w + c] && c)
      [w, c] = [w + c, ++i + 1 < msg.length ? msg[i + 1] : ""];

    answer.push(dic[w]);
    dic[w + c] = index++;
    i++;
  }

  return answer;
}
