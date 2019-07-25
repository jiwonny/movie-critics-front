<template>
    <div>
        <full-page ref="fullpage" id="fullpage">
            <div class="section section1">
                <section1/>
            </div>
            <div class="section section2">
                <section2/>
            </div>
           
        </full-page>
    </div>
</template>

<script>
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
export default {
    name: 'MainPage',
    components: {
        'section1' : Section1,
        'section2' : Section2
    }
}
</script>

<style>
    .section1{
        /* background-color: white; */
        background-color: rgb(21, 21, 22);
    }

    /* ------------------------------------------ */

    .section2{
        background-color: rgb(21, 21, 22);
    }

    .section3{
        background-color: blueviolet;
    }

    .fp-tableCell{
        vertical-align: 0%;
    }
</style>

