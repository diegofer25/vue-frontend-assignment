import { mount } from '@vue/test-utils'
import { CompanyData } from '@/components/organisms'

describe('CompanyData.vue', () => {

  const component = mount(CompanyData)

  // name tests validations
  test(`
    The computed propety "nameValidator"
    should return a empty string
  `, () => {
    component.setData({ name: { value: 'Microsoft' } })
    expect(component.vm.nameValidator).toEqual('')
  })

  test(`
    The computed propety "nameValidator"
    should return error message when input is empty
  `, () => {
    component.setData({ name: { value: '' } })
    expect(component.vm.nameValidator).toEqual('Please type your company name')
  })


  // spend tests validations
  test(`
    The computed propety "spendValidator"
    should return a empty string
  `, () => {
    component.setData({ spend: { value: '123' } })
    expect(component.vm.spendValidator).toEqual('')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input has a letter
  `, () => {
    component.setData({ spend: { value: 'foo' } })
    expect(component.vm.spendValidator).toEqual('This field can not contains letters')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input input is empty
  `, () => {
    component.setData({ spend: { value: 'This field can not be empty' } })
    expect(component.vm.spendValidator).toEqual('This field can not contains letters')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input is less or equal 0
  `, () => {
    component.setData({ spend: { value: '0' } })
    expect(component.vm.spendValidator).toEqual('The spend can not be equal or less than zero')
  })


  // spendAbility tests valitations
  test(`
    The computed propety "spendAbilityValidator"
    should return a empty string
  `, () => {
    component.setData({ spendAbility: { value: '123 - 321' } })
    expect(component.vm.spendAbilityValidator).toEqual('')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input has a letter
  `, () => {
    component.setData({ spendAbility: { value: 'foo' } })
    expect(component.vm.spendAbilityValidator).toEqual('This field can not contains letters')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input had two values
    and the first value is greater than second value
  `, () => {
    component.setData({ spendAbility: { value: '300 - 150' } })
    expect(component.vm.spendAbilityValidator).toEqual('The first value must be greater than second value')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input had invalid values
  `, () => {
    component.setData({ spendAbility: { value: '123 - 32-1' } })
    expect(component.vm.spendAbilityValidator).toEqual('The first value must be greater than second value')
  })

  test(`
    The computed propety "spendValidator"
    should return error message when input don't had two values
    separated by hyphen
  `, () => {
    component.setData({ spendAbility: { value: '123321' } })
    expect(component.vm.spendAbilityValidator).toEqual('Please inform two values separate by hyphen e.g 150 - 300')
  })
})
