// [Level 2][탐욕법(Greedy)] 조이스틱

function solution(name) {
  const alphaMove = {};
  const n = name.length;

  let leftRightMove = n - 1;
  let answer = 0;

  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach(
    (char, i) => (alphaMove[char] = i <= 13 ? i : 26 - i)
  );

  for (let x = 0; x < n; x++) {
    answer += alphaMove[name[x]];

    let y = x + 1;
    while (y < n && name[y] === "A") y++;

    console.log(x, y, x + x + n - y, n - y + n - y + x);

    leftRightMove = Math.min(
      leftRightMove,
      Math.min(x + x + n - y, n - y + n - y + x)
    );
  }

  answer += leftRightMove;

  return answer;
}
