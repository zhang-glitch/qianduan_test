<template>
  <button @click="increase">添加计数</button>
  <h3>列表</h3>
  <ul>
    <li v-for="item in sortedList">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onUpdated } from 'vue'

const list = reactive([1, 2, 3, 4, 5])

const count = ref(0)
function increase() {
  count.value++
}

const isOver100 = computed(() => {
  return count.value > 10
}) // count一直在变化

const sortedList = computed(() => {
  // 这里比较简单，可以将它想象成开销大的计算
  return isOver100.value ? [...list].reverse() : [...list]
})

onUpdated(() => {
  // 组件重新渲染时触发
  console.log('count is', count.value)
  console.log('component re-rendered!')
})
</script>
