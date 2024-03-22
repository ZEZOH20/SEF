import React from 'react'

const Pagination = ({length ,indexOfTrack, handelPagination}) => {

    return (
        <div className=' w-2/12 absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-evenly'>
            {
                [...Array(length)].map((_, index) => {
                    return <button key={index}
                        className={` rounded-full w-3 h-3 
                ${index == indexOfTrack ? 'bg-white' : 'bg-black/55'}`}
                        onClick={() => { handelPagination(index) }}
                    />
                })
            }
        </div>
    )
}

export default Pagination