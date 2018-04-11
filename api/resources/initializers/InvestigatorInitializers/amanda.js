const Decks = require('../../items/Decks');

const rollNewAmanda = () => {
  const AmandaSharpe = {};
  AmandaSharpe.name = "Amanda Sharpe";
  AmandaSharpe.job = "Student";
  AmandaSharpe.sanity = 5;
  AmandaSharpe.maxSanity = 5;
  AmandaSharpe.stamina = 5;
  AmandaSharpe.maxStamina = 5;
  AmandaSharpe.focus = 3;
  AmandaSharpe.home = "Bank of Arkham";
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

  AmandaSharpe.bag = Decks.addCardsToArray(AmandaSharpe.bag, Decks.commonItems, 1);
  console.log("Added an item to the bag: ", AmandaSharpe.bag);
  AmandaSharpe.bag = Decks.addCardsToArray(AmandaSharpe.bag, Decks.artifacts, 1);
  console.log("Added an artifact to the bag: ", AmandaSharpe.bag);
  AmandaSharpe.bag = Decks.addCardsToArray(AmandaSharpe.bag, Decks.spells, 1);
  console.log("Added a spell to the bag: ", AmandaSharpe.bag);
  AmandaSharpe.innates = Decks.addCardsToArray(AmandaSharpe.innates, Decks.skills, 2);
  console.log("Added two skills to Innates: ", AmandaSharpe.innates);
  console.log("What's in the bag at this point?", AmandaSharpe.bag);
  
  return AmandaSharpe;
}

module.exports = {
  rollNewAmanda,
}