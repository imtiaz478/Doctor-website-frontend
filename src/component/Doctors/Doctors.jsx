import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = ({doctors}) => {
    const [visibleCount, setVisibleCount] = useState(3);

    return (
        <div>
            <h1 className=' text-4xl text-center'>Our Best Doctors</h1>
            <p className=' text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           
            <div className=' my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center gap-5'> 
                {
                    doctors.slice(0,visibleCount).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)

                }
                
            </div>

            {
                visibleCount < doctors.length && (
                    <div className='text-center my-6'>
                        <button onClick={() => setVisibleCount(doctors.length)} className=' btn btn-primary p-6 rounded-full'>view All Doctors</button>
                    </div>
                )
            }

        </div>
    );
};

export default Doctors;