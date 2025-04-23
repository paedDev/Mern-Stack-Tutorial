import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";
connectDB();
import dotenv from "dotenv";
import Product from "./models/Product.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json()); // allows us to accept json data in the req.body
// app.use("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res.status(200).json({ newProduct });
  } catch (err) {
    console.error(`Error Creating Product`, err.message);
    return res.status(500);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to port ${PORT}`);
});
