
//products 


export const displayProducts = function (products) {
    let pr = document.getElementById('products')
    pr.innerHTML = ''
    products.forEach(function (product) {
        pr.innerHTML += `
        <!-- card -->
        <div class="col-8 col-md-6 col-lg-4 mx-auto mx-md-0" id='${product.id}'>
            <div class="card">
                <img class="card-img-top" src="images/600x400.png" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text mb-0 fw-semibold"><span class="fs-5"
                            style="color:var(--bs-gray-dark);">Price: </span>${product.price}&dollar;</p>
                    <p class="card-text fw-semibold"><span class="fs-5" style="color:var(--bs-gray-dark);">Category:
                        </span>${product.category}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary p-2 fw-semibold" onclick='addToCart(event,${product.id})'>Add to cart</button>
                        <i class="fa-regular fa-heart align-self-center fs-5" style="color: #d10000;"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- card -->
        `
    })
}

