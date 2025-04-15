const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: "User saved" });
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.put("/:id", async (req, res) => {
  const { password, data } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) return res.status(403).send({ error: "Invalid Password" });
  const updated = await User.findByIdAndUpdate(req.params.id, data, { new: true });
  res.send(updated);
});

router.delete("/:id", async (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) return res.status(403).send({ error: "Invalid Password" });
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User deleted" });
});

module.exports = router;
