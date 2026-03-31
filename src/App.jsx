import { Route, Routes } from "react-router-dom";
import Banner from "./component/Banner/Banner"
import Doctors from "./component/Doctors/Doctors"
import Footer from "./component/Footer/Footer";
import MixCards from "./component/mixCards/MixCards";
import Navbar from "./component/Navbar/Navbar"
import { useEffect, useState } from "react";
import Doctor from "./component/Doctor/Doctor";
import DoctorDetails from "./component/DoctorDetails/DoctorDetails";
import BookingPage from "./component/BookingPage/BookingPage";
import { HelmetProvider } from "react-helmet-async";
import { getDoctors } from "./api"; 
import Login from "./LogIn/Login";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(data => setDoctors(data));
  }, []);




  return (
    <>
    <HelmetProvider>
    <div className=" bg-gray-100">
      
      
  
        <Routes>
          <Route path="/home" element={
            <>
            <Navbar />
              <Banner />
              <Doctors doctors={doctors} />
              <MixCards />
            </>
          } />
  
          <Route path="/doctor/:id" element={
            <DoctorDetails doctors={doctors} />
          } />
          <Route path="/bookings" element={<BookingPage></BookingPage>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        </Routes>
  
  
     
      </div>
      <Footer></Footer>
        
        </HelmetProvider>
   
   
    </>
  )
}

export default App
