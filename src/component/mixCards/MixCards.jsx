import React from 'react';

const MixCards = () => {
    return (
        <div className=' space-y-4 my-10'>
            <h1 className=' text-3xl font-bold text-center'>We Provide Best Medical Services</h1>
            <p className=' text-gray-400 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>


            <section className=' flex justify-center gap-6'>
                
            <div class="card w-72 bg-base-100 card-xl shadow-sm">
  <div class="card-body">
    <img className=' w-16' src="/src/assets/success-doctor.png" alt="" />
    <h1 className=' text-5xl font-bold'>199+</h1>
    <h1 className=' text-gray-500'>Total Doctors</h1>
  </div>
</div>
<div>
    
</div>
            <div class="card w-72 bg-base-100 card-xl shadow-sm">
  <div class="card-body">
    <img className=' w-16' src="/src/assets/success-review.png" alt="" />
    <h1 className=' text-5xl font-bold'>467+</h1>
    <h1 className=' text-gray-500'>Total Reviews</h1>
  </div>
</div>
            <div class="card w-72 bg-base-100 card-xl shadow-sm">
  <div class="card-body">
    <img className=' w-16' src="/src/assets/success-patients.png" alt="" />
    <h1 className=' text-5xl font-bold'>1900+</h1>
    <h1 className=' text-gray-500'>Total Patients</h1>
  </div>
</div>
            <div class="card w-72 bg-base-100 card-xl shadow-sm">
  <div class="card-body">
    <img className=' w-16' src="/src/assets/success-staffs.png" alt="" />
    <h1 className=' text-5xl font-bold'>199+</h1>
    <h1 className=' text-gray-500'>Total Staffs</h1>
  </div>
</div>

           
            </section>
            
        

<br />
<br />



        </div>
        
    );
};

export default MixCards;