import React, { forwardRef } from 'react'

const ScrollIndicatorView = ({ indicator }, myRef) => {
    return (
        <>
            <div className={`fixed h-3 bg-black rounded-r-full transition-transform duration-1000`} style={{ width: `${indicator}%` }}></div>
            {
                myRef.map((refItem, index) => {
                    let color = {
                        red: Math.floor(Math.random() * 254),
                        green: Math.floor(Math.random() * 254),
                        blue: Math.floor(Math.random() * 254),
                    }
                    return <div ref={refItem} id={index} className='  p-72 text-center text-white text-6xl'
                        style={{ backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }}>
                        <h1>ScrollIndicator</h1>
                    </div>
                })
            }
        </>
    )
}

export default forwardRef(ScrollIndicatorView)