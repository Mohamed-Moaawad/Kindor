let imgBACK = [
    'images/Sign/4.jpg',
    'images/Sign/8.jpg',
    'images/Sign/2.jpg',
    'images/Sign/9.jpg',
    'images/Sign/10.jpg',
    'images/Sign/11.jpg',
    'images/Sign/1.jpg',
    'images/Sign/12.jpg',
    'images/Sign/13.jpg',
    'images/Sign/14.jpg',
    'images/Sign/15.jpg',
]

let BODY = document.body;

let i = 0;

function loadimg(){
    if(i == imgBACK.length -1){
        i = 0;
    }else{
        i++;
    }

    setTimeout(function(){
        loadimg()
    },4000)
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
loadimg()


//=========== show and hide in pass ===============

let iconShow = document.getElementById('icshow');
let iconHide = document.getElementById('ichide');
let btn = document.getElementById('hide');
let pass = document.getElementById('pass');


btn.addEventListener('click', function(e){
    e.preventDefault();
    if(btn.getAttribute('data-text') == "Show"){
        pass.setAttribute('type', 'text')
        btn.setAttribute('data-text', 'hide')
        iconShow.style.display = 'block'
        iconHide.style.display = 'none'
    }else{
        pass.setAttribute('type', 'password')
        btn.setAttribute('data-text', 'Show')
        iconHide.style.display = 'block'
        iconShow.style.display = 'none'
    }
})

//============== login local ===============

let email = document.getElementById('email');
let btnLogin = document.getElementById('BTNlogin')

let getEmail = localStorage.getItem('email')
let getPass = localStorage.getItem('password')
let pEorr = document.querySelector(".p-error");

btnLogin.addEventListener('click', function(ee){
    ee.preventDefault()
    if(!email.value.includes('@') || !email.value.includes('.')){
        pEorr.innerHTML = 'Please enter a valid email address'
        email.style.border = '1px solid red'
        return;
    }
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
    else{
    if((getEmail && getEmail == email.value) && (getPass && getPass == pass.value)){
        pEorr.innerHTML = 'Log in successfully'
        pEorr.style.color = '#2bcf0b'
        setTimeout(function(){
            window.location = 'index.html'
        },2000)
    }else{
        pEorr.innerHTML = 'The data is invalid'
    }
}
})


//

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