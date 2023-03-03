<template>
  <div class="y-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, provide } from 'vue'
export default {
  name: 'YCheckboxGroup',
  props: {
    value: Array
  },
  setup() {
    const { proxy } = getCurrentInstance()
    provide('CheckboxGroup', proxy)
  },
}
</script>

<style lang="scss" scoped>

</style>