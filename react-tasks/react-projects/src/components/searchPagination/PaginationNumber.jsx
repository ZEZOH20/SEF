import React from 'react'

const PaginationNumber = ({ countPages, currentPage, setCurrentPage }) => {

    return (
        <div className=' w-2/6 mx-auto mt-5 flex justify-between'>
            {
                [...Array(countPages)].map((_, index) => (
                    <button
                        className={`w-8 h-8 text-center cursor-pointer rounded-full font-semibold
                         ${currentPage == index + 1 ? `bg-yellow-600` : `border-2 text-white`}  `}
                        onClick={() => { setCurrentPage(index + 1) }}>

                        {index + 1}
                    </button>
                ))
            }
        </div>
    )
}

export default PaginationNumber