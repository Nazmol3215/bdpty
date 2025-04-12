import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// প্রোফাইল ডেটা (স্ট্যাটিক)
const staticProfiles = [
  { name: "আশরাফুল ইসলাম", phone: "01738296179", profession: "থাই গ্লাস মিস্ত্রি, ইন্টেরিয়র ডিজাইন", address: "শেখ সুপার মার্কেট,ভালুকা মল্লিকবাড়ী রোড,ভালুকা, ময়মনসিংহ।" },
  { name: "খাইরুল ইসলাম", phone: "01954079601", profession: "কাঠমিস্ত্রী", address: "পাড়াগাঁও,সীডষ্টোর বাজার,ভালুকা ময়মনসিংহ" },
  { name: 'মো: আমিনুল ইসলাম', phone: '01747733172', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'ভালুকা বাজার সরকার অনুমোদিত লাইসেন্স প্রাপ্ত ইলেকট্রিশিয়ান ক্যাটাগরি বি, সি' },
  { name: 'Md Sharif Hossain', phone: '01775479654', profession: 'ইলেকট্রিক মিস্ত্রি, এসি মিস্ত্রি', address: 'Bharaduba, Bhaluka, Mymensingh' },
];

const callPhone = (phone) => {
  window.location.href = `tel:${phone}`;
};

const ProfileCard = ({ profile }) => {
  return (
    <div className="card text-center shadow-sm w-100" style={{ borderRadius: "15px", padding: "1px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
      <img 
        src={profile.image || "https://via.placeholder.com/100"} 
        className="card-img-top rounded-circle mx-auto mt-3" 
        style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #007bff" }} 
        alt="Profile" 
      />
      <div style={{ padding: "1px 2px", margin: "4px" }} className="card-body">
        <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{profile.name}</h5>
        <table className="table table-bordered" style={{ fontSize: "0.9rem", backgroundColor: "#fff" }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>নাম্বার</td>
              <td>
                {profile.phone}
                <button 
                  className="btn btn-sm btn-outline-success ms-2" 
                  onClick={() => callPhone(profile.phone)}
                  style={{ padding: "1px 5px", fontSize: "0.8rem", fontWeight: "bold" }}
                >
                  <i className="bi bi-telephone-fill"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ধরন</td>
              <td>{profile.profession || profile.type}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ঠিকানা</td>
              <td>{profile.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UserList = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [professionFilter, setProfessionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        const apiProfiles = res.data.map(user => ({
          ...user,
          phone: user.phone || "N/A", // যদি phone না থাকে, fallback
          profession: user.type,
        }));
        const combinedProfiles = [...staticProfiles, ...apiProfiles];
        setAllProfiles(combinedProfiles);

        // এলোমেলোভাবে সাজানো
        const shuffled = [...combinedProfiles].sort(() => 0.5 - Math.random());
        setShuffledProfiles(shuffled);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        // শুধু স্ট্যাটিক ডেটা দেখানো হবে fallback হিসেবে
        const shuffled = [...staticProfiles].sort(() => 0.5 - Math.random());
        setAllProfiles(staticProfiles);
        setShuffledProfiles(shuffled);
      }
    };

    fetchData();
  }, []);

  const uniqueProfessions = [...new Set(allProfiles.map(p => p.profession || p.type))];
  const uniqueLocations = [...new Set(allProfiles.map(p => p.address))];

  const filteredProfiles = shuffledProfiles.filter(p => {
    const matchProfession = professionFilter === "" || (p.profession || p.type) === professionFilter;
    const matchLocation = locationFilter === "" || p.address === locationFilter;
    const matchName = searchName === "" || p.name.toLowerCase().includes(searchName.toLowerCase());
    return matchProfession && matchLocation && matchName;
  });

  return (
    <div className="container mt-4">
      {/* ফিল্টার UI */}
      <div className="row mb-3">
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={professionFilter}
            onChange={e => setProfessionFilter(e.target.value)}
          >
            <option value="">সব পেশা</option>
            {uniqueProfessions.map((prof, i) => (
              <option key={i} value={prof}>{prof}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={locationFilter}
            onChange={e => setLocationFilter(e.target.value)}
          >
            <option value="">সব ঠিকানা</option>
            {uniqueLocations.map((addr, i) => (
              <option key={i} value={addr}>{addr}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <input 
            type="text"
            className="form-control"
            placeholder="নাম দিয়ে খুঁজুন"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />
        </div>
      </div>

      {/* প্রোফাইল কার্ডগুলো */}
      <div className="row g-3">
        {filteredProfiles.map((profile, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <ProfileCard profile={profile} />
          </div>
        ))}
        {filteredProfiles.length === 0 && (
          <div className="text-center text-muted py-5">
            <h5>কোনো প্রোফাইল খুঁজে পাওয়া যায়নি</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
