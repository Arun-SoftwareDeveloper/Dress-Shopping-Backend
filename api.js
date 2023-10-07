const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors"); // Import the cors package
const app = express();
const ProductRoutes = require("./Routes/ProductRoutes");
const Products = require("./Products");

// Enable CORS for all routes
app.use(cors());
const products = [
  {
    id: 1,
    img: "./Images/levis jeans.jpg",
    product_brand: "Levi's",
    product_name: "Toned jeans",
    product_price: 30,
    quantity: 10,
  },
  {
    id: 2,
    img: "./Images/basics shirt.webp",
    product_brand: "Basics",
    product_name: "Casual shirt",
    product_price: 32,
    quantity: 12,
  },
  {
    id: 3,
    img: "./Images/h&m tshirt.jfif",
    product_brand: "H&M",
    product_name: "Over-sized t-shirt",
    product_price: 60,
    quantity: 4,
  },
  {
    id: 4,
    img: "./Images/h&m shirt.jfif",
    product_brand: "H&M",
    product_name: "Over-sized Shirt",
    product_price: 40,
    quantity: 4,
  },
  {
    id: 5,
    img: "./Images/zara partywear.jpg",
    product_brand: "Zara",
    product_name: "Partywear Shirt",
    product_price: 32,
    quantity: 14,
  },
  {
    id: 6,
    img: "./Images/h&m hoodie1.jfif",
    product_brand: "H&M",
    product_name: "Oversized Hoodie",
    product_price: 60,
    quantity: 1,
  },
  {
    id: 7,
    img: "https://i0.wp.com/shoesinkart.com/wp-content/uploads/2022/08/917216.jpg?fit=600%2C688&ssl=1",
    product_brand: "CONVERSE*",
    product_name: "All Star",
    product_price: 170,
    quantity: 2,
  },
  {
    id: 8,
    img: "https://media.karousell.com/media/photos/products/2023/6/5/nike_air_jordan_1_high_next_ch_1685982929_68222df6_progressive.jpg",
    product_brand: "NIKE",
    product_name: "Air Jordan",
    product_price: 260,
    quantity: 3,
  },
  {
    id: 9,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2F3c%2Fbe3ce850aa1e1cbfa220c49f474f9bc7972d248f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/zoom]&zoom=zoom",
    product_brand: "H&M",
    product_name: "High-Top Sneakers",
    product_price: 100,
    quantity: 12,
  },

  {
    id: 10,
    img: "https://images.ctfassets.net/xxo9lvoc4mg6/7LLBZndNZwK6CxW2bVypJh/199c08d76e5dc8831bd0cdd58f8f303d/3._ARMANI_EXCHNAGE.jpg?w=2000&q=90",
    product_brand: "ARMANI EXCHANGE",
    product_name: "T-Shirt",
    product_price: 400,
    quantity: 14,
  },
  {
    id: 11,
    img: "https://5.imimg.com/data5/SELLER/Default/2021/3/GA/TN/VX/65010343/whatsapp-image-2021-03-05-at-8-17-43-pm-1--500x500.jpeg",
    product_brand: "GUCCI",
    product_name: "Men Luxury Loafers",
    product_price: 622,
    quantity: 1,
  },
  {
    id: 12,
    img: "https://d13mpyn1qp7zwx.cloudfront.net/image-factory/650x868/images/products/2ZJ1HJhjmzEmjO5EoHehgkCUBcQo4osyZbK6Ubcu.jpg",
    product_brand: "ARMANI EXCHANGE",
    product_name: "Unisex Caps",
    product_price: 360,
    quantity: 5,
  },
];

// Connect to MongoDB
const dburl = "mongodb://0.0.0.0:27017/Shopping_Site";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected!!!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Serve the React frontend (build) as static files
app.use(express.static(path.join(__dirname, "client/build")));

// API routes for the cart
app.use("/api/cart", ProductRoutes);
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.send("Trendy Shoppie Backend!!!");
});
const port = 4000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
