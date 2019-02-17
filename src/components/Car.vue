<template>
  <div class="product">
    <div class="row">
      <div class="col-sm">
        <div class="product-image">
          <img v-bind:src="image" alt="sdf">
        </div>
      </div>
      <div class="col-sm">
        <div class="product-info">
          <h2>{{ product }}</h2>
          <p v-if="inventory >= 5">In Stock</p>
          <p v-else-if="inventory < 10 && inventory > 0">Almost sold out</p>
          <p v-else>Out of Stock</p>
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <button v-for="variant in variants" v-bind:key="variant.variantId" @click="updateProduct(variant.image)" class="btn btn-light">{{ variant.color }}</button>
          <div>
            <button v-on:click="cart += 1" class="btn btn-primary">Add to Cart</button>
            <div class="cart">Cart ({{cart}})</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
      image: 'https://img.automoto.ua/auto/Maserati-Ghibli-belyiy-none-2013-26-12232913.jpeg',
      product: 'Porshe Panamera',
      inStock: true,
      inventory: 4,
      details: [
        'Black',
        2014
      ],
      variants: [
        {
          variantId: 2233,
          color: 'white',
          image: 'https://img.automoto.ua/auto/Maserati-Ghibli-belyiy-none-2013-26-12232913.jpeg'
        },
        {
          variant: 2244,
          color: 'black',
          image: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/cars/Maserati_GHIBLI2/Maserati_GHIBLI2_L_1.jpg'
        }
      ],
      cart: 0
    }
  },
  methods: {
    updateProduct: function (variantImage) {
      this.image = variantImage
    }
  }
}
</script>

<style>
  .product {
    display: flex;
  }
  .product-image {
    width: 500px;
    max-width: 100%;
  }
  img {
    width: 100%;
  }

  .product-info {
    padding-left: 20px;
    -ms-text-align-last: left;
    text-align-last: left;
  }

  .cart {
    display: inline-block;
    padding: 5px;
    border: 1px solid gray;
    background-color: greenyellow;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    margin-left: 10px;
  }
  .car-variant {
    display: block;
    background-color: slategray;
    width: 50px;
  }
</style>
