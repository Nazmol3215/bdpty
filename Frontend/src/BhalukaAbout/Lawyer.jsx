import React from 'react';
import jhkufvdsx from '../Images/im.png.webp';

const ProfileImage = () => {
  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  return <img src={jhkufvdsx} alt="Profile" style={imageStyle} />;
};

const ProfileDetails = ({ name, mobile, designation }) => {
  const headingStyle = {
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    fontFamily: '"Galada", cursive',
    fontWeight: 400,
    fontStyle: 'normal',
  };
  

  const textStyle = {
    fontSize: '1em',
    color: '#666',
    marginBottom: '8px',
    fontFamily: '"Galada", cursive',
    fontWeight: 400,
    fontStyle: 'normal',
  };

  return (
    <>
      <div style={headingStyle}>{name}</div>
      <div style={textStyle}>Mobile: {mobile}</div>
      <div style={textStyle}>designation: {designation}</div>
    </>
  );
};

const ProfileCard = ({ name, mobile, designation }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    margin: '10px',
  };

  return (
    <div style={cardStyle}>
      <ProfileImage />
      <ProfileDetails name={name} mobile={mobile} designation={designation}  />
    </div>
  ); 
}; 

const Lawyer = () => {
  const profiles = [
    { name: 'এডভোকেট আশরাফুল হক জর্জ', mobile: '+880 1552-437912,' , designation: 'সাবেক এটর্নি জেনারেল, সুপ্রিমকোর্ট।' },
    { name: 'এডভোকেট রহিম মিয়া', mobile: '+880 1725-004240,' , designation: 'এপিপি, সুপ্রিমকোর্ট।।' },
    { name: 'এডভোকেট রাখাল উকিল', mobile: '+880 1552-437912,' , designation: 'সাবেক এটর্নি জেনারেল, সুপ্রিমকোর্ট।' },
    { name: 'এডভোকেট আনোয়ার টুটু', mobile: '01711-115055' , designation: 'জজ কোর্ট, ময়মনসিংহ' },
    { name: 'এডভোকেট তপু গোপাল', mobile: '+8801715-992955,' , designation: 'সুপ্রিমকোর্ট।' },
    { name: 'এডভোকেট পলাশ', mobile: '+8801711-354366,' , designation: 'জজ কোর্ট, ময়মনসিংহ।' },
    { name: 'এডভোকেট কামরুল ইসলাম', mobile: '+880 1745-538533,' , designation: 'জজ কোর্ট, ময়মনসিংহ।' },
    { name: 'এডভোকেট অন্তর', mobile: '+880 1722-259640,' , designation: 'জজ কোর্ট, ময়মনসিংহ' },
    { name: 'এডভোকেট নাজমুল হক হিমেল', mobile: '+8801716-321592,' , designation: 'জজ কোর্ট, ময়মনসিংহ' },
    // আপনি এখানে নাম এবং মোবাইল নাম্বারগুলো যোগ করতে পারবেন।
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          mobile={profile.mobile}
          designation={profile.designation}
        />
      ))}
    </div>
  );
};

export default Lawyer;
