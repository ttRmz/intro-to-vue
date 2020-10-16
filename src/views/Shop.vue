<template>
  <div>
    <h1>This is a shop page</h1>
    <span v-show="!productsList.length">Loading...</span>

    <ProductsGrid v-if="!!productsList.length" :productsArray="productsList" />
  </div>
</template>

<script>
import ApiProducts from '@/mixins/ApiProducts'
import ProductsGrid from '../components/ProductsGrid'
export default {
  data: function () {
    return {
      productsList: [],
    }
  },
  components: {
    ProductsGrid,
  },
  methods: {
    // getProducts : function() {
    //     return   fetch('https://fakestoreapi.com/products/')
    //     .then(res => res.json())
    // }
  },
  created() {
    this.getProducts()
      .then((data) => (this.productsList = data))
      .catch((err) => console.log(err))
  },
  mixins: [ApiProducts],
}
</script>

<style lang="scss" scoped>
</style>