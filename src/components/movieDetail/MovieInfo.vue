<template>
    <div id = "movie-info-component">
        <div class="movie-info-imgbox">
            <img class="movie-info-img" :src="movieDetail.img"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieInfo',
    props: ['movieDetail']
}
</script>

<style>
    #movie-info-component{
        padding: 3rem 2rem 3rem 2rem;
    }

    .movie-info-imgbox{

    }

    .movie-info-img{
        cursor: pointer;
    }

    .movie-info-imgbox:hover{
        
    }
</style>
