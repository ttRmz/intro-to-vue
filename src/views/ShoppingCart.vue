<template>
  <div class="cart__page">
    <TitlePage title="Mon panier" />
    <Button
      classList="btn btn-red"
      btnTitle="Vider le panier"
      :btnFunction="clearCartAndRefresh"
    />
    <div class="cart__content">
      <table v-if="cart.length > 0">
        <thead>
          <tr>
            <td class="cart__cell">id</td>
            <td class="cart__cell">Product name</td>
            <td class="cart__cell">Unit price</td>
            <td class="cart__cell">Total price</td>
            <td class="cart__cell">Quantity</td>
            <td class="cart__cell"></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product in cart" :key="product.id">
            <td class="cart__cell">
              {{ product.id }}
            </td>
            <td class="cart__cell">
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
              >
                {{ product.title }}
              </router-link>
            </td>
            <td class="cart__cell">{{ product.price }}$</td>
            <td class="cart__cell">
              {{ (product.price * product.qty).toFixed(2) }}$
            </td>
            <td class="cart__cell">
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
            <td class="cart__cell">
              <button @click="removeItemFormCart(product.id)">remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Votre panier est vide</p>

      <span class="cart__total"
        >Total :
        <b>
          {{
            cart
              .reduce((acc, product) => acc + product.qty * product.price, 0)
              .toFixed(2)
          }}$
        </b>
      </span>
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
.cart__content {
  margin-right: 48px;
  margin-left: 48px;
  margin-top: 32px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cart__cell:not(:first-child) {
  padding-left: 18px;
}

.cart__total {
  margin-top: 24px;
  margin-bottom: 32px;
}
</style>