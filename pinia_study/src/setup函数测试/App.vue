<template>
  <SetupTest name="a" class="b" ref="testRef">
    <template #slot1>
      <div class="solot">我是插槽</div>
    </template>
  </SetupTest>
  <ToRefsTest></ToRefsTest>
  <WatchTest />
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import SetupTest from './SetupTest.vue'
import ToRefsTest from './ToRefsTest.vue'
import WatchTest from './WatchTest.vue'

export default defineComponent({
  components: {
    SetupTest,
    ToRefsTest,
    WatchTest
  },
  created() {
    console.log(this.$name)
  },
  setup() {
    const testRef = ref()
    onMounted(() => {
      // console.log(testRef.value)
    })
    return { testRef }
  }
})
</script>
<style scoped></style>
