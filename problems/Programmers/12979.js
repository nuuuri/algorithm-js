// [Level 3][Summer/Winter Coding(~2018)] 기지국 설치

function solution(n, stations, w) {
  let answer = 0;
  let start = 1;

  stations.forEach((station, idx) => {
    if (start <= station - w - 1) {
      answer += Math.ceil((station - w - start) / (w * 2 + 1));
    }

    start = station + w + 1;

    if (idx === stations.length - 1 && station + w + 1 <= n) {
      answer += Math.ceil((n - station - w) / (w * 2 + 1));
    }
  });

  return answer;
}
