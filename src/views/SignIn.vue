<template>
  <v-main>
    <menu-main :menu="menuLogin"></menu-main>

    <v-container grid-list-xs,sm,md,lg,xl>
      <v-row class="justify-center mt-5">
        <v-col md=10 lg=6>
      <v-card >
        <v-form

          @submit.prevent="submit"
        >
          <v-card-title primary-title class="d-block text-truncate">
            Identifiez-vous pour accéder à votre espace personnel
          </v-card-title>
          <v-card-text>

            <v-text-field
              v-model="form.email"
              hint="Saisissez votre email"
              color="accent"
              label="Email"
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              autocomplete="current-password"
              :value="form.password"
              v-model="form.password"
              label="Mot de passe"
              hint="Saisissez votre mot de passe"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              color="accent"
              :rules="passwordRules"
            ></v-text-field>

            <p v-if="error[0]">{{error[0]}}</p>
          </v-card-text>
          <v-card-actions>
            <btn-submit></btn-submit>
            <v-btn color="error" @click="reset">Annuler</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
    </v-container>
  </v-main>
</template>

<script>

  import BtnSubmit from "@/components/buttons/BtnSubmit.vue";
  import MenuMain from "@/views/MenuMain.vue";
  import Menu from "@/assets/files/menus/menuGeneral.json";
  import { mapActions } from 'vuex'

  export default {
    name: 'SignIn',
    components: {
      'btn-submit': BtnSubmit,
      'menu-main': MenuMain,
    },
    data () {
     return {
       valid: true,
       value: true,
       passwordRules: [
         v => !!v || "Le mot de passe est requis",
         v => (v && v.length > 6) || "Le mot de passe doit compter au moins 6 caractères",
       ],
       emailRules: [
         v => !!v || "L'email est requis",
         v => /.+@.+\..+/.test(v) || "Il faut un email valide",
       ],
       form: {
         email: '',
         password: ''
       },
       error: [],
       menu: Menu,
       }
     },
     computed: {
       menuLogin: function () {
         let loginMenu = this.menu;

         return loginMenu;
       }
     },
     methods: {
       ...mapActions({
         signIn: 'auth/signIn'
       }),

       async submit () {
         await this.signIn(this.form)
         this.$router.replace({ name: 'Accueil' })
       },

       reset() {

       }
     }
   }
</script>
