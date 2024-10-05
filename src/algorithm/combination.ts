// 조합
export default function combination<T>(
  list: T[],
  selectNumber: number,
  repeatable: boolean = false
) {
  const results: T[][] = [];

  if (selectNumber === 1) return list.map((val) => [val]);

  list.forEach((fixed, index, origin) => {
    // 현재 선택한 값 이후의 나머지 배열
    // 순서를 고려하지 않기 때문에, 현재 값 이전은 고려하지 않음
    // (이전 값은 이미 선택했거나, 선택하지 않기로 결정됨)
    const rest = origin.slice(repeatable ? index : index + 1);

    // 나머지 배열에 대하여 조합을 구함
    const comb = combination(rest, selectNumber - 1);

    // 현재 선택한 값과 comb을 합침
    const result = comb.map((val) => [fixed, ...val]);

    results.push(...result);
  });

  return results;
}
