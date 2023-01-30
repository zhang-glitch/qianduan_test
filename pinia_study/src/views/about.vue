<template>
  <div>about</div>
  <div>{{ name }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'llm'
    }
  },
  setup() {
    console.log('===', name)
  }
})
</script>
<style  scoped>
</style>
