<template>
  <p>{{ digui.a }}</p>
  <p>{{ digui.b.b }}</p>
  <p>{{ digui.b.c.c }}</p>
  <p>{{ digui.b.c.d.d }}</p>
  <button @click="myFn">按钮</button>
</template>

<script>
import { reactive } from "vue";
// <!-- 递归的讲解 -->
export default {
  name: "App4",
  setup() {
    let digui = reactive({
      a: "a",
      b: {
        b: "b",
        c: {
          c: "c",
          d: {
            d: "d",
          },
        },
      },
    });

    let myFn = () => {
      console.log(digui);
      console.log(digui.b);
      console.log(digui.b.c);
      console.log(digui.b.c.d);
    };

    return {
      digui,
      myFn,
    };
  },
};
</script>

<style>
</style>