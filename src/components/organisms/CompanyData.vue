<template>
  <div class="company-data flex column pa-lg">
    <div class="flex row">
      <p class="instruction mt-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="flex row mb-md">
      <input-text
        type="text"
        label="Company Name"
        placeholder="e.g. Your Company Name"
        v-model="form.companyName"
      />
    </div>
    <div class="flex row mb-md">
      <input-text
        type="text"
        label="Company Spend"
        placeholder="e.g. $150,000"
        v-model="form.companySpend"
      />
    </div>
    <div class="flex row mb-md">
      <input-text
        type="text"
        label="Company Spend Ability"
        placeholder="e.g. $150,000 - $300,000"
        v-model="form.companySpendAbility"
      />
    </div>
    <div class="flex row">
      <input-text
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
import { InputText } from 'Components/atoms'
export default {
  name: 'CompanyData',
  components: {
    InputText
  },
  data: () => ({
    form: {
      companyName: '',
      companySpend: '',
      companySpendAbility: '',
      notes: ''
    }
  })
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
