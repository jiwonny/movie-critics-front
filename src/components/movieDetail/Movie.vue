<template>
  <div id="movie-detail-page" class="container">
    <div class="movie-detail-body row">
      <movie-info
        class="col-lg-4 col-md-4 col-sm-12"
        v-bind:movieDetail="movieDetail"
        v-bind:nScore="nScore"
      />

      <movie-info-tab 
        class="col-lg-8 col-md-8 col-sm-12"
        v-bind:movieDetail="movieDetail"  
      ></movie-info-tab>
    </div>
  </div>
</template>

<script>
import MovieInfo from './MovieInfo.vue'
import MovieInfoTab from './MovieInfoTab.vue'
export default {
  name: 'MoviePage',
  components : {
    'movie-info' : MovieInfo,
    'movie-info-tab' : MovieInfoTab
  },
  created(){
    console.log("createdquery: "+JSON.stringify(this.$route.params))
    this.$http.get('http://143.248.39.45:3000/movie/'+this.$route.params.movie_id).then(response => {
      console.log(response.data[0])
      this.movieDetail = response.data[0]
      this.nScore = Math.ceil(parseInt(this.movieDetail.naver_score) / 2)
    })
  },
  data () {
    return {
      movieDetail: null,
      nScore: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#movie-detail-page{
  padding-top: 4rem;
}

.movie-detail-body{
  width: 100%;
  margin-left: 0rem;
}

.movie-detail-body div{
 /* border: black 0.5px solid; */
}
</style>
