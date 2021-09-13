import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import components
import BarangIndex from './components/barang/Index'
import BarangCreate from './components/barang/Create'
import BarangEdit from './components/barang/Edit'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'barang',
      component: BarangIndex
    },
    {
      path: '/create',
      name: 'create',
      component: BarangCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: BarangEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')