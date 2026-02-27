// services/ProductService.js
import Product from "../models/Product";

class Products {
  async get() {
    let products = [
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
    ];
    return products;
  }
}

export default Products;
