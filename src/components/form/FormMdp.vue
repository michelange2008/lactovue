<template lang="html">
  <v-text-field
    v-model="password"
    type=false
    hint="Saisissez votre mot de passe"
    clearable
    color="accent"
    label="Mot de passe"
    name="password"
    :rules="passwordRules"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordRules: [
        v => !!v || "Le mot de passe est requis",
        v => (v && v.length > 6) || "Le mot de passe doit compter au moins 6 caractères",
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
