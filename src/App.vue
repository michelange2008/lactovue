<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

 export default {
   computed: {
     ...mapGetters({
       authenticated: 'auth/authenticated',
       user: 'auth/user',
     })
   },

   methods: {
     ...mapActions({
       signOutAction: 'auth/signOut'
     }),

     async signOut () {
       await this.signOutAction()


       this.$router.replace({ name: 'home' })
     }
   }
 }
</script>
