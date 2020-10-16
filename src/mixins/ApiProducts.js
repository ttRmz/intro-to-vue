import apiConfigs from '../configs/api.configs'

export default {
  methods: {
    getProducts() {
      return fetch(apiConfigs.apiUrl).then((res) => res.json())
    },
    getProduct(id) {
      return fetch(`${apiConfigs.apiUrl}${id}`).then((res) => res.json())
    },
  },
}
