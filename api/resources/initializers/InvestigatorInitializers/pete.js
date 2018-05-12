const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewPete = () => {
  const TrashcanPete = {};
  TrashcanPete.name = "'Trashcan' Pete";
  TrashcanPete.job = "Drifter";
  TrashcanPete.sanity = 4;
  TrashcanPete.maxSanity = 4;
  TrashcanPete.stamina = 6;
  TrashcanPete.maxStamina = 6;
  TrashcanPete.focus = 1;
  TrashcanPete.home = "Warehouse Alleys";
  TrashcanPete.statBlock = {
    speedMin: 0,
    sneakMin: 3,
    topPointer: 2,
    fightMin: 2,
    willMin: 2,
    midPointer: 2,
    loreMin: 0,
    luckMin: 0,
    bottomPointer: 2
  };
  TrashcanPete.wallet = 1;
  TrashcanPete.clues = 3;
  TrashcanPete.monsterTrophies = 0;
  TrashcanPete.gateTrophies = 0;
  TrashcanPete.bag = [];
  TrashcanPete.innates = [Decks.getByName("Duke", Decks.allies)];
  TrashcanPete.tags = ['Bad Credit'];

  TrashcanPete.bag = Decks.addCardsToArray(TrashcanPete.bag, Decks.commonItems, 1);
  TrashcanPete.bag = Decks.addCardsToArray(TrashcanPete.bag, Decks.artifacts, 1);
  TrashcanPete.bag = Decks.addCardsToArray(TrashcanPete.innates, Decks.skills, 1);
  
  return new Investigator(TrashcanPete.name, TrashcanPete.job, TrashcanPete.home, TrashcanPete.maxSanity, TrashcanPete.maxStamina, TrashcanPete.focus, TrashcanPete.statBlock, TrashcanPete.wallet, TrashcanPete.clues, TrashcanPete.gateTrophies, 1,1,0,1,0, TrashcanPete.tags);
}

module.exports = {
  rollNewPete
}