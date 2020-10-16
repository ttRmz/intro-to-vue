<template>
    <div class="modal">
        <div class="modal__content">
            <slot></slot>
        </div>
        <div class="btn-group">
            <!-- <button v-on:click="cancel">no</button>
            <button @click="validate">ok</button> -->
            <Button btnTitle="valider" classList="btn" :btnFunction="validate"/>
            <Button btnTitle="annuler" classList="btn" :btnFunction="cancel"/>
        </div>
    </div>
</template>

<script>

import Button from "../components/Button";

    export default {
        name:"Modal",
        components: {
            Button
        },
        props: {
            cancel: Function,
            validate: Function
        },

    }
</script>

<style lang="scss" scoped>

</style>