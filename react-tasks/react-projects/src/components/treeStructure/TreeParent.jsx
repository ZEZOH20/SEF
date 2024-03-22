import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import TreeChildren from './TreeChildren';

const TreeParent = ({children = null}) => {
    const [expand, setExpand] = useState(false)
    const handelClick = () => {
        setExpand(prev => !prev)
    }
    return (
        <div className=' w-20 relative '>
            <button className='w-full flex justify-between items-center font-bold text-xl' onClick={handelClick}>
                <span>title</span>
                {expand ? <FaMinus /> : <FaPlus />}
            </button>
            {expand &&
                <TreeChildren children={children}/>}
        </div>

    )
}

export default TreeParent