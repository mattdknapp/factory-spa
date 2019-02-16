import React from 'react'

const InputError = props => {
  const {
    error
  } = props

  if (error) {
    return (
      <div className='invalid-feedback'>
        {error}
      </div>
    )
  }

  return null
}

export default InputError
