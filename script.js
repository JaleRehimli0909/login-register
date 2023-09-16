const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector('.menu-btn');
const hideMenuBtn = navbarMenu.querySelector('.close-btn');
const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const formPopup = document.querySelector(".form-popup");
const loginSignupLink = document.querySelectorAll(".form-box .button-link a");



// Show mabile menu
menuBtn.addEventListener('click', ()=>{
     navbarMenu.classList.toggle("show-menu")
});

// Hide mobile menu
hideMenuBtn.addEventListener('click', ()=>menuBtn.click());

// Show form popup
showPopupBtn.addEventListener('click', ()=>{
    document.body.classList.toggle("show-popup")
});

// Hide form popup
hidePopupBtn.addEventListener('click', ()=>showPopupBtn.click());

loginSignupLink.forEach(link=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(link.id)
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']('show-signup')

    })
})