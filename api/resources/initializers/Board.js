const initializeBoard = () => {
  return {
    map: {
      FrenchHillStreets: {
        description: "French Hill is home to Arkham's oldest and darkest dynasties.",
        links: ['TheWitchHouse', 'SilverTwilightLodge'],
        investigators: [],
      },
      TheWitchHouse: {
        description: "A creaking wooden relic from a bygone era of grandeur.",
        links: ['FrenchHillStreets'],
        investigators: [],
      },
      SilverTwilightLodge: {
        description: "A dark lodge, filled with darker secrets.",
        links: ['FrenchHillStreets', 'SilverTwilightSanctum'],
        investigators: [],
      },
      SilverTwilightSanctum: {
        description: "Shining white marble - scrubbed clean nightly by terrified help.",
        links: ['SilverTwilightLodge'],
        investigators: [],
      },
    },
    terror: 0,
    otherWorlds: {
      Rlyeh1: {
        description: "In lost, sunken Rlyeh, dread Cthulhu lies dreaming...",
        links: ['Rlyeh2'],
        investigators: [],
      },
      Rlyeh2: {
        description: "The deep rises, and the terrible warped degrees of the city's angles refract a shuddering seafoam fractal nightmare.",
        links: [],
      },
      Carcosa1: {
        description: "In the city of the mad, the Tattered King reigns supreme.",
        links: ['Carcosa2'],
        investigators: [],
      },
      Carcosa2: {
        description: "Clad in sickly xanthosis, rotted, sonorously reciting unbearable verse.",
        links: [],
        investigators: [],
      },
      Celeano1: {
        description: "On a cold, dead planet, a runaway found sanctuary.",
        links: ['Celeano2'],
        investigators: [],
      },
      Celeano2: {
        description: "He built a library of everything he learned, and eventually, he found a way home.",
        links: [],
        investigators: [],
      },
    }
  }
}

module.exports = {
  initializeBoard
};