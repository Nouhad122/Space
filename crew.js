let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let xMark = document.querySelector('.fa-xmark');
let home = document.querySelector('#home');
let dest = document.querySelector('#dest');
let crew = document.querySelector('#crew');
let tech= document.querySelector('#tech');
let p1= document.querySelector('#first-point');
let p2= document.querySelector('#second-point');
let p3= document.querySelector('#third-point');
let p4= document.querySelector('#fourth-point');
let image= document.querySelector('img');
let name= document.querySelector('#name');
let job= document.querySelector('.job');
let parag= document.querySelector('.douglas');

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
  

   p1.addEventListener('click',()=>{
   p1.classList.toggle('active');
   p2.classList.remove('active');
   p3.classList.remove('active');
   p4.classList.remove('active');
   image.src = '/starter-code/assets/crew/image-douglas-hurley.png';
   job.innerHTML = 'commander';
   name.innerHTML = 'Douglas Hurley';
   parag.innerHTML = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
  });
    p2.addEventListener('click',()=>{
      p2.classList.toggle('active');
      p1.classList.remove('active');
      p3.classList.remove('active');
      p4.classList.remove('active');
    image.src = '/starter-code/assets/crew/image-mark-shuttleworth.png';
    job.innerHTML = 'Mission Specialist';
    name.innerHTML = 'Mark Shuttleworth';
    parag.innerHTML = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
   });
    p3.addEventListener('click',()=>{
      p3.classList.toggle('active');
      p2.classList.remove('active');
      p1.classList.remove('active');
      p4.classList.remove('active');
    image.src = '/starter-code/assets/crew/image-victor-glover.png';
    job.innerHTML = 'Pilot';
    name.innerHTML = 'Victor Glover';
    parag.innerHTML = ' Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.';
   });
    p4.addEventListener('click',()=>{
      p4.classList.toggle('active');
      p2.classList.remove('active');
      p3.classList.remove('active');
      p1.classList.remove('active');
    image.src = '/starter-code/assets/crew/image-anousheh-ansari.png';
    job.innerHTML = 'Flight Engineer';
    name.innerHTML = 'Anousheh Ansari';
    parag.innerHTML = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
   });
   
  