<template>
  <div>
    <div v-if="isShow"><Parent /></div>
    <button @click="btn">按钮</button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Parent from './Parent.vue'

export default defineComponent({
  components: {
    Parent
  },
  setup() {
    const isShow = ref(true)
    const btn = () => {
      isShow.value = !isShow.value
    }
    return {
      isShow,
      btn
    }
  }
})
</script>
<style scoped></style>
