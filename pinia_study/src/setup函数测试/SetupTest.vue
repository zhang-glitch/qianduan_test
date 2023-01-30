<template>
  <div>
    <slot name="slot1"></slot>
  </div>
  <div>其他内容</div>
  <div>{{ ref1.name }}</div>
  <div>{{ reative1.age }}</div>
</template>
<script>
import { defineComponent, readonly, ref, reactive } from 'vue'

export default defineComponent({
  name: 'SetupTest',
  data() {
    return {
      name: '============'
    }
  },
  props: {
    name: {
      type: String
    }
  },
  setup(props, { attrs, emit, slots, expose }) {
    // console.log(attrs) // 获取的是非props的属性
    // console.log(emit)
    // console.log(slots.slot1) // 获取父元素传入的插槽内容
    // console.log(expose) // 向外暴露一些数据。
    // expose({
    //   age: '20',
    // })

    const ref1 = ref({
      name: 'ref1'
    })

    const reative1 = reactive({
      age: 30
    })

    const copy = readonly(ref1)
    const copy2 = readonly(reative1)
    copy.name = 'ref2'
    ref1.value.name = 'pp'
    copy.age = 40
    return {
      ref1,
      reative1
    }
  }
})
</script>

<!-- 如果setup语法糖和script一起使用，那么他只能 获取到script setup暴露的数据。对于外部该组件时完全封闭的。-->
<!-- <script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b,
})
</script>  -->
<style scoped></style>
