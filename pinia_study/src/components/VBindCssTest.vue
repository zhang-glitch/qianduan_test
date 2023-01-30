<template>
  <div class="text">hello</div>

  <button @click="btnColor">改变颜色</button>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      color: 'red',
      width: '200px',
      height: '300px',
      background: 'black'
    }
  },

  methods: {
    btnColor() {
      this.color = 'green'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
  width: v-bind(width);
  height: v-bind(height);
  background: v-bind(background);
}
</style>
