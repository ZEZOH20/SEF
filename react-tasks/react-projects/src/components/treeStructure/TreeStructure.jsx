import React, { useState } from 'react'
import TreeParent from './TreeParent'

const TreeStructure = () => {

    return (
        <div className=' w-11/12 mx-auto'>
            <TreeParent
                children={
                    ['child1', <TreeParent children={['child1child1child1child1', 'child2', <TreeParent />]} />, 'child3', 'child1', 'child2 ', 'child3']} />
        </div>
    )
}

export default TreeStructure

// <FaPlus />
// <FaMinus /> 