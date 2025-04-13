import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [houses, setHouses] = useState([]);

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { password });
      if (res.data.success) {
        setLoggedIn(true);
        loadHouses();
      }
    } catch {
      alert("ভুল পাসওয়ার্ড!");
    }
  };

  const loadHouses = async () => {
    const res = await axios.get("http://localhost:5000/api/houses");
    setHouses(res.data);
  };

  const deleteHouse = async (id) => {
    await axios.delete(`http://localhost:5000/api/houses/${id}`);
    loadHouses();
  };

  return loggedIn ? (
    <div>
      <h2>এডমিন ড্যাশবোর্ড</h2>
      {houses.map((h) => (
        <div key={h._id} style={{ border: "1px solid black", margin: "10px" }}>
          <p>{h.imageName} - {h.phone}</p>
          <button onClick={() => deleteHouse(h._id)}>ডিলিট</button>
          {/* চাইলে এখানে আপডেট ফর্মও যোগ করতে পারেন */}
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h2>এডমিন লগইন</h2>
      <input
        type="password"
        placeholder="এডমিন পাসওয়ার্ড"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>লগইন</button>
    </div>
  );
};

export default AdminDashboard;
