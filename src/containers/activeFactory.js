import { connect } from 'react-redux'
import {
  setActiveFactory,
  setAttribute,
  clearActiveFactory,
  updateFactory,
} from '../reducers/activeFactory'

const mapStateToProps = state => {
  const {
    activeFactory: {
      data
    }
  } = state

  return {
    activeFactory: data
  }
}

const mapDispatchToProps = {
  setActiveFactory,
  setAttribute,
  clearActiveFactory,
  updateFactory
}

export default connect(mapStateToProps, mapDispatchToProps)
