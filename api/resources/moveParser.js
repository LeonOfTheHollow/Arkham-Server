const parse = (gameState, move) => {
  console.log("The parser received state: ", gameState);
  console.log("The parser received move: ", move);
  const playerId = move.player;
  switch (move.type) {
    case 'CREATE_GATE':
      console.log("A gate is opening...");
      const newGameState = {
        ...gameState._doc,
      };
      newGameState.game.board.map.FrenchHillStreets.events = ['Gate to the Sunken City'];
      console.log("The path is open!: ", newGameState.game.board.map.FrenchHillStreets.events);
      console.log("Parser returned state: ", newGameState.game.board.map);
      return newGameState;
  }
}

module.exports = {
  parse,
};