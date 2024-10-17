import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RedirectView from '../views/RedirectView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AdminView from '../views/AdminView.vue'
import AddBookView from '../views/AddBookView.vue'
import UpdateDeleteBookView from '../views/UpdateDeleteBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import GetAllBooksAPI from '../views/GetAllBookAPI.vue'
import { auth } from '../utils/Auth.js'

const { isLoggedIn } = auth()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/redirection',
    name: 'Redirection',
    component: RedirectView
  },
  {
    path: '/fireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/fireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/updateDelete',
    name: 'UpdateDelete',
    component: UpdateDeleteBookView
  },
  {
    path: '/getbookcount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/weatherview',
    name: 'WeatherView',
    component: WeatherView
  },
  {
    path: '/countbookapi',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/getallbooksapi',
    name: 'GetAllBooksAPI',
    component: GetAllBooksAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'About' && isLoggedIn.value !== true) {
    next({ name: 'Redirection' })
  } else {
    next()
  }
})

export default router
