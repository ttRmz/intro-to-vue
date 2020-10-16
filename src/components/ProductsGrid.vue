<template>
    <div class="products__list">
        <ProductCard v-for="product in productsArray" :key="product.id" :productObject="product"/>
    </div>
</template>

<script>
import ProductCard from "./ProductCard";

    export default {
        name:"ProductGrid",
        props: {
            productsArray: Array
        },
        components: {
            ProductCard
        }

    }
</script>

<style lang="scss" scoped>

</style>