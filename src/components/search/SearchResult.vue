<template>
	<div class="search-result-page">
		<div class="container">
			<div class="search-result-query">
				<i class="fas fa-search"></i>&nbsp;&nbsp;&nbsp; '&nbsp;{{query}}&nbsp;' &nbsp;&nbsp;검색결과 <span style="margin-left : 0.5rem; color: rgb(254, 0, 84)">2</span> 건 
			</div>


		</div>
		
	</div>
</template>

<script>
export default{
	name: 'SearchResult',
	data(){
		return{
			query : '',
		}
	},
	created(){
		this.query = this.$route.params.query;
	}
}
</script>

<style>
	.search-result-page{
		font-family: 'Noto Sans KR', sans-serif;
		background-color: rgb(245, 245, 245);
		padding-top: 4rem;
	}

	.search-result-query{
		margin-top: 2rem;
		font-weight: bold;
		font-size: 1.3rem;
	}
</style>