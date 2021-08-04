<template lang="html">
  <div class="">

    <v-card v-for="(eleveur, index) in eleveurs" :key="index" class="my-3">

      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
              v-model="eleveur.user.name"
              name="name"
              label="Nom"
              @change="btnDis = false"
              :value="eleveur.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
              v-model="eleveur.user.email"
              name="email"
              label="Email"
              :value="eleveur.user.email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3">
              <v-text-field
              v-model="eleveur.address_1"
              name="address_1"
              label="adresse"
              :value="eleveur.address_1"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
              v-model="eleveur.address_2"
              name="address_2"
              label="complément d'adresse"
              :value="eleveur.address_2"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
              v-model="eleveur.cp"
              name="cp"
              label="code postal"
              :value="eleveur.cp"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
              v-model="eleveur.commune"
              name="commune"
              label="commune"
              :value="eleveur.commune"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>

      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" color="success" @click="save()" :disabled="btnDis">Enregistrer</v-btn>
        <v-btn type="submit" color="error" @click="del(index)">Supprimer</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    nbItem: Number,
    eleveurs: Array,
  },
  data() {
    return {
      btnDis: true
    }
  },
  methods: {
    save() {
      console.log('enregistré');
    },
    del(id) {
      this.$delete(this.eleveurs, id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
