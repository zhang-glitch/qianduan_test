<template>
  <div>{{ name.friend }}</div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: Object,
      default: { friend: 'llm' }
    },
    // age: [
    //   {
    //     type: Number,
    //     required: true,
    //   },
    //   {
    //     type: String,
    //     required: true,
    //   },
    // ],
    // 这种只能规定多种类型，不能有太多约束。
    age: [String, Number]
  },
  setup() {}
})
</script>
<style scoped></style>
