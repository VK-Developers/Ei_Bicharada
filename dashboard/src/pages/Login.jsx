import React, { useState, useEffect } from 'react';
import loginImg from '../assets/imgs/backgrounds/loginImg.jpg'

const Login = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className={`w-full h-full ${ windowWidth <= 1024 ? 'object-fill' : 'object-cover'}`} src={loginImg} alt="" />
        </div>

        <div className={` flex flex-col justify-center ${windowWidth <= 1024 ? 'bg-[#141413]' : 'bg-[#BFBFBF]'}`}>
            <form className='max-w-[400px] w-full mx-auto rounded-lg border-[1px] border-black bg-[#162B3A] text-white p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Login</h2>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none' type="password" />
                </div>
                <button className='w-full my-5 py-2 bg-[#03658C]  hover:shadow-[#03658C] text-white font-semibold rounded-lg'>Entrar</button>
                
            </form>
        </div>
    </div>
    </>
  )
};

export default Login;
