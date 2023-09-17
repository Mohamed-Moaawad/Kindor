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

//============= top-and-bottom links-menu ===============

let iconOpneLinks1 = document.querySelector('.opneLinks1')
let iconOpneLinks2 = document.querySelector('.opneLinks2')
let divLink1 = document.querySelector('.link1')
let divLink2 = document.querySelector('.link2')

iconOpneLinks1.addEventListener('click', function(){
    if(divLink1.style.height != '70px' ){
        divLink1.style.height = '70px' 
        iconOpneLinks1.classList.remove('fa-angle-right')
        iconOpneLinks1.classList.add('fa-angle-down')
    }else{
        divLink1.style.height = '350px' 
        iconOpneLinks1.classList.remove('fa-angle-down')
        iconOpneLinks1.classList.add('fa-angle-right')
    }
})

iconOpneLinks2.addEventListener('click', function(){
    if(divLink2.style.height != '70px' ){
        divLink2.style.height = '70px' 
        iconOpneLinks2.classList.remove('fa-angle-right')
        iconOpneLinks2.classList.add('fa-angle-down')
    }else{
        divLink2.style.height = '220px' 
        iconOpneLinks2.classList.remove('fa-angle-down')
        iconOpneLinks2.classList.add('fa-angle-right')
    }
})

//=============== Create Products with =================

let products = [
    {
        id:1,
        image:'images/klimt_kiss_hoodie_1_720x.jpg' ,
        image2:'images/klimt_kiss_hoodie_2_720x.jpg' ,
        title: 'Amino Aloe Gentle Cleanser',
        price: '$1,600.00',
        del: '$1.700.00',
        des: '-25%',
        qty: 1
    },
    {
        id:2,
        image:'images/baseball_style_t_shirt_1_720x.jpg' ,
        image2:'images/baseball_style_t_shirt_2_720x.jpg' ,
        title: 'Baseball Style T Shirt',
        price: '$29.00',
        des: '-10%',
        qty: 1
    },
    {
        id:3,
        image:'images/basic_chenille_high_neck_sweater_1_720x.jpg' ,
        image2:'images/basic_chenille_high_neck_sweater_2_720x.jpg' ,
        title: 'Basic Chenille High Neck',
        price: '$210.00',
        del: '$280.00',
        des: '-15%',
        qty: 1
    },
    {
        id:4,
        image:'images/black_backpack_1_720x.jpg' ,
        image2:'images/black_backpack_2_720x.jpg' ,
        title: 'Black Backpack',
        price: '$1,999.00',
        des: '-5%',
        qty: 1
    },
    {
        id:5,
        image:'images/jacquard_bomber_jacket_1_720x.jpg' ,
        image2:'images/jacquard_bomber_jacket_2_720x.jpg' ,
        title: 'Bomber Jacket',
        price: '$100.00',
        del: '$120.00',
        des: '-2%',
        qty: 1
    },
    {
        id:6,
        image:'images/brown_yoox_boots_1_720x.jpg' ,
        image2:'images/brown_yoox_boots_3_410x520_crop_center.jpg' ,
        title: 'Brown Yoox Boots',
        price: '$1,800.00',
        del: '$2.300.00',
        des: '-25%',
        qty: 1
    },
    {
        id:7,
        image:'images/burberry_jacket_1_720x.jpg' ,
        image2:'images/burberry_jacket_2_720x.jpg' ,
        title: 'Burberry Jacket',
        price: '$500.00',
        des: '-12%',
        qty: 1
    },
    {
        id:8,
        image:'images/cross_body_bags_1_720x.jpg' ,
        image2:'images/cross_body_bags_2_720x.jpg' ,
        title: 'Cross Body Bags',
        price: '$540.00',
        del: '$750.00',
        des: '-30%',
        qty: 1
    },
    {
        id:9,
        image:'images/double_layer_sweater_1_720x.jpg' ,
        image2:'images/double_layer_sweater_2_720x.jpg' ,
        title: 'Double Layer Sweater',
        price: '$50.00',
        des: '-50%',
        qty: 1
    },
    {
        id:10,
        image:'images/generico_cotone_liscio_solid_color_shirts_1_720x.jpg' ,
        image2:'images/generico_cotone_liscio_solid_color_shirts_2_720x.jpg' ,
        title: 'Eye Love Eyeshadow Palette',
        price: '$2,400.00',
        des: '-8%',
        qty: 1
    },
    {
        id:11,
        image:'images/high_neck_sweater_woman_1_720x.jpg' ,
        image2:'images/high_neck_sweater_woman_2_720x.jpg' ,
        title: 'Generico Cotone Liscio Solid Col...',
        price: '$3,200.00',
        del: '$3.700.00',
        des: '-20%',
        qty: 1
    },
    {
        id:12,
        image:'images/oversized_faux_shearling_coat_1_720x.jpg' ,
        image2:'images/oversized_faux_shearling_coat_2_720x.jpg' ,
        title: 'High Neck Sweater Woman',
        price: '$150.00',
        del: '$180.00',
        des: '-25%',
        qty: 1
    },
    {
        id:12,
        image:'images/oversized_faux_shearling_coat_1_720x.jpg' ,
        image2:'images/oversized_faux_shearling_coat_2_720x.jpg' ,
        title: 'High Neck Sweater Woman',
        price: '$150.00',
        del: '$180.00',
        des: '-25%',
        qty: 1
    },
    {
        id:12,
        image:'images/oversized_faux_shearling_coat_1_720x.jpg' ,
        image2:'images/oversized_faux_shearling_coat_2_720x.jpg' ,
        title: 'High Neck Sweater Woman',
        price: '$150.00',
        del: '$180.00',
        des: '-25%',
        qty: 1
    },
];
//=========


