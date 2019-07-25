<template>
	<section class="search-result-page">
		<div class="container">
			<div class="search-result-query">
				<i class="fas fa-search"></i>&nbsp;&nbsp;&nbsp; '&nbsp;{{query}}&nbsp;' &nbsp;&nbsp;검색결과 
			</div>
			<div class="search-category">- 제목 검색 결과<span style="margin-left : 0.5rem; color: rgb(254, 0, 84)">{{title_results.length}}</span> 건 </div>
			<router-link :to="{name: 'movie', params: {movie_id: result.movie_id}}" class="search-result-card d-flex" v-for="result in title_results" :key="result.movie_id">
				<div class="search-result-title">{{result.title}}&nbsp;&nbsp; | &nbsp;&nbsp;</div>
			</router-link>
			<div class="search-category">- 감독 검색 결과<span style="margin-left : 0.5rem; color: rgb(254, 0, 84)">{{directors_results.length}}</span> 건 </div>
			<router-link :to="{name: 'movie', params: {movie_id: result.movie_id}}" class="search-result-card" v-for="result in directors_results" :key="result.movie_id">
				<div class="search-result-title">{{result.title}}&nbsp;&nbsp; | &nbsp;&nbsp;</div>
				<div class="search-result-extra">{{result.directors}}</div>
			</router-link>
			<div class="search-category">- 배우 검색 결과<span style="margin-left : 0.5rem; color: rgb(254, 0, 84)">{{casts_results.length}}</span> 건 </div>
			<router-link :to="{name: 'movie', params: {movie_id: result.movie_id}}" class="search-result-card d-flex" v-for="result in casts_results" :key="result.movie_id">
				<div class="search-result-title">{{result.title}}&nbsp;&nbsp; | &nbsp;&nbsp;</div>
				<div class="search-result-extra">{{result.casts}}</div>
			</router-link>
			<div class="search-category">- 장르 검색 결과<span style="margin-left : 0.5rem; color: rgb(254, 0, 84)">{{genre_results.length}}</span> 건 </div>
			<router-link :to="{name: 'movie', params: {movie_id: result.movie_id}}" class="search-result-card d-flex" v-for="result in genre_results" :key="result.movie_id">
				<div class="search-result-title">{{result.title}}&nbsp;&nbsp; | &nbsp;&nbsp;</div>
				<div class="search-result-extra">{{result.genres}}</div>
			</router-link>
		</div>
		
	</section>
</template>

<script>
export default{
	name: 'SearchResult',
	data(){
		return{
			query : '',
			genre_results : null,
			directors_results : null,
			casts_results : null,
			title_results : null
		}
	},
	created(){
		this.init(this.$route.params.query)
		
	},
	watch: {
		'$route.params.query' : 'init'
	},
	methods: {
		init(query){
			this.query = query

			this.$http.get('http://143.248.39.45:3000/movie_genre/'+this.query).then(response => {
				this.genre_results = response.data
				// console.log('currents : '+this.currents)
			})
			
			this.$http.get('http://143.248.39.45:3000/movie_director/'+this.query).then(response => {
				this.directors_results = response.data
				// console.log('currents : '+this.currents)
			})
			
			this.$http.get('http://143.248.39.45:3000/movie_cast/'+this.query).then(response => {
				this.casts_results = response.data
				// console.log('currents : '+this.currents)
			})
			
			this.$http.get('http://143.248.39.45:3000/movie_title/'+this.query).then(response => {
				this.title_results = response.data
				// console.log('currents : '+this.currents)
			})
		}
		
	}

}
</script>

<style>
	.search-result-page{
		padding-left: 7rem;
		padding-bottom: 6rem;
		/* padding-bottom:  */
		font-family: 'Noto Sans KR', sans-serif;
		background-color: rgb(245, 245, 245);
		padding-top: 4rem;
	}

	.search-result-query{
		margin-top: 2rem;
		font-weight: bold;
		font-size: 1.3rem;
	}

	.search-category{
		font-size: 1.1rem;
		font-weight: bold;
		color: rgb(85, 85, 85);
		margin-top: 2rem;
		margin-bottom: 1.3rem;
	}

	.search-result-card{
		padding: 0.6rem 1rem 0.6rem 1rem;
		cursor: pointer;
	}

	.search-result-card:hover .search-result-title{
		color: rgb(254,0,84);
	}

	.search-result-card:hover .search-result-extra{
		color: rgb(254,0,84);
	}

	.search-result-title{
		color: black;
		font-weight: bold;
	}

	.search-result-extra{
		color: rgb(95, 95, 95);
	}
</style>