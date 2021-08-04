<template lang="html">

    <v-menu
    right
    bottom
    tile
    offset-y
    >
    <template v-slot:activator="{ on, attrs }">

        <v-btn
        class="mx-1"
        color="primary"
        v-bind="attrs"
        v-on="on"
        >
        {{ name.id }}
      </v-btn>

  </template>

  <v-list v-if="name.sousmenu != null">
    <v-list-item
    v-for="(sousmenu, index) in name.sousmenu"
    :key="sousmenu"
    @click="clic(index)"
    >
    <v-list-item-title>{{ sousmenu }}</v-list-item-title>
  </v-list-item>
</v-list>
</v-menu>

</template>

<script>


export default {
  props: {
    name: Object,
  },
  data() {
    return {
    }
  },
  mounted() {
    // console.log(this.name);
  },
  methods: {
    clic(index) {
      this.$emit('click', index);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
