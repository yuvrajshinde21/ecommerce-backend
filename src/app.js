const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(express.static("public"));


const userRoutes = require("../src/routes/userRoutes");
const productRoutes = require("../src/routes/productRoutes")
app.use("/users",userRoutes);
app.use("/products",productRoutes);




module.exports = app;