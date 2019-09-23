<template>
  <div class="input-field flex column mb-sm">
    <label class="mb-xs" v-if="label" :for="label" v-text="label"></label>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      :name="label"
      :placeholder="placeholder"
      :class="{ error }"
    />
    <textarea
      v-else
      :class="{ noresize: !resize, error }"
      :name="label"
      :cols="cols"
      :rows="rows"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      :placeholder="placeholder"
    ></textarea>
    <span :class="{ error }" class="text-error" v-text="error"></span>
  </div>
</template>

<script>
import { input } from '@/components/atoms'
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
        return ['text', 'number', 'textarea'].indexOf(value) !== -1
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
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "Styles/animations.scss";
.input-field {
  min-width: 100%;
  position: relative;
  label {
    text-transform: uppercase;
    color: $grey;color: $grey;
    font-size: 13px;
  }
  input {
    &[type='number'] {
      -moz-appearance:textfield;
    }
    &[type=number]::-webkit-inner-spin-button,
    &[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
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
    &.error {
      background-color: $lightred;
      border: 1px $error solid;
    }
  }
  span {
    position: absolute;
    height: 0;
    font-size: 13px;
    font-weight: bold;
    opacity: 0;
    bottom: -3px;
    &.error {
      opacity: 1;
      animation: mymove 0.4s;
    }
  }
}
</style>
