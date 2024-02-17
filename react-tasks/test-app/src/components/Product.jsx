import React from 'react'

const Product = (props) => {
    const { id, price, title, img } = props

    return (
        <div>

            <div>
                <div><img src={img} /></div>
                <div>{title}</div>
                <div> <span>Yesterday: </span>{id}</div>
            </div>
            <div> {price}</div>

        </div>
    )
}

export default Product