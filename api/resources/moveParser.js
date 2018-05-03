const parse = (gameState, move) => {
  console.log("The parser received state: ", gameState);
  console.log("The parser received move: ", move);
  const playerId = move.player;
  const newGameState = {
    ...gameState._doc.game,
  };
  switch (move.type) {
    case 'CREATE_GATE':
      console.log("A gate is opening...");
      newGameState.board.map.FrenchHillStreets.events = ['Gate to the Sunken City'];
      console.log("The path is open!: ", newGameState.board.map.FrenchHillStreets.events);
      console.log("Parser returned state: ", newGameState.board.map);
      return newGameState;
    case 'PLACE_CHARACTER':
      console.log("An investigation begins...");
      const thisInvestigator = newGameState.investigators.find(investigator => (investigator.playerId === playerId));
      newGameState.board.map[thisInvestigator.home].investigators.push(thisInvestigator);
      return newGameState;
    case 'MOVE_CHARACTER':
      
  }
}

module.exports = {
  parse,
};