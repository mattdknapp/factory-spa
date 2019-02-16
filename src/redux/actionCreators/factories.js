import * as apiCalls from '../../lib/api/factoryApi'
import socket from '../../lib/api/socket'
import {
  LOAD_FACTORIES,
  SYNC_FACTORY,
  ARCHIVE_FACTORY,
  REMOVE_FACTORY
} from '../actionTypes/factories'

export const loadFactories = payload => {
  return { type: LOAD_FACTORIES, payload }
}

export const syncFactory = payload => {
  return { type: SYNC_FACTORY, payload }
}

export const removeFactory = payload => {
  return { type: REMOVE_FACTORY, payload }
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

export const archiveFactory = id => {
  return dispatch => {
    socket.emit(ARCHIVE_FACTORY, JSON.stringify({ id }))
  }
}
