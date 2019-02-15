import { connect } from 'react-redux'

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

export default connect(mapStateToProps)
