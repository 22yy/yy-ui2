<template>
  <label :class="['y-radio', { 'is-checked' : isChecked }]">
    <span class="y-radio_input">
      <span 
      class="y-radio_inner"
      :style="{
        borderColor : color && isChecked ? color : '#dcdfe6' ,
        backgroundColor : color && isChecked ? color : '#ffffff'
      }"
      ></span>
      <input 
      type="radio" 
      class="y-radio_original"
      :name="name"
      :value="label"
      v-model="model"
      />
      <span 
      class="y-radio_label"
      :style="{
        color: color && isChecked ? color : ''
      }">
        <slot>{{ label }}</slot>
      </span>
    </span>
  </label>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  name: 'YRadio',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    color: {
      type: String,
      default: '#409eff'
    }
  },
  setup(props, { emit }) {
    const RadioGroup = inject('RadioGroup', '')
    const model = computed({
      get() {
        // console.log('getmodel',model);
        return isGroup.value ? RadioGroup.value : value
      },
      set(value) {
       isGroup.value ? RadioGroup.$emit('input', value) : emit('input', value)
      }
    })
    const isChecked = computed(() => {
      return props.label === model.value
    })
    // 判断是否被group包裹
    const isGroup = computed(() => {
      return !!RadioGroup.value
    })

    return {
      RadioGroup,
      model,
      isChecked,
      isGroup,
    }
  }
}
</script>

<style lang="scss" scoped>
.y-radio {
  position: relative;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  outline: none;
  color: #606266;
  outline: none;
  white-space: nowrap;
  .y-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .y-radio_inner {
       display: inline-block;
       position: relative;
       line-height: 1;
       cursor: pointer;
       border: 1px solid #dcdfe6;
       border-radius: 100%;
       width: 14px;
       height: 14px;
       background: #fff;
       box-sizing: border-box;
    }
    .y-radio_inner:after {
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
    .y-radio_original {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      outline: none;
      opacity: 0;
      z-index: -1;
    }
  }
  .y-radio_label {
    font-size: 14px;
    margin-left: 10px;
  }
}
.y-radio.is-checked {
  .y-radio_input {
    .y-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
      transform: translate(-50%, -50%) scale(1) 
     }
    }
  }
  .y-radio_label {
    color:#409eff
  }
}
</style>