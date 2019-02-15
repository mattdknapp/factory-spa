const SET_ATTRIBUTE = 'SET_ATTRIBUTE'
const CLEAR_ACTIVE_FACTORY = 'CLEAR_ACTIVE_FACTORY'
const SET_ACTIVE_FACTORY = 'SET_ACTIVE_FACTORY'

const initialState = {
  id: null,
  name: '',
  min: '',
  max: ''
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
        [payload.key]: payload.value
      }
    case SET_ACTIVE_FACTORY:
      return payload
    case CLEAR_ACTIVE_FACTORY:
      return initialState
    default:
      return state
  }
}

export const setAttribute = payload => {
  return { type: SET_ATTRIBUTE, payload }
}

export const clearActiveFactory = () => {
  return { type: CLEAR_ACTIVE_FACTORY }
}

export const setActiveFactory = payload => {
  return { type: SET_ACTIVE_FACTORY, payload }
}

export default reducer
