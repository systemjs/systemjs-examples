System.register(["../planets.js"], function (exports_1, context_1) {
    "use strict";
    var planets_js_1;
    var __moduleName = context_1 && context_1.id;
    function isPlanet(planetName) {
        if (planets_js_1.RealPlanets[planetName]) {
            console.log(`${planetName} is a planet!`);
            return true;
        }
        else if (planets_js_1.NotRealPlanets[planetName]) {
            console.log(`${planetName} is not a planet!`);
            return false;
        }
        else {
            throw Error(`Unknown planetName ${planetName}`);
        }
    }
    exports_1("isPlanet", isPlanet);
    return {
        setters: [
            function (planets_js_1_1) {
                planets_js_1 = planets_js_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=planet-helpers.js.map