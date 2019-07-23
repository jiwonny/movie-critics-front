<template>
    <div class="movie-card-list-router">
        <router-link :to ="{name : 'movie', params: {movie_id: movie.movie_id}}">
        <div class = "movie-card-list row">
        <div class = "movie-card-imgbox col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
            <img  class="movie-card-img" :src = "movie.img"/>
        </div>
        <div class = "movie-card-content col-xl-6 col-lg-6 col-6 col-md-8 col-sm-8 col-8">
            <div class = "movie-card-title">
                {{movie.title.split("_")[0]}}
                <span class="movie-card-crown" v-if="movie.movie_id == 1">
                    <i class="fas fa-crown"></i><i class="fas fa-crown"></i><i class="fas fa-crown"></i>
                </span>
                <span class="movie-card-crown" v-if="movie.movie_id == 2">
                    <i class="fas fa-crown"></i><i class="fas fa-crown"></i>
                </span>
                <span class="movie-card-crown" v-if="movie.movie_id == 3">
                    <i class="fas fa-crown"></i>
                </span>

            </div>
            <div class = "movie-info-extra d-flex"><div class="movie-info-icon"><i class="far fa-calendar-alt"></i></div><div>{{movie.date}}</div></div>
            <div class = "movie-info-extra d-flex"><div class="movie-info-stitle">감독</div><div class="movie-info-dtext">{{movie.directors}}</div></div>
            <div class = "movie-info-extra d-flex"><div class="movie-info-stitle">출연</div><div class="movie-info-dtext">{{movie.casts}}</div></div>
            <div class = "movie-info-extra d-flex"><div class="movie-info-stitle">장르</div><div class="movie-info-dtext">{{movie.genres}}</div></div>
            <div class = "d-flex">
                <div class="movie-info-extra d-flex"><div class="movie-info-stitle">시간</div><div class="movie-info-dtext2">{{movie.time}}</div></div> | &nbsp;&nbsp;&nbsp;
                <div class="movie-info-extra d-flex"><div class="movie-info-stitle">등급</div><div class="movie-info-dtext2">{{movie.rating}}</div></div> 
            </div> 
           
        </div>

        <div class="movie-card-rate col-lg-3 col-xl-3 col-3 col-md-12 col-sm-12 col-12">
            <div>
                <div v-if="movie.naver_score != null" class="movie-card-rate-title">
                    <img class="movie-card-rate-icon" src="/static/naver.ico"/>&nbsp;{{movie.naver_score}}
                </div>
                <div v-if="movie.naver_score == null" class="movie-card-rate-null">
                    <img class="movie-card-rate-icon" src="/static/naver.ico"/>&nbsp;Coming Soon
                </div>
                
                <div v-if="movie.rottentomato != null" class="movie-card-rate-title">
                    <img v-if="parseInt(movie.rottentomato.split('%')[0]) >= 60" class="movie-card-rate-icon" src="/static/tomato.jpg"/>
                    <img v-if="parseInt(movie.rottentomato.split('%')[0]) < 60"  class="movie-card-rate-icon" src="/static/rotten.jpg"/>
                    {{movie.rottentomato}}
                </div>
                <div v-if="movie.rottentomato == null" class="movie-card-rate-null">
                    <img class="movie-card-rate-icon" src="/static/tomato.jpg"/>
                    Coming Soon
                </div>


                <div v-if="movie.metascore == null || movie.metascore == 'tbd'" class="movie-card-rate-null">
                    <img class="movie-card-rate-icon" src="/static/metacritic.jpg"/>
                    Coming Soon
                </div>
                <div v-if="movie.metascore != null && movie.metascore != 'tbd'" class="movie-card-rate-title">
                    <img class="movie-card-rate-icon" src="/static/metacritic.jpg"/>
                    {{movie.metascore}}
                </div>
               

            </div>
           
        </div>
        
        </div>
        </router-link>
    
    </div>
  
</template>

<script>
export default {
    name: 'MovieCardInList',
    props: ['movie']
}
</script>

<style>
    .movie-card-list{
        width: 100%;
        cursor: pointer;
        background-color:white;
        margin-bottom: 1.7rem;
        padding: 1.5rem;
        /* display: flex; */

        -moz-transition: all .15s ease-in;
        -o-transition: all .15s ease-in;
        -webkit-transition: all .15s ease-in;
        transition: all .15s ease-in;
    }

    .movie-card-list:hover{
        -moz-transition: all .15s ease-in;
        -o-transition: all .15s ease-in;
        -webkit-transition: all .15s ease-in;
        transition: all .15s ease-in;

        -webkit-box-shadow: 10px 10px 9px -2px rgba(145, 145, 145,1);
        -moz-box-shadow: 10px 10px 9px -2px rgba(145, 145, 145,1);
        box-shadow: 10px 10px 9px -2px rgba(145, 145, 145,1);
    }

    .movie-card-imgbox{
        width: 10rem;
        /* margin-right: 2rem; */
    }

    .movie-card-img{
        width: 10rem;
    }


    .movie-card-content{
        padding-right: 1rem;
        border-right: .7px solid rgb(163, 163, 163);
    }

    .movie-card-title{
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .movie-card-crown{
        margin-left: 0.6rem;
        font-size: 1.2rem;
        color: rgb(248, 203, 2);
    }

    .movie-info-extra{
        margin-bottom: 0.5rem;
    }

    .movie-info-stitle,
    .movie-info-icon{
        width: 2.9rem;
        font-weight: bold;
    }

    .movie-info-dtext{
        width: 93%;
        word-break: break-all;
    }

    .movie-info-dtext2{
        margin-right: 2rem;
        word-break: break-all;
    }

    .movie-card-rate{
        display: flex;
        align-items: center;
        padding-left: 1.5rem;
    }

    .movie-card-rate-null{
        font-size: 0.9rem;
        color: gray;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
    .movie-card-rate-title{
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .movie-card-list-router a{
        color: black;
        text-decoration : none;
    }

    .movie-card-rate-icon{
        width: 1.8rem;
        margin-right: 1rem;
    }
     /* image 크기 조정 */
    @media only screen and (min-width: 500px) and (max-width:750px){
        .movie-card-img,
        .movie-card-imgbox{
            width: 6rem;
        }

        .movie-info-extra{
            font-size: 0.7rem;
        }

        .movie-card-content{
            border-right: none;
        }

    }

    @media only screen and (min-width: 750px) and (max-width:985px){
        .movie-card-img,
        .movie-card-imgbox{
            width: 7.6rem;
        }

        .movie-info-extra{
            font-size: 0.8rem;
        }

        .movie-card-content{
            border-right: none;
        }

    }


    @media only screen and (max-width:500px){
        .movie-card-img,
        .movie-card-imgbox{
            width: 6.5rem;
        }

        .movie-info-extra{
            font-size: 0.75rem;
        }

        .movie-card-content{
            border-right: none;
        }

    }

</style>
