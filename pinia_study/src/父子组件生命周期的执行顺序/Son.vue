<template>
  <div>son</div>
</template>
<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      console.log('son========beforeMount')
    })
    onMounted(() => {
      console.log('son==========mounted')
    })
    onUnmounted(() => {
      console.log('son ======== unmounted')
    }),
      onBeforeUnmount(() => {
        console.log('son===========beforeUnmount')
      })
  }
})
</script>
<style scoped></style>
