<template>
	<div class="col genre-screen-image-box">
		<div>
			<router-link :to="{name : 'movie' , params: {movie_id: genre_movie.movie_id}}"><img class="genre-screen-image" v-bind:src="genre_movie.img"/></router-link>
			<div v-if="(genre_movie.naver_score >= 7.5 && genre_movie.metascore >= 80) || (genre_movie.naver_score >= 7.5 && genre_movie.rottentomato >= 80) || (genre_movie.metascore >= 80 && genre_movie.rottentomato >= 80)" class="must-see2">MAD MOVIE</div>
		</div>
		<div class="genre-movie-title">
			{{genre_movie.title.split("_")[0]}}
		</div>
		<div class="genre-movie-genre">
			{{genre_movie.genres}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'GenreMovieCard',
	props: ['genre_movie']
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@import url('https://fonts.googleapis.com/css?family=Bangers|Permanent+Marker&display=swap');
.must-see2{
		/*background-color: rgba(134, 143, 138, 0.6); */
        color: rgba(254, 0 , 42);
        font-family: 'Bangers', cursive;
        /*position: absolute;*/
        font-size: 1.8rem;
    }

.genre-movie-title{
	width: 100%;
	font-family: 'Noto Sans KR', sans-serif;
	font-weight: bold;
	word-break: keep-all;
	/*overflow: hidden;*/
	/*text-overflow: ellipsis;*/
	/*white-space: nowrap;*/
}

.genre-movie-genre{
	font-family: 'Noto Sans KR', sans-serif;
	word-break: keep-all;
	font-size: 0.8rem;
}

.genre-screen-image{
	width:10rem;
	height:14rem;
}
.genre-screen-image-box{
	margin-bottom: 2rem;
}

</style>