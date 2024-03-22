import React, { useEffect, useState } from 'react'
import { usecreateHEX, usecreateRGB } from './utilites/useRandom'

const RandomColor = () => {
    const [choseSystem, setChosenSystem] = useState(false) // default: false-HEX true-RGB 
    const [color, setColor] = useState('#56431b')

    const generateRandom = () => {
        setColor(choseSystem ? usecreateRGB() : usecreateHEX())
    }
    return (
        <div style={{ backgroundColor: color }} className={`w-screen h-screen relative text-white font-semibold`}>
            <div className='flex absolute left-1/2 -translate-x-1/2 top-3.5 text-xl '>
                <button onClick={() => { setChosenSystem(false) }}
                    className='rounded-md p-3 uppercase bg-yellow-400'> hex</button>
                <button onClick={() => { setChosenSystem(true) }}
                    className='rounded-md p-3 ml-1 uppercase bg-red-400'>rgb</button>
                <button onClick={generateRandom}
                    className='rounded-md p-3 ml-1 capitalize bg-green-400'> generate random</button>
            </div>
            <p className=' absolute left-1/2 -translate-x-1/2 top-1/4 text-6xl capitalize '>
                <span className=' uppercase'>{choseSystem ? 'rgb' : 'hex'}</span> color
            </p>
            <p className=' absolute left-1/2 -translate-x-1/2 top-1/2 text-8xl uppercase '>{color}</p>
        </div>
    )
}

export default RandomColor

