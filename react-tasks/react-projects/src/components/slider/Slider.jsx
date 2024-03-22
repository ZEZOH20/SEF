import React, { useState } from 'react'
import { sliderData } from './data.js'
import { GrPrevious , GrNext } from "react-icons/gr";
import Track from './Track.jsx';
import Pagination from './Pagination.jsx';

const Slider = () => {
    const [indexOfTrack, setIndexOfTrack] = useState(0)
    const handelPrev = () => {
        setIndexOfTrack((indexOfTrack == 0) ? sliderData.length - 1 : indexOfTrack - 1)
    }
    const handelNext = () => {
        setIndexOfTrack((indexOfTrack == sliderData.length - 1) ? 0 : indexOfTrack + 1)
    }
    const handelPagination = (index) => {
        setIndexOfTrack(index)
    }
    return (
        <div className=' h-screen w-screen'>
            <div className='w-[500px] h-[300px] flex overflow-hidden 
            relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                <Track sliderData={sliderData}
                    indexOfTrack={indexOfTrack} />

                <button className=' absolute  top-1/2 -translate-y-1/2
                 text-white  text-3xl hover:bg-black/60 h-full transition-colors duration-1000'
                    onClick={handelPrev}><GrPrevious /></button>
                <button className=' absolute top-1/2 right-0 -translate-y-1/2
                 text-white text-3xl hover:bg-black/60 h-full transition-colors duration-1000'
                    onClick={handelNext}>
                    <GrNext /></button>

                <Pagination
                    length={sliderData.length}
                    indexOfTrack={indexOfTrack}
                    handelPagination={handelPagination} />

            </div>
        </div>
    )
}

export default Slider