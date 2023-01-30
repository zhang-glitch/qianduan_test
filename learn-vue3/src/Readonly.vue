<template>
  <p>{{ state.name }}</p>
  <p>{{ state.age.num }}</p>
  <button @click="myFn">按钮</button>
</template>

<script>
import { readonly, shallowReadonly } from "vue";
export default {
  name: "Readonly",
  setup() {
    // let state = readonly({
    //   name: "zh",
    //   age: {
    //     num: 20,
    //   },
    // });

    let state = shallowReadonly({
      name: "zh",
      age: {
        num: 20,
      },
    });

    let myFn = () => {
      state.name = "llm";
      state.age.num = 19;
      console.log(state);
    };

    return {
      state,
      myFn,
    };
  },
};
</script>

<style>
</style>