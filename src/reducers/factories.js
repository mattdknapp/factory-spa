import * as apiCalls from '../lib/api/factoryApi'

const LOAD_FACTORIES = 'LOAD_FACTORIES'
const SET_ACTIVE_FACTORY = 'SET_ACTIVE_FACTORY'

const initialState = {
  activeId: null,
  data: []
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
    case SET_ACTIVE_FACTORY:
      return {
        ...state,
        activeId: payload
      }
    default:
      return state
  }
}

export const loadFactories = payload => {
  return { type: LOAD_FACTORIES, payload }
}

export const setActiveFactory = payload => {
  return { type: SET_ACTIVE_FACTORY, payload }
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
