<template>
	<div id="section3-page">
        <div>
            <div class="section3-title">MAD CRITICS</div>
            <div class="section3-developers">
                관객에게 답을 주는 영화는 극장에서 끝날 것이다<br>하지만 관객에게 질문을 던지는 영화는
                상영이 끝났을 때 비로소 시작한다<br><br>
                - 아스가 파하디 -
            </div>
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