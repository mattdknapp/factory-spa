import React from 'react'
import Input from './Input'
import { formatAsNumber } from '../../lib/formatters'
import activeFactoryContainer from '../../containers/activeFactory'

const cancelDefault = e => e.preventDefault()

const Form = props => {
  const {
    activeFactory: {
      name,
      min = 0,
      max = 1
    },
    errors,
    errors: {
      name: nameError,
      min: minError,
      max: maxError
    },
    setAttribute
  } = props

  return (
    <form
      className="was-validated"
      onSubmit={cancelDefault}>
      <div className="form-group">
        <Input
          type="text"
          attributeKey="name"
          value={name}
          label="Name"
          setAttribute={setAttribute}
          error={nameError}
          required
        />
      </div>
      <div className="form-group">
        <Input
          type="number"
          attributeKey="min"
          value={min}
          label="Min"
          setAttribute={setAttribute}
          formatter={formatAsNumber}
          min={0}
          max={max - 1}
          error={minError}
        />
        <Input
          type="number"
          attributeKey="max"
          value={max}
          label="Max"
          setAttribute={setAttribute}
          formatter={formatAsNumber}
          min={min + 1}
          error={maxError}
        />
      </div>
    </form>
  )
}

export default activeFactoryContainer(Form)
