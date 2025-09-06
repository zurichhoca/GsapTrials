
gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger); 

let text = document.querySelector("#text")
let point = document.querySelector(".point")
let hero = document.querySelector(".hero")
let heroSpan = document.querySelector(".hero-span")
let heroH1 = document.querySelector(".hero-h1")
let heroBtn = document.querySelector(".hero-btn")
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












