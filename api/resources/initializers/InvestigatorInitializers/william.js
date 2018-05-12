const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewWilliam = () => {
  const WilliamYorick = {};
  WilliamYorick.name = "William Yorick";
  WilliamYorick.job = "Gravedigger";
  WilliamYorick.sanity = 4;
  WilliamYorick.maxSanity = 4;
  WilliamYorick.stamina = 6;
  WilliamYorick.maxStamina = 6;
  WilliamYorick.focus = 1;
  WilliamYorick.home = "Christchurch Cemetery";
  WilliamYorick.statBlock = {
    speedMin: 0,
    sneakMin: 1,
    topPointer: 2,
    fightMin: 1,
    willMin: 3,
    midPointer: 2,
    loreMin: 1,
    luckMin: 1,
    bottomPointer: 2
  };
  WilliamYorick.wallet = 4;
  WilliamYorick.clues = 0;
  WilliamYorick.monsterTrophies = 5;
  WilliamYorick.gateTrophies = 0;
  WilliamYorick.bag = [];
  WilliamYorick.innates = [];
  WilliamYorick.tags = [];

  WilliamYorick.bag = Decks.addCardsToArray(WilliamYorick.bag, Decks.commonItems, 2);
  WilliamYorick.bag = Decks.addCardsToArray(WilliamYorick.bag, Decks.artifacts, 2);
  WilliamYorick.bag = Decks.addCardsToArray(WilliamYorick.innates, Decks.skills, 1);
  
  return new Investigator(WilliamYorick.name, WilliamYorick.job, WilliamYorick.home, WilliamYorick.maxSanity, WilliamYorick.maxStamina, WilliamYorick.focus, WilliamYorick.statBlock, WilliamYorick.wallet, WilliamYorick.clues, WilliamYorick.gateTrophies, 2,2,0,1,0, WilliamYorick.tags);
}

module.exports = {
  rollNewWilliam
}