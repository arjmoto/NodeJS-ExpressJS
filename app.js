require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL);

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const authRoutes = require("./routes/auth.route");
const cartRoute = require("./routes/cart.route");
const transferRoute = require("./routes/transfer.route");
const apiProductRoute = require('./api/routes/product.route');


const authMiddleware = require("./middlewares/auth.middleware");
const sessionMiddleware = require("./middlewares/session.middleware");
const port = process.env.PORT;
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", authMiddleware.requireAuth, userRoutes);
app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoute);
app.use("/transfer", transferRoute);
app.use('/api/products', apiProductRoute);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
