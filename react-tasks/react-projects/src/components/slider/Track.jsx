import React from 'react'

const Track = ({ sliderData, indexOfTrack }) => {
    return (
        <>
            {
                //flex  translate overflow-hidden
                sliderData.map((track, index) => {
                    return <img key={index} src={track.url} alt=""
                        className=' w-full h-full transform-translate duration-1000 '
                        style={{ translate: `${-100 * indexOfTrack}%` }} />

                })
            }
        </>
    )
}

export default Track