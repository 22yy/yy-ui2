<template>
  <div id="app">
   <div class="raw">
      <y-button @click="visible = true">按钮</y-button>
      <y-button type="primary" plain>按钮</y-button>
      <y-button icon="y-icon-close" circle></y-button>
      <y-button disabled type="warning">按钮</y-button>
    </div>
   <y-dialog :visible.sync="visible">
    <y-form :model="model">
      <y-form-item label="用户名">
        <y-input placeholder="请输入用户名" v-model="model.username" clearable></y-input>
      </y-form-item>
      <y-form-item label="密码">
        <y-input placeholder="请输入密码" type="password" v-model="model.password" showPassword></y-input>
      </y-form-item>
      <y-form-item label="保存">
       <y-switch v-model="model.save"></y-switch>
      </y-form-item>
      <y-form-item label="性别">
        <y-radio-group v-model="model.gender" >
         <y-radio label="1">男</y-radio>
         <y-radio label="0">女</y-radio>
        </y-radio-group>
      </y-form-item>
      <y-form-item label="兴趣爱好">
        <y-checkbox-group v-model="model.interest">
          <y-checkbox vlaue="draw">画画</y-checkbox>
          <y-checkbox label="sing">唱歌</y-checkbox>
          <y-checkbox label="dancing">跳舞</y-checkbox>
        </y-checkbox-group>
      </y-form-item>
    </y-form>
    <template v-slot:footer>
     <y-button>取消</y-button>
     <y-button type="primary">确定</y-button>
    </template>
   </y-dialog>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  name: 'app',
  setup(props) {
    const visible = ref(false)
    const model = reactive({
      username: 'admin',
      password:'',
      save: false,
      gender:'男',
      interest:ref([])
    });
    return {
      model,
      visible
    }
  }
}
</script>

<style lang="scss">

</style>
