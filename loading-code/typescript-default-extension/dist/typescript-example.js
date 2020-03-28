System.register(["lodash", "./helpers/planet-helpers", "./planets"], function (exports_1, context_1) {
    "use strict";
    var lodash_1, planet_helpers_1, planets_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (planet_helpers_1_1) {
                planet_helpers_1 = planet_helpers_1_1;
            },
            function (planets_1_1) {
                planets_1 = planets_1_1;
            }
        ],
        execute: function () {
            document.body.appendChild(Object.assign(document.createElement('p'), {
                textContent: 'Pluto is no longer considered a planet. (Check you console for more information).'
            }));
            /* In a browser console, you can use the isPlanet function with the following code:
            
              System.import('planet-checker').then(planetChecker => {
                const isPlanet = planetChecker.isPlanet('thing');
              })
            
            */
            // Planet operations
            planet_helpers_1.isPlanet(planets_1.RealPlanets.Earth);
            planet_helpers_1.isPlanet(planets_1.NotRealPlanets.Pluto);
            // Just a demonstration that lodash is available, since the systemjs-importmap in index.html
            // specifies where to fetch lodash
            console.log('Real Planets');
            lodash_1.default.each(planets_1.RealPlanets, planet => console.log(planet));
        }
    };
});
//# sourceMappingURL=typescript-example.js.map