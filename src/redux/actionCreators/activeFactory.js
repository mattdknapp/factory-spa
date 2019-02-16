import socket from '../../lib/socket'
import {
  SET_ATTRIBUTE,
  CLEAR_ACTIVE_FACTORY,
  SET_ACTIVE_FACTORY,
  SET_ERRORS,
  UPDATE_FACTORY,
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
      activeFactory: {
        data
      }
    } = getState()

    const onComplete = res => {
      if (res.ok) {
        return dispatch(clearActiveFactory())
      }
    }

    const actionType = data.id ? UPDATE_FACTORY : CREATE_NEW_FACTORY
    socket.emit(actionType, JSON.stringify(data), onComplete)
  }
}
