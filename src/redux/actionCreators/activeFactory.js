import socket from '../../lib/socket'
import {
  SET_ATTRIBUTE,
  CLEAR_ACTIVE_FACTORY,
  SET_ACTIVE_FACTORY,
  SET_ERRORS,
  CREATE_NEW_FACTORY
} from '../actionTypes/activeFactory'

export const setAttribute = payload => {
  return { type: SET_ATTRIBUTE, payload }
}

export const clearActiveFactory = () => {
  return { type: CLEAR_ACTIVE_FACTORY }
}

export const setActiveFactory = payload => {
  return { type: SET_ACTIVE_FACTORY, payload }
}

export const setErrors = payload => {
  return { type: SET_ERRORS, payload }
}

export const createNewFactory = () => {
  return { type: CREATE_NEW_FACTORY }
}

export const updateFactory = () => {
  return (dispatch, getState) => {
    const {
      activeFactory
    } = getState()

    const onComplete = data => {
      if (data.ok) {
        return dispatch(clearActiveFactory())
      }
    }

    socket.emit('UPDATE_FACTORY', JSON.stringify(activeFactory.data), onComplete)
  }
}
