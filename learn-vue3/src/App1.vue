<template>
  <p>{{ count }}</p>
  <button
    @click="
      {
        {
          handleClick();
        }
      }
    "
  >
    按钮
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App1",
  setup() {
    let count = ref(0);
    function handleClick() {
      // console.log(count);

      count.value += 1;
    }

    return {
      count,
      handleClick,
    };
  },
};
</script>

<style>
</style>