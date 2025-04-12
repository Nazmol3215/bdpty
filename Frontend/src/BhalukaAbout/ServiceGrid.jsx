import React from 'react';
import { Link } from 'react-router-dom';

const ServiceGrid = () => {
  const services = [
    {
      items: [

        { name: <Link to="/Mestiri_1" style={{ textDecoration: 'none', color: 'inherit' }} >সকল মিস্ত্রী</Link> },
        { name: <Link to="/House_rental_1" style={{ textDecoration: 'none', color: 'inherit' }} >বাসা ভাড়া</Link> },
        { name: <Link to="/Cook_butcher_1" style={{ textDecoration: 'none', color: 'inherit' }} >কসাই বাবুর্চি</Link> },
      ],
    },
    {
      items: [
        { name: <Link to="/ValukaMunicipality_1" style={{ textDecoration: 'none', color: 'inherit' }}>পৌরসভা </Link> },
        { name: <Link to="/ProfileCardGrid" style={{ textDecoration: 'none', color: 'inherit' }} >থানা পুলিশ </Link> },
        { name: <Link to="/UpazilaAdmin_1" style={{ textDecoration: 'none', color: 'inherit' }} >উপজেলা প্রশাসন</Link> },
      ],
    },
    {
      items: [
        { name: <Link to="/Union_1" style={{ textDecoration: 'none', color: 'inherit' }} >উপজেলা</Link> },
        { name: <Link to="/Doctors_Valukka_1" style={{ textDecoration: 'none', color: 'inherit' }}>ডাক্তার নার্স</Link> },
        { name: <Link to="/Ambulance_1" style={{ textDecoration: 'none', color: 'inherit' }} >এ্যাম্বুলেন্স</Link> },
      ],
    },
    {
      items: [
        { name: <Link to="/Hospitals_Bhaluka_1" style={{ textDecoration: 'none', color: 'inherit' }}>হাসপাতাল</Link> },
        { name: <Link to="/JournalistsList_1" style={{ textDecoration: 'none', color: 'inherit' }} >সাংবাদিকগন</Link> },
        { name: <Link to="/Ambulance" style={{ textDecoration: 'none', color: 'inherit' }} >এ্যাম্বুলেন্স</Link> },
      ],
    },
    {
      items: [
        { name: <Link to="/Fire_service_1" style={{ textDecoration: 'none', color: 'inherit' }} >ফায়ার সার্ভিস</Link> },
        { name: <Link to="/Lawyer_1" style={{ textDecoration: 'none', color: 'inherit' }} >আনজীবী</Link> },
        { name: <Link to="/DonorCard_1" style={{ textDecoration: 'none', color: 'inherit' }} >ব্লাড ডোনার</Link> },
      ],
    },
    {
      items: [
        { name: <Link to="/Bhaluka_Upazila_1" style={{ textDecoration: 'none', color: 'inherit' }} >উপজেলা</Link> },
        { name: <Link to="/CardGrid" style={{ textDecoration: 'none', color: 'inherit' }}>সকল মিস্ত্রী</Link> },
        { name: <Link to="/Famous_person" style={{ textDecoration: 'none', color: 'inherit' }} >প্রসিদ্ধ ব্যক্তি</Link> },
      ],
    },
  ];

  return (
    <div className="container">
      {services.map((serviceCategory, index) => (
        <div key={index} className="mb-5">
          <div className="row">
            {serviceCategory.items.map((item, idx) => (
              <div key={idx} className="col-4">
                <div
                  className="card text-center"
                  style={{
                    border: '1px solid green',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    padding: '2px',
                    marginBottom: '-33px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div className="card-body">
                    <h5 style={{ fontSize: '12px', fontWeight: 'bold', color: '#343a40' }}>{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
