<template lang="html">
  <v-app-bar
   v-scroll="onscrollElevation"
  app
  color="secondary"
  :elevation="elevation"
  id="bar"
  >
  <div class="d-flex align-center ">
    <v-img
    alt="Lactodouce Logo"
    class="shrink"
    contain
    src="@/assets/img/logo_img.png"
    transition="scale-transition"
    width="50"
    />
    <v-img
    alt="Lactodouce"
    class="shrink mt-1 ml-2 hidden-sm-and-down"
    contain
    min-width="100"
    src="@/assets/img/logo_text.png"
    title="Retour à l'accueil"
    />
  </div>


  <router-link :key="index" v-for="(button, index) in menu.buttons" :to="{ name: button.route}">
    <v-btn
      v-if="button.display"
      href=""
      target="_blank"
      text
      color="accent"
    >
    <v-icon>{{ button.mdi }}</v-icon>
    <span class="mr-2">{{ button.title }}</span>
  </v-btn>
  </router-link>
  <v-spacer></v-spacer>
  <v-menu offset-y>
  <template v-slot:activator="{on, attrs}">
    <v-btn
      color="primary"
      small
      title="Connexion/Deconnexion"
      fab
      v-bind="attrs"
      v-on="on"
      >
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </template>
  <v-list>
    <v-list-item>
      <v-list-item-title>
        <router-link :to="{ name: 'SignIn'}">Se connecter</router-link>
      </v-list-item-title>
      <v-list-item-title>
        <a href="#" @click.prevent="signOut">Se déconnecter</a>
      </v-list-item-title>
      <v-list-item-title>
        Bonjour
      </v-list-item-title>
  </v-list-item>
</v-list>
</v-menu>
</v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    menu: Object,
  },
  data() {
    return {
      elevation: 0,

    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    })
  },
  methods: {
    onscrollElevation() {
      if(window.scrollY === 0) {
        this.elevation = 0
      } else {
        this.elevation = 3;
        (window.scrollY > 300) ? this.menu.lacto = true: this.menu.lacto = false;
      }
    },
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),

    async signOut () {
      await this.signOutAction()
      console.log('coucou');
      this.$router.replace({ name: 'Accueil' })
    }

  },
}
</script>

<style lang="css" scoped>
</style>
