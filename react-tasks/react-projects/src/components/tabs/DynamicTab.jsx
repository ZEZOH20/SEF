import React from 'react'
import Tab from './Tab'
import { NavLink, Outlet } from 'react-router-dom'
const DynamicTab = () => {
  return (
    <div>
      {
        tabs.map((data, index) => {
          { console.log(data) }
          return <NavLink key={index} to={`/${index + 1}`}>
            {data.title}
          </NavLink>
        })
      }
      <Outlet />
    </div>
  )
}

export default DynamicTab

const tabs = [
  { title: 'tab1', content: 'content1' },
  { title: 'tab2', content: 'content2' },
  { title: 'tab3', content: 'content3' },
]


// return <Tab key={index} {...data} />