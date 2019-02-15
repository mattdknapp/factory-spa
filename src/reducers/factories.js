import * as apiCalls from '../api/factoryApi'

const ADD_FACTORY = 'ADD_FACTORY'
const LOAD_FACTORIES = 'LOAD_FACTORIES'

const innerFactory = {
  id: 1,
  name: 'First Factory',
  min: 43,
  max: 900,
  numbers: [
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
      numbers: [
        123,
        456,
        789,
        innerFactory
      ]
    },
    {
      id: 2,
      name: 'Second Factory',
      min: 43,
      max: 900,
      numbers: [
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
    case LOAD_FACTORIES:
      return {
        ...state,
        data: payload
      }
    default:
      return state
  }
}

export const loadFactories = payload => {
  return { type: LOAD_FACTORIES, payload }
}

export const fetchFactories = () => {
  return dispatch => {
    const handleResponse = res => {
      return dispatch(loadFactories(res.factories))
    }

    apiCalls.getFactories()
      .then(handleResponse)
  }
}

export default reducer
