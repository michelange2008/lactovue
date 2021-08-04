<template lang="html">

<v-card>
  <v-app-bar color="success lighten-2">
    <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon>
    <v-toolbar-title>
      Lactodouce {{ choix }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="d-none d-sm-flex" v-for="(item, index) in menu" :key="index">
      <my-menu :name="item" v-on:click="choisir($event)"></my-menu>
    </div>

  </v-app-bar>


</v-card>


</template>

<script>
// import { mdiAccountSupervisorCircleOutline } from '@mdi/js';
import MyMenu from './MyMenu.vue';


export default {
  components: {
    'my-menu': MyMenu,
  },
  data() {
    return {
      alerte: false,
      choix: '',
      menu: {
        "Accueil" : {
          "id" : "accueil",
          "route" : "accueil"
        },
        "second" : {
          "id" : "second",
          "sousmenu" : {
            "1": "sousmenu 1",
            "2": "sousmenu 2"
          }
        },
        "troisième" : {
          "id" : "troisième",
          "sousmenu": {
            "1": "element 1",
            "2": "element 2"
          }
        }
      },
    }
  },
  methods: {
    choisir(clic) {
      this.choix = ": " +clic;
      this.alerte = (clic == 1) ? true : false;
      this.$emit('option', [this.alerte, clic]);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
