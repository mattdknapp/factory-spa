import socket from './socket'
import store from '../redux/store'
import {
  SYNC_FACTORY
} from '../redux/actionTypes/factories'
import {
  syncFactory
} from '../redux/actionCreators/factories'

const {
  dispatch
} = store

const initHandlers = () => {
  socket.on(SYNC_FACTORY, data => {
    const json = JSON.parse(data)
    dispatch(syncFactory(json))
  })
}

export default initHandlers
