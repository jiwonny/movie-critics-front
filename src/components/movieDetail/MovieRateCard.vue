<template>
    <div class="movie-rate-card">
        <div class="movie-rate-upper d-flex justify-content-between">
            <div class="d-flex">
                <div class="d-flex movie-rate-logo-name">
                    <img v-if="refer == 'naver'" class="movie-rate-logo" src="/static/naver.ico"/>
                    <img v-if="refer == 'meta'" class="movie-rate-logo" src="/static/metacritic.jpg"/>
                    <img v-if="refer == 'tomato'" class="movie-rate-logo" src="/static/rt.png"/>

                    <div v-if="rate.name != null" class="movie-rate-name">{{rate.name}}</div>
                    <div v-if="rate.name == null" class="movie-rate-name-null">Anonymous</div>
                </div>

                <div v-if = "refer == 'naver'" class="movie-rate-score">
                    <i class="movie-rate-score-icon fas fa-star"></i>{{rate.score}}
                </div>

                <div v-else-if = "refer == 'meta'" class="movie-rate-score">
                    <div class="meta-rate-box meta-rate-red" v-if="rate.score <= 39" >{{rate.score}}</div>
                    <div class="meta-rate-box meta-rate-yellow" v-else-if="rate.score <= 59" >{{rate.score}}</div>
                    <div class="meta-rate-box meta-rate-green" v-else-if="rate.score <= 100" >{{rate.score}}</div>
                </div>

                <div v-if = "refer == 'tomato'" class="movie-rate-score">
                    <img class="movie-rate-score-tomato" v-if="rate.score === 'rotten'" src="/static/rotten.jpg"/>
                    <img class="movie-rate-score-tomato" v-else-if="rate.score === 'fresh'" src="/static/tomato.jpg"/>
                    <span class="movie-score-tomato-status">{{rate.score}}</span>
                </div>
            </div>
          
            <div v-if = "refer == 'tomato' || refer == 'meta'" v-on:click="openCritic(rate, refer)" class="view-full">
                view full review
            </div>
        </div>
        <div class="movie-rate-contentbox">
            <div v-if="rate.content != null" class="movie-rate-title">
                {{rate.title}}
            </div>
            <div v-else class="movie-rate-content">
                {{rate.title}}
            </div>
            <div class="movie-rate-content">
                {{rate.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainRateCard',
    props: ['rate', 'refer'],
    methods: {
        openCritic(rate, refer){
            if (refer=='meta') {
                window.open('about:blank').location.href = rate.url
            }
            else if (refer=='tomato') {
                window.open('about:blank').location.href = rate.url
            }
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    .view-full{
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: gray;
    }

    .movie-rate-card{
        margin-bottom: 2.5rem;
        padding: 0.5rem;
    }

    .movie-rate-logo{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }
    
    .movie-rate-logo-name{
        
    }
    
    .movie-rate-name{
        font-weight: bold;
        color: rgb(100, 100, 100);
        font-family: 'Noto Sans KR', sans-serif;
    }

    .movie-rate-name-null{
        color: gray;
        font-weight: bold;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .movie-rate-score{
        margin-left: 1.4rem;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
        /* color: rgb(248, 0, 54); */
    }

    .movie-rate-score-icon{
        margin-right: 0.5rem;
        color: rgb(255, 217, 0);
    }

    .movie-rate-upper{
        margin-bottom: 0.8rem;
    }

    .movie-rate-title{
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    .movie-rate-content{
        font-family: 'Noto Sans KR', sans-serif;
        margin-top: 0.8rem;
    }

    .movie-rate-score-tomato{
        margin-right: 0.4rem;
        width: 1.5rem;
        height: 1.5rem;
    }
   
    .movie-score-tomato-status{
         color: rgb(100, 100, 100);
    }

    .meta-rate-box{
        text-align: center;
        width: 1.7rem;
        height: 1.7rem;
        color: white;
        border-radius: 8px;
    }

    .meta-rate-red{
        background-color : #FF0000; 
    }

    .meta-rate-yellow{
        background-color : #FFCC33;
    }

    .meta-rate-green{
        background-color : #66CC33;
    }
   
</style>
