<template>
    <div class="cart__page">
        <TitlePage title="Mon panier"/>
        <Button classList="btn btn-red" btnTitle="Vider le panier" :btnFunction="clearCartAndRefresh"/>
        <div class="card__content">
            <table v-if="cardArray">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Product name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cardArray" :key="product.id">
                        <td>
                            {{product.id}}
                        </td>
                        <td>
                            {{product.title}}
                        </td>
                        <td>
                            {{product.price}}
                        </td>
                        <td>
                            {{product.qty}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p v-else> 
                Votre panier est vide
            </p>
        </div>
    </div>
</template>

<script>
    
    import Card from "../mixins/Card";
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";

    export default {
        name:"ShoppingCart",
        mixins:[Card],
        components:{
            TitlePage,
            Button
        },
        data: function () {
            return {
                cardArray:[]
            }
        },
        created() {
            this.cardArray = this.getCart()
        },
        methods: {
            clearCartAndRefresh: function() {
                this.clearCart();
                this.cardArray=this.getCart();
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>