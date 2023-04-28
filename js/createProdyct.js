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

//=========== loader page ===========

var loader = document.getElementById("onload");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})


//============ form ==============

let creatName = document.getElementById('create-name')
let creatdesc = document.getElementById('create-desc')
let size = document.getElementById('size')
let form = document.getElementById('form')
// let form = document.getElementById('btnCreate')


size.addEventListener('change', function(e){
    size = e.target.value;
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem('productLocal'))
    let nameValue = creatName.value;
    let descValue = creatdesc.value;

    let obj = {
        id : allProducts ? allProducts.length + 1 : 1,
        title: nameValue,
        price: descValue,
        qty: 1
    }

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    // localStorage.setItem('productLocal', JSON.stringify(newProducts))
    localStorage.setItem('productLocal', JSON.stringify(newProducts))
})