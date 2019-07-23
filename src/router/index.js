import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/main/MainPage'
import Movie from '@/components/movieDetail/Movie'
import MovieList from '@/components/movieLists/MovieList'

import SearchResult from '@/components/search/SearchResult'

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
    },
    {
      path: '/movie_list/:status',
      name: 'movie_list',
      component: MovieList
    },
    {
      path: '/search',
      name: 'search_result',
      component: SearchResult
    }
  ]
})
