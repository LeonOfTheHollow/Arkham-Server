const makeTest = (investigator, stat, difficulty = 0, tags = []) => {
  let value;
  switch(stat) {
    case 'speed':
      value = investigator.minSpeed + investigator.topPointer + investigator.speedBuffs.reduce(((total, buff) => total + buff.value), 0);
      break;
    case 'sneak':
      value = investigator.minSneak + 3 - investigator.topPointer + investigator.sneakBuffs.reduce(((total, buff) => total + buff.value), 0);
      break;
    case 'will':
      value = investigator.minWill + investigator.midPointer + investigator.willBuffs.reduce(((total, buff) => total + buff.value), 0);
      break;
    case 'fight':
      value = investigator.minFight + 3 - investigator.midPointer + investigator.fightBuffs.reduce(((total, buff) => total + buff.value), 0);
      break;
    case 'lore':
      value = investigator.minLore + investigator.bottomPointer + investigator.loreBuffs.reduce(((total, buff) => total + buff.value), 0);
      break;
    case 'luck':
      value = investigator.minLuck + investigator.bottomPointer + investigator.luckBuffs.reduce(((total, buff) => total + buff.value), 0);
      break;
    default:
      value = 1;
      break;
  }

  let bar = 0.65;
  if (investigator.tags.find(tag => tag === "Blessed")) bar = 0.5;
  if (investigator.tags.find(tag => tag === "Cursed")) bar = 0.83;
  
  let successes = 0;
  for (let i = 0; i < value + difficulty; i++) {
    if (Math.random() > bar) successes++;
  }
  return successes;
}

module.exports = {
  makeTest
}