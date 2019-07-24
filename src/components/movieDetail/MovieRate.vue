<template>
    <div id="movie-info-rate">
        <div v-if="naver_c_rates.length == 0 && naver_r_rates.length == 0 && meta_rates.length == 0 && tomato_rates.length == 0">해당 영화의 평가가 존재하지 않습니다.</div>
        <movie-rate-card
            v-for="(naver_r_rate, index) in naver_r_rates"
            :key = "index"
            v-bind:refer = "'naver'"
            v-bind:rate = "naver_r_rate">
        ></movie-rate-card>

        <movie-rate-card
            v-for="(naver_c_rate, index) in naver_c_rates"
            :key = "index"
            v-bind:refer = "'naver'"
            v-bind:rate = "naver_c_rate">
        ></movie-rate-card>

        <movie-rate-card
            v-for="(meta_rate, index) in meta_rates"
            :key = "index"
            v-bind:refer = "'meta'"
            v-bind:rate = "meta_rate">
        ></movie-rate-card>
            
        <movie-rate-card
            v-for="(tomato_rate, index) in tomato_rates"
            :key = "index"
            v-bind:refer = "'tomato'"
            v-bind:rate = "tomato_rate">
        ></movie-rate-card>
    </div>
   
</template>


<script>
import MovieRateCard from '@/components/movieDetail/MovieRateCard'
export default {
    name: 'MovieRate',
    props: ['movieDetail'],
    components: {
        'movie-rate-card' : MovieRateCard
    },
    created(){
        this.$http.get('http://143.248.39.45:3000/movie_report_naver/'+this.$route.params.movie_id)
        .then(response => {
            this.naver_r_rates = response.data
        })
        this.$http.get('http://143.248.39.45:3000/movie_critic_naver/'+this.$route.params.movie_id)
        .then(response => {
            this.naver_c_rates = response.data
        })

        this.$http.get('http://143.248.39.45:3000/movie_critic_meta/'+this.$route.params.movie_id)
        .then(response => {
            this.meta_rates = response.data
        })

        this.$http.get('http://143.248.39.45:3000/movie_critic_tomato/'+this.$route.params.movie_id)
        .then(response => {
            this.tomato_rates = response.data
        })
    },
    data(){
        return {
            naver_r_rates : null,
            naver_c_rates : null,
            tomato_rates : null,
            meta_rates : null
        }
    },
    methods: {
        
    }
}
</script>

<style>
    #movie-info-rate{
        padding-right: 1.6rem;
        height: 43rem;
        overflow-y: scroll;
        /* overflow-y : scroll; */
    }


    @media only screen and (max-width:760px){
        #movie-info-rate{
            height: inherit;
            overflow-y :unset;
        }
    }


</style>

