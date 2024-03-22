import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";

const StarRating = ({noOfStars = 5}) => {
    const [starHover, setStarHover] = useState(null)
    const [selectStar, setSelectStar] = useState(null)

    const handelSelectStar = (index) => {
        setSelectStar(index == selectStar ? null : index)
    }

    return (
        <div className=' w-40 flex mx-auto'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    //condition1 hover star or unHover
                    const condition1 = index <= starHover && starHover != null
                    //condition2 select star
                    const condition2 = index <= selectStar && selectStar != null
                    return <FaStar 
                        onMouseEnter={() => { setStarHover(index) }}
                        onMouseLeave={() => { setStarHover(null) }}
                        onClick={() => { handelSelectStar(index) }}
                        key={index}
                        className={` text-3xl ${(condition1 || condition2) && ' text-yellow-400'} `}
                    />
                })
            }

        </div>
    )
}

export default StarRating
