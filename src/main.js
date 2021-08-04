import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

// import PortalVue from 'portal-vue';
//
// Vue.use(PortalVue)
// localize('fr', fr);

window.Vue = require('vue').default;

const requireComponent = require.context(
  './components/form',
  true,
  /Form[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Récupérer la configuration du composant
  const componentConfig = requireComponent(fileName)

  // Récupérer le nom du composant en PascalCase
  const componentName = upperFirst(
    camelCase(
      // Retrouver le nom du fichier indépendemment de la profondeur de dossier
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Créer un composant global
  Vue.component(
    componentName,
    // Chercher les options du composant dans `.default`, qui
    // existera si le composant a été exporté avec `export default`,
    // sinon revenez à la racine du module.
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  components: {
  },
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
