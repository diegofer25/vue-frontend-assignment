export default {
  setBreadCrumbs ({ commit }, { matched }) {
    commit('SET_BREADCRUMBS', matched.map(route => (
      {
        text: route.name,
        link: route.path || '/'
      })
    ))
  }
}
