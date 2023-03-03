<template>
  <div class="y-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, provide } from 'vue'
export default {
  name: 'YRadioGroup',
  props: {
    value: null
  },
  setup() {
    let { proxy } = getCurrentInstance()
    provide('RadioGroup', proxy)
  },
}
</script>