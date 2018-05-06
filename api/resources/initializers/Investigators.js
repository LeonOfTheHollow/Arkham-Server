//const { rollNewAmanda, rollNewDarrell, rollNewGloria, rollNewKate, rollNewPete, rollNewWilliam } = require("./InvestigatorInitializers");
const { rollNewAmanda } = require("./InvestigatorInitializers/amanda");
const { rollNewDarrell } = require("./InvestigatorInitializers/darrell");
const { rollNewGloria } = require("./InvestigatorInitializers/gloria");
const { rollNewKate } = require("./InvestigatorInitializers/kate");
const { rollNewPete } = require("./InvestigatorInitializers/pete");
const { rollNewWilliam } = require("./InvestigatorInitializers/william");

const populateInvestigators = options => {
  /* options : {
    numberOfPlayers: Number,

  }
  */
  console.log(`\n${options.numberOfPlayers}\n`);
  const investigators = [];
  console.log("Number of investigator slots: ", options.numberOfPlayers);
  console.log("Number of investigators generated: ", investigators.length);
  const alreadyChosen = [];
  while (investigators.length < options.numberOfPlayers) {
    console.log("We're executing a loop of character population.\n");
    let seed = Math.ceil(Math.random() * 6);
    console.log("This is the set of characters already used: ", alreadyChosen, "\n");
    while (alreadyChosen.find(element => element === seed)) seed = Math.ceil(Math.random() * 6);
    alreadyChosen.push(seed);
    console.log("This is the chargen seed: ", seed, "\n");
    switch (seed) {
      case 1:
        investigators.push(rollNewAmanda());
        break;
      case 2:
        investigators.push(rollNewDarrell());
        break;
      case 3:
        investigators.push(rollNewGloria());
        break;
      case 4:
        investigators.push(rollNewKate());
        break;
      case 5:
        investigators.push(rollNewPete());
        break;
      case 6:
        investigators.push(rollNewWilliam());
        break;
      default:
        return;
    }
  }
  console.log("Finished while loop to populate Investigators. Returning: ", investigators);
  return investigators;
}

module.exports = {
  populateInvestigators
};