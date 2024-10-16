// function solution() {
//   /* */
// }

import combination from "./algorithm/combination";
import permutation from "./algorithm/permutation";

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", function (line: string) {
//   /* 입력 값 처리 부분 */

//   rl.close(); // 입력 종료
// }).on("close", function () {
//   solution();
//   process.exit();
// });

const arr = ["a", "b", "c"];

console.log(permutation(arr, 2, true));
