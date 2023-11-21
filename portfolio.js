const letters = document.querySelectorAll(".lettre");
const loader = document.querySelector(".loader");
const nav = document.getElementById("nav");

const anime_text = document.querySelector(".animate-text");
const prenom = document.getElementById("name");
const surname = document.getElementById("surname");
const cv = document.getElementById("cv");

const container = document.getElementById("container");
const video_anime = document.getElementById("video");

const experience = document.getElementById("experience");
console.log(experience);


function revealLetters() {
  letters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.transition = 'opacity 0.4s, transform 0.4s';
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0)';
    }, 80 * index);
  });
}

// Lance la révélation de lettres lorsque la page est chargée
window.addEventListener('load', () => {
  //setup ecran
  nav.style.top = '-100%';
  nav.style.transition = '1s';
  anime_text.style.opacity = '0';
  prenom.style.opacity = '0';
  prenom.style.transform = 'translateY(100%)';
  surname.style.opacity = '0';
  surname.style.transform = 'translateY(100%)';
  cv.style.opacity = '0';
  // cv.style.transform = 'translateY(100%)';
  container.style.opacity = '0';
  video_anime.style.opacity = '0';
  video_anime.style.transform = 'translateY(100%)';

  // experience.style.marginTop = (window.innerHeight + 100) + 'px';

  //apparition progressive
  // loader.style.display = 'none';
  window.scrollTo(0, 0);
  //empécher la souris
  document.addEventListener('mousemove', (e) => {
    e.preventDefault();
  });

  //empecher le scroll
  document.body.style.overflow = 'hidden';

  //reveal des lettres
  revealLetters();

  //apparition du rond
  setTimeout(() => {
    ball.style.transform = 'scale(70)';
  }, 2000);
  //retour du rond
  ball.addEventListener('transitionend', () => {
    if (ball.style.transform === 'scale(70)') {
      ball.style.transform = 'scale(0)';
    }
  }, 3000);

  //disparition des lettres
  setTimeout(() => {
      letters.forEach((letter) => {
        letter.style.display = 'none';
      });
  }, 4000)

  //disparition loader
  setTimeout(() => {
    loader.style.display = 'none';
  }, 5700)

  //apparition name et surname
  setTimeout(() => {
    prenom.style.transition = 'opacity 0.4s, transform 0.4s';
    prenom.style.opacity = '1';
    prenom.style.transform = 'translateY(0)';
  },5700)
  setTimeout(() => {
    surname.style.transition = 'opacity 0.4s, transform 0.4s';
    surname.style.opacity = '1';
    surname.style.transform = 'translateY(0)';
  },5800)
  setTimeout(() => {
    nav.style.top = '0';
  },5800)
  setTimeout(() => {
    anime_text.style.opacity = '1';
  },6800)
  setTimeout(() => {
    cv.style.transition = 'opacity 1s';
    cv.style.opacity = '1';
  },7100)
  setTimeout(() => {
    video_anime.style.transition = 'opacity 2s, transform 1s';
    video_anime.style.opacity = '1';
    video_anime.style.transform = 'translateY(0)';
  },7300)
  setTimeout(() => {
    container.style.transition = 'opacity 3s, transform 1s';
    container.style.opacity = '1';
  },7500)
  setTimeout(() => {
    document.removeEventListener('mousemove', (e) => {
      e.preventDefault();
    });
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  },8000)


});




const ball = document.querySelector('.ball');




window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });


// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
document.body.insertAdjacentHTML(
    "afterbegin",
    "<div class='circle1' id='circle'> </div><div class='circle2' id='circle'>"
  );
  
  // Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
  const circle = document.querySelectorAll("#circle");
  circle.forEach((c) => {
    if (window.innerWidth > 500){
      window.addEventListener("mousemove", (e) => {
        c.style.display = 'block';
        c.style.left = e.pageX + "px";
        c.style.top = e.pageY + "px";
    });
    }

  });



const divAModifier = document.querySelector('.circle2');
const Links = document.querySelectorAll('a');

Links.forEach(link => {
link.addEventListener('mouseover', () => {
    divAModifier.style.width = '8vw'; /* Nouvelle taille au survol */
    divAModifier.style.height = '8vw'; /* Nouvelle taille au survol */
});

link.addEventListener('mouseout', () => {
    divAModifier.style.width = '2vw'; /* Retour à la taille par défaut */
    divAModifier.style.height = '2vw'; /* Retour à la taille par défaut */
});
});


