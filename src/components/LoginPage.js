import React from 'react';
import img1 from '../img/image03.png';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  return (
    <div className='flex justify-between '>
      <div className='w-1/3 h-screen 'style={{backgroundImage:`url(${img1})`}}>
       <h1 className='text-4xl font-extrabold text-white'>CHOCO <br/> GATEWAY</h1>
      </div>
      <div className='items-center justify-center w-2/3 bg-black'>
        <div className='p-3 m-5 font-bold text-white'>
          <Link className='p-2 text-white bg-red-800'>LOGIN</Link>
         <Link to={'/register'} className='p-2 border-red-800'>REGISTER</Link>
         <br/>
         <br/>
         <br/>
         <h2>Enter your account Information</h2>
         
          <form className='w-auto p-5 mt-12'>
          <p className='w-32 p-1 mx-3 text-black bg-white border rounded-md'>Email Address</p>
          <input  className='w-64 p-1 text-white border rounded-md' placeholder='Enter Name'></input>
          <br/>
          <br/>
          <br/>
          <p className='p-1 mx-3 text-black bg-white border w-28'>Password</p>
          <input  className='w-64 p-1 text-black border rounded-md' placeholder='Enter Password'></input>
           <br/>

           <button className='p-2 mt-10 bg-orange-800 border b- w-96'>Login</button>
          </form>


          
        </div>
        <div className='flex p-5 ml-10'>
        <h1 className='text-white'>Have not an account?</h1>
        <Link className='text-white' to={'/register'}>Click Here</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage