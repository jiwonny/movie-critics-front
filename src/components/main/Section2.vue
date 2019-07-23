<template>
	<div id="section2-page">
		<pre-screen-list/>
	</div>
</template>

<script>
import PreScreenList from './PreScreenList.vue'
export default {
	name: 'Section2',
	components: {
		'pre-screen-list' : PreScreenList
	}
}
</script>

<style>
	#section2-page{
		padding-top: 4rem;
	}


</style>