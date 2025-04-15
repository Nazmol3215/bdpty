import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState({});

  const adminPassword = "123456"; // এখানে আপনার এডমিন পাসওয়ার্ড দিন

  // লগইন হ্যান্ডল
  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAdmin(true);
      fetchUsers();
    } else {
      alert("❌ ভুল পাসওয়ার্ড!");
    }
  };

  // ইউজার ডেটা লোড
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("ডেটা লোড করতে সমস্যা:", err);
    }
  };

  // ইউজার ডিলিট
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: { "x-admin-password": adminPassword },
      });
      fetchUsers();
    } catch (err) {
      alert("❌ ডিলিট করতে সমস্যা হয়েছে");
    }
  };

  // এডিট ডেটা সেট
  const handleEditChange = (e, id) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: value,
      },
    }));
  };

  // ইউজার আপডেট
  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/users/${id}`,
        editData[id],
        {
          headers: { "x-admin-password": adminPassword },
        }
      );
      fetchUsers();
    } catch (err) {
      alert("❌ আপডেট করতে সমস্যা হয়েছে");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {!isAdmin ? (
        <div>
          <h2>🔐 Admin Login</h2>
          <input
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 10, marginRight: 10 }}
          />
          <button onClick={handleLogin}>লগইন</button>
        </div>
      ) : (
        <div>
          <h2>📋 ইউজার তালিকা</h2>
          {users.map((user) => (
            <div
              key={user._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 15,
                marginBottom: 20,
                background: "#f5f5f5",
              }}
            >
              <p><strong>📷 ইমেজ লিংক:</strong> {user.imageUrl}</p>
              <p><strong>নাম:</strong> {user.imageName}</p>
              <p><strong>📞 মোবাইল:</strong> {user.phone}</p>
              <p><strong>ধরন:</strong> {user.type}</p>
              <p><strong>📌 ঠিকানা:</strong> {user.address}</p>

              <button
                onClick={() => handleDelete(user._id)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  padding: "5px 10px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                ❌ ডিলিট
              </button>

              <div>
                <input
                  name="imageName"
                  placeholder="নতুন নাম"
                  onChange={(e) => handleEditChange(e, user._id)}
                  style={{ marginRight: 5, padding: 5 }}
                />
                <input
                  name="phone"
                  placeholder="নতুন ফোন"
                  onChange={(e) => handleEditChange(e, user._id)}
                  style={{ marginRight: 5, padding: 5 }}
                />
                <input
                  name="type"
                  placeholder="নতুন ধরন"
                  onChange={(e) => handleEditChange(e, user._id)}
                  style={{ marginRight: 5, padding: 5 }}
                />
                <input
                  name="address"
                  placeholder="নতুন ঠিকানা"
                  onChange={(e) => handleEditChange(e, user._id)}
                  style={{ marginRight: 5, padding: 5 }}
                />
                <button
                  onClick={() => handleUpdate(user._id)}
                  style={{
                    backgroundColor: "#2ecc71",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  ✏️ আপডেট
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
