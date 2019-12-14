import Vue from 'vue';

console.log('Vue', Vue);

const App = Vue.default.extend({
  template: '<p>Jupiter has {{numMoons}} moons',
  data: () => ({
    numMoons: 79,
  })
});

new App().$mount('#vue-container');