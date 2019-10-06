import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import 'font-awesome/css/font-awesome.css'
import router from './config/router'
import './config/msgs'
import moment from 'moment'
import money from 'v-money'

Vue.use(moment)
Vue.use(money, { precision: 2 })

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
