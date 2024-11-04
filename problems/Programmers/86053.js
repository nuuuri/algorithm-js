// [Level 3][월간 코드 챌린지 시즌3] 금과 은 운반하기
// Parametric Search

function solution(a, b, g, s, w, t) {
  let start = 0;
  let end = (answer = Number.MAX_SAFE_INTEGER);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isPossible(a, b, g, s, w, t, mid)) {
      end = mid - 1;
      answer = mid;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

function isPossible(a, b, g, s, w, t, time) {
  let gold = (silver = total = 0);

  for (let i = 0; i < g.length; i++) {
    let cnt = Math.floor(time / (t[i] * 2));

    if (Math.floor(time / t[i]) % 2 === 1) cnt++; // 운반하고 돌아오지 않는 경우

    gold += Math.min(g[i], w[i] * cnt);
    silver += Math.min(s[i], w[i] * cnt);
    total += Math.min(g[i] + s[i], w[i] * cnt);
  }

  return a <= gold && b <= silver && a + b <= total;
}
