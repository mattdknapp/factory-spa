import React from 'react'

const NewButton = props => {
  const {
    handleClick
  } = props

  return (
    <button
      className="btn btn-success"
      onClick={handleClick}
    >
      New Factory
    </button>
  )
}

export default NewButton
