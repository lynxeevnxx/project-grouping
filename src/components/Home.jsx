import React from 'react'
import img from '../assets/PNG/login.png'


const Home = () => {
    return (
        <div className='flex home md:flex-row flex-col pt-10'>
            <img className='w-2/5 md:block hidden' src={img} alt=""/>
           <div className='text-left'>
           <h1 className='text-3xl text-purple-400 font-semibold'>Welcome to grouping it !</h1>
           <p className='text-xl text-gray-700'>Selamat datang diwebsite ini, terimakasih sudah 
           mengunjungi website ini untuk melihat fitur grouping nya kalian bsa ke bagian create group</p>
           <br/>
                    <hr className='border-2 border-purple-300 bg-white rounded-lg'/>
            <br/>
            <h1 className='text-3xl text-purple-400 font-semibold'>More Information</h1>
           <p className='text-xl text-gray-700'>cek bagian informasi untuk melihat informasi - informasi lainnya seperti teknologi yang digunakan
           dan lain - lain</p>
           </div>
        </div>
    )
}

export default Home
