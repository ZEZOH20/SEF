import React, { useState } from 'react'
import { setLocalStorage } from './setLocalStorage'

const buttonNames = ['set', 'get', 'remove']


const TestLocalStorage = () => {
    const [input, setInput] = useState('')
    const { setItem, getItem, removeItem } = setLocalStorage('key')
    const handelClick = (e) => {
        switch (e.target.id) {
            case 'set':
                setItem(input)
                break;
            case 'get':
                console.log(getItem())
                break;
            case 'remove':
                removeItem()
        }
    }
    return (
        <div className=' bg-[#1b191b] h-screen'>
            <div className=' w-1/2 relative top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <h1 className='text-4xl text-white font-bold mb-5'>uselocalStorage</h1>
                <input className=' w-full p-4 rounded-md bg-[#2a282a] text-white/90' type="text" onChange={(e) => { setInput(e.target.value) }} />
                <div className=' w-1/2 mt-3 flex justify-between items-center'>
                    {
                        buttonNames.map((name) => {
                            return <button
                                id={name}
                                disabled={input == '' && name == 'set' ? true : false}
                                className=' w-24 p-3 rounded-md capitalize text-xl font-semibold bg-[#e6bf68] text-black/90 hover:bg-[#e6bf68]/80 disabled:bg-[#e6bf68]/30'
                                onClick={handelClick}
                            >{name}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TestLocalStorage

// set get remove