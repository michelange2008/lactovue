<template lang="html">
  <v-main>
    <eleveurs-table></eleveurs-table>
  </v-main>
</template>

<script>
import EleveursTable from './tables/EleveursTable';

export default {

  components: {
    'eleveurs-table': EleveursTable,
  },
  props : {
    alert: Boolean
  },
  data() {
    return {

    }
  },

}
</script>

<style lang="css" scoped>

</style>
