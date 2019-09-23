import { mount } from '@vue/test-utils'
import { CompanyData } from '@/components/organisms'

describe('CompanyData.vue', () => {

  const component = mount(CompanyData)

  test(`
    The computed propety "companySpendValidator"
    should return a empty string error
  `, () => {
    component.setData({ form: { companySpend: '123' } })
    expect(component.vm.companySpendValidator).toEqual('')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input is a letter
  `, () => {
    component.setData({ form: { companySpend: 'foo' } })
    expect(component.vm.companySpendValidator).toEqual('This field can not contains letters')
  })



  test(`
    The computed propety "spendAbilityValidator"
    should return a empty string error
  `, () => {
    component.setData({ form: { companySpend: '123 - 321' } })
    expect(component.vm.spendAbilityValidator).toEqual('')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input is a letter
  `, () => {
    component.setData({ form: { companySpendAbility: 'foo' } })
    expect(component.vm.spendAbilityValidator).toEqual('This field can not contains letters')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input had two values
    and the first value is greater than second value
  `, () => {
    component.setData({ form: { companySpendAbility: '300 - 150' } })
    expect(component.vm.spendAbilityValidator).toEqual('The first value must be greater than second value')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input had invalid values
  `, () => {
    component.setData({ form: { companySpendAbility: '123 - 32-1' } })
    expect(component.vm.spendAbilityValidator).toEqual('The first value must be greater than second value')
  })

  test(`
    The computed propety "companySpendValidator"
    should return error message when input don't had two values
    separated by hyphen
  `, () => {
    component.setData({ form: { companySpendAbility: '123321' } })
    expect(component.vm.spendAbilityValidator).toEqual('Please inform two values separate by hyphen e.g 150 - 300')
  })
})
