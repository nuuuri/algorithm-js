// [Level 2][2022 KAKAO BLIND RECRUITMENT] 주차 요금 계산

function solution(fees, records) {
  const cars = {};
  const answer = [];

  records.forEach((record) => {
    const car = record.split(" ")[1];

    cars[car] ||= [];
    cars[car] = [...cars[car], record];
  });

  Object.keys(cars)
    .sort()
    .forEach((car) => {
      const record = cars[car];

      if (record.length % 2 > 0) {
        record.push(`23:59 ${car} OUT`);
      }

      let time = 0;

      for (let i = 0; i < record.length; i += 2) {
        const [timeIn, ,] = record[i].split(" ");
        const [timeOut, ,] = record[i + 1].split(" ");

        time += getMinutes(timeOut) - getMinutes(timeIn);
      }

      if (time <= fees[0]) {
        answer.push(fees[1]);
      } else {
        const overTime = time - fees[0];
        const cost = fees[1] + Math.ceil(overTime / fees[2]) * fees[3];
        answer.push(cost);
      }
    });

  return answer;
}

function getMinutes(time) {
  const [h, m] = time.split(":").map(Number);

  return h * 60 + m;
}
