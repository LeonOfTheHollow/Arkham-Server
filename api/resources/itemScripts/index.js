const { CommonItemEffects } = require('./commonItems');

const itemEffects = [CommonItemEffects];

const resolveItemEffect = (game, itemName, investigator) => {
  const effectToUse = itemEffects[0].effects.find(itemEffect => itemEffect.name === itemName);
  effectToUse.effect(game, investigator);
}

module.exports = {
  resolveItemEffect
}