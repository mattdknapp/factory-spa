const mergeContainers = (acc, next) => {
  return next(acc)
}

const compose = (containers, component) => {
  return containers.reduce(mergeContainers, component)
}

export default compose
