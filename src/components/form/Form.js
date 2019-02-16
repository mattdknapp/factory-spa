import React from 'react'
import Input from './Input'
import activeFactoryContainer from '../../containers/activeFactory'

const cancelDefault = e => e.preventDefault()

const Form = props => {
  const {
    activeFactory: {
      name,
      min = 0,
      max = 1
    },
    setAttribute
  } = props

  return (
    <form onSubmit={cancelDefault}>
      <div className="form-group">
        <Input
          type="text"
          attributeKey="name"
          value={name}
          label="Name"
          setAttribute={setAttribute}
        />
      </div>
      <div className="form-group">
        <Input
          type="number"
          attributeKey="min"
          value={min}
          label="Min"
          setAttribute={setAttribute}
          min={0}
          max={max - 1}
        />
        <Input
          type="number"
          attributeKey="max"
          value={max}
          label="Max"
          setAttribute={setAttribute}
          min={min + 1}
        />
      </div>
    </form>
  )
}

export default activeFactoryContainer(Form)
