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


//==============  =================

let productsdom = document.querySelector('.content')

if(localStorage.getItem("addProduct")){
    let itmes = JSON.parse(localStorage.getItem("addProduct"))
    drawCartProdctsUI(itmes)
}


function drawCartProdctsUI(products){
    let productUI = products.map((item) =>{
        return `   
                    <table >
                        <tr class="trhead">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Delate</th>
                        </tr>
                        <tr>
                            <td><img src="${item.image}" alt="" ></td>
                            <td>${item.price}</td>
                            <td>
                                <div>
                                <span class="min">-</span>
                                <input type="text" class="Myinput" value="0">
                                <span class="plus">+</span>
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td><i class="fa-solid fa-trash-can" onclick="removeCart(${item.id})" id="delate"></i></td>
                        </tr>

                    </table>
        `
    });
    productsdom.innerHTML = productUI
    
}


function removeCart(id){
    if(localStorage.getItem("addProduct")){
        let itmes = JSON.parse(localStorage.getItem("addProduct"))

        let filterItems = itmes.filter((item) => item.id !== id)
        drawCartProdctsUI(filterItems)
        localStorage.setItem('addProduct', JSON.stringify(filterItems))
    }
}


//================= button min + plus =====================

let min = document.querySelector('.min')
let plus = document.querySelector('.plus')
let Myinput = document.querySelector('.Myinput')

let n = 0;

plus.addEventListener('click', function(){
    n++
    Myinput.value = n
})
min.addEventListener('click', function(){

    if(n > 1){
        n--
    Myinput.value = n
    }
    
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