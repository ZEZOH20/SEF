import React from 'react'

const TreeChildren = ({ children}) => {
  return (
    <div className=' w-1/2 mx-auto cursor-pointer '>
      <ul>
        {
          children && children.map((child) => {
            return <li>{child}</li>
          })
        }
      </ul>
    </div>
  )
}

export default TreeChildren


//mx-auto cursor-pointer bg-red-700

// absolute top-7 left-1/2 -translate-x-1/4 cursor-pointer