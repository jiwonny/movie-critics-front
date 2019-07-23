<template>
    <div>
        <div id="current-screen-carousel">
            <div class="wrapper">
                <div class="carousel" ref ="carousel">
                    <current-screen-card
                        v-for="(current, index) in currents"
                        :key = "index"
                        v-bind:current="current"
                        v-bind:index = "index"
                        v-on:click.native="currentDisplay(index)">
                    </current-screen-card>
                </div>
            </div>
        </div>

        <current-screen-description
           v-bind:desc = "desc"
        >
        </current-screen-description>
    </div>
</template>

<script>
import CurrentScreenCard from './CurrentScreenCard.vue'
import CurrentScreenDescription from './CurrentScreenDescription'
export default {
    name: 'CurrentScreenList',
    components: {
        'current-screen-card' : CurrentScreenCard,
        'current-screen-description' : CurrentScreenDescription
    },
    methods : {
        currentDisplay(index){
            
            console.log("사진을 누르면: "+index);
            this.desc = this.currents[index]
            console.log(this.desc)
        }
    },
    created() {
        this.$http.get('http://143.248.39.45:3000/current_movie').then(response => {
            this.currents = response.data.slice(0, 10)
            console.log('created');
            // console.log('currents : '+this.currents)
        })
    },
    mounted(){
       
        console.log('mounted');

         $('.carousel').children().children('img').click(function(){
            $('.carousel').slick({
                autoplay: false
            })
        })

        $('.carousel').slick({
            dots: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1800
        // centerPadding: '60px',
        // slidesToShow: 3,
        // dots: true,
        // responsive: [
        //     {
        //     breakpoint: 768,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 3
        //     }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        //     }
        // ]
        });
    },
    data(){
        return {
            desc: "",
            currents : null
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
   
</style>