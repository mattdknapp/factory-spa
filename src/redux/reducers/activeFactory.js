import {
  SET_ATTRIBUTE,
  CLEAR_ACTIVE_FACTORY,
  SET_ACTIVE_FACTORY
} from '../actionTypes/activeFactory'

import {
  setAttribute,
  clearActiveFactory,
  setActiveFactory,
  updateFactory
} from '../actionCreators/activeFactory'

const initialState = {
  data: {
    id: null,
    name: '',
    min: '',
    max: ''
  }
}

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case SET_ATTRIBUTE:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.key]: payload.value
        }
      }
    case SET_ACTIVE_FACTORY:
      return {
        ...state,
        data: payload
      }
    case CLEAR_ACTIVE_FACTORY:
      return initialState
    default:
      return state
  }
}

export default reducer
