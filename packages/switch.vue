<template>
  <div 
  :class="[
    'y-switch', 
    {'is-disabled': disabled },
    {'is-checked' : value }
    ]"
    :aria-checked="value"
    @click="handleClick"
    >
   <span class="y-switch_core"
   ref="core"
   :style="{ 
    'background-color': value ? activeColor : inactiveColor,
    'border-color': value ? activeColor : inactiveColor,      
  }"
   ></span>
   <!-- 接收name -->
   <input class="y-switch_input" type="checkbox" :name="name"/>
  </div>
</template>

<script>
export default {
  name: 'YSwitch',
  props:{
    name: {
      type: String,
      default: ''
    },
    value: {
      typr: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    }
  },
  setup(props, { emit }) {
    function handleClick() {
       if (!props.disabled) {
         emit('input', !props.value)
         emit('change', !props.value)
       }
    }
    return {
      handleClick
    }
  },
}
</script>

<style lang="scss" scoped>
.y-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .y-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .y-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
  }
  .y-switch_core:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #fff;
    transition: all 0.3s;
  }
  &.is-disabled .y-switch_core {
    cursor: not-allowed;
  }
  &.is-checked .y-switch_core::after {
    left: 100%;
    margin-left: -17px;
  }
}
</style>