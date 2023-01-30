<template>
  <ul>
    <li v-for="item in list" :key="item.id" @click="handleLi(item)">
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import emitter from '../emitter.js'

export default defineComponent({
  setup() {
    const list = ref([
      {
        id: 1,
        name: 'title',
        content: 'title=============',
      },
      {
        id: 2,
        name: 'age',
        content: 'age=================',
      },
      {
        id: 3,
        name: 'sex',
        content: 'sex=================',
      },
    ])

    // 处理跳转
    const router = useRouter()
    const handleLi = (item) => {
      window.localStorage.setItem('article', JSON.stringify(item))
      router.push('/create')
      emitter.emit('updateText', '更新')
    }
    return {
      list,
      handleLi,
    }
  },
})
</script>
<style  scoped>
</style>