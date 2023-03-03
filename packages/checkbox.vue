<template>
  <label 
   :class="['y-checkbox', { 'is-checked' : isChecked, 'is-disabled' : disabled }]">
    <span class="y-checkbox_input">
      <span 
      class="y-checkbox_inner"
      :style="{
          backgroundColor: isChecked ? activeColor : '#fff',
          borderColor: isChecked ? activeColor : '#dcdfe6'
        }"
      ></span>
      <input 
      type="checkbox" 
      class="y-checkbox_original" 
      :name="name"
      :value="label"
      v-model="model"
      :disabled="disabled"
      />
      <span class="y-checkbox_label">
        <slot>选项</slot>
      </span>
    </span>
  </label>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  name: 'YCheckbox',
  props: {
    value: {
     type: Boolean,
     default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: "#409eff"
    }
  },
  setup(props, { emit }) {
    const CheckboxGroup = inject('CheckboxGroup', '')
    const isGroup = computed(() => {
      return !!CheckboxGroup.value
    })
    const isChecked = computed(() => {
      return isGroup.value ? model.value.includes(props.label) : model.value
    })
    const model = computed({
      get() {
        return isGroup.value ? CheckboxGroup.value : value
      },
      set(value) {
       isGroup.value ? CheckboxGroup.$emit('input', value) : emit('input', value)
      }
    })
    return {
      CheckboxGroup,
      isChecked,
      isGroup,
      model,
    }
  },
}
</script>

<style lang="scss" scoped>
.y-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .y-checkbox_input {
    position: relative;
    vertical-align: middle;
    white-space: nowrap;
    outline: none;
    line-height: 1;
    cursor: pointer;
    display: inline-block;
    .y-checkbox_inner {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: #fff;
      box-sizing:border-box;
      border-radius: 2px;
      border: 1px solid #dcdfe6;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      background-color: 0.25 cubic-bezier(0.71, -0.46, 0.29, 1.46);
      z-index: 1;
      // 使用边框实现对钩
      &:after {
        content: '';
        position:absolute;
        height: 7px;
        width: 3px;
        left: 5px;
        top: 3px;
        transform: rotate(45deg) scaleY(1);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
        border:1px solid #fff;
        border-left: 0;
        border-top: 0;
        box-sizing: content-box;
      }
    }
    .y-checkbox_original {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      outline: none;
      z-index: -1;
    }
  }
  .y-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 父元素的最后的一个子元素y-checkbox取消margin-right，也包括嵌套子元素的最后一个-checkbox
.-checkbox:last-of-type {
  margin-right: 0;
}
.y-checkbox.is-checked {
  .y-checkbox_inner {
    background-color: #409eff;
    border-color: #409eff;
    &:after {
      transform: rotate(45deg) scaleY(1)
    }
    .y-checkbox_label {
      color: #409eff;
    }
  }
}
.y-checkbox.is-disabled {
  .y-checkbox_inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  span.y-checkbox_label {
    color:#c0c4cc;
    cursor: not-allowed;
  }
}
</style>