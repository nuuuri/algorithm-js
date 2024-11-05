// [Level 2][연습문제] 당구 연습

function solution(m, n, startX, startY, balls) {
  return balls.map(([a, b]) =>
    Math.min(
      ...[
        [-a, b],
        [a, 2 * n - b],
        [2 * m - a, b],
        [a, -b],
      ].map(([aa, bb], i) => {
        if (i === 0 && b === startY && a < startX) return Infinity;
        else if (i === 1 && a === startX && b > startY) return Infinity;
        else if (i === 2 && b === startY && a > startX) return Infinity;
        else if (i === 3 && a === startX && b < startY) return Infinity;
        else return getDistance(startX, startY, aa, bb);
      })
    )
  );
}

function getDistance(x1, y1, x2, y2) {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}
