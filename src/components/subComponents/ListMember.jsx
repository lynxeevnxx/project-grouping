import React, { useRef, useState } from 'react'

const ListMember = ({list, removeMember}) => {
    const boxElm = useRef(null)

    const boxAlert = () => {
        boxElm.current.style.transform = 'translateY(0%)'
        setTimeout(() => {
            boxElm.current.style.transform = 'translateY(-100%)'
        }, 1000)
    }

    const deleteHandler = (id) => {
            boxAlert()
            removeMember(id);
    }

    let [hideList, setHideList] = useState(true)

    const mapList = list.map((lst, index) => {
        return (
            <div key={index} className='border-2 my-2 rounded-lg border-purple-400 items-center flex justify-between text-left'>
                  <div className='w-1/2 flex items-center justify-between'>
                  <li className='pl-3 w-4/12'>{lst.name}</li>
                  <li className='4/12'>{lst.age} {lst.age ? 'Tahun' : 'None'}</li>
                  <li className='4/12'>{lst.gender ? lst.gender : 'None'}</li>
                  </div>
                  <button onClick={() => deleteHandler(lst.id)} className='p-3 text-white font-semibold bg-red-400'>Delete</button>
              </div>
        )
    })

    const theList = () => {
        return <ul className='text-center'>
        {list.length ? mapList : <h2 className='text-3xl text-gray-400'>Maaf List Tidak Ada</h2>}
    </ul>
    }
    
        return (
            <div>
                 <div ref={boxElm} className='z-40 containerBoxAlert transition duration-500 w-full flex justify-center bg-transparent p-5 fixed'>
              <div className='p-3 shadow-lg  rounded-lg opacity-80 boxAlert z-10 bg-red-100 text-lg inline-block border-2 border-red-400 '>
                  Data Berhasil Dihapus</div>
              </div>
          <h2 className='text-2xl text-purple-500 py-2'>List Nama - Nama Anggota Berjumlah {list.length}</h2>
          {list.length ? <button onClick={() => {
                    setHideList(!hideList)
                    }} className='p-2 bg-purple-400 font-semibold rounded-lg text-white'>{hideList ? 'Show' : 'Hide'} List</button> : ''}
            {!list.length ? <h2 className='text-3xl text-gray-400 text-left'>Tidak Ada List...</h2> : ''}
            {!hideList ? <ul className='text-center'>
        {list.length ? mapList : ''}
        </ul> : ''}
                
        </div>
        )
    }

export default ListMember
