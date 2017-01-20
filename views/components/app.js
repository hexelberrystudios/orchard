import Vue from 'vue'
import App from './App.vue'

let createApp = function () {
    console.log('Creating app');
    // ---------------------
    // BEGIN NORMAL APP CODE
    // ---------------------
    // Main Vue instance must be returned and have a root
    // node with the id "app", so that the client-side
    // version can take over once it loads.
    return new Vue({
      el: '#app',
      // h is just a random variable name assigned by convention by Vue
      // as the argument that gets passed in when the render function is called.
      render: h => h(App)
    });
    // -------------------
    // END NORMAL APP CODE
    // -------------------
  };
  
if (typeof module !== 'undefined' && module.exports) {
  console.log('Created server app');
  module.exports = createApp;
} else {
  console.log('Created client app');
  createApp();
}
