<template>
  <div v-if="product" class="product__detail">
    <TitlePage :title="product.title" />
    <p>{{ product.price }}$</p>
    <p>{{ product.description }}</p>
    <Button
      btnTitle="Ajouter au panier"
      classList="btn btn-red"
      :btnFunction="() => addToCart(product)"
    />
  </div>

  <span v-else>Loading...</span>
</template>

<script>
import TitlePage from '../components/TitlePage'
import Button from '../components/Button'
import ApiProducts from '../mixins/ApiProducts'
import Cart from '../mixins/Cart'

export default {
  components: {
    TitlePage,
    Button,
  },
  data: function () {
    return {
      product: null,
    }
  },
  mixins: [ApiProducts, Cart],
  created() {
    console.log(this.$route.params.id)
    this.getProduct(this.$route.params.id)
      .then((data) => (this.product = data))
      .catch((err) => console.log(err))
  },
}
</script>

<style lang="scss" scoped>
</style>