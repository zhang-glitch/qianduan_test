<template>
  <div>
    <input type="text" name="username" v-model="formVal.name" />
    <input type="text" name="id" v-model="formVal.id" />
    <input type="textarea" name="content" v-model="formVal.content" />
    <div>{{ updateText }}</div>
    <button @click="handleArticle">添加草稿</button>
    <button @click="handleForm">修改变量</button>
  </div>
</template>
<script>
import { defineComponent, ref, watch, computed } from 'vue'
// import { useRouter } from 'vue-router'
import emitter from '../emitter.js'

export default defineComponent({
  setup() {
    const article = JSON.parse(localStorage.getItem('article'))
    const addArticle = JSON.parse(localStorage.getItem('addArticle'))
    const initFormVal = addArticle || {
      name: '',
      id: '',
      content: '',
    }
    const formVal = ref(initFormVal)
    const updateText = ref('发布')

    const handleArticle = () => {
      localStorage.setItem('addArticle', JSON.stringify(formVal.value))
    }

    // 为什么不管是在导航守卫中改变响应式的值，还是在事件总线中，都不会生效。
    // const router = useRouter()
    // router.beforeEach((to, from) => {
    //   if (from.name === 'list') {
    //     console.log('=====formlist')
    //     updateText.value = '更新'
    //   } else {
    //     console.log('=====create')
    //     updateText.value = '发布'
    //   }
    // })

    emitter.on('updateText', (text) => {
      updateText.value = text
    })

    watch(updateText, (text) => {
      if (text === '更新') {
        formVal.value = article
      } else {
        formVal.value = addArticle
      }
    })

    // const formVals = computed(() => {
    //   let newFormVal = {}

    //   return newFormVal
    // })

    const handleForm = () => {
      formVal.value = {
        id: 2,
        title: 'jjjj',
        content: '00000',
      }
    }

    return {
      handleArticle,
      formVal,
      handleForm,
      updateText,
    }
  },
})
</script>
<style  scoped>
</style>