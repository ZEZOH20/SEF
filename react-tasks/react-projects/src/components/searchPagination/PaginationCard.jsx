import React, { useMemo, useState } from 'react'
import PaginationCardContent from './PaginationCardContent'
import PaginationNumber from './PaginationNumber'
import Search from '../shortComponents/search/Search'

const PaginationCard = ({ dummyData }) => {
    // last postsIndex first current
    const [currentPage, setCurrentPage] = useState(3)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const totalPosts = dummyData.length

    const lastPostsIndex = currentPage * postsPerPage
    const firstPostsIndex = lastPostsIndex - postsPerPage
    const currentPosts = dummyData.slice(firstPostsIndex, lastPostsIndex)

    //filter
    const [query, setQuery] = useState('')
    const filterdItems = useMemo(() => {
        return currentPosts.filter(item => {
            return item.title.toLowerCase().includes(query.toLocaleLowerCase())
        })
    }, [query, currentPosts])
    //filter

    return (
        <div className='flex flex-col justify-between items-center h-[650px]'>

            <Search setQuery={setQuery} />
            <div className=' grid lg:grid-cols-5 lg:gap-10 grid-cols-3 gap-2'>
                {filterdItems.length > 0 ? filterdItems.map((item) => (
                    <PaginationCardContent
                        image={item.images[0]}
                        title={item.title}
                        price={item.price}
                    />
                )) : <div className=' col-span-5 text-red-500 font-semibold text-4xl'>Not Found Any Item </div>
                }
            </div>
            <PaginationNumber countPages={Math.ceil(totalPosts / postsPerPage)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default PaginationCard
