import { Route, Routes } from "react-router-dom";
import Banner from "./component/Banner/Banner"
import Doctors from "./component/Doctors/Doctors"
import Footer from "./component/Footer/Footer";
import MixCards from "./component/mixCards/MixCards";
import Navbar from "./component/Navbar/Navbar"
import { useEffect, useState } from "react";
import Doctor from "./component/Doctor/Doctor";
import DoctorDetails from "./component/DoctorDetails/DoctorDetails";

function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctorsData.json")
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, []);




  return (
    <>
    <div className=" bg-gray-100">
    <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Doctors doctors={doctors} />
            <MixCards />
          </>
        } />

        <Route path="/doctor/:id" element={
          <DoctorDetails doctors={doctors} />
        } />
      </Routes>
   
    </div>
    <Footer></Footer>
   
    </>
  )
}

export default App
