<template>
    <div id="current-movies-page" class="container">
        <div class="current-page-title">현재 상영작 목록</div>

        <div class="movie-card-lists">
            <movie-card-in-list
                v-for="(movie, index) in paginatedData"
                :key = "movie.movie_id"
                v-bind:movie="movie"
                v-bind:index = "index"
            >
            </movie-card-in-list>
        </div>
        <!-- <div v-for="(p, index) in paginatedData" :key="index">
            
            {{p.title}}
        </div> -->

        <div class="d-flex justify-content-center"><v-pagination v-model="currentPage" :page-count="page_count"></v-pagination></div>
    </div>
   
</template>

<script>
import vPagination from 'vue-plain-pagination'
import MovieCardInList from '@/components/currentMovies/MovieCardInList.vue'
export default {
    name: 'CurrentMoviesPage',
    created(){
        this.$http.get('http://143.248.39.45:3000/current_movie').then(response => {
            this.currents = response.data
            console.log("--length--"+response.data.length)
            this.page_count = Math.ceil(response.data.length / 10);
        })
    },
    components : {
        vPagination,
        'movie-card-in-list' : MovieCardInList
    },
    data(){
        return{
            currents : null,
            currentPage : 1,
            page_count : 1,
        }
    },
    methods : {
        getcurrents_paged(currentPage){
            console.log("clicked"+currentPage)
            alert(currentPage)
        }
    },
    computed: {
        paginatedData(){
            const start = (this.currentPage-1) * 10;
            const end = start + 10;
            if( this.currents == null ){
                return null;
            }
            return this.currents.slice(start, end)
        }
    }
}
</script>

<style>
    @font-face { font-family: 'GoyangIlsan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff'); font-weight: normal; font-style: normal; }
    #current-movies-page{
        padding-top: 4rem;
        font-family: 'GoyangIlsan', normal;
    }
    .pagination-link--active{
        background-color: rgb(90, 90, 90) !important;
        color: white;
        border-radius: 100%;
    }
    .pagination-item button {
        outline: none;
        -webkit-appearance: none;
        background-color: transparent;
        border: none;
    }

    .pagination-item button:hover{
        /* font-weight: bold; */
    }

    .current-page-title{
        margin-top: 2rem;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .movie-card-lists{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
</style>