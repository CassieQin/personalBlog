// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VeeValidate from 'vee-validate'

axios.defaults.baseURL = 'https://wd5363823571venqpm.wilddogio.com'
Vue.config.productionTip = false

Vue.use(VeeValidate);
//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = '#' + Math.random().toString(16).slice(2,8);
//   }
// })

//全局过滤器
// Vue.filter('toUpperCase', function (value) {
//   return value.toUpperCase();
// })
// Vue.filter('snippet', function (value) {
//   return value.slice(0,200) + '...';
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
