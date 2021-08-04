<template lang="html">
  <v-text-field
    hint="Saisissez votre email"
    clearable
    color="accent"
    label="Email"
    name="email"
    :rules="emailRules"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailRules: [
        v => !!v || "L'email est requis",
        v => /.+@.+\..+/.test(v) || "Il faut un email valide",
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
