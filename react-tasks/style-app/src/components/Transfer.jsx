import React, { useEffect, useState } from 'react'

const Transfer = (props) => {
    const { img, title, time, price, counter, viewAll } = props

    return (
        <section className={`grid grid-cols-6 ${counter > 3 && !viewAll ? 'hidden' : ''}`} >
            <div className=" mx-auto">
                <img className='w-8 rounded-full' src={img} alt="" />
            </div>
            <div className="col-span-4 text-start text-sm">
                <h5 className="font-medium text-blue-950">{title}</h5>
                <div className="text-xs text-slate-500">{time}</div>
            </div>
            <div className="">
                <span className="bg-green-200 text-green-500 font-bold rounded-md text-xs p-1" >{price}</span>
            </div>
        </section>

    )
}

export default Transfer