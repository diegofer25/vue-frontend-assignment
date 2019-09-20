export default {
  install: (Vue) => {
    const alias =
      window.innerWidth > 1264
      ? '@3x'
      : window.innerWidth > 600
      ? '@2x'
      : ''
    Vue.prototype.$loadImage = (image, ext) => {
      return `/assets/images/${image + alias}.${ext ? ext : 'png'}`
    }
  }
}
