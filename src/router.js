import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Footer from './views/Footer.vue'
import Product_list from './views/product_list.vue'
import Product_view from './views/product_view.vue'
import  Cart from './views/Cart.vue'
import  Cart_list from './views/Cart_list.vue'
import  Cart_count from './views/Cart_count.vue'
import  Checkout from './views/Checkout.vue'
import  Address from './views/Address.vue'
import  Enroll from './views/Enroll.vue'
import  User from './views/User.vue'
import  Register from './views/Register.vue'
import  Go_address from './views/Go_address.vue'
import  Address_list from './views/Address_list.vue'



Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/product_list/:id',
      name: 'product_list',
      component:Product_list
    },
    {
      path: '/product_view/:id',
      name: 'product_view',
      component:Product_view
    },
    {
      path: '/cart',
      name: 'cart',
      component:Cart
    },
    {
      path: '/cart_list',
      name: 'cart_list',
      component:Cart_list
    },
    {
      path: '/cart_count',
      name: 'cart_count',
      component:Cart_count
    },
    {
      path: '/checkout',
      name: 'checkout',
      component:Checkout
    },
    {
      path: '/address',
      name: 'address',
      component:Address
    },
    {
      path: '/enroll',
      name: 'enroll',
      component:Enroll
    },
    {
      path: '/user',
      name: 'user',
      component:User
    },
    {
      path: '/register',
      name: 'register',
      component:Register
    },
    {
      path: '/go_address',
      name: 'go_address',
      component:Go_address
    },
    {
      path: '/address_list',
      name: 'address_list',
      component:Address_list
    },
  ]
})
