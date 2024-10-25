// [Level 1][2022 KAKAO TECH INTERNSHIP] 성격 유형 검사하기

function solution(survey, choices) {
  const score = { RT: 0, CF: 0, JM: 0, AN: 0 };

  for (let i = 0; i < choices.length; i++) {
    if (survey[i][0] < survey[i][1]) score[survey[i]] += choices[i] - 4;
    else score[survey[i][1] + survey[i][0]] -= choices[i] - 4;
  }

  return Object.entries(score)
    .map(([key, val]) => (val > 0 ? key[1] : key[0]))
    .join("");
}
