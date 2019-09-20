export default {
  breadcrumbs: [],
  width: window.innerWidth,
  breakPoints: {
    xs: window.innerWidth <= 600,
    sm: window.innerWidth > 600 && window.innerWidth <= 960,
    md: window.innerWidth > 960 && window.innerWidth <= 1264,
    lg: window.innerWidth > 1264 && window.innerWidth <= 1904,
    xl: window.innerWidth > 1904
  }
}
