import React, { Fragment } from 'react'

const Input = props => {
  const {
    label,
    type,
    value = '',
    attributeKey,
    setAttribute
  } = props

  const handleChange = e => {
    const newValue = e.target.value
    const key = attributeKey

    setAttribute({ key, value: newValue })
  }

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
