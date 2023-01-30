<template>
  <p>{{ refValue }}</p>
</template>

<script>
import { ref, toRaw, reactive } from "vue";
export default {
  name: "ToRaw",
  setup() {
    let refValue = ref({
      name: "zh",
      age: 20,
    });
    let reactiveValue = reactive({
      name: "zh",
      age: 20,
    });

    let originRef = toRaw(refValue.value);
    console.log("origin", originRef);
    console.log("refValue", refValue);
    let originReactive = toRaw(reactiveValue);
    console.log("origin", originReactive);
    console.log("reactiveValue", reactiveValue);

    return {
      refValue,
    };
  },
};
</script>

<style>
</style>