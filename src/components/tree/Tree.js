import React, {useState, useEffect, Fragment} from 'react'

import './Tree.css'
import factoryContainer from '../../containers/factories'
import Root from './Root'
import Branch from './Branch'
import Modal from '../modal/Modal'

const Tree = props => {
  const {
    factories,
    activeId,
    fetchFactories,
    setActiveFactory
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

  const closeModal = () => setActiveFactory(null)

  return (
    <Fragment>
      <Modal
        handleClose={closeModal}
        open={activeId}
      />
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
              setActiveFactory={setActiveFactory}
              content={factory}
            />
          )
        })}
      </Root>
    </Fragment>
  )
}

export default factoryContainer(Tree)
