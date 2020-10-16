<template>
    <div class="title__page">
        <h1>{{ title }}</h1>
        <p v-if="subTitle">{{ subTitle }}</p>
    </div>
</template>

<script>
    export default {
        name:"TitlePage",
        props: {
            title: String,
            subTitle:String
        } 
    }
</script>

<style lang="scss" scoped>

</style>