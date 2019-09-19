import { Home } from 'Components/pages'
import { CompanyData } from 'Components/templates'

export default [{
  path: '/',
  name: 'home',
  component: Home,
  children: [{
    path: '/company-data',
    name: 'company data',
    component: CompanyData
  }]
}]
