import React from 'react'
import Input from './Input'

const cancelDefault = e => e.preventDefault()

const Form = props => {
  return (
    <form onSubmit={cancelDefault}>
      <div className="form-group">
        <Input
          type="text"
          value="tmp"
          label="Name"
          handleChange={console.log}
        />
      </div>
    </form>
  )
}

export default Form
