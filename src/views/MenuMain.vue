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
    v-if="affiche_titre"
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

      <router-link v-if="!authenticated" :to="{ name: 'Login'}">
        <v-btn
          class="mx-2"
          fab
          small
          color="accent"
          title="Se connecter"
        >
          <v-icon>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </router-link>
      <div class="mx-2" v-if="authenticated">
        {{user.name}}
      </div>
      <a v-if="authenticated" href="#" @click.prevent="signOut">
        <v-btn
          fab
          small
          color="secondary"
          title="Se déconnecter"
        >
        <v-icon>mdi-account-off</v-icon>
      </v-btn>
      </a>
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
      affiche_titre: false,
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
        this.affiche_titre = false
      } else {
        this.elevation = 3;
        (window.scrollY > 300) ? this.affiche_titre = true : this.affiche_titre = false;
        (window.scrollY > 300) ? this.menu.lacto = true: this.menu.lacto = false;
      }
    },
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),

    async signOut () {
      await this.signOutAction()
    }

  },
}
</script>

<style lang="css" scoped>
</style>
