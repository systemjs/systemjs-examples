import './set-public-path'

document.body.appendChild(Object.assign(document.createElement('div'), {textContent: "Are there aliens on Mars?"}))
document.body.appendChild(Object.assign(document.createElement('button'), {textContent: "Click to find out", onclick: findAliens}))

/* This function can be called with the following code:
System.import('mars').then(marsModule => {
  marsModule.findAlens();
})
*/
export function findAliens() {
  import('./sentient-aliens.js')
}