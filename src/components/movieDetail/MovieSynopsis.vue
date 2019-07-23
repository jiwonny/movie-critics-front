<template>
    <div id="movie-synopsis-tab">
        <div class="movie-synopsis-title">{{movieDetail.synopsis_title}}</div>
        <div class="movie-synopsis-content">
            {{movieDetail.synopsis_content}}
        </div>
    </div>
   
</template>


<script>
export default {
    name: 'MovieSynopsis',
    props: ['movieDetail']
}
</script>


<style>
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
