<template>
  <div>{{ obj.name }}</div>
  <button @click="changeObj">改变obj</button>
  <button @click="changeObjName">改变objName</button>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      obj: {
        name: 'zh',
        age: 20,
        friends: {
          name: 'llm'
        }
      }
    }
  },
  watch: {
    // obj(newObj, oldObj) {
    //   console.log('===', newObj, oldObj)
    // },
    // obj: {
    // handler(newObj, oldObj) {
    //   console.log('=====', newObj === oldObj) // true
    // },
    // deep: true,
    // },

    'obj.name': function (newObj, oldObj) {
      console.log('======', newObj, oldObj)
    }
  },
  methods: {
    changeObj() {
      // this.obj = {
      //   name: 'llm',
      // }
      this.obj.friends.name = 'jcl'
    },
    changeObjName() {
      this.obj.name = 'zhllm'
    }
  }
})
</script>
<style scoped></style>
