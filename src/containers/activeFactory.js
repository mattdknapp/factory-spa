import { connect } from 'react-redux'
import * as mapDispatchToProps from '../redux/actionCreators/activeFactory'

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

export default connect(mapStateToProps, mapDispatchToProps)
