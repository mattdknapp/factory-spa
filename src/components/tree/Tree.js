import React, {useState, useEffect, Fragment} from 'react'

import './Tree.css'
import factoryContainer from '../../containers/factories'
import activeFactoryContainer from '../../containers/activeFactory'
import composeContainers from '../../lib/composeContainers'
import Root from './Root'
import Branch from './Branch'
import Modal from '../modal/Modal'
import Form from '../form/Form'

const Tree = props => {
  const {
    factories,
    activeFactory,
    fetchFactories,
    setActiveFactory,
    updateFactory,
    clearActiveFactory
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

  const closeModal = () => clearActiveFactory()
  const safeName = activeFactory && activeFactory.name

  return (
    <Fragment>
      <Modal
        handleClose={closeModal}
        handleSave={updateFactory}
        header={safeName}
        open={!!activeFactory.id}
      >
        <Form/>
      </Modal>
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

const containers = [
	factoryContainer,
	activeFactoryContainer
]

export default composeContainers(containers, Tree)
