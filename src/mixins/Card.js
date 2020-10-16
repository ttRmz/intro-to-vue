export default {
  methods: {
    addToCart(product) {
      //récupération du localStorage (bien penser à parser)
      let card = JSON.parse(localStorage.getItem('shopCart')) || []
      let productObject = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        qty: 1,
      }

      // Eventuellement le même id dans le localStorage
      let indexOfExistingProduct = card.findIndex(
        (el) => el.id === productObject.id,
      )

      //check si id du produit à ajouter est présent dans le panier
      //Si déjà présent, j'incrémente la prop qté
      if (indexOfExistingProduct !== -1) {
        card[indexOfExistingProduct].qty += 1
      }
      //Si il n'est pas présent, j'ajoute le nouveau produit au tableau Card
      else {
        card.push(productObject)
      }

      //Je réinsère le nouveau tableau dans le localStorage (bien penser à Stringify)
      localStorage.setItem('shopCart', JSON.stringify(card))
    },
    //supprimer tout le panier
    clearCart() {
      localStorage.removeItem('shopCart')
    },
    //Suprimer un produit du panier
    removeItemCart(product) {
      // getItem + setItem
    },
    getCart() {
      let card = JSON.parse(localStorage.getItem('shopCart'))
      return card
    },
    getCartCount() {
      //localStorage.getItem
    },
  },
}
