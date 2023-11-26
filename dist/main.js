const navMobile=document.querySelector('.nav-mobile')
const burgerBtn=document.querySelector('.burgerBtn')
const navLinks=document.querySelectorAll('.nav-item')
const heartIconFavBtn=document.querySelector('#favBtnHeart')
const favBtnX=document.querySelector('#btnXFav')
const favItems=document.querySelector('#favContainer')
const body=document.querySelector('body')




const handleNav = () => {
    navMobile.classList.toggle('-translate-y-full')
    

    navLinks.forEach(item =>{
        item.addEventListener('click', ()=>{
            navMobile.classList.add('-translate-y-full')
        })
    })

}

const showFavItems = () => {
    favItems.classList.toggle('translate-x-full')
    body.classList.toggle('backdrop-brightness-50')
    
}

const closeFavListItems = () => {
    favItems.classList.add('translate-x-full')
    body.classList.remove('backdrop-brightness-50')
    
   
    
}

burgerBtn.addEventListener('click',handleNav)
heartIconFavBtn.addEventListener('click',showFavItems)
favBtnX.addEventListener('click',closeFavListItems)

