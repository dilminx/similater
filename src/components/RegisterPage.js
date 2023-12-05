import { Link } from 'react-router-dom';
import React from 'react';
import img1 from '../img/image03.png';
import img2 from '../img/Facebook.png';
import img3 from '../img/Google.png';



const LoginPage = () => {
  return (
    <div className='flex justify-between h-full'>
      <div className='w-1/3 bg-black h-'style={{backgroundImage:`url(${img1})`}}>
       <h1 className='p-5 text-4xl font-extrabold text-white'>CHOCO <br/> GATEWAY</h1>
      </div>
      <div className='w-2/3 bg-black'>
        <div className='p-3 m-5 font-bold text-white'>
        <Link to={'/'}  className='p-2 text-white border-b-red-300'>LOGIN</Link>
         <Link className='p-2 bg-red-800 border-red-800'>REGISTER</Link>
         <br/>
         <br/>
         <br/>
         <h2>Enter your account Information</h2>
         
          <form className='w-auto p-4 mt-5'>
          <div className='flex '>
          <div><p className='w-32 p-1 mx-3 text-black bg-white border rounded-md'>First Name</p>
          <input  className='w-64 mb-3 mr-2 text-white' placeholder='Enter F Name'></input>
          </div>
          <div><p className='w-32 p-1 mx-3 text-black bg-white border rounded-md'>Last Name</p>
          <input  className='w-full mb-3 text-white ' placeholder='Enter L Name'></input>
          </div>
          
          </div>
          <p className='w-32 p-1 mx-3 text-black bg-white border rounded-md'>Email Address</p>
          <input  className='w-64 mb-3 text-white ' placeholder='Enter Email'></input>
          <p className='p-1 mx-3 text-black bg-white border rounded-md w-28'>Password</p>
          <input  className='w-64 mb-3 text-black ' placeholder='Enter Password'></input>
           
          <p className='p-1 mx-3 text-black bg-white border rounded-md w-28'>R-Password</p>
          <input  className='w-64 text-black b-gray-400' placeholder='Enter Password'></input>
           <br/>

          <button className='p-2 mt-10 bg-orange-800 border b- w-96'>Registar</button>
          </form>


          
        </div>
        <div className='flex p-5 ml-10'>
        <h1 className='text-white'>Have an account?</h1>
        <Link className='text-white' to={'/'}>Click Here</Link>
        </div>
        <div className='flex items-center justify-center text-2xl text-white'>---OR---</div>
        
        <div className='flex items-start justify-center pb-5'>
          <div>
          <img src={img2} alt="fb" className="w-10 pr-1" />
          </div>
          <div>
          <img src={img3} alt="google" className="w-10 pl-1" />
          </div>
          
         </div> 
      </div>
    </div>
  )
}

export default LoginPage