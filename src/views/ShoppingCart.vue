<template>
  <div class="cart__page">
    <TitlePage title="Mon panier" />
    <Button
      classList="btn btn-red"
      btnTitle="Vider le panier"
      :btnFunction="clearCartAndRefresh"
    />
    <div class="card__content">
      <table v-if="cart.length > 0">
        <thead>
          <tr>
            <td class="card__cell">id</td>
            <td class="card__cell">Product name</td>
            <td class="card__cell">Unit price</td>
            <td class="card__cell">Total price</td>
            <td class="card__cell">Quantity</td>
            <td class="card__cell"></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product in cart" :key="product.id">
            <td class="card__cell">
              {{ product.id }}
            </td>
            <td class="card__cell">
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
              >
                {{ product.title }}
              </router-link>
            </td>
            <td class="card__cell">{{ product.price }}$</td>
            <td class="card__cell">
              {{ (product.price * product.qty).toFixed(2) }}$
            </td>
            <td class="card__cell">
              <input
                min="0"
                type="number"
                @change="
                  (event) =>
                    handleChangeProductQuantity(product.id, event.target.value)
                "
                :value="product.qty"
              />
            </td>
            <td class="card__cell">
              <button @click="removeItemFormCart(product.id)">remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Votre panier est vide</p>
    </div>
  </div>
</template>

<script>
import Cart from '../mixins/Cart'
import TitlePage from '../components/TitlePage'
import Button from '../components/Button'

export default {
  name: 'ShoppingCart',
  mixins: [Cart],
  components: {
    TitlePage,
    Button,
  },
  data: function () {
    return {
      cart: [],
    }
  },
  created() {
    this.cart = this.getCart()
  },
  methods: {
    clearCartAndRefresh() {
      this.clearCart()
      this.cart = this.getCart()
    },
    removeItemFormCart(id) {
      this.cart = this.removeItemCart(id)
    },
    handleChangeProductQuantity(id, quantity) {
      this.cart = this.changeProductQuantity(id, quantity)
    },
  },
}
</script>

<style lang="scss" scoped>
.card__content {
  margin-top: 32px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card__cell:not(:first-child) {
  padding-left: 18px;
}
</style>