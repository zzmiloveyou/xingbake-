// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/flexble'
import store from './store/index'
import header from './views/home/component/header.vue'
import {DatePicker} from 'element-ui'
Vue.config.productionTip = false
Vue.use(DatePicker);
Vue.use('el-header',header);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
