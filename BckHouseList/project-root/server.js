const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const houseRoutes = require("./routes/houseRoutes");
const adminRoutes = require("./routes/adminRoutes");
const customUserRoutes = require("./routes/customUserRoutes");
const memberRoutes = require('./routes/memberRoutes');
const profileRoutes = require("./routes/profileRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/houses", houseRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/custom-users", customUserRoutes);
app.use('/api/members', memberRoutes);
app.use("/api/profiles", profileRoutes);


// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});




