<template>
    <div id = "movie-info-component">
        <div class="row">
            <div class="movie-info-imgbox col-lg-12 col-md-12 col-sm-5 col-5">
                <img class="movie-info-img" :src="movieDetail.img"/>
            </div>

            <div class="movie-info-textbox col-lg-12  col-md-12 col-sm-7 col-7">
                <div class="movie-info-title">{{movieDetail.title.split("_")[0]}}</div>
                <div class="movie-info-extra d-flex"><div class="movie-info-icon"><i class="far fa-calendar-alt"></i></div><div>{{movieDetail.date}}</div></div>
                <div class="movie-info-extra d-flex"><div class="movie-info-stitle">감독</div><div class="movie-info-dtext">{{movieDetail.directors}}</div></div>
                <div class="movie-info-extra d-flex"><div class="movie-info-stitle">출연</div><div class="movie-info-dtext">{{movieDetail.casts}}</div></div>
                <div class="movie-info-extra d-flex"><div class="movie-info-stitle">장르</div><div class="movie-info-dtext">{{movieDetail.genres}}</div></div>

                <div class="movie-info-scores">
                    <div class="movie-info-extra-score d-flex">
                        <div class="movie-info-stitle"><img class="movie-score-logo" src="/static/naver.ico"/></div>
                        <div v-if="movieDetail.naver_score == null" class="movie-info-scorenum-null">Coming Soon</div>
                        <div v-else class="movie-info-scorenum">{{movieDetail.naver_score}}</div>
                        <div v-if="movieDetail.naver_score != null" class="movie-info-stars">
                            <span v-for="(n, index) in nScore" :key=index class="fa fa-star star-checked"/>
                            <span v-for="(n, index) in (5-nScore)" :key=index class="fa fa-star"></span>
                        </div>
                    </div>

                    <div class="movie-info-extra-score d-flex">
                        <div class="movie-info-stitle"><img class="movie-score-logo" src="/static/metacritic.jpg"/></div>
                        <div v-if="movieDetail.metascore == null || movieDetail.metascore == 'tbd'" class="movie-info-scorenum-null">Coming Soon</div>
                        <div v-else class="movie-info-scorenum">{{movieDetail.metascore}}</div>
                    </div>

                    <div class="movie-info-extra-score d-flex">
                        <div class="movie-info-stitle"><img class="movie-score-logo" src="/static/rt.png"/></div>
                        <div v-if="movieDetail.rottentomato == null" class="movie-info-scorenum-null">Coming Soon</div>
                        <div v-else class="movie-info-scorenum">{{movieDetail.rottentomato}}</div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>
export default {
    name: 'MovieInfo',
    props: ['movieDetail', 'nScore'],
    data(){
        return{
            // naver_score :
            //Math.ceil(parseInt(this.movieDetail.naver_score) / 2)
        }
    }
}
</script>

<style>
    @font-face { font-family: 'GoyangIlsan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'S-CoreDream-8Heavy'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff') format('woff'); font-weight: normal; font-style: normal; }
    #movie-info-component{
        padding-top: 2rem;
        
    }

    .movie-info-imgbox{
        /* width: 100%;
        display: flex;
        justify-content: center; */
    }

    .movie-info-img{
        cursor: pointer;
        width: 15.3rem;
        height: 20rem;
    }

    .movie-info-imgbox:hover{
        
    }

    .movie-info-textbox{
        margin-top: 2rem;
        font-family: 'GoyangIlsan', normal;
    }


    .movie-info-title{
        font-size: 1.7rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .movie-info-extra{
        margin-bottom: 0.5rem;
    }

    .movie-info-extra-score{
        margin-bottom: 1rem;
    }

    .movie-info-stitle,
    .movie-info-icon{
        width: 2.9rem;
        font-weight: bold;
    }

    .movie-info-dtext{
        width: 76%;
        word-break: break-all;
    }

    .movie-info-scores{
        width: 90%;
        height: 5rem;
        border-top: solid rgb(168, 168, 168) 0.2px;
        margin-top: 2rem;
        padding-top: 2rem;
    }

    .movie-score-logo{
        width: 1.6rem;
        height: 1.6rem;
    }

    .movie-info-scorenum{
        font-family: 'S-CoreDream-8Heavy', normal;
        font-size: 1.25rem;
        font-weight: bolder;
    }

    .movie-info-scorenum-null{
        color: gray;
        font-size: 1.1rem;
        font-weight: bold;
    }

    .star-checked{
        color: rgb(255, 217, 0);
    }


    .movie-info-stars{
        margin-left: 0.7rem;
    }

    .movie-info-stars span{
        position: relative;
        top: 30%;
        -webkit-transform: translateY(-30%);
        -ms-transform: translateY(-30%);
        transform: translateY(-30%);
    }

    /* image 크기 조정 */
    @media only screen and (min-width: 500px) and (max-width:750px){
        .movie-info-img{
            width: 8rem;
            height: 10rem;
        }

        .movie-info-textbox{
            margin-top: 0rem;
        }

        .movie-info-title{
            font-size: 1.1rem;
        }
        
        .movie-info-extra-score,
        .movie-info-extra{
            font-size: 0.9rem;
        }



        .movie-score-logo{
            width: 1.2rem;
            height: 1.2rem;
        }

        .movie-info-scorenum{
            font-size: 1rem;
        }

        .movie-info-scores{
            width: 95%;
        }

        .movie-info-stitle,
        .movie-info-icon{
            width: 2rem;
        }

        
        .movie-info-stars{
            margin-left: 0.4rem;
        }
    }

    @media only screen and (max-width:500px){
        .movie-info-img{
            width: 6.5rem;
            height: 8.5rem;
        }

        .movie-info-textbox{
            margin-top: 0rem;
        }

        .movie-info-title{
            font-size: 0.9rem;
        }
        
        .movie-info-extra-score,
        .movie-info-extra{
            font-size: 0.7rem;
        }
        
        .movie-score-logo{
            width: 0.9rem;
            height: 0.9rem;
        }

        .movie-info-scorenum{
            font-size: 0.8rem;
        }

        .movie-info-scores{
            width: 97%;
        }

        .movie-info-stitle,
        .movie-info-icon{
            width: 1.65rem;
        }

        .movie-info-stars{
            margin-left: 0.4rem;
        }

    }
    @media only screen and (min-width: 751px) and (max-width: 1280px){
        .movie-info-img{
            width: 13rem;
            height: 16rem;
        }

        
        .movie-info-scores{
            width: 98.5%;
        }
    }


</style>
