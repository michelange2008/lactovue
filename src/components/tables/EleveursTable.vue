<template lang="html">
  <v-container fluid>
    <v-row dense>
    <v-col
      class="my-3"
      v-for="(eleveur, index) in eleveurs"
      :key="index"
    >
    <v-card width="374">

      <v-card-title primary-title>
        {{ eleveur.user.name }}
      </v-card-title>

      <v-card-subtitle>
        <span class="light-blue--text text--darken-4">{{eleveur.user.email}}</span>
        <span v-if="eleveur.tel != null"> ({{ eleveur.tel }})</span>
      </v-card-subtitle>

      <v-card-text>
        {{eleveur.address_1}}
        {{eleveur.address_2}}
        {{eleveur.cp}}
        {{eleveur.commune}}
      </v-card-text>

      <v-card-actions>
        <router-link :to="{ name: 'Eleveur', params: {id: eleveur.user.id} }">
          <v-btn color="primary">
            <v-icon class="mx-1">mdi-eye</v-icon>Voir
          </v-btn>
        </router-link>
      </v-card-actions>

    </v-card>
  </v-col>
</v-row>
</v-container>

</template>

<script>
import gql from "graphql-tag";

export default {

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
        troupeau {
          effectif
          races {
            name
            image{
              url
            }
          }
        }
      }
    }`
  },
  data() {
    return {
      eleveurs: [],
      show_btn: false,
      btnDis:[],
    }
  },
  methods: {
  },
}
</script>

<style lang="css" scoped>
</style>
