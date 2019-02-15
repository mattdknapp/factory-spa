import { connect } from 'react-redux'
import {
  fetchFactories,
  setActiveFactory,
} from '../reducers/factories'

const mapStateToProps = state => {
  const {
    factories: {
      data,
      activeId
    }
  } = state

  return {
    factories: data,
    activeId
  }
}

const mapDispatchToProps = {
  fetchFactories,
  setActiveFactory
}

export default connect(mapStateToProps, mapDispatchToProps)
