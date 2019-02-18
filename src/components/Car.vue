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
          <p v-if="inventory >= 3">In Stock</p>
          <p v-else-if="inventory < 2 && inventory > 0">Almost sold out</p>
          <p v-else>Out of Stock</p>
          <div v-for="(variant, index) in variants"
               v-bind:key="variant.variantId"
               @click="updateProduct(index)"
               :style="{backgroundColor: variant.color}"
               class="color-box" >
          </div>
          <!--<button v-for="variant in variants" v-bind:key="variant.variantId" @click="updateProduct(variant.image)" class="btn btn-light btn-item-color">{{ variant.color }}</button>-->
          <div class="cart-display">
            <button v-on:click="addToCart"
                    :disabled="!inStock"
                    class="btn btn-primary">
              Add to Cart
            </button>
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
      brand: 'Porshe',
      selectedVariant: 0,
      image: 'https://img.automoto.ua/auto/Maserati-Ghibli-belyiy-none-2013-26-12232913.jpeg',
      product: 'Porshe Panamera',
      inventory: 5,
      variants: [
        {
          variantId: 2233,
          color: 'grey',
          image: 'https://img.automoto.ua/auto/Maserati-Ghibli-belyiy-none-2013-26-12232913.jpeg',
          variantQuantity: 5
        },
        {
          variantId: 2244,
          color: 'black',
          image: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/cars/Maserati_GHIBLI2/Maserati_GHIBLI2_L_1.jpg',
          variantQuantity: 0
        }
      ],
      cart: 0
    }
  },
  methods: {
    updateProduct: function (index) {
      this.selectedVariant = index
      this.image = this.variants[index].image
    },
    addToCart: function () {
      if (this.variants[this.selectedVariant].variantQuantity) {
        this.cart += 1
        this.variants[this.selectedVariant].variantQuantity -= 1
      }
    }
  },
  computed: {
    inStock: function () {
      return this.variants[this.selectedVariant].variantQuantity
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
  .cart-display {
    margin-bottom: 10px;
  }
  .btn-item-color {
    margin-bottom: 10px;
  }
  .color-box {
    display: inline-block;
    margin-right: 10px;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
</style>
