// [Level 2][2018 KAKAO BLIND RECRUITMENT][1차] 캐시

function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.includes(city)) {
      answer += 1;
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
    } else {
      answer += 5;
      cache.push(city);
      if (cache.length > cacheSize) cache.shift();
    }
  }

  return answer;
}
