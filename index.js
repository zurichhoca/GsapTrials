
gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger); 

let text = document.querySelector("#text")
let point = document.querySelector(".point")
let hero = document.querySelector(".hero")
let heroSpan = document.querySelector(".hero-span")
let heroH1 = document.querySelector(".hero-h1")
let heroBtn = document.querySelector(".hero-btn")

let divOne = document.querySelector(".divOne")
let divTwo  = document.querySelector(".divTwo")
let divThree = document.querySelector(".divThree")
let divFour = document.querySelector(".divFour")
let divFive = document.querySelector(".divFive")
let divSix = document.querySelector(".divSix")

let divTen  = document.querySelector(".divTen")
let divNine  = document.querySelector(".divNine")
let divEight  = document.querySelector(".divEight")
let divSeven  = document.querySelector(".divSeven")




let split = SplitText.create(text,{ type: "chars,words,lines" });




heroBtn.addEventListener("click",function(){
            gsap.to(heroBtn, {
            text: "Reserved",
            backgroundColor: "#111",
            color: "white",
            duration: 1.4,
            ease: "power2.inOut",


        })
})

// First timeline (keep existing)
const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0
});

// Create new timeline for second line
const tl2 = gsap.timeline({
    repeat: -1,
    repeatDelay: 0
});

// First line animation (keep existing)
gsap.set([divOne, divTwo, divThree, divFour, divFive, divSix], {
    x: '100vw' 
});

tl.to([divOne, divTwo, divThree, divFour, divFive, divSix], {
    x: '-100vw',
    duration: 45,
    ease: "none",
    stagger: {
        each: 0.9,
        repeat: -1
    }
});

// Second line animation (fixed)
gsap.set([divTen, divNine, divEight, divSeven], {
    x: '-100vw' 
});

tl2.to([divTen, divNine, divEight, divSeven], {
    x: '100vw',
    duration: 45,
    ease: "none",
    stagger: {
        each: 0.10,
        repeat: -2
    }
});


// Register ScrollTrigger plugin (if not already registered)


// Hero Section Animation
gsap.from('.hero-text-container', {
    scrollTrigger: {
        trigger: '.hero-container',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1
});

gsap.from('.hero-image', {
    scrollTrigger: {
        trigger: '.hero-container',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    },
    y: -100,
    opacity: 0,
    duration: 1
});


// Second Section Animation
gsap.from('.textOnLeft', {
    scrollTrigger: {
        trigger: '.secondSection',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from('.textOnBottom', {
    scrollTrigger: {
        trigger: '.secondSection',
        start: 'center center',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1
});

// Third Section Animation
gsap.from('.thirdSectionFirst', {
    scrollTrigger: {
        trigger: '.thirdSection',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from('.thirdSectionSecond', {
    scrollTrigger: {
        trigger: '.thirdSection',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

// Fourth Section Animation
gsap.from('.fourthSection h6', {
    scrollTrigger: {
        trigger: '.fourthSection',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from('.imagesContainer', {
    scrollTrigger: {
        trigger: '.fourthSection',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

// menu Icon to get some links
// ...existing code...



// let splitHero = SplitText.create([heroSpan,heroH1], {type: "words,chars"})

// gsap.from(splitHero.words, {
//    x: 100,
//   duration:0.9,
//   opacity: 0.2,
//   rotation: "random(-80, 80)",
//   ease: "back-out(0.5,7,none)",
//   stagger: 0.1
// });

// gsap.from(split.words, {
//   y: -200,
//   scale:100,
//   textShadow: "0px 0px 20px #ff0000",
//   duration: 0.9,
//   opacity: 0.3,
//   rotation: "random(-80, 80)",
//   duration: 1.2,
//   ease: "expoScale(0.5,7,none)",
//   stagger: 0.1
// });












