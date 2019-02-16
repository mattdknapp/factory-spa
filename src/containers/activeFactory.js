import { connect } from 'react-redux'
import * as mapDispatchToProps from '../redux/actionCreators/activeFactory'

const mapStateToProps = state => {
  const {
    activeFactory: {
      data,
      errors,
      active
    }
  } = state

  return {
    activeFactory: data,
    errors,
    active
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
