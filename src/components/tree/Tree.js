import React from 'react'
import factoryContainer from '../../containers/factories'
import Root from './Root'
import Branch from './Branch'

const Tree = props => {
  const {
    factories
  } = props

  return (
    <Root>
      {factories.map(factory => {
        const {
          id,
          name
        } = factory

        const key = `${id}-${name}`

        return (
          <Branch
            key={key}
            content={factory}
          />
        )
      })}
    </Root>
  )
}

export default factoryContainer(Tree)
