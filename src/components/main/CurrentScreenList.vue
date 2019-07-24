<template>
    <div>
        <div id="current-screen-carousel">
            <!-- <div id="current-screen-carousel">
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
            </div> -->        
            <carousel
                v-bind:currents="currents"
                v-on:main-card-click="showDescription"
            ></carousel>
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
import Carousel from './Carousel'
export default {
    name: 'CurrentScreenList',
    components: {
        'carousel' : Carousel,
        'current-screen-card' : CurrentScreenCard,
        'current-screen-description' : CurrentScreenDescription
    },
    methods : {
        currentDisplay(index){
            console.log("사진을 누르면: "+index);
            this.desc = this.currents[index]
            console.log(this.desc)
        },
        showDescription(index){
            this.desc = this.currents[index]
        }
    },
    created() {
        this.$http.get('http://143.248.39.45:3000/current_movie').then(response => {
            this.currents = response.data.slice(0, 15)
            console.log('created');
            // console.log('currents : '+this.currents)
        })
    },
    mounted(){      
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
       display: flex;
       justify-content: center;
       /* width: 100%; */
       /* border: gray solid 0.5px; */
   }

   
</style>