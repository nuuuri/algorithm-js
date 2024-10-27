// [Level 1][PCCP 기출문제] 1번 / 붕대 감기

function solution(bandage, health, attacks) {
  let hp = health;
  let current = 0;

  for (let attack of attacks) {
    const healCount = attack[0] - current - 1;
    hp +=
      healCount * bandage[1] + Math.floor(healCount / bandage[0]) * bandage[2];

    if (hp > health) hp = health;

    hp -= attack[1];
    current = attack[0];

    if (hp <= 0) return -1;
  }

  return hp > 0 ? hp : -1;
}
