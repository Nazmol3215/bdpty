import React, { useEffect, useState } from "react";
import axios from "axios";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/houses").then((res) => {
      setHouses(res.data);
    });
  }, []);

  return (
    <div>
      <h2>তালিকাভুক্ত বাসাগুলো</h2>
      {houses.map((h, i) => (
        <div key={i} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <img src={h.image} alt={h.imageName} width="200" />
          <p>📞 {h.phone}</p>
          <p>💰 {h.rent}</p>
          <p>🏠 {h.type}</p>
          <p>🔥 {h.gas}</p>
          <p>🚿 {h.bathroom}</p>
          <p>🛏️ {h.rooms}</p>
          <p>📌 {h.address}</p>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
