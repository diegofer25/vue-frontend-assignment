<template>
  <div class="input-text flex column">
    <label class="mb-xs" v-if="label" :for="label" v-text="label"></label>
    <input
      v-if="type === 'text'"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :name="label"
      :placeholder="placeholder"
    />
    <textarea
      v-else
      :class="{ noresize: !resize }"
      :name="label"
      :cols="cols"
      :rows="rows"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
import { input } from 'Components/atoms'
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ['text', 'textarea'].indexOf(value) !== -1
      }
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '1'
    },
    cols: {
      type: String,
      default: '1'
    },
    resize: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.input-text {
  min-width: 100%;
  label {
    text-transform: uppercase;
    color: $grey;color: $grey;
    font-size: 13px;
  }
  input {
    width: 50%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  input, textarea {
    border: none;
    border-radius: 3px;
    box-shadow:  0 0 5px rgb(199, 199, 199), 0 0 5px rgb(255, 255, 255);
    padding: 10px;
    &::placeholder {
      opacity: 0.5;
      color: $grey;
    }
    &.noresize {
      resize: none;
    }
  }
}
</style>
