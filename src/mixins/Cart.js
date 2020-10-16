export default {
  methods: {
    addToCart(product) {
      let newCart = JSON.parse(localStorage.getItem('shopCart')) || []

      let productObject = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        qty: 1,
      }

      let indexOfExistingProduct = newCart.findIndex(
        (el) => el.id === productObject.id,
      )

      if (indexOfExistingProduct !== -1) {
        newCart[indexOfExistingProduct].qty += 1
      } else {
        newCart.push(productObject)
      }

      this.updateCart(newCart)
    },
    removeItemCart(productId) {
      const newCart = this.getCart().filter(
        (product) => product.id != productId,
      )

      this.updateCart(newCart)

      return newCart
    },
    changeProductQuantity(productId, quantity) {
      const newCart = this.getCart().reduce((acc, product) => {
        if (product.id === productId) {
          return quantity > 0 ? [...acc, { ...product, qty: quantity }] : acc
        }

        return [...acc, product]
      }, [])

      this.updateCart(newCart)

      return newCart
    },
    getCart() {
      return JSON.parse(localStorage.getItem('shopCart'))
    },
    updateCart(newCart) {
      localStorage.setItem('shopCart', JSON.stringify(newCart))
    },
    clearCart() {
      localStorage.removeItem('shopCart')
    },
    getCartCount() {
      //localStorage.getItem
    },
  },
}
