import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // What is the "h" function? What the fuck is it? Why can't I find any documentation on it?
  render: h => h(App)
});