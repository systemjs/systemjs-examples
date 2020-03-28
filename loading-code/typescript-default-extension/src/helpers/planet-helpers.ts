import { InterstellarObjects, NotRealPlanets, RealPlanets } from '../planets'

export function isPlanet(planetName: InterstellarObjects) {
  if (RealPlanets[planetName]) {
    console.log(`${planetName} is a planet!`)
    return true
  } else if (NotRealPlanets[planetName]) {
    console.log(`${planetName} is not a planet!`)
    return false
  } else {
    throw Error(`Unknown planetName ${planetName}`)
  }
}
