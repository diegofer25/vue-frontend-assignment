export default {
  breakpointName (state) {
    return Object.entries(state.breakPoints).reduce((acc, [ key, value ]) => {
      if (value) {
        acc = key
      }
      return acc
    }, '')
  },

  isMobile (state) {
    return state.breakPoints.xs
  }
}
