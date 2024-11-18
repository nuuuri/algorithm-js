// [Level 2][2022 KAKAO BLIND RECRUITMENT] 양궁대회

function solution(n, info) {
  let answer = [];
  let diff = 0;

  const fight = (index, result) => {
    if (index === 11) {
      let [lion, apeach] = [0, 0];
      let arrow = 0;

      result.forEach((v, i) => {
        if (v) {
          lion += 10 - i;
          arrow += v;
        } else if (info[i] > 0) apeach += 10 - i;
      });

      if (arrow > n) return;
      if (arrow < n) result[10] = n - arrow;

      if (lion - apeach > diff) {
        answer = [...result];
        diff = lion - apeach;
      } else if (lion - apeach === diff) {
        for (let i = 10; i >= 0; i--) {
          if (answer[i] > result[i]) return;
          if (answer[i] < result[i]) {
            answer = [...result];
            diff = lion - apeach;
            return;
          }
        }
      }

      return;
    }

    fight(index + 1, [...result, info[index] + 1]);
    fight(index + 1, [...result, 0]);
  };

  fight(0, []);

  return answer.length ? answer : [-1];
}
