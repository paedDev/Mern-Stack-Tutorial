import express from "express";

import {
  addNewProduct,
  fetchAllProducts,
  deleteProduct,
  updateProduct,
} from "../controller/Product-controller.js";

const productRouter = express.Router();

productRouter.get("/", fetchAllProducts);
productRouter.post("/addProduct", addNewProduct);
productRouter.delete("/update/:id", deleteProduct);
productRouter.update("/delete/:id", updateProduct);

export default productRouter;
