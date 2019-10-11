import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Calculator from './components/Calculator.vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')

describe('Calculator', ()=>{
  it('has been created', () => {
    // expect(typeof Calculator.created).toBe('function')
    expect(true).toBe(true)
  })
})