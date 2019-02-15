import React from 'react'

const Root = props => {
  const {
    children
  } = props

  return (
    <div>
      <ul className="tree">
        { children }
      </ul>
    </div>
  )
}

export default Root
