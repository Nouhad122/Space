let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let xMark = document.querySelector('.fa-xmark');
let home = document.querySelector('#home');
let dest = document.querySelector('#dest');
let crew = document.querySelector('#crew');
let tech= document.querySelector('#tech');

function myFunction(x){
    if(x.matches){
      navbar.style.top = '-1000%';
  menu.addEventListener('click',()=>{
    navbar.style.top = '-45%';
  });
  xMark.addEventListener('click',()=>{
    navbar.style.top = '-1000%';
  });
    }
  else{
     navbar.style.top = '0';
  }
  }
  var x = window.matchMedia("(max-width: 579px)")
  myFunction(x) 
  x.addListener(myFunction)
  function activeNav(){
    home.addEventListener('click',()=>{
        home.classList.toggle('active');
       dest.classList.remove('active');
       crew.classList.remove('active');
       tech.classList.remove('active');
    });
    dest.addEventListener('click',()=>{
      dest.classList.toggle('active');
      home.classList.remove('active');
      crew.classList.remove('active');
      tech.classList.remove('active');

  });
  crew.addEventListener('click',()=>{
    crew.classList.toggle('active');
    home.classList.remove('active');
    dest.classList.remove('active');
    tech.classList.remove('active');

});
tech.addEventListener('click',()=>{
  tech.classList.toggle('active');
  home.classList.remove('active');
  crew.classList.remove('active');
  dest.classList.remove('active');

});
  }
  activeNav();