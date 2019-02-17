import React from 'react'

const Root = props => {
  const {
    children
  } = props

  return (
    <div className="root">
      Root
      <ul className="tree">
        { children }
      </ul>
    </div>
  )
}

export default Root
