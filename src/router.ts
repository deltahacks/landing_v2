import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Faq from './components/Faq.vue';
import Backdrop from './views/Backdrop.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'backdrop',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Backdrop.vue'),
    },
    {
      path: '/new/sample',
      name: 'sample',
      component: () => import(/* webpackChunkName: "about" */ './new-components/Sample.vue'),
    },
    {
      path: '/newbackdrop',
      name: 'NewBackdrop',
      component: () => import(/* webpackChunkName: "about" */ './views/NewBackdrop.vue'),
    },
  ],
});
