<template>
    <nav class="navbar navbar-expand-lg navbar navbar-light main-header">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <router-link to="/" class="navbar-brand" href="#">Hidden brand</router-link>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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

    .main-header{
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        width: 100%;
    }

    .navbar-toggler-icon{
        z-index: 1000;
    }

</style>
