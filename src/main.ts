import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue3Storage, { StorageType } from "vue3-storage";


import './assets/main.css'
import './assets/js/jquery.min.js'
import './assets/js/jquery.easing.1.3.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.waypoints.min.js'
import './assets/js/jquery.flexslider.2.7.2-min.js'
import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/magnific-popup-options.js'
import './assets/js/jquery.countTo.js'
import './assets/js/main.js'

const pinia = createPinia()
const app = createApp(App)
axios.defaults.baseURL = "http://localhost:3000"
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';


app.use(createPinia())
app.use(Vue3Storage, { namespace: "pro_", storage: StorageType.Local })
// app.use(VueAxios, axios)
// app.use(VueAxios)
app.use(VueAxios, axios)
app.use(router)
app.use(pinia)
app.mount('#app')
