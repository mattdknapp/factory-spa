import { connect } from 'react-redux'
import {
  fetchFactories,
  syncFactory,
  updateFactory,
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
  syncFactory,
  updateFactory
}

export default connect(mapStateToProps, mapDispatchToProps)
