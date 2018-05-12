const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewAmanda = () => {
  const AmandaSharpe = {};
  AmandaSharpe.name = "Amanda Sharpe";
  AmandaSharpe.job = "Student";
  AmandaSharpe.sanity = 5;
  AmandaSharpe.maxSanity = 5;
  AmandaSharpe.stamina = 5;
  AmandaSharpe.maxStamina = 5;
  AmandaSharpe.focus = 3;
  AmandaSharpe.home = "Lecture Hall";
  AmandaSharpe.texts = {
    intro: "The nightmares of a city beneath the waves come on stronger every night. You must find out why...",
  }
  AmandaSharpe.statBlock = {
    speedMin: 1,
    sneakMin: 1,
    topPointer: 2,
    fightMin: 1,
    willMin: 1,
    midPointer: 2,
    loreMin: 1,
    luckMin: 1,
    bottomPointer: 2
  };
  AmandaSharpe.wallet = 1;
  AmandaSharpe.clues = 1;
  AmandaSharpe.monsterTrophies = 0;
  AmandaSharpe.gateTrophies = 0;
  AmandaSharpe.bag = [];
  AmandaSharpe.innates = [];
  AmandaSharpe.tags = [];

  console.log("\nThis is the Investigator class prototype:\n", Investigator, "\n* * *\n");
  
  return new Investigator(AmandaSharpe.name, AmandaSharpe.job, AmandaSharpe.home, AmandaSharpe.maxSanity, AmandaSharpe.maxStamina, AmandaSharpe.focus, AmandaSharpe.statBlock, AmandaSharpe.wallet, AmandaSharpe.clues, AmandaSharpe.gateTrophies, 1, 1, 1, 2, 0);
}

module.exports = {
  rollNewAmanda
}