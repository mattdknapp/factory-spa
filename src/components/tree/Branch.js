import React from 'react'

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
      min,
      max,
      numbers
    } = content

    const minMax = `${min}/${max}`
    return (
      <li>
        <span>{name}</span>
        <span className="branch-data">{minMax}</span>
        <ul>
          {numbers.map(mapChildToBranch(numbers))}
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
