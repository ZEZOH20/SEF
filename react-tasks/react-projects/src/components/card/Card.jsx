import React from 'react'
import { IoShareSocialOutline } from "react-icons/io5";


const Card = ({ product , ...other }) => {

    return (
        <div {...other} className='relative max-w-md mx-auto mt-36
         overflow-hidden rounded-2xl shadow-lg group'>
            <img src={product.images[0]} alt="" className=' transition-transform group-hover:scale-110 duration-100' />
            <div className=' absolute flex items-end inset-0
             text-white bg-gradient-to-t from-black/60 to-transparent'>
                <div className='p-4'>
                    <h1 className=' text-xl font-semibold'>{product.title}</h1>
                    <p>{product.category}</p>
                    <div className=' space-x-2'>
                        <button className=' p-3 bg-neutral-700/85 rounded-lg'>
                            <IoShareSocialOutline className=' text-2xl font-bold' />
                        </button>
                        <button className=' p-3 bg-neutral-700/85 rounded-lg'>
                            <IoShareSocialOutline className=' text-2xl font-bold' />
                        </button>
                        <button className=' p-3 bg-neutral-700/85 rounded-lg'>
                            <IoShareSocialOutline className=' text-2xl font-bold' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card