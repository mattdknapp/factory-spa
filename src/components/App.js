import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'

import Tree from './tree/Tree'
import store from '../redux/store'

const alertConfig = { limit: 3 }
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h3>Factory App</h3>
          <div className="d-flex justify-content-center">
            <Tree/>
          </div>
          <Alert stack={alertConfig}/>
        </Provider>
      </div>
    )
  }
}

export default App
