const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const houseSchema = new mongoose.Schema({
  image: String,
  imageName: String,
  phone: String,
  rent: String,
  type: String,
  gas: String,
  bathroom: String,
  rooms: String,
  address: String,
});

const House = mongoose.model("House", houseSchema);

// ইউজারের ডেটা ইনপুট
app.post("/api/houses", async (req, res) => {
  const house = new House(req.body);
  await house.save();
  res.send({ success: true, message: "ডেটা সংরক্ষিত হয়েছে।" });
});

// ইউজারের ডেটা রিড
app.get("/api/houses", async (req, res) => {
  const houses = await House.find();
  res.send(houses);
});

// ইউজারের ডেটা আপডেট (অ্যাডমিন)
app.put("/api/houses/:id", async (req, res) => {
  const updated = await House.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// ইউজারের ডেটা ডিলিট (অ্যাডমিন)
app.delete("/api/houses/:id", async (req, res) => {
  await House.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});

// এডমিন লগইন পাসওয়ার্ড যাচাই
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.send({ success: true });
  } else {
    res.status(401).send({ success: false, message: "ভুল পাসওয়ার্ড!" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
