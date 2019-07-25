<template>
    <div id="movie-synopsis-tab">
        <div v-if="movieDetail.synopsis_title == null && movieDetail.synopsis_content == null">해당 영화의 줄거리가 존재하지 않습니다.</div>
        <div class="movie-synopsis-title">{{movieDetail.synopsis_title}}</div>
        <div class="movie-synopsis-content">
            {{movieDetail.synopsis_content}}
        </div>
        <div v-if="movieDetail.shortview != null" class="movie-shortview">Consensus</div>
        <div v-if="movieDetail.shortview != null" style="margin-top: 0.8rem;">
            {{movieDetail.shortview}}
        </div>

        <div class="movie-trailer-title">
            < 예고편 >
        </div>
        <div class="movie_trailer_thumb">
            <img v-on:click="openVideo(movieDetail)" class="button play"/>
            <img v-on:click="openVideo(movieDetail)" class="movie-trailer-thumbnail" :src="movieDetail.trailer_thumbnail"/>

           
            
        </div>
    </div>
   
</template>


<script>
export default {
    name: 'MovieSynopsis',
    props: ['movieDetail'],
    methods: {
        openVideo(movieDetail){
            window.open('about:blank').location.href = movieDetail.trailer_url
        }
    }
}
</script>


<style>
    .movie-shortview {
        margin-top: 3rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .movie_trailer_thumb {
        cursor: pointer;
    }

    .button.play {
        box-sizing: border-box;
        width: 74px;
        height: 74px;
        border-style: solid;
        border-width: 37px 0px 37px 74px;
        border-color: transparent transparent transparent #202020;
        position: absolute;
        margin-top: 7rem;
        margin-left: 11.5rem;
        z-index : 999;
    }

    .movie-trailer-thumbnail{
        z-index: 0;
        margin-top: 2rem;
        opacity: 0.5;
    }

    .movie-trailer-title{
        margin-top: 4rem;
        font-weight: bold;
        font-size: 1.25rem;
    }

    .movie-synopsis-title{
        margin: 0.7rem 0rem 1rem 0rem;
        font-weight: bold;
        font-size: 1.25rem;
    }

    .movie-synopsis-content{
        line-height: 1.65rem;
    }

    @media only screen and (min-width: 500px) and (max-width:750px){
        .movie-synopsis-title{
            margin: 0.7rem 0rem 1rem 0rem;
            font-weight: bold;
            font-size: 1.25rem;
        }

        .movie-synopsis-content{
            line-height: 1.65rem;
        }
    }

    @media only screen and (max-width:500px){
        .movie-synopsis-title{
            margin: 0.7rem 0rem 1rem 0rem;
            font-weight: bold;
            font-size: 1.1rem;
        }

        .movie-synopsis-content{
            line-height: 1.35rem;
        }
    }
</style>
