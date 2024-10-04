# 알고리즘 문제풀이 with TypeScript

### 1. 패키지 설치

```bash
yarn // or yarn install
```

### 2. 코드 실행

```bash
yarn start
```

### 3. 입력 받기

```ts
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line: string) {
  /* 입력한 값을 처리하는 코드 */

  rl.close(); // 입력 종료
}).on("close", function () {
  /* 종료 전 실행할 코드 */
  process.exit();
});
```
