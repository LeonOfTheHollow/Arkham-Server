const { LichStEncounters } = require('./encounterScripts/LichStreetEncounters');
const { investigate_location, process_encounter_choice } = require('./moveScripts/investigate_location');


const parse = (gameState, move) => {
  console.log("The parser received state: ", gameState);
  console.log("The parser received move: ", move);
  const playerId = move.player;
  const newGameState = {
    ...gameState._doc.game,
  };
  const thisInvestigator = newGameState.investigators.find(investigator => {
    if (investigator.playerId._id === playerId) return investigator;
  });
  switch (move.type) {
    case 'CREATE_GATE':
      newGameState.board.map.FrenchHillStreets.events = ['Gate to the Sunken City'];
      console.log("The path is open!: ", newGameState.board.map.FrenchHillStreets.events);
      console.log("Parser returned state: ", newGameState.board.map);
      return newGameState;
    case 'PLACE_CHARACTER':
      console.log("An investigation begins...");
      newGameState.board.map[thisInvestigator.home].investigators.push(thisInvestigator);
      return newGameState;
    case 'UPDATE_GAME':
      return newGameState;
    case 'BEGIN_GAME':
      newGameState.investigators.forEach(investigator => {
        investigator.location = newGameState.board.map.locations.find(location => {
          if (location.name === investigator.home) return location;
        }).name;
        newGameState.board.map.locations.forEach(location => {
          if (investigator.location === location.name) {
            location.investigators.push(investigator);
          };
        });

        investigator.clientState = {
          view_type: 'UPKEEP',
          contextButtons: [
            {
              text: 'Check the map',
              type: 'UPDATE_GAME',
              payload: investigator.playerId,
            },
            {
              text: 'Ready...',
              type: 'GO_TO_MOVEMENT_PHASE',
              payload: investigator.playerId,
            }
          ],
          narration: "Before you set out, be sure to activate any UPKEEP-only abilities or items. Also, your move score depends on your Speed at this time.",
        }
      });
      return newGameState;
    case 'GO_TO_MOVEMENT_PHASE':
      newGameState.investigators.forEach(investigator => {
        investigator.movePoints = investigator.minSpeed + investigator.topPointer + thisInvestigator.speedBuffs.reduce(((total, buff) => total + buff.value), 0);
        investigator.clientState = {
          view_type: 'MOVEMENT',
          contextButtons: newGameState.board.map.locations.find(location => {
            // console.log("Comparing:", location);
            // console.log("To:", investigator.location);
            if (location.name === investigator.location) return location;
          }).paths.map(path => {
            return {
              text: path.description,
              type: 'TAKE_PATH',
              payload: path.destination,
            }
          }),
          narration: newGameState.board.map.locations.find(location => location.name === investigator.location).description,
        }
      });
      return newGameState;
    case 'TAKE_PATH':
      thisInvestigator.location = newGameState.board.map.locations[move.payload].name;
      console.log("New location: ", thisInvestigator.location);
      thisInvestigator.movePoints--;
      thisInvestigator.clientState = {
        view_type: 'MOVEMENT',
        contextButtons: newGameState.board.map.locations.find(location => {
          if (location.name === thisInvestigator.location) return location;
        }).paths.map(path => {
          return {
            text: path.description,
            type: 'TAKE_PATH',
            payload: path.destination,
          }
        }),
        narration: newGameState.board.map.locations.find(location => location.name === thisInvestigator.location).description,
      }
      return newGameState;
    case 'CHANGE_SLIDER':
      console.log("Changing slider with this data:", move.payload);
      if (move.payload.targetSlider === 'top_slider') {
        console.log("Touched the top slider!");
        thisInvestigator.topPointer = move.payload.targetValue;
      } else if (move.payload.targetSlider === 'mid_slider') {
        thisInvestigator.midPointer = move.payload.targetValue;
      } else if (move.payload.targetSlider === 'bottom_slider') {
        thisInvestigator.bottomPointer = move.payload.targetValue;
      }
      return newGameState;
    case 'INVESTIGATE_LOCATION':
      //get a rand()
      return investigate_location(newGameState, move.payload, thisInvestigator);
    case 'PROCESS_ENCOUNTER_CHOICE':
      return process_encounter_choice(newGameState, move.payload, thisInvestigator);
  }
}

module.exports = {
  parse,
};