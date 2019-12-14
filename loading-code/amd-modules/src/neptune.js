export function showDistanceFromSun() {
  document.body.appendChild(Object.assign(
    document.createElement('p'),
    {textContent: "Neptune is 4,503,443,661 km from the Sun, on average."}
  ));
}