<template>
  <div class="y-form-item">
    <label class="y-form-item__label" :style="labelStyle">
      {{ label }}
    </label>
    <div class="y-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  name: 'YFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup(props) {
   const Form = inject('Form', '') 
   const labelStyle = computed(() => {
    return {width: this.Form.labelWidth}
   })
   return {
    Form,
    labelStyle
   }
  },
}
</script>
<style scoped lang="scss">
.y-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  .y-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .y-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: '';
    }
  }
}
</style>
