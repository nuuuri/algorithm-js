// [Level 1][2024 KAKAO WINTER INTERNSHIP] 가장 많이 받은 선물

function solution(friends, gifts) {
  const arr = Array.from(new Array(friends.length), () =>
    new Array(friends.length).fill(0)
  );
  const level = new Array(friends.length).fill(0);

  let answer = -1;

  for (let gift of gifts) {
    const [a, b] = gift.split(" ");
    const indexA = friends.indexOf(a);
    const indexB = friends.indexOf(b);

    arr[indexA][indexB] += 1;
    arr[indexB][indexA] -= 1;

    level[indexA] += 1;
    level[indexB] -= 1;
  }

  for (let i = 0; i < friends.length; i++) {
    let cnt = 0;

    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue;

      if (arr[i][j] > 0 || (arr[i][j] === 0 && level[i] > level[j])) cnt++;
    }

    if (answer < cnt) answer = cnt;
  }

  return answer;
}
