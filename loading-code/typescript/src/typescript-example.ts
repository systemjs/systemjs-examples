document.body.appendChild(Object.assign(document.createElement('p'), {
  textContent: 'Pluto is no longer considered a planet.'
}))

/* In a browser console, you can use the isPlanet function with the following code:

System.import('planet-checker').then(planetChecker => {
  const isPlanet = planetChecker.isPlanet('thing');
})

*/

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

type InterstellarObjects = RealPlanets | NotRealPlanets

enum RealPlanets {
  Mercury = 'Mercury',
  Venus = 'Venus',
  Earth = 'Earth',
  Mars = 'Mars',
  Jupiter = 'Jupiter',
  Saturn = 'Saturn',
  Uranus = 'Uranus',
  Neptune = 'Neptune',
}

enum NotRealPlanets {
  Pluto = 'Pluto',
}

isPlanet(RealPlanets.Earth)
isPlanet(NotRealPlanets.Pluto)