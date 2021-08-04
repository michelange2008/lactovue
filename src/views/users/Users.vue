<template lang="html">
  <v-main>
    <menu-main :menu="menuUsers"></menu-main>
    <v-row class="mt-3">
      <v-col>
        <eleveurs-table></eleveurs-table>
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <v-col cols="1">
        <v-btn fab title="Ajouter un éleveur" color="primary" dark>
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import MenuMain from "@/views/MenuMain.vue";
import EleveursTable from "@/components/tables/EleveursTable.vue";
import Menu from "@/assets/files/menus/menuGeneral.json";

export default {
  components : {
    "menu-main": MenuMain,
    "eleveurs-table": EleveursTable,
  },
  data()  {
    return {
      menu: Menu
    }
  },
  computed: {
    menuUsers: function () {
      let loginMenu = this.menu;
      loginMenu.buttons.users.display = false;
      return loginMenu;
    }
  },

}
</script>

<style lang="css" scoped>
</style>
