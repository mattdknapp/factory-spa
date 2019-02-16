import React, { Fragment } from 'react'

const Input = props => {
  const {
    label,
    value = '',
    attributeKey,
    setAttribute,
    ...rest
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
        className="form-control"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </Fragment>
  )
}

export default Input
