import React, { useState, useEffect } from 'react'
import AccordionElement from './AccordianElement.jsx'
import { elements } from './data.js'

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const [multipleSelection, setMultipleSelection] = useState(false)

    const handelSingleSelection = (elementId) => {
        setSelected(elementId === selected ? null : elementId)
    }

    return (
        <div className=' w-screen h-screen'>
            <div className=' w-80 h-80 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {
                    elements.map((element, key) => {
                        return <AccordionElement
                            id={element.id}
                            title={element.title}
                            content={element.content}
                            selected={selected}
                            handelSingleSelection={handelSingleSelection}
                            multipleSelection={multipleSelection}
                        />
                    })
                }
                <button className={`rounded-md ${multipleSelection ? 'bg-red-600' : 'bg-green-600'} text-white text-xl font-semibold p-3 capitalize`}
                    onClick={() => { setMultipleSelection(prev => !prev) }}>
                    {multipleSelection ? "single" : "multiple"} selection
                </button>
            </div>
        </div>
    )
}

export default Accordion
