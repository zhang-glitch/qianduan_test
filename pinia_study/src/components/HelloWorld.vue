<template>
  <div class="hello-world">
    <!-- $attrs是包括非props的class, style的 -->
    <h1 v-bind="$attrs">响应式state数据</h1>
    <ul>
      <li>姓名： {{ userStore.name }}</li>
      <li>年龄： {{ userStore.age }}</li>
      <li>朋友： {{ userStore.friends }}</li>
    </ul>

    <h1>非响应式state数据，通过解构</h1>
    <ul>
      <li>姓名： {{ name }}</li>
      <li>年龄： {{ age }}</li>
      <li>朋友： {{ friends }}</li>
    </ul>

    <h1>响应式state数据，通过解构</h1>
    <ul>
      <li>姓名： {{ reactiveName }}</li>
      <li>年龄： {{ reactiveAge }}</li>
      <li>朋友： {{ reactiveFriends }}</li>
    </ul>

    <h1>getters展示</h1>
    <div>{{ userStore.totalPrice }}</div>
    <div>{{ userStore.totalPriceCountGreaterN(2) }}</div>

    <button @click="handleUserState">修改数据：handleUserState</button>
  </div>
</template>

<script lang="ts" setup>
import useUserStore from '../store'
import { storeToRefs } from 'pinia'
import { useAttrs } from 'vue'
console.log(useAttrs())

const userStore = useUserStore()
// 不能直接解构，结构后数据将不再是响应式。
const { name, age, friends } = userStore
// 将其变为响应式
const {
  name: reactiveName,
  age: reactiveAge,
  friends: reactiveFriends
} = storeToRefs(userStore)

const handleUserState = () => {
  // 方式一：
  // userStore.name = 'llm'
  // userStore.age = 20
  // userStore.friends.push('llm', 'zh')
  // // 方式二：
  // userStore.$patch((state) => {
  //   state.name = 'llm'
  //   state.age = 30
  //   state.friends.push('llm', 'zh')
  // })
  // // 方式二：
  // userStore.$patch({
  //   name: 'llm',
  //   age: 30,
  //   friends: [...userStore.friends, 'zh', 'llm'],
  // })

  // 方式三
  // userStore.changeState()
  userStore.getSong()
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  inheritAttrs: false
})
</script>

<style scoped></style>
