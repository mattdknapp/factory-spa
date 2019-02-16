const config = {
  dev: {
    serverUrl: 'http://localhost:3001',
    socketUrl: 'http://localhost:3001'
  },
  demo: {
    serverUrl: 'https://immense-depths-94750.herokuapp.com/',
    socketUrl: 'https://immense-depths-94750.herokuapp.com/'
  }
}

const environments = {
  'localhost': 'dev'
}

const environment = environments[window.location.hostname]
module.exports = config[environment] || config['demo']
