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
countUUp() 
}
});
    
}, {
    threshold: 0.5
})
hiddenElementCounter.forEach((el) => observerCounter.observe(el));

let hasBeenCalled = false;

function countUUp() {
    if (hasBeenCalled !== true) {
 counterUp(counClients, 232)
counterUp(counProjects, 514)
counterUp(counHours, 1465)
counterUp(counWorkers, 15)
hasBeenCalled = true
}else (
    null
)
}

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


// F.A.Q

const faqQ01 = document.querySelector('#faq-q-01');
const faqQ02 = document.querySelector('#faq-q-02');
const faqQ03 = document.querySelector('#faq-q-03');
const faqQ04 = document.querySelector('#faq-q-04');
const faqQ05 = document.querySelector('#faq-q-05');
const faqQ06 = document.querySelector('#faq-q-06');

const arrow01 = document.querySelector('#arrow-right-01')
const arrow02 = document.querySelector('#arrow-right-02')
const arrow03 = document.querySelector('#arrow-right-03')
const arrow04 = document.querySelector('#arrow-right-04')
const arrow05 = document.querySelector('#arrow-right-05')
const arrow06 = document.querySelector('#arrow-right-06')

const faqA01 = document.querySelector('#faq-a-01');
const faqA02 = document.querySelector('#faq-a-02');
const faqA03 = document.querySelector('#faq-a-03');
const faqA04 = document.querySelector('#faq-a-04');
const faqA05 = document.querySelector('#faq-a-05');
const faqA06 = document.querySelector('#faq-a-06');

isOpen01 = false;
isOpen02 = false;
isOpen03 = false;
isOpen04 = false;
isOpen05 = false;
isOpen06 = false;

faqQ01.addEventListener("click", () => {

if (isOpen01) {
    faqA01.style.height = "0px";
    arrow01.style.transform = "rotate(0)"
    isOpen01 = false;
    
}else {
    faqA01.style.height = "75px";
    arrow01.style.transform = "rotate(90deg)"
    isOpen01 = true;
}

})

faqQ02.addEventListener("click", () => {

    if (isOpen02) {
        faqA02.style.height = "0px";
        arrow02.style.transform = "rotate(0)"
        isOpen02 = false;
        
    }else {
        faqA02.style.height = "75px";
        arrow02.style.transform = "rotate(90deg)"
        isOpen02 = true;
    }
    
})
faqQ03.addEventListener("click", () => {

    if (isOpen03) {
        faqA03.style.height = "0px";
        arrow03.style.transform = "rotate(0)"
        isOpen03 = false;
        
    }else {
        faqA03.style.height = "75px";
        arrow03.style.transform = "rotate(90deg)"
        isOpen03 = true;
    }
    
})
faqQ04.addEventListener("click", () => {

    if (isOpen04) {
        faqA04.style.height = "0px";
        arrow04.style.transform = "rotate(0)"
        isOpen04 = false;
        
    }else {
        faqA04.style.height = "75px";
        arrow04.style.transform = "rotate(90deg)"
        isOpen04 = true;
    }
    
})
faqQ05.addEventListener("click", () => {

    if (isOpen05) {
        faqA05.style.height = "0px";
        arrow05.style.transform = "rotate(0)"
        isOpen05 = false;
        
    }else {
        faqA05.style.height = "75px";
        arrow05.style.transform = "rotate(90deg)"
        isOpen05 = true;
    }
    
})
faqQ06.addEventListener("click", () => {

    if (isOpen06) {
        faqA06.style.height = "0px";
        arrow06.style.transform = "rotate(0)"
        isOpen06 = false;
        
    }else {
        faqA06.style.height = "75px";
        arrow06.style.transform = "rotate(90deg)"
        isOpen06 = true;
    }
    
})


