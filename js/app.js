const about_sec = document.querySelector("#about-reach");
const video = about_sec.querySelector("video");
const text1 = about_sec.querySelector("h1");
const text2 = about_sec.querySelector("h2");
const about = about_sec.querySelector("#about-us");
const reach = about_sec.querySelector("#reach h1");
const headerVideo = document.getElementById("felicity-video");

headerVideo.muted = true;
headerVideo.playbackRate = 1.25;
headerVideo.play();

//END SECTION
// const section = document.querySelector(".sec");
// const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: about_sec,
  triggerHook: 0
})
  .addIndicators()
  .setPin(about_sec)
  .addTo(controller);

//Text Animation
// const textAnim = TweenMax.fromTo(text1, 3, { opacity: 1 }, { opacity: 0 });
// const textAnim2 = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });
var divAnim = new TimelineMax();
  
  divAnim.from(about, 0.25, { opacity:0 });
  divAnim.to(about, 0.25, { opacity:0 }, 1);

var tween = new TimelineMax();
  tween.from("#reach > *", 2, {x:100,opacity:0,stagger:0.1});

  var tween2 = new TimelineMax();
  tween2.staggerFromTo('#reach > *', 0.5,
    { x:500,
    	opacity: 0,
    },
    {
      x:0,
      opacity:1
    },
    0.4
);


let scene2 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: about_sec,
  triggerHook: 0.1
})
  .addIndicators()
  .setTween(divAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: about_sec,
  triggerHook: 0.1,
  offset:1500
})
  .addIndicators()
  .setTween(tween2)
  .addTo(controller);

// let scene3 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: section,
//   triggerHook: 0
// })
//   .addIndicators()
//   .on("enter", function (event) {
//     console.log("Scene entered.");
//     end.classList.add("entered");})
//   .on("leave", function (event) {
//     console.log("Scene left.");
//     end.classList.remove("entered");})
//   // .setTween(textAnim2)
//   .setPin(section)
//   .addTo(controller);
  

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.3);

$(".section").each(function(i) {
  var target = $(this).find(".content");

  
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.2,
    duration: '150%'
  })
    .setPin(this)
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});