const smokeCigarette = (game, investigator) => {
  investigator.stamina--;
  investigator.sanity++;
  investigator.clientState.narration += "You cough as you exhale, but you do feel a bit calmer.";
}

const CommonItemEffects = {
  name: 'Common Effects',
  effects: [
    {
      index: 0,
      name: 'Pack of Cigarettes',
      effect: smokeCigarette,
    }
  ],
}

module.exports = {
  CommonItemEffects
}