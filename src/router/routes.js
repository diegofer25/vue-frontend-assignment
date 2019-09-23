import { Home } from '@/components/templates'
import { CompanyData, CompanyTable, CompanyPage } from '@/components/organisms'

export default [{
  path: '/',
  name: 'home',
  component: Home,
  children: [{
    path: '/company-data',
    name: 'company data',
    component: CompanyData,
    meta: { position: 0 }
  }, {
    path: '/company-table',
    name: 'company table',
    component: CompanyTable,
    meta: { position: 1 }
  }, {
    path: '/company-page',
    name: 'company page',
    component: CompanyPage,
    meta: { position: 2 }
  }]
}]
