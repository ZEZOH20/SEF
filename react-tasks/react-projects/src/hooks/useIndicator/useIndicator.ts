import { useState } from "react"

export const useIndicator = (length) => {

    const [indicator, setIndicator] = useState(0)

    const triggerIndicator = (entries) => { 
        entries.forEach(entry => {
            const id = entry.target.id
            const offset = id == length - 1 ? 4 : 0
            if (entry.isIntersecting) {
                console.log(entry.target)
                setIndicator(id / length * 100 + offset)

                //Animation
                //entry.target.classList.add('animate-class')
                // unObserver more start animation only once
                // observer.unobserve(entry.target)
            }
        })
    }
    const observer = new IntersectionObserver(triggerIndicator, { threshold: 0.5 }) //root by default body

    return { observer, indicator }
}