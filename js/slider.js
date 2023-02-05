//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector(".gw-slider-container");
var sliderList = document.querySelector(".gw-slider-list");
var sliderItem = document.querySelectorAll(".gw-portfolio-item");
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector(".gw-item-prev");
var nextItem = document.querySelector(".gw-item-next");
var sliderPos = 0;
var currentSlide = document.querySelector(".gw-current-slide");
var totalSlide = document.querySelector(".gw-total-slide");
var currentCounter = 1;
var navItems = document.querySelectorAll(".gw-item-navigator a");
var navCounter = document.querySelector(".gw-navigator-counter span");

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + "px";

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + "px";
  var sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + "px";

//Fazendo Animaçao do Slider onClick

//HANDLERS

//Next Slide Animaçao
var nextSlideAnim = function () {
  var lastItem = sliderListWidth - containerWidth;

  if (-1 * sliderPos === lastItem) {
    return;
  }

  sliderPos -= containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: "cubicBezier(0,1.01,.32,1)",
  });
};

//Prev Slide Animaçao
var prevSlideAnim = function () {
  if (sliderPos === 0) {
    return;
  }

  sliderPos += containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: "cubicBezier(0,1.01,.32,1)",
  });
};

//Counter Formater
var counterFormatter = function (n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
};

//Counter Add
var counterAdd = function () {
  if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Counter Remove
var counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Set Active Nav
var setActiveNav = function () {
  for (var nv = 0; nv < navItems.length; nv++) {
    let myNavNum = parseInt(navItems[nv].getAttribute("data-nav"));

    if (myNavNum === currentCounter) {
      navItems[nv].classList.add("gw-item-active");

      anime({
        targets: ".gw-item-active",
        width: 90,
      });
    }
  }
};

//Set Active Slide
var setActiveSlide = function () {
  for (var sld = 0; sld < sliderItem.length; sld++) {
    let mySlideNum = parseInt(sliderItem[sld].getAttribute("data-slide"));

    if (mySlideNum === currentCounter) {
      sliderItem[sld].classList.add("gw-slide-active");
      sliderItem[sld]
        .querySelector(".gw-portfolio-item-box")
        .classList.add("gw-scale-right");
      sliderItem[sld]
        .querySelector(".gw-portfolio-item-thumb img")
        .classList.add("gw-scale-up");
      sliderItem[sld]
        .querySelector(".gw-portfolio-item-info")
        .classList.add("gw-fade-from-left");
    }
  }
};

var changeActive = function () {
  for (var rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove("gw-item-active");
    anime({
      targets: navItems[rm],
      width: 20,
    });
  }

  for (var rms = 0; rms < sliderItem.length; rms++) {
    sliderItem[rms].classList.remove("gw-slide-active");
    sliderItem[rms]
      .querySelector(".gw-portfolio-item-box")
      .classList.remove("gw-scale-right");
    sliderItem[rms]
      .querySelector(".gw-portfolio-item-thumb img")
      .classList.remove("gw-scale-up");
    sliderItem[rms]
      .querySelector(".gw-portfolio-item-info")
      .classList.remove("gw-fade-from-left");
  }
  setActiveNav();
  setActiveSlide();
};

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
  targets: ".gw-item-active",
  width: 90,
});

nextItem.addEventListener("click", function () {
  nextSlideAnim();
  counterAdd();
  changeActive();
});

prevItem.addEventListener("click", function () {
  prevSlideAnim();
  counterRemove();
  changeActive();
});
