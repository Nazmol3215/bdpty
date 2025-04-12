import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    type: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', formData);
    alert('তথ্য জমা হয়েছে!');
    setFormData({ image: '', name: '', type: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="image" placeholder="ইমেজ লিংক" value={formData.image} onChange={handleChange} required />
      <input type="text" name="name" placeholder="নাম" value={formData.name} onChange={handleChange} required />
      <input type="text" name="type" placeholder="ধরণ" value={formData.type} onChange={handleChange} required />
      <input type="text" name="address" placeholder="ঠিকানা" value={formData.address} onChange={handleChange} required />
      <button type="submit">জমা দিন</button>
    </form>
  );
};

export default UserForm;
