import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

const GroupingList = ({list}) => {
    let [arr, setArr] = useState(null)
    const [group, setGroup] = useState(2)
    const [ketuaBox, setKetuaBox] = useState(false)

    const handlerClick = () => {
        let arr =  []
        let secArr = []
        let secondList = [...list]

        if (list.length % group !== 0) {
            let otherArr = null
           let theIntv = setInterval(() => {
                if (arr.length) {
                     clearInterval(theIntv)
                     otherArr = arr.filter(ar => {return ar.length !== Math.floor(list.length / group)})
                     console.log(otherArr)
                     swal({
                        title: "Perhatian !",
                        text: `Jumlah Seluruh Anggota Dalam List Tidak Terbagi Rata Kedalam Setiap Kelompok, Terdapat ${otherArr ? otherArr.length : '0'} Kelompok Yang Memilik Anggota Lebih`,
                        icon: "warning",
                      })
                }
            }, 1)
                
            

            
        } 

        if (list.length < group) {
            swal({
                title: "Maaf !",
                text: "Maaf Jumlah Anggota Yang Ada Dilist Kurang Dari Jumlah Kelompok Yang Diinginkan.",
                icon: "error",
              })
        } else {

                for (let i = 1; i <= group; i++) {            
                for (let a = 1; a <= list.length / group; a++) {
                    let random = Math.floor(Math.random() * secondList.length)
                    let name = secondList[random]
                   
                    secArr.push(name)
                    secondList = secondList.filter((lst) => {return lst.name !== name.name})
                    
                }
                
                arr.push(secArr)
                secArr = []
                
                
            }

        }
        let render = arr.map((arrr, index) => {
            if (secondList.length !== 0) {
                arrr.push(secondList[0])
                secondList.shift()
            }

            if (ketuaBox == true) {
                let random = Math.floor(Math.random() * arrr.length)
               arrr[random] = {...arrr[random], ketua : 'Ketua'}
            } else {
               
            }
    
            return (
                
                <div key={index} className='group rounded-lg text-gray-700 m-3 p-4 bg-purple-200'>
                                <h1 className='text-2xl text-purple-500'>Kelompok {index + 1}</h1>
                                <h3 className='text-xl'>Anggota :</h3>
                                <ol className='pl-3 list-decimal'>
                               {arrr.map((ar) => {
                                //    console.log(ar)
                                   return  <li className='mt-1' key={ar.id}>{ar.name} {ar.ketua ? <span className='text-purple-600'>[Ketua]</span> : ''}  {ar.age ? `| ${ar.age} Tahun` : ''}  {ar.gender ? `| ${ar.gender}` : ''}</li>
                               })}
                            </ol>
                </div>
                )
               
            
            })
    
        setArr(render)
     


        
    }

    return (
        <div>
            <h2 className='text-2xl md:text-left text-center text-purple-500 py-2'>Grouping List Anggota</h2>
            <div className='flex md:flex-row flex-col items-center'>
                <button onClick={handlerClick} className='my-1 p-2 mx-1 bg-purple-400 rounded-lg text-white font-bold'>Grouping List</button>
                <select value={group} onChange={(e) => {setGroup(e.target.value )}} className='my-1 p-1 mx-1 rounded-lg border-2 border-purple-400'>
                    <option value="2">2 Kelompok</option>
                    <option value="3">3 Kelompok</option>
                    <option value="4">4 Kelompok</option>
                    <option value="5">5 Kelompok</option>
                    <option value="6">6 Kelompok</option>
                    <option value="7">7 Kelompok</option>
                    <option value="8">8 Kelompok</option>
                    <option value="9">9 Kelompok</option>
                    <option value="10">10 Kelompok</option>
                    <option value="11">11 Kelompok</option>
                    <option value="12">12 Kelompok</option>
                    <option value="13">13 Kelompok</option>
                    <option value="14">14 Kelompok</option>
                    <option value="15">15 Kelompok</option>
                    <option value="16">16 Kelompok</option>
                    <option value="17">17 Kelompok</option>
                    <option value="18">18 Kelompok</option>
                    <option value="19">19 Kelompok</option>
                    <option value="20">20 Kelompok</option>
                </select>
                <div className='my-1 border-2 border-purple-400 p-1 rounded-lg'>
                    <input value={ketuaBox} onChange={(e) => {setKetuaBox(!ketuaBox)}} id='ketua' type="checkbox" className='text-xl ml-2 mr-2 p-1'/>
                    <label htmlFor="ketua" className='mr-1'>Pilih Ketua</label>
                </div>
            </div>
            <div className='p-2 text-white rounded-lg font-normal my-3 bg-yellow-400 '>
                <p>ketika melakukan grouping list pastikan jumlah anggota dengan jumlah kelompok bisa terbagi, tanpa sisa bagi. karna ketika terdapat sisa bagi,
                  pembagian kelompok akan tidak merata.
                </p>
            </div>
            <div className='flex md:flex-row flex-col flex-wrap'>
                {!arr || arr == '' ? <h1 className='text-3xl text-gray-400'>Tidak Ada Kelompok..</h1> : arr}
            </div>
        </div>
    )
}

export default GroupingList
