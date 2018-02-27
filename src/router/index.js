import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/Showblog.vue'], resolve)
    },{
      path: '/Addblog',
      component: resolve => require(['@/components/Addblog.vue'], resolve)
    },{
      path: '/blog/:id',
      component: resolve => require(['@/components/Blogdetail.vue'], resolve)
    }
  ],
  mode:'history'
})
