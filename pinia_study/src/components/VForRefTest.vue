<template>
  <div class="v-for-ref-test">
    <div v-for="item in list" :ref="setItemRef" :key="item">{{ item }}</div>
  </div>
</template>
<script>
import { defineComponent, onBeforeUpdate, onUpdated, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref([1, 2, 3, 4])
    let itemRefs = []
    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log(itemRefs)
    })

    return {
      list,
      setItemRef
    }
  }
})
</script>
<style scoped></style>
