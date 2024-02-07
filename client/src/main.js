import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'

import "primevue/resources/themes/lara-dark-blue/theme.css"  // Theme
import "primevue/resources/primevue.min.css"                // Core CSS
import "primeicons/primeicons.css"                          // Icons
import "primeflex/primeflex.min.css"                        // Flex

import Card from "primevue/card"
import Button from "primevue/button"
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })

app.component("Card", Card)
app.component("Button", Button)
app.component("InputText", InputText)
app.component("Checkbox", Checkbox)
app.component("DataTable", DataTable)
app.component("Divider", Divider)

app.mount('#app')
