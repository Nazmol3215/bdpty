const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const houseRoutes = require("./routes/houseRoutes");
const adminPanelRoutes = require("./routes/adminPanelRoutes"); // সঠিক নাম
const customUserRoutes = require("./routes/customUserRoutes");
const memberRoutes = require('./routes/memberRoutes');
const profileRoutes = require("./routes/profileRoutes");
const donorRoutes = require('./routes/donorRoutes');
const bankRoutes = require('./routes/bankRoutes');
const adminRoutes = require('./routes/BankadminRoutes');





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
app.use("/api/admin", adminPanelRoutes); // সঠিক নাম
app.use("/api/custom-users", customUserRoutes);
app.use('/api/members', memberRoutes);
app.use("/api/profiles", profileRoutes);
app.use('/api', donorRoutes);
app.use('/bank', bankRoutes);
app.use('/admin', adminRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
