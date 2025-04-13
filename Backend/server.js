// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error(err));

// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  number: Number,
  type: String,
  address: String
});

const User = mongoose.model('User', userSchema);

// POST route
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: 'User saved' });
});

// GET route
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// PUT route (Admin)
app.put('/api/users/:id', async (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) return res.status(403).send({ error: 'Invalid Password' });
  await User.findByIdAndUpdate(req.params.id, req.body.data);
  res.send({ message: 'User updated' });
});

// DELETE route (Admin)
app.delete('/api/users/:id', async (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) return res.status(403).send({ error: 'Invalid Password' });
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
