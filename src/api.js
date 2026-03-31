const BASE_URL = "https://localhost:7030/api";

export const loginUser = async (data) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
    });

    return res.json();  
};

export const  getDoctors = async() => {
    const res = await fetch(`${BASE_URL}/doctors`);
    return res.json();
}

export const bookAppointment = async(doctorId) => {
    const token = localStorage.getItem("token");    
    const res = await fetch(`${BASE_URL}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
             doctorId : doctorId,
             appointmentDate: new Date().toISOString(),
            }), 
    });
    return res.json();
};


export const getMyAppointments = async() => {
    const token = localStorage.getItem("token");    
    const res = await fetch(`${BASE_URL}/appointments/my`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
}


export const cancelAppointment = async(id) => {
    const token = localStorage.getItem("token");

  await fetch(`${BASE_URL}/appointments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}