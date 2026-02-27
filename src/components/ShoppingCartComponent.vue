
// components/ShoppingCartComponent.vue
<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in cart" :key="product.id">
        {{ product.name }} x {{ product.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import CartService from '../services/CartService';

export default {
  data() {
    return {
      cart: null,
    };
  },
  mounted() {
    const cartService = new CartService();
    cartService.getCart().then((cart) => {
      this.cart = cart;
    });
  },
};
</script>
