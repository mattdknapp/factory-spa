import * as apiCalls from '../lib/api/factoryApi'
import socket from '../lib/socket'

const LOAD_FACTORIES = 'LOAD_FACTORIES'
const SYNC_FACTORY = 'SYNC_FACTORY'

const initialState = {
  data: []
}

const update = updatedFactory => (acc, next) => {
  if (next.id === updatedFactory.id) {
    return [
      ...acc,
      updatedFactory
    ]
  }

  return [
    ...acc,
    next
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
    case SYNC_FACTORY:
      const {
        data = []
      } = state

      const newData = data.reduce(update(payload), [])
      return {
        ...state,
        data: newData
      }
    default:
      return state
  }
}

export const loadFactories = payload => {
  return { type: LOAD_FACTORIES, payload }
}

export const syncFactory = payload => {
  return { type: SYNC_FACTORY, payload }
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

export const updateFactory = payload => {
  return () => {
    socket.emit('UPDATE_FACTORY', JSON.stringify(payload))
  }
}

export default reducer
