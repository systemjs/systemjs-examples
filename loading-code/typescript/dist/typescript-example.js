System.register([], function (exports_1, context_1) {
    "use strict";
    var RealPlanets, NotRealPlanets;
    var __moduleName = context_1 && context_1.id;
    /* In a browser console, you can use the isPlanet function with the following code:
    
    System.import('planet-checker').then(planetChecker => {
      const isPlanet = planetChecker.isPlanet('thing');
    })
    
    */
    function isPlanet(planetName) {
        if (RealPlanets[planetName]) {
            console.log(`${planetName} is a planet!`);
            return true;
        }
        else if (NotRealPlanets[planetName]) {
            console.log(`${planetName} is not a planet!`);
            return false;
        }
        else {
            throw Error(`Unknown planetName ${planetName}`);
        }
    }
    exports_1("isPlanet", isPlanet);
    return {
        setters: [],
        execute: function () {
            document.body.appendChild(Object.assign(document.createElement('p'), {
                textContent: 'Pluto is no longer considered a planet.'
            }));
            (function (RealPlanets) {
                RealPlanets["Mercury"] = "Mercury";
                RealPlanets["Venus"] = "Venus";
                RealPlanets["Earth"] = "Earth";
                RealPlanets["Mars"] = "Mars";
                RealPlanets["Jupiter"] = "Jupiter";
                RealPlanets["Saturn"] = "Saturn";
                RealPlanets["Uranus"] = "Uranus";
                RealPlanets["Neptune"] = "Neptune";
            })(RealPlanets || (RealPlanets = {}));
            (function (NotRealPlanets) {
                NotRealPlanets["Pluto"] = "Pluto";
            })(NotRealPlanets || (NotRealPlanets = {}));
            isPlanet(RealPlanets.Earth);
            isPlanet(NotRealPlanets.Pluto);
        }
    };
});
//# sourceMappingURL=typescript-example.js.map