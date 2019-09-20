export default {
  setBreadCrumbs ({ commit }, { matched }) {
    commit('SET_BREADCRUMBS', matched.map(route => (
      {
        text: route.name,
        link: route.path || '/'
      })
    ))
  },

  onResize ({ commit, dispatch }, { target }) {
    commit('SET_WIDTH', target.innerWidth)
    dispatch('checkBreakpoints', target.innerWidth)
  },

  checkBreakpoints({ commit }, width) {
    commit('SET_BREAKPOINTS', {
      xs: width <= 600,
      sm: width > 600 && width <= 960,
      md: width > 960 && width <= 1264,
      lg: width > 1264 && width <= 1904,
      xl: width > 1904
    })
  }
}
