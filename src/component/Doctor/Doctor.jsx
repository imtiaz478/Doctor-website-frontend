import React from 'react';
import { Link } from 'react-router-dom';
const Doctor = ({doctor}) => {
    const {doctorImage, name, education, speciality, registrationNumber} = doctor;
    return (
        <div>
            <div className="card bg-base-100 w-[450px] mx-auto shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={doctorImage}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <div className=' flex items-center gap-10'>
    <button className=' bg-[#09982F] text-white rounded-full p-2'>Available</button>
    <button className=' bg-[#176AE5] text-white rounded-full p-2'>5+ Years Experience</button>

    </div>
   
    <h2 className="card-title">{name}</h2>
    <p>{education} , {speciality}</p>
    <p>Reg No: {registrationNumber}</p>
    <div className="card-actions">
      <Link to={`/doctor/${doctor.id}`} className="btn btn-primary w-full bg-white text-blue-500">
      <button >View Details</button>
      </Link>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Doctor;