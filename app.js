let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let vidBtn = document.querySelectorAll('.vid-btn');



window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

vidBtn.forEach(btn=> {
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src= src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
       1024 : {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
       1200 : {
            slidesPerView: 5,
        },
    },
});

const highlightMenu = () =>{
    const elem=document.querySelector('.highlight')
    const homeMenu=document.querySelector('#home-page')
    const bookMenu=document.querySelector('#book-page')
    const packagesMenu=document.querySelector('#packages-page')
    const servicesMenu=document.querySelector('#services-page')
    const galleryMenu=document.querySelector('#gallery-page')
    const reviewMenu=document.querySelector('#review-page')
    const contactMenu=document.querySelector('#contact-page')
    let scrollPos =window.scrollY;
   console.log(scrollPos);

    //adds 'highlight' class to my menu items
     if(window.innerWidth >991 && scrollPos < 550){
        homeMenu.classList.add('highlight')
        bookMenu.classList.remove('highlight')
        packagesMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        reviewMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')   
        return;
    }else if(window.innerWidth >991 && scrollPos < 1200){
        bookMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        packagesMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        reviewMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')   
        return;
    }
    else if(window.innerWidth >991 && scrollPos < 2224){
        packagesMenu.classList.add('highlight')
        bookMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        reviewMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth >991 && scrollPos < 2700){
        servicesMenu.classList.add('highlight')
        bookMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        packagesMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        reviewMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth >991 && scrollPos < 3800){
        galleryMenu.classList.add('highlight')
        bookMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        packagesMenu.classList.remove('highlight')
        reviewMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth >991 && scrollPos < 4200){
        reviewMenu.classList.add('highlight')
        bookMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        packagesMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth >991 && scrollPos < 4800){
        contactMenu.classList.add('highlight')
        bookMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        reviewMenu.classList.remove('highlight')
        packagesMenu.classList.remove('highlight')
        return;
    }
    if (window.innerWidth >991 && scrollPos < 660 || elem){
        elem.classList.remove('highlight');
        return;
    }
}
window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);
