// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import vuex from './vuex.vue'
import check from './check.vue'
import ElementUI from 'element-ui'
import 'flex.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
    el:'#app',
    store,
    render:xx=>xx(check),
})

// import App from './App'
// import router from './router'

// // Vue.config.productionTip = true

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

