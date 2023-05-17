
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
});

// remove-add slider
var elements = document.querySelectorAll('.carousel-item')
var bg = document.querySelector('.main-background');
console.log(elements)
window.addEventListener('resize' , function(){
    console.log(window.innerWidth)
    elements.forEach(function(e){
        if(this.window.innerWidth < 1200){
            e.classList.remove('carousel-item')
        }else{
            e.classList.add('carousel-item')
        }
    })
})
window.addEventListener('load' , function(){
    console.log(window.innerWidth)
    elements.forEach(function(e){
        if(this.window.innerWidth < 1200){
            e.classList.remove('carousel-item')
        }else{
            e.classList.add('carousel-item')
        }
    })
})
// remove-add slider



