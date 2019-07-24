<template>
    <div class="current-screen-description">
        <div style="width: 90%">
            <div class="desc-title">{{desc.title.split('_')[0]}}</div>
            <div class="desc-small-info d-flex">
                <div>{{desc.date.split('.')[0]}}</div>
                <div>{{desc.rating}}</div>
                <div>{{desc.time}}</div>
            </div>
            <div class="row">
                <div class="col-8 desc-synopsis">
                    <div>{{desc.synopsis_title}}</div>
                    <div>{{desc.synopsis_content}}</div>
                </div>
                <div class="col-4 desc-info-extra">
                    <div>감독 : {{desc.directors}}</div>
                    <div>출연 : {{desc.casts}}</div>
                    <div>장르 : {{desc.genres}}</div>
                </div>
            </div>
        
            
            <div v-if="desc != null">
                <router-link class="desc-about" :to="{name : 'movie', params: {movie_id: desc.movie_id}}">VIEW MORE > </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurrentScreenDescription',
    props: ['desc']
}
</script>


<style>
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    
    .current-screen-description{
        display: flex;
        justify-content: center;
        width: 100%;
        margin : 1.5rem 3.8rem 1.5rem 3.8rem;
        color: white;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .button-a{
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        color: initial;
    }

    .desc-title{
        font-size: 1.45rem;
        font-weight: bold;
        margin-bottom: .5rem;
    }

    .desc-small-info{
        color: rgb(187, 187, 187);
    }

    .desc-small-info div{
        margin-right: 2rem;
        margin-bottom: 1.5rem;
    }

    .desc-synopsis{
        padding-right: 2.5rem;
    }

    .desc-synopsis div{
        margin-bottom: 0.4rem;
    }

    .desc-info-extra{
        border-left : solid rgb(187, 187, 187) 1.2px;
        color: rgb(187, 187, 187);
        padding-left: 3rem;
    }

    .desc-info-extra div{
        margin-bottom: 0.4rem;
    }

    .desc-about{
        color: rgb(187, 187, 187);
        text-decoration: underline;
        font-weight: bold;
    }
</style>
