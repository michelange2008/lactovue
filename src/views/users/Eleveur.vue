<template lang="html">
  <v-main>
    <menu-main :menu="menu"></menu-main>
    <v-row>
      <v-col>
        {{eleveur}}

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="error" @click="del">
          <v-icon class="mx-1">mdi-delete</v-icon>Suppr
        </v-btn>
      </v-col>
    </v-row>
</v-main>
</template>

<script>
import MenuMain from "@/views/MenuMain.vue";
import Menu from "@/assets/files/menus/menuGeneral.json";
import { ELEVEUR_QUERY } from "@/graphql.js";

export default {

  components: {
    "menu-main": MenuMain,
  },
  mounted() {
      this.eleveur_id = this.$route.params.id;
  },
  data() {
    return {
      menu: Menu,
      eleveur_id: '',
      eleveur: '',
    }
  },
  methods: {
    del() {

    }
  },
  apollo: {
    eleveur: {
      query: ELEVEUR_QUERY,
      variables () {
        return {
          id: this.eleveur_id
        }
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>
