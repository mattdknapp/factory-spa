const config = {
  dev: {
    serverUrl: 'http://localhost:3001',
    socketUrl: 'http://localhost:3001'
  }
}

const environments = {
  'localhost': 'dev'
}

const environment = environments[window.location.hostname]
module.exports = config[environment] || config['dev']
