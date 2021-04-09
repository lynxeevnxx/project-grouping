import React, { useRef } from 'react'
import gambar from '../../assets/PNG/Meeting2.png'
const HeaderGroup = () => {
    let imgEl = useRef(null)

    return (
        <>
         <header className='flex flex-col items-center  justify-center'>
                <div className='lg:flex-row  flex-col flex justify-evenly'>
               
                <div ref={imgEl} className='w-full transition imgContainer  md:hidden block xl:block lg:w-2/5  bg-purple-300 rounded-full py-8'>
                    <img src={gambar} className='w-full' alt=""/>
                </div>
                <div className='text-center lg:text-left groupHeaderContent w-full xl:w-6/12 text-purple-400 py-10'>
                    <h1 className='text-4xl font-semibold'>Mari Buat Groupmu !</h1>
                    <p className='text-xl py-2'>disini kamu dapat melakukan grouping kelompok secara adil dan
                    lebih efisien tentunya</p>
                    <br/>
                    <h2 className='text-2xl text-left font-semibold'>Manfaat Menggunakan Fitur Group Ini :</h2>
                    <ul className='pl-4 text-left list-decimal text-xl'>
                        <li className='py-2'>Tidak Ada Perebutan Anggota Kelompok</li>
                        <li className='py-2'>Semua Anggota Terbagi Dengan Adil</li>
                        <li className='py-2'>Tidak Akan Ada Kecurangan Dalam Memilih</li>
                        <li className='py-2'>Lebih Efisien untuk memilih</li>
                    </ul>
                </div>
                </div>
            </header>   
        </>
    )
}

export default HeaderGroup
