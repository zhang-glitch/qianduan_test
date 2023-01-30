<template>
  <div>
    <!-- <Draggable v-model="titles">
      <template v-slot:item="{ item }">
        {{ item.title }}
      </template>
    </Draggable> -->
    <template v-for="item in titles" :key="item.id">
      <div>
        {{ item.title }}
      </div>
    </template>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Draggable from 'vue3-draggable'

export default defineComponent({
  components: {
    Draggable
  },
  setup() {
    console.log('============')
    const titles = ref([
      { id: 1, name: 'zh', title: 'zh' },
      { id: 2, name: 'zh1', title: 'zh1' },
      { id: 3, name: 'zh2', title: 'zh2' },
      { id: 4, name: 'zh3', title: 'zh3' },
      { id: 5, name: 'zh4', title: 'zh4' }
    ])

    return {
      titles
    }
  }
})
</script>
<style  scoped>
</style>
