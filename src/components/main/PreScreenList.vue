<template>
   <div id="prescreenrow" class="container">
        <div class="pre-list-title">상영 예정작</div>
        <div class="row pre-screen-list">
            <pre-screen-card
                v-for="(pre, index) in pres"
                :key = "index"
                v-bind:pre="pre"
                v-bind:index = "index">
            </pre-screen-card>
        </div>

        <router-link class="main-list-more main-list-more-pre" :to="{name: 'movie_list', params: {status : 'pre'}}">개봉 예정작 목록</router-link>
    </div>
</template>

<script>
import PreScreenCard from './PreScreenCard.vue'
export default {
    name: 'PreScreenList',
    components: {
        'pre-screen-card' : PreScreenCard,
    },
    created() {
        this.$http.get('http://143.248.39.45:3000/pre_movie').then(response => {
            this.pres = response.data.slice(0, 12)
            console.log('created');
            // console.log('currents : '+this.currents)
        })
    },
    mounted(){
       
        console.log('mounted');

        
    },
    data(){
        return {
            desc: "",
            pres : null
        }
    }
}


</script>

<style>
   @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    .pre-list-title{
        margin-top: 5rem;
        font-family: 'Noto Sans KR', sans-serif;
        color: white;
        font-size: 1.35rem;
        font-weight: bold;
    }
    
    #current-screen-carousel{
       margin-top: 2rem;
       display: flex;
       justify-content: center;
       /* width: 100%; */
       /* border: gray solid 0.5px; */
    }

    .wrapper{
        width:85%;
        padding-top: 20px;
        text-align:center;
    }
    h2{
        font-family:sans-serif;
        color:#fff;
    }
    .carousel{
        width:90%;
        margin:0px auto;
    }
   
   
   .pre-screen-list{
        margin-top: 3rem;
   }

   .main-list-more-pre{
       padding-right: 0rem !important;
   }
</style>