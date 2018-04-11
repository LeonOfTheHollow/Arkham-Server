const Decks = require('../../items');

export const rollNewWilliam = () => {
  const WilliamYorick = {};
  WilliamYorick.name = "William Yorick";
  WilliamYorick.job = "Actor/Gravedigger";
  WilliamYorick.sanity = 4;
  WilliamYorick.maxSanity = 4;
  WilliamYorick.stamina = 6;
  WilliamYorick.maxStamina = 6;
  WilliamYorick.focus = 1;
  WilliamYorick.home = "South Church";
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
  
  return WilliamYorick;
}