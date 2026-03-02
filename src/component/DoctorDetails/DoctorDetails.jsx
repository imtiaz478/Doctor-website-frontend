import React from 'react';
import { useParams } from 'react-router-dom';
const DoctorDetails = ({doctors}) => {
    const {id} = useParams();
    const doctor = doctors.find(doc => doc.id === parseInt(id));

    if(!doctor){
        return <div className=' text-center text-2xl mt-10'>Doctor not found</div>;
    }

    const {
        doctorImage,
        name,
        education,
        speciality,
        designation,
        workplace,
        fee,
        availability
      } = doctor;
    return (
        <div>
            <div className=' p-10 bg-white w-3/4 mx-auto my-10 rounded-lg shadow-sm'>
                <h1 className=' text-3xl font-bold text-center'>Doctor's Profile Details</h1>
                <p className=' text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>

            <div>
                <img src={doctorImage} alt="" />
            </div>
        </div>
    );
};

export default DoctorDetails;