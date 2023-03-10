# yy-ui2

- 安装

```bash
yarn add yy-ui2
```

- 全局导入

```js
import YyUI from 'yy-ui2'
import 'yy-ui2/lib/yy-ui2.css'
```

## 组件

### 按钮(Button)

<br>

| 属性     | 值               | 描述 |
| -------- | ---------------- | ------------------------------------------------------------ |
| type     | String           | 按钮类型：primary,info,success,warning,danger |
| plain    | Boolean          | 是否为朴素按钮，默认 false |
| mimicry  | Boolean          | 是否为拟态按钮，和 plain 不能同时设置，会被 plain 覆盖。默认 false |
| disabled | Boolean          | 是否禁用按钮，默认  false |
| round    | Boolean          | 是否为圆角按钮，默认 false |
| circle   | Boolean          | 是否为圆形按钮，默认false  |
| icon     | String | 字体图标，默认为 '' |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |           

### 对话框(Dialog)

<br>

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| visible  | Boolean | 对话框可见状态，默认为 false       |
| width    | String  | 对话框宽度，默认为 50%             |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |
| body | Dialog内容区 |  


### 输入框(Input)

<br>

| 属性         | 值      | 描述                               |
| ------------ | ------- | ---------------------------------- |
| type         | String  | 表单类型，默认为'text'             |
| name         | String  | 表单命名，默认为空                 |
| value        | String  | 表单值，默认为空字符串             |
| placeholder  | String  | 占位符，默认为空字符串             |
| disabled     | Boolean | 是否禁用，默认为 false             |
| clearable    | Boolean | 是否可清空，默认为 false           |
| showPassword | Boolean | 是否显示密码可见，默认为 false     |  

### 切换(Switch)

<br>

| 属性          | 值      | 描述                               |
| ------------- | ------- | ---------------------------------- |
| v-model       | Boolean | 默认false
| name          | String  | 表单命名，默认为空                 |
| value         | String  | 表单值，默认为空字符串             |
| disabled      | Boolean | 是否禁用，默认为 false             |
| activeColor   | String  | 激活状态颜色，默认为#409eff      |
| inactiveColor | String  | 未激化状态颜色，默认为#dcdfe6      | 

### 单选框(Radio)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

### 单选框组(RadioGroup)

<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

<br>

---

<br>

### 复选框(Checkbox)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 复选框组(CheckboxGroup)

<br>

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

<br>

---

<br>

### 表单项(Form-item)

<br>

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

<br>

### 表单(Form)

<br>

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |

<br>