<template>
  <transition name="dialog-fade">
  <div class="y-dialog_wrapper" v-show="visible" @click.self="handleClose">
   <div 
   :class="['y-dialog']"
   :style="{ width: width , marginTop: top}"
   >
    <div class="y-dialog_header">
      <slot name="title">
        <span class="y-dialog_title">{{ title }}</span>
      </slot>
      <y-button 
      circle 
      icon="y-icon-close" 
      class="y-dialog_headerBtn"
      @click="handleClose"
      ></y-button>
    </div>
    <div class="y-dialog_body">
      <slot name="body">
        <slot></slot>
      </slot>
    </div>
    <div class="y-dialog_footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
   </div>
  </div>
 </transition>
</template>

<script>

export default {
  name: 'YDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    function handleClose() {
      emit('update:visible', false)
    }
    return {
      handleClose
    }
  }
}
</script>

<style lang="scss" scoped>
.y-dialog_wrapper {
 position: fixed;
 top: 0;
 right: 0;
 left:0;
 bottom: -3vh;
 overflow: auto;
 margin: 0;
 z-index: 2001;
 background-color: rgba(0, 0, 0, 0.5);
 .y-dialog{
   position: relative;
   margin: 15vh auto 50px;
   background: #fff;
   border-radius: 2px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, .3 );
   box-sizing: border-box;
   &_header {
    padding: 20px 20px 10px;
    display: flex;
    justify-content: center;
    .y-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
    .y-dialog_headerBtn {
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      position: absolute;
      right: 15px;
      .y-icon-close {
        color: #909399
      }
    }
   }
   &_body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    //  word-break 指定了怎样在单词内断行
    word-break: break-all;
   }
   &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //   ::v-deep 相当less中的/deep/
      ::v-deep .y-button:first-child {
        margin-right: 20px;
      }
    }
 }
}

.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.39s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-3vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>