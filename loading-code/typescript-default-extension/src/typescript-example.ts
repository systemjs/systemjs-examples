import _ from 'lodash';

import { isPlanet } from './helpers/planet-helpers';
import { RealPlanets, NotRealPlanets } from './planets';

document.body.appendChild(Object.assign(document.createElement('p'), {
  textContent: 'Pluto is no longer considered a planet. (Check you console for more information).'
}))

/* In a browser console, you can use the isPlanet function with the following code:

  System.import('planet-checker').then(planetChecker => {
    const isPlanet = planetChecker.isPlanet('thing');
  })

*/

// Planet operations
isPlanet(RealPlanets.Earth)
isPlanet(NotRealPlanets.Pluto)

// Just a demonstration that lodash is available, since the systemjs-importmap in index.html
// specifies where to fetch lodash
console.log('Real Planets')
_.each(RealPlanets, planet => console.log(planet))
