// [Level 3][PCCP 기출문제] 4번 / 수식 복원하기

function solution(expressions) {
  let answer = [];
  let minSystem = 2;

  const system = new Array(10).fill(true);
  const sumList = [];

  for (let expression of expressions) {
    const localSumList = new Array(10).fill(null);
    const exp = expression.split(" ");

    // minSystem 업데이트
    for (let i = 0; i < 5; i += 2) {
      const maxNum =
        Array.from(exp[i]).reduce(
          (acc, cur) => (cur > acc ? +cur : +acc),
          "0"
        ) + 1;

      if (minSystem < maxNum) minSystem = maxNum;
    }

    for (let i = 2; i < minSystem; i++) {
      system[i] = false;
    }

    for (let s = minSystem; s < 10; s++) {
      if (system[s] === false) continue;

      const decA = convertToDec(exp[0], s);
      const decB = convertToDec(exp[2], s) * (exp[1] === "+" ? 1 : -1);

      const sum = convertToSys(decA + decB, s);

      if (exp[4] === "X" || +exp[4] === sum) {
        localSumList[s] = sum;
      } else {
        system[s] = false;
      }
    }

    sumList.push(localSumList);
  }

  for (let idx = 0; idx < expressions.length; idx++) {
    const exp = expressions[idx].split(" ");
    let result = null;

    if (exp[4] === "X") {
      for (let s = 2; s < 10; s++) {
        if (system[s] === false) continue;

        if (result === null) {
          result = sumList[idx][s];
        } else if (result !== sumList[idx][s]) {
          result = "?";
          break;
        }
      }

      answer.push(expressions[idx].replace("X", result));
    }
  }

  return answer;
}

function convertToDec(num, system) {
  let result = 0;
  const numString = String(num);

  for (let i = 0; i < numString.length; i++) {
    result += numString[numString.length - 1 - i] * system ** i;
  }

  return result;
}

function convertToSys(num, system) {
  let result = "";

  while (num > 0) {
    result = (num % system) + result;
    num = Math.floor(num / system);
  }

  return +result;
}
