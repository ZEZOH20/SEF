import React, { useEffect, useState } from 'react'
import Product from './Product'

export const Products = () => {
    const [products, setProducts] = new useState([]) //I used default [] because (myFunction) is async so the component 
    const fetchProducts = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products", { method: "get" })//default method:get
            const json = await res.json()
            setProducts(json.products)
        } catch (error) {
            new Error("wrong api")
        }

    }
    useEffect(() => {
        fetchProducts()
    }, [])// Empty dependency array ensures this runs only on component mount
    return (
        <div> 
              <h3>your Products</h3>
                {
                    products && products.map(product => {
                        let productsJsx = (
                            <Product id={product.id}
                                title={product.title}
                                price={product.price}
                                img={product["images"]['1']} />
                        );
                        return productsJsx
                    })
                }
   
        </div>
    )
}
