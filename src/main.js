import {createApp} from 'vue'
import router from './routers'
import store from './vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
