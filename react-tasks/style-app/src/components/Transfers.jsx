import React, { useEffect, useState } from 'react'
import Transfer from './Transfer'
import { data } from './TransfersData'

const Transfers = () => {
    let counter = 1
    const [viewAll, setViewAll] = useState(false)
    const [data, setData] = new useState([])  //I used default [] because (myFunction) is async so the component maybe load before fetching the data

    const myFunction = async () => {
        try {
            const req = await fetch("https://dummyjson.com/products", { method: "get" }) //default method:get
            const json = await req.json()
            setData(json.products)
        } catch (error) {
            throw new Error("error in api")
        }
    }

    useEffect(() => {
        myFunction()
    }, [])// Empty dependency array ensures this runs only on component mount
    return (
        <div className={`bg-white rounded-lg w-72  grid grid-rows-${data.length * 2} gap-2 p-4`}>
            <h3 className="font-bold text-left text-blue-950">Your Transfers</h3>
            {
                data && data.map(transfer => {
                    let temp = (
                        <Transfer
                            // transfer['images'][0] , transfer.img
                            img={transfer['images'][0]}
                            title={transfer.title}
                            time={transfer.time}
                            price={transfer.price}
                            counter={counter++}
                            viewAll={viewAll}
                        />
                    );
                    return temp
                })
            }
            <button className={`row-start-${data.length * 2} text-indigo-800 text-xs font-semibold text-end`}
                onClick={() => { setViewAll(prev => !prev) }}> View all</button>
        </div>
    )
}

export default Transfers