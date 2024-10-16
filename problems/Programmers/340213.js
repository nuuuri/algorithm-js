// [Level 1][PCCP 기출문제] 1번 / 동영상 재생기

function getTime(t) {
  const [min, sec] = t.split(":").map((val) => +val);

  return min * 60 + sec;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const totalTime = getTime(video_len);
  let currentTime = getTime(pos);

  for (let command of commands) {
    // 오프닝 건너뛰기
    if (currentTime >= getTime(op_start) && currentTime <= getTime(op_end)) {
      currentTime = getTime(op_end);
    }

    // 10초 전으로 이동
    if (command === "prev") {
      currentTime -= 10;

      if (currentTime < 0) {
        currentTime = 0;
      }
    }
    // 10초 후로 이동
    else {
      currentTime += 10;

      if (currentTime > totalTime) {
        currentTime = totalTime;
      }
    }
  }

  // 오프닝 건너뛰기
  if (currentTime >= getTime(op_start) && currentTime <= getTime(op_end)) {
    currentTime = getTime(op_end);
  }

  return `${String(Math.floor(currentTime / 60)).padStart(2, 0)}:${String(
    currentTime % 60
  ).padStart(2, 0)}`;
}
