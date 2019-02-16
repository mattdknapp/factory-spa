import {
  SET_ATTRIBUTE,
  CLEAR_ACTIVE_FACTORY,
  SET_ACTIVE_FACTORY,
  SET_ERRORS,
  CREATE_NEW_FACTORY
} from '../actionTypes/activeFactory'

const initialState = {
  data: {
    id: null,
    name: '',
    min: '',
    max: '',
    count: ''
  },
  errors: {},
  active: false
}

const defaultFactory = {
  ...initialState,
  data: {
    ...initialState.data,
    count: 1
  },
  active: true
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

const mapErrorsToObject = error => {
  const {
    details
  } = error

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
      const count = (payload.numbers && payload.numbers.length) || 1

      return {
        ...state,
        data: {
          ...payload,
          count
        },
        active: true
      }
    case CREATE_NEW_FACTORY:
      return defaultFactory
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
