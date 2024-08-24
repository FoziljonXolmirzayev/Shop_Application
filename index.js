const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const { required } = require("joi");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./constants/swagger");

const PORT = 8000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/user", userRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT);
mongoose
  .connect("mongodb://localhost:27017/test_shop_application")
  .then(() => {
    console.log("Project is running on " + PORT);
  })
  .catch(console.log());
