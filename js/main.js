//Declarando Variáveis
var btnContact = document.querySelector(".gw-btn-contact");
var toggleModal = document.querySelectorAll(".gw-toggle-modal");
var toggleMenu = document.querySelectorAll(".gw-toggle-menu");
var menuMobile = document.querySelector(".gw-menu-mob");
var btnMenuMobIcon = document.querySelector(".gw-btn-menu-mob ion-icon");

//Page Preloader
window.addEventListener("load", function () {
  var pagePreloder = document.querySelector(".gw-preloader");
  pagePreloder.classList.add("gw-fade-out");

  setTimeout(function () {
    pagePreloder.style.display = "none";
  }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".gw-contact-info");
  boxContact.classList.toggle("gw-is-open");
  this.classList.toggle("gw-change-icon");
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlay = document.querySelector(".gw-menu-overlay");
    overlay.classList.toggle("gw-is-open");
    menuMobile.classList.toggle("gw-menu-is-closed");
    menuMobile.classList.toggle("gw-menu-is-open");

    var icon = btnMenuMobIcon.getAttribute("name");

    if (icon === "menu") {
      btnMenuMobIcon.setAttribute("name", "close");
    } else {
      btnMenuMobIcon.setAttribute("name", "menu");
    }
  });
}

//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var modalOrcamento = document.querySelector("#gw-modal-orcamento");
    var overlay = document.querySelector(".gw-overlay");
    overlay.classList.toggle("gw-is-open");
    modalOrcamento.classList.toggle("gw-is-open");
    modalOrcamento.classList.toggle("gw-slide-top-in");
  });
}

// Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector(".gw-scroll-down");
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("gw-fade-out");
  },
  offset: "70%",
});


// modo dark