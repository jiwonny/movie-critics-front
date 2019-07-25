<template>
    <div class="col pre-screen-image-box">
        <div>
            <router-link :to="{name : 'movie' , params: {movie_id: pre.movie_id}}"><img class="pre-screen-image" v-bind:src="pre.img"/></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PreScreenCard',
    props: ['pre']
}
</script>

<style>
.pre-screen-image{
	width:10rem;
	height:14rem;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}
.pre-screen-image-box{
	margin-bottom: 2rem;
}

.pre-screen-image:hover{
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    opacity: 0.4;
}
</style>