//=========


function showProductsUI(){
        let productUI = products.map((item) =>{
            return`
            <div class="card-product card-product1" id="card-product">
                            <div class="img overImg" id="">
                                <a onclick="detailsCart(${item.id})">
                                <img src="${item.image}" alt="" class="ImgProducts"></a>
                                <span class="red">${item.des}</span>
                                <span class="black">new</span>
                                <div class="icon icon1">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                                <div class="icon icon2">
                                    <i class="fa-solid fa-scale-unbalanced"></i>
                                </div>
                                <div class="hoverIcons">
                                    <div><i class="fa-regular fa-eye"></i></div>
                                    <div onclick="checkLoginUser(${item.id})"><i class="fa-solid fa-bag-shopping"  id="addCart"></i></div>
                                </div>
                            </div>
                            <div class="text">
                                <p>${item.title}</p>
                                <span>${item.price}<del></del></span>
                            </div>
                        </div>
            `
        });
        let DivProducts = document.getElementById('products');
        DivProducts.innerHTML = productUI
}
showProductsUI()

//============= go to detalis page ===============
// localStorage.setItem('productsLocal', JSON.stringify(products))
localStorage.setItem('productLocal', JSON.stringify(products))

function detailsCart(id){
    localStorage.setItem('productId',id)
    window.location = 'details.html'
}



//====================================
let shopcontent = document.querySelector('.shopcontent')
let numPro = document.getElementById('numPro')



//============== check button user ================

let addCart = document.getElementById('addCart')


let colsePopup = document.getElementById('colsePopup')
let noLognCart = document.querySelector('.noLognCart')
colsePopup.addEventListener('click', function(){
    noLognCart.style.display = 'none'
})

