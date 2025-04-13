import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    number: '',
    type: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', formData);
    alert('তথ্য জমা হয়েছে।\nআপনার প্রফাইলটি এখন সাইটে দেখা যাবে।\nসার্চ করে চেক করতে অনুরোধ করা হলো।');
    setFormData({ image: '', name: '', number: '', type: '', address: '' });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '30px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>নতুন প্রফাইল যুক্ত করুন</h3>

      <input
        type="text"
        name="image"
        placeholder="ইমেজ লিংক"
        value={formData.image}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="name"
        placeholder="নাম"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
    <input
  type="tel"
  name="number"
  placeholder="মোবাইল নাম্বার"
  value={formData.number}
  onChange={handleChange}
  required
  pattern="^(?:\+?88)?01[3-9]\d{8}$"
  title="সঠিক মোবাইল নাম্বার দিন, যেমন: 017XXXXXXXX অথবা +88017XXXXXXXX"
  style={inputStyle}
/>


      {/* Dropdown for selecting worker type */}
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
        style={{ ...inputStyle, backgroundColor: '#fff' }}
      >
        <option value="">- ধরণ নির্বাচন করুন -</option>
        <option value="রাজমিস্ত্রী">রাজমিস্ত্রী</option>
        <option value="কাঠমিস্ত্রী">কাঠমিস্ত্রী</option>
        <option value="ইলেকট্রিক মিস্ত্রি">ইলেকট্রিক মিস্ত্রি</option>
        <option value="টাইলস মিস্ত্রি">টাইলস মিস্ত্রি</option>
        <option value="স্যানিটারি মিস্ত্রি">স্যানিটারি মিস্ত্রি</option>
        <option value="রং মিস্ত্রি">রং মিস্ত্রি</option>
        <option value="গাড়ির মিস্ত্রি">গাড়ির মিস্ত্রি</option>
        <option value="এসি মিস্ত্রি">এসি মিস্ত্রি</option>
        <option value="ফ্রিজ মিস্ত্রি">ফ্রিজ মিস্ত্রি</option>
        <option value="সিসি ক্যামেরা মিস্ত্রি">সিসি ক্যামেরা মিস্ত্রি</option>
        <option value="গ্যাস মিস্ত্রি">গ্যাস মিস্ত্রি</option>
        <option value="থাই গ্লাস মিস্ত্রি">থাই গ্লাস মিস্ত্রি</option>
        <option value="ইন্টেরিয়র ডিজাইন">ইন্টেরিয়র ডিজাইন</option>
        <option value="কসাই">কসাই</option>
        <option value="কম্পিউটার মিস্ত্রি">কম্পিউটার মিস্ত্রি</option>
        <option value="টিভি মিস্ত্রি">টিভি মিস্ত্রি</option>
        <option value="সুইং মেকানিক">সুইং মেকানিক</option>
      </select>

      <input
        type="text"
        name="address"
        placeholder="ঠিকানা"
        value={formData.address}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#218838'}
        onMouseOut={e => e.target.style.backgroundColor = '#28a745'}
      >
        জমা দিন
      </button>
    </form>
  );
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px'
};

export default UserForm;
