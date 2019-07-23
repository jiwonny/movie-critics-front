<template>
    <div id="movie-synopsis-rate">
         {{movieDetail.title}}<br>
         rate 
    </div>
   
</template>


<script>
export default {
    name: 'MovieRate',
    props: ['movieDetail']
}
</script>
