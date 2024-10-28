// [Level 2][PCCP 기출문제] 3번 / 아날로그 시계

function solution(h1, m1, s1, h2, m2, s2) {
  let result = 0;
  let start = true;

  while (!(h1 === h2 && m1 === m2 && s1 === s2)) {
    const [h, m, s] = getAngles(h1, m1, s1);
    const [hh, mm, ss] = getAngles(h1, m1, s1 + 1);

    if (start) {
      start = false;
      if (h === s) result++;
      if (m === s) result++;
      if (h === m) result--;
    }

    if (h > s && hh <= (ss || 360)) result++;
    if (m > s && mm <= (ss || 360)) result++;
    if (
      h > s &&
      hh <= (ss || 360) &&
      m > s &&
      mm <= (ss || 360) &&
      hh === 0 &&
      mm === 0
    )
      result--;

    s1++;

    if (s1 === 60) {
      s1 = 0;
      m1++;
    }

    if (m1 === 60) {
      m1 = 0;
      h1++;
    }
  }

  return result;
}

function getAngles(h, m, s) {
  if (s === 60) {
    s = 0;
    m++;
  }

  if (m === 60) {
    m = 0;
    h++;
  }

  const hAngle = (h % 12) * 30 + (m * 30) / 60 + (s * 30) / (60 * 60);
  const mAngle = (m * 360) / 60 + (s * 360) / (60 * 60);
  const sAngle = (s * 360) / 60;

  return [hAngle % 360, mAngle % 360, sAngle % 360];
}
