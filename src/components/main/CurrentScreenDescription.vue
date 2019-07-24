<template>
    <div class="current-screen-description">
        {{desc.title}}<br>
        {{desc.casts}}<br>
        {{desc.directors}}<br>
        {{desc.time}}<br>
        {{desc.date}}<br>
        {{desc.naver_score}}<br>
        {{desc.genres}}<br>
        {{desc.status}}
        
        <div v-if="desc != null">
            <router-link :to="{name : 'movie', params: {movie_id: desc.movie_id}}">ABOUT</router-link>
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
    .current-screen-description{
        color: white;
    }

    .button-a{
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        color: initial;
    }
</style>
