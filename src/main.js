// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import axios from 'axios'
// import firebase from 'firebase'

// // full page import
// // import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// // import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions햣 
// import VueFullPage from 'vue-fullpage.js'

// Vue.use(VueFullPage);

// Vue.prototype.$http = axios
// Vue.config.productionTip = false

// var firebaseConfig = {
//   apiKey: 'AIzaSyAuUjDd-92pVEeN3N2fN6kGjGxV5eQnU_A',
//   authDomain: 'movie-project-6490f.firebaseapp.com',
//   databaseURL: 'https://movie-project-6490f.firebaseio.com',
//   projectId: 'movie-project-6490f',
//   storageBucket: '',
//   messagingSenderId: '614883169646',
//   appId: '1:614883169646:web:bf70238370144ab0'
// }
// firebase.initializeApp(firebaseConfig);

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   render: h=> h(App)
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import firebase from 'firebase'

// full page import
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions햣 
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

Vue.prototype.$http = axios
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyAuUjDd-92pVEeN3N2fN6kGjGxV5eQnU_A',
  authDomain: 'movie-project-6490f.firebaseapp.com',
  databaseURL: 'https://movie-project-6490f.firebaseio.com',
  projectId: 'movie-project-6490f',
  storageBucket: '',
  messagingSenderId: '614883169646',
  appId: '1:614883169646:web:bf70238370144ab0'
}

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h=> h(App)
})