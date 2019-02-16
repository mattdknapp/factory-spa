import React from 'react'
import Input from './Input'
import activeFactoryContainer from '../../containers/activeFactory'

const cancelDefault = e => e.preventDefault()

const Form = props => {
  const {
    activeFactory: {
      name,
      min,
      max
    },
    setAttribute
  } = props

  console.log(props)
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
    </form>
  )
}

export default activeFactoryContainer(Form)
