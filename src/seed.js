import mongoose from "mongoose";
import Product from "./model/product.model.js";

const MONGO_URI = "mongodb://localhost:27017/productsDB";

const data = [
  {
    name: "Fresh Green Capsicum",
    price: 14,
    description: "Crisp and fresh green capsicum for daily cooking.",
    category: "Vegetables",
    images: ["capsicum-green.jpg"],
    stock: 50,
    isActive: true,
  },
  {
    name: "Red Capsicum",
    price: 18,
    description: "Sweet and crunchy red capsicum.",
    category: "Vegetables",
    images: ["capsicum-red.jpg"],
    stock: 30,
    isActive: true,
  },
  {
    name: "Organic Tomatoes",
    price: 12.5,
    description: "Farm fresh organic tomatoes.",
    category: "Vegetables",
    images: ["tomatoes.jpg"],
    stock: 80,
    isActive: true,
  },
  {
    name: "Fresh Apples",
    price: 99,
    description: "Crisp and sweet apples, perfect for snacks.",
    category: "Fruits",
    images: ["apple.jpg"],
    stock: 40,
    isActive: true,
  },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");

    await Product.deleteMany();
    console.log("Old products removed");

    await Product.insertMany(data);
    console.log("Dummy products added");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDB();
