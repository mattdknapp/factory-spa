import { connect } from 'react-redux'
import {
  fetchFactories
} from '../reducers/factories'

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

const mapDispatchToProps = { fetchFactories }

export default connect(mapStateToProps, mapDispatchToProps)
