<template>
  <div class="emit-test">
    <p>我是一个测试组件</p>
    <button @click="handleClick">绑定的一个emit</button>
  </div>
</template>
<script setup>
import { useAttrs } from 'vue'
// const emit = defineEmits(['handleClick1'])
const emit = defineEmits<{
  (e: 'handleClick1'): void
}>()


const handleClick = () => {
  emit('handleClick1')
}
</script>
<style scoped>
.emit-test {
  width: 100px;
  height: 100px;
  background: skyblue;
}
</style>
