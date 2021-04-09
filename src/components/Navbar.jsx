import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
    
        <nav className='p-5 z-30 fixed flex bg-white items-center shadow-lg justify-between'>
            <NavLink to='/' className='font-bold text-purple-500 text-xl'>Grouping It !</NavLink>
            <ul className='flex flex-wrap flex-row items-center justify-end md:justify-evenly w-1/2 md:w-2/5'>
                <NavLink className='px-5 mx-0' to='/create-group'>Create Group</NavLink>
                <NavLink className='px-5 mx-0' to='/info'>Information</NavLink>
            </ul>
        </nav>
        
    )
}

export default Navbar
