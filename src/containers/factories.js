import { connect } from 'react-redux'
import * as mapDispatchToProps from '../redux/actionCreators/factories'

const mapStateToProps = state => {
  const {
    factories: {
      data
    }
  } = state

  return {
    factories: data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
