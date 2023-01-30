<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import WatchTest from './components/WatchTest.vue'
// import VModelTest from './components/VModelTest.vue'
// import SassTest from './components/SassTest.vue'
// import DefaultProps from './components/DefaultProps.vue'
// import VBindCssTest from './components/VBindCssTest.vue'
// import EmitTest from './components/EmitTest.vue'
// import VForRefTest from './components/VForRefTest.vue'
// import SlotTest from './components/SlotTest.vue'
import MixinTest from './components/MixinTest.vue'
import MixinTest2 from './components/MixinTest2.vue'

const refName = ref({
  friend: 'pp'
})
const btnClick = () => {
  refName.value = {
    friend: 'uu'
  }
}

const handleClick1: () => void = () => {
  console.log('handleClick==========1')
}
const handleClick2: () => void = () => {
  console.log('handleClick==========2')
}

const names = [1, 2, 'zh']

onBeforeMount(() => {
  console.log('=========beforeMount')
})
onMounted(() => {
  console.log('=========onMounted')
})
onBeforeUpdate(() => {
  console.log('=========onBeforeUpdate')
})
onUpdated(() => {
  console.log('=========onUpdated')
})
onBeforeUpdate(() => {
  console.log('=========onBeforeUpdate')
})
onBeforeUpdate(() => {
  console.log('=========onBeforeUpdate')
})
</script>

<template>
  <!-- <HelloWorld class="pp name" style="color: red" /> -->
  <!-- <WatchTest /> -->
  <!-- <VModelTest /> -->
  <!-- <SassTest /> -->

  <!-- <DefaultProps :name="refName" :age="123" />
  <DefaultProps :name="{ friend: 'ss' }" />
  <DefaultProps :name="{ friend: 'yy' }" />
  <button @click="btnClick">改变</button> -->

  <!-- <VBindCssTest  /> -->
  <!-- 插槽测试 -->

  <!-- <SlotTest :names="names" v-slot="zh">
    <div>{{ zh.item }}</div>
  </SlotTest> -->
  <!-- 循环创建插槽，他不是定义了那么多，而是自定义了一个。所以我们可以只传入一个插槽即可。 -->
  <!-- <SlotTest :names="names"> -->
  <!-- 这个是遍历作用域插槽的测试 -->
  <!-- <template v-slot="zh"
      ><div>{{ zh.item }}</div>
    </template> -->
  <!-- 这个是遍历非作用域插槽的测试 -->
  <!-- <div>000000</div> -->
  <!-- </SlotTest> -->

  <!-- <EmitTest @handleClick1="handleClick1" @handleClick2="handleClick2" /> -->
  <!-- <VForRefTest /> -->

  <!-- mixin测试 -->
  <!-- <MixinTest />
  <MixinTest2 /> -->
  <router-link :to="{ path: '/' }">home</router-link>
  <router-link :to="{ path: '/about' }">about</router-link>
  <router-view />
</template>

<style scoped>
div {
  color: red;
}
</style>
