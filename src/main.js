import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
})
import App from './App.vue'
app.use(vuetify)
app.mount("#app");

