<template>
  <div>
    parent
    <Son />
  </div>
</template>
<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
import Son from './Son.vue'

export default defineComponent({
  components: {
    Son
  },
  setup() {
    onBeforeMount(() => {
      console.log('parent========beforeMount')
    })
    onMounted(() => {
      console.log('parent==========mounted')
    })
    onUnmounted(() => {
      console.log('parent ======== unmounted')
    }),
      onBeforeUnmount(() => {
        console.log('parent===========beforeUnmount')
      })
  }
})
</script>
<style scoped></style>
