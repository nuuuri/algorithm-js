// [Level 2][PCCP 기출문제] 2번 / 퍼즐 게임 챌린지

function solution(diffs, times, limit) {
  let left = 1;
  let right = diffs.reduce((acc, cur) => Math.max(acc, cur), 1);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const time = solvePuzzles(diffs, times, mid);

    if (time > limit) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right + 1;
}

function solveOnePuzzle(diff, level, time_cur, time_prev) {
  if (diff <= level) {
    return time_cur;
  }

  return (time_cur + time_prev) * (diff - level) + time_cur;
}

function solvePuzzles(diffs, times, level) {
  let time = 0;

  for (let i = 0; i < diffs.length; i += 1) {
    const time_cur = times[i];
    const time_prev = i === 0 ? 0 : times[i - 1];

    time += solveOnePuzzle(diffs[i], level, time_cur, time_prev);
  }

  return time;
}
