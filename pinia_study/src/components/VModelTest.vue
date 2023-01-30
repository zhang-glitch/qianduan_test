<template>
  <div>
    <input type="checkbox" name="football" v-model="habbies" value="foot" />
    <input type="checkbox" name="basskataball" v-model="habbies" value="bass" />
    <input type="checkbox" name="pp" v-model="habbies" value="pp" />
    <input type="checkbox" name="oo" v-model="habbies" value="oo" />
    <div>{{ habbies }}</div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      habbies: []
    }
  }
})
</script>
<style scoped></style>
