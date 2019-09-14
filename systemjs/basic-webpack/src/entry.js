document.body.appendChild(Object.assign(document.createElement('p'), {
  textContent: "Earth is a planet that revolves around the sun"
}))

/* To use the doAlert function, run the following in the browser console:
System.import('earth').then(earthModule => {
  earthModule.doAlert();
})
*/
export function doAlert() {
  alert("Earth is home to billions of humans and other life forms.");
}