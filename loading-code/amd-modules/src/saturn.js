import * as neptune from './neptune.js'

document.body.appendChild(Object.assign(
  document.createElement('p'),
  {textContent: "Saturn is 1,433,449,370 km from the Sun, on average."}
));

neptune.showDistanceFromSun();