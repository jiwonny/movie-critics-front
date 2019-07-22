<template>
    <div id="movie-card-list">
        {{movie.title}} : {{movie.rating}}    
    </div>
    
</template>

<script>
export default {
    name: 'MovieCardInList',
    props: ['movie']
}
</script>

<style>
    #movie-card-list{
        
    }
</style>
