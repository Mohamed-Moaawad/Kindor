let imgBACK = [
    "images/Sign/1.jpg",
    "images/Sign/2.jpg",
    "images/Sign/3.jpg",
    "images/Sign/4.jpg",
    "images/Sign/5.jpg",
    "images/Sign/6.jpg",
    "images/Sign/7.jpg",
    "images/Sign/8.jpg",
];

let BODY = document.body;

let i = 0;

function loadimg() {
    if (i == imgBACK.length - 1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(function () {
        loadimg();
    }, 4000);
    BODY.style.cssText = `
            background:linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${imgBACK[i]});
            height: 100vh;
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            `;
}
loadimg();

//=============== Show and Hide =================

let btn = document.getElementById("hide");
let iconHide = document.getElementById("ichide");
let iconShow = document.getElementById("icshow");
let pass = document.getElementById("pass");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (btn.getAttribute("data-text") == "Show") {
        pass.setAttribute("type", "text");
        btn.setAttribute("data-text", "hide");
        iconShow.style.display = "block";
        iconHide.style.display = "none";
    } else {
        pass.setAttribute("type", "password");
        btn.setAttribute("data-text", "Show");
        iconHide.style.display = "block";
        iconShow.style.display = "none";
    }
});

//================== Sign in ===================

let username = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let btnSign = document.getElementById("btn-sign");
let pEorr = document.querySelector(".p-error");

btnSign.addEventListener("click", function (a) {
    a.preventDefault();
    if(username.value === "" &&
        pass.value === "" &&
        email.value === "" &&
        number.value === ""
        ){
            pEorr.innerHTML = 'Please enter your data'
            return;
        }else{
            pEorr.innerHTML = ''
        }
    
    if (
    username.value === "") {
    pEorr.innerHTML = 'Please enter your name'
    username.style.border = '1px solid red'
    return;
    }
    if(!email.value.includes('@') || !email.value.includes('.')){
        pEorr.innerHTML = 'Please enter a valid email address'
        email.style.border = '1px solid red'
        return;
    }
    // if(!email.value.includes('.')){
    //     pEorr.innerHTML = 'Please enter a valid email address'
    //     return;
    // }
    if(pass.value === ""){
        pEorr.innerHTML = 'Please enter your password.'
        pass.style.border = '1px solid red'
        return;
    }
    if(pass.value.length < 6){
        pEorr.innerHTML = 'The password is less than 6 digits'
        pass.style.border = '1px solid red'
        return;
    }
    
    else {
        pEorr.innerHTML = 'Saved successfully'
        pEorr.style.color = '#2bcf0b'
        localStorage.setItem("name", username.value);
        localStorage.setItem("password", pass.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("number", number.value);

        setTimeout(function () {
            window.location = "login.html ";
        }, 2000);
    }
});
pass.onkeyup = function(){
    if(pass.value.length >= 6){
        pass.style.border = '1px solid #4a84d1';
    } else{
        pass.style.border = '1px solid red';
    }
}


//============ label bottom focus ================

let input = document.querySelectorAll(".input");

input.forEach(( ele) =>{
        ele.onclick = function(){
            this.previousElementSibling.style.bottom = '65px'
        }
});








var loader = document.getElementById("onload");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})