import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Products Microservice Running");
});

export default app;
