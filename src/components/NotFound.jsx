import React from 'react'
import { useHistory } from 'react-router'
import imgNotFound from '../assets/PNG/404.png'

const NotFound = () => {

    const history = useHistory()

    setTimeout(() => {
        history.push('/')
    },3000)

    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <img className='w-2/5' src={imgNotFound} alt=""/>
            <h1 className='text-4xl font-bold my-5 text-gray-700'>Woops, Sorry This Page Is Not Found</h1>
            <p className='text-xl font-semibol my-2 text-gray-700'>you will redirect to home...</p>
        </div>
    )
}

export default NotFound
