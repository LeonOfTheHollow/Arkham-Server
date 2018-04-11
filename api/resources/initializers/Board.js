const initializeBoard = () => {
  return {
    map: {
      FrenchHillStreets: {
        description: "French Hill is home to Arkham's oldest and darkest dynasties.",
      },
      TheWitchHouse: {
        description: "A creaking wooden monument to a bygone era of grandeur.",
      },
      SilverTwilightLodge: {
        description: "A dark lodge, filled with dark secrets.",
      },
      SilverTwilightSanctum: {
        description: "Shining white marble - scrubbed clean nightly by terrified help."
      },
    },
    terror: 0,
    otherWorlds: {
      Rlyeh1: {
        description: "In deep lost Rlyeh, dread Cthulhu lies dreaming...",
      },
      Rlyeh2: {
        description: "The deep rises, and the terrible warped degrees of the city's angles refract a shuddering seafoam fractal nightmare.",
      },
      Carcosa1: {
        description: "In the city of the mad, the Tattered King reigns supreme.",
      },
      Carcosa2: {
        description: "Clad in xanthotic shrouds, rotted, sonorously reciting unbearable verse.",
      },
      Celeano1: {
        description: "On a cold, dead planet, a runaway found sanctuary.",
      },
      Celeano2: {
        description: "He built a library of everything he learned, and eventually, he found a way home."
      },
    }
  }
}

module.exports = {
  initializeBoard
};