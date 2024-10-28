// [Level 1][연습문제] 달리기 경주

function solution(players, callings) {
  const playersIndex = {};
  players.forEach((player, index) => (playersIndex[player] = index));

  for (let player of callings) {
    const index = playersIndex[player];

    playersIndex[player]--;
    playersIndex[players[index - 1]]++;

    players[index] = players[index - 1];
    players[index - 1] = player;
  }

  return players;
}
