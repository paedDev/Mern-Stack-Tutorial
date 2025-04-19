import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";
connectDB();
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to port ${PORT}`);
});
