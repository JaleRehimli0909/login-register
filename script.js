const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const formPopup = document.querySelector(".form-popup");
const loginSignupLink = document.querySelectorAll(".form-box .button-link a");

showPopupBtn.addEventListener('click', ()=>{
    document.body.classList.toggle("show-popup")
});

hidePopupBtn.addEventListener('click', ()=>showPopupBtn.click());

loginSignupLink.forEach(link=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(link.id)
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']('show-signup')

    })
})