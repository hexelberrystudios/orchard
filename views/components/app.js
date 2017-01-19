import Vue from 'vue'
import PrimaryButton from './PrimaryButton.vue'

new Vue({
  el: '#app',
  components: {
    'PrimaryButton': PrimaryButton
  },
  // What is the "h" function? What the fuck is it? Why can't I find any documentation on it?
  render: h => h(PrimaryButton)
});