const root = document.documentElement;

var boton1 = document.getElementById('BUTTON1');
var boton2 = document.getElementById('BUTTON2');
var body = document.querySelector('body');

boton1.addEventListener('click', () => {
  boton1.classList.toggle('active');
  boton2.classList.toggle('active');
  body.classList.toggle('dark');
  if (body.classList.contains('dark')){
    root.style.setProperty('--couleur-secondaire', 'black');
    root.style.setProperty('--couleur-principal', 'white');
  }
  else{
    root.style.setProperty('--couleur-secondaire', 'white');
    root.style.setProperty('--couleur-principal', 'black');
  }
})

boton2.addEventListener('click', () => {
  boton1.classList.toggle('active');
  boton2.classList.toggle('active');
  body.classList.toggle('dark');
  if (body.classList.contains('dark')){
    root.style.setProperty('--couleur-secondaire', 'black');
    root.style.setProperty('--couleur-principal', 'white');
  }
  else{
    root.style.setProperty('--couleur-secondaire', 'white');
    root.style.setProperty('--couleur-principal', 'black');
  }
});





const burger = document.getElementById("BURGER");
const navMax = document.querySelector(".nav-max");
const burgerTop = document.querySelector(".burger-top");
const burgerBottom = document.querySelector(".burger-bottom");
const burgerMiddle = document.querySelector(".burger-middle");

burger.addEventListener("click", () => {
  burger.classList.toggle('burger-active');
  if (burger.classList.contains('burger-active')){
    navMax.style.top = '0';
    burgerTop.style.transform = "rotate(45deg)";
    burgerBottom.style.transform = "rotate(-45deg)";
    burgerMiddle.style.opacity = '0';
  }
  else{
    navMax.style.top = '-100vh';
    burgerTop.style.transform = "rotate(0)";
    burgerBottom.style.transform = "rotate(0)";
    burgerMiddle.style.opacity = '1';
  }
})

const link = document.querySelectorAll(".link");

link.forEach(l => {
  l.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    navMax.style.top = '-100vh';
    burgerTop.style.transform = "rotate(0)";
    burgerBottom.style.transform = "rotate(0)";
    burgerMiddle.style.opacity = '1';
  })
})











const video_container = document.querySelector("#video-container");
const video = document.querySelector("#video");
const scroll_discover = document.querySelector("#container")
const videoContainer = document.getElementById('video-container');
const startTransform = 'translate3d(15%, -10%, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
const endTransform = 'translate3d(0%, 18%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
const startOpacity = 0.8;
const endOpacity = 1;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function updateStyles() {
  if (window.innerWidth > 1100){
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const videoContainerTop = videoContainer.getBoundingClientRect().top;
  
    let progress;
  
    if (scrollY > videoContainerTop) {
      progress = Math.min((scrollY - videoContainerTop) / windowHeight, 1);
    } else {
      progress = 0;
    }
  
    progress = easeOutCubic(progress); // Appliquer la fonction de lissage
  
    const interpolatedTransform = `translate3d(${(1 - progress) * 15}%, ${progress * 18}%, 0px) scale3d(${(1 - progress) * 0.7 + progress * 1}, ${(1 - progress) * 0.7 + progress * 1}, 1)`;
    const interpolatedOpacity = startOpacity + (endOpacity - startOpacity) * progress;
  
    videoContainer.style.transform = interpolatedTransform;
    videoContainer.style.opacity = interpolatedOpacity;
  }

}

window.addEventListener('scroll', updateStyles);
updateStyles();




const elementToAnimate = document.getElementById('container');
let lastScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  const scrollChange = currentScrollPosition - lastScrollPosition;

  // Diminuer progressivement l'opacité lors du défilement vers le bas
  if (window.scrollY < 500){
        if (scrollChange > 0) {
        scroll_discover.style.opacity = Math.max(0, parseFloat(window.getComputedStyle(document.getElementById("container")).getPropertyValue("opacity")) - 0.05);
    }
    // Augmenter progressivement l'opacité lors du défilement vers le haut
    else if (scrollChange < 0) {
        scroll_discover.style.opacity = Math.min(1, parseFloat(window.getComputedStyle(document.getElementById("container")).getPropertyValue("opacity")) + 0.05);
    }
    lastScrollPosition = currentScrollPosition;
  }
  else{
    scroll_discover.style.opacity = 0;
  }

  if (window.scrollY < 30){
    scroll_discover.style.opacity = 1;
  }


  
});











    
const txts=document.querySelector(".animate-text").children, txtsLen=txts.length;
let index=0;
const textInTimer=3000,
 textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
    txts[i].classList.remove("text-in","text-out");  
}
txts[index].classList.add("text-in");

