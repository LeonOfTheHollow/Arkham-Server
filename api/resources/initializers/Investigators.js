//const { rollNewAmanda, rollNewDarrell, rollNewGloria, rollNewKate, rollNewPete, rollNewWilliam } = require("./InvestigatorInitializers");
const { rollNewAmanda } = require("./InvestigatorInitializers/amanda");
const { rollNewDarrell } = require("./InvestigatorInitializers/darrell");
// const { rollNewGloria } = require("./InvestigatorInitializers/gloria");
// const { rollNewKate } = require("./InvestigatorInitializers/kate");
// const { rollNewPete } = require("./InvestigatorInitializers/pete");
// const { rollNewWilliam } = require("./InvestigatorInitializers/william");

const populateInvestigators = options => {
  /* options : {
    numberOfPlayers: Number,

  }
  */
  console.log(`\n${options.numberOfPlayers}\n`);
  const investigators = [];
  console.log("Number of investigator slots: ", options.numberOfPlayers);
  console.log("Number of investigators generated: ", investigators.length);
  while (investigators.length < options.numberOfPlayers) {
    console.log("We're executing a loop of character population.\n");
    let seed = Math.floor(Math.random() * 6);
    while (seed > 1) seed = Math.floor(Math.random() * 6);
    console.log("This is the chargen seed: ", seed, "\n");
    switch (seed) {
      case 0:
        console.log("Amanda is investigating the strange happenings!", rollNewAmanda);
        const temp = rollNewAmanda();
        console.log("Adding Amanda's character sheet to the game: ", temp);
        investigators.push(temp);
        break;
      case 1:
        console.log("Darrell is investigating the strange happenings!", rollNewDarrell);
        investigators.push(rollNewDarrell());
        break;
      // case 2:
      //   console.log("Gloria is investigating the strange happenings!", rollNewGloria);
      //   investigators.push(rollNewGloria());
      //   break;
      // case 3:
      //   console.log("Kate is investigating the strange happenings!", rollNewKate);
      //   investigators.push(rollNewKate());
      //   break;
      // case 4:
      //   console.log("Pete is investigating the strange happenings!", rollNewPete);
      //   investigators.push(rollNewPete());
      //   break;
      // case 5:
      //   console.log("William is investigating the strange happenings!", rollNewWilliam);
      //   investigators.push(rollNewWilliam());
      //   break;
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