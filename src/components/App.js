import React from 'react'
import { Provider } from 'react-redux'

import '../Tree.css'
import Tree from './tree/Tree'
import store from '../store'

const App = props => {
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

export default App
