const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewDarrell = () => {
  const DarrellSimmons = {};
  DarrellSimmons.name = "Darrell Simmons";
  DarrellSimmons.job = "Photographer";
  DarrellSimmons.sanity = 4;
  DarrellSimmons.maxSanity = 4;
  DarrellSimmons.stamina = 6;
  DarrellSimmons.maxStamina = 6;
  DarrellSimmons.focus = 2;
  DarrellSimmons.home = "Arkham Investigator";
  DarrellSimmons.texts = {
    intro: "Take some time off, they said! You need some rest, they said! You'll show them. Camera slung on your shoulder like a revolutionary's rifle, you set off into the night.",
  }
  DarrellSimmons.statBlock = {
    speedMin: 2,
    sneakMin: 0,
    topPointer: 2,
    fightMin: 2,
    willMin: 1,
    midPointer: 2,
    loreMin: 0,
    luckMin: 1,
    bottomPointer: 2
  };
  DarrellSimmons.wallet = 4;
  DarrellSimmons.clues = 1;
  DarrellSimmons.monsterTrophies = 0;
  DarrellSimmons.gateTrophies = 0;
  DarrellSimmons.bag = [];
  DarrellSimmons.innates = [];
  DarrellSimmons.tags = ["Retainer"];

  return new Investigator(DarrellSimmons.name, DarrellSimmons.job, DarrellSimmons.home, DarrellSimmons.maxSanity, DarrellSimmons.maxStamina, DarrellSimmons.focus, DarrellSimmons.statBlock, DarrellSimmons.wallet, DarrellSimmons.clues, DarrellSimmons.gateTrophies, 1,2,0,1,0, DarrellSimmons.tags);
}

module.exports = {
  rollNewDarrell
}