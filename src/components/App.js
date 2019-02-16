import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Tree from './tree/Tree'
import store from '../redux/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h3>Factory App</h3>
          <div className="d-flex justify-content-center">
            <Tree/>
          </div>
        </Provider>
      </div>
    )
  }
}

export default App
