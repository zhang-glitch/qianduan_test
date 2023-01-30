<template>
  <div>{{ name.age }}</div>
  <button @click="btnClick">
    修改name.age,看toRefs包裹的多层对象否是响应式的。答案依旧是响应式的。
  </button>
</template>
<script>
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  setup() {
    const obj = reactive({
      name: {
        age: 20
      }
    })
    const { name } = toRefs(obj)
    const btnClick = () => {
      name.value.age = '40'
    }
    return {
      name,
      btnClick
    }
  }
})
</script>
<style scoped></style>
