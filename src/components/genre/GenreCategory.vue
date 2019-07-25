<template>
    <div class="genre-category-box">
        <div class="container genre-category-inner d-flex justify-content-center">
            <div class="genre-box" v-on:click="$emit('genre-search', '모험')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-binoculars"></i></div>
                <div class="genre-text">모험</div>
            </div>
            
            <div class="genre-box" v-on:click="$emit('genre-search', '판타지')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-hat-wizard"></i></div>
                <div class="genre-text">판타지</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '뮤지컬')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-music"></i></div>
                <div class="genre-text">뮤지컬</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '로맨스')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-kiss-wink-heart"></i></div>
                <div class="genre-text">로맨스</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '코미디')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-grin-squint-tears"></i></div>
                <div class="genre-text">코미디</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', 'SF')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-atom"></i></div>
                <div class="genre-text">SF</div>
            </div>
            
            <div class="genre-box" v-on:click="$emit('genre-search', '공포')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-skull"></i></div>
                <div class="genre-text">공포</div>
            </div>
            
            <div class="genre-box" v-on:click="$emit('genre-search', '서부')">
                <div class="genre-icon-box"><i class="genre-icon fas fa-horse"></i></div>
                <div class="genre-text">서부</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '스릴러')">
                <div class="genre-icon-box"><img class="genre-svg" src="/static/Horror.svg"/></div>
                <div class="genre-text">스릴러</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '애니메이션')">
                <div class="genre-icon-box"><img class="genre-svg" src="/static/animation.svg"/></div>
                <div class="genre-text">애니</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '미스터리')">
                <div class="genre-icon-box"><img class="genre-svg" src="/static/mystery.svg"/></div>
                <div class="genre-text">미스터리</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '다큐멘터리')">
                <div class="genre-icon-box"><img class="genre-svg" src="/static/document.svg"/></div>
                <div class="genre-text">다큐</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '드라마/가족')">
                <div class="genre-icon-box"><img class="genre-svg" src="/static/family-room.png"/></div>
                <div class="genre-text">드라마</div>
            </div>

            <div class="genre-box" v-on:click="$emit('genre-search', '액션')">
                <div class="genre-icon-box"><img class="genre-svg" src="/static/bullet.png"/></div>
                <div class="genre-text">액션</div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'GenreCategory',
    methods : {
       
    }
}
</script>

<style>
     .genre-category-box{
        /* background-color: rgb(240, 240, 240); */
        font-family: 'Noto Sans KR', sans-serif;
        padding-top: 6rem;
        margin-bottom: 2.5rem;
    }

    .genre-category-inner{
        flex-direction: row;
        flex-wrap: wrap;
    }

    .genre-icon{
        color: black;
        font-size: 2.15rem;
    }

    .genre-svg{
        width: 2.4rem;
    }

    .genre-icon-box{
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 18px; 
        background-color:  rgb(231, 231, 231);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .genre-text{
        padding-top: 0.3rem;
        width: 100%;
        text-align: center;
        font-weight: 600;
        color: rgb(78, 78, 78);
    }

    .genre-box{
        margin: 0.5rem 0.5rem 1rem 0.5rem;
    }

    .genre-icon-box:hover{
        transform: scale(1.15);
    }

    .genre-box:hover .genre-icon{
        color: rgb(248, 0, 54);
    }

    .genre-box:hover .genre-svg{
        filter: invert(17%) sepia(98%) saturate(7089%) hue-rotate(343deg) brightness(101%) contrast(107%);
    }

    .genre-box:hover .genre-text{
        color: rgb(248, 0, 54);
    }

    

</style>
