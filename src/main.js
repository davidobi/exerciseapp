import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import About from './components/About.vue'
import Dashboard from './components/Dashboard.vue'
import Profile from './components/Profile.vue'
import Exercise from './components/Exercise.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/signin', component: Signin },
  { path: '/about', component: About },
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: Profile },
  { path: '/exercise', component: Exercise }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
