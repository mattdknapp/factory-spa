import React, { Fragment } from 'react'
import InputError from './InputError'

const getValidationStatus = error => {
  if (error) {
    return 'is-invalid'
  }

  return ''
}

const Input = props => {
  const {
    label,
    value = '',
    attributeKey,
    setAttribute,
    formatter,
    error,
    ...rest
  } = props

  const handleChange = e => {
    const newValue = e.target.value
    const key = attributeKey

    if (formatter) {
      const formattedValue = formatter(newValue)
      return setAttribute({ key, value: formattedValue })
    }

    return setAttribute({ key, value: newValue })
  }

  const validationStatus = getValidationStatus(error)

  return (
    <Fragment>
      <label>{label}</label>
      <input
        className={`form-control ${validationStatus}`}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <InputError error={error}/>
    </Fragment>
  )
}

export default Input
