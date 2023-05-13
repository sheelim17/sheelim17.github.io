(function () {
  gsap.registerPlugin(ScrollTrigger);
  

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    mobile: {
      smooth: true
    },

  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  gsap.timeline({
    scrollTrigger: {
      trigger: "#slogan",
      start: "top top",
      end: "+=28%",
      scroller: ".smooth-scroll",
      scrub: true
    }
  })
  .to(".text1", { opacity: 1 }, 0)
  .to(".text2", { opacity: 1 }, 1)
  .to(".text3", { opacity: 1 }, 2)
  .to(".text4", { opacity: 1 }, 3)
  .to(".text5", { opacity: 1 }, 4)
  .to(".text6", { opacity: 1 }, 5)
  .to(".sub_desc p", { opacity: 1 }, 6)

// --- ORANGE PANEL ---
// gsap.from(".line-2", {
//   scrollTrigger: {
//     trigger: ".orange",
//     scroller: ".smooth-scroll",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "+=100%"
//   },
//   scaleX: 0,
//   transformOrigin: "left center",
//   ease: "none"
// });

// --- PURPLE/GREEN PANEL ---
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".purple",
//     scroller: ".smooth-scroll",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "+=100%"
//   }
// });

// tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
//   .from(
//     ".line-3",
//     { scaleX: 0, transformOrigin: "left center", ease: "none" },
//     0
//   )
//   .to(".purple", { backgroundColor: "#28a92b" }, 0);

  
  


    // scroll.on('call', (value, way, obj) => {
    //     if (way === 'enter') {
    //       switch (value) {
    //         case "light": 
    //           document.querySelector('#body').style.backgroundColor = "#F9F5EF";
    //         break;      
            
    //         case "dark": 
    //           document.querySelector('#body').style.backgroundColor = "#2A6F4A";
    //         break;   
    //         case "countup" :
    //           setInterval(countUpTimer, 1000);
    //         break;
    //       }
    //     }
    // });
    // function pad ( value ) { return value > 9 ? value : "0" + value; }
    // function countUpTimer() {
    //   ++totalSeconds;
    //   var hour = Math.floor(totalSeconds / 3600);
    //   var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    //   var seconds = totalSeconds - (hour * 3600 + minute * 60);
    //   document.getElementById("count_up_timer").innerHTML = pad(hour) + ":" + pad(minute) + ":" + pad(seconds);
    // }
})();



window.addEventListener('load', () => {

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
  
})