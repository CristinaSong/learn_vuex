// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import vuex from './vuex.vue'

new Vue({
    el:'#app',
    store,
    render:xx=>xx(vuex)
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

