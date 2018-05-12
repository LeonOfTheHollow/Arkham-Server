const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewGloria = () => {
  const GloriaGoldberg = {};
  GloriaGoldberg.name = "Gloria Goldberg";
  GloriaGoldberg.job = "Author";
  GloriaGoldberg.sanity = 6;
  GloriaGoldberg.maxSanity = 6;
  GloriaGoldberg.stamina = 4;
  GloriaGoldberg.maxStamina = 4;
  GloriaGoldberg.focus = 2;
  GloriaGoldberg.home = "Velma's Diner";
  GloriaGoldberg.statBlock = {
    speedMin: 1,
    sneakMin: 0,
    topPointer: 2,
    fightMin: 0,
    willMin: 2,
    midPointer: 2,
    loreMin: 1,
    luckMin: 2,
    bottomPointer: 2
  };
  GloriaGoldberg.wallet = 7;
  GloriaGoldberg.clues = 2;
  GloriaGoldberg.monsterTrophies = 0;
  GloriaGoldberg.gateTrophies = 0;
  GloriaGoldberg.bag = [];
  GloriaGoldberg.innates = [];
  GloriaGoldberg.tags = [];

  return new Investigator(GloriaGoldberg.name, GloriaGoldberg.job, GloriaGoldberg.home, GloriaGoldberg.maxSanity, GloriaGoldberg.maxStamina, GloriaGoldberg.focus, GloriaGoldberg.statBlock, GloriaGoldberg.wallet, GloriaGoldberg.clues, GloriaGoldberg.gateTrophies, 1,2,0,1,0, GloriaGoldberg.tags);
}

module.exports = {
  rollNewGloria
}