<template>
  <div>
    <div>{{ name }}</div>
    <div>friends.age - {{ friends.age }}</div>
    <div>friends.name - {{ friends.name }}</div>
    <div>{{ nameRef }}</div>
    <button @click="btnClick">测试extends的按钮</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mixinObj } from './mixinObj.js'
import BaseComp from './BaseComp.vue'
export default defineComponent({
  mixins: [mixinObj],
  extends: BaseComp,
  data() {
    return {
      name: 'pp'
      // friends: {
      //   // name: 'oo',
      // },
    }
  },
  created() {
    console.log('======组件自身created')
  }
  // setup() {},
})
</script>
<style scoped></style>
