<template>
  <p>{{ refValue }}</p>
  <p>{{ reactiveVaule.value }}</p>
  <button @click="myFn">按钮</button>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "App3",
  setup() {
    let refValue = ref(1);
    let reactiveVaule = reactive({ value: 111 });

    let myFn = () => {
      console.log(refValue);
      console.log(reactiveVaule);
      refValue.value = 666;
    };
    return {
      refValue,
      myFn,
      reactiveVaule,
    };
  },
};
</script>

<style>
</style>