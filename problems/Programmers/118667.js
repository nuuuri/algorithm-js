// [Level 2][2022 KAKAO TECH INTERNSHIP] 두 큐 합 같게 만들기
// 그리디 알고리즘

function solution(queue1, queue2) {
  const n = queue1.length;

  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const target = (sum1 + sum2) / 2;

  let index1 = 0;
  let index2 = 0;

  if ((sum1 + sum2) % 2 > 0) return -1;

  for (let i = 0; i < n * 3; i++) {
    if (sum1 === target) return i;

    if (sum1 > target) {
      // Array.shift 는 O(N)이므로 index를 사용
      queue2.push(queue1[index1]);
      sum1 -= queue1[index1];
      index1++;
    } else {
      queue1.push(queue2[index2]);
      sum1 += queue2[index2];
      index2++;
    }
  }

  return -1;
}
