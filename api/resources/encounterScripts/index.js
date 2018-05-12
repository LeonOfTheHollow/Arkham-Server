const { LichStreetEncounters } = require('./LichStreetEncounters');

const encounterLocations = [LichStreetEncounters];

const getRandomEncounter = (gameState, currentInvestigator) => {
  const encountersForLocation = encounterLocations.find(location => {
    if (location.name === currentInvestigator.location) return location;
  }).encounters;
  const randomEncounter = encountersForLocation[Math.floor(Math.random()*encountersForLocation.length)];
  return randomEncounter;
}

const getEncounterByIndex = (index, currentInvestigator) => {
  return encounterLocations.find(location => location.name === currentInvestigator.location).encounters.find(encounter => {
    console.log("About to compare", encounter.index);
    console.log("To", index);
    if (encounter.index === index) return encounter;
  });
}

const resolveEncounter = (gameState, index, currentInvestigator, decision) => {
  const encounter = getEncounterByIndex(index, currentInvestigator);
  encounter.resolve(gameState, currentInvestigator, decision);
}

module.exports = {
  getRandomEncounter,
  resolveEncounter,
}