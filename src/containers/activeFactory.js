import { connect } from 'react-redux'
import {
  setActiveFactory,
  setAttribute,
  clearActiveFactory
} from '../reducers/activeFactory'

const mapStateToProps = state => {
  const {
    activeFactory
  } = state

  return {
    activeFactory
  }
}

const mapDispatchToProps = {
  setActiveFactory,
  setAttribute,
  clearActiveFactory
}

export default connect(mapStateToProps, mapDispatchToProps)
