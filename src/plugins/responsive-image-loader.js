export default {
  install: (Vue, { tablet, desktop }) => {
    Vue.prototype.$loadImage = (image, ext, ignoreAlias) => {
      const alias =
        ignoreAlias
        ? ''
        : window.innerWidth >= desktop
        ? '@3x'
        : window.innerWidth >= tablet
        ? '@2x'
        : ''
      return `/assets/images/${image}${alias}.${ext ? ext : 'png'}`
    }
  }
}
