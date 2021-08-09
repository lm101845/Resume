import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home.vue"

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "前端工程师-李明"
    }
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  
})

export default router
