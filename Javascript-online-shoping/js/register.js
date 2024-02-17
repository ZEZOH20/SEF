import User from "./exported/user.js";


//check user already login or not
if (authCheck()) {
    setTimeout(() => {
        window.location = '../index.html'
    })
}
//check user already login or not

let register = (e) => {
    //submit btn preventDefault page refresh
    e.preventDefault()
    //firstName , lastName , email , password
    let fName = document.getElementById('first-name').value
    let lName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    //validate
    return fName === '' || lName === '' || email === '' || password === '' ?
        alert('there is empty cells you should fill all data') :

        //check if user email already exist 
        email in registeredUsers ?
            alert('email already exist') : (

                registeredUsers[email] = new User(fName, lName, email, password),

                //set {registeredUsers} to localStorage
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers)),
                console.log('successfuly registered'),

                //move to login page
                setTimeout(() => {
                    window.location = '../login.html'
                }, 1000)
            )


}

document.getElementById('create-account').addEventListener('click', register) 