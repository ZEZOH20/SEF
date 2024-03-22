import './App.css'
import Accordion from './components/accordian/Accordian'
import InfiniteScrolling from './components/infiniteScrolling/InfiniteScrolling'
import QrGenerator from './components/qrGenerator/QrGenerator'
import RandomColor from './components/randomColor/RandomColor'
import ScrollIndicator from './components/scrollIndicator/ScrollIndicator'
import Slider from './components/slider/Slider'
import StarRating from './components/starRating/StarRating'
import ThemeSwitch from './components/themeSwitch/ThemeSwitch'
import TreeStructure from './components/treeStructure/TreeStructure'
import TestLocalStorage from './hooks/setLocalStorage/TestLocalStorage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DynamicTab from './components/tabs/DynamicTab'
import Tab from './components/tabs/Tab'
import SearchPagination from './components/searchPagination/SearchPagination'


const router = createBrowserRouter([
  {
    path: '/',
    element: <DynamicTab />,
    errorElement: <div>Not found 404</div>,
    children: [{
      path: '/:tabId',
      element: <Tab />, // missing data
    }]
  }
])

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars ={10} /> */}
      {/* <Slider /> */}
      {/* <InfiniteScrolling/> */}
      {/* <TreeStructure/> */}
      {/* <QrGenerator/> */}
      {/* <TestLocalStorage/> */}
      {/* <ThemeSwitch /> */}
      {/* <ScrollIndicator elementsLength={30} /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <SearchPagination/> */}

    </>
  )
}

export default App

//pagination && infinte-scrolling - intersection Observer API - custom - dummyjson - React-Query v3  1:23 from 9:36

/*
 You Need to learn
1- type script ( extend - interface - generic )
2- redux
3- apply on (reducer - context - callback - ..)
4- Design patterns
5- react error handeling 
 - animation
*/

/*
  fetch api using axios
  react error handeling 
  pagination   (ok)
  animation
  search (filter , useMemo) (ok)

  video and start on hover
*/
