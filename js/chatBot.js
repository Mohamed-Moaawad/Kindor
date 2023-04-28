//============== login local ===============

let signUser = document.getElementById('user-sign');
let logUser = document.getElementById('user-logn');
let h5Name = document.getElementById('name-user');
let h5Name2 = document.getElementById('name-user2');
let emailUser = document.getElementById('email-user');


if(localStorage.getItem('name')){
    signUser.style.display = 'none'
    h5Name.innerHTML = `${localStorage.getItem('name')}`
    h5Name2.innerHTML = `${localStorage.getItem('name')}`
    emailUser.innerHTML = `${localStorage.getItem('email')}`

}else{
    logUser.style.display = 'none'
}


///////////////////

let onData = document.querySelector('.img-user')
let userData = document.querySelector('.user-data')
let logout = document.querySelector('.logout')


onData.addEventListener('click', function(){
    if(userData.style.display == 'block'){
        userData.style.display = 'none'
    }else{
        userData.style.display = 'block'
    }
})

logout.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(function(){
        window.location = 'sign-up.html'
    },2000)
})


//============== menu toggel ================

let spanOne = document.querySelector('.spnone')
let spantow = document.querySelector('.spntow')
let menuDiv = document.getElementById('menu_icon')
let mobileNav = document.querySelector('.mobile-screen')

menuDiv.addEventListener('click', function(){
    if(mobileNav.style.left === "-100%"){
        mobileNav.style.left = '0%'
    }else{
        mobileNav.style.left = '-100%'
    }

    if(mobileNav.style.left === '0%'){
        spantow.style.boxShadow = 'none'
        spanOne.style.transformOrigin = 'right bottom'
        spanOne.style.transform = 'skewY(-28deg)'
        spantow.style.transform = 'skewY(28deg)'
        spantow.style.transformOrigin = 'right top'
    }else{
        spantow.style.boxShadow = ' 0px -13px 0px var(--min-color)'
        spanOne.style.transformOrigin = 'none'
        spanOne.style.transform = 'none'
        spantow.style.transform = 'none'
        spantow.style.transformOrigin = 'none'
    }

})

// ============= IconSearch =============
let iconSearch = document.getElementById('IconSearch')
let inputSearch = document.getElementById('searchInupt')
let navBar = document.getElementById('navbar')


IconSearch.addEventListener('click', function(){
    if(inputSearch.style.display == 'block'){
        inputSearch.style.display = 'none'
        

    }else{
        inputSearch.style.display = 'block'
        
    }
}) 



//==================== opne and close menu-shop ============================


let opnMenu = document.getElementById('opnemenu');
let closeMenu = document.getElementById('iconClose');
let menuShop = document.querySelector('.menu-shop');

opnMenu.addEventListener('click', function(){
    menuShop.style.right = '0'
})

closeMenu.addEventListener('click', function(){
    menuShop.style.right = '-100%'
})




//=========================== chat-Bot ===================================



let form = document.getElementById("form");
let chat = document.getElementById("chat-body");
let msg = document.getElementById("message");

async function getBot() {
    const responsText = await fetch("bot.json");
    const data = await responsText.json();

    form.onsubmit = (e) => {
        e.preventDefault();
        
        let msge = msg.value.trim().toLowerCase();

        // let inputmessage
        if (msge === ""){
            alert("please insert Value");
        } else{

            data.forEach(answer => {

                if(msge === answer.my_msg) {
                chat.innerHTML += `<p class="msg">${answer.my_msg}</p>`;
                setTimeout(() =>{
                    chat.innerHTML += `<p class="answer">${answer.bot_answer}</p>`;
                }, 1000)
            }
            
            });

        
        }
        msg.value = ""
    }
}

getBot()


/////////// opne body ////////////

let iconBody = document.getElementById('opne-body')

iconBody.addEventListener('click', function(){
    if(chat.style.height = '550px'){
        chat.style.height = '100px'
    }else {
        chat.style.height = '550px'
    }})


//============ QR Code =========

let qrCode = document.getElementById("qrCode")
let colseQR = document.getElementById("colseQR")
let qr = document.querySelector(".qr")

qrCode.addEventListener('click', function(){
    qr.style.display = 'flex'
})

colseQR.addEventListener('click', function(){
    qr.style.display = 'none'
})



//========== start btn-up =================

let btnUP = document.querySelector('.btn-up')

window.onscroll = function(){
    if(scrollY >= 500){
        btnUP.style.display = 'flex'
    }else{
        btnUP.style.display = 'none'
    }
}

btnUP.addEventListener('click', function(){
    scroll({
        top:0,
        behavior: 'smooth'
    })
})












    var loader = document.getElementById("onload");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})