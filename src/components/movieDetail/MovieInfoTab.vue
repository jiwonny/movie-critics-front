<template>
    <div id="movie-info-tabs">
        <div class="d-flex">
            <div v-on:click="changeTab(1)" class="movie-info-tabbtn">기자*평론가 평점</div>
            <div v-on:click="changeTab(2)" class="movie-info-tabbtn">줄거리</div>
           
        </div>
        <movie-rate v-if="tab_seen1" v-bind:movieDetail="movieDetail"/>
        <movie-synopsis v-if="tab_seen2" v-bind:movieDetail="movieDetail"/>
    </div>
</template>

<script>
import MovieSynopsis from './MovieSynopsis'
import MovieRate from './MovieRate'
export default {
    name: 'MovieInfoTab',
    props : ['movieDetail'],
    components : {
        'movie-synopsis' : MovieSynopsis,
        'movie-rate' : MovieRate
    },
    data(){
        return{
            tab_seen1 : true,
            tab_seen2 : false
        }
    },
    methods : {
        changeTab(num){
            if(num == 1){
                this.tab_seen1 = true;
                this.tab_seen2 = false;
            }else {
                this.tab_seen1 = false;
                this.tab_seen2 = true;
            }
            
        }
    }
}
</script>


<style>
    #movie-info-tabs{
        padding-top: 2rem;
        font-family: 'GoyangIlsan', normal;
    }

    .movie-info-tabbtn{
        padding: 0.5rem;

        margin-right: 2rem;
        cursor: pointer;
        border: rgb(34, 34, 54) solid 2px;
        border-radius: 10px; 
    }

</style>
