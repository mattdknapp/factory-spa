import socket from '../lib/socket'

export const SET_ATTRIBUTE = 'SET_ATTRIBUTE'
export const CLEAR_ACTIVE_FACTORY = 'CLEAR_ACTIVE_FACTORY'
export const SET_ACTIVE_FACTORY = 'SET_ACTIVE_FACTORY'
export const SET_TRANSACTION_ID = 'SET_TRANSACTION_ID'

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

export const setAttribute = payload => {
  return { type: SET_ATTRIBUTE, payload }
}

export const clearActiveFactory = () => {
  return { type: CLEAR_ACTIVE_FACTORY }
}

export const setActiveFactory = payload => {
  return { type: SET_ACTIVE_FACTORY, payload }
}

export const setActionId = payload => {
  return { type: SET_TRANSACTION_ID, payload }
}

export const updateFactory = () => {
  return (dispatch, getState) => {
    const {
      activeFactory
    } = getState()

    const onComplete = data => {
      if (data.ok) {
        dispatch(clearActiveFactory())
      }
    }
    socket.emit('UPDATE_FACTORY', JSON.stringify(activeFactory.data), onComplete)
  }
}

export default reducer
