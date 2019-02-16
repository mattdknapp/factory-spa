import { connect } from 'react-redux'
import * as mapDispatchToProps from '../redux/actionCreators/activeFactory'

const mapStateToProps = state => {
  const {
    activeFactory: {
      data,
      errors
    }
  } = state

  return {
    activeFactory: data,
    errors
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
