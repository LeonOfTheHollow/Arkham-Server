const commonItems = [
  {
    name: ".18 Derringer",
    description:
      "Don't scoff: it's easy to hide, and most certainly still a gun."
  },
  {
    name: ".38 Revolver",
    description:
      "You worry that the weapon may not be effective against the...thing, you saw, but you feel better with it in your bag all the same."
  },
  {
    name: ".45 Automatic",
    description: "A sizeable and sturdy handgun."
  },
  {
    name: "Ancient Tome",
    description: "You don't want to know what kind of leather this is."
  },
  {
    name: "Axe",
    description: "Good for all kinds of jobs, this one included."
  },
  {
    name: "Bullwhip",
    description: "It belongs in a museum."
  },
  {
    name: "Dusty Manuscript",
    description:
      "This forgotten and unfinished work may still yet be amongst the most important ever committed to the page."
  },
  {
    name: "Tommy Gun",
    description: "An illegal instrument for filling the air with lead."
  },
  {
    name: "Knife",
    description:
      "A cold iron blade, with which to slay demons and worse (Yesterday you used it to cut summer sausage)."
  }
];

const artifacts = [
  {
    name: "Hero's Elder Sign",
    description: "By light and by fire, I seal this path!"
  },
  {
    name: "Survivor's Elder Sign",
    description: "By home and by hope, I seal this path!"
  },
  {
    name: "Poet's Elder Sign",
    description: "By reason and by rhyme, I seal this path!"
  },
  {
    name: "Pastor's Elder Sign",
    description: "By faith and by friends, I seal this path!"
  },
  {
    name: "Knight's Elder Sign",
    description: "By honor and by courage, I seal this path!"
  },
  {
    name: "Father's Elder Sign",
    description: "By love and by family, I seal this path!"
  },
  {
    name: "Alien Device",
    description:
      "You can't tell how it works at all - but it's definitely working."
  },
  {
    name: "Golden Sword of Yhar'Nataam",
    description: "It darkles. It ouzes. It...tincts."
  }
];

const spells = [
  {
    name: "Shrivelling",
    description: "All things turn to dust - some faster than others."
  },
  {
    name: "Find Gate",
    description: "The way is open. You only need to step through."
  },
  {
    name: "Foresee",
    description:
      "Knowledge is neither a blessing nor a curse. It is a pathway, and once you have begun to walk down it, there is no turning back."
  },
  {
    name: "Voice of Ra",
    description: "A voice silenced for millenia speaks once more tonight."
  },
  {
    name: "Fire of Celaeno",
    description: "A flame fuelled by madness finds ideal tinder here."
  }
];

const skills = [
  {
    name: "Confidence",
    description: "There is a power to ignorance."
  },
  {
    name: "Fisticuffs",
    description:
      "The scars of battles long lost will be the currency with which we purchase victory."
  },
  {
    name: "Performance",
    description:
      "As long as we can sing, and dance, we have something they do not."
  }
];

const allies = [
  {
    name: "Isabella Barnes",
    description: '"I can help - I have some things stashed away."'
  },
  {
    name: "Tom M. McMurphy",
    description: '"Aw, I seen miles worse than this in my New York days."'
  },
  {
    name: "Duke",
    description: '"Bark! Bark! Woof!"'
  }
];

const getByName = (name, deck) => {
  const fetchedItem = deck.filter(card => {
    if (card.name === name) return card;
  });
  return fetchedItem[0];
};

const getRandomCard = deck =>
  deck[Math.floor(Math.random() * deck.length)];

const addCardsToArray = (arr, deck, numberOfCards) => {
  const resultingArray = arr.slice(0);
  for (let i = 0; i < numberOfCards; i++) {
    resultingArray.push(getRandomCard(deck));
  }
  return resultingArray;
}

module.exports = {
  commonItems,
  artifacts,
  spells,
  skills,
  allies,
  getByName,
  getRandomCard,
  addCardsToArray,
};