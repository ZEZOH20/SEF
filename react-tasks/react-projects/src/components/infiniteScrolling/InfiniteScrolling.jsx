import React, { useState, useEffect, useRef } from 'react'
import { elements } from '../accordian/data'
import Card from '../card/Card'
import Spinner from '../Spinner'

const InfiniteScrolling = () => {

    const [products, setProducts] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(0)
    const elementRef = useRef(null)

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`)
            const json = await response.json()
            if (json.products.length == 0) {
                setHasMore(false)
            } else {
                setProducts(prev => [...prev, ...json.products])
                setPage(prev => prev + 1)
            }

        } catch (e) {
            console.log(e)
        }
    }
    const onIntersection = (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting && hasMore) {
            fetchProducts()
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection)
        if (observer && elementRef.current) {
            observer.observe(elementRef.current)
        }

        return (() => {
            observer.disconnect()
        })
    }, [products])

    return (
        <div className=' bg-blue-950'>
            <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-1'>
                {products && products.map((product, index) => {
                    return <Card key={index} product={product} />
                })}
            </div>

            {hasMore &&
                <div ref={elementRef} className=' flex justify-center my-5'>
                    <Spinner />
                </div>
            }
        </div>
    )
}

export default InfiniteScrolling

// How to implement infinite scrolling
// intersection-observer api || react infinite libirary || react-query v3 || build form scratch (Brute Force code)
//note : intersecting meaning is in view
// note : entries is all IntersectionObserver observe