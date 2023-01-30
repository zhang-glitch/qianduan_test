<template>
  <div></div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  // extends不可以使用setup中的属性
  // setup() {
  //   const nameRef = ref('zh')
  //   const btnClick = () => {
  //     console.log('=======btnClick')
  //   }
  //   return {
  //     nameRef,
  //     btnClick,
  //   }
  // },
  data() {
    return {
      nameRef: 'zh===='
    }
  },
  methods: {
    btnClick() {
      console.log('=======btnClick')
    }
  }
})
</script>
<style scoped></style>
