export default {
  install: (Vue, { tablet, desktop }) => {
    const alias =
      window.innerWidth >= desktop
      ? '@3x'
      : window.innerWidth >= tablet
      ? '@2x'
      : ''
    Vue.prototype.$loadImage = (image, ext) => {
      return `/assets/images/${image + alias}.${ext ? ext : 'png'}`
    }
  }
}
