System.register(["rxjs"], function (_export, _context) {
  "use strict";

  var of, from, titanFacts;
  return {
    setters: [function (_rxjs) {
      of = _rxjs.of;
      from = _rxjs.from;
    }],
    execute: function () {
      of("Saturn").subscribe(planet => {
        document.body.appendChild(Object.assign(document.createElement('p'), {
          textContent: `Titan is a moon orbiting ${planet}.`
        }));
      });
      titanFacts = ["Titan is 50% more massive than Earth's moon, and 80% more massive.", "Titan is the only moon known to have a dense atmosphere, and the only known body in space, other than Earth, where clear evidence of stable bodies of surface liquid has been found."];
      from(titanFacts).subscribe(fact => {
        document.body.appendChild(Object.assign(document.createElement('p'), {
          textContent: fact
        }));
      });
    }
  };
});