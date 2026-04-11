import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
    const handleLogin = async () => {
        const res = await fetch("https://localhost:7030/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }), 
        });

        const data = await res.json();  

        if (res.ok) {
            localStorage.setItem("token", data.token); 
            localStorage.setItem("role", data.role);    
            alert("Login successful!");
            if (data.role === "Customer") {
                navigate("/dashboard/customer");
              } else if (data.role === "Doctor") {
                navigate("/dashboard/doctor");
              } else if (data.role === "Admin") {
                navigate("/dashboard/admin");
              }
        } else {
            alert(data.message || "Login failed");
        }
    };
    return (
        <div className="text-center mt-20">
        <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
};

export default Login;