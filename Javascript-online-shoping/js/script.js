
//*******global

//..all products
let products = [
    {
        id: 1,
        name: 'Ahmed',
        category: 'accessories',
        price: 20
    },
    {
        id: 2,
        name: 'waled',
        category: 'phones',
        price: 5
    },
    {
        id: 3,
        name: 'fares',
        category: 'phones',
        price: 5
    },
];
//..all products

//..auth
//get {registeredUsers} from localStorage
let registeredUsers =
    localStorage.getItem('registeredUsers') ?
        JSON.parse(localStorage.getItem('registeredUsers')) : {}


function authCheck() {
    //check if auth exist 
    let auth = localStorage.getItem('auth') ?
        JSON.parse(localStorage.getItem('auth')) :
        sessionStorage.getItem('auth') ?
            JSON.parse(sessionStorage.getItem('auth')) : false

    return auth
}

function logout() {
    //if auth in localStorage remove it 
    //else if in sessionStorage remove it 
    if (localStorage.getItem('auth')) {
        localStorage.removeItem('auth')

    } else if (sessionStorage.getItem('auth')) {
        sessionStorage.removeItem('auth')
    }
}
//..auth


//if auth do something on page style
if (authCheck()) {
    updateNavbar()

}

function updateNavbar() {
    //remove login && register from navbar
    let navList = document.querySelectorAll("#nav-content li")
    navList[0].style.display = 'none'
    navList[1].style.display = 'none'
    navList[2].classList.remove('d-none')
    //remove login && register from navbar
}


//..cart
// add into cart
function addToCart(event, id) {

    console.log(id)
    if (authCheck()) {
        let authUser = registeredUsers[authCheck().email]
        // get product by id 
        let product = products.find(p => p.id == id)

        let existIntoCart = authUser.cart.find(p => p.id == id)
        console.log(existIntoCart)
        if (existIntoCart) {
            console.log('here')
            //remove from cart
            authUser.cart.splice(existIntoCart, 1)
            //change btn into add
            event.target.classList.remove('btn-danger')
            event.target.innerHTML = 'Add to cart'

        } else {
            // add into registerUser cart of currentlelly login user 
            authUser.cart.push(product)
            //change btn into remove
            event.target.classList.add('btn-danger')
            event.target.innerHTML = 'Remove'
        }
        //update localStorage 
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))

    } else {
        setTimeout(() => {
            window.location = 'login.html'
        }, 1000)
    }
}
//..cart

let test = (event, id) => {
    console.log(event)
}



//*********global

//  //count number of products inside cart categories by id
//  authUser.cartCount[id] += 1
//  //count total number of products inside cart
//  authUser.cartCount['total'] += 1
//  // calc total price
//  authUser.cartCount['totalPrice'] += +(product.price)