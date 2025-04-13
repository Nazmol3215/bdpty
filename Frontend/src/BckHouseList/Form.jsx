import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    image: "",
    imageName: "",
    phone: "",
    rent: "",
    type: "",
    gas: "",
    bathroom: "",
    rooms: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/houses", formData);
    alert("তথ্য জমা হয়েছে!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="image" placeholder="ইমেজ লিংক" onChange={handleChange} />
      <input name="imageName" placeholder="ইমেজের নাম" onChange={handleChange} />
      <input name="phone" placeholder="📞 মোবাইল নাম্বার" onChange={handleChange} />
      <input name="rent" placeholder="💰 মাসিক ভাড়া" onChange={handleChange} />
      <input name="type" placeholder="🏠 বাসার ধরন" onChange={handleChange} />
      <input name="gas" placeholder="🔥 গ্যাস সুবিধা" onChange={handleChange} />
      <input name="bathroom" placeholder="🚿 এটাচ বাথরুম" onChange={handleChange} />
      <input name="rooms" placeholder="🛏️ রুম সংখ্যা" onChange={handleChange} />
      <input name="address" placeholder="📌 ঠিকানা" onChange={handleChange} />
      <button type="submit">জমা দিন</button>
    </form>
  );
};

export default Form;
