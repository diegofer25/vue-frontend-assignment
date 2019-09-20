export default {
  selectedCompany: (state) => {
    return state.companies.find(company => company.name === state.company) || {}
  },

  companyActivities (state, { selectedCompany }) {
    return selectedCompany.activities
  },

  companySimilars (state, { selectedCompany }) {
    return selectedCompany.similars
  },

  companySpend (state, { selectedCompany }) {
    return selectedCompany.spend
  }
}
