<template lang="html">
  <v-main class='accueil'>
    <menu-main :menu="menuAccueil"></menu-main>
    <accueil-parallax></accueil-parallax>
    <accueil-cards></accueil-cards>
</v-main>

</template>

<script>
  import MenuMain from "@/views/MenuMain.vue";
  import AccueilCards from "@/views/accueil/AccueilCards.vue";
  import AccueilParallax from "@/views/accueil/AccueilParallax.vue";
  import Menu from "@/assets/files/menus/menuGeneral.json";

  export default {
    name: 'accueil',
    components: {
      'menu-main': MenuMain,
      'accueil-cards': AccueilCards,
      'accueil-parallax': AccueilParallax,
    },
    data () {
      return {
        menu: Menu,
        btnRetour: true,
      }
    },
    computed: {
      menuAccueil: function () {
        let adaptMenu = this.menu;
        adaptMenu.lacto = false;
        adaptMenu.buttons.accueil.display = false;
        return adaptMenu;
      }
    },
  }
</script>

<style lang="css" scoped>
  .accueil {
    padding-top: 0 !important;
  }
  .ombre {
    text-shadow: 2px 2px 2px #68a6b3;
  }
</style>
