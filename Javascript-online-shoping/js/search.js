//import-export

import {displayProducts } from "./exported/products.js"

// search-by
let searchBy = document.getElementById('search-by')
//search-input
let searchItem = document.getElementById('search-item')


//search

searchItem.addEventListener('keyup', function () {
    //get search by name or category
    let searchByValue = searchBy.value
    //create regualer expression contain variable
    var re = new RegExp(`^${searchItem.value.toLowerCase()}.*`, "g");

    //search about the products that match expression
    var afterSearch = products.filter((product) => {
        //product match(regaiuler expression) by name or category
        if (product[searchByValue].toLowerCase().match(re)) {
            return product
        }
    })
    // console.log(afterSearch)
    //show filltered products
    displayProducts(afterSearch)
})


//search


//problem(1): 