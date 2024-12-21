// [Level 3][Summer/Winter Coding(~2018)] 스티커 모으기(2)

function solution(sticker) {
  const n = sticker.length;

  if (n === 1) return sticker[0];

  const DP = (start, end) => {
    let prev = 0;
    let current = 0;

    for (let i = start; i <= end; i++) {
      const temp = Math.max(current, prev + sticker[i]);
      prev = current;
      current = temp;
    }

    return current;
  };

  const case1 = DP(0, n - 2);
  const case2 = DP(1, n - 1);

  return Math.max(case1, case2);
}
