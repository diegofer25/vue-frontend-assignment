import { mount } from '@vue/test-utils'
import { CompanyData } from '@/components/organisms'

describe('CompanyData.vue', () => {

  test(`
    The computed propety "companySpendValidator"
    should return a empty string error
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpend: '123' } })
    expect(wrapper.vm.companySpendValidator).toEqual('')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input is a letter
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpend: 'foo' } })
    expect(wrapper.vm.companySpendValidator).toEqual('This field can not contains letters')
  })



  test(`
    The computed propety "spendAbilityValidator"
    should return a empty string error
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpend: '123 - 321' } })
    expect(wrapper.vm.spendAbilityValidator).toEqual('')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input is a letter
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpendAbility: 'foo' } })
    expect(wrapper.vm.spendAbilityValidator).toEqual('This field can not contains letters')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input had two values
    and the first value is greater than second value
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpendAbility: '300 - 150' } })
    expect(wrapper.vm.spendAbilityValidator).toEqual('The first value must be greater than second value')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input had invalid values
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpendAbility: '123 - 32-1' } })
    expect(wrapper.vm.spendAbilityValidator).toEqual('The first value must be greater than second value')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input don't had two values
    separated by hyphen
  `, () => {
    const wrapper = mount(CompanyData)
    wrapper.setData({ form: { companySpendAbility: '123321' } })
    expect(wrapper.vm.spendAbilityValidator).toEqual('Please inform two values separate by hyphen e.g 150 - 300')
  })
})
