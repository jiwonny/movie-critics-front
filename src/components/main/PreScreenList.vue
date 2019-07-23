<template>
   <div id="prescreenrow" class="container">
        <div class="row pre-screen-list">
            <pre-screen-card
                v-for="(pre, index) in pres"
                :key = "index"
                v-bind:pre="pre"
                v-bind:index = "index">
            </pre-screen-card>
            
        </div>
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
    .slick-slide{
        margin:10px;
    }
    .slick-slide img{
        width:100%;
    }

    .slick-dots li button:before{
        color: white;
    }

    .slick-dots li.slick-active button:before
    {
        color: white;
    }
   
   .carousel div img{
       transform: scale(0.95);
       -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
   }

   .carousel div img:hover{
       transform: scale(1.15);
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
   }
   
   .pre-screen-list{
        margin-top: 3rem;
   }
</style>