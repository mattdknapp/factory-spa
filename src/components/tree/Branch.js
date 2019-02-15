import React from 'react'
import Root from './Root'

const mapChildToBranch = parentName => (child, index) => {
  const key = `${parentName}-${index}`
  return (<Branch key={key} content={child}/>)
}

const Branch = props => {
  const {
    content
  } = props

  if(typeof content === 'object') {
    const {
      name,
      data,
      min,
      max,
      trinkets
    } = content

    const minMax = `${min}/${max}`
    return (
      <li>
        <span>{name}</span>
        <span className="branch-data">{minMax}</span>
        <ul>
          {trinkets.map(mapChildToBranch(trinkets))}
        </ul>
      </li>
    )
  }

  return (
    <li>
      {content}
    </li>
  )
}

export default Branch
