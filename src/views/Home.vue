<template>
  <div class="home">
      <button v-on:click="sayHello">Say Hello</button>
    <button @click="sayMyName(myName)">Say my name</button>
    <p>
     <span v-once>Mon nom est {{ myName }}</span>
    <input type="text" v-model="myName"/>
    </p>
    
    <p> {{ myName }} </p>
    <p> {{ myAge }} ans </p>
    <!--cond 1 !-->
    <p v-if="isVisible">C'est visible car True</p>
    <p v-else>C'est pas visible car False</p>
    <!-- cond 2 !-->
    <p v-if="myAge>45">Je suis vieux</p>
    <p v-else-if="myAge>35">Je ne suis pas si vieux que ça</p>
    <p v-else>Je suis jeune</p>
    <div class="product__list">
      <div class="product__item" v-for="product in myProducts" v-bind:key="product.index" style="background-image:url('');">
        <h2>{{product.name}}</h2>
        <a :href="product.img">Lien vers l'image</a>
      </div>
    </div>
    <p v-html="myRedTitle"></p>
    <p>
      {{ myAge + 10 }}
      {{ myAge > 50 ? "Je suis vieux" : "Je suis jeune" }}
    </p>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      myName: "Vincent",
      myAge: 45,
      myRedTitle:"<strong style='color:red'>Ce texte est rouge et bold</strong>",
      myProducts: [
        {name:"product 1", price: 120, img:'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/chaussure-air-force-1-07-pour-3nGnlt.jpg'},
        {name:"product 2", price: 150, img:'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/chaussure-air-force-1-07-pour-3nGnlt.jpg'},
        {name:"product 3", price: 170, img:'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/chaussure-air-force-1-07-pour-3nGnlt.jpg'},
      ],
      myInfo: {},
      isVisible:true
    }
  },
  methods: {
    sayHello: function() {
      alert('Hello');
    },
    sayMyName: function(name) {
      alert(`Hello ${name}`);
    }
  }

}
</script>

<style lang="scss" scoped>
  .product__item {
    img {
      width: 100px;
    }
  }
</style>