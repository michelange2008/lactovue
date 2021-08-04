<template lang="html">
  <btn-perso :text="btnSubmit.text" :type="btnSubmit.type" :color="btnSubmit.color"></btn-perso>
</template>

<script>
import BtnPerso from "./BtnPerso.vue"

export default {
  components: {
    'btn-perso': BtnPerso,
  },
  data() {
    return {
      btnSubmit: {
        text: "Annuler",
        type: "reset",
        color: "secondary"
        
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>
