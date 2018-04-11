const Decks = require('../../items');

export const rollNewKate = () => {
  const KateWinthrop = {};
  KateWinthrop.name = "Kate Winthrop";
  KateWinthrop.job = "Scientist";
  KateWinthrop.sanity = 6;
  KateWinthrop.maxSanity = 6;
  KateWinthrop.stamina = 4;
  KateWinthrop.maxStamina = 4;
  KateWinthrop.focus = 1;
  KateWinthrop.home = "Science Building";
  KateWinthrop.statBlock = {
    speedMin: 1,
    sneakMin: 2,
    topPointer: 2,
    fightMin: 1,
    willMin: 0,
    midPointer: 2,
    loreMin: 2,
    luckMin: 1,
    bottomPointer: 2
  };
  KateWinthrop.wallet = 7;
  KateWinthrop.clues = 2;
  KateWinthrop.monsterTrophies = 0;
  KateWinthrop.gateTrophies = 0;
  KateWinthrop.bag = [];
  KateWinthrop.innates = [];
  KateWinthrop.tags = [];

  KateWinthrop.bag = Decks.addCardsToArray(KateWinthrop.bag, Decks.commonItems, 1);
  KateWinthrop.bag = Decks.addCardsToArray(KateWinthrop.bag, Decks.artifacts, 1);
  KateWinthrop.bag = Decks.addCardsToArray(KateWinthrop.bag, Decks.spells, 2);
  KateWinthrop.bag = Decks.addCardsToArray(KateWinthrop.innates, Decks.skills, 1);
  
  return KateWinthrop;
}