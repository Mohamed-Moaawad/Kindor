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






//===================== get id in local ==========================

let products = JSON.parse(localStorage.getItem('productLocal'))
let productId = localStorage.getItem('productId') 

let detailsImg = document.getElementById('detailsImg')
let detailsText = document.getElementById('detailsText')

let productDetails = products.find((item) => item.id == productId)

detailsImg.innerHTML = `
    <i class="fa-solid fa-maximize" id="opneImg"></i>
    <img src="${productDetails.image}" alt="" id="img"> 

`

//=========== hover img ============

let img = document.getElementById('img')

img.onmouseover = function(){
    img.setAttribute('src', `${productDetails.image2}`)
}

img.onmouseout = function(){
    img.setAttribute('src', `${productDetails.image}`)
}


//========= opne img ==========

let imgPopUp = document.getElementById('imgPopup')

imgPopUp.innerHTML = `
    <i class="fa-solid fa-xmark" id="closeImg"></i>
    <img src="${productDetails.image}" alt="" id="bigImg">
    <div class="bigDiv">
    <div class="imgS one" id="smallOne"><img src="${productDetails.image}" alt=""></div>
    <div class="imgS tow" id="smallTow"><img src="${productDetails.image2}" alt=""></div>
    </div>

`

let smallOne = document.getElementById('smallOne')
let smallTow = document.getElementById('smallTow')
let bigImg = document.getElementById('bigImg')

smallOne.addEventListener('click', function(){
    bigImg.setAttribute('src', `${productDetails.image}`)
})
smallTow.addEventListener('click', function(){
    bigImg.setAttribute('src', `${productDetails.image2}`)
})


let opneImg = document.getElementById('opneImg')
let closeImg = document.getElementById('closeImg')
let popupDiv = document.getElementById('popupDiv')


opneImg.addEventListener('click', function(){
    if(popupDiv.style.top = '-100%'){
        popupDiv.style.top = '0'
    }
    if(popupDiv.style.left = '-100%'){
        popupDiv.style.left = '0%'
        
    }
})

closeImg.addEventListener('click', function(){
    popupDiv.style.left = '-100%'
})




detailsText.innerHTML = `
    <div class="stars">
        <i class="fa-regular fa-star" id="icon1"></i>
        <i class="fa-regular fa-star" id="icon2"></i>
        <i class="fa-regular fa-star" id="icon3"></i>
        <i class="fa-regular fa-star" id="icon4"></i>
        <i class="fa-regular fa-star" id="icon5"></i>
        <span>reviews</span>
    </div>
    <h2>${productDetails.title}</h2>
    <span>${productDetails.price}</span>
    <p>Looking for stylish clothes which will reflect your character and nature? Then have a look at our Men Cloth Store which will pleasantly surprise you with a wide range of modern .
    </p>
    <button id="addToCart">add to cart</button>
    <button id="btnbuy">buy it now</button>
    <div class="icons">
        <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="Balance">
            <i class="fa-solid fa-scale-unbalanced"></i>
        </div>
    </div>

`


//======== color icons ========

let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let icon5 = document.getElementById('icon5')

icon5.addEventListener('click', function(){
    icon5.style.color = 'goldenrod' 
    icon5.style.fontWeight = '800' 
})
icon4.addEventListener('click', function(){
    icon4.style.color = 'goldenrod' 
    icon4.style.fontWeight = '800' 
    icon5.style.color = 'goldenrod' 
    icon5.style.fontWeight = '800' 
})
icon3.addEventListener('click', function(){
    icon3.style.color = 'goldenrod' 
    icon3.style.fontWeight = '800' 
    icon4.style.color = 'goldenrod' 
    icon4.style.fontWeight = '800' 
    icon5.style.color = 'goldenrod' 
    icon5.style.fontWeight = '800' 
})
icon2.addEventListener('click', function(){
    icon2.style.color = 'goldenrod' 
    icon2.style.fontWeight = '800' 
    icon3.style.color = 'goldenrod' 
    icon3.style.fontWeight = '800' 
    icon4.style.color = 'goldenrod' 
    icon4.style.fontWeight = '800' 
    icon5.style.color = 'goldenrod' 
    icon5.style.fontWeight = '800' 
})
icon1.addEventListener('click', function(){
    icon1.style.color = 'goldenrod' 
    icon1.style.fontWeight = '800' 
    icon2.style.color = 'goldenrod' 
    icon2.style.fontWeight = '800' 
    icon3.style.color = 'goldenrod' 
    icon3.style.fontWeight = '800' 
    icon4.style.color = 'goldenrod' 
    icon4.style.fontWeight = '800' 
    icon5.style.color = 'goldenrod' 
    icon5.style.fontWeight = '800' 
})


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