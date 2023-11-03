//////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// console.log("hello world");

// set the current year
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
//

// MOBILE NAVIGATION SCRIPT
const btnNav = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
btnNav.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
});
//

//Fixing flexbox gap property missing in some safari Versions
//ho skta h kuch log old broswers in iphone use krr rhe ho 
// ..then wo humari website ko nhi dekh paayenge to fix it we have to use this so that the can also use it 
//safari css flexbox me gap property ko support nhi karta hai to make it support we have to use this hack  that is checkFlexGap Function Here For Its Smooth conduct Here...
//Fixing Safari flexbox gap property
const checkFlexGap = () => {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
};

checkFlexGap();

// End Flexgap property missing int he safari versions here...

//IMPLEMENT SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    //event.preventDefault();
    const href = link.getAttribute("href");

    //SCROLL BACK TO TOP
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to other Links

    // if(href !== "#" && href.startsWith("#")){
    //     const sectionElement=document.querySelectorAll(href);
    //     // console.log(sectionElement);
    //     sectionElement.scrollIntoView({
    //         behavior:'smooth'
    //     });
    // }

    //Close Mobile Navigation
    if (link.classList.contains("main-nav-link")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});
//
// BEGIN STICKY NAVIGATION
//
const sectionHeroElement = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);

    //jbb section-hero completely out ho jaayga viewport se tbb ent.isIntersecting false hoga
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    //Jbb Hero Section View Me Aa Jaay Tbb sticky class hta do i.e. come back to the normal
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //Inthe Viewport Observe It i.e. for entire browser
    root: null,
    //fire an event as soon as 0% of the hero section is in the viewport or browser window as soon as hero section moves out completely of viewport
    threshold: 0,
    //thoda pehle hi sticky ho jaay
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElement);
//END STICKY NAVIGATION
//

// NOTE: IMPORTANT
/* 
Different Browsers support things differently,
kuch browsers modern terminology ko support nhi ktte h they are old browsers, and a few users are may be using these old browsers hence we have to look upon their interest  also
----Now There Is A website where we can look upon which broswer support which of the functionality
i.e. can i use.com 
*/

// DISBALE SCROLLING BEHAVIOUR
const disableScrolling = () => {
  // To get the scroll position of current webpage
  TopScroll = window.scrollY || document.documentElement.scrollTop;
  (LeftScroll = window.scrollX || document.documentElement.scrollLeft),
    // if scroll happens, set it to the previous value
    (window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    });
};

const enableScrolling = () => {
  window.onscroll = function () {};
};
