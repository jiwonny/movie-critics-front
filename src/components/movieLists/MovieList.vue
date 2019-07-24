<template>
    <div id="movie-list-page">
        <div class="container">
            <div class="row">
                <div class="movie-list-tabbox row col-12 col-lg-3 col-xl-3 col-md-3 col-sm-12">
                    <div class="movie-list-tabtitle">영화 목록</div>
                    <div class="movie-list-tab col col-lg-12 col-xl-12 col-md-12 col-sm">
                        <router-link class="movie-tab1" @click.native="changeData('current')" :to="{name: 'movie_list', params: {status : 'current'}}">현재 상영작</router-link>
                    </div>
                    <div class="movie-list-hr"/>
                    <div class="movie-list-tab col col-lg-12 col-xl-12 col-md-12 col-sm ">
                        <router-link class="movie-tab2" @click.native="changeData('pre')" :to="{name: 'movie_list', params: {status : 'pre'}}">개봉 예정작</router-link>
                    </div>
                    <div class="movie-list-hr"/>
                    <div class="movie-list-tab col col-lg-12 col-xl-12 col-md-12 col-sm">
                        <router-link class="movie-tab3"  @click.native="changeData('extra')" :to="{name: 'movie_list', params: {status : 'extra'}}">기타 영화목록</router-link>
                    </div>
                    <div class="movie-list-hr"/>
                </div>
                <div class="movie-list-content col-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
                    <div class="movie-list-title"><span style="color: rgb(248, 0, 54); font-size: 1.7rem;">ㅣ</span>&nbsp;&nbsp;{{listPageTitle}}</div>
                    <!-- <div class="movie-list-sortby">순서 정렬 나중에</div> -->

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

                    <div class="pagination-box d-flex justify-content-center"><v-pagination v-model="currentPage" :page-count="page_count"></v-pagination></div>
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
        }else if(this.$route.params.status == "extra"){
            this.$http.get('http://143.248.39.45:3000/movie_order_score').then(response => {
                this.movies = null
                this.movies = response.data
                this.status = 'extra'
                this.listPageTitle = "기타 영화목록"
            })
           
        }
    },
    mounted(){
        if(this.$route.params.status === 'current'){
            $('.movie-tab1').addClass('active-tab')
            $('.movie-tab2').removeClass('active-tab')
            $('.movie-tab3').removeClass('active-tab')
        }else if(this.$route.params.status === 'pre'){
            $('.movie-tab1').removeClass('active-tab')
            $('.movie-tab2').addClass('active-tab')
            $('.movie-tab3').removeClass('active-tab')
        }else if(this.$route.params.status === 'extra'){
            $('.movie-tab1').removeClass('active-tab')
            $('.movie-tab2').removeClass('active-tab')
            $('.movie-tab3').addClass('active-tab')
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
            status : null,
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
                    $('.movie-tab1').addClass('active-tab')
                    $('.movie-tab2').removeClass('active-tab')
                    $('.movie-tab3').removeClass('active-tab')
                    window.scrollTo(0,0)
                })
            }else if(this.$route.params.status == "pre"){
                this.$http.get('http://143.248.39.45:3000/pre_movie').then(response => {
                    this.movies = response.data
                    this.currentPage = 1
                    this.status = 'pre'
                    this.listPageTitle = "개봉 예정작"
                    this.page_count = Math.ceil(response.data.length / 10);
                    $('.movie-tab1').removeClass('active-tab')
                    $('.movie-tab2').addClass('active-tab')
                    $('.movie-tab3').removeClass('active-tab')
                    window.scrollTo(0,0)
                })
            }else if(this.$route.params.status == "extra"){
                this.$http.get('http://143.248.39.45:3000/movie_order_score').then(response => {
                    this.movies = null
                    this.movies = response.data
                    this.status = 'extra'
                    this.listPageTitle = "기타 영화목록"
                    $('.movie-tab1').removeClass('active-tab')
                    $('.movie-tab2').removeClass('active-tab')
                    $('.movie-tab3').addClass('active-tab')
                    window.scrollTo(0,0)
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
            window.scrollTo(0,0)
            return this.movies.slice(start, end)
        }
    }
}


</script>

<style>
    @font-face { font-family: 'GoyangIlsan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff'); font-weight: normal; font-style: normal; }
    
    #movie-list-page{
        padding-top: 4rem;
        padding-bottom: 4rem;
        font-family: 'GoyangIlsan', normal;
        background-color: rgb(240, 240, 240);
    }

    .active-tab{
        color: rgb(248, 0, 54) !important;
        font-weight: bold;
    }

    .pagination-link--active{
       font-weight: bold;
       color: rgb(248, 0, 54);
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
        height: 15rem;
        margin-top: 4.8rem;
    }

    .movie-list-tabtitle{
        width: 80%;
        padding: 1rem;
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
        font-weight: bold;
        border-bottom:  rgb(248, 0, 54) solid 4px;
    }

    .movie-list-tab{
        cursor: pointer;
        padding: 1rem;
    }

    .movie-list-hr{
        width: 80%;
        height: 1.3px !important;
        background-color: gray;
    }

    .movie-list-tab a{
        color: black;
    }

    .movie-list-tab a:hover{
        text-decoration: none;
        color: rgb(248, 0, 54);
        font-weight: bold;
    }

    .movie-list-content{
        margin-top: 2rem;
    }
    .movie-list-title{
        font-size: 1.5rem;
        font-weight: bold;
    }

    .movie-card-lists{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .pagination-box{
        margin-top: 3rem;
        font-size: 1.3rem;
    }

    
    /* image 크기 조정 */
    @media only screen and (min-width: 500px) and (max-width:767px){
        .movie-list-tabtitle{
            display: none;
        }
        .movie-list-tabbox{
            height: 2rem;
            margin-top: 2rem;
        }
    }

    @media only screen and (max-width:500px){
        .movie-list-tabtitle{
            display: none;
        }
       
        .movie-list-tabbox{
            height: 2rem;
            margin-top: 2rem;
        }

    }
    @media only screen and (min-width: 751px) and (max-width: 1280px){
       
    }

</style>