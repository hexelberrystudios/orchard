import Vue from 'vue'
import VueRouter from 'vue-router'
import clientRoutes from './routes.js'
import App from './App.vue'
import Login from './Login.vue'

let createApp = function () {
    console.log('Creating app');
    console.log(clientRoutes);
    Vue.use(VueRouter);
    // ---------------------
    // BEGIN NORMAL APP CODE
    // ---------------------
    // Main Vue instance must be returned and have a root
    // node with the id "app", so that the client-side
    // version can take over once it loads.
    const router = new VueRouter({
      mode: 'history',
      routes: clientRoutes
    });
    console.log('Added router...');
    return new Vue({
      el: '#app',
      router: router,
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
  module.exports = module.exports || {};
  module.exports.createApp = createApp;
} else {
  console.log('Created client app');
  createApp();
}