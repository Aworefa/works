var btn= document.getElementById('menu-btn');
var nav= document.getElementById('menu');
btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

var card = document.getElementsByClassName('front')
let view = document.getElementById('card')
card.onbdlclick = over
function over(){
    view.classList.toggle('front')
    view.classList.toggle('back')

}
// document.getElementById('flip').addEventListener('click', flip);

// function flip() {
//     document.getElementById('card').style.display = 'hidden'
// }