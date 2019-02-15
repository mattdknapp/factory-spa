const defaultOpts = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getFactories = () => fetch('http://localhost:3001', defaultOpts)
  .then(res => res.json())

