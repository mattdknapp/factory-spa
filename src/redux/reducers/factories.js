import {
  LOAD_FACTORIES,
  SYNC_FACTORY,
  REMOVE_FACTORY
} from '../actionTypes/factories'

import {
  loadFactories,
  syncFactory,
  fetchFactories
} from '../actionCreators/factories'

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

const createFilter = id => f => f.id !== id

const reducer = (state = initialState, action = {}) => {
  const {
    type,
    payload
  } = action

  const {
    data = []
  } = state

  switch (type) {
    case LOAD_FACTORIES:
      return {
        ...state,
        data: payload
      }
    case SYNC_FACTORY:
      const ids = data.map(f => f.id)
      const recordExists = !!ids.includes(payload.id)

      if (recordExists) {
        const newData = data.reduce(update(payload), [])
        return {
          ...state,
          data: newData
        }
      }

      return {
        ...state,
        data: [
          ...data,
          payload
        ]
      }
    case REMOVE_FACTORY:
      const filter = createFilter(payload.id)
      const newData = data.filter(filter)

      return {
        ...state,
        data: newData
      }
    default:
      return state
  }
}

export default reducer
