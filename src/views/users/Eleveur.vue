<template lang="html">
  <v-main>
    <menu-main :menu="menu"></menu-main>
    <v-btn color="error" @click="del">
      <v-icon class="mx-1">mdi-delete</v-icon>Suppr
    </v-btn>
</v-main>
</template>

<script>
import MenuMain from "@/views/MenuMain.vue"

export default {
  components: {
    "menu-main": MenuMain,
  },
  data() {
    return {
      menu: {
        lacto: true,
        connexion: false,
        accueil: true,
        users:true,
      }
    }
  },
  methods: {
    del() {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
