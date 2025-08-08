const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoutes = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const port = 5000;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
