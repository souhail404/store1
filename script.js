const carticon = document.getElementById('cart-icon');
const divs = document.getElementById('divs');
const cart = document.getElementById('cart-bar');
const menu = document.getElementById('menu-bar');

carticon.addEventListener('click' , ()=>{
    cart.classList.toggle('active');
    menu.classList.remove('active');
    carticon.classList.toggle('active');
})

divs.addEventListener('click' , ()=>{
    menu.classList.toggle('active');
    cart.classList.remove('active');
    divs.classList.toggle('active');
})