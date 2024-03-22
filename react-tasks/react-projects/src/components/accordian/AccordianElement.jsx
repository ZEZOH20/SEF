import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
const AccordionElement = (props) => {

    const { title, content, id, selected, handelSingleSelection, multipleSelection } = props
    const [selectItem, setSelectItem] = useState(false)

    const handelClickEvent = () => {
        multipleSelection ? handelMultipleSelection() : handelSingleSelection(id)
    }
    const handelMultipleSelection = () => {
        setSelectItem(prev => !prev)
    }

    const condition = multipleSelection ? selectItem : selected === id

    return (
        <div id={id} onClick={handelClickEvent}
            className=' p-4 mb-2 grid grid-cols-2 bg-blue-600 text-white cursor-pointer'>
            <h2 className=' text-xl capitalize'>{title}</h2>
            <div className=' justify-self-end self-center '><FaPlus /></div>
            {condition && <div className=' col-span-2 mt-2 text-center w-11/12'>{content}</div>}
        </div>
    )
}

export default AccordionElement


