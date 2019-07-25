<template>
	<div id="section3-page">
        <div>
            <div class="section3-title">MAD CRITICS</div>
            <div class="section3-developers">보다 지적인 2시간을 위하여</div>
        </div>
        
	</div>
</template>

<script>

export default {
	name: 'Section3'
	
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Bangers|Permanent+Marker&display=swap');
	#section3-page{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
		padding-top: 4rem;
	}

    .section3-title{
        font-family: 'Bangers', cursive;
        font-size: 10rem;
        color: rgb(254, 0, 42);
    }

    .section3-developers{
        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;
        color:rgb(150, 150, 150);
        font-size: 1.1rem;
        font-weight: bold;
    }
</style>