import {
  SET_ATTRIBUTE,
  CLEAR_ACTIVE_FACTORY,
  SET_ACTIVE_FACTORY,
  SET_ERRORS,
} from '../actionTypes/activeFactory'

const initialState = {
  data: {
    id: null,
    name: '',
    min: '',
    max: ''
  },
  errors: {}
}

const compileErrors = (errors, newError) => {
  const {
    path,
    message
  } = newError

  return {
    ...errors,
    [path]: message
  }
}

const mapErrorsToObject = result => {
  const {
    errors: {
      details
    }
  } = result

  return details.reduce(compileErrors, {})
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
    case SET_ERRORS:
      return {
        ...state,
        errors: mapErrorsToObject(payload)
      }
    default:
      return state
  }
}

export default reducer
