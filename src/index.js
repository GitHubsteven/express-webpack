import logMessage from './js/logger'
import './css/style.css'
import Vue from 'vue';
import App from './App.vue'
// Log message to console
logMessage('A very warm welcome to Expack!')
// Needed for Hot Module Replacement
// eslint-disable-next-line
if (typeof(module.hot) !== 'undefined') {
  // eslint-disable-next-line
  module.hot.accept()
}

new Vue({
  el: '#app',
  render: h => h(App)
});