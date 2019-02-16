import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import './App.css'

import Tree from './tree/Tree'
import store from '../redux/store'

const alertConfig = { limit: 3 }
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="container">
            <div className="row">
              <div className="col-1"/>
              <div className="col-10">
                <div className="card">
                  <div className="card-header">
                    <h3>Factory App</h3>
                  </div>
                  <div className="card-body">
                    <Tree/>
                  </div>
                </div>
              </div>
              <div className="col-1"/>
            </div>
          </div>
          <Alert stack={alertConfig}/>
        </Provider>
      </div>
    )
  }
}

export default App
