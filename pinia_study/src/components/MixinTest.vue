<template>
  <div>
    <div>{{ name }}</div>
    <div>friends.age - {{ friends.age }}</div>
    <div>friends.name - {{ friends.name }}</div>
    <div>{{ nameRef }}</div>
    <button @click="btnClick">测试extends的按钮</button>
    <button @click="testClick">
      测试修改mixins中的数据，是否会影响其他组件
    </button>
  </div>
</template>


<script>
import {
  defineComponent,
  reactive,
  ref,
  computed,
  onMounted,
  onBeforeMount
} from 'vue'
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
  },
  methods: {
    testClick() {
      this.friends.name = 'ppppp'
    }
  }
})
</script>
<style scoped></style>
