let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let xMark = document.querySelector('.fa-xmark');
let home = document.querySelector('#home');
let dest = document.querySelector('#dest');
let crew = document.querySelector('#crew');
let tech= document.querySelector('#tech');
let moon= document.querySelector('#moon');
let mars= document.querySelector('#mars');
let europa= document.querySelector('#europa');
let titan= document.querySelector('#titan');
let image= document.querySelector('img');
let title= document.querySelector('.moon');
let parag= document.querySelector('.parag');
let distance= document.querySelector('#km');
let time= document.querySelector('#time');

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
moon.addEventListener('click',()=>{
    moon.classList.toggle('active');
    mars.classList.remove('active');
    europa.classList.remove('active');
    titan.classList.remove('active');
    image.src = '/starter-code/assets/destination/image-moon.png';
    title.innerHTML='moon';
    parag.innerHTML = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.innerHTML = '384,400 km';
    time.innerHTML = '3 days';
  });
  mars.addEventListener('click',()=>{
    mars.classList.toggle('active');
    moon.classList.remove('active');
    europa.classList.remove('active');
    titan.classList.remove('active');
    image.src = '/starter-code/assets/destination/image-mars.png';
    title.innerHTML='mars';
    parag.innerHTML = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
    distance.innerHTML = '225 mil. km';
    time.innerHTML = '9 months';
});
  europa.addEventListener('click',()=>{
    europa.classList.toggle('active');
    mars.classList.remove('active');
    moon.classList.remove('active');
    titan.classList.remove('active');
    image.src = '/starter-code/assets/destination/image-europa.png';
    title.innerHTML='europa';
    parag.innerHTML = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.innerHTML = '628 mil. km';
    time.innerHTML = '3 years';
});
 titan.addEventListener('click',()=>{
   titan.classList.toggle('active');
    mars.classList.remove('active');
    europa.classList.remove('active');
    moon.classList.remove('active');
    image.src = '/starter-code/assets/destination/image-titan.png';
    title.innerHTML='titan';
    parag.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.innerHTML = '1.6 bil. km';
    time.innerHTML = '7 years';
});

  
}
activeNav();