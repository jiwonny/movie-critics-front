<template>
    <div id="genre-page">
        <genre-category v-on:genre-search="getmoviebygenre"></genre-category>
       
        <div class="container genre-movie-list">
            <random-movie v-if="genreType == null"/>
            <div v-if="genreType != null" class="genre-type-title"><span style="color: rgb(248, 0, 54)">ㅣ</span>&nbsp;&nbsp;&nbsp;{{genreType}}</div>
            <div v-for="(genre_movie, index) in genre_movies" :key="index"><img :src="genre_movie.img"/>{{genre_movie.title}}</div>
            <div v-if = "genreType != null" class="pagination-box d-flex justify-content-center"><v-pagination v-model="currentPage" :page-count="page_count"></v-pagination></div>
            
        </div>
        
    </div>
</template>

<script>
import vPagination from 'vue-plain-pagination'
import GenreCategory from '@/components/genre/GenreCategory'
import RandomMovie from '@/components/genre/RandomMovie'

export default{
    name: 'GenrePage',
    components : {
        vPagination,
        'genre-category' : GenreCategory,
        'random-movie' : RandomMovie  
    },
    data(){
        return{
            genre_movies : null,
            genreType : null,
            currentPage : 1,
            page_count : 10
        }
    },
    methods: {
        getmoviebygenre: function (type){
            this.genreType = type
            this.$http.get('http://143.248.39.45:3000/movie_genre/'+this.genreType).then(response => {
                this.genre_movies = response.data
                // console.log('currents : '+this.currents)
            })
            
        }
    },
    created(){
    }
}

</script>

<style>
    @font-face { font-family: 'GoyangIlsan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff'); font-weight: normal; font-style: normal; }

    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    #genre-page{
       
    }

    .genre-movie-list{
        padding : 1.5rem 2rem 1.5rem 2rem;
    }

    .genre-type-title{
        margin-bottom: 2rem;
        font-weight: bolder;
        font-size: 1.7rem;
        font-family: 'Noto Sans KR', sans-serif;
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

    .pagination-box{
        margin-top: 3rem;
        font-size: 1.3rem;
    }


</style>