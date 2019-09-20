export default {
  setBreadCrumbs ({ commit }, { matched }) {
    commit('SET_BREADCRUMBS', matched.map(route => (
      {
        text: route.name,
        link: route.path || '/'
      })
    ))
  },
  onResize ({ commit }, { target }) {
    console.log(target)
    commit('SET_WIDTH', target.clientWidth)
    commit('SET_HEIGHT', target.clientHeight)
  }
}
