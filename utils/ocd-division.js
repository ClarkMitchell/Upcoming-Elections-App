// Ideally set with environment variables or some kind of registry
const divisionPrefix = 'ocd-division/country:us/state:'
const placePrefix = '/place:'

export function getStateId({ state }) {
  return divisionPrefix + state.toLowerCase()
}

export function getCityId({ city, state }) {
  return getStateId({ state }) + placePrefix + getLowerSnakeCase(city)
}

function getLowerSnakeCase(string) {
  return string.toLowerCase().replace(/ /g, '_')
}
