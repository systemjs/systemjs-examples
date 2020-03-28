System.register([], function (exports_1, context_1) {
    "use strict";
    var RealPlanets, NotRealPlanets;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
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
            exports_1("RealPlanets", RealPlanets);
            (function (NotRealPlanets) {
                NotRealPlanets["Pluto"] = "Pluto";
            })(NotRealPlanets || (NotRealPlanets = {}));
            exports_1("NotRealPlanets", NotRealPlanets);
        }
    };
});
//# sourceMappingURL=planets.js.map