import logMessage from './js/logger'
import './css/style.css'
// Log message to console
logMessage('A very warm welcome to Expack!')
// Needed for Hot Module Replacement
// eslint-disable-next-line
if(typeof(module.hot) !== 'undefined') {
  // eslint-disable-next-line
  module.hot.accept()
}