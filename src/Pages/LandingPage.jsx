import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white px-5">

      {/* NAVBAR MINI */}
      <div className="flex justify-between items-center py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">Phudu</h1>

        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Login
          </button>
        </Link>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto mt-10">

        {/* LEFT TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Your Health, <br />
            <span className="text-blue-600">Our Responsibility</span>
          </h1>

          <p className="text-gray-500 max-w-md">
            Easily connect with experienced doctors, book appointments,
            and get quality healthcare services anytime.
          </p>

          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full shadow-lg">
              Get Started
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mb-10 md:mb-0">
          <img
            src="/src/assets/banner-img-1.png"
            alt="doctor"
            className="w-[350px] md:w-[450px] drop-shadow-xl"
          />
        </div>

      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <img src="/src/assets/success-doctor.png" className="w-14 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-blue-600 mb-2">Find Doctors</h2>
          <p className="text-gray-500">
            Browse hundreds of trusted doctors easily.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <img src="/src/assets/success-review.png" className="w-14 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-blue-600 mb-2">Easy Booking</h2>
          <p className="text-gray-500">
            Book appointments instantly without hassle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <img src="/src/assets/success-patients.png" className="w-14 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-blue-600 mb-2">Trusted Service</h2>
          <p className="text-gray-500">
            Get care from experienced professionals.
          </p>
        </div>

      </div>

      {/* EXTRA SECTION (STATS) */}
      <div className="flex flex-wrap justify-center gap-10 mt-20 text-center">

        <div>
          <h1 className="text-4xl font-bold text-blue-600">200+</h1>
          <p className="text-gray-500">Doctors</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-blue-600">500+</h1>
          <p className="text-gray-500">Reviews</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-blue-600">1500+</h1>
          <p className="text-gray-500">Patients</p>
        </div>

      </div>

      {/* FOOTER */}
      <p className="text-center text-gray-400 mt-20 pb-6">
        © 2026 Phudu. All rights reserved.
      </p>

    </div>
  );
};

export default LandingPage;