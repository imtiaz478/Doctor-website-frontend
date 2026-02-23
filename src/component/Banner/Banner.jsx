import React from 'react';

const Banner = () => {
    return (
        <div className=' my-20 space-y-5 bg-white py-10 px-5 rounded-lg shadow-sm w-4/5 mx-auto'>
            <h1 className=' text-center text-4xl font-bold'>Dependable Care, Backed by Trusted 
               <br /> Professionals.</h1>
            <p className=' text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className=' flex items-center justify-center gap-5'>
            <input className=' border-2 border-[#176AE5] w-1/3 rounded-full px-5 py-3' type="text" placeholder='Search any doctor..' />
            <button className=' bg-[#176AE5] text-white w-32 p-3 text-center rounded-full'>Search Now</button>
        

            </div>

            <div className=' flex items-center justify-center gap-5'>
                <img src="/src/assets/banner-img-1.png" alt="" />
                <img src="/src/assets/banner-img-1.png" alt="" />

            </div>
           

           
            
        </div>
    );
};

export default Banner;