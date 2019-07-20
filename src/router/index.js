import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/main/MainPage'
import Movie from '@/components/movieDetail/Movie'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/movie/:movie_id',
      name:'movie',
      component: Movie
    }
  ]
})
