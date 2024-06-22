const header = document.querySelector('header');

window.onscroll = () => {

if (window.scrollY > 100) {
    header.classList.add('bg-white')
    header.classList.add('shadow')
}else {
    
    header.classList.remove('shadow')
    header.classList.remove('bg-white')
}

}


// intersection oberserver for hidden elements

const hiddenElements = document.querySelectorAll('.hidden')
const observer = new IntersectionObserver((entries) => {
        
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('show');
}
});
    
}, {
    threshold: 0.3
})
hiddenElements.forEach((el) => observer.observe(el));




// intersection oberserver for growing and shrinking animation

const hiddenElementScale = document.querySelectorAll('.hidden-scale')
const observerScale = new IntersectionObserver((entries) => {
        
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('show-scale');
}
});
    
}, {
    threshold: 0.1
})
hiddenElementScale.forEach((el) => observerScale.observe(el));



// variables for counter

let countNum = 0;
let clients = 0;
let projects = 0;
let hours = 0;
let workers= 0;
const counClients = document.querySelector('#coun-clients');
const counProjects = document.querySelector('#coun-projects');
const counHours = document.querySelector('#coun-hours');
const counWorkers = document.querySelector('#coun-workers');


// intersection oberserver for counting up numbers


const hiddenElementCounter = document.querySelectorAll('.counter')
const observerCounter = new IntersectionObserver((entries) => {
        
entries.forEach((entry) => {
if (entry.isIntersecting) {
counterUp(counClients, 232)
counterUp(counProjects, 514)
counterUp(counHours, 1465)
counterUp(counWorkers, 15)
}
});
    
}, {
    threshold: 0.5
})
hiddenElementCounter.forEach((el) => observerCounter.observe(el));

function counterUp(item, number) {
    let startingNum = 0;
    let animationSpeed = 30;
    let animationGrowNumber = number / 320;

    let interval = setInterval(()=>{

        if(startingNum >= number){
          clearInterval(interval);
        } else {
          
           startingNum += animationGrowNumber;
          item.innerHTML = Math.round(startingNum);
        }})
    
    
}


