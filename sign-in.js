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

//slide-changer'y login formaka

const container=document.getElementById('container');
const overlaycon=document.getElementById('overlayCon');
const overlaybtn=document.getElementById('overlayBtn');

overlaybtn.addEventListener('click', ()=>{
    container.classList.toggle('right-panel-active');
})

//h1 batallakai y naw overlay-good morning w shtaka

const date=new Date();
const CurrentTime=date.getHours();
console.log(CurrentTime);
let callBack=document.getElementById("good-what");

if(CurrentTime>=1 && CurrentTime <=4){
    callBack.innerHTML="Good Night"
}

if(CurrentTime>=5 && CurrentTime <=12){
    callBack.innerHTML="Good Morning"
}

if(CurrentTime>=13 && CurrentTime <=18){
    callBack.innerHTML="Good Afternoon"
}

if(CurrentTime>=19 && CurrentTime <=24){
    callBack.innerHTML="Good Evening"
}


//scroll reveal


ScrollReveal({
    reset: false,
    distance: "90px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".logo,.list,.sign-in", {origin:"top"});
  ScrollReveal().reveal(".section-login-form", {origin:"bottom"});