setTimeout(function(){
    txts[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){

if(index == txtsLen-1){
   index=0;
 }
else{
    index++;
  }
 animateText();
},textInTimer); 
}

window.onload=animateText;














// Choisissez vos propres labels pour chaque barre
const histogramValues = [
  { value: 8, label: 'HTML CCS SCSS JS' },
  { value: 7, label: 'PHP' },
  { value: 6, label: 'SQL' },
  { value: 10, label: 'Python' },
  { value: 8, label: 'Java' },
  { value: 4, label: 'C' },
  { value: 5, label: 'Shell' },
  { value: 3, label: 'Prolog' },
];

// wmax value of the histogram array
const maxValue = Math.max(...histogramValues.map(item => item.value));
// turn histogram numbers into histogram li items
const histogram = histogramValues.reduce((acc, { value, label }) => {
  // getting a percentage of the max
  const height = (value / maxValue) * 100;
  // adding 1px so there's an indication of 0
  return (
    acc +
    `<li class="histogramItem" style="height: calc(${height}% - 50px)">
      <span class="histogramLabel">${label}</span>
    </li>`
  );
}, '');

// inject into dom
const soldChartEl = document.getElementById('soldChart');

soldChartEl.innerHTML = histogram;








// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


const experience_txt = document.querySelector('#experience');
experience_txt.style.transform = 'translateY(100%)';
experience_txt.style.opacity = '0';

const experience_carrousel = document.querySelector('#experience_carrousel');
experience_carrousel.style.transform = 'translateY(100%)';
experience_carrousel.style.opacity = '0';

const school1 = document.querySelector('.school1');
school1.style.transform = 'translateY(-100%)';
school1.style.opacity = '0';

const school2 = document.querySelector('.school2');
school2.style.transform = 'translateY(-100%)';
school2.style.opacity = '0';

const school3 = document.querySelector('.school3');
school3.style.transform = 'translateY(-100%)';
school3.style.opacity = '0';

const rightPanel = document.querySelector('.right-panel');
rightPanel.style.transform = 'translateY(-100%)';
rightPanel.style.opacity = '0';

const projTextSchool = document.querySelector('.proj-text-school');
projTextSchool.style.transform = 'translateY(100%)';
projTextSchool.style.opacity = '0';

const projTextProject = document.querySelector('.proj-text-project');
projTextProject.style.transform = 'translateY(100%)';
projTextProject.style.opacity = '0';

const blocHorizontal = document.querySelector('.boite-projet');
blocHorizontal.style.opacity = '0';

const skillsText = document.querySelector('.skills-text');
skillsText.style.transform = 'translateY(100%)';
skillsText.style.opacity = '0';

const french = document.querySelector('.french');
french.style.width = '0px';
french.style.height = '0px';

const english = document.querySelector('.english');
english.style.width = '0px';
english.style.height = '0px';

const spanish = document.querySelector('.spanish');
spanish.style.width = '0px';
spanish.style.height = '0px';

const graph = document.querySelector('.graph');
graph.style.opacity = '0';

const logiciel = document.querySelector('.logiciel');
logiciel.style.opacity = '0';

const txtContacts = document.querySelector('.txt-contacts');
txtContacts.style.transform = 'translateY(100%)';
txtContacts.style.opacity = '0';

const txtBased = document.querySelector('.txt-based');
txtBased.style.transform = 'translateY(100%)';
txtBased.style.opacity = '0';

const email = document.querySelector('.email');
email.style.transform = 'translateX(100%)';
email.style.opacity = '0';

const num = document.querySelector('.num');
num.style.transform = 'translateX(100%)';
num.style.opacity = '0';

const linkedin = document.querySelector('.linkedin');
linkedin.style.transform = 'translateX(100%)';
linkedin.style.opacity = '0';


