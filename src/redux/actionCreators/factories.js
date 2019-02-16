import * as apiCalls from '../../lib/api/factoryApi'
import {
  LOAD_FACTORIES,
  SYNC_FACTORY
} from '../actionTypes/factories'

export const loadFactories = payload => {
  return { type: LOAD_FACTORIES, payload }
}

export const syncFactory = payload => {
  return { type: SYNC_FACTORY, payload }
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
