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
  },

  smAndDown ({ breakPoints: { xs, sm } }) {
    return xs || sm
  },

  smAndUp ({ breakPoints: { sm, md, lg, xl } }) {
    return sm || md || lg || xl
  },

  mdAndDown ({ breakPoints: { xs, sm, md } }) {
    return xs || sm || md
  },

  mdAndUp ({ breakPoints: { md, lg, xl } }) {
    return md || lg || xl
  },

  lgAndDown ({ breakPoints: { xs, sm, md, lg } }) {
    return xs || sm || md || lg
  },

  lgAndUp ({ breakPoints: { lg, xl } }) {
    return lg || xl
  },
}
