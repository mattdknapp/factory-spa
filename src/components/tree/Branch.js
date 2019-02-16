import React from 'react'

const mapChildToBranch = parentName => (child, index) => {
  const key = `${parentName}-${index}`
  return (<Branch key={key} content={child}/>)
}

const Branch = props => {
  const {
    content,
    setActiveFactory,
    archiveFactory
  } = props

  if(typeof content === 'object') {
    const {
      id,
      name,
      min,
      max,
      numbers
    } = content

    const handleClick = () => setActiveFactory(content)
    const handleArchive = () => archiveFactory(id)
    const safeNumbers = numbers || []
    const displayData = `${name}-(${min}/${max})`

    return (
      <li>
        <div className="d-inline-flex factory-actions">
          <div
            className="factory-title mr-auto"
            onClick={handleClick}
          >
            {displayData}
          </div>
          <button
            onClick={handleArchive}
            className="btn btn-danger"
          >
            ARCHIVE
          </button>
        </div>
        <ul>
          {safeNumbers.map(mapChildToBranch(safeNumbers))}
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
