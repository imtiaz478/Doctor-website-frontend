import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { bookAppointment } from '../../api';
const DoctorDetails = ({doctors}) => {
    const {id} = useParams();
    const doctor = doctors.find(doc => doc.id === parseInt(id));

    if(!doctor){
        return <div className=' text-center text-2xl mt-10'>Doctor not found</div>;
    }

    const handleBooking = async () => {
        try{
            await bookAppointment(doctor.id);
            alert('Appointment booked successfully!');
        }
        catch{
            alert('Could not book appointment. Please try again later.');
        }
    };

    const {
        doctorImage,
        name,
        education,
        speciality,
        experience,
        registrationNumber,
        
      } = doctor;
    return (

        <div className=' p-10'>
            <Helmet>
                <title>Doctor Details</title>
            </Helmet>
            <div className=' p-10 bg-white w-3/4 mx-auto my-10 rounded-lg shadow-sm'>
                <h1 className=' text-3xl font-bold text-center'>Doctor's Profile Details</h1>
                <p className=' text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>

            <div className=' p-10 bg-white w-3/4 mx-auto my-10 rounded-lg shadow-sm flex gap-20'> 
                <img className=' w-96 rounded-2xl' src={doctorImage} alt="" />
                <div className=' space-y-10 my-24'>
                    <h1 className=' font-bold text-5xl'>{name}</h1>
                    <p className=' text-gray-500 text-2xl'>{education} <br />
                    {speciality} <br /> <br /> Experience : {experience}</p>
                    
                    <p className=' text-2xl'>Reg No: {registrationNumber}</p>
                </div>
            </div>

            <div className=' p-6 bg-white w-3/4 mx-auto my-10 rounded-lg '>
                <h1 className=' font-bold text-center'>Book an Appointment</h1>
                <div className=' flex justify-around my-3'>
                    <p className=' font-bold text-2xl my-3'>Availability</p>
                    <p className=' font-bold text-xl bg-[#8ac69a] p-3 rounded-full'>Doctors Available Today</p>
                </div>
                <button className=' bg-blue-600 text-white rounded-full w-full p-1.5 my-2 ' onClick={handleBooking}>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default DoctorDetails;