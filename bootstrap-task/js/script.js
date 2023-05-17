

//    var allProducts = document.querySelectorAll(".list  li")
//    var content = document.querySelector("#content")
//    var btn = document.querySelector("#btn1")
//    var totalPrice = 0


//    allProducts.forEach( function (item){
//      item.onclick = function (){

//          totalPrice +=   +(item.getAttribute("price"))
//          content.innerHTML  +=  item.textContent + " "

//          if ( content.innerHTML != ""){
//             btn.style.display = "block"
//             btn.style.color = "white"
//             btn.style.backgroundColor = "green"
//             btn.style.width = "200px"
//             btn.style.height = "45px"
//          }
//      }
//    })

//    btn.onclick = function (){
//     console.log(totalPrice)
//    }



var allButtons = document.querySelectorAll("#button")
var content = document.querySelector("#content")
allButtons.forEach(function(item){
    console.log(item)
    item.onclick = function(){
        totalPrice = Number(content.textContent)
        totalPrice += Number(item.getAttribute('price'))
        content.innerHTML = totalPrice 
        console.log(totalPrice)
    }
})



