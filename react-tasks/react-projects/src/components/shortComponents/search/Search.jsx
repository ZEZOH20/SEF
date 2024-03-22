import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
const Search = ({ setQuery }) => {
    return (
        <>
            <form action="" className='w-80 h-14 relative'>
                <input type='text' onChange={(e) => { setQuery(prev => e.target.value) }} className='w-full h-full rounded-l-full bg-white text-lg p-5 focus:outline-none shadow-md border-2 border-[#f7f7f7] ' placeholder='Search' />
                <button className='h-14 w-12 absolute top-1/2 -translate-y-1/2 bg-white rounded-r-full text-[#9ca3af] shadow-md  '><BiSearchAlt className='mx-auto text-2xl' /></button>
            </form>
        </>
    )
}

export default Search