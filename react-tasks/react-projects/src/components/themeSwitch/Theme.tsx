import React, { useEffect, useState } from 'react'

const Theme = ({ props }) => {
    const { state, dispatch } = props
    const handelClick = () => {
        dispatch({type : 'switchMode'})
    }
 
    return (
        <div style={{ backgroundColor: state.mainColor }}>
            <div className='w-11/12 mx-auto'>
                <div className='w-full h-screen grid lg:grid-cols-2 items-center lg:place-items-center '>
                    <div className='flex flex-col items-center'>

                        <h1 className=' text-4xl text-white font-semibold capitalize' style={{
                            color: state.secondColor
                        }}>hello word !</h1>

                        <button onClick={handelClick} className=' mt-5 mr-4 p-3 bg-white text-xl font-semibold rounded-md'
                            style={{
                                backgroundColor: state.secondColor,
                                color: state.mainColor
                            }}>Change Theme</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme
