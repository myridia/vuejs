<template>
  <div>
    <h1>Product Details</h1>
    <p>{{ product.name }}</p>
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';

export default {
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    const productService = new ProductService();
    productService.getProductById(this.$route.params.id).then((product) => {
      this.product = product;
    });
  },
};
</script>
