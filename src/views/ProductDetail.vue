<template>
    <div class="product__detail">
        <TitlePage :title="product.title"/>
        <p>{{product.price}}</p>
        <p>{{product.description}}</p>
        <Button btnTitle="Ajouter au panier" classList="btn btn-red" :btnFunction="()=>addToCart(product)"/>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";
    import ApiProducts from "../mixins/ApiProducts";
    import Card from "../mixins/Card";

    export default {
        components: {
            TitlePage,
            Button
        },
        data: function () {
            return {
                product:{}
            }
        },
        mixins:[ApiProducts, Card],
        created() {
            console.log(this.$route.params.id);
            this.getProduct(this.$route.params.id)
            .then(data=> this.product=data)
            .catch(err=> console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

</style>