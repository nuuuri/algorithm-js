// [Level 3][2024 KAKAO WINTER INTERNSHIP] 주사위 고르기

function solution(dice) {
  const diceIndexs = new Array(dice.length).fill().map((v, i) => i + 1);
  let answer = [];
  let winCount = 0;

  for (let comb of combination(diceIndexs, dice.length / 2)) {
    const myDices = [];
    const yourDices = [];
    const copyOfComb = [...comb];
    let count = 0;

    for (let i = dice.length; i > 0; i--) {
      if (i === copyOfComb[copyOfComb.length - 1]) {
        myDices.push(dice[i - 1]);
        copyOfComb.pop();
      } else yourDices.push(dice[i - 1]);
    }

    const sumOfMine = sumOfDices(myDices);
    const sumOfYours = sumOfDices(yourDices);

    sumOfMine.sort((a, b) => a - b);
    sumOfYours.sort((a, b) => a - b);

    for (let mine of sumOfMine) {
      let left = 0;
      let right = sumOfYours.length - 1;

      if (sumOfYours[right] < mine) {
        count += right + 1;
        continue;
      }

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sumOfYours[mid] < mine && sumOfYours[mid + 1] >= mine) {
          count += mid + 1;
          break;
        } else if (sumOfYours[mid] < mine) {
          left = mid + 1;
        } else right = mid - 1;
      }
    }

    if (winCount < count) {
      winCount = count;
      answer = comb;
    }
  }

  return answer;
}

function combination(list, selectNumber) {
  const results = [];

  if (selectNumber === 1) return list.map((val) => [val]);

  list.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const comb = combination(rest, selectNumber - 1);
    const result = comb.map((val) => [fixed, ...val]);
    results.push(...result);
  });

  return results;
}

function sumOfDices(dices) {
  const results = [];

  if (dices.length === 1) return dices[0];

  dices[0].forEach((val) => {
    const sums = sumOfDices(dices.slice(1)).map((sum) => val + sum);
    results.push(...sums);
  });

  return results;
}
