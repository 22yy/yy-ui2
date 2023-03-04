<template>
  <div class="y-form">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, provide } from 'vue'
export default {
  name: 'YForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  setup() {
    const { proxy } = getCurrentInstance();
    provide('Form', proxy)
  }
}
</script>