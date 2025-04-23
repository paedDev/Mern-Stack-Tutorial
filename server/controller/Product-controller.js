import Product from "../models/Product";
//lets do all the fetching,adding,deleting and updating here
export const fetchAllProducts = async (req, res) => {};
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
    return res.status(500);
  }
};
export const deleteProduct = async (req, res) => {};
export const updateProduct = async (req, res) => {};
