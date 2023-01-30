<template>
  <p>{{ reactiveValue }}</p>
  <button @click="myFn">按钮</button>
</template>

<script>
import { markRaw, reactive } from "vue";
export default {
  name: "MarkRaw",
  setup() {
    let obj = {
      name: "zh",
      age: 20,
    };
    // let reactiveValue = reactive(obj);
    //只有最开始的时候让其阻止被监听才有效果。
    let markValue = markRaw(obj);
    let reactiveValue = reactive(obj);

    let myFn = () => {
      reactiveValue.name = "llm";

      console.log(reactiveValue);
    };
    return {
      reactiveValue,
      myFn,
    };
  },
};
</script>

<style>
</style>