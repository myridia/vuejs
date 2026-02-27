// models/Product.js
import { v4 as uuidv4 } from "uuid";

class Product {
  constructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export default Product;
