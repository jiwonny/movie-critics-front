<template>
    <div id="movie-info-tabs">
        <div class="d-flex movie-info-tabbox">
            <div v-on:click="changeTab(1)" id="rate-tab" class="movie-info-tabbtn movie-info-activetab">기자 · 평론가 평점</div>
            <div class="movie-info-tabborder"></div>
            <div v-on:click="changeTab(2)" id="synopsis-tab" class="movie-info-tabbtn movie-info-inactivetab">줄거리</div>
        </div>
        <div class="movie-info-tabcontent">
            <movie-rate v-if="tab_seen1" v-bind:movieDetail="movieDetail"/>
            <movie-synopsis v-if="tab_seen2" v-bind:movieDetail="movieDetail"/>
        </div>
        
    </div>
</template>

<script>
import MovieSynopsis from './MovieSynopsis'
import MovieRate from './MovieRate'
export default {
    name: 'MovieInfoTab',
    props : ['movieDetail'],
    components : {
        'movie-synopsis' : MovieSynopsis,
        'movie-rate' : MovieRate
    },
    data(){
        return{
            tab_seen1 : true,
            tab_seen2 : false
        }
    },
    methods : {
        changeTab(num){
            if(num == 1){
                this.tab_seen1 = true;
                this.tab_seen2 = false;
                $("#rate-tab").removeClass("movie-info-inactivetab");
                $("#rate-tab").addClass("movie-info-activetab");

                $("#synopsis-tab").removeClass("movie-info-activetab");
                $("#synopsis-tab").addClass("movie-info-inactivetab");
            }else {
                this.tab_seen1 = false;
                this.tab_seen2 = true;

                $("#synopsis-tab").removeClass("movie-info-inactivetab");
                $("#synopsis-tab").addClass("movie-info-activetab");

                $("#rate-tab").removeClass("movie-info-activetab");
                $("#rate-tab").addClass("movie-info-inactivetab");
            }
            
        }
    }
}
</script>


<style>
    #movie-info-tabs{
        padding-top: 2rem;
        font-family: 'GoyangIlsan', normal;
    }

    .movie-info-tabbox{
        /* border-top: 0.5px solid rgb(148, 148, 148); */
        border-bottom: 0.5px solid rgb(148, 148, 148);
    }

    .movie-info-activetab{
        border-bottom: 2px solid rgb(248, 0, 54);
         -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
    }

    .movie-info-inactivetab{
        color: rgb(110, 110, 110);
        border-bottom : 2px transparent solid;
         -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
    }

    .movie-info-tabbtn{
        font-size: 1.2rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
        cursor: pointer;
        font-weight: bold;
    }

    .movie-info-tabcontent{
        /* border: rgb(155, 155, 155) solid 0.5px; */
        border-radius: 3px;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .movie-info-tabborder{
        margin-top: 0.8rem;
        width: 1px;
        height: 0.9rem;
        background-color: gray;
    }

     /* image 크기 조정 */
    @media only screen and (min-width: 500px) and (max-width:750px){
        .movie-info-tabbtn{
            font-size: 1rem;
        }
        .movie-info-tabcontent{
            font-size: 0.9rem;
        }
    }

    @media only screen and (max-width:500px){
       .movie-info-tabcontent{
           font-size: 0.7rem;
       }

       .movie-info-tabbtn{
           font-size: 0.75rem;
       }

    }
</style>
