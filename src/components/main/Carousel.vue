<template>
    <div id="v-carousel" type="x/template">
        <div class="card-carousel-wrapper">
            <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
            <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                <div class="card-carousel--card" v-on:click="$emit('main-card-click', current.movie_id)" v-for="(current, index) in currents" :key="index">
                    <div v-if="current.movie_id <= 3" class="card-list-crown"><div><span>{{current.movie_id}}</span></div></div>
                    <!-- <i v-for="(n, index) in (4-current.movie_id) " :key="index" class="fas fa-crown"></i> -->
                    <img :src="current.img"/>
                </div>
                </div>
            </div>
            </div>
            <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: ['currents'], 
    data(){
        return {
            currentOffset: 0,
            windowSize: 6,
            paginationFactor: 220
        }
    },
    computed: {
        atEndOfList() {
            return this.currentOffset <= (this.paginationFactor * -1) * (this.currents.length - this.windowSize);
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
    },
    methods: {
        moveCarousel(direction) {
        // Find a more elegant way to express the :style. consider using props to make it truly generic
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor;
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor;
            }
        },
    }
}

</script>

<style>
    
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 1330px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left, .card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 13px;
  box-sizing: border-box;
  border-top: 3px solid #d1d1d1;
  border-right: 3px solid #d1d1d1;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 150ms linear;
}

.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  /* box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff; */
  /* border-radius: 4px; */
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  /* border-top-left-radius: 4px;
  border-top-right-radius: 4px; */
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2) {
  font-size: 12px;
  font-weight: 300;
  padding: 6px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 12px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):after {
  content: "";
  position: absolute;
  top: 10px;
  left: -1px;
  float: left;
  width: 4px;
  height: 4px;
  /* border-radius: 2px; */
  /* background: white;
  box-shadow: -0px -0px 0px #004977; */
}

.card-list-crown{
    /* width: 10px;
    height: 10px;
    background-color: yellow; */
    position: absolute;
    /* top: 30; */
/* 
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 48px 48px 0 0;
    border-color: #ff0040 transparent transparent transparent;
    color: white; */
   
}

.card-list-crown div{
    width: 0; 
	height: 0; 
	border-top: 52px solid  #ff0040 ;
	border-bottom: 52px solid transparent;
	border-right: 52px solid transparent;
}

.card-list-crown div span {
  position:absolute;
  top: -3.7px;
  width: 26.7px;
  text-align: center;
  font-size: 1.65rem;
  color: white;
  display:block;
  font-weight: bold;
}
</style>
