/*menu-show-hidden*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*menu-show*/
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*menu-hidden*/
if(navClose) {
  navClose.addEventListener('click' , () => {
    navMenu.classList.remove('show-menu')
  })
}

/*remove-menu-mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*acordion-skills*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  } 
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/*qualification.tabs*/
function showSection(sectionId) {
  const sections = document.querySelectorAll('.qualification__content');

  sections.forEach(section => {
    if (section.getAttribute('id') === sectionId) {
      section.classList.add('qualification__active');
    } else {
      section.classList.remove('qualification__active');
    }
  });
}

const tabs = document.querySelectorAll('.qualification__button');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const sectionId = tab.getAttribute('data-target');
    showSection(sectionId);
  });
});

/*services-modal*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
     modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

/*portfolio swiper*/
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});


/**/

/**/

/**/

/**/

/**/

/**/

/**/

/**/

