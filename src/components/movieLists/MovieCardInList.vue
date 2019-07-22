<template>
    <div class="movie-card-list">
        {{movie.title}} : {{movie.eng_title}}    
    </div>
    
</template>

<script>
export default {
    name: 'MovieCardInList',
    props: ['movie']
}
</script>

<style>
    .movie-card-list{

    }
</style>
