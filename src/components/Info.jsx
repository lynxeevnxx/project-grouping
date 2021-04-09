import React, { useRef } from 'react'
import img from '../assets/PNG/Coding.png'
import img2 from '../assets/PNG/app.png'
import img3 from '../assets/PNG/Meeting.png'
import img4 from '../assets/PNG/Social.png'
const Info = () => {
    let dots = useRef(null)
    let infoEls = useRef(null)
    let layerEl = useRef(null)
    const dotClick = (e) => {
        // console.log(dots.current)
        let newDots = dots.current.querySelectorAll('span')
        newDots.forEach(dot => {
            dot.classList.remove('text-purple-500')
        })

        let newInfo = infoEls.current.querySelectorAll('.info')

        newInfo.forEach(info => {
            info.style.transform = 'translateY(-150%)'
        })

        let targetInfo = infoEls.current.querySelector(`.${e.target.id}Info`)
        targetInfo.style.transform = 'translateY(0%)'

        e.target.classList.add('text-purple-500')
        console.log(e.target)
    }

    const closeLayer = (e) => {
      if (e == 'close') {
        layerEl.current.style.transform = 'translateY(-100%)'
      } else if (e == 'open') {
        layerEl.current.style.transform = 'translateY(0%)'
      }
    }
    return (
           <>
            <div ref={layerEl} className='fixed transition duration-1000 flex justify-center items-center layer w-screen h-screen  bg-black z-30'>
            <div className='p-4 relative layerContent  z-20 w-8/12 transition duration-1000 rounded-lg my-5 justify-start bg-purple-400 text-white shadow-lg flex md:flex-row flex-col'>
                <img className='w-full hidden md:block md:w-1/2 pr-10' src={img4} alt=""/>
                <div className=' text-center mt-5 w-full md:text-left'>
                    <form action="https://formspree.io/f/xvodoqov"method="POST">
                <label className='text-1xl md:text-2xl py-2  font-semibold block'>Your email:</label>
                <input className='p-2 text-gray-800 rounded-lg bg-purple-100 w-full mb-3 my-1' type="email" name="_replyto"></input>
                <label className='text-1xl md:text-2xl py-2 font-semibold block'>Your message: </label>
                <textarea className='p-3 text-gray-800 rounded-lg bg-purple-100 my-1 block h-full w-full' name="message"></textarea>
            <button className='p-2 rounded-lg bg-purple-600 font-semibold mt-2 mx-1' type="submit">Send</button>
                    
                    <hr className='border-2 border-bottom-white my-5 bg-white rounded-lg'/>
                    
                    <p>terimakasih sudah mengunjungi website sederhana saya, jika kalian memilik pesan dan kesan silahkan kirimkan melalu form diatas.</p>
            </form>
            <button onClick={() => {closeLayer('close')}} className='p-2 rounded-lg  font-semibold mt-2 mx-1 absolute absolute closeBtnLayer' type="submit"><i class="fas bg-purle-400 fa-2x fa-window-close"></i></button>

                </div>
            </div>
            </div>
                 <div ref={infoEls} className='py-10 md:pt-5 flex justify-center relative w-11/12 pb-20 mx-auto'>
            <div className='p-4 firstInfo info z-20 transition duration-1000 rounded-lg my-5 justify-start bg-purple-400 text-white shadow-lg flex md:flex-row flex-col'>
                <img className='w-full md:w-2/5 pr-10' src={img} alt=""/>
                <div className='text-center mt-5 md:text-left'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Hallo, Hai - Hai Hallo !</h1>
                    <p className='text-lg md:text-xl'>Perkenalkan nama saya tegar deyustian, saya seorang pelajar SMA dan seorang front-end Developer, diwebsite ini saya
                        sedang mengimplementasikan hasil belajar saya dengan library reactJS dari javascript.
                    </p>
                    <br/>
                    <hr className='border-2 border-bottom-white bg-white rounded-lg'/>
                    <br/>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Technologi</h1>
                    <p className='text-lg md:text-lg'>website ini dibangun dengan beberap teknologi, pertama untuk kerangka website nya pastinya menggunakan HTML lalu untuk styling saya menggunakan
                    CSS dan framework CSS (TailwindCSS) lalu untuk membangun logika - logika websitenya saya menggunakan bahasa pemrogramman javascript dan librarynya yaitu reactJS.
                    </p>
                </div>
            </div>
            <div className='p-4 secondInfo info z-20 transition duration-1000 rounded-lg my-5 justify-start bg-green-400 text-white shadow-lg flex md:flex-row flex-col'>
                <img className='w-full md:w-1/2 pr-10' src={img2} alt=""/>
                <div className='text-center mt-5 md:text-left'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>About this website</h1>
                    <p className='text-lg md:text-xl'>didalam website ini saya membuat sebuah fitur untuk grouping kelompok, terdapat beberapa fitur didalamnya :
                    </p>
                    <ul className='text-lg list-none md:list-disc pl-5'>
                        <li>mengelompokan list</li>
                        <li>memilih ketua dalam setiap list secara acak</li>
                        <li>tambah dan hapus user dari list</li>
                        <li>sisa bagi dari list akan dimasukan ke kelompok</li>
                    </ul>
                    <br/>
                    <hr className='border-2 border-bottom-white bg-white rounded-lg'/>
                    <br/>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Why i made this website</h1>
                    <p className='text-lg md:text-lg'>saya membuat website ini berdasarkan pengalaman saya, dimana sering dideskriminasi ketika ada pemilihan kelompok dalam sebuah lingkungan,
                    akhirnya saya membuat website ini agar pembagian kelompok lebih adil dan efisien 
                    </p>
                </div>
            </div>
            <div className='p-4 md:text-left text-center thirdInfo info z-20 transition duration-1000  rounded-lg my-5 justify-start 
            bg-indigo-400 text-white shadow-lg flex md:flex-row flex-col'>
                <img className='w-full md:w-1/2 pr-0 md:pr-10' src={img3} alt=""/>
                <div className=' mt-5 md:text-left w-full'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>my other websites</h1>
                    <ul className='text-lg list-none md:list-disc pl-5'>
                        <li>website to do app & data covid indonesia <a className='text-red-600' target='_blank' href="https://tegar-deyustian.netlify.app/">Link</a></li>
                        <li>website simple games <a className='text-red-600' target='_blank' href="https://kyo-reactgames.netlify.app/">Link</a></li>
                        <li>website card games <a className='text-red-600' target='_blank' href="http://kyocardgame.netlify.app/"> Link</a></li>
                        <li>website islami quranku <a className='text-red-600' target='_blank' href="https://alquranku.netlify.app/">Link</a></li>
                    </ul>
                    <br/>
                    <hr className='border-2 border-bottom-white bg-white rounded-lg'/>
                    <br/>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Social media</h1>
                    <ul className='text-lg list-none md:list-disc pl-5'>
                        <a target='_blank' href="https://www.facebook.com/tegardm/"><li><i class="fab fa-facebook-square"></i> Facebook</li></a>
                        <a target="_blank" href="https://github.com/lynxeevnxx"><li><i class="fab fa-github-square"></i> Github</li></a>
                       <a target='_blank' href="https://www.instagram.com/tegar_deyustian/"> <li><i class="fab fa-instagram"> </i> Instagram</li></a>
                        <a href="https://discord.gg/S4rrXQU" target='_blank'><li><i class="fab fa-discord"> </i> Discord</li></a>
                        <li className=''><span className='lowercase'><i class="fas fa-envelope"></i> tegardm@gmail.com</span></li>
                    </ul>
                    <p className='text-lg'>klik disini jika kalian punya pesan, saran & kritik</p>
                    <button onClick={() => {closeLayer('open')}} className='p-2 rounded-lg bg-green-500 shadow-lg font-semibold'><i class="fa fa-paper-plane" aria-hidden="true"></i> Kirim Pesan</button>
                       
                </div>
            </div>
            <div ref={dots} className='text-7xl dot absolute'>
                <span id='first' onClick={dotClick} className='mx-2 text-purple-500 cursor-pointer'>.</span>
                <span id='second' onClick={dotClick} className='mx-2 cursor-pointer'>.</span>
                <span id='third' onClick={dotClick} className='mx-2 cursor-pointer'>.</span>
            </div>
            <div className='block md:hidden coverInfo'></div>
            </div>
           </>
    )
}

export default Info