let allTtimes = [];
function checkLoginUser(id){

    if(localStorage.getItem('name')){
        let choosItem = products.find((item) => item.id === id);
        let item = allTtimes.find(i => i.id === choosItem.id)
        if(item){
            choosItem.qty += 1;
        }else{
            allTtimes.push(choosItem);
        }
        shopcontent.innerHTML = ''
        allTtimes.forEach(item => {
            shopcontent.innerHTML += `
                <div class="minProd">
                    <div class="img">
                        <img src="${item.image}"/>
                        <p>${item.title}</p>
                    </div>
                    <div>
                        <span>${item.price}</span>
                    </div>
                    <div class="icons">
                        <div id="div1">+</div>
                        <div id="divQty">${item.qty}</div>
                        <div id="div2">-</div>
                    </div>
                </div>`
            })

        //////////////////////////////////////////
        let div1 =document.getElementById('div1')
        let divQty =document.getElementById('divQty')
        let div2 =document.getElementById('div2')
        div1.addEventListener('click', function(){
            divQty.innerHTML ++;
        })
        div2.addEventListener('click', function(){
            if(divQty.innerHTML < 1){
                divQty.innerHTML = 0
            }else{

                divQty.innerHTML --
            }
        })
        //////////////////////////////////////////

    
    numPro.style.display = 'block'
    
    let addItem = localStorage.getItem('addProduct') ? JSON.parse(localStorage.getItem('addProduct')) :  [];
    addItem = [...addItem, choosItem];
    localStorage.setItem('addProduct', JSON.stringify(addItem))

    let numProductLeanth = document.querySelectorAll('.shopcontent p')
    numPro.innerHTML = numProductLeanth.length
    }else{
        noLognCart.style.display = 'flex'
    }
}



// let delateIcon = document.getElementById('delateIcon')
// let minProd = document.querySelector('.minProd')

// delateIcon.addEventListener('click', function(){
//     minProd.remove()
// })


let btnCheckOut = document.getElementById('btnCheckOut')

btnCheckOut.addEventListener('click', function(){
    window.location = 'shopingcart.html'
})


////////////
let prgraph = document.getElementById('prgraph') 
prgraph.innerHTML = `${products.length} products`


//================ display products ==================

let dIcon1 = document.getElementById('dicon2') 
let dIcon2 = document.getElementById('dicon3') 
let dIcon3 = document.getElementById('dicon4') 
let dIcon4 = document.getElementById('dicon1')
let cardProduct = document.querySelectorAll('.card-product')
let overImg = document.querySelectorAll('.overImg')


dIcon1.addEventListener('click', function(){
    cardProduct[0].style.width = `45%`
    cardProduct[1].style.width = '45%'
    cardProduct[2].style.width = '45%'
    cardProduct[3].style.width = '45%'
    cardProduct[4].style.width = '45%'
    cardProduct[5].style.width = '45%'
    cardProduct[6].style.width = '45%'
    cardProduct[7].style.width = '45%'
    cardProduct[8].style.width = '45%'
    cardProduct[9].style.width = '45%'
    cardProduct[10].style.width = '45%'
    cardProduct[11].style.width = '45%'
})
dIcon2.addEventListener('click', function(){
    cardProduct[0].style.width = `30%`
    cardProduct[1].style.width = '30%'
    cardProduct[2].style.width = '30%'
    cardProduct[3].style.width = '30%'
    cardProduct[4].style.width = '30%'
    cardProduct[5].style.width = '30%'
    cardProduct[6].style.width = '30%'
    cardProduct[7].style.width = '30%'
    cardProduct[8].style.width = '30%'
    cardProduct[9].style.width = '30%'
    cardProduct[10].style.width = '30%'
    cardProduct[11].style.width = '30%'
})
dIcon3.addEventListener('click', function(){
    cardProduct[0].style.width = `20%`
    cardProduct[1].style.width = '20%'
    cardProduct[2].style.width = '20%'
    cardProduct[3].style.width = '20%'
    cardProduct[4].style.width = '20%'
    cardProduct[5].style.width = '20%'
    cardProduct[6].style.width = '20%'
    cardProduct[7].style.width = '20%'
    cardProduct[8].style.width = '20%'
    cardProduct[9].style.width = '20%'
    cardProduct[10].style.width = '20%'
    cardProduct[11].style.width = '20%'
})
dIcon4.addEventListener('click', function(){
    // overImg.style.width = '100%'
    cardProduct[0].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[1].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[2].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[3].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[4].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[5].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[6].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[7].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[8].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[9].style.cssText = `
    width: 85%;
    margin: auto
    `

    cardProduct[10].style.cssText = `
    width: 85%;
    margin: auto
    `
    cardProduct[11].style.cssText = `
    width: 85%;
    margin: auto
    `

})




