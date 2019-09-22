<template>
  <div class="company-data flex column pa-lg">
    <div class="flex row">
      <p class="instruction mt-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="flex row mb-md">
      <input-field
        type="text"
        label="Company Name"
        placeholder="e.g. Your Company Name"
        v-model="form.companyName"
      />
    </div>
    <div class="flex row mb-md">
      <input-field
        ref="companyspend"
        type="number"
        label="Company Spend"
        placeholder="e.g. $150,000"
        v-model="form.companySpend"
        :error="companySpendValidator"
        @blur="forceFormValidationOnBlur"
      />
    </div>
    <div class="flex row mb-md">
      <input-field
        ref="spendability"
        type="text"
        label="Company Spend Ability"
        placeholder="e.g. $150,000 - $300,000"
        v-model="form.companySpendAbility"
        :error="spendAbilityValidator"
        @blur="forceFormValidationOnBlur"
      />
    </div>
    <div class="flex row">
      <input-field
        type="textarea"
        label="Notes"
        placeholder="e.g. Good Tech Company"
        rows="10"
        :resize="false"
        v-model="form.notes"
      />
    </div>
  </div>
</template>

<script>
import { InputField } from 'Components/atoms'
import { hasLetters, moreThanLimit, isNumber, isFocused } from 'Utils/validations'

export default {
  name: 'CompanyData',
  components: {
    InputField
  },
  computed: {
    companySpendValidator () {
      const { companySpend } = this.form
      if (hasLetters(companySpend)) {
        return 'This field can not contains letters'
      } else if (!companySpend && this.$refs.companyspend && !isFocused(this.$refs.companyspend.$el.querySelector('input'))) {
        return 'This field can not be empty or zero'
      }
      return ''
    },

    spendAbilityValidator () {
      const { companySpendAbility } = this.form
      if (hasLetters(companySpendAbility)) {
        return 'This field can not contains letters'
      }
      let [ min, max ] = companySpendAbility.split('-')
      if (min && max) {
        min = Number(min.split('$').join(''))
        max = Number(max.split('$').join(''))
        if (isNumber(min) && isNumber(max)) {
          if (min >= max) {
            return 'The first value must be greater than second value'
          }
        } else {
          return 'Please inform two valid numbers separate by hyphen e.g 150 - 300'
        }
      } else if (moreThanLimit(companySpendAbility, 0) && !isFocused(this.$refs.spendability.$el.querySelector('input'))) {
        return 'Please inform two values separate by hyphen e.g 150 - 300'
      }
      return ''
    }
  },
  data: () => ({
    form: {
      companyName: '',
      companySpend: '',
      companySpendAbility: '',
      notes: ''
    }
  }),
  methods: {
    forceFormValidationOnBlur () {
      this.form = { ...this.form }
    }
  },
}
</script>

<style lang="scss" scoped>
.company-data {
  border: 1px $lightblue solid;
  border-radius: 5px;
  background-color: $white;
  .instruction {
    color: $darkgrey;
  }
}
</style>

<style lang="scss">
.company-data {
  .input-field {
    input {
      width: 50%;
      @media (max-width: 600px) {
        width: calc(100% - 24px);
      }
    }
  }
}
</style>
