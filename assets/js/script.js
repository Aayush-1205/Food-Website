'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

let promoProducts = [
  { name: "Healthy Eating", paragraph: "Food is any substance consumed to provide nutritional support for an organism.", image: "./assets/images/promo-5.png" },
  { name: "Western Breakfast", paragraph: "Food is any substance consumed to provide nutritional support for an organism.", image: "./assets/images/promo-4.png" },
  { name: "Spicy Chicken", paragraph: "Food is any substance consumed to provide nutritional support for an organism.", image: "./assets/images/promo-3.png" },
  { name: "Banchan (side dish)", paragraph: "Food is any substance consumed to provide nutritional support for an organism.", image: "./assets/images/promo-2.png" },
  { name: "Diane Steak", paragraph: "Food is any substance consumed to provide nutritional support for an organism.", image: "./assets/images/promo-1.png" },
];

let testi = [
  { name: "Robert William", title: "CEO Kingfisher", text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product"', image: "./assets/images/avatar-1.jpg", alt: "Robert William" },
  { name: "Thomas Josef", title: "CEO Getforce", text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product"', image: "./assets/images/avatar-2.jpg", alt: "Thomas Josef" },
  { name: "Charles Richard", title: "CEO Angela", text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product"', image: "./assets/images/avatar-3.jpg", alt: "Charles Richard" },
];

function addTesti() {
  let clutter = [];
  testi.forEach(function (testi) {
    clutter += `<li class="testi-item">
    <div class="testi-card">

      <div class="profile-wrapper">

        <figure class="avatar">
          <img src="${testi.image}" width="80" height="80" loading="lazy" alt="${testi.alt}">
        </figure>

        <div>
          <h3 class="h4 testi-name">${testi.name}</h3>

          <p class="testi-title">${testi.title}</p>
        </div>

      </div>

      <blockquote class="testi-text">
        ${testi.text}
      </blockquote>

      <div class="rating-wrapper">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
      </div>

    </div>
  </li>`;

  document.querySelector('.testi-list').innerHTML = clutter;
  })
}

function addPromo() {
  let clutter = [];
  promoProducts.forEach(function(promoProducts){
    clutter += `<li class="promo-item">
    <div class="promo-card">

      <div class="card-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none"
          xmlns:v="https://vecta.io/nano">
          <g clip-path="url(#A)" fill="#ff9d2d">
            <path
              d="M43.033.002L42.563 0c-7.896 0-15.555 1.546-22.767 4.597-6.965 2.946-13.22 7.163-18.592 12.535l-.043.044c-1.548 1.551-1.546 4.075.004 5.625l2.256 2.257c.754.754 1.76 1.17 2.832 1.17h.001a3.98 3.98 0 0 0 2.834-1.171l.04-.04a1.7 1.7 0 0 1 1.21-.499h.021a1.73 1.73 0 0 1 1.238.537l4.596 4.807c.466.488 1.095.761 1.768.768h.028c.663 0 1.285-.258 1.756-.729.975-.975.993-2.58.04-3.577l-3.308-3.46c-.295-.309-.311-.797-.035-1.087a.76.76 0 0 1 .554-.239h.001a.76.76 0 0 1 .553.236l1.041 1.09c.95.994 2.49 1.079 3.507.195a2.5 2.5 0 0 0 .865-1.787 2.53 2.53 0 0 0-.696-1.858l-.755-.79a1.72 1.72 0 0 1-.454-1.511c.099-.549.444-1.003.944-1.245a46.86 46.86 0 0 1 20.561-4.69l.419.002c1.07.011 2.07-.399 2.827-1.149a3.96 3.96 0 0 0 1.179-2.828V3.984A4 4 0 0 0 43.033.002h0zm2.2 7.199a2.21 2.21 0 0 1-.659 1.581 2.18 2.18 0 0 1-1.575.641l-.435-.002a48.6 48.6 0 0 0-21.325 4.865A3.44 3.44 0 0 0 19.33 16.8a3.46 3.46 0 0 0 .912 3.037l.756.79a.76.76 0 0 1-.052 1.106c-.303.263-.789.226-1.085-.083l-1.041-1.089a2.53 2.53 0 0 0-1.822-.779 2.5 2.5 0 0 0-1.827.784c-.929.976-.912 2.518.037 3.512l3.308 3.46a.82.82 0 0 1-.012 1.121.74.74 0 0 1-.523.215c-.197-.002-.381-.083-.519-.226l-4.596-4.808a3.47 3.47 0 0 0-2.487-1.08h-.042a3.44 3.44 0 0 0-2.449 1.011l-.014.014-.009.009-.022.022c-.423.423-.988.656-1.591.656s-1.168-.232-1.591-.655L2.404 21.56a2.23 2.23 0 0 1 0-3.145l.042-.042A56.54 56.54 0 0 1 20.48 6.214c6.994-2.958 14.423-4.458 22.083-4.458l.454.002h0a2.24 2.24 0 0 1 2.215 2.226v3.218zm-.908 6.202a.88.88 0 0 0-.878.878v43.292c0 .412-.314.574-.411.614s-.433.147-.724-.144L11.436 27.166a.88.88 0 0 0-1.242 0 .88.88 0 0 0 0 1.242l30.877 30.877c.469.469 1.073.715 1.696.715.314 0 .633-.063.942-.19a2.38 2.38 0 0 0 1.494-2.237V14.281a.88.88 0 0 0-.878-.878h0zm-6.657-1.125c-2.112 0-3.83 1.718-3.83 3.83s1.718 3.83 3.83 3.83 3.83-1.718 3.83-3.83-1.718-3.83-3.83-3.83zm0 5.903c-1.143 0-2.074-.93-2.074-2.074s.93-2.073 2.074-2.073 2.073.93 2.073 2.073-.93 2.074-2.073 2.074zM22.575 34.938a3.55 3.55 0 0 0 3.547 3.547 3.55 3.55 0 0 0 3.547-3.547 3.55 3.55 0 0 0-3.547-3.547 3.55 3.55 0 0 0-3.547 3.547h0zm3.547-1.791c.987 0 1.791.803 1.791 1.791s-.803 1.791-1.791 1.791-1.791-.803-1.791-1.791.804-1.791 1.791-1.791zm12.81-2.283a3.68 3.68 0 0 0-3.672 3.672 3.68 3.68 0 0 0 3.672 3.672 3.68 3.68 0 0 0 3.672-3.672 3.68 3.68 0 0 0-3.672-3.672zm0 5.588a1.92 1.92 0 0 1-1.916-1.915 1.92 1.92 0 0 1 1.916-1.916 1.92 1.92 0 0 1 1.915 1.916 1.92 1.92 0 0 1-1.915 1.915zm2.97 8.702a3.92 3.92 0 0 0-3.913-3.912h-.645a3.92 3.92 0 0 0-3.913 3.912 1.7 1.7 0 0 0 1.697 1.697h.23l-.037.687a1.57 1.57 0 0 0 .427 1.16c.294.31.709.488 1.136.488h1.562a1.57 1.57 0 0 0 1.136-.488c.294-.31.45-.733.428-1.16l-.037-.687h.23a1.7 1.7 0 0 0 1.697-1.697h0zm-2.515-.059a1.2 1.2 0 0 0-.87.374c-.225.238-.345.562-.327.889l.057 1.073h-1.16l.057-1.073a1.2 1.2 0 0 0-1.198-1.263h-.758a2.16 2.16 0 0 1 2.156-2.097h.645a2.16 2.16 0 0 1 2.155 2.097h-.758zm-9.689-26.32a4.46 4.46 0 0 0-4.454 4.455v.76a4.46 4.46 0 0 0 4.454 4.455c1.017 0 1.844-.827 1.844-1.843v-.437l.975.052a1.69 1.69 0 0 0 1.251-.46c.335-.318.526-.764.526-1.225v-1.841c0-.461-.192-.908-.526-1.225s-.792-.485-1.251-.46l-.975.052v-.437c0-1.017-.827-1.844-1.844-1.844zm2.84 3.986v1.697l-1.43-.076c-.344-.017-.682.107-.931.343s-.392.569-.392.912v.963c0 .049-.039.087-.087.087A2.7 2.7 0 0 1 27 23.99v-.761a2.7 2.7 0 0 1 2.698-2.698c.048 0 .087.039.087.087v.964c0 .343.143.676.392.912a1.26 1.26 0 0 0 .931.343l1.43-.076z" />
          </g>
          <defs>
            <clipPath id="A">
              <path fill="#fff" d="M0 0h60v60H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <h3 class="h3 card-title">${promoProducts.name}</h3>

      <p class="card-text">
        ${promoProducts.paragraph}
      </p>

      <img src="${promoProducts.image}" width="300" height="300" loading="lazy" alt="Maxican Pizza"
        class="w-100 card-banner">

    </div>
  </li>`;
    
  document.querySelector('.promo-list').innerHTML = clutter;
  });
};

addPromo();
addTesti();