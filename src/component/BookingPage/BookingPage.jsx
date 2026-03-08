import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
    const [appointments, setAppointments] = useState([]);   

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        setAppointments(storedAppointments);
    },[]);

    const handleCancel = (id) => {
        const updated = appointments.filter(app => app.id !== id);

        setAppointments(updated);

        localStorage.setItem('appointments', JSON.stringify(updated));
    }

    if(appointments.length === 0){
        return (
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold">No Appointments Found</h1>

                <Link to="/">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-5">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        );
    }
    return (
        <div>
            <div className="w-3/4 mx-auto mt-10 space-y-6">

<h1 className="text-3xl font-bold text-center">My Appointments</h1>

{appointments.map((doc) => (

    <div
        key={doc.id}
        className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
    >

        <div>
            <h2 className="text-2xl font-bold">{doc.name}</h2>

            <p className="text-gray-500">
                {doc.education}
            </p>

            <p className="text-gray-500">
                {doc.speciality}
            </p>

            <p className="font-bold mt-2">
                Fee: {doc.fee} Taka
            </p>
        </div>

        <button
            onClick={() => handleCancel(doc.id)}
            className="bg-red-500 text-white px-5 py-2 rounded-full"
        >
            Cancel Appointment
        </button>

    </div>

))}
</div>
            
        </div>
    );
};

export default BookingPage;