//====================== mouseoverImahes ========================
let ImgProducts = document.querySelectorAll('.ImgProducts')


let oneP = cardProduct[0]
let towP = cardProduct[1]
let threeP = cardProduct[2]
let fourP = cardProduct[3]
let fiveP = cardProduct[4]
let sixP = cardProduct[5]
let sevP = cardProduct[6]
let eiP = cardProduct[7]
let nineP = cardProduct[8]
let tenP = cardProduct[9]
let elevP = cardProduct[10]
let twelP = cardProduct[11]


oneP.onmouseover = function(){
    ImgProducts[0].setAttribute('src', `${products[0].image2}`)
}
oneP.onmouseout = function(){
    ImgProducts[0].setAttribute('src', `${products[0].image}`)
}

/////////////////
towP.onmouseover = function(){
    ImgProducts[1].setAttribute('src', `${products[1].image2}`)
}
towP.onmouseout = function(){
    ImgProducts[1].setAttribute('src', `${products[1].image}`)
}

/////////////////
threeP.onmouseover = function(){
    ImgProducts[2].setAttribute('src', `${products[2].image2}`)
}
threeP.onmouseout = function(){
    ImgProducts[2].setAttribute('src', `${products[2].image}`)
}

/////////////////
fourP.onmouseover = function(){
    ImgProducts[3].setAttribute('src', `${products[3].image2}`)
}
fourP.onmouseout = function(){
    ImgProducts[3].setAttribute('src', `${products[3].image}`)
}

/////////////////
fiveP.onmouseover = function(){
    ImgProducts[4].setAttribute('src', `${products[4].image2}`)
}
fiveP.onmouseout = function(){
    ImgProducts[4].setAttribute('src', `${products[4].image}`)
}

/////////////////
sixP.onmouseover = function(){
    ImgProducts[5].setAttribute('src', `${products[5].image2}`)
}
sixP.onmouseout = function(){
    ImgProducts[5].setAttribute('src', `${products[5].image}`)
}

/////////////////
sevP.onmouseover = function(){
    ImgProducts[6].setAttribute('src', `${products[6].image2}`)
}
sevP.onmouseout = function(){
    ImgProducts[6].setAttribute('src', `${products[6].image}`)
}

/////////////////
eiP.onmouseover = function(){
    ImgProducts[7].setAttribute('src', `${products[7].image2}`)
}
eiP.onmouseout = function(){
    ImgProducts[7].setAttribute('src', `${products[7].image}`)
}

/////////////////
nineP.onmouseover = function(){
    ImgProducts[8].setAttribute('src', `${products[8].image2}`)
}
nineP.onmouseout = function(){
    ImgProducts[8].setAttribute('src', `${products[8].image}`)
}

/////////////////
tenP.onmouseover = function(){
    ImgProducts[9].setAttribute('src', `${products[9].image2}`)
}
tenP.onmouseout = function(){
    ImgProducts[9].setAttribute('src', `${products[9].image}`)
}

/////////////////
elevP.onmouseover = function(){
    ImgProducts[10].setAttribute('src', `${products[10].image2}`)
}
elevP.onmouseout = function(){
    ImgProducts[10].setAttribute('src', `${products[10].image}`)
}

/////////////////
twelP.onmouseover = function(){
    ImgProducts[11].setAttribute('src', `${products[11].image2}`)
}
twelP.onmouseout = function(){
    ImgProducts[11].setAttribute('src', `${products[11].image}`)
}

/////////////////



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

