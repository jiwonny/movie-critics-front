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
@import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');

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
    font-family: 'Bree serif', serif;
    font-weight: bolder;
    font-size: 4.5rem;
    color: #00264B;
}

.section1-title-bar{
    margin: 1rem 0rem 1rem 0rem;
    width: 18rem;
    height: 0.5rem;
    background-color: #FFD319;
}

</style>

