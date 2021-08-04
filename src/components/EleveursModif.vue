<template lang="html">
  <v-main>
    <v-container>
      <v-row>
        <v-col>

          <v-alert type="success" :value="alert">
            Vous avez cliqué sur
          </v-alert>
          <form-eleveur :nbItem="nbItem" :eleveurs="eleveurs"></form-eleveur>
          <v-btn fab color="success" dark class="ma-3" @click="plus">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import gql from "graphql-tag";

export default {

  props : {
    alert: Boolean
  },
  data() {
    return {
      nbItem: 2,
      eleveurs: []
    }
  },
  apollo: {
    eleveurs: gql `query {
      eleveurs {
        address_1
        address_2
        cp
        commune
        tel
        lat
        long
        installation
        user {
          name
          email
          role {
            name
          }
        }
      }
    }`
  },
  methods: {
    plus() {
      this.users.push({
        "id": this.users.length + 1,
        "name":"",
        "email":""
      })

    }
  }
}
</script>

<style lang="css" scoped>

</style>
