import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'

const AddMemberForm = ({addMember, list}) => {
    let [member, setMember] = useState({id : Math.floor(Math.random() * 232323232),
         name : '', age : '', gender : ''})

    const boxEl = useRef(null)

    useEffect(() => {
        setMember({...member, id : Math.floor(Math.random() * 232323232)})
    }, [member.name])
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!list.length) {
                showPopUp()
                addMember(member)
                setMember({name : '', age : '', gender : '', id : ''})
        } else if (member.name.length < 4) {
            swal({
                title: "Maaf !",
                text: `Maaf Minimal Karakter Untuk Nama 4 Huruf!`,
                icon: "warning",
               })  
        } else if (list.length) {    
                list.forEach(lst => {
                    if (lst.name == member.name) {
                            swal({
                                title: "Maaf !",
                                text: `Maaf ${member.name} Sudah Ada Dalam List !`,
                                icon: "warning",
                               })        
                    }  
                })
            
                let nameList = list.map((lst) => {return lst.name})
                if (!nameList.includes(`${member.name}`)) {
                    showPopUp()
                    addMember(member)
                    setMember({name : '', age : '', gender : '', id : ''})
                }
            
        }
        
        
    }

    const showPopUp = () => {
        boxEl.current.style.transform = 'translateY(0%)'
        setTimeout(() => {
            boxEl.current.style.transform = 'translateY(-100%)'
        }, 1000)
    }

    const handleChange = (e) => {
       setMember({...member, [e.target.id] : e.target.value})
    }

    

    const iterateAge = () => {
      let arr = []
      for (let i = 10; i <= 50; i++) {
          arr.push(i)
      }
     return arr.map((ar,index) => {
          return <option key={index} value={ar}>{ar}</option>
      })
    }
    // console.log(member.name)

    return (
        <>
            <div className='listMembers py-5'>
              <div ref={boxEl} className='z-40 containerBoxAlert transition duration-500 w-full flex justify-center bg-transparent p-5 fixed'>
              <div className='p-3  shadow-lg  rounded-lg opacity-80 boxAlert z-10 bg-green-100 text-lg inline-block border-2 border-green-300 '>
                  Data Berhasil Ditambahkan</div>
              </div>
              <h2 className='text-2xl py-2 text-purple-500'>Masukan Nama - Nama Anggota</h2>
              <form onSubmit={handleSubmit} className='inputName'>
              <input value={member.name} required id='name' onChange={handleChange} placeholder='Masukan Nama Anggota Yang Mau Dimasukan Ke Group'
               type="text" className='text-xl my-1 w-full capitalize p-2 py-3 border-2 border-purple-400 rounded-lg'/>
               <div className='flex py-2'>
               <select id='age' onChange={handleChange} value={member.age} className='mr-3 my-1  p-3 text-center border-2 border-purple-400 rounded-lg'>
                   <option value="None">Usia</option>
                   {iterateAge ? iterateAge() : ''}
               </select>
               <select id='gender' onChange={handleChange} value={member.gender} className='ml-1 my-1  p-3 text-center border-2 border-purple-400 rounded-lg'>
                   <option value="None">Gender</option>
                   <option value="Pria">Pria</option>
                   <option value="Wanita">Perempuan</option>
               </select>
               </div>
               <button className='p-2 rounded-lg bg-purple-400 font-semibold text-white'>Add To List</button>
               <div className='p-2 text-white rounded-lg font-normal my-3 bg-yellow-400'>
                        <p>untuk umur dan gender tidak wajib,kalian bisa cukup memasukan nama dari anggotanya (Minimal 4 Karakter)
                        </p>
                </div>
              </form>
          </div> 
        </>
    )
}

export default AddMemberForm
