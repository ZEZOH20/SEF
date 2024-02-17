
"use strict";



//check user already login or not
if (authCheck()) {
    setTimeout(() => {
        window.location = '../index.html'
    })
}
//check user already login or not


let login = (e) => {
    e.preventDefault()
    // if remember me checked
    //email , password
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    //validate email and password
    return email === '' || password === '' ?
        alert('there is empty cells you should fill all data') :

        //check if email exist 
        !(email in registeredUsers) ? (
            alert('user doesn\'t register before'),
            //move to register page
            setTimeout(() => {
                window.location = '../register.html'
            }, 1000)
        ) : (registeredUsers[email].password !== password) ?
            alert('your password wrong') : (

                //add (auth) user from registerdUsers
                //add to session or local storage according to (remember me)
                (rememberMe()) ?
                    localStorage.setItem('auth', JSON.stringify(registeredUsers[email])) :
                    sessionStorage.setItem('auth', JSON.stringify(registeredUsers[email])),

                alert('successfuly login'),

                //move to index page
                setTimeout(() => {
                    window.location = '../index.html'
                }, 1000)
            )

}

//rememberMe
let rememberMe = () => document.getElementById('rememberMe').checked
//rememberMe

document.getElementById('loginBtn').addEventListener('click', login)

