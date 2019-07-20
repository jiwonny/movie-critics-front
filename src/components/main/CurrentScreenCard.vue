<template>
    <div>
        <img :src="current.img"/>
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
