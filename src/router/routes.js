import Home from './views/Home.vue'

export default [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   path: "/",
    //   name: "main",
    //   components: {
    //     default: MainView,
    //     "header-top": LoginBar
    //   },
    //   meta: {
    //     title: `${process.env.VUE_APP_DOMAIN_TITLE} | Página Inicial`
    //   }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
]