<template>
  <div class="slot-test">
    <!-- <template v-for="item in names" :key="item">
      <slot :item="item"></slot>
    </template> -->

    <template v-for="item in 3" :key="item">
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: ['names']
}
</script>
