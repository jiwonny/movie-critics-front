<template>
    <div id="movie-synopsis-tab">
         {{movieDetail.synopsis_title}}<br>
         {{movieDetail.synopsis_content}}
    </div>
   
</template>


<script>
export default {
    name: 'MovieSynopsis',
    props: ['movieDetail']
}
</script>
