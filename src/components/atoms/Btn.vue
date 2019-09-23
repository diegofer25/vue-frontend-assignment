<template>
  <button
    class="btn py-sm px-lg"
    :class="[
      `bg-${color}`,
      `text-${textColor}`
    ]"
    v-bind="$attrs"
    v-on="$listeners"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: String,
    color: String,
    textColor: String
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  text-transform: uppercase;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    cursor: pointer;
    opacity: .8;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>
