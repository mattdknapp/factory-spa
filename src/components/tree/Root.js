import React, { Fragment } from 'react'

const Root = props => {
  const {
    children
  } = props

  return (
    <ul className="tree">
      { children }
    </ul>
  )
}

export default Root
