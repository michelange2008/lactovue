<template lang="html">
  <v-btn
    elevation-3
    class="ma-3"
    :type="type"
    :color="color"


    >{{ text }}</v-btn>
</template>

<script>
export default {
  props: {
    text: String,
    type: String,
    color: String,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
