import socket from './api/socket'
import Alert from 'react-s-alert'
import store from '../redux/store'
import {
  SYNC_FACTORY,
  REMOVE_FACTORY
} from '../redux/actionTypes/factories'
import {
  syncFactory,
  removeFactory
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

  socket.on(REMOVE_FACTORY, data => {
    const json = JSON.parse(data)
    dispatch(removeFactory(json))
  })

  socket.on('error', err => {
    const jsonError = JSON.parse(err)
    dispatch(setErrors(jsonError))
  })

  socket.on('exception', exp => {
    console.error('Server Error: ', exp)
    Alert.error('A Server Error Occurred')
  })
}

export default initHandlers
