const Game = require('../models/Game');
const { parse } = require('../resources/moveParser');
const initializeGameState = require('../resources/gameInitializer');

const buildNewGame = async (req, res) => {
  const gameOptions = {
    numberOfPlayers: 1,
  }
  const newGame = initializeGameState.initializeGameState(gameOptions);
  const game = new Game({game: newGame});
  try {
    const createdGame = await game.save();
    res.status(201).send(createdGame);
  } catch(e) {
    console.log(e);
  }
}

const makeMove = async (req, res) => {
  try {
    const currentGameState = await Game.findById(req.body.gameId);
    console.log(currentGameState);
    const newGameState = parse(currentGameState, req.body.move);
    console.log("About to update state of game in database to: ", newGameState.game.board.map.FrenchHillStreets);
    const updatedGame = await Game.findOneAndUpdate(
      { "_id" : req.body.gameId },
      { game : newGameState.game },
      { returnNewDocument: true }
    ); //I can't quite figure out how to get this findOneAndUpdate to return the new document value, it seems to be a syntax thing. Worked around for now.
    console.log("About to respond with the new state of the game: ", updatedGame.game.board.map.FrenchHillStreets);
    const supremeMostUpdatedGame = await Game.findById(req.body.gameId); //We should be able to factor out this request.
    res.status(200).send(supremeMostUpdatedGame);
  } catch(e) {
    console.log(e);
  }
}

const getAllGames = async (req, res) => {
  try {
    const allGames = await Game.find({});
    res.status(200).send(allGames);
  } catch(e) {
    console.log(e);
  }
}


module.exports = {
  buildNewGame,
  makeMove,
  getAllGames,
}