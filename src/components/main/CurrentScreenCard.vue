<template>
    <div>
        <img v-bind:src="current.img"/>
    </div>
</template>

<script>
export default {
    name: 'CurrentScreenCard',
    props: ['current']
}
</script>

<style>

</style>
