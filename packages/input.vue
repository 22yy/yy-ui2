<template>
 <div :class="['y-input', { 'suffix ' : showSuffix }]">
  <textarea 
  v-if="type === 'textarea'"
  :class="['y-input_textarea', { 'is-disabled': disabled }]"
  :placeholder="placeholder"
  name="" 
  id=""
  cols="30"
  rows="10"
  @input="handleInput"
  ></textarea>
  <input 
  v-else
  :class="['y-input_inner', { 'is-disabled' : disabled }]"
  :placeholder="placeholder"
  :name="name"
  :value="value"
  @input="handleInput"
  :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
  />
  <span class="y-input_suffix" v-show="showSuffix">
    <y-button 
    icon="y-icon-close-circle" 
    circle 
    class="y-input_button"
    v-if="clearable && value"
    @click="clearInput"
    ></y-button>
    <y-button 
    icon="y-icon-browse" 
    circle 
    :class="['y-input_button', { 'active': passwordVisible }]"
    v-if="showPassword && value"
    @click="handlePassword"
    ></y-button>
    <y-button 
    icon="y-icon-browse-off" 
    circle 
    :class="['y-input_button', { 'active': passwordVisible }]"
    v-if="!passwordVisible && value && !clearable"
    @click="handlePassword"
    ></y-button>
  </span>
 </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: "YInput",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }

  },
  setup(props, { emit }) {
    let passwordVisible = ref(false)
    
    const showSuffix = computed(() => {
      return props.clearable || props.showPassword
    })

    function handleInput(e) {
      emit('input', e.target.value)
    }

    function handlePassword() {
      passwordVisible.value = !passwordVisible.value
    }
    
    function clearInput() {
      emit('input', '')
    }
    return {
      showSuffix,
      passwordVisible,
      handleInput,
      handlePassword,
      clearInput
    }
  }
}
</script>

<style lang="scss" scoped>
.y-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .y-input_textarea {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    padding: 10px 15px;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .y-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #dcdfe6;
    width: 100%;
    display: inline-block;
    padding: 10px 15px;
    font-size: inherit;
    border-radius: 4px;
    color: #606266;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.y-input.suffix {
  .y-input_inner {
    padding-right: 30px;
  }
  .y-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    .y-input_button {
      padding: 0;
      background: transparent;
      border: none;
      font-size: 16px;
      position: absolute;
      top: 12px;
      right: 5px;
    }
    .y-icon-browse{
      color: #909399
    }
    .y-icon-close-circle{
      color: #909399
    }
    & .active {
      color: #666;
    }
  }
}
</style>