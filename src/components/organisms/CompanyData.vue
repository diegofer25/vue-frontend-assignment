<template>
  <div class="company-data flex column pa-lg">
    <div class="flex row">
      <p class="instruction mt-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="flex row mb-md">
      <input-field
        ref="name"
        type="text"
        label="Company Name"
        placeholder="e.g. Your Company Name"
        v-model="name.value"
        :error="nameValidator"
        @blur="validateFieldOnBlur('name')"
      />
    </div>
    <div class="flex row mb-md">
      <input-field
        ref="spend"
        type="text"
        label="Company Spend"
        placeholder="e.g. $150,000"
        v-model="spend.value"
        :error="spendValidator"
        @blur="validateFieldOnBlur('spend')"
      />
    </div>
    <div class="flex row mb-md">
      <input-field
        ref="spendability"
        type="text"
        label="Company Spend Ability"
        placeholder="e.g. $150,000 - $300,000"
        v-model="spendAbility.value"
        :error="spendAbilityValidator"
        @blur="validateFieldOnBlur('spendAbility')"
      />
    </div>
    <div class="flex row">
      <input-field
        type="textarea"
        label="Notes"
        placeholder="e.g. Good Tech Company"
        :rows="10"
        :resize="false"
        v-model="notes.value"
        @focus="modal = true"
      />
    </div>
    <app-modal v-model="modal">
      <div class="additional-notes flex column pa-lg">
        <div class="flex-item grow">
          <input-field
            type="textarea"
            label="Additional Notes"
            placeholder="e.g. Good Tech Company"
            :rows="10"
            :resize="false"
            v-model="notes.value"
          />
        </div>
        <div class="flex row justify-flex-end">
          <btn text="save" color="primary" @click="modal = false" text-color="white"/>
        </div>
      </div>
    </app-modal>
  </div>
</template>

<script>
import { InputField, AppModal, Btn } from '@/components/atoms'
import { hasLetters, moreThanLimit, isNumber, isFocused } from '@/utils/validations'

export default {
  name: 'CompanyData',
  components: {
    InputField,
    AppModal,
    Btn
  },
  computed: {
    nameValidator () {
      if (!this.name.value && this.isFocusedInput('name')) {
        return 'Please type your company name'
      }
      return ''
    },

    spendValidator () {
      const { value } = this.spend
      if (hasLetters(value)) {
        return 'This field can not contains letters'
      } else if (!value && this.isFocusedInput('spend')) {
        return 'This field can not be empty'
      } else if (value && isNumber(value)) {
        return Number(value) <= 0 ? 'The spend can not be equal or less than zero' : ''
      }
      return ''
    },

    spendAbilityValidator () {
      const { value } = this.spendAbility
      if (hasLetters(value)) {
        return 'This field can not contains letters'
      }
      let [ min, max ] = value.split('-')
      if (min && max) {
        min = Number(min.split('$').join(''))
        max = Number(max.split('$').join(''))
        if (isNumber(min) && isNumber(max)) {
          if (min >= max) {
            return 'The first value must be greater than second value'
          }
        }
      } else if (!value && this.isFocusedInput('spendability')) {
        return 'This field can not be empty or zero'
      } else if (!value.includes('-') && this.isFocusedInput('spendability')) {
        return 'Please inform two values separate by hyphen e.g 150 - 300'
      }
      return ''
    }
  },
  data: () => ({
    name: { value: '' },
    spend: { value: '' },
    spendAbility: { value: '' },
    notes: { value: '' },
    modal: false
  }),
  methods: {
    validateFieldOnBlur (field) {
      this[field] = { ...this[field] }
      if (field === 'spend') this.formatSpend()
    },

    isFocusedInput (ref) {
      return this.$refs[ref] && !isFocused(this.$refs[ref].$el.querySelector('input'))
    },

    formatSpend () {
      if (!this.spendValidator) {
        this.spend.value = `$ ${this.spend.value.trim().split('$ ').join('')}`
      }
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
  .additional-notes {
    background-color: $white;
    width: 100%;
    @media (min-width: 600px) {
      max-height: calc(100vh / 4);
      max-width: calc(100vw / 2);
    }
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
