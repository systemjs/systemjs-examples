import { of, from } from 'rxjs';

of("Saturn").subscribe(
  planet => {
    document.body.appendChild(Object.assign(
      document.createElement('p'),
      {textContent: `Titan is a moon orbiting ${planet}.`}
    ))
  }
)

const titanFacts = [
  "Titan is 50% more massive than Earth's moon, and 80% more massive.",
  "Titan is the only moon known to have a dense atmosphere, and the only known body in space, other than Earth, where clear evidence of stable bodies of surface liquid has been found."
];

from(titanFacts).subscribe(
  fact => {
    document.body.appendChild(Object.assign(
      document.createElement('p'),
      {textContent: fact}
    ))
  }
);