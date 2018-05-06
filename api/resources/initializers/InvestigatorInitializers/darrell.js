const Decks = require('../../items/Decks');

const rollNewDarrell = () => {
  const DarrellSimmons = {};
  DarrellSimmons.name = "Darrell Simmons";
  DarrellSimmons.job = "Photographer";
  DarrellSimmons.sanity = 4;
  DarrellSimmons.maxSanity = 4;
  DarrellSimmons.stamina = 6;
  DarrellSimmons.maxStamina = 6;
  DarrellSimmons.focus = 2;
  DarrellSimmons.home = "Newspaper";
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

  DarrellSimmons.bag = Decks.addCardsToArray(DarrellSimmons.bag, Decks.commonItems, 1);
  DarrellSimmons.bag = Decks.addCardsToArray(DarrellSimmons.bag, Decks.artifacts, 2);
  DarrellSimmons.bag = Decks.addCardsToArray(DarrellSimmons.innates, Decks.skills, 1);
  
  return DarrellSimmons;
}

module.exports = {
  rollNewDarrell
}