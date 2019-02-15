import React, {useState, useEffect} from 'react'
import factoryContainer from '../../containers/factories'
import Root from './Root'
import Branch from './Branch'

const Tree = props => {
  const {
    factories,
    fetchFactories
  } = props
  const [
    firstRender,
    setIsFirstRender
  ] = useState(true)

  useEffect(() => {
    if (!firstRender) {
      return
    }

    setIsFirstRender(false)
    fetchFactories()
  })

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
