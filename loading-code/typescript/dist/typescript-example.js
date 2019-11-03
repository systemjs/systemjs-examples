System.register([], function (_export, _context) {
  "use strict";

  var RealPlanets, NotRealPlanets;

  function isPlanet(planetName) {
    if (RealPlanets[planetName]) {
      console.log(`${planetName} is a planet!`);
      return true;
    } else if (NotRealPlanets[planetName]) {
      console.log(`${planetName} is not a planet!`);
      return false;
    } else {
      throw Error(`Unknown planetName ${planetName}`);
    }
  }

  _export({
    isPlanet: isPlanet,
    RealPlanets: void 0,
    NotRealPlanets: void 0
  });

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