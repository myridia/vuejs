
// components/ProductCatalogComponent.vue
<template>
  <div>
    <h1>Product Catalog</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';

export default {
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    const productService = new ProductService();
    productService.getAllProducts().then((products) => {
      this.products = products;
    });
  },
};
</script>
