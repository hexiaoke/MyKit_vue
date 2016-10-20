import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import login from './components/login/login'
import register from './components/register/register'
/* eslint-disable no-new */
Vue.use(VueRouter)

const routes = [
  {path: '/login', component: login},
  {path: '/register', component: register},
  {path: '/', redirect: '/login'}
]

const router = new VueRouter({
  base: __dirname,
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
