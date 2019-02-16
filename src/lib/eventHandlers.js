import socket from './socket'
import store from '../redux/store'
import {
  SYNC_FACTORY
} from '../redux/actionTypes/factories'
import {
  syncFactory
} from '../redux/actionCreators/factories'
import {
  setErrors
} from '../redux/actionCreators/activeFactory'

const {
  dispatch
} = store

const initHandlers = () => {
  socket.on(SYNC_FACTORY, data => {
    const json = JSON.parse(data)
    dispatch(syncFactory(json))
  })

  socket.on('error', err => {
    const jsonError = JSON.parse(err)
    dispatch(setErrors(jsonError))
  })
}

export default initHandlers
