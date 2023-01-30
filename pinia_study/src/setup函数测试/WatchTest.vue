<script setup>
import { ref, watch } from 'vue'

const obj = ref({
  name: 'zh',
  age: 20
})
// () => obj.value.name
watch(
  obj,
  (newObj, oldObj) => {
    console.log(newObj, oldObj)
  },
  {
    deep: true
  }
)

const btnClick = () => {
  obj.value.name = 'llm'
}
</script>

<template>
  <div>
    {{ obj.name }}
  </div>
  <button @click="btnClick">改变obj.name</button>
</template>
