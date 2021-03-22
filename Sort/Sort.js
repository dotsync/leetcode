const bubbleSort = (array) => {
  const copy = array
  let search = true
  while (search) {
    search = false
    for (let i = 0; i < copy.length - 1; i++) {
      if (copy[i] > copy[i + 1]) {
        const temp = copy[i]
        copy[i] = copy[i + 1]
        copy[i + 1] = temp
        search = true
      }
    }
  }
  return copy
}

module.exports = {
  bubbleSort,
}
