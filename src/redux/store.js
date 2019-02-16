import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import factories from './reducers/factories'
import activeFactory from './reducers/activeFactory'

export default createStore(
  combineReducers({
    factories,
    activeFactory
  }),
  applyMiddleware(thunk)//, logger)
)
