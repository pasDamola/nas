import Vue from 'vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import AppNavbar from '@/components/base/AppNavbar.vue'
import AppFooter from '@/components/base/AppFooter.vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

const components = {
  AppNavbar,
  AppFooter
}

Object.entries(components).forEach(([key, value]) => {
  Vue.component(key, value)
})

Vue.use(BootstrapVueIcons)
