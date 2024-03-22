import React from 'react'
import { useEffect, useState } from 'react'
import PaginationCard from './PaginationCard'

const PaginationData = () => {
    const [dummyData, setDummyData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=0&skip=0')
            const json = await response.json()
            setDummyData(json.products)
            console.log(json.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='bg-[#111011] h-svh'>
            <div className=' w-11/12 mx-auto p-5'>
                <PaginationCard dummyData={dummyData} />
            </div>
        </div>
    )
}

export default PaginationData