import config from '../../config'

const defaultOpts = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
}

const {
  serverUrl
} = config

export const getFactories = () => fetch(serverUrl, defaultOpts)
  .then(res => res.json())
