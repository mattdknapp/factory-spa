import io from 'socket.io-client'
import config from '../../config'

const opts = {
  transports: ['websocket'],
  upgrade: false
}

const socket = io(config.socketUrl, opts)

export default socket
