//background hovery navbar
window.addEventListener("scroll", function(){
    var nav=this.document.querySelector(".navbar");
    nav.classList.toggle("nv", scrollY> 0);

    var logo=this.document.querySelector(".logo");
    logo.classList.toggle("logo2", scrollY> 0);
  
    var navList=this.document.querySelectorAll(".a");
   for(var i=0; i<navList.length; i++){
    navList[i].classList.toggle("a2", scrollY> 0);
   }
  
})


//slide show picture
var slideindex=1; 
showslides(slideindex);

function slide(n){
    showslides(slideindex= n+slideindex);
}
function curentslide(n){
    showslides(slideindex = n);
}
function showslides(n){
    var i;
    var slides=document.getElementsByClassName("myslide");
    var dots=document.getElementsByClassName("dot");
    if (n> slides.length){slideindex =1 }
    if (n< 1){slideindex = slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideindex -1].style.display="block";
    dots[slideindex-1].className+=" active";
}
/* auto slide changing */


// katy goriny slide
var timer= 7000; // 6 seconds

// bankrdway slichenge function bo daspekrny loopaka
slideChange();

//function bo infinity slide change loop
function slideChange() {
    setInterval(autoSlide, timer);
}

// function bo goriny slide 
function autoSlide() {
    slide(1); // gorin bo slide'y dwatr

    // garanawa bo slide yakam katek hamwy tawaw bww
    if (slideindex > slides.length) {
        slideindex = 1;
    }

    showslides(slideindex); // pshanyani slide yakam(gar chan slidebe bo nmwna la 2 zyatr bn)
}

//slide goriny where to?'aka
//ba swiperjs

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      169: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  //scroll revel
  
ScrollReveal({
  reset: true,
  distance: "90px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".logo,.list,.sign-in,.Find-reveal,.third-text,.swiper", {origin:"top"});

ScrollReveal().reveal(".trips-container,.find-trips-button", {origin:"bottom"});
ScrollReveal().reveal(".midle-text", {origin:"right"});
ScrollReveal().reveal(".left-text, .plan-text, .third-img", {origin:"left"});
  