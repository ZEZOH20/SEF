
import React, { useEffect, useRef, useState } from 'react'
import ScrollIndicatorView from './ScrollIndicatorView'
import { useIndicator } from '../../hooks/useIndicator/useIndicator';


const ScrollIndicator = ({ elementsLength }) => {

    const { observer, indicator } = useIndicator(elementsLength)

    const myRef = Array.from({ length: elementsLength }, () => useRef(null));

    useEffect(() => {
        myRef.map((ref) => {
            observer.observe(ref.current)
        })
        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <ScrollIndicatorView indicator={indicator} ref={myRef} />
    )
}

export default ScrollIndicator


// const ScrollIndicator = ({ elementsLength }) => {

//     const onIntersection = (entries) => { //should be in hook
//         entries.forEach(entry => {
//             const id = entry.target.id
//             const offset = id == elementsLength - 1 ? 4 : 0
//             if (entry.isIntersecting) {
//                 setIndicator(id / elementsLength * 100 + offset)
//                 //unObserver more start animation only once
//                 // observer.unobserve(entry.target)
//             }
//         })
//     }
//     const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 }) //root by default body

//     const myRef = Array.from({ length: elementsLength }, () => useRef(null));
//     const [indicator, setIndicator] = useState(0)

//     useEffect(() => {
//         myRef.map((ref) => {
//             observer.observe(ref.current)
//         })
//         return () => {
//             observer.disconnect()
//         }
//     }, [onIntersection])

//     return (
//         <ScrollIndicatorView indicator={indicator} ref={myRef} />
//     )
// }

// export default ScrollIndicator




// const ScrollIndicator = ({ elementsLength }) => {

//     const { observer, startIndicator, indicator } = useIndicator(elementsLength)

//     const myRef = Array.from({ length: elementsLength }, () => useRef(null));
//     //const [indicator, setIndicator] = useState(0)

//     useEffect(() => {
//         myRef.map((ref) => {
//             observer.observe(ref.current)
//         })
//         return () => {
//             observer.disconnect()
//         }
//     }, [startIndicator])

//     return (
//         <ScrollIndicatorView indicator={indicator} ref={myRef} />
//     )
// }

// export default ScrollIndicator