<template>
  <p ref="refDom">我是文本节点</p>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "AcquireDom",
  setup() {
    let refDom = ref(null);

    onMounted(() => {
      console.log("dom", refDom.value);
    });

    console.log(refDom.value);
    return {
      refDom,
    };
  },
};
</script>

<style>
</style>