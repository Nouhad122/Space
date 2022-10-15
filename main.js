let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let xMark = document.querySelector('.fa-xmark');
let explore = document.querySelector('.explore');
let home = document.querySelector('#home');
let dest = document.querySelector('#dest');
let crew = document.querySelector('#crew');
let tech= document.querySelector('#tech');
let exploreCont = document.querySelector('.exp-container');


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

      function expBg(){
        exploreCont.style.background = 'rgba(132, 131, 131, 0.596)';
      }
      function expNoBg(){
        exploreCont.style.background = 'transparent';
      }

    

