import express from "express";

import {
  addNewProduct,
  fetchAllProducts,
  deleteProduct,
  updateProduct,
} from "../controller/Product-controller.js";

const productRouter = express.Router();

productRouter.get("/", fetchAllProducts);
productRouter.post("/add", addNewProduct);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.put("/update/:id", updateProduct);

export default productRouter;
