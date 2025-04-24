import mongoose from "mongoose";
import Product from "../models/Product.js";
//lets do all the fetching,adding,deleting and updating here
export const fetchAllProducts = async (req, res) => {
  let productList;
  try {
    productList = await Product.find();
    if (!productList) {
      return res.status(404).json({ message: "No Products Found" });
    }
    return res.status(200).json({
      message: "Successfully retrieved all the product list",
      data: productList,
    });
  } catch (error) {
    console.log(`error in fetching products`, error);
    return res.status(500).json({ message: "Server Error" });
  }
};
export const addNewProduct = async (req, res) => {
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
    return res.status(500).json({ error: "Failed to save product" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid Product Id" });
  }
  let currentProductToUpdate;
  try {
    currentProductToUpdate = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ data: currentProductToUpdate });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
  if (!currentProductToUpdate) {
    return res
      .status(500)
      .json({ message: "Unable to update. Please try again" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid Product Id" });
  }
  try {
    const findCurrentProduct = await Product.findByIdAndDelete(id);
    if (!findCurrentProduct) {
      return res.status(404).json({ message: "Product Item not found" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
