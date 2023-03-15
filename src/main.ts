import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.css'
import './assets/js/jquery.min.js'
import './assets/js/jquery.easing.1.3.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.waypoints.min.js'
import './assets/js/jquery.flexslider-min.js'
import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/magnific-popup-options.js'
import './assets/js/jquery.countTo.js'
import './assets/js/main.js'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
