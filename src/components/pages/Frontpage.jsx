import React from 'react';
import algebra from './assets/algebra.jpg'
import calculus from './assets/calculus.jpg'
import derive from './assets/derive.png'
import quad from './assets/quad.png'
import { useNavigate } from 'react-router-dom'


const Frontpage = () => {

  let navigate = useNavigate()


  return (
    
    <section className='container mx-auto px-6 h-screen flex items-center justify-center flex-col'>
     
      <div className='flex items-center justify-center'>
        <h1 className='text-center pb-24 frontpage-h1'>The most trusted math study site amongst Highschool students</h1>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='w-1/2 sm:w-1/4 lg:w-1/3 xl:w-1/4 p-2'>
          <div className='card bg-base-100 shadow-xl image-full'>
          <figure><img src={algebra} alt="algebra" /></figure>
            <div className='card-body'>
              
              <p className='flex items-center justify-center card-para'>Grade 9 Math</p>
              <div className='card-actions justify-center'>
                <button onClick={() => {navigate("/Grade9")}} className='btn btn-primary'>Start now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 sm:w-1/4 lg:w-1/3 xl:w-1/4 p-2'>
          <div className='card bg-base-100 shadow-xl image-full'>
          <figure><img src={calculus} alt="algebra" /></figure>
          <div className='card-body'>
              
              <p className='flex items-center justify-center card-para' >Grade 10 Math</p>
              <div className='card-actions justify-center'>
                <button onClick={() => {navigate("/Grade10")}} className='btn btn-primary'>Start now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 sm:w-1/4 lg:w-1/3 xl:w-1/4 p-2'>
          <div className='card bg-base-100 shadow-xl image-full'>
            <figure><img src={derive} alt="algebra" /></figure>
            <div className='card-body'>
              
              <p className='flex items-center justify-center card-para' >Grade 11 Math</p>
              <div className='card-actions justify-center'>
                <button onClick={() => {navigate("/Grade11")}}  className='btn btn-primary'>Start now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 sm:w-1/4 lg:w-1/3 xl:w-1/4 p-2'>
          <div className='card bg-base-100 shadow-xl image-full'>
          <figure><img src={quad} alt="algebra" /></figure>
            <div onClick={() => {navigate("/Grade12")}} className='card-body'>
              
              <p className='flex items-center justify-center card-para' >Grade 12 Math</p>
              <div className='card-actions justify-center'>
                <button className='btn btn-primary '>Start now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontpage;

