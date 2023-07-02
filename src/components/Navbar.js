import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate = useNavigate()


  return (

  

    <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    

    
    <label  htmlFor="my-drawer" className="btn btn-primary drawer-button btn-ghost btn-circle" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content ">
      {/* Sidebar content here */}
      <li><a className='text-xl font-medium'  onClick={() => {navigate("/")}}>Home</a></li>
      

  <div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  <a>Grade 9</a>
  </div>
  <div className="collapse-content">
    <li>
    <a onClick={() => {navigate("/Grade9")}} >Overview</a>
    <a onClick={() => {navigate("/algebra9")}} >Algebra</a>
    <a onClick={() => {navigate("/Geom9")}} >Geometry</a>
    <a onClick={() => {navigate("/Trig9")}} >Trigonometry</a>
    <a onClick={() => {navigate("/Prob9")}} >Probability and Statistics</a>
    <a onClick={() => {navigate("/Func9")}} >Functions</a>
    <a>Number and Number Systems</a>
    <a>Exponents and Radicals</a>
    <a>Linear Functions</a>
    <a>Financial Mathematics</a>
    </li>
    
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  <a>Grade 10</a>
  </div>
  <div className="collapse-content"> 
  <li>
  <a onClick={() => {navigate("/Grade10")}} >Overview</a>
    <a>Algebra</a>
    <a>Geometry</a>
    <a>Trigonometry</a>
    <a>Probability and Statistics</a>
    <a>Functions</a>
    <a>Number and Number Systems</a>
    <a>Exponents and Radicals</a>
    <a>Linear Functions</a>
    <a>Financial Mathematics</a>
    </li>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  <a>Grade 11</a>
  </div>
  <div className="collapse-content"> 
  <li>
  <a onClick={() => {navigate("/Grade11")}} >Overview</a>
    <a>Algebra</a>
    <a>Geometry</a>
    <a>Trigonometry</a>
    <a>Calculus</a>
    <a>Probability and Statistics</a>
    <a>Discrete Mathematics</a>
    <a>Functions and Relations</a>
    <a>Analytic Geometry</a>
    </li>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  <a>Grade 12</a>
  </div>
  <div className="collapse-content"> 
  <li>
  <a onClick={() => {navigate("/Grade12")}} >Overview</a>
    <a>Calculus</a>
    <a>Advanced Algebra</a>
    <a>Probability and Statistics</a>
    <a>Discrete Mathematics</a>
    <a>Advanced Geometry</a>
    <a>Trigonometry and Complex Analysis</a>
    <a>Mathematical Modeling</a>
    <a>Linear Algebra</a>
    </li>
  </div>
</div>


     
      
      
    </ul>
  </div>
  
</div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl" onClick={() => {navigate("/")}}>Math Mentor</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
   
  </div>
</div>
  )
}

export default Navbar
