const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
const scrollDown = document.querySelector('.arrow-down');
const links = document.querySelectorAll('.nav-link');

if(links.length) {
   links.forEach((link) => {
      link.addEventListener('click', (e) => {
         links.forEach((link) => {
            link.classList.remove('active');
         })
         // e.preventDefault();
         link.classList.add('active');
      });
   });
}

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

scrollDown.addEventListener('click', () => {
   window.scrollBy(0,585)
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
AOS.init();
  
    







 





  