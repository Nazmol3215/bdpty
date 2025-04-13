import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ContactForm from "./OtherPages/UserForm";
import DetaisPages from "./DetaisPages/DetaisPages";
import PropertyLocationMap from "./OtherPages/PropertyLocationMap";
import Profile from "./Porfile/Porfile";
import FirtOne from "./Porfile/FirtOne";
import AboutUs from "./Porfile/AboutUs";
import Phot from "./Porfile/PhotosGrid";
import ProfileCardGrid from "./police/police";
import Doctors_Valukka from "./BhalukaAbout/Doctors_Valukka";
import Ambulance from "./BhalukaAbout/Ambulance";
import Famous_person from "./BhalukaAbout/Famous_person";
import HospitalList from "./BhalukaAbout/Hospitals_Bhaluka";
import NotFoundPage from "./Layout/NotFoundPage";
import UpazilaAdmin from "./BhalukaAbout/UpazilaAdmin";
import Bhaluka_Upazila_1 from "./BhalukaAbout/Bhaluka_Upazila_1";
import ValukaMunicipality_1 from "./BhalukaAbout/ValukaMunicipality_1";
import Union_1 from "./BhalukaAbout/Union_1";
import JournalistsList_1 from "./BhalukaAbout/JournalistsList_1";
import Famous_person_1 from "./BhalukaAbout/Famous_person_1";
import Fire_service_1 from "./BhalukaAbout/Fire_service_1";
import UpazilaAdmin_1 from "./BhalukaAbout/UpazilaAdmin_1";
import Doctors_Valukka_1 from "./BhalukaAbout/Doctors_Valukka_1";
import Ambulance_1 from "./BhalukaAbout/Ambulance_1";
import Hospitals_Bhaluka_1 from "./BhalukaAbout/Hospitals_Bhaluka_1";
import Lawyer_1 from "./BhalukaAbout/Lawyer_1";
import Mestiri_1 from "./BhalukaAbout/Mestiri_1";
import Rione_1 from "./Test/Mestiri";
import Cook_butcher_1 from "./BhalukaAbout/Cook_butcher_1";
import DonorCard_1 from "./BhalukaAbout/DonorCard_1";
import House_rental_1 from "./BhalukaAbout/House_rental_1";
import UserForm from "./Admin/UserForm";
// import AdminDashboard from "./Admin/AdminDashboard";
import UserList from "./Admin/UserList";
import Form from "./BckHouseList/Form";
import HouseList from "./BckHouseList/HouseList";
import AdminDashboard from "./BckHouseList/AdminDashboard";








export default function Router() {
  return (
    <>


    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/FirtOne" element={<FirtOne />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Phot" element={<Phot />} />
      <Route path="/ContactForm" element={<ContactForm />} />
      <Route path="/DetaisPages" element={<DetaisPages />} />
      <Route path="/PropertyLocationMap" element={<PropertyLocationMap />} />
      <Route path="/Bhaluka_Upazila_1" element={<Bhaluka_Upazila_1 />} />
      <Route path="/ProfileCardGrid" element={<ProfileCardGrid />} />
      <Route path="/Doctors_Valukka" element={<Doctors_Valukka />} />
      <Route path="/Ambulance" element={<Ambulance />} />
      <Route path="/Famous_person" element={<Famous_person />} />
      <Route path="/HospitalList" element={<HospitalList />} />
      <Route path="/NotFoundPage" element={<NotFoundPage />} />
      <Route path="/UpazilaAdmin" element={<UpazilaAdmin />} />
      <Route path="/ValukaMunicipality_1" element={<ValukaMunicipality_1 />} />
      <Route path="/Union_1" element={<Union_1 />} />
      <Route path="/JournalistsList_1" element={<JournalistsList_1 />} />
      <Route path="/Famous_person_1" element={<Famous_person_1 />} />
      <Route path="/Fire_service_1" element={<Fire_service_1 />} />
      <Route path="/UpazilaAdmin_1" element={<UpazilaAdmin_1 />} />
      <Route path="/Doctors_Valukka_1" element={<Doctors_Valukka_1 />} />
      <Route path="/Ambulance_1" element={<Ambulance_1 />} />
      <Route path="/Hospitals_Bhaluka_1" element={<Hospitals_Bhaluka_1 />} />
      <Route path="/Lawyer_1" element={<Lawyer_1 />} />
      <Route path="/DonorCard_1" element={<DonorCard_1 />} />
      <Route path="/Mestiri_1" element={<Mestiri_1 />} />
      <Route path="/Rione_1" element={<Rione_1 />} />
      <Route path="/Cook_butcher_1" element={<Cook_butcher_1 />} />
      <Route path="/House_rental_1" element={<House_rental_1 />} />
      <Route path="/UserForm" element={<UserForm />} />
      {/* <Route path="/AdminDashboard" element={<AdminDashboard />} /> */}
      <Route path="/UserList" element={<UserList />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/HouseList" element={<HouseList />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />




    </Routes>
  </BrowserRouter>

  
    </>
  )
}
