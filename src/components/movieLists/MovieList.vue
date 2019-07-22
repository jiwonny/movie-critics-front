<template>
    <div id="movie-list-page">
        <div class="container">
            <div class="row">
                <div class="movie-list-tabbox row col-12 col-lg-3 col-xl-3 col-md-3 col-sm-12">
                   
                        <router-link  @click.native="changeData('current')" :to="{name: 'movie_list', params: {status : 'current'}}">
                             <div class="col col-lg-12 col-xl-12 col-md-12 col-sm">현재 상영작</div>
                        </router-link>
                    
                    <div class="col col-lg-12 col-xl-12 col-md-12 col-sm">
                        <router-link @click.native="changeData('pre')" :to="{name: 'movie_list', params: {status : 'pre'}}">
                            개봉 예정작
                        </router-link>
                    </div>
                    <div class="col col-lg-12 col-xl-12 col-md-12 col-sm">기타 영화 목록</div>
                </div>
                <div class="movie-list-content col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
                    <div class="movie-list-title">{{listPageTitle}}</div>
                    <div class="movie-list-sortby">순서 정렬 나중에</div>

                    <!-- <div v-for = "(current, index) in currents" :key = "index">{{current.title}}</div> -->
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
            </div>
            
           
        </div>
       
    </div>
   
</template>

<script>
import vPagination from 'vue-plain-pagination'
import MovieCardInList from '@/components/movieLists/MovieCardInList.vue'
export default {
    name: 'MovieList',
    created(){
        if(this.$route.params.status == "current"){
            this.$http.get('http://143.248.39.45:3000/current_movie').then(response => {
                this.movies = null
                this.movies = response.data
                this.status = 'current'
                this.listPageTitle = "현재 상영작"
                this.page_count = Math.ceil(response.data.length / 10);
            })
        }else if(this.$route.params.status == "pre"){
            this.$http.get('http://143.248.39.45:3000/pre_movie').then(response => {
                this.movies = null
                this.movies = response.data
                this.status = 'pre'
                this.listPageTitle = "개봉 예정작"
                this.page_count = Math.ceil(response.data.length / 10);
            })
        }
       
    },
    components : {
        vPagination,
        'movie-card-in-list' : MovieCardInList
    },
    data(){
        return{
            movies : null,
            currentPage : 1,
            page_count : 1,
            status : 'current',
            listPageTitle : "현재 상영작"
        }
    },
    methods : {
        changeData(status){               
            if(this.$route.params.status == "current"){
                this.$http.get('http://143.248.39.45:3000/current_movie').then(response => {
                    this.movies = response.data
                    this.currentPage = 1
                    this.status = 'current'
                     this.listPageTitle = "현재 상영작"
                    this.page_count = Math.ceil(response.data.length / 10);
                })
            }else if(this.$route.params.status == "pre"){
                this.$http.get('http://143.248.39.45:3000/pre_movie').then(response => {
                    this.movies = response.data
                    this.currentPage = 1
                    this.status = 'pre'
                    this.listPageTitle = "개봉 예정작"
                    this.page_count = Math.ceil(response.data.length / 10);
                })
            }
        }
      
    },
    computed: {
          paginatedData(){
            const start = (this.currentPage-1) * 10;
            const end = start + 10;
            if( this.movies == null ){
                return null;
            }
            return this.movies.slice(start, end)
        }
    }
}
</script>

<style>
    @font-face { font-family: 'GoyangIlsan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff'); font-weight: normal; font-style: normal; }
    #movie-list-page{
        padding-top: 4rem;
        font-family: 'GoyangIlsan', normal;
        background-color: rgb(240, 240, 240);
        
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

    .movie-list-tabbox{
        margin-top: 2rem;
    }

    .movie-list-tabbox div{
        cursor: pointer;
    }

    .movie-list-content{
        margin-top: 2rem;
    }
    .movie-list-title{
       
        font-size: 1.3rem;
        font-weight: bold;
    }

    .movie-card-lists{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
</style>