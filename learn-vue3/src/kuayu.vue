<template>
  <div></div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    // axios.get('http://localhost:8080/').then((res) => {
    //   console.log('res', res)
    // })
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res)
      })

    fetch('http://localhost:8080/index')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res)
      })
  },
})
</script>
<style  scoped>
</style>