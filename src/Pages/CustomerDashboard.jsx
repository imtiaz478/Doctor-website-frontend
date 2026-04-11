import React, { useEffect, useState } from "react";
import { getDoctors , bookAppointment } from "../api";
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getDoctors().then(data => setDoctors(data));
  }, []);

  // 🔍 filter doctors
  const filteredDoctors = doctors.filter(doc =>
    doc.speciality.toLowerCase().includes(search.toLowerCase())
  );

  // 📅 book
  const handleBook = async (id) => {
    try {
      await bookAppointment(id);
      alert("Appointment booked!");
    } catch {
      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">
          Customer Dashboard
        </h1>

        <button
          onClick={() => navigate("/bookings")}
          className="bg-blue-600 text-white px-5 py-2 rounded-full"
        >
          My Bookings
        </button>
      </div>

      {/* SEARCH */}
      <div className="text-center mb-10">
        <input
          type="text"
          placeholder="Search by speciality..."
          className="border-2 border-blue-400 px-5 py-3 w-1/2 rounded-full"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* DOCTORS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={`https://localhost:7030${doc.profilePhoto}`}
              alt=""
              className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
            />

            

            <h2 className="text-xl font-bold">{doc.userName}</h2>
            <p className="text-gray-500">{doc.speciality}</p>
            <p className="text-gray-500">
              Experience: {doc.experience} years
            </p>
            <p className="font-bold mt-2">Fee: {doc.fee} Taka</p>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-4">

              <button
                onClick={() => navigate(`/doctor/${doc.id}`)}
                className="flex-1 border border-blue-500 text-blue-500 py-2 rounded"
              >
                Details
              </button>

              <button
                onClick={() => handleBook(doc.id)}
                className="flex-1 bg-blue-600 text-white py-2 rounded"
              >
                Book
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default CustomerDashboard;