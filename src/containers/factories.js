import { connect } from 'react-redux'
import {
  fetchFactories,
  syncFactory
} from '../reducers/factories'

const mapStateToProps = state => {
  const {
    factories: {
      data,
      activeId
    }
  } = state

  return {
    factories: data
  }
}

const mapDispatchToProps = {
  fetchFactories,
  syncFactory
}

export default connect(mapStateToProps, mapDispatchToProps)
