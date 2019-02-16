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
  },
  transactionId: null
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
    case SET_TRANSACTION_ID:
      return {
        ...state,
        transactionId: payload
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
    const transactionId = Math.random().toString(36).substring(14)
    dispatch(setActionId)

    const {
      activeFactory
    } = getState()

    const factoryWithActionId = {
      ...activeFactory.data,
      transactionId
    }

    const onComplete = data => {
      console.log("+++++++++++++++++++++++++")
      console.log(data)
      console.log("+++++++++++++++++++++++++")
    }
    socket.emit('UPDATE_FACTORY', JSON.stringify(factoryWithActionId), onComplete)
  }
}

export default reducer
