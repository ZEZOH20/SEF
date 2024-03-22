import React from 'react'

const PaginationCardContent = (props) => {
    const { image, title, price } = props
    return (
        <div className='  w-40 h-52 text-sm bg-white rounded-lg'>
            <div className=' w-11/12 h-full mx-auto p-3 flex flex-col justify-between'>
                <img className=' mx-auto w-28 h-28 rounded-md' src={image} />
                <div>
                    <h4 className=' font-bold capitalize'>{title}</h4>
                    <span className=' font-semibold'>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default PaginationCardContent