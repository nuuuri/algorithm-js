// 순열
export default function permutation<T>(list: T[], selectNumber: number) {
  const results: T[][] = [];

  if (selectNumber === 1) return list.map((val) => [val]);

  list.forEach((fixed, index, origin) => {
    // 현재 선택한 값을 제외한 나머지 배열
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    // 나머지 배열에 대하여 순열을 구함
    const perm = permutation(rest, selectNumber - 1);

    // 현재 선택한 값과 perm을 합침
    const result = perm.map((val) => [fixed, ...val]);

    results.push(...result);
  });

  return results;
}
