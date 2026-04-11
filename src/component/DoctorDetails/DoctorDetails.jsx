import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { bookAppointment } from '../../api';
import Navbar from '../Navbar/Navbar';
import Navbar2 from '../Navbar/Navbar2';   

const DoctorDetails = ({ doctors }) => {
    const { id } = useParams();

    // FIX: safe id match
    const doctor = doctors.find(doc => String(doc.id) === id);

    if (!doctor) {
        return (
            <div className='text-center text-2xl mt-10'>
                Doctor not found
            </div>
        );
    }

    const handleBooking = async () => {
        try {
            await bookAppointment(doctor.id);
            alert('Appointment booked successfully!');
        } catch (err) {
            console.log(err);
            alert('Could not book appointment. Please try again later.');
        }
    };

    // SAFE FIELD HANDLING (backend mismatch safe)
    const name = doctor.UserName || doctor.userName;
    const speciality = doctor.Speciality || doctor.speciality;
    const experience = doctor.Experience || doctor.experience;
    const fee = doctor.Fee || doctor.fee;
    const profilePhoto = doctor.ProfilePhoto || doctor.profilePhoto;

    return (
        <div className='p-10'>
            <Helmet>
                <title>Doctor Details</title>
            </Helmet>

            <Navbar2></Navbar2>

            {/* Header */}
            <div className='p-10 bg-white w-3/4 mx-auto my-10 rounded-lg shadow-sm'>
                <h1 className='text-3xl font-bold text-center'>
                    Doctor's Profile Details
                </h1>
                <p className='text-gray-400 text-center mt-2'>
                    Find detailed information about your selected doctor and book appointments easily.
                </p>
            </div>

            {/* Doctor Info */}
            <div className='p-10 bg-white w-3/4 mx-auto my-10 rounded-lg shadow-sm flex gap-20 items-center'>
                
                <img
                    className='w-96 h-72 object-cover object-top rounded-2xl shadow-md'
                    src={`https://localhost:7030${profilePhoto}`}
                    alt="doctor"
                />

                <div className='space-y-6'>
                    <h1 className='font-bold text-5xl'>
                        Name: {name}
                    </h1>

                    <p className='text-gray-500 text-2xl'>
                        Speciality: {speciality}
                    </p>

                    <p className='text-gray-500 text-2xl'>
                        Experience: {experience} years
                    </p>

                    <p className='text-2xl font-semibold'>
                        Fee: {fee} Taka
                    </p>
                </div>
            </div>

            {/* Booking Section */}
            <div className='p-6 bg-white w-3/4 mx-auto my-10 rounded-lg shadow-sm'>
                
                <h1 className='font-bold text-center text-xl'>
                    Book an Appointment
                </h1>

                <div className='flex justify-around my-4'>
                    <p className='font-bold text-xl'>
                        Availability
                    </p>

                    <p className='font-bold text-sm bg-green-200 px-4 py-2 rounded-full'>
                        Available Today
                    </p>
                </div>

                <button
                    onClick={handleBooking}
                    className='bg-blue-600 text-white rounded-full w-full p-3 hover:bg-blue-700 transition'
                >
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default DoctorDetails;