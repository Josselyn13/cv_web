
/* Animación */

let i = 0;
let j = 0;
const puestos = ["Desarrolladora Java Full Stack   ", "Lic. en Ciencias de la Tierra   "]
let puesto = puestos[j];

setTimeout(escritura,4500)

function escritura() {
  if (i < puesto.length) {
    document.querySelector(".puesto-dev").innerHTML += puesto.charAt(i);
    i++;
    setTimeout(escritura, 150);
  }
  else{
    borrar()
  }
}

function borrar() {
  if (i > 0 ) {
    puesto = puesto.slice(0,-1)
    document.querySelector(".puesto-dev").innerHTML = puesto;
    i--;
    setTimeout(borrar, 50);
  }
  else{
    if(j == puestos.length - 1){
      j = 0;
    }else{
      j++;
    } 
    puesto = puestos[j]
    escritura()
  }
}


/* contenido cv */
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
