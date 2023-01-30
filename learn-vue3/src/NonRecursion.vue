<template>
  <p>{{ nonValue.a }}</p>
  <p>{{ nonValue.b.b }}</p>
  <p>{{ nonValue.b.c.c }}</p>
  <p>{{ nonValue.b.c.d.d }}</p>
  <button @click="myFn">按钮</button>
</template>

<script>
import { shallowReactive, shallowRef, triggerRef } from "vue";
export default {
  name: "NonRecursion",
  setup() {
    // let nonValue = shallowReactive({
    //   a: "a",
    //   b: {
    //     b: "b",
    //     c: {
    //       c: "c",
    //       d: {
    //         d: "d",
    //       },
    //     },
    //   },
    // });

    let nonValue = shallowRef({
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
      // //这里只要第一层的数据不该界面就不会更新。
      // // nonValue.a = 1;
      // nonValue.b.b = 2;
      // nonValue.b.c.c = 3;
      // nonValue.b.c.d.d = 4;
      // console.log(nonValue);
      // console.log(nonValue.b);
      // console.log(nonValue.b.c);
      // console.log(nonValue.b.c.d);

      //这里只有.value的值发生变化的时候他才会去更新视图,虽然这里数据发生了变化，但是并不会改变视图
      // nonValue.value.a = 1;
      // nonValue.value.b.b = 2;
      // nonValue.value.b.c.c = 3;
      // nonValue.value.b.c.d.d = 4;

      //改变.value的值来更新页面
      // nonValue.value = {
      //   a: "1",
      //   b: {
      //     b: "2",
      //     c: {
      //       c: "3",
      //       d: {
      //         d: "4",
      //       },
      //     },
      //   },
      // };
      console.log(nonValue);
      console.log(nonValue.value.b);
      console.log(nonValue.value.b.c);
      console.log(nonValue.value.b.c.d);

      //如果我想强制更新视图，不是通过改变.value的值，我们就需要使用triggerRef()方法来实现。参数是shallowRef创建出来数据。
      nonValue.value.b.c.d.d = "4";
      triggerRef(nonValue);
    };
    return {
      nonValue,
      myFn,
    };
  },
};
</script>

<style>
</style>