// Fonction pour afficher les éléments lorsqu'ils deviennent visibles
function handleScroll() {
  if (isElementInViewport(experience_txt)) {
    experience_txt.style.transition = 'opacity 0.2s , transform 0.2s';
    experience_txt.style.opacity = '1';
    experience_txt.style.transform = 'translateY(0)';
    setTimeout(() => {
      experience_carrousel.style.transition = 'opacity 0.2s, transform 0.2s';
      experience_carrousel.style.opacity = '1';
      experience_carrousel.style.transform = 'translateY(0)';
    }, 100)
  }
  if (isElementInViewport(school1)){
    school1.style.transition = 'opacity 0.2s , transform 0.2s';
    school1.style.opacity = '1';
    school1.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(school2)){
    school2.style.transition = 'opacity 0.2s , transform 0.2s';
    school2.style.opacity = '1';
    school2.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(school3)){
    school3.style.transition = 'opacity 0.2s , transform 0.2s';
    school3.style.opacity = '1';
    school3.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(rightPanel)){
    rightPanel.style.transition = 'opacity 0.2s , transform 0.2s';
    rightPanel.style.opacity = '1';
    rightPanel.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(projTextSchool)){
    projTextSchool.style.transition = 'opacity 0.2s , transform 0.2s';
    projTextSchool.style.opacity = '1';
    projTextSchool.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(projTextProject)){
    projTextProject.style.transition = 'opacity 0.2s , transform 0.2s';
    projTextProject.style.opacity = '1';
    projTextProject.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(blocHorizontal)){
    blocHorizontal.style.transition = 'opacity 0.2s';
    blocHorizontal.style.opacity = '1';
  }
  if (isElementInViewport(skillsText)){
    skillsText.style.transition = 'opacity 0.2s , transform 0.2s';
    skillsText.style.opacity = '1';
    skillsText.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(french)){
    french.style.transition = '0.4s'
    french.style.width = '18vw';
    french.style.height = '18vw';
  }
  if (isElementInViewport(english)){
    english.style.transition = '0.4s'
    english.style.width = '14vw';
    english.style.height = '14vw';
  }
  if (isElementInViewport(spanish)){
    spanish.style.transition = '0.4s'
    spanish.style.width = '11vw';
    spanish.style.height = '11vw';
  }
  if (isElementInViewport(graph)){
    graph.style.transition = 'opacity 0.2s';
    graph.style.opacity = '1';
  }
  if (isElementInViewport(graph)){
    logiciel.style.transition = 'opacity 0.2s';
    logiciel.style.opacity = '1';
  }
  if (isElementInViewport(txtContacts)){
    txtContacts.style.transition = 'opacity 0.2s , transform 0.2s';
    txtContacts.style.opacity = '1';
    txtContacts.style.transform = 'translateY(0)';
  }
  if (isElementInViewport(txtBased)){
    txtBased.style.transition = 'opacity 0.2s , transform 0.2s';
    txtBased.style.opacity = '1';
    txtBased.style.transform = 'translateY(0)';   
  }
  if (isElementInViewport(txtContacts)){
    email.style.transition = 'opacity 0.2s , transform 0.2s';
    email.style.opacity = '1';
    email.style.transform = 'translateX(0)';   
  }
  if (isElementInViewport(txtContacts)){
    num.style.transition = 'opacity 0.2s , transform 0.2s';
    num.style.opacity = '1';
    num.style.transform = 'translateX(0)';   
  }
  if (isElementInViewport(txtContacts)){
    linkedin.style.transition = 'opacity 0.2s , transform 0.2s';
    linkedin.style.opacity = '1';
    linkedin.style.transform = 'translateX(0)';   
  }


  if (!isElementInViewport(surname)){
    about.style.transition = 'opacity 0.2s';
    about.style.opacity = '1';   
  }

  if (isElementInViewport(surname)){
    about.style.transition = 'opacity 0.2s';
    about.style.opacity = '0';
  }


}

// Ajouter un gestionnaire d'événement de défilement
window.addEventListener('scroll', handleScroll);

// Appeler la fonction handleScroll une fois au chargement initial pour vérifier les éléments déjà visibles
handleScroll();












document.addEventListener('DOMContentLoaded', function () {
  // Sélectionnez tous les liens de navigation avec la classe "nav-link"
  var navLinks = document.querySelectorAll('.nav-link');

  // Parcourez chaque lien et ajoutez un gestionnaire d'événements au clic
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Empêche le comportement par défaut du lien
      e.preventDefault();

      // Récupère l'ID de la section cible depuis l'attribut href
      var targetId = this.getAttribute('href').substring(1);

      // Récupère l'élément cible par son ID
      var targetElement = document.getElementById(targetId);

      // Calcule la position d'arrivée en soustrayant 200px
      var offsetPosition = targetElement.offsetTop - 100;

      // Utilise window.scrollTo pour déplacer la page
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Ajoute un défilement fluide
      });
    });
  });
});























