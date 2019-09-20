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

  companyHistory (state, { selectedCompany }) {
    return selectedCompany.spendHistory
  }
}
