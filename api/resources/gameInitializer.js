const initializeBoard = require('./initializers/Board');
const populateInvestigators = require('./initializers/Investigators');
const initializeTradeablesDecks = require('./initializers/Tradeables');
const initializeUntradeablesDecks = require('./initializers/Untradeables');
const initializeMonsterCup = require('./initializers/MonsterCup');
const initializeOldOne = require('./initializers/OldOne');

const initializeGameState = (gameOptions) => {
  console.log("This is the populateInvestigators import:", populateInvestigators);
  let state = {
    board: initializeBoard.initializeBoard(),
    investigators: populateInvestigators.populateInvestigators(gameOptions),
    tradeablesDecks: initializeTradeablesDecks.initializeTradeablesDecks(),
    untradeablesDecks: initializeUntradeablesDecks.initializeUntradeablesDecks(),
    monsterCup: initializeMonsterCup.initializeMonsterCup(),
  };
  state.oldOne = initializeOldOne.initializeOldOne();

  return state;
}

module.exports = {
  initializeGameState
};