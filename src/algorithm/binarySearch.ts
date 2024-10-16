// 반복문 사용
export function binarySearchIterative(list: number[], target: number) {
  let leftIndex = 0;
  let rightIndex = list.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (list[midIndex] === target) {
      return midIndex;
    } else if (list[midIndex] < target) {
      // 오른쪽 부분 탐색
      leftIndex = midIndex + 1;
    } else {
      // 왼쪽 부분 탐색
      rightIndex = midIndex - 1;
    }
  }

  return -1; // target을 찾지 못함
}
