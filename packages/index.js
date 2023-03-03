// 整个包的入口
// 定义install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
// 统一导出
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Checkbox from './checkbox.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Switch from './switch.vue'
import CheckboxGroup from './checkbox-group.vue'
import From from './form.vue'
import FromItem from './form-item.vue'
import './fonts/font.css'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Checkbox,
  CheckboxGroup,
  From,
  FromItem
]
const install = function(Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
   install
}