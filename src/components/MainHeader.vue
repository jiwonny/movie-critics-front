<template>
    <nav class="navbar navbar-expand-lg navbar navbar-light main-header">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <router-link to="/" class="navbar-brand" href="#">Hidden brand</router-link>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <router-link :to="{name: 'movie_list', params: {status: 'current'}}" class="nav-link nav-link2">영화 목록</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/genre" class="nav-link nav-link2">장르별 영화</router-link>
            </li> 
            </ul>
            <router-link :to="{name : 'search_result'}" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </router-link>
        </div>
    </nav>
</template>
 
<script>
export default {
  name: 'main-header'
}
</script>
 
<style>
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    .main-header{
        font-family: 'Noto Sans KR', sans-serif;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        width: 100%;
    }

    .navbar-toggler-icon{
        z-index: 1000;
    }

    .navbar-light{
        padding-top: 1rem;
    }

    .navbar-light .navbar-brand {
        font-size: 1.4rem;
        margin-left: 1.5rem;
        color: rgb(248, 0, 54);
        font-weight: bold;
        margin-right: 2rem;
    }

    .navbar-light .navbar-brand:hover{
        color : rgb(248, 0, 54);
    }

    .navbar-light .navbar-brand:focus{
        color : rgb(248, 0, 54);
    }

    .navbar-light .navbar-brand:active{
        color : rgb(248, 0, 54);
    }

    .navbar-light .navbar-brand:link{
        color : rgb(248, 0, 54);
    }

    a.nav-link2{
        font-weight: bold;
        font-size: 0.9rem;
        color: rgb(150, 150, 150) !important;
    }

    .nav-item a.router-link-active{
        color: rgb(107, 107, 107) !important;
    }

    a.nav-link2:hover{
        font-weight: bolder;
        color : rgb(248, 0, 54) !important;
    }
</style>

