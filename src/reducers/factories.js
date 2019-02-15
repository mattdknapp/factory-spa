const firstFactory = {
  id: 1,
  name: 'First Factory',
  min: 43,
  max: 900,
  trinkets: [
    123,
    456,
    789
  ]
}

const initialState = {
  data: [
    {
      id: 1,
      name: 'First Factory',
      min: 43,
      max: 900,
      trinkets: [
        123,
        456,
        789,
        firstFactory
      ]
    },
    {
      id: 2,
      name: 'Second Factory',
      min: 43,
      max: 900,
      trinkets: [
        987,
        654,
        321
      ]
    }
  ]
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    default:
      return state
  }
}

export default reducer
