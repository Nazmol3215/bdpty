import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [password, setPassword] = useState('');
  const [granted, setGranted] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleLogin = () => {
    if (password === '12345') {
      setGranted(true);
      fetchUsers();
    } else {
      alert('ভুল পাসওয়ার্ড!');
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`, { data: { password } });
    fetchUsers();
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/api/users/${editUser._id}`, {
      password,
      data: editUser
    });
    setEditUser(null);
    fetchUsers();
  };

  return (
    <div>
      {!granted ? (
        <div>
          <input type="password" placeholder="পাসওয়ার্ড দিন" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>লগইন</button>
        </div>
      ) : (
        <div>
          <h2>এডমিন ড্যাশবোর্ড</h2>
          {users.map(user => (
            <div key={user._id} style={{border: '1px solid gray', padding: '10px', marginBottom: '10px'}}>
              <p>{user.name} ({user.type}) - {user.address}</p>
              <button onClick={() => setEditUser(user)}>এডিট</button>
              <button onClick={() => handleDelete(user._id)}>ডিলিট</button>
            </div>
          ))}

          {editUser && (
            <div>
              <h4>এডিট করুন</h4>
              <input type="text" value={editUser.name} onChange={(e) => setEditUser({...editUser, name: e.target.value})} />
              <input type="text" value={editUser.type} onChange={(e) => setEditUser({...editUser, type: e.target.value})} />
              <input type="text" value={editUser.address} onChange={(e) => setEditUser({...editUser, address: e.target.value})} />
              <button onClick={handleUpdate}>আপডেট</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
