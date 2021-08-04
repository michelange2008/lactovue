<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>

        <v-row>
          <v-col :key="index" v-for="(presentation, index) in presentations">
              <v-card
              tile
              min-width="300px"
              max-width="480px"
              >
              <v-card-title primary-title class=accent--text>
                {{ presentation.title}}
              </v-card-title>
              <v-card-text>
                Le développement de la mamelle chez les mammifères, destiné à permettre l’allaitement du petit, est la conséquence d’une gestation. De ce fait, depuis l’invention de l’élevage, toute production de lait a nécessité une gestation préalable. Pourtant, des éleveurs de chèvres ont remarqués que certaines femelles non gestantes sont capables de reprendre une lactation quand les reste du troupeau met bas. Ce phénomène est le signe d’une « synchronisation hormonale » qui a déjà été observée dans d’autres situations.
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text color="primary" class="ma-3">
                  en savoir plus
                  <v-icon>mdi-arrow-right-bold</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

      </v-row>
    </v-container>

</template>

<script>
import presentation from "@/assets/files/presentation.json";

export default {
  data() {
    return {
      presentations: presentation,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
