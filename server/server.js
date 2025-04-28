import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";
connectDB();
import dotenv from "dotenv";
import productRouter from "./route/Product-route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const ALLOWED_ORIGINS = [
  process.env.CLIENT_URL, // https://storeapp-zeta.vercel.app
  "http://localhost:3000", // for local React
];
s;
//middlewares
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
  })
);
app.use(express.json()); // allows us to accept json data in the req.body
// app.use("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
app.use("/api/products", productRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening to port ${PORT}`);
});
