import React, { Fragment } from 'react'

const Input = props => {
  const {
    label,
    type,
    value = '',
    handleChange,
  } = props

  return (
    <Fragment>
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={handleChange}
      />
    </Fragment>
  )
}

export default Input
