// import './assets/main.css'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { initializeApp } from 'firebase/app'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
// const firebaseConfig = {
//   apiKey: 'AIzaSyD7NJGNmLmBg3Ex9Svl3PoILAdKMH9m3cs',
//   authDomain: 'lab5032.firebaseapp.com',
//   projectId: 'lab5032',
//   storageBucket: 'lab5032.appspot.com',
//   messagingSenderId: '902525717215',
//   appId: '1:902525717215:web:653b1762198c9b3370776a'
// }
// initializeApp(firebaseConfig)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(router)

app.mount('#app')
