import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import factories from './reducers/factories'

export default createStore(
  combineReducers({ factories }),
  applyMiddleware(thunk)
)
