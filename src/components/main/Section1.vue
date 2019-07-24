<template>
    <div class="section1-page">
        <current-screen-list/>
    </div>
</template>


<script>
import CurrentScreenList from './CurrentScreenList.vue'
export default {
    name: 'Section1',
    components: {
        'current-screen-list' : CurrentScreenList
    }
}
</script>

<style>
@font-face { font-family: 'S-CoreDream-7ExtraBold'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-7ExtraBold.woff') format('woff'); font-weight: normal; font-style: normal; }

.section1-page{
    /* default setting padding */
    padding-top: 4rem; 
    padding-left: 10rem;
    padding-right: 10rem;
}

.section1-title-box{
    margin: 2rem 0rem 2rem 0rem;
}

.section1-title{
    font-family : 'S-CoreDream-7ExtraBold', normal;
    font-weight: bolder;
    font-size: 1.5rem;
    color: white;
}

.section1-title-bar{
    margin: 1rem 0rem 1rem 0rem;
    width: 18rem;
    height: 0.5rem;
    background-color: #FFD319;
}


</style>

