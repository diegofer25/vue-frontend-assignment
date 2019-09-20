import { Home } from 'Components/pages'
import { CompanyData, CompanyTable, CompanyPage } from 'Components/templates'

export default [{
  path: '/',
  name: 'home',
  component: Home,
  children: [{
    path: '/company-data',
    name: 'company data',
    component: CompanyData
  }, {
    path: '/company-table',
    name: 'company table',
    component: CompanyTable
  }, {
    path: '/company-page',
    name: 'company page',
    component: CompanyPage
  }]
